import { StyledContainer, StyledMenuItem, StyledNavLink } from './Header.styles';

export const Header = () => {
    return (
        <StyledContainer>
            <StyledMenuItem>
                <StyledNavLink to='/' >
                    LogIn
                </StyledNavLink>
            </StyledMenuItem>
            <StyledMenuItem>
                <StyledNavLink to='/main'>
                    Main
                </StyledNavLink>
            </StyledMenuItem>
            <StyledMenuItem>Shop</StyledMenuItem>
            <StyledMenuItem>News</StyledMenuItem>
            <StyledMenuItem>Blizzcon</StyledMenuItem>
        </StyledContainer>
    );
};
