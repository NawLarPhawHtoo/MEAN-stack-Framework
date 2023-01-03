import { ModelAttributes } from 'sequelize';

import { DataBaseModelNames } from '../constants';

import { DbModelFieldInit } from '../db-structure.model';

import { db } from '../db.provider';

import { AssociativeModel } from './_model.decorator';

export interface IPostModel{
  id: number;
  title: string;
  content: string;
  description: string;
  author: string;
  references: string;
  image: string;
  created_user_id: number;
  createdAt: Date;
  updatedAt: Date;

}