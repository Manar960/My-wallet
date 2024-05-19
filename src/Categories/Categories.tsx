import React from 'react';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-green/theme.css';
import 'primeicons/primeicons.css';
import { Category } from './category-api';
import CategoryCard from './CategoryCard';

const Categories: React.FC<{ categories: Category[]; loading: boolean }> = ({
  categories,
  loading
}) => {
  const handleCategoryClick = (categoryId: number) => {};

  return (
    <div className="categories-container card mt-2 rounded-4 ms-1">
      <div className="row justify-content-center">
        <h3>Categories</h3>
        {loading ? (
          <div>Loading...</div>
        ) : (
          categories.map((category) => (
            <div
              key={category.id}
              className="col-lg-4 col-md-6 col-sm-12 my-4"
              style={{ width: '270px' }}>
              <CategoryCard category={category} onCategoryClick={handleCategoryClick} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Categories;
