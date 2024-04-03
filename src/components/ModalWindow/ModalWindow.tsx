import { MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import { CloseButton, StyledContainer, StyledCover } from './ModalWindow.styles';
import { IModalWindowProps } from './type';
import { IconCross } from '../../assets/icons/navigation_icons';

export const ModalWindow = ({ children, onCloseHandler, hasBackground = false, big = false, medium = false }: IModalWindowProps) => {
  const onClose = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    if (e.target === e.currentTarget) onCloseHandler?.();
  };

  const createWrapper = () => (
    <StyledContainer medium={medium}>
      <CloseButton onClick={onClose} big={big} medium={medium}>
        <IconCross />
      </CloseButton>
      {children}
    </StyledContainer>
  );

  return hasBackground
    ? ReactDOM.createPortal(<StyledCover onClick={onClose}>{createWrapper()}</StyledCover>, document.getElementById('root') as HTMLElement)
    : createWrapper();
};
