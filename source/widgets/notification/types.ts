import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface typeNotificationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  title: string;
  description: string;
  handleReadMore: () => void;
  handleApprove: () => void;
}
