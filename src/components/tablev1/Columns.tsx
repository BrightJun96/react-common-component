import { IColumn } from './types';

export const authorColumn: IColumn = {
  label: '작성자',
  keyValue: 'author',
  Cell: ({ data }) => {
    return <p>{data}</p>;
  },
};
export const contentColumn: IColumn = {
  label: '내용',
  keyValue: 'content',
  Cell: ({ data }) => {
    return <p>{data}</p>;
  },
};
