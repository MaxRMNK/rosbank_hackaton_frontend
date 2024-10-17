import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface typeSkillInfoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  title: string;
  image: string;
  keySkill?: boolean;
  type: string; // softSkills | hardSkills
}
