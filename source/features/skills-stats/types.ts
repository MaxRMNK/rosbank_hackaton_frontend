import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface typeSkills {
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
  sumPeople?: number;
}

export interface typeSkillsStatsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  skillData: typeSkills[];
}
