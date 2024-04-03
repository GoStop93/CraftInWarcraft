import React from 'react';
import { StyledContainer, StyledTitle, StyledIconsBlock, StyledIcon, ModalContent, ModalHeader, ModalTitle, ModalText } from './RacialTraits.styles';
import { ToolTip } from '../../../components/ToolTip/ToolTip';
import { ModalWindow } from '../../../components/ModalWindow/ModalWindow';

import { IRacialTraitsProps } from './type';
import { SetStateAction, useEffect, useState } from 'react';

export const RacialTraits = React.memo(({ traits }: IRacialTraitsProps) => {
  const [openModalIndex, setOpenModalIndex] = useState(-1);

  const handleOpenModal = (index: SetStateAction<number>) => {
    setOpenModalIndex(index);

    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setOpenModalIndex(-1);

    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <StyledContainer>
      <StyledTitle>RACIAL TRAITS</StyledTitle>
      <StyledIconsBlock>
        {traits.map((trait, index) => (
          <React.Fragment key={index}>
            <ToolTip message={trait.text} title={trait.name}>
              <StyledIcon src={trait.icon} onClick={() => handleOpenModal(index)} />
            </ToolTip>
            {openModalIndex === index && (
              <ModalWindow hasBackground onCloseHandler={handleCloseModal}>
                <ModalContent>
                  <ModalHeader>
                    <StyledIcon modal src={trait.icon} />
                    <ModalTitle>{trait.name}</ModalTitle>
                  </ModalHeader>
                  <ModalText>{trait.text}</ModalText>
                </ModalContent>
              </ModalWindow>
            )}
          </React.Fragment>
        ))}
      </StyledIconsBlock>
    </StyledContainer>
  );
});
