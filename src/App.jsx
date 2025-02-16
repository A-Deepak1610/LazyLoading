import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Lazy load components
const Navbar = React.lazy(() => import('./components/Navbarr'));
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Mainpage = React.lazy(() => import('./components/Mainpage'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <>  
    <Suspense
        fallback={
          <div id="loading-spinner">
            <div className="spinner"></div>
          </div>
        }
      >
        <Navbar />
      </Suspense>
      <Routes>
        <Route
          path="/LazyLoading/home"
          element={
            <Suspense
              fallback={
                <div id="loading-spinner">
                  <div className="spinner"></div>
                </div>
              }
            >
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/LazyLoading/about"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/LazyLoading/mainpage"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Mainpage />
            </Suspense>
          }
        />
        <Route
          path="/LazyLoading/contact"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Contact />
            </Suspense>
          }
        />
      </Routes>
      </>

  );
}

export default App;
