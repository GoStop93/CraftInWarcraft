import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import frame from '../../../assets/images/frame.png';
import horde from '../../../assets/images/main/horde.png';
import hordeSmall from '../../../assets/images/main/horde_small.jpg';
import allianceSmall from '../../../assets/images/main/alliance_small.jpg';
import alliance from '../../../assets/images/main/aliance.png';
import { 
    StyledContainer, 
    StyledInformation,
    StyledHeader,
    StyledTitle,
    StyledSubtitle,
    StyledContentHorde,
    StyledFaction,
    StyledHordeFrame,
    StyledAllianceFrame,
    StyledHordeImage,
    StyledAllianceImage,
    StyledFactionTitle,
    StyledFactionDescription,
    StyledHordeIcon,
    StyledAllianceIcon
} from './Factions.styles';


export const Factions = () => {
    const [showHorde, setShowHorde] = useState(false);
    const [showAlliance, setShowAlliance] = useState(false);

    const duration = 900;

    return (
        <StyledContainer>
            <StyledInformation>
                <StyledHeader>
                    <StyledTitle>Who Will You Become</StyledTitle>
                    <StyledSubtitle>Be the hero you want to be. Will you fight as a hulking Tauren Warrior? Or perhaps an inventive Gnome Warlock? The choice is yours—but first, you must pick a side.</StyledSubtitle>
                </StyledHeader>
                <StyledContentHorde>
                    <StyledFaction>
                        <StyledHordeFrame src={frame} alt="frame"
                        onClick={() => {setShowHorde(!showHorde); setShowAlliance(false)}}/>
                        <StyledHordeImage className='horde_img' src={hordeSmall} alt="Horde"/>
                        <StyledFactionTitle>For the Horde</StyledFactionTitle>
                        <StyledFactionDescription>The Horde fights for honor and freedom, surviving in a world that questions their unity and strength.</StyledFactionDescription>
                        <CSSTransition
                            in={showHorde}
                            timeout={duration}
                            classNames='image'
                            mountOnEnter
                            unmountOnExit
                            >
                            <StyledHordeIcon className='horde' src={horde} alt="horde" />
                        </CSSTransition>
                    </StyledFaction>
                    <StyledFaction>
                        <StyledAllianceFrame src={frame} alt="frame" 
                            onClick={() => {setShowAlliance(!showAlliance); setShowHorde(false)}}/>
                        <StyledAllianceImage className='alliance_img' src={allianceSmall} alt="Alliance" />
                        <StyledFactionTitle>For the Alliance</StyledFactionTitle>
                        <StyledFactionDescription>The Alliance fights for justice and duty, fervently devoted to those who fight under their banner.</StyledFactionDescription>
                        <CSSTransition
                            in={showAlliance}
                            timeout={duration}
                            classNames='image'
                            mountOnEnter
                            unmountOnExit
                            >
                            <StyledAllianceIcon className='alliance' src={alliance} alt="horde" />
                        </CSSTransition>
                    </StyledFaction>
                </StyledContentHorde>
            </StyledInformation>
        </StyledContainer>
    );
};
