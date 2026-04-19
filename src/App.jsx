import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import Order from './components/Order';

function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Features />
      <Contact />
    </Layout>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}

export default App;
