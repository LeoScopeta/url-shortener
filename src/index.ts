import express from 'express'
import { URLController } from './controller/URLController'

const api = express()
api.listen(5000, () => console.log('Express listening'))
api.post('/shorten', urlController.shorten)