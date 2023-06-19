import React from 'react';
import type { IconProps } from './types';

const IconCross = React.forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', ...props }, forwardedRef) => {
      return (
        <svg  
            xmlns="http://www.w3.org/2000/svg" 
            width="18" height="18" 
            viewBox="0 0 36 36"
        >
            <path d="M8.977,3.472l5.39,6.446c1.406,1.674,2.578,3.224,3.828,4.896h0.234c1.25-1.798,2.5-3.347,3.75-4.958l5.313-6.384h7.422 L22.023,17.977l13.281,15.496h-7.812l-5.547-6.756c-1.484-1.736-2.734-3.409-4.062-5.206h-0.156 c-1.25,1.797-2.578,3.409-3.984,5.206l-5.469,6.756H0.696l13.437-15.309L1.321,3.472H8.977z">
            </path>
        </svg>
      );
    }
  );
  
  IconCross.displayName = 'cross-icon';
  
  export default IconCross;
