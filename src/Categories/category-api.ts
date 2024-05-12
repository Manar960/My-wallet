export interface Category {
  id: number;
  name: string;
}

const STORAGE_KEY = 'categories';

const CategoriesService = {
  getAllCategories(): Category[] {
    const categoriesData = localStorage.getItem(STORAGE_KEY);
    return categoriesData ? JSON.parse(categoriesData) : [];
  },

  getCategory(id: number): Category | undefined {
    const categories = this.getAllCategories();
    return categories.find((category) => category.id === id);
  },

  addCategory(newCategory: Category): void {
    const categories = this.getAllCategories();
    const maxId = categories.reduce((max, category) => Math.max(max, category.id), 0);
    const updatedCategories = [...categories, { ...newCategory, id: maxId + 1 }];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCategories));
  },

  updateCategory(updatedCategory: Category): void {
    const categories = this.getAllCategories();
    const index = categories.findIndex((category) => category.id === updatedCategory.id);
    if (index !== -1) {
      categories[index] = updatedCategory;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(categories));
    }
  },
   removeCategory(id: number): void {
    let categories = this.getAllCategories();
    categories = categories.filter(category => category.id !== id);
    localStorage.setItem('categories', JSON.stringify(categories));
  }
};

export default CategoriesService;
