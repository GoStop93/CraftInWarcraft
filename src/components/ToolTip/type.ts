import { ReactNode } from 'react';

export interface IToolTipProps {
  message?: string;
  title?: string;
  content?: ReactNode;
  children?: ReactNode;
  items?: boolean;
}
