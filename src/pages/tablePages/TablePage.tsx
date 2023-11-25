import { useEffect, useState } from 'react';
import { Table } from '../../components/table';
import { IHeader, IRow } from '../../components/table/types';

export default function TablePage() {
  const headers: IHeader[] = [
    {
      text: '',
      value: 'checked',
      selectable: true,
    },
    {
      text: 'NO',
      value: 'order',
    },
    {
      text: '이름',
      value: 'name',
    },
    {
      text: '나이',
      value: 'age',
    },
  ];

  const rows: IRow[] = [
    {
      name: '철준',
      age: 26,
      id: 1,
      order: 1,
    },
    {
      name: '성진',
      age: 30,
      id: 2,
      order: 2,
    },
    {
      name: '철준',
      age: 26,
      id: 3,
      order: 3,
    },
  ];

  const [selection, setSelection] = useState<IRow[]>([]);

  useEffect(() => {
    console.log(selection);
  }, [selection]);

  return <Table headers={headers} rows={rows} onSelect={setSelection} />;
}
