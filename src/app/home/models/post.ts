import {IUser} from './user';

export interface IPost {
  _id: string;
  title: string;
  description: string;
  author: IUser | string;
}
