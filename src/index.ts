import express from 'express'
import { URLController } from './controller/URLController'

const api = express()

api.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.redirect)

api.listen(5000, () => console.log('Express listening'))