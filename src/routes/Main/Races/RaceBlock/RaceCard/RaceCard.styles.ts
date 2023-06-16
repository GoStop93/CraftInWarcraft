import styled from "styled-components";
import cardBackground from '../../../../../assets/images/race/card_background.jpg';
import FullImage from '../../../../../assets/icons/races/races_icons/human_full.png'


export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledBox = styled.div<{ color: string }>`
    position: relative;
    width: 160px;
    height: 212px;
    background: url(${cardBackground});
    border: 1px solid ${(props) => props.color};
    &:hover {
        border-color: #f8b700;
        cursor: var(--custom-cursor-hover);
    }
`;

export const StyledBoxForImage = styled.div`
    position: relative;
    width: 160px;
    height: 212px;
    overflow: hidden;
`;

export const StyledLogo = styled.img`
    position: absolute;
    bottom: -3vh;
    left: 50%;
    transform: translateX(-50%);
`;

export const StyledFullImage = styled.img`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 195px;
    height: 251px;
    transition: all 0.3s;
    ${StyledBox}:hover & {
        transform: translateX(-50%) scale(1.3);
    }
`;

export const StyledPartImage = styled.img`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 195px;
    height: 251px;
    transition: all 0.3s;
    ${StyledBox}:hover & {
        transform: translateX(-50%) scale(1.3);
    }
`;

export const StyledRaceName = styled.div`
    margin: 4vh auto;
    color :#f8b700;
    font-size: 2.5vh;
`;
