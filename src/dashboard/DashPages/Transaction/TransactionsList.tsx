import axios from 'axios';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import { useTransactionsStore } from '../../../context/transactionsStore';
import { UserData } from '../../../context/type';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-green/theme.css';
import 'primeicons/primeicons.css';
import { Navigate, useNavigate } from 'react-router-dom';

const API_URL = 'https://mocki.io/v1/8b489a5a-617e-45d5-8ec8-284cee710485';

const TransactionsList = () => {
  const { data, loading, error, setData, setLoading, setError } = useTransactionsStore();

  useEffect(() => {
    setLoading(true);
    axios
      .get<UserData[]>(API_URL)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        let errorMessage = 'An error occurred';
        if (err.response) {
          errorMessage = `Error: ${err.response.status} - ${err.response.statusText}`;
        } else if (err.request) {
          errorMessage = 'Network error, please try again later';
        }
        setError(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setData, setLoading, setError]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/transaction/new'); 
  };
  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div
      className="card  my-5 shadow-sm"
      style={{
        padding: '2rem',
        borderRadius: '10px',
        marginBottom: '1rem',
        height: 'auto'
      }}>
      <h3 className="text-center ">Transactions</h3>

      <DataTable
        value={data}
        paginator
        rows={10}
        rowsPerPageOptions={[10, 20, 25, 30]}
        tableStyle={{ minWidth: '60rem' }}
        style={{ paddingTop: '30px' }}>
        <Column field="id" header="ID"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column
          field="date"
          header="Date"
          body={(rowData) => (
            <span>{dayjs(rowData.date).format('DD/MM/YYYY HH:mm:ss')}</span>
          )}></Column>
        <Column field="amount" header="Amount" className="py-1 "></Column>
      </DataTable>
      <div className="d-flex align-items-center justify-content-end me-4">
        <button
          className="button d-inline-flex align-items-center justify-content-center mt-4"
          onClick={handleClick}>
          Add New Transaction
          <div className="hoverEffect position-absolute d-flex align-items-center justify-content-center">
            <div></div>
          </div>
        </button>
      </div>
    </div>
  );
};
export default TransactionsList;
