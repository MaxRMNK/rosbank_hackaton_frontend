import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface typeUser {
  userPhoto: string;
  firstName: string;
  lastName: string;
  keyEmployee: boolean;
  userRole: string;
  grade: string;
  skills: {
    skill: string;
    level: string;
    state: string;
    // improving?:
    // | undefined
    // | null
    // | {
    //     startDate: Date;
    //     initiator: string;
    //     agreed: boolean;
    //     completed: number;
    //   };
    improving?: {
      startDate: string;
      // startDate: Date;
      initiator: string;
      agreed: boolean;
      completed: number;
    };
  }[];
  expertise: number;
  progress: number;
}

export interface typeTeamTableRowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  user: typeUser;
  requestForTraining: (e: any) => void;
}
