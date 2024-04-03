export interface INavigationItemProps {
  isActive: boolean;
  icon: string;
  handleClick?: () => ((index: number) => void) | void;
  onClick?: () => ((index: number) => void) | void;
}

export enum ProjectCardEnum {
  FLIPPED = 'flipped',
  UNFLIPPED = 'unflipped',
}
