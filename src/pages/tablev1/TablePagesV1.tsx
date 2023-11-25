import { RTable } from '../../components/tablev1';
import { authorColumn, contentColumn } from '../../components/tablev1/Columns';
import tableData, { IColumn } from '../../components/tablev1/types';

const data: tableData[] = [
  { id: 0, author: 'aaa1', content: 'bbb1', category: 'first' },
  { id: 1, author: 'aaa2', content: 'bbbbbbbbbbbbbbbb2', category: 'second' },
  { id: 2, author: 'aaa3', content: 'bbb3', category: 'third' },
  { id: 3, author: 'aaa4', content: 'bbb4', category: 'third' },
];

const TABLE_STYLE = {
  TH_STYLE: {
    'background-color': 'red',
  },
  TB_STYLE: {
    'background-color': 'yellow',
  },
};

// table에 출력할 column 속성 설정
const columns: IColumn[] = [authorColumn, contentColumn];

// readonly
const TablePagesV1 = (): JSX.Element => {
  return (
    <div>
      <h1>Table version 1</h1>

      <RTable data={data} columns={columns} styles={TABLE_STYLE} />
    </div>
  );
};

export default TablePagesV1;
