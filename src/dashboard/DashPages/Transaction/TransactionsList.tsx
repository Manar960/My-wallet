import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useTransactionsStore } from '../../../context/transactionsStore';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-green/theme.css';
import 'primeicons/primeicons.css';
import { useNavigate } from 'react-router-dom';
import TransactionService, { Transaction } from '../../transactions-api';
import Authorize from '../../../Authinticate';
import { useAppStore } from '../../../context/app-store';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

const TransactionsList = () => {
  const { data, loading, error, setData, setLoading, setError } = useTransactionsStore();
  const [visible, setVisible] = useState(false);
const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      const transactions = TransactionService.getAllTransactions();
      setData(transactions);
      setLoading(false);
    } catch (err) {
      setError('An error occurred while fetching data from LocalStorage');
      setLoading(false);
    }
  }, [setData, setLoading, setError]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/transaction/new');
  };

  const handleEditButtonClick = (id: number) => {
    navigate(`/transaction/${id}`);
  };

  const handleRemoveButtonClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setVisible(true);
  };

  const handleConfirmDelete = () => {
    if (selectedTransaction) {
      const { id } = selectedTransaction;
      TransactionService.removeTransaction(id);
      const updatedData = data.filter((transaction) => transaction.id !== id);
      setData(updatedData);
      setVisible(false);
    }
  };

  const handleCancelDelete = () => {
    setSelectedTransaction(null);
    setVisible(false);
  };

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  const footerContent = (
    <div>
      <Button
        label="Cancel"
        icon="pi pi-times"
        onClick={handleCancelDelete}
        className="p-button-text"
      />
      <Button
        label="Delete"
        icon="pi pi-check"
        onClick={handleConfirmDelete}
        autoFocus
        className="p-button-text"
      />
    </div>
  );

  const { userType } = useAppStore();
  const isAdmin = userType === 'Admin';

  return (
    <div
      className="card my-5 shadow-sm"
      style={{ padding: '2rem', borderRadius: '10px', marginBottom: '1rem', height: 'auto' }}>
      <h3 className="text-center">Transactions</h3>

      <DataTable
        value={data}
        paginator
        rows={10}
        className="datatable"
        rowsPerPageOptions={[10, 20, 25, 30]}
        tableStyle={{ minWidth: '60rem' }}
        style={{ paddingTop: '30px' }}>
        <Column field="name" header="Name" />
        <Column field="category" header="Category" />
        <Column
          field="date"
          header="Date"
          body={(rowData) => <span>{dayjs(rowData.date).format('DD/MM/YYYY HH:mm:ss')}</span>}
        />
        <Column field="amount" header="Amount" className="py-3" />
        {isAdmin && (
          <Column
            field="id"
            body={(rowData) => (
              <>
                <button
                  className="button2 p-button-danger me-3 "
                  onClick={() => handleEditButtonClick(rowData.id)}>
                  Edit
                </button>
                <button
                  className="button2 p-button-danger "
                  onClick={() => handleRemoveButtonClick(rowData)}>
                  Delete
                </button>
              </>
            )}
          />
        )}
      </DataTable>

      <Authorize allowedRoles={['Admin']}>
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
      </Authorize>

      <Dialog
        visible={visible}
        style={{ width: '30vw', height: '30vh' }}
        onHide={handleCancelDelete}
        footer={footerContent}>
        <p className="text-center ">Are you sure you want to delete this transaction?</p>
      </Dialog>
    </div>
  );
};

export default TransactionsList;
