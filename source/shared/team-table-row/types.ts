import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { typeTagListSkillsProps } from '@/source/shared/ui/tag-list-skills/types';

interface typeUser {
  userPhoto: string;
  firstName: string;
  lastName: string;
  keyEmployee: boolean;
  userRole: string;
  grade: string;
  skills: typeTagListSkillsProps['tags'];
  expertise: number;
  progress: number;
}

export interface typeTeamTableRowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  user: typeUser;
  requestForTraining: (e: any) => void;
}
