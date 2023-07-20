import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { AvailableClasses } from "./AvailableClasses/AvailableClasses";
import { RacialTraits } from "./RacialTraits/RacialTraits";
import { RaceInformation } from "./RaceInformation/RaceInformation";

import BackIcon from '../../assets/icons/navigation_icons/IconPrev.png';

import { 
    StyledContainer, 
    StyledHeader, 
    StyledImageLeft, 
    StyledImageRight, 
    StyledLayerBack,
    StyledContent,
    StyledTitle,
    StyledFactionIcon,
    StyledRaceName,
    StyledRaceLogo,
    StyledDescriptionBlock,
    Line,
    StyledDescriptionText,
    StyledClassesAndTraits,
    BackButton,
    BackButtonImage,
    BackButtonText
} from "./Race.styles";

import { raceInformation } from "./type";

const formatRaceName = (raceName: string) => {
    return raceName.replace("_", " ").replace(/\b\w/g, (match) => match.toUpperCase());
};

const Race = () => {
    const navigate = useNavigate();
    const { id = "" } = useParams();
    const formattedRaceName = formatRaceName(id);

    const [isHovered, setIsHovered] = useState(false);
    const [offset, setOffset] = useState(0);
    const [isButtonFixed, setIsButtonFixed] = useState(false);

    const raceInfo = raceInformation[id];

    const navigateBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        if (!raceInfo) {
          navigate("*");
        }
      }, [raceInfo, id, navigate]);

    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                setOffset(window.scrollY);

                const scrollThreshold = 700;

                (window.scrollY >= scrollThreshold) ? setIsButtonFixed(true) : setIsButtonFixed(false);
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return !raceInfo ? null : (
        <StyledContainer>
            <StyledHeader>
                <StyledImageLeft 
                    src={raceInfo.imageLeft} 
                    offset={offset}
                    leftHeight={raceInfo.leftHeight}
                    left={raceInfo.left}
                    isHovered={isHovered}
                    color={raceInfo.color}
                />
                <StyledImageRight 
                    src={raceInfo.imageRight} 
                    offset={offset}
                    rightHeight={raceInfo.rightHeight} 
                    right={raceInfo.right}
                    isHovered={isHovered}
                    color={raceInfo.color}
                />
                <StyledLayerBack background={raceInfo.backgroundImageFirst} offset={offset} />
                <StyledTitle offset={offset}>
                    <StyledFactionIcon src={raceInfo.fractionIcon} />
                    <StyledRaceName>{raceInfo.text ? raceInfo.text : formattedRaceName}</StyledRaceName>
                </StyledTitle>
                <BackButton
                    position={isButtonFixed} 
                    color={raceInfo.secondColor}
                    onClick={navigateBack} 
                >
                    <BackButtonImage src={BackIcon} />
                    <BackButtonText>Back</BackButtonText>
                </BackButton>
            </StyledHeader>
            <StyledContent background={raceInfo.backgroundImageSecond}>
                <StyledRaceLogo 
                    src={raceInfo.raceIcon}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
                <StyledDescriptionBlock>
                    <Line />
                    <StyledDescriptionText>{raceInfo.description}</StyledDescriptionText>
                    <Line />
                </StyledDescriptionBlock>
                <StyledClassesAndTraits>
                    <AvailableClasses classes={raceInfo.availableClasses} />
                    <RacialTraits traits={raceInfo.racialTraits}/>
                </StyledClassesAndTraits>
                <RaceInformation 
                    color={raceInfo.color} 
                    raceAdditionalInformation={raceInfo.raceAdditionalInformation} 
                />
            </StyledContent>
        </StyledContainer>
    );
};

export default Race;
