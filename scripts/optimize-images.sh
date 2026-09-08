#!/bin/bash

# ==============================================================================
# High-Ratio Image Optimization Script for SEW THE SOUND
# Uses 'sips' (native macOS tool) to compress and RESIZE images.
# Targets < 1-2MB per file to ensure GitHub compatibility and fast loading.
# ==============================================================================

# Get the directory of the script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
PUBLIC_DIR="$PROJECT_ROOT/public"

echo "🚀 Starting asset optimization in $PUBLIC_DIR..."

# --- Image Optimization (JPG, PNG) ---
find -E "$PUBLIC_DIR" -type f -regex ".*\.(jpg|jpeg|png|JPG|JPEG|PNG)" | while read -r img; do
    size_bytes=$(stat -f%z "$img")
    size_mb=$(echo "scale=2; $size_bytes/1048576" | bc)

    if (( $(echo "$size_bytes > 524288" | bc -l) )); then
        echo "🖼️  Optimizing image: $(basename "$img") ($size_mb MB)"
        sips -s formatOptions 70 --resampleWidth 1920 "$img" &> /dev/null
        new_size=$(echo "scale=2; $(stat -f%z "$img")/1048576" | bc)
        echo "   ✅ Reduced to: $new_size MB"
    fi
done

# --- Video Optimization (MP4, MOV) ---
find -E "$PUBLIC_DIR" -type f -regex ".*\.(mp4|mov|MP4|MOV)" | while read -r vid; do
    size_bytes=$(stat -f%z "$vid")
    size_mb=$(echo "scale=2; $size_bytes/1048576" | bc)

    # We optimize if the file is > 10MB to ensure GitHub doesn't struggle
    if (( $(echo "$size_bytes > 10485760" | bc -l) )); then
        echo "🎥 Optimizing video: $(basename "$vid") ($size_mb MB)"
        temp_vid="${vid}.tmp.mp4"
        
        # Preset1280x720 is usually a good balance for web
        avconvert --preset Preset1280x720 --source "$vid" --output "$temp_vid" &> /dev/null
        
        if [ -f "$temp_vid" ]; then
            mv "$temp_vid" "$vid"
            new_size=$(echo "scale=2; $(stat -f%z "$vid")/1048576" | bc)
            echo "   ✅ Reduced to: $new_size MB"
        else
            echo "   ⚠️  Could not optimize $(basename "$vid")"
        fi
    fi
done

echo "✨ Asset optimization complete!"
