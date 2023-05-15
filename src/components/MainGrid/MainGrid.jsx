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
    };
    handleResize();
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
                listItemWidth,
                item.height
              );
              return (
                <>
                  <ListItem
                    key={item.name}
                    aspectRatio={aspectRatio}
                    onClick={console.log('click!!!')}
                  >
                    <Image
                      srcSet={`
              ${require(`../../assets${item.images.thumbnail}`)} 375w,
              ${require(`../../assets${item.images.gallery}`)} 768w,
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
