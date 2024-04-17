import axios from 'axios';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import { useTransactionsStore } from '../../../context/transactionsStore';
import { UserData } from '../../../context/type';

const API_URL = 'https://mocki.io/v1/8b489a5a-617e-45d5-8ec8-284cee710485';

const TransactionsList = () => {
  const { data, loading, error, setData, setLoading, setError } = useTransactionsStore();

  useEffect(() => {
    setLoading(true);
    axios
      .get<UserData[]>(API_URL)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        let errorMessage = 'An error occurred';
        if (err.response) {
          errorMessage = `Error: ${err.response.status} - ${err.response.statusText}`;
        } else if (err.request) {
          errorMessage = 'Network error, please try again later';
        }
        setError(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setData, setLoading, setError]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="container my-5">
      <div className="mt-3">
        <h3 className='text-center'>Transactions</h3>
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
              const formattedDate = dayjs(user.date).format('DD-MM-YYYY HH:mm:ss');
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
export default TransactionsList;
