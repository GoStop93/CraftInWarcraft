import { useState, useEffect } from 'react';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { Helmet } from 'react-helmet';
import { CSSTransition } from 'react-transition-group';
import { MyParticles } from '../../components/Particles/Particles';

import {
  StyledContainer,
  StyledGreeting,
  StyledHeader,
  StyledTitle,
  StyledSubtitle,
  StyledLayerBack,
  StyledLayerMiddle,
  StyledLayerFront,
  UpButton,
} from './Main.styles';
import { UpIcon } from '../../assets/icons/navigation_icons';
import { Factions } from './Factions/Factions';
import { Classes } from './Classes/Classes';
import { Races } from './Races/Races';
import { ExplorerLink } from './ExplorerLink/ExplorerLink';

export const Main = () => {
  const [offset, setOffset] = useState(0);
  const name = localStorage.getItem('name');
  const [showButton, setShowButton] = useState(false);

  const duration = 2000;

  useLenis(({ scroll }) => {
    setOffset(scroll);
  });

  useEffect(() => {
    const isScrollPastThreshold = offset > 1500;
    if (isScrollPastThreshold !== showButton) {
      setShowButton(isScrollPastThreshold);
    }
  }, [offset, showButton]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ReactLenis root>
      <Helmet>
        <title>Craft in Warcraft</title>
        <link rel="icon" href="favicons/main.ico" />
      </Helmet>
      <StyledContainer>
        <StyledGreeting>
          <StyledHeader offset={offset}>
            <StyledTitle>
              {' '}
              {name} <br />
              <br /> welcome to information portal
            </StyledTitle>
            <br />
            <StyledSubtitle>Craft in Warcraft</StyledSubtitle>
          </StyledHeader>
          <StyledLayerBack offset={offset} />
          <StyledLayerMiddle offset={offset} />
          <StyledLayerFront offset={offset}>
            <MyParticles id="3" color="#3794fd" min={0.5} count={200} />
          </StyledLayerFront>
        </StyledGreeting>
        <Factions />
        <Classes />
        <Races />
        <ExplorerLink />
        <CSSTransition in={showButton} timeout={duration} classNames="image" mountOnEnter unmountOnExit>
          <div>
            <UpButton onClick={handleScrollToTop}>
              <UpIcon />
            </UpButton>
          </div>
        </CSSTransition>
      </StyledContainer>
    </ReactLenis>
  );
};
