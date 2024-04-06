import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import MasterLayout from './layout/MasterLayout';
import { PageNotFound } from './Pages/PageNotFound';
import MonthlyBudget from './Pages/MonthlyBudget/MonthlyBudget';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<MasterLayout/>}>
      <Route index element={<HomePage />} />
      <Route path="monthly-Budget" element={<MonthlyBudget />} />
      <Route path='*' element={<PageNotFound/> }/>
    </Route>
  )
);

const AppRoutes = () => {
  return (
   <RouterProvider router={router}/>
  )
}

export default AppRoutes