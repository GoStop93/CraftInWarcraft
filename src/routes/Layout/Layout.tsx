import { StyledContainer } from "./Layout.styles";
import { ILayoutProps } from "./type";
import { Header } from "../../components/Header/Header";

export const Layout = ({children}: ILayoutProps) => (
    <>
        <Header/>
        <StyledContainer>
            {children}
        </StyledContainer> 
    </>
);
