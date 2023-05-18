import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container } from 'components/Container/Container.styled';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = ({ isSlideshowActive, setSlideshowState }) => {
  return (
    <Container>
      <Header
        isSlideshowActive={isSlideshowActive}
        setSlideshowState={setSlideshowState}
      ></Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
