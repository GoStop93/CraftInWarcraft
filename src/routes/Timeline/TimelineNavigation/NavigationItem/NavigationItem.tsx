import { StyledImage } from "./NavigationItem.styles";
import { INavigationItemProps } from "../../type";

export const NavigationItem = ({ isActive, handleClick, icon }: INavigationItemProps) => (
    <StyledImage isActive={isActive}  onClick={handleClick} src={icon} />
);
