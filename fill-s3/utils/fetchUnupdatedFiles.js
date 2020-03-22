const fs = require('fs')
const isItUpdated = require('./isItUpdated')

function fetchUnupdatedFiles(uploadedFile) {
  const contents = fs.readFileSync(uploadedFile, 'utf8')

  let lines = contents.split('\n')

  if (lines[0] === '') {
    lines = lines.slice(1)
  }
  for (let i = 0; i < lines.length; i++) {
    lines[i] = lines[i].split(',')
  }

  const unupdatedFiles = [];
  lines.forEach(line => {
    const [path, updatedAt] = line
    if(!isItUpdated(path, updatedAt)) {
      unupdatedFiles.push(path)
    }
  })
  return unupdatedFiles
}

module.exports = fetchUnupdatedFiles
