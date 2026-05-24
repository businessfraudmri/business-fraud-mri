import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Frameworks from './pages/Frameworks';
import Insights from './pages/Insights';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout><Home /></Layout>} path="/" />
        <Route element={<Layout><About /></Layout>} path="/about" />
        <Route element={<Layout><Services /></Layout>} path="/services" />
        <Route element={<Layout><Frameworks /></Layout>} path="/frameworks" />
        <Route element={<Layout><Insights /></Layout>} path="/insights" />
        <Route element={<Layout><Resources /></Layout>} path="/resources" />
        <Route element={<Layout><Contact /></Layout>} path="/contact" />
        <Route element={<Layout><NotFound /></Layout>} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
