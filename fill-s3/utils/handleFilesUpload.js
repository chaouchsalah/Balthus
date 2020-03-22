const fs = require('fs')
const uploadFileS3 = require('./uploadFileS3')

async function handleFilesUpload(files) {
  let data = ''

  for (let i = 0; i < files.length; i++) {
    const splitFile = files[i].split('/')
    const filename = splitFile[splitFile.length - 1]
    const file = { path: files[i], name: filename }
    const key = await uploadFileS3(file)
    if (key) {
      const stats = fs.statSync(files[i])
      const mtime = stats.mtime
      data += `\n${files[i]},${mtime}`
    }
  }

  const { UPLOADED_FILE } = process.env
  fs.writeFileSync(UPLOADED_FILE, data)
}

module.exports = handleFilesUpload
