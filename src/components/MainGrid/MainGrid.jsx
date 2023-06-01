import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

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

export const Grid = ({ setSlideshowState }) => {
  const [mediaWidth, setMediaWidth] = useState('mob');
  const [sortedList, setSortedList] = useState(makeDesktopList(data));

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
  const navigate = useNavigate();
  function onImageClick(id) {
    navigate(`/${id}`);
    setSlideshowState(true);
  }

  return (
    <Wrapper>
      {Object.keys(sortedList).map(keyy => {
        return (
          <ListStyled key={nanoid()}>
            {sortedList[keyy].map(item => {
              const aspectRatio = calculateAspectRatio(
                listItemWidth,
                item.height
              );
              return (
                <>
                  <ListItem
                    key={nanoid()}
                    aspectRatio={aspectRatio}
                    onClick={() => onImageClick(item.id)}
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
