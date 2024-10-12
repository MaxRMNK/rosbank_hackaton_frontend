import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface typeTask {
  type: string;
  heading: {
    category: string;
    title: string;
    link: {
      title: string;
      url: string;
    };
  };
  userList: {
    name: string;
    photo: string;
  }[];
  tags: {
    title: string;
  }[];
  description: string;
  image: string;
}

export interface typeTrainingCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  task: typeTask;
  handleAddToPlan: (task: typeTask) => void;
}
