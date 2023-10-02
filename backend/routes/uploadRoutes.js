import path from 'path'
import express from 'express'
import multer from 'multer'

const router = express.Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
  },
})

function checkFileType(file, cb) {
  const fileTypes = /jpg|jpeg|png/
  const extname = fileTypes.test(path.extname(file.originalname)).toLowerCase()
  const mimeType = fileTypes.test(file.mimeType)
  if (extname && mimeType) {
    cb(null, true)
  } else {
    cb('Images format only!', false)
  }
}

const uplaod = multer({
  storage,
  checkFileType
})

router.post('/', uplaod.single('image'), (req, res) => {
  res.send({
    message: 'Image uploaded successfully',
    image: `/${req.file.path}`,
  })
})

export default router
