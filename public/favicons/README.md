# Favicon Generation Instructions

## Required Favicon Files

Create these favicon files in the `/public` directory:

### Core Favicons
- `favicon.ico` (32x32) - Main favicon for browsers
- `favicon-16x16.png` - Small size for browser tabs
- `favicon-32x32.png` - Standard size
- `favicon-96x96.png` - Large size for better quality

### Apple Touch Icons
- `apple-touch-icon.png` (180x180) - iOS home screen icon

### PWA Icons
- `favicon-192x192.png` - Android Chrome icon
- `favicon-512x512.png` - Large PWA icon

### Optional
- `safari-pinned-tab.svg` - Safari pinned tab icon (monochrome SVG)

## Generation Tools

### Online Generators (Recommended)
1. **Favicon.io** - https://favicon.io/
   - Upload your logo/image
   - Automatically generates all required sizes
   - Provides optimized files

2. **RealFaviconGenerator** - https://realfavicongenerator.net/
   - Comprehensive favicon generator
   - Tests on different platforms
   - Generates manifest.json

### Command Line (Advanced)
```bash
# Using ImageMagick
convert logo.png -resize 16x16 favicon-16x16.png
convert logo.png -resize 32x32 favicon-32x32.png
convert logo.png -resize 96x96 favicon-96x96.png
convert logo.png -resize 180x180 apple-touch-icon.png
convert logo.png -resize 192x192 favicon-192x192.png
convert logo.png -resize 512x512 favicon-512x512.png
```

## Source Image Requirements
- **Format**: PNG with transparent background
- **Size**: At least 512x512px (square)
- **Design**: Simple, recognizable at small sizes
- **Colors**: High contrast, avoid fine details

## Current Logo
The current logo is located at `/public/img/logoSky700.png`
Use this as the source for favicon generation.

## After Generation
1. Upload all generated files to `/public/` directory
2. Test favicons on different browsers and devices
3. Validate manifest.json and PWA functionality