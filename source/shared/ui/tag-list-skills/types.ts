import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface typeTagListSkillsProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  tags: {
    skill: string;
    level: 'none' | 'beginner' | 'intermediate' | 'advanced' | 'expert';
    status: 'normal' | 'low' | 'improving';
  }[];
}
