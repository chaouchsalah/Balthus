const fetchUnupdatedFiles = require('./fetchUnupdatedFiles')
const fetchFilesInDir = require('./fetchFilesInDir')

function fetchFilesToUpload(uploadedFile) {
  let unupdatedFiles = []
  if (uploadedFile) {
    unupdatedFiles = fetchUnupdatedFiles(uploadedFile)
  }

  const filesInDir = fetchFilesInDir()

  let filesToUpload = []
  filesInDir.forEach(fileInDir => {
    if(!unupdatedFiles.includes(fileInDir)) {
      filesToUpload.push(fileInDir)
    }
  })

  return filesToUpload
}

module.exports = fetchFilesToUpload
