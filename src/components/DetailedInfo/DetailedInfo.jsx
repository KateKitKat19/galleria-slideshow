import { useState } from 'react';
import { ModalWindow } from '../Modal/Modal';

import {
  Wrap,
  Button,
  Painting,
  ImgWrapper,
  ButtonText,
  TextWrap,
  PaintingName,
  ArtistName,
  AuthorImage,
  Container,
} from './DetailedInfo.styled';

export const DetailedInfo = ({ painting }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function onEscapeClick(evt) {
    if (evt.code === 'Escape') {
      this.setState({ isModalOpen: false });
      window.removeEventListener('keydown', onEscapeClick);
    }
  }

  function onImageClick() {
    console.log('Image was clicked!!!');
    setIsModalOpen(true);
    window.addEventListener('keydown', onEscapeClick);
  }

  function onBackdropClick(evt) {
    if (evt.target === evt.currentTarget) {
      setIsModalOpen(false);
      window.removeEventListener('keydown', onEscapeClick);
    }
  }

  return (
    <Wrap>
      {isModalOpen && (
        <ModalWindow
          url={`${require(`../../assets${painting.images.gallery}`)}`}
          alt={painting.name}
          onClose={onBackdropClick}
        ></ModalWindow>
      )}
      <ImgWrapper>
        <Button type="button" aria-label="see image" onClick={onImageClick}>
          <ButtonText>View image</ButtonText>
        </Button>
        <Painting
          srcSet={`
      ${require(`../../assets${painting.images.hero.small}`)} 375w,
      ${require(`../../assets${painting.images.hero.large}`)} 768w,
      ${require(`../../assets${painting.images.hero.large}?`)} 1280w
    `}
          src={`${require(`../../assets${painting.images.hero.small}`)}`}
          alt={painting.name}
        ></Painting>
        <Container>
          <TextWrap>
            <PaintingName>{painting.name}</PaintingName>
            <ArtistName>{painting.artist.name}</ArtistName>
          </TextWrap>
          <AuthorImage
            src={`${require(`../../assets${painting.artist.image}`)}`}
            alt={painting.artist.name}
          ></AuthorImage>
        </Container>
      </ImgWrapper>
    </Wrap>
  );
};
