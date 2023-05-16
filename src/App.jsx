import { Routes, Route } from 'react-router-dom';
import { HeroPage } from 'pages/HeroPage/HeroPage';
import { DetailedPage } from 'pages/DetailedPage/DetailedPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HeroPage></HeroPage>}></Route>
      <Route
        path="/:paintingId"
        element={<DetailedPage></DetailedPage>}
      ></Route>
      <Route path="*" element={<HeroPage></HeroPage>}></Route>
    </Routes>
  );
};
