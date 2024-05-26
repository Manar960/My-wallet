import React, { useEffect, useState } from 'react';
import { Category } from './category-api';
import { useNavigate } from 'react-router-dom';
import TransactionService from '../Transaction/transactions-api';
import 'react-toastify/dist/ReactToastify.css';

interface CategoryCardProps {
  category: Category;
  onCategoryClick: (categoryId: number) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onCategoryClick }) => {
  const navigate = useNavigate();
  const [totalTransactionsAmount, setTotalTransactionsAmount] = useState<number | null>(null);

  useEffect(() => {
    const fetchTotalTransactionsAmount = async () => {
      const totalAmount = TransactionService.getTotalAmountByCategory()[category.name];
      setTotalTransactionsAmount(totalAmount || 0);
    };

    fetchTotalTransactionsAmount();
  }, [category.name]);

  const handleCardClick = () => {
    onCategoryClick(category.id);
    navigate(`/transaction?category=${encodeURIComponent(category.name)}`);
    console.log(iconPath);
  };
  const iconPath = `/src/flaticons/${category.icon}`;

  return (
    <div className="category-card" onClick={handleCardClick}>
      <img src={iconPath} style={{ width: '50px' }} />
      <div className="fs-5 font-weight-bold mt-2">{category.name}</div>
      <div>
        {totalTransactionsAmount !== null ? totalTransactionsAmount : 'Loading...'}
        {'$'}
      </div>
    </div>
  );
};

export default CategoryCard;
