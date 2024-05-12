import { create } from 'zustand';
import { StoreState } from './type';

export const useTransactionsStore = create<StoreState>((set) => ({
  data: [],
  loading: true,
  error: null,
  category: '',
  setData: (data) => set({ data }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setCategory: (category) => set({ category })
}));
