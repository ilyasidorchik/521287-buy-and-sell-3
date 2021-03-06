'use strict';

const {readFile} = require(`fs`).promises;

const FILENAME = `mocks.json`;

let data = null;

const getMockData = async () => {
  if (data !== null) {
    return data;
  }

  try {
    const fileContent = await readFile(FILENAME);
    data = JSON.parse(fileContent);
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }

  return data;
};

module.exports = getMockData;
