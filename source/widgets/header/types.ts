import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { StaticImageData } from 'next/image';
import {
  headerMenuProps,
  headerMenuLinkWithChildren,
} from '@/source/features/header-menu/types';

export interface typeHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  // links: headerMenuProps & headerMenuLinkWithChildren[];
  userInfo: {
    userPhoto: StaticImageData;
    firstName: string;
    lastName: string;
  };
}
