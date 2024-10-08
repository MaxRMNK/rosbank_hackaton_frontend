import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface typeWelcomeInfoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  welcomeData: {
    aboutTeam: {
      item: string;
    }[];
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
      key: string;
      name: string;
      link: string;
    }[];
  };
}
