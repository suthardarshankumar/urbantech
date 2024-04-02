import './App.css';
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
import Home from './pages/Home/Home';
import ProductDetail from './pages/Product/ProductDetail/ProductDetail';

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <ProductDetail />
      <Footer />
      {/* <SignUp />
      <LogIn />
      <ResetPassword /> */}
    </>
  );
}

export default App;



// npm uninstall package-name
