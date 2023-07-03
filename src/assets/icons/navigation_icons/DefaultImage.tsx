import React from 'react';

import type { IconProps } from './types';

const DefaultImage = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <g clipPath="url(#clip0_488_267089)">
          <mask
            id="mask0_488_267089"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="96"
            height="96"
          >
            <path d="M0 0H96V96H0V0Z" fill="#1A1A1A" />
          </mask>
          <g mask="url(#mask0_488_267089)">
            <rect width="96" height="96" fill="#2B2B2B" />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33.1895 60.3419C32.5078 61.0235 32.5078 62.1287 33.1895 62.8103C33.8711 63.492 34.9763 63.492 35.6579 62.8103L39.4376 59.0307C41.8021 60.8687 44.7733 61.9633 48.0001 61.9633C55.712 61.9633 61.9638 55.7115 61.9638 47.9996C61.9638 44.7728 60.8692 41.8016 59.0312 39.4371L62.8108 35.6574C63.4924 34.9758 63.4924 33.8706 62.8108 33.189C62.1292 32.5073 61.024 32.5073 60.3424 33.189L56.5627 36.9686C54.1982 35.1305 51.227 34.036 48.0001 34.036C40.2882 34.036 34.0365 40.2877 34.0365 47.9996C34.0365 51.2265 35.131 54.1977 36.9691 56.5622L33.1895 60.3419ZM41.932 56.5362C43.644 57.7553 45.7383 58.4724 48.0001 58.4724C53.784 58.4724 58.4728 53.7836 58.4728 47.9996C58.4728 45.7378 57.7558 43.6435 56.5367 41.9315L41.932 56.5362ZM54.0683 39.4631L39.4636 54.0678C38.2444 52.3558 37.5274 50.2614 37.5274 47.9996C37.5274 42.2157 42.2162 37.5269 48.0001 37.5269C50.2619 37.5269 52.3563 38.2439 54.0683 39.4631Z"
            fill={color}
            fillOpacity="0.2"
          />
        </g>
        <defs>
          <clipPath id="clip0_488_267089">
            <rect width="96" height="96" rx="24" fill={color} />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
DefaultImage.displayName = 'default-image';

export default DefaultImage;