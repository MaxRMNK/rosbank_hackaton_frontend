import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { StaticImageData } from 'next/image';

export interface typeUserInfoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  userInfo: {
    userPhoto: StaticImageData;
    firstName: string;
    lastName: string;
  };
}
