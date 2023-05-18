import { Routes, Route } from 'react-router-dom';
import { HeroPage } from 'pages/HeroPage/HeroPage';
import { DetailedPage } from 'pages/DetailedPage/DetailedPage';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { useState } from 'react';

export const App = () => {
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <SharedLayout
            isSlideshowActive={isSlideshowActive}
            setSlideshowState={setIsSlideshowActive}
          />
        }
      >
        <Route index element={<HeroPage setSlideshowState={setIsSlideshowActive}/>}></Route>
        <Route path=":paintingId" element={<DetailedPage />}></Route>
        <Route path="*" element={<HeroPage />}></Route>
      </Route>
    </Routes>
  );
};
