import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Pages/Home"));
const College = lazy(() => import("./Pages/Colleges"));
const Courses = lazy(() => import("./Pages/Courses"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Suspense
                fallback={<div className="animate-pulse"> Loading... </div>}
              >
                <Home />
              </Suspense>
            }
          />

          <Route
            exact
            path="/colleges"
            element={
              <Suspense
                fallback={<div className="animate-pulse"> Loading... </div>}
              >
                <College />
              </Suspense>
            }
          />

          <Route
            exact
            path="/courses"
            element={
              <Suspense
                fallback={<div className="animate-pulse"> Loading... </div>}
              >
                <Courses />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
