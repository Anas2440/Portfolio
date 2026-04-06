import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWidget from './components/FloatingWidget';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';

/** Hides the native cursor so our custom one takes over */
const useCursorStyle = () => {
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => { document.body.style.cursor = ''; };
  }, []);
};

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
  },
};

/** Wraps each routed page in the shared transition */
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Home />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  useCursorStyle();

  return (
    <ThemeProvider>
      <Router>
        {/* Premium custom cursor overlay */}
        <CustomCursor />

        <div
          className="min-h-screen bg-[#080809]"
          style={{ cursor: 'none' }}
        >
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
          <FloatingWidget />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
