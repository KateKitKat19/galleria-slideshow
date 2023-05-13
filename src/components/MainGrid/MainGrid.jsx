// import StarryNight from '../../assets/starry-night/gallery.jpg';
// import GirlWithAPearl from '../../assets/girl-with-pearl-earring/gallery.jpg';
// import Guernica from '../../assets/guernica/gallery.jpg';
// import Magdalene from '../../assets/penitent-magdalene/gallery.jpg';

// import StormOfTheSea from '../../assets/the-storm-on-the-sea-of-galilee/gallery.jpg';
// import TheGreatWave from '../../assets/the-great-wave-off-kanagawa/gallery.jpg';
// import VanGogh from '../../assets/van-gogh-self-portrait/gallery.jpg';
// import Gypsy from '../../assets/the-sleeping-gypsy/gallery.jpg';

// import Lady from '../../assets/lady-with-an-ermine/gallery.jpg';
// import TheNightCafe from '../../assets/the-night-cafe/gallery.jpg';
// import TheBasket from '../../assets/the-basket-of-apples/gallery.jpg';
// import TheBoy from '../../assets/the-boy-in-the-red-vest/gallery.jpg';

// import Arnolfini from '../../assets/arnolfini-portrait/gallery.jpg';
// import MonaLisa from '../../assets/mona-lisa/gallery.jpg';
// import TheSwing from '../../assets/the-swing/gallery.jpg';
import Masonry from 'react-masonry-css';

import Data from '../../data.json';

import {
  Wrapper,
  Image,
  ListItem,
  NameBlock,
  NameStyled,
  Artist,
  Mask,
} from './MainGrid.styled';
export const Grid = () => {
  const breakpoints = {
    default: 4,
    1339: 3,
    1100: 2,
    767: 1,
  };

  const calculateAspectRatio = (width, height) => {
    return (height / width) * 100;
  };

  const getListItemWidth = () => {
    if (window.innerWidth >= 1440) {
      return 310; // Width of the ListItem for desktop
    } else if (window.innerWidth >= 768) {
      return 324; // Width of the ListItem for tablet
    } else {
      return 327; // Default width of the ListItem for mobile
    }
  };

  const listItemWidth = getListItemWidth();
  return (
    <Wrapper>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {Data.map(item => {
          const aspectRatio = calculateAspectRatio(
            listItemWidth, // Width of the ListItem
            item.height // Height of the image (adjust as per your image object structure)
          );

          return (
            <ListItem key={item.name} aspectRatio={aspectRatio}>
              <Image
                srcSet={`
              ${require(`../../assets${item.images.thumbnail}`)} 375w,
              ${require(`../../assets${item.images.thumbnail}`)} 768w,
              ${require(`../../assets${item.images.hero.large}?`)} 1280w
            `}
                src={require(`../../assets${item.images.gallery}`)}
                alt={item.name}
              ></Image>
              <Mask>
                <NameBlock>
                  <NameStyled>{item.name}</NameStyled>
                  <Artist>{item.artist.name}</Artist>
                </NameBlock>
              </Mask>
            </ListItem>
          );
        })}
      </Masonry>
    </Wrapper>
  );
};
