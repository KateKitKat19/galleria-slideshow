import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from 'components/Header/Header';
import { Container } from 'components/Container/Container.styled';
export const SharedLayout = () => {
  return (
    <Container>
       <Header></Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};