import express from 'express';
import {
  addTestController,
  deleteTestController,
  getAllTestController,
  getAllTestWithBuilderController,
  getSingleTestController,
  updateTestController,
} from './testController';
import verifyValidate from '../../middlewares/verifyValidate';
import { testValidation } from './testValidation';
const Router = express.Router();

Router.post(
  '/add',
  verifyValidate(testValidation),
  addTestController,
);
Router.get('/all',  getAllTestController);
Router.get('/all-with-builder',  getAllTestWithBuilderController);
Router.get('/:id',  getSingleTestController);
Router.put(
  '/update/:id',
  updateTestController,
);
Router.delete(
  '/delete/:id',
  deleteTestController,
);

export const testRoute = Router;
