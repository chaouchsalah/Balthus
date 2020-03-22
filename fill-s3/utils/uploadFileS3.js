const fs = require('fs')
const { s3 } = require('./AWS')

async function uploadFileS3(file) {
  const { path, name } = file
  const { AWS_S3_ENCRYPTION, AWS_S3_ACL, AWS_S3_BUCKET_NAME } = process.env

  let readStream
  try {
    readStream = fs.readFileSync(path)
  } catch (error) {
    console.error(`An error occured when reading file: ${name} in ${path}`)
    return
  }
  const params = {
    Bucket: AWS_S3_BUCKET_NAME,
    ServerSideEncryption: AWS_S3_ENCRYPTION,
    ACL: AWS_S3_ACL,

    Key: name,
    Body: readStream
  }
  try {
    const result = await s3.upload(params).promise()

    return result.key
  } catch (error) {
    console.error(`An error occured when uploading file: ${name} in ${path}`)
    return
  }
}

module.exports = uploadFileS3
