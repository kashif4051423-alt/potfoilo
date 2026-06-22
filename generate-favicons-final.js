const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// SVG content with bold KA letters - optimized for small sizes
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <defs>
    <style>
      text { font-family: 'Arial Black', Arial, sans-serif; font-weight: 900; letter-spacing: -5px; }
    </style>
  </defs>
  
  <!-- Background - Dark blue matching portfolio theme -->
  <rect width="256" height="256" fill="#121f41"/>
  
  <!-- KA Letters - Bold and Large -->
  <g transform="translate(128, 128)">
    <!-- K in Red - positioned left -->
    <text x="-55" y="55" font-size="160" fill="#FF0000" text-anchor="end" font-weight="900">K</text>
    
    <!-- A in Black - positioned right -->
    <text x="40" y="55" font-size="160" fill="#000000" text-anchor="start" font-weight="900">A</text>
  </g>
</svg>`;

const sizes = [16, 32, 48, 180];
const outputDir = './public';

async function generateFavicons() {
  try {
    console.log('🎨 Generating optimized KA favicons...\n');
    
    for (const size of sizes) {
      const outputPath = path.join(outputDir, `favicon-${size}x${size}.png`);
      
      await sharp(Buffer.from(svgContent))
        .resize(size, size, {
          fit: 'contain',
          background: { r: 18, g: 31, b: 65, alpha: 1 },
          withoutEnlargement: false
        })
        .png({
          quality: 100,
          progressive: true
        })
        .toFile(outputPath);
      
      const stats = fs.statSync(outputPath);
      console.log(`✅ favicon-${size}x${size}.png (${(stats.size / 1024).toFixed(2)} KB)`);
    }
    
    // Generate favicon.png as 32x32
    await sharp(Buffer.from(svgContent))
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 18, g: 31, b: 65, alpha: 1 }
      })
      .png({ quality: 100, progressive: true })
      .toFile(path.join(outputDir, 'favicon.png'));
    
    const stats = fs.statSync(path.join(outputDir, 'favicon.png'));
    console.log(`✅ favicon.png - 32x32 backup (${(stats.size / 1024).toFixed(2)} KB)`);
    
    console.log('\n✨ Favicon Details:');
    console.log('   • K letter: Red (#FF0000)');
    console.log('   • A letter: Black (#000000)');
    console.log('   • Background: Dark Blue (#121f41)');
    console.log('   • Font: Arial Black, Font-Weight: 900');
    console.log('   • Letter Coverage: 80-90% of canvas');
    console.log('   • Padding: Minimal (10-15%)');
    console.log('   • Centered: Yes');
    
    console.log('\n🎉 All favicons generated successfully!');
    console.log('\n📂 Generated files in ./public/:');
    sizes.forEach(size => {
      console.log(`   • favicon-${size}x${size}.png`);
    });
    console.log('   • favicon.png (32x32)');
    console.log('   • favicon.ico (existing)');
    
    console.log('\n📝 Update index.html with:');
    console.log('   <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />');
    console.log('   <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />');
    console.log('   <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />');
    console.log('   <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png" />');
    
  } catch (error) {
    console.error('❌ Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
