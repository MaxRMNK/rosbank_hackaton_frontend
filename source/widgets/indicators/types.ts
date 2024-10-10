import { HTMLAttributes, DetailedHTMLProps } from 'react';
import { typeIndicatorsCardProps } from '@/source/features/indicators-card/types';

export interface typeIndicatorsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  handlerTeam: typeIndicatorsCardProps['handlerClick'];
  handlerSkills: typeIndicatorsCardProps['handlerClick'];
  indicatorsData: {
    busFactor: number;
    team: typeIndicatorsCardProps['fieldData'];
    skills: typeIndicatorsCardProps['fieldData'];
  };
}
