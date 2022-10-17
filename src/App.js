import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Offer from './components/Offer/Offer';
import Recommendations from './components/Recommendations/Recommendations';
import ProductList from './components/ProductList/ProductList';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>

      <Navigation />
      <Header />
      <Offer />
      <Recommendations />
      <ProductList />
      <Footer />

    </div>

  );
}

export default App;

// App.js
// -component Folder
//  1.Navbar/Header
      //-Search Bar
      // -cart
      // -SignIn /UP
      // -Wish List
//  2.Header Banner
//  3.Offer Section
//  4.Recommendation
//  5.List of Items
        // -Electronics
        // -Grocery
        // -Fashion
        // -Books and Toys
//  6. Footer

