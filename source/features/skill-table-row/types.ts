import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface typeLevel {
  [none: string]: number;
  junior: number;
  middle: number;
  senior: number;
  expert: number;
}

export interface typeSkillTableRowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  skillName: string;
  title: string;
  image: string;
  keySkill?: boolean;
  type: string;
  level: typeLevel;
  targetLevel: typeLevel;
  // sumPeople?: number;
  // setIsPeople: React.Dispatch<React.SetStateAction<number>>;
}
