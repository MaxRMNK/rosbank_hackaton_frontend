import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface typeAboutTeamProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  welcomeData: {
    teamName: string;
    description: string;
    tags: {
      title: string;
    }[];
    managers: {
      jobPosition: string;
      photo: string | null;
      firstName: string;
      lastName: string;
    }[];
    links: {
      name: string;
      title: string;
      link: string;
    }[];
  };
  editProfileTeam: () => void;
}
