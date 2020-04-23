const fs = require('fs');

const manager = {
  write: (path, content) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, content, (err) => {
        if (err) reject(err);
        resolve(path);
      });
    })
  },

  mkdir: (path) => {
    return new Promise((resolve, reject) => {
      fs.mkdir(path, { recursive: true }, (err) => {
        if (err) reject(err);
        resolve(path);
      });
    });
  },

  load: (path) => {
    return new Promise((resolve, reject) => {
      fs.readFile(path, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }
};

module.exports = manager;
