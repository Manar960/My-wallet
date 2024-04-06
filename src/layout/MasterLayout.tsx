
import { Outlet } from 'react-router-dom';
import '../assets/styles/App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppSideBar from './components/Aside/AppSideBar';

const MasterLayout = () => {

  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow-1 d-flex">
        <section id="content" className="content container-fluid pb-5">
          <Outlet />
        </section>
        <AppSideBar />
      </main>
      <Footer />
    </>
  );
};

export default MasterLayout;
