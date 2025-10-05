import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SelectedWorks from './pages/SelectedWorks';
import About from './pages/About';
import Contact from './pages/Contact';
import { LanguageProvider } from './context/LanguageContext';

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="works" element={<SelectedWorks />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;
