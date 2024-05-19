import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import TransactionService, { Transaction } from '../../transactions-api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { FilterMatchMode } from 'primereact/api';
import CategoriesService from '../../../Categories/category-api';
import dayjs from 'dayjs';
import Authorize from '../../../Authinticate';
import { useAppStore } from '../../../context/app-store';

const TransactionsList = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [data, setData] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    category: { value: '', matchMode: FilterMatchMode.EQUALS }
  });
  const [visible, setVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const { userType } = useAppStore();
  const isAdmin = userType === 'Admin';
  const { sign } = useAppStore();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const transactions = await TransactionService.getAllTransactions();
        setData(transactions);
        const categoryParam = searchParams.get('category');
        if (categoryParam) {
          setSelectedCategory(categoryParam);
          setFilters((prevFilters) => ({
            ...prevFilters,
            category: { value: categoryParam, matchMode: FilterMatchMode.EQUALS }
          }));
        }

        setLoading(false);
      } catch (error) {
        setError('An error occurred while fetching data.');
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

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

  const handleCategoryChange = (event: { value: string }) => {
    const selectedCategory = event.value;
    setSelectedCategory(selectedCategory);
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: { value: selectedCategory, matchMode: FilterMatchMode.EQUALS }
    }));
  };

  const categoryFilterElement = (
    <Dropdown
      id="categoryName"
      name="categoryName"
      placeholder="Category"
      value={selectedCategory}
      options={CategoriesService.getAllCategories().map((category) => ({
        label: category.name,
        value: category.name
      }))}
      onChange={handleCategoryChange}
      style={{ minWidth: '0.5rem' }}
    />
  );

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div
      className="card my-5 shadow-sm"
      style={{ padding: '2rem', borderRadius: '10px', marginBottom: '1rem', height: 'auto' }}>
      <h3 className="text-center">Transactions</h3>

      <DataTable
        value={data}
        stripedRows
        paginator
        rows={10}
        filters={filters}
        filterDisplay="row"
        globalFilterFields={['category']}
        className="datatable"
        rowsPerPageOptions={[10, 20, 25, 30]}
        tableStyle={{ minWidth: '60rem' }}
        style={{ paddingTop: '30px' }}>
        <Column
          field="name"
          header="Name"
          filter
          filterPlaceholder="Search by Name"
          style={{ minWidth: '1rem' }}
        />
        <Column
          field="category"
          header="Category"
          filter
          filterPlaceholder="Search by category"
          filterElement={categoryFilterElement}
        />
        <Column
          field="date"
          header="Date"
          body={(rowData) => <span>{dayjs(rowData.date).format('DD/MM/YYYY HH:mm:ss')}</span>}
        />
        <Column
          field="amount"
          header="Amount"
          className="py-3"
          body={(rowData) => <span>{`${rowData.amount} ${sign??""}`}</span>}
        />
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
