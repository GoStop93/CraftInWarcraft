import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import { ProjectCardEnum } from './type';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';

import PrevIcon from '../../assets/icons/navigation_icons/IconPrev.png';
import NextIcon from '../../assets/icons/navigation_icons/IconNext.png';
import BackImage from '../../assets/images/timeline/gone.jpg';

import { 
    StyledContainer, 
    TopContent, 
    BottomContent,
    BottomContainer,
    BottomImage, 
    BottomTextContent,
    StyledTitile,
    StyledText,
    StyledPrev,
    StyledNext,
    StyledPrevIcon,
    StyledNextIcon,
    StyledCard,
    StyledContainerCard,
    StyledVideo,
    StyledBackCardText,
    StyledBackImage,
    BackPlayContent,
    StyledPlayIcon,
    StyledVideoTitle,
} from "./Timeline.styles";

import { TimelineNavigation } from "./TimelineNavigation/TimelineNavigation";
import { dataSlides } from './data';

const TimeLine = () => {
    const [currentSlideId, setCurrentSlideId] = useState(1);
    const [activeIndex, setActiveIndex] = useState(currentSlideId - 1);
    const [stateCard, setStateCard] = useState<ProjectCardEnum>(ProjectCardEnum.FLIPPED);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handlePrevSlide = () => {
        const prevSlideId = currentSlideId === 1 ? dataSlides.length : currentSlideId - 1;
        setCurrentSlideId(prevSlideId);

        setActiveIndex(prevSlideId - 1);
    };

    const handleNextSlide = () => {
        const nextSlideId = currentSlideId === dataSlides.length ? 1 : currentSlideId + 1;
        setCurrentSlideId(nextSlideId);

        setActiveIndex(nextSlideId - 1);
    };

    const handleNavigationItemClick = (slideId: number) => {
        setCurrentSlideId(slideId);
        setActiveIndex(slideId - 1);
    };

    const onCardFlipHandler = () => {
        setStateCard(prev => (prev === ProjectCardEnum.FLIPPED ? ProjectCardEnum.UNFLIPPED : ProjectCardEnum.FLIPPED));
    };

    const currentSlide = dataSlides.find((slide) => slide.id === currentSlideId) || dataSlides[0];
    const isBackDisabled = currentSlideId === 1;
    const isNextDisabled = currentSlideId === dataSlides.length;

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };

    const openModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => { 
        event.stopPropagation();
        setModalIsOpen(true);

        document.body.style.overflow = "hidden";
    };
      
    const closeModal = () => {
        setModalIsOpen(false);

        document.body.style.overflow = "auto";
    };

    useEffect(() => {
        setStateCard(ProjectCardEnum.FLIPPED);
    }, [currentSlideId]);

    useEffect(() => {
        const handleKeyDown = (event: { key: string; }) => {
          if (event.key === "Escape") {
            closeModal();
          }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
        window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>Timeline</title>
                <link rel="icon" href="/favicons/timeline.ico" />
            </Helmet>
            <StyledContainer>
                {isBackDisabled ? null : (
                    <StyledPrev onClick={handlePrevSlide}>
                        <StyledPrevIcon src={PrevIcon} />
                    </StyledPrev>
                )}
                {isNextDisabled ? null : (
                    <StyledNext onClick={handleNextSlide}>
                        <StyledNextIcon src={NextIcon} />
                    </StyledNext>
                )}
                <TopContent background={currentSlide.background} />
                <TimelineNavigation
                    dataSlides={dataSlides}
                    currentSlideId={currentSlideId}
                    activeIndex={activeIndex}
                    onItemClick={handleNavigationItemClick} />
                <BottomContent>
                    <BottomContainer>
                        <StyledContainerCard onClick={onCardFlipHandler}>
                            <StyledCard stateCard={stateCard}>
                                <BottomImage background={currentSlide.image} />
                                <StyledVideo>
                                    {currentSlide.url ? (
                                        <>
                                            <StyledVideoTitle hovered={hovered}>Cinematic Trailer</StyledVideoTitle>
                                            <BackPlayContent
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                                onClick={openModal}
                                                background={currentSlide.videoBackground}
                                                style={stateCard === ProjectCardEnum.FLIPPED ? { pointerEvents: "none" } : {}}
                                            >
                                                <StyledPlayIcon color={hovered ? '#FF0000' : '#F1B924'} />
                                            </BackPlayContent>
                                        </>
                                    ) : (
                                        <>
                                            <StyledBackImage src={BackImage} />
                                            <StyledBackCardText>
                                                We're going to use this extra bandwidth to run an ajax request and force the CDN to put the page you're looking for right above the fold... aaaaand it's gone. Your page is gone. Poof. It's all gone.
                                            </StyledBackCardText>
                                        </>
                                    )}
                                </StyledVideo>
                            </StyledCard>
                        </StyledContainerCard>
                        <BottomTextContent>
                            <StyledTitile>{currentSlide.title}</StyledTitile>
                            <StyledText>{currentSlide.text}</StyledText>
                        </BottomTextContent>
                    </BottomContainer>
                </BottomContent>
                {modalIsOpen ? (
                    <ModalWindow medium hasBackground onCloseHandler={closeModal}>
                        <ReactPlayer
                            url={currentSlide.url}
                            width="718px"
                            height="404px"
                            controls />
                    </ModalWindow>
                ) : null}
            </StyledContainer>
        </>
    );
};

export default TimeLine;
