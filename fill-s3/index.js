require('dotenv').config()
const cron = require('node-cron')
const fetchFilesToUpload = require('./utils/fetchFilesToUpload')
const handleFilesUpload = require('./utils/handleFilesUpload')
const fs = require('fs')

cron.schedule('0 0 * * *', () => {
  const { UPLOADED_FILE } = process.env
  fs.stat(UPLOADED_FILE, async function(err) {
    if (err == null) {
      const filesToUpload = fetchFilesToUpload(UPLOADED_FILE)
      if (filesToUpload.length !== 0) {
        await handleFilesUpload(filesToUpload)
      }
    } else if (err.code === 'ENOENT') {
      const filesToUpload = fetchFilesToUpload()
      if (filesToUpload.length !== 0) {
        await handleFilesUpload(filesToUpload)
      }
    } else {
      console.error(`An error occured: ${err.code}`)
    }
  })
})
