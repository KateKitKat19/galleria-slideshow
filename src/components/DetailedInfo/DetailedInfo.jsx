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
} from './DetailedInfo.styled';

export const DetailedInfo = ({ painting }) => {
  return (
    <Wrap>
      <ImgWrapper>
        <Button type="button" aria-label="see image">
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
        <TextWrap>
          <PaintingName>{painting.name}</PaintingName>
          <ArtistName>{painting.artist.name}</ArtistName>
        </TextWrap>
      </ImgWrapper>

      <AuthorImage
        src={`${require(`../../assets${painting.artist.image}`)}`}
        alt={painting.artist.name}
      ></AuthorImage>
    </Wrap>
  );
};
