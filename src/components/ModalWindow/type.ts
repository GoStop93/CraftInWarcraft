import { ReactNode } from 'react';

export interface IModalWindowProps {
  onCloseHandler?: () => void;
  children: ReactNode | string;
  hasBackground?: boolean;
  big?: boolean;
  medium?: boolean;
}
