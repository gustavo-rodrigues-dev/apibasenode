import assert from 'assert'
import supertest from 'supertest'
import app from '../dist/index'

global.app = app
global.assert = assert
global.request = supertest(app)
