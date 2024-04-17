import { create } from 'zustand';

interface DateState {
  selectedDate: string | null; 
  setSelectedDate: (date: string | null) => void;
}

const dashboardStore  = create<DateState>((set) => ({
  selectedDate: null,
  setSelectedDate: (date) => set({ selectedDate: date })
}));

export default dashboardStore ;
