import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../../data.json';

import { Description } from 'components/Description/Description';
import { DetailedInfo } from 'components/DetailedInfo/DetailedInfo';
import { Navigation } from 'components/Navigation/Navigation';

export const DetailedPage = () => {
  const [currentPainting, setCurrentPainting] = useState(null);
  console.log('DetailedPage   currentPainting:', currentPainting);
  const { paintingId } = useParams();

  useEffect(() => {
    const paintingInfo = data.find(item => item.id.toString() === paintingId);
    setCurrentPainting(paintingInfo);
  }, [paintingId]);

  return (
    <>
      {currentPainting && (
        <>
          <DetailedInfo painting={currentPainting}></DetailedInfo>
          <Description painting={currentPainting}></Description>
          <Navigation painting={currentPainting}></Navigation>
        </>
      )}
    </>
  );
};
