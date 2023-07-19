import { useEffect, useState } from 'react';
import { 
    StyledToolTip, 
    StyledToolTipContent, 
    StyledWrapper, 
    StyledToolTipText, 
    StyledToolTipTitle 
} from './ToolTip.styles';
import { IToolTipProps } from './type';

export const ToolTip = ({
  message,
  title,
  children,
  items,
  content,
}: IToolTipProps) => {

    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: { pageX: any; pageY: any; }) => {
        setTooltipPosition({ x: event.pageX, y: event.pageY });
      };
    
      const handleScroll = () => {
        const { x, y } = tooltipPosition;
        const scrollX = window.scrollX || window.scrollX;
        const scrollY = window.scrollY || window.scrollY;
        setTooltipPosition({ x: x - scrollX, y: y - scrollY });
      };
    
      useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <StyledWrapper>
            <StyledToolTip tooltipPosition={tooltipPosition} items={items}>
            <StyledToolTipContent>
                {title? (
                  <StyledToolTipTitle>{title}</StyledToolTipTitle>
                ): null}
                {message ? (
                  <StyledToolTipText>{message}</StyledToolTipText>
                ): null}
                {content}
            </StyledToolTipContent>
            </StyledToolTip>
            {children}
        </StyledWrapper>
    );
};
