const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dirname = __dirname; // Mendefinisikan 'dirname' yang hilang

const target = path.resolve(dirname, 'src/public/images/heros');
const destination = path.resolve(dirname, 'dist/images/heros');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
  sharp(`${target}/${image}`)
    .resize(800)
    .toFile(path.resolve(__dirname, `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`));

  // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
  sharp(`${target}/${image}`)
    .resize(480)
    .toFile(path.resolve(__dirname, `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`));
});
