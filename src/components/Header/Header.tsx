import { StyledContainer, StyledMenuItem } from './Header.styles';
import { NavLink } from 'react-router-dom';


export const Header = () => {
    return (
        <StyledContainer>
            <StyledMenuItem>
                <NavLink
                style={({isActive}) => ({textShadow: isActive ? '0 0 13px white' : 'none', textDecoration: 'none', color: isActive ? 'white' : '#ababab'})}
                    to='/' >
                        LogIn
                </NavLink>
            </StyledMenuItem>
            <StyledMenuItem>
                <NavLink 
                    style={({isActive}) => ({textShadow: isActive ? '0 0 13px white' : 'none', textDecoration: 'none', color: isActive ? 'white' : '#ababab'})}
                    to='/main'>
                        Main
                </NavLink>
            </StyledMenuItem>
            <StyledMenuItem>Shop</StyledMenuItem>
            <StyledMenuItem>News</StyledMenuItem>
            <StyledMenuItem>Blizzcon</StyledMenuItem>
        </StyledContainer>
    );
};
