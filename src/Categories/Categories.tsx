// Categories.tsx

import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-green/theme.css';
import 'primeicons/primeicons.css';
import CategoriesService, { Category } from './category-api';
import Authorize from '../Authinticate';
import { Dialog } from 'primereact/dialog';
import CategoryForm from './CategoryForm';
import { useAppStore } from '../context/app-store';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';

const Categories: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [visible, setVisible] = useState(false);
  const [visibleConfirm, setVisibleConfirm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const { userType } = useAppStore();
  const isAdmin = userType === 'Admin';

  const fetchData = async () => {
    try {
      const categories = await CategoriesService.getAllCategories();
      setCategories(categories);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddClick = () => {
    setSelectedCategory(null);
    setVisible(true);
  };

  const handleEditButtonClick = (category: Category) => {
    setSelectedCategory(category);
    setVisible(true);
  };

  const handleSaveButtonClicked = () => {
    setVisible(false);
    fetchData();
  };

  const handleDeleteButtonClick = (category: Category) => {
    setSelectedCategory(category);
    setVisibleConfirm(true);
  };

  const handleConfirmDelete = () => {
    CategoriesService.removeCategory(selectedCategory!.id);
    setVisibleConfirm(false);
    fetchData();
  };
  const footerContent = (
    <div>
      <Button
        label="Cancel"
        icon="pi pi-times"
        onClick={() => setVisibleConfirm(false)}
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
  return (
    <div
      className="card my-5 shadow-sm"
      style={{ padding: '2rem', borderRadius: '10px', marginBottom: '1rem', height: 'auto' }}>
      <h3 className="text-center">Categories</h3>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <DataTable
          value={categories}
          stripedRows
          paginator
          rows={10}
          className="datatable"
          rowsPerPageOptions={[10, 15, 20, 25]}
          tableStyle={{ minWidth: '60rem' }}
          style={{ paddingTop: '30px' }}>
          <Column field="name" header="Category Name" className="py-3" />
          {isAdmin && (
            <Column
              body={(rowData) => (
                <>
                  <button
                    className="button2 p-button-danger me-3"
                    onClick={() => handleEditButtonClick(rowData)}>
                    Edit
                  </button>
                  <button
                    className="button2 p-button-danger "
                    onClick={() => handleDeleteButtonClick(rowData)}>
                    Delete
                  </button>
                </>
              )}
            />
          )}
        </DataTable>
      )}
      <Authorize allowedRoles={['Admin']}>
        <div className="d-flex align-items-center justify-content-end me-4">
          <button
            className="button d-inline-flex align-items-center justify-content-center mt-4"
            onClick={handleAddClick}>
            Add New Category
            <div className="hoverEffect position-absolute d-flex align-items-center justify-content-center">
              <div></div>
            </div>
          </button>
        </div>
      </Authorize>
      <Dialog visible={visible} style={{ width: 'auto' }} onHide={() => setVisible(false)}>
        <div style={{ margin: '20px auto' }}>
          <CategoryForm
            category={selectedCategory ?? undefined}
            onSaveButtonClicked={handleSaveButtonClicked}
          />
        </div>
      </Dialog>
      <Dialog
        visible={visibleConfirm}
        style={{ width: '30vw', height: '30vh' }}
        onHide={() => setVisibleConfirm(false)}
        footer={footerContent}>
        <p className="text-center ">Are you sure you want to delete this category?</p>
      </Dialog>
    </div>
  );
};

export default Categories;
