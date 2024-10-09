import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface typeIndicatorsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  indicatorsData: {
    busFactor: number;
    team: {
      name: string;
      value: number;
    }[];
    skills: {
      name: string;
      value: number;
    }[];
  };
}
