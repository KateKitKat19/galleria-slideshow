import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../../data.json';

import { Description } from 'components/Description/Description';
import { DetailedInfo } from 'components/DetailedInfo/DetailedInfo';
import { Navigation } from 'components/Navigation/Navigation';
import { Wrapper } from './DetailedPage.styled';
export const DetailedPage = () => {
  const [currentPainting, setCurrentPainting] = useState(null);
  const { paintingId } = useParams();

  useEffect(() => {
    const paintingInfo = data.find(item => item.id.toString() === paintingId);
    setCurrentPainting(paintingInfo);
  }, [paintingId]);

  return (
    <>
      {currentPainting && (
        <>
          <Wrapper>
            <DetailedInfo painting={currentPainting}></DetailedInfo>
            <Description painting={currentPainting}></Description>
          </Wrapper>
          <Navigation painting={currentPainting}></Navigation>
        </>
      )}
    </>
  );
};
