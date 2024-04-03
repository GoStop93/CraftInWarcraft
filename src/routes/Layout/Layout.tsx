import { StyledContainer } from './Layout.styles';
import { ILayoutProps } from './type';
import { Header } from '../../components/Header/Header';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const Layout = ({ children }: ILayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <StyledContainer>{children}</StyledContainer>
    </>
  );
};
