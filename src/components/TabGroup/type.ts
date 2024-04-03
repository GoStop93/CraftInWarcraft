import { ReactNode } from 'react';

export interface ITabGroupProps {
  tabs: { name: string; content: ReactNode; description: string; icon: string }[];
  handleChangeTab?: () => void;
  className?: string;
  collabsGroup?: boolean;
}
