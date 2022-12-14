const fs = require('fs/promises');

const readFile = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.log('Error on read file');
    console.log(error.message);
    return false;
  }
};

module.exports = readFile;