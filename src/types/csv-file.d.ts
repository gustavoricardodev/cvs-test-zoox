export type CsvFile = {
  id: string;
  data: Record<string, unknown>[];
  rowCount: number;
  columnCount: number;
  createdAt: string;
  name: string;
  exported: boolean;
  exportedRows: number;
  exportedColumns: number;
};
