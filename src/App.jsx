import { Grid } from 'components/MainGrid/MainGrid';
import { Container } from 'components/Container/Container.styled';
import { Header } from 'components/Header/Header';

export const App = () => {
  return (
    <Container>
      <Header></Header>
      <Grid></Grid>
    </Container>
  );
};
