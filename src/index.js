'use strict'

import express from 'express'
import config from '../config.json'
import versionOne from './v1/'

const port = config.port
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port)
    console.log('A API está sendo executada')
