import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface typeNotificationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  title: string;
  handleReadMore: () => void;
  handleApprove: () => void;
  handleClose: () => void;
  isClose: boolean;
}
