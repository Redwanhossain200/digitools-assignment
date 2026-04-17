import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import MainSection from './components/MainSection';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('products');
  const [addedIds, setAddedIds] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    fetch(`./products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error loading products:', err));
  }, []);

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      toast.info('Item already in cart!');
    } else {
      setCart([...cart, product]);
      setAddedIds([...addedIds, product.id]);
      toast.success('Added to cart successfully!');
    }
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    setAddedIds(addedIds.filter((addedId) => addedId !== id));
    toast.error('Removed from cart');
  };

  const handleCheckout = () => {
    if (cart.length === 0) return toast.warning('Cart is empty!');
    setCart([]);
    setAddedIds([]);
    toast.success('Proceeding to checkout! Cart cleared.');
  };

  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  const getTagStyles = (type) => {
    const styles = {
      warning: 'bg-[#FEF3C6] text-[#BB4D00]',
      secondary: 'bg-[#E1E7FF] text-[#7F27FF]',
      success: 'bg-[#DBFCE7] text-[#0A883E]',
      primary: 'bg-[#EBF2FF] text-[#007AFF]',
      accent: 'bg-[#F9EEFF] text-[#B800FF]',
      error: 'bg-[#FFE9E9] text-[#FF4D4F]',
    };
    return styles[type] || 'bg-gray-100 text-gray-600';
  };

  return (
    <>
      <section className="min-h-screen bg-white">
        <ToastContainer position="top-right" autoClose={1500}></ToastContainer>

        <Navbar
          cart={cart}
          setActiveTab={setActiveTab}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        <Banner />
        <Stats />

        <MainSection
          products={products}
          cart={cart}
          activeTab={activeTab}
          addedIds={addedIds}
          setActiveTab={setActiveTab}
          handleAddToCart={handleAddToCart}
          handleRemove={handleRemove}
          handleCheckout={handleCheckout}
          totalCost={totalCost}
          getTagStyles={getTagStyles}
        />

        <Steps />
        <Pricing />
        <CTA />
        <Footer />
      </section>
    </>
  );
}

export default App;
