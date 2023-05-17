import { Routes, Route } from 'react-router-dom';
import { HeroPage } from 'pages/HeroPage/HeroPage';
import { DetailedPage } from 'pages/DetailedPage/DetailedPage';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HeroPage />}></Route>
        <Route path=":paintingId" element={<DetailedPage />}></Route>
        <Route path="*" element={<HeroPage />}></Route>
      </Route>
    </Routes>
  );
};
