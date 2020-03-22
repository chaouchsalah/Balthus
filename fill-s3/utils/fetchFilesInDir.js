const fs = require('fs');

function fetchFilesInDir() {
  const {MOCK_DATA} = process.env
  const contents = fs.readdirSync(MOCK_DATA)

  return contents.map(content => `${MOCK_DATA}/${content}`)
}

module.exports = fetchFilesInDir
