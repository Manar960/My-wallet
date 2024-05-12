export interface UserData {
  id: number;
  name: string;
  category: string;
  date: string;
  amount: number;
}

export interface StoreState {
  data: UserData[];
  loading: boolean;
  error: string | null;
  category: string | null;
  setData: (data: UserData[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setCategory: (category: string | null) => void;
}
