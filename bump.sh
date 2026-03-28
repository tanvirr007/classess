#!/bin/bash

FILE="src/version.json"

if [ ! -f "$FILE" ]; then
    FILE=$(ls src/ver*.json 2>/dev/null | head -n 1)
    if [ -z "$FILE" ]; then
        echo "Error: version.json not found in src/ folder"
        exit 1
    fi
fi

JQ_BIN="jq"

check_dependency() {
    if command -v "$1" &> /dev/null; then
        return 0
    fi

    if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
        if [ "$1" == "jq" ]; then
            WIN_LINK="$LOCALAPPDATA/Microsoft/WinGet/Links/jq.exe"
            if [ -f "$WIN_LINK" ]; then
                JQ_BIN="$WIN_LINK"
                return 0
            fi
            
            WIN_PKG=$(cmd.exe /c "dir /s /b %LOCALAPPDATA%\Microsoft\WinGet\jq.exe" 2>/dev/null | head -n 1 | tr -d '\r')
            if [ -f "$WIN_PKG" ]; then
                JQ_BIN="$WIN_PKG"
                return 0
            fi
        fi
    fi

    echo ">>> $1 not found. Attempting to install..."
    if command -v apt-get &> /dev/null; then
        sudo apt-get update && sudo apt-get install -y "$1"
    elif command -v pacman &> /dev/null; then
        sudo pacman -Sy --noconfirm "$1"
    elif command -v brew &> /dev/null; then
        brew install "$1"
    elif command -v pkg &> /dev/null; then
        pkg install "$1"
    elif command -v dnf &> /dev/null; then
        sudo dnf install -y "$1"
    elif command -v yum &> /dev/null; then
        sudo yum install -y "$1"
    elif command -v winget.exe &> /dev/null; then
        if [ "$1" == "jq" ]; then
            winget.exe install jqlang.jq
            WIN_PKG=$(cmd.exe /c "dir /s /b %LOCALAPPDATA%\Microsoft\WinGet\jq.exe" 2>/dev/null | head -n 1 | tr -d '\r')
            [ -f "$WIN_PKG" ] && JQ_BIN="$WIN_PKG"
        elif [ "$1" == "git" ]; then
            winget.exe install Git.Git
        else
            winget.exe install "$1"
        fi
    else
        echo "Error: Could not find a supported package manager to install $1"
        echo "Please install $1 manually"
        exit 1
    fi
}

check_dependency "git"
check_dependency "jq"

current_version=$($JQ_BIN -r '.version' "$FILE")
if [ "$current_version" == "null" ] || [ -z "$current_version" ]; then
    echo "Error: Could not find version field in $FILE"
    exit 1
fi

IFS='.' read -r major minor patch <<< "$current_version"

if [ -z "$patch" ]; then
    patch=0
fi

echo ">>> Select release type:"
echo " 1. Major update"
echo " 2. Minor update"
echo " 3. Patch (small changes)"
read -p ">>> Selection (1/2/3): " choice

# Clear the selection menu (5 lines total)
printf "\033[5A\033[J"

case $choice in
    1)
        major=$((major + 1))
        update_type="Major update"
        ;;
    2)
        minor=$((minor + 1))
        update_type="Minor update"
        ;;
    3)
        patch=$((patch + 1))
        update_type="Patch (small changes)"
        ;;
    *)
        echo "Error: Invalid selection"
        exit 1
        ;;
esac

echo ">>> Update type: $update_type"
new_version="$major.$minor.$patch"
new_date=$(date +"%d %B %Y")

echo ">>> Bumped version to: $current_version -> $new_version"
echo ">>> Set release date to: $new_date"

$JQ_BIN --arg v "$new_version" --arg d "$new_date" \
   '.version = $v | .release_date = $d' "$FILE" > "${FILE}.tmp" && mv "${FILE}.tmp" "$FILE"

git add "$FILE"
commit_summary="release: v$new_version"
commit_body=">>> Update type: $update_type
>>> Bumped version to: $current_version -> $new_version
>>> Set release date to: $new_date"

git commit -s -m "$commit_summary" -m "$commit_body"

echo ">>> Successfully updated $FILE and committed with message: '$commit_summary'"
