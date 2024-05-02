import './App.css';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;



// npm uninstall package-name
