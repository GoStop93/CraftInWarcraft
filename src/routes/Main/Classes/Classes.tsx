import React, { useState } from 'react';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

import { StyledContainer, StyledHeader, StyledTitle, StyledSubtitle, StyledContent, StyledLayer } from './Classes.styles';

import { listOfClasses } from './type';

import { ClassCard } from './ClassCard/ClassCard';

export const Classes = React.memo(() => {
  const [offset, setOffset] = useState(0);

  useLenis(({ scroll }) => {
    setOffset(scroll);
  });

  return (
    <ReactLenis root>
      <StyledContainer>
        <StyledLayer offset={offset} />
        <StyledHeader>
          <StyledTitle>Classes</StyledTitle>
          <StyledSubtitle>
            From knights in shiny armor to skulking stalkers and cunning spellcasters, each class in World of Warcraft presents unique challenges and
            gameplay for you to master. What is your calling?
          </StyledSubtitle>
        </StyledHeader>
        <StyledContent>
          {listOfClasses.map((classData) => (
            <ClassCard
              key={classData.className}
              className={classData.className}
              textColor={classData.textColor}
              shadowColor={classData.shadowColor}
              text={classData.text}
            />
          ))}
        </StyledContent>
      </StyledContainer>
    </ReactLenis>
  );
});
