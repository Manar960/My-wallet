import { create } from 'zustand';

interface DateState {
  selectedDate: string | null; 
  setSelectedDate: (date: string | null) => void;
}

const useDateStore = create<DateState>((set) => ({
  selectedDate: null,
  setSelectedDate: (date) => set({ selectedDate: date })
}));

export default useDateStore;
