import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { StaticImageData } from 'next/image';

export interface typeAvatarGroupProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  userList: {
    name: string;
    photo: StaticImageData | string | null;
    // link?: string;
  }[];
  // size?: 'small' | 'large';
}
