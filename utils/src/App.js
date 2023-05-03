import './App.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/homePage/home'));
const GrayScale = lazy(() => import('./pages/grayScalePage/grayScale'));

function App() {
  return (
    <>
    <Suspense fallback={<div className="container">Loading...</div>}>
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="grayScale" element={<GrayScale />} />
          </Routes>
       </Suspense>
    </>
  );
}

export default App;
