import { useState } from 'react';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { Helmet } from 'react-helmet';
import { StyledContainer, StyledHeader, StyledTitile, StyledSubtitle } from './Explorer.styles';
import { ExplorerTabGroup } from './ExplorerTabGroup/ExplorerTabGroup';

export const Explorer = () => {
  const [offset, setOffset] = useState(450);

  useLenis(({ scroll }) => {
    setOffset(scroll);
  });

  return (
    <ReactLenis root>
      <Helmet>
        <title>Explorer</title>
        <link rel="icon" href="favicons/explorer.ico" />
      </Helmet>
      <StyledContainer>
        <StyledHeader>
          <StyledTitile>Become an explorer</StyledTitile>
          <StyledSubtitle>
            Uncover all its mysteries by delving into its diverse aspects. Immerse yourself in a captivating realm of knowledge as you choose your
            desired category.
          </StyledSubtitle>
          <ExplorerTabGroup offset={offset} />
        </StyledHeader>
      </StyledContainer>
    </ReactLenis>
  );
};
