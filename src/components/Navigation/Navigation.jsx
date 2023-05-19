import { useNavigate, useParams } from 'react-router-dom';

import NextBtn from './nextBtn.svg';
import prevBtn from './prevBtn.svg';
import { CommonWrap, Name, Artist, BtnNav, Icons } from './Navigation.styled';

export const Navigation = ({ painting }) => {
  const navigate = useNavigate();
  const { paintingId } = useParams();

  function openNextSlide() {
    const nextImageId = Number(paintingId) + 1;
    navigate(`/${nextImageId}`);
  }

  function openPreviousSlide() {
    const nextImageId = Number(paintingId) - 1;
    navigate(`/${nextImageId}`);
  }

  return (
    <CommonWrap>
      <div>
        <Name>{painting.name}</Name>
        <Artist>{painting.artist.name}</Artist>
      </div>
      <div>
        <BtnNav
          type="button"
          aria-label="previous slide"
          onClick={openPreviousSlide}
          disabled={Number(paintingId) <= 1}
        >
          <Icons src={prevBtn} alt="previous slide" />
        </BtnNav>
        <BtnNav
          type="button"
          aria-label="next slide"
          onClick={openNextSlide}
          disabled={Number(paintingId) >= 15}
        >
          <Icons src={NextBtn} alt="next slide" />
        </BtnNav>
      </div>
    </CommonWrap>
  );
};
