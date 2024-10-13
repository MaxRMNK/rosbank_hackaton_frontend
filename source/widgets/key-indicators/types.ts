import { typeTeamStatsProps } from '@/source/features/team-stats/types';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface typeKeyIndicatorsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  teamData: typeTeamStatsProps['teamData'];
}
