import axios from 'axios';
import { useEffect } from 'react';
import {create} from 'zustand';
import dayjs from 'dayjs';

interface UserData {
  id: number;
  name: string;
  category: string;
  date: string;
  amount: number;
}

interface StoreState {
  data: UserData[];
  loading: boolean;
  error: string | null;
  setData: (data: UserData[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

const useStore = create<StoreState>((set) => ({
  data: [],
  loading: true,
  error: null,
  setData: (data: UserData[]) => set({ data }),
  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: string | null) => set({ error })
}));

const Table = () => {
  const { data, loading, error, setData, setLoading, setError } = useStore();

  useEffect(() => {
    setLoading(true);
    axios
      .get<UserData[]>('https://mocki.io/v1/8b489a5a-617e-45d5-8ec8-284cee710485')
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [setData, setLoading, setError]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container my-5">
      <div className="mt-3">
        <h3>Fetch Data</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Category</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => {
              const formattedDate = dayjs(user.date).format('DD-MM-YYYY');
              return (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.category}</td>
                  <td>{formattedDate}</td>
                  <td>{user.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
