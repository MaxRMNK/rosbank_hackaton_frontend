import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface typeTagListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  tags: {
    title: string;
  }[];
}
