import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import TweetsPage from './pages/TweetsPage/TweetsPage';


// const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
// const TweetsPage = lazy(() => import("./pages/TweetsPage/TweetsPage"));


export const UserRoutes = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
        {/* <Route path="*" element={<HomePage />} /> */}
      </Routes>
    </Suspense>
  );
};
