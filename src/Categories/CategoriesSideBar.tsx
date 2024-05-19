import { FcAddDatabase } from 'react-icons/fc';
import { RiEditCircleFill } from 'react-icons/ri';
import { FcDeleteRow } from 'react-icons/fc';
import { useState } from 'react';
import CategoriesService, { Category } from './category-api';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { ToastContainer, toast } from 'react-toastify';
import CategoryForm from './CategoryForm';

const MenuItem = ({
  icon,
  name,
  onClick
}: {
  icon: React.ReactNode;
  name: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className="header-item d-flex p-3 flex-column"
      onClick={onClick}
      style={{ justifyContent: 'center', alignItems: 'center' }}>
      <span className=" d-flex align-item-center" style={{ fontSize: '40px', color: '#eec6f6' }}>
        {icon}
      </span>
      <span className="header-item-label d-block ">{name}</span>
    </div>
  );
};

const CategoriesSideBar = ({
  categories,
  setCategories,
  fetchData
}: {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  fetchData: () => void;
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [visible, setVisible] = useState(false);
  const [visibleSelect, setVisibleSelect] = useState(false);
  const [actionType, setActionType] = useState<'edit' | 'delete' | null>(null);

  const handleAddClick = () => {
    setSelectedCategory(null);
    setVisible(true);
  };

  const handleEditButtonClick = () => {
    setActionType('edit');
    setVisibleSelect(true);
  };

  const handleDeleteButtonClick = () => {
    setActionType('delete');
    setVisibleSelect(true);
  };

  const handleSaveButtonClicked = async () => {
    setVisible(false);
    await fetchData(); 
  };

  const handleConfirm = async () => {
    if (actionType === 'delete' && selectedCategory) {
      try {
        await CategoriesService.removeCategory(selectedCategory.id);
        toast.success('Category deleted successfully');
        setCategories(categories.filter((category) => category.id !== selectedCategory.id));
      } catch (error) {
        console.error('Error deleting category:', error);
        toast.error('An error occurred while deleting the category');
      }
    } else if (actionType === 'edit' && selectedCategory) {
      setVisible(true); 
    }
    setVisibleSelect(false);
  };

  const items = [
    { icon: <FcAddDatabase />, label: 'Add', to: '/dashboard', onClick: handleAddClick },
    {
      icon: <RiEditCircleFill />,
      label: 'Edit',
      onClick: handleEditButtonClick
    },
    {
      icon: <FcDeleteRow />,
      label: 'Delete',
      onClick: handleDeleteButtonClick
    }
  ];

  const footerContent = (
    <div>
      <Button
        label="Cancel"
        icon="pi pi-times"
        onClick={() => {
          setVisibleSelect(false);
        }}
        className="p-button-text"
      />
      <Button
        label="OK"
        icon="pi pi-check"
        onClick={handleConfirm}
        autoFocus
        className="p-button-text"
      />
    </div>
  );

  return (
    <aside
      id="sidebar"
      className="sidebar bg-white d-flex rounded-4 m-2 flex-column shadow-sm"
      style={{
        width: '100px',
        marginBottom: '10px',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      {items.map((item, index) => (
        <MenuItem key={index} icon={item.icon} name={item.label} onClick={item.onClick} />
      ))}

      <Dialog visible={visible} style={{ width: 'auto' }} onHide={() => setVisible(false)}>
        <div style={{ margin: '20px auto' }}>
          <CategoryForm
            category={selectedCategory ?? undefined}
            onSaveButtonClicked={handleSaveButtonClicked}
          />
        </div>
      </Dialog>
      <Dialog
        visible={visibleSelect}
        style={{ width: '30vw', height: '30vh' }}
        onHide={() => setVisibleSelect(false)}
        footer={footerContent}>
        <Dropdown
          id="category"
          name="category"
          placeholder="Category"
          value={selectedCategory}
          options={categories.map((category) => ({
            label: category.name,
            value: category
          }))}
          onChange={(e) => setSelectedCategory(e.value)}
          style={{
            height: '47px',
            borderRadius: '15px',
            alignItems: 'center',
            backgroundColor: '#d2d9f4',
            paddingLeft: '10px'
          }}
        />
      </Dialog>
      <ToastContainer />
    </aside>
  );
};

export default CategoriesSideBar;
