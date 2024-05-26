// EditCategoryPage.tsx

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CategoriesService, { Category } from './category-api';
import CategoryForm from './CategoryForm';
import { Dialog } from 'primereact/dialog';

const EditCategoryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    const categoryId = Number(id);
    if (!isNaN(categoryId)) {
      const fetchedCategory = CategoriesService.getCategory(categoryId);
      setCategory(fetchedCategory ?? null);
    } else {
      navigate('/categories');
    }
  }, [id, navigate]);

  const onSaveButtonClicked = (updatedCategory: Category) => {
    CategoriesService.updateCategory(updatedCategory);
    setTimeout(() => {
      navigate('/categories');
    }, 2000);
  };

  return (
    <Dialog
      visible={visible}
      style={{
        width: 'auto'
      }}
      onHide={() => setVisible(false)}>
      <div style={{ margin: '20px auto' }}>
        <CategoryForm category={category??undefined} onSaveButtonClicked={onSaveButtonClicked} />
      </div>
    </Dialog>
  );
};

export default EditCategoryPage;
