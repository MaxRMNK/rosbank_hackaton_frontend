import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface typeButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'red' | 'white' | 'gray';
}
