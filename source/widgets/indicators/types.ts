import { HTMLAttributes, DetailedHTMLProps } from 'react';
import { typeIndicatorsCardProps } from '@/source/features/indicators-card/types';

export interface typeIndicatorsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  indicatorsData: {
    busFactor: number;
    team: typeIndicatorsCardProps['fieldData'];
    skills: typeIndicatorsCardProps['fieldData'];
  };
}
