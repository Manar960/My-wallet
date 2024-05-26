import React, { useEffect, useState } from 'react';
import Categories from './Categories';
import CategoriesSideBar from './CategoriesSideBar';
import CategoriesService, { Category } from './category-api';

const MainCategoryPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="d-flex ">
      <div>
        <Categories categories={categories} loading={loading} />
      </div>
      <div>
        <CategoriesSideBar
          categories={categories}
          setCategories={setCategories}
          fetchData={fetchData}
        />
      </div>
    </div>
  );
};

export default MainCategoryPage;
