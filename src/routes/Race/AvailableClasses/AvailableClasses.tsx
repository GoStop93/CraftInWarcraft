import React from 'react';
import { Link } from 'react-router-dom';
import { ToolTip } from '../../../components/ToolTip/ToolTip';
import { StyledContainer, StyledTitle, StyledIconsBlock, StyledIcon } from './AvailableClasses.styles';

import { IAvailableClassesProps, availableClasses } from './type';

export const AvailableClasses = React.memo(({ classes }: IAvailableClassesProps) => {
  const filteredClasses = availableClasses.filter((cls) => classes.includes(cls.className));
  return (
    <StyledContainer>
      <StyledTitle>AVAILABLE CLASSES</StyledTitle>
      <StyledIconsBlock>
        {filteredClasses.map((cls) => (
          <Link key={cls.className} style={{ textDecoration: 'none' }} to={`/main/class/${cls.className}`}>
            <ToolTip message={cls.description} title={cls.text ? cls.text : cls.className}>
              <StyledIcon src={cls.icon} />
            </ToolTip>
          </Link>
        ))}
      </StyledIconsBlock>
    </StyledContainer>
  );
});
