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
            <StyledMenuItem>
                <StyledNavLink to='/timeline'>
                    Timeline
                </StyledNavLink>
            </StyledMenuItem>
            <StyledMenuItem>
                <StyledNavLink to='/explorer'>
                    Explorer
                </StyledNavLink>
            </StyledMenuItem>
        </StyledContainer>
    );
};
