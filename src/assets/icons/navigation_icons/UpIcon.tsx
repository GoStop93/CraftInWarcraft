import React from 'react';
import type { IconProps } from './types';

const UpIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', ...props }, forwardedRef) => {
      return (
        <svg 
            height="800px" 
            width="800px" version="1.1" 
            id="Layer_1" 
            xmlns="http://www.w3.org/2000/svg"
	        viewBox="0 0 512 512"
            {...props}
            ref={forwardedRef}
        >
            <g>
            <polygon points="416.16,287.344 272.08,429.504 128,287.344 128,150.928 272.08,293.328 416.16,150.928"/>
            </g>
            <polygon 
                points="400.16,271.344 256.08,413.504 112,271.344 112,134.928 256.08,277.328 400.16,134.928 "
            />
        </svg>
      );
    }
  );
  
  UpIcon.displayName = 'up-icon';
  
  export default UpIcon;
