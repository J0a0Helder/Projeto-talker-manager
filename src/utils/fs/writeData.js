const fs = require('fs/promises');

const writeFile = async (data, path) => {
  try {
    await fs.writeFile(path, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.log('Error on write file');
    console.log(error.message);
    return false;
  }
};

module.exports = writeFile;