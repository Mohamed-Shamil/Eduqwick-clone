import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {lazy,Suspense} from 'react'
import College from './Pages/Colleges';

const Home = lazy(() => import('./Pages/Home'));

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route
              exact
              path="/"
              element={
                <Suspense fallback={<div className='animate-pulse'> Loading... </div>}>
                  <Home />
                </Suspense>
              }
           />

<Route
              exact
              path="/colleges"
              element={
                <Suspense fallback={<div className='animate-pulse'> Loading... </div>}>
                  <College />
                </Suspense>
              }
           />
        
    </Routes>
    </BrowserRouter>
        </>
  )
}

export default App