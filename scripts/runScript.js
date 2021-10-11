const path = require('path');
const pinFileToIPFS = require('./pinFileToIPFS');

//const filePath = path.join(__dirname, '../assets/nft.jpg');
 const filePath = path.join(__dirname, '../data/metadata.json');

pinFileToIPFS(filePath);
