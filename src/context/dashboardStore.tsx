import { create } from 'zustand';

interface DashboardStore {
  selectedDate: string | null;
  setSelectedDate: (date: string | null) => void;
  period: string | null;
  setPeriod: (period: string | null) => void;
  totalBalance: number;
  setTotalBalance: (balance: number) => void;
}

const useDashboardStore = create<DashboardStore>((set) => ({
  selectedDate: null,
  setSelectedDate: (date) => set({ selectedDate: date }),
  period: null,
  setPeriod: (period) => set({ period }),
  totalBalance: 0,
  setTotalBalance: (balance) => set({ totalBalance: balance })
}));

export default useDashboardStore;
