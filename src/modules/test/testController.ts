import { catchAsync } from '../../utils/catchAsync';
import {
  addTestService,
  deleteTestService,
  getAllTestService,
  getAllTestWithBuilderService,
  getSingleTestService,
  updateTestService,
} from './testService';

export const addTestController = catchAsync(async (req, res) => {
  const result = await addTestService(req.body);

  res.status(200).json({
    success: true,
    message: 'Test add successfully',
    data: result,
  });
});

export const getAllTestController = catchAsync(async (req, res) => {
  const result = await getAllTestService();

  res.status(200).json({
    success: true,
    message: 'Test get successfully',
    data: result,
  });
});

export const getAllTestWithBuilderController = catchAsync(async (req, res) => {
  const {meta,data} = await getAllTestWithBuilderService(req.query);

  res.status(200).json({
    success: true,
    message: 'Test get successfully',
    meta,
    data,
  });
});

export const getSingleTestController = catchAsync(async (req, res) => {
  const result = await getSingleTestService(req.params.id);

  res.status(200).json({
    success: true,
    message: 'Test get successfully',
    data: result,
  });
});

export const updateTestController = catchAsync(async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const result = await updateTestService(id, data);

  res.status(200).json({
    success: true,
    message: 'Test update successfully',
    data: result,
  });
});

export const deleteTestController = catchAsync(async (req, res) => {
  const id = req.params.id;
  await deleteTestService(id);
  res.status(200).json({
    success: true,
    message: 'Test delete successfully',
  });
});
