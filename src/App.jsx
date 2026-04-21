import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import { AnimatePresence } from 'framer-motion';

const Home = lazy(() => import('./components/Home'));
const ProjectDetail = lazy(() => import('./components/ProjectDetail'));

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="noise-overlay" />
      <ScrollProgress />
      <Navbar />

      <main className="relative z-10 flex flex-col min-h-screen">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-bg">
            <div className="w-8 h-8 rounded-full border-2 border-accent border-t-transparent animate-spin" />
          </div>
        }>
          <div className="flex-grow">
            <AnimatedRoutes />
          </div>
        </Suspense>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
