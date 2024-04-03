import { StyledContainer } from './TimelineNavigation.styles';
import { NavigationItem } from './NavigationItem/NavigationItem';
import { ITimelineNavigationProps } from './type';

export const TimelineNavigation = ({ dataSlides, currentSlideId, activeIndex, onItemClick }: ITimelineNavigationProps) => {
  return (
    <StyledContainer activeIndex={activeIndex}>
      {dataSlides.map((slide) => (
        <NavigationItem key={slide.id} isActive={slide.id === currentSlideId} icon={slide.icon} handleClick={() => onItemClick(slide.id)} />
      ))}
    </StyledContainer>
  );
};
