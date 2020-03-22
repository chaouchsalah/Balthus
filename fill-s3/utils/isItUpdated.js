const fs = require('fs')

function isItUpdated(path, updatedAt) {
  const stats = fs.statSync(path)
  const mtime = stats.mtime
  return mtime.toString() !== updatedAt
}

module.exports = isItUpdated
