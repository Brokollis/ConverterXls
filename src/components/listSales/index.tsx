import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { FileDataContext } from '../../services/UseFileContext';
import { useContext, useState } from 'react';
import EditForm from '../tableEditData';
import { ISalesData } from '../../interfaces/SalesData';
import './style.css'



const columns: GridColDef[] = [
  { field: 'ID', headerName: 'Id', width: 80, editable: false, headerAlign: 'center', align: 'center' },
  { field: 'CLIENTE', headerName: 'Cliente', width: 180, editable: false, headerAlign: 'center', align: 'center' },
  { field: 'IDADE', headerName: 'Idade', type: 'number', width: 80, align: 'center', headerAlign: 'center', editable: false },
  { field: 'ESTADO', headerName: 'Estado', width: 180, editable: false, headerAlign: 'center', align: 'center' }, // Changed the type to string
  { field: 'PRODUTO', headerName: 'Produto', width: 180, editable: false, headerAlign: 'center', align: 'center' },
  { field: 'QUANTIDADE_VENDIDA', headerName: 'Quantidade', width: 150, editable: false, type: 'number', headerAlign: 'center', align: 'center' },
  { field: 'DATA', headerName: 'Data', width: 150, editable: false, headerAlign: 'center', align: 'center' },
];

export default function TableSales() {

  const { jsonData } = useContext(FileDataContext);
  const [selectedRow, setSelectedRow] = useState<ISalesData | null>();


  const rows: GridRowsProp = jsonData.map((dataItem, index) => ({
    id: index++, 
    ID: index++,
    CLIENTE: dataItem.CLIENTE,
    IDADE: dataItem.IDADE,
    ESTADO: dataItem.ESTADO,
    PRODUTO: dataItem.PRODUTO,
    QUANTIDADE_VENDIDA: dataItem.QUANTIDADE_VENDIDA,
    DATA: dataItem.DATA,
  }));

  
  return (
    <div className='container-table-sales'>
        <DataGrid 
          rows={rows}
          columns={columns}
          getRowId={(row) => row.id} 
          onRowClick={(params) => {
            setSelectedRow(params.row)
          }}
        />
      {selectedRow && (
        <EditForm
          selectedRow={selectedRow}
          onClose={() => setSelectedRow(null)}
        />
      )}
    </div>
  );
}