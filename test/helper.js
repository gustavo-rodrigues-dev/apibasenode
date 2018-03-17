import assert from 'assert';
import supertest from 'supertest';
import app from '../src/index.js';

global.app = app;
global.assert = assert;
global.request = supertest(app);
