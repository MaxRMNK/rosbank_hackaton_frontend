import { typeTeamStatsProps } from '@/source/features/team-stats/types';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface skills {
  skillName: string;
  title: string;
  image: string;
  keySkill?: boolean;
  type: string;
  level: {
    none: number;
    junior: number;
    middle: number;
    senior: number;
    expert: number;
  };
  targetLevel: {
    none: number;
    junior: number;
    middle: number;
    senior: number;
    expert: number;
  };
}

export interface typeKeyIndicatorsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  teamData: typeTeamStatsProps['teamData'];
  skillData: skills[];
  teamLimit: number;
  skillLimit: number;
}
