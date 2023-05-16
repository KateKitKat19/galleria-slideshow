import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../../data.json';
import { Header } from 'components/Header/Header';
import { Container } from 'components/Container/Container.styled';
import { Description } from 'components/Description/Description';
import { DetailedInfo } from 'components/DetailedInfo/DetailedInfo';

export const DetailedPage = () => {
  const [currentPainting, setCurrentPainting] = useState(null);
  const { paintingId } = useParams();

  useEffect(() => {
    const paintingInfo = data.find(item => item.id.toString() === paintingId);
    setCurrentPainting(paintingInfo);
  }, [paintingId]);

  return (
    <Container>
      <Header></Header>
      {currentPainting && (
        <>
          <DetailedInfo painting={currentPainting}></DetailedInfo>
          <Description painting={currentPainting}></Description>
        </>
      )}
    </Container>
  );
};
