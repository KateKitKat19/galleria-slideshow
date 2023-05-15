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
// import Masonry from 'react-masonry-css';
import { useState, useEffect } from 'react';
import data from '../../data.json';
import { makeTabletList } from 'helpers/createTabletMarkup';
import { makeDesktopList } from 'helpers/createDesktopMarkup';
import {
  Wrapper,
  Image,
  ListItem,
  NameBlock,
  NameStyled,
  Artist,
  Mask,
  ListStyled,
} from './MainGrid.styled';

export const Grid = () => {
  const [mediaWidth, setMediaWidth] = useState('mob');
  const [sortedList, setSortedList] = useState(makeTabletList(data));

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setMediaWidth('mob');
      } else if (window.innerWidth > 767 && window.innerWidth <= 1439) {
        setMediaWidth('tab');
        setSortedList(makeTabletList(data));
      } else {
        setMediaWidth('desktop');
        setSortedList(makeDesktopList(data));
      }
      sortedForMediaPaintings();
    };
    handleResize();

    function sortedForMediaPaintings() {
      switch (mediaWidth) {
        case 'mob':
          setSortedList(makeTabletList(data));
          break;
        case 'tab':
          setSortedList(makeTabletList(data));
          break;
        case 'desktop':
          setSortedList(makeDesktopList(data));
          break;
        default:
          setSortedList(makeTabletList(data));
          break;
      }
    }
    // Add event listener to window resize

    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mediaWidth]);

  const calculateAspectRatio = (width, height) => {
    return (height / width) * 100;
  };

  const getListItemWidth = () => {
    if (mediaWidth === 'desktop') {
      return 310; // Width of the ListItem for desktop
    } else if (mediaWidth === 'tab') {
      return 324; // Width of the ListItem for tablet
    } else {
      return 327; // Default width of the ListItem for mobile
    }
  };

  const listItemWidth = getListItemWidth();

  return (
    <Wrapper>
      {Object.keys(sortedList).map(keyy => {
        return (
          <ListStyled key={keyy}>
            {sortedList[keyy].map(item => {
              const aspectRatio = calculateAspectRatio(
                listItemWidth, // Width of the ListItem
                item.height // Height of the image (adjust as per your image object structure)
              );
              return (
                <>
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
                </>
              );
            })}
          </ListStyled>
        );
      })}
    </Wrapper>
  );
};
