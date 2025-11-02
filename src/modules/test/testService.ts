import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { ITest } from './testInterface';
import { Test } from './testModel';
import QueryBuilder from '../../builders/QueryBuilder';

export const addTestService = async (data: ITest) => {
  const result = await Test.create(data);
  return result;
};

export const getAllTestService = async () => {
  const result = await Test.find();
  return result;
};

export const getAllTestWithBuilderService = async (query: Record<string, unknown>) => {
  const result = new QueryBuilder(Test.find(), query)
    .search(['name'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await result.countTotal();
  const data = await result.modelQuery;

  return {
    meta,
    data,
  };
};

export const getSingleTestService = async (id: string) => {
  const result = await Test.findById(id);
  return result;
};

export const updateTestService = async (id: string, data: ITest) => {
  const isExist = await Test.findById(id);
  if (!isExist) throw new AppError(httpStatus.NOT_FOUND, 'Test not found!');
  const result = await Test.findByIdAndUpdate(id, data, { new: true });
  return result;
};

export const deleteTestService = async (id: string) => {
  const isExist = await Test.findById(id);
  if (!isExist) throw new AppError(httpStatus.NOT_FOUND, 'Test not found!');
  const result = await Test.findByIdAndDelete(id);
  return result;
};
