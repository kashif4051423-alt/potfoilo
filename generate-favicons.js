const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// SVG content with optimized KA letters
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <!-- Background -->
  <rect width="256" height="256" fill="#121f41"/>
  
  <!-- K in Red -->
  <g transform="translate(128, 128)">
    <!-- K Letter - Red (#FF0000) -->
    <g fill="#FF0000">
      <!-- K vertical stem -->
      <rect x="-48" y="-75" width="26" height="150" rx="9"/>
      <!-- K top diagonal -->
      <path d="M -22 -52 L 55 -8 L 33 14 L -22 -30 Z"/>
      <!-- K bottom diagonal -->
      <path d="M -22 32 L 55 76 L 33 98 L -22 54 Z"/>
    </g>
    
    <!-- A in Black - positioned right of K -->
    <g fill="#000000">
      <!-- A left diagonal stroke -->
      <path d="M 48 76 L 82 -76 L 104 -76 L 138 76" fill="none" stroke="#000000" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- A horizontal crossbar -->
      <rect x="56" y="8" width="68" height="22" rx="9" fill="#000000"/>
    </g>
  </g>
</svg>`;

const sizes = [16, 32, 48, 180];
const outputDir = './public';

async function generateFavicons() {
  try {
    console.log('🎨 Generating optimized favicons...\n');
    
    for (const size of sizes) {
      const outputPath = path.join(outputDir, `favicon-${size}x${size}.png`);
      
      await sharp(Buffer.from(svgContent))
        .resize(size, size, {
          fit: 'contain',
          background: { r: 18, g: 31, b: 65, alpha: 1 }
        })
        .png()
        .toFile(outputPath);
      
      console.log(`✅ Generated favicon-${size}x${size}.png`);
    }
    
    // Also generate the main favicon.ico sized version (32x32)
    await sharp(Buffer.from(svgContent))
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 18, g: 31, b: 65, alpha: 1 }
      })
      .png()
      .toFile(path.join(outputDir, 'favicon.png'));
    
    console.log(`✅ Generated favicon.png (32x32)`);
    
    console.log('\n🎉 All favicons generated successfully!');
    console.log('\n📂 Generated files in ./public/');
    console.log('   - favicon-16x16.png');
    console.log('   - favicon-32x32.png');
    console.log('   - favicon-48x48.png');
    console.log('   - favicon-180x180.png');
    console.log('   - favicon.png (32x32 backup)');
    
  } catch (error) {
    console.error('❌ Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
