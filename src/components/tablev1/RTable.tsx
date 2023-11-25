import { TableStyles } from './styles';
import { IRTable } from './types';

export default function RTable({ data, columns, styles }: IRTable) {
  return (
    <TableStyles.TableComponent>
      <TableStyles.THeader th_style={styles.TH_STYLE}>
        <tr>
          {columns.map((headerColumn, headeColumnIndex) => (
            <th key={headeColumnIndex}>{headerColumn.label}</th>
          ))}
        </tr>
      </TableStyles.THeader>
      <TableStyles.TBody tb_style={styles.TB_STYLE}>
        {data?.map((row, index) => {
          return (
            <tr key={index}>
              {...columns.map((column, columnIndex) => {
                const data = row[column.keyValue] as string;

                return <TableStyles.Cell key={columnIndex}>{column.Cell({ data })}</TableStyles.Cell>;
              })}
            </tr>
          );
        })}
      </TableStyles.TBody>
    </TableStyles.TableComponent>
  );
}
