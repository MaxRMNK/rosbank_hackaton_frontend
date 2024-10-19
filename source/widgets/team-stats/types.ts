import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { typeTeamTableRowProps } from '../../shared/team-table-row/types';

export interface typeTeamStatsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  teamData: typeTeamTableRowProps['user'][];
  teamLimit: number;
}
