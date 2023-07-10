import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import Sylvana from '../../../assets/images/background/explorerLink/sylvana.png';
import { 
    StyledContainer, 
    StyledLayerBack, 
    StyledImg,
    StyledFristPartTitle,
    StyledSecondPartTitle,
} from "./ExplorerLink.styles";
import { RainEffect } from '../../../components/RainEffect/RainEffect';

export const ExplorerLink = () => {
    const [rainFalling, setRainFalling] = useState(false);

    const handleMouseEnter = () => {
        setRainFalling(true);
    };
    
    const handleMouseLeave = () => {
        setRainFalling(false);
    };

    const duration = 2000;

    return (
        <StyledContainer>
            <StyledLayerBack>
                <Link style={{textDecoration: 'none'}} to={`/explorer`}>
                    <StyledImg 
                        src={Sylvana}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave} 
                    />
                </Link>
                <CSSTransition
                    in={rainFalling}
                    timeout={duration}
                    classNames='image'
                    mountOnEnter
                    unmountOnExit
                >
                    <div>
                        <StyledFristPartTitle>Begin the</StyledFristPartTitle>
                        <StyledSecondPartTitle>exploration</StyledSecondPartTitle>
                    </div>
                </CSSTransition>
                <RainEffect rain={rainFalling} />
            </StyledLayerBack>
        </StyledContainer>
    );
};
