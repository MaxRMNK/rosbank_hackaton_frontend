import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { StaticImageData } from 'next/image';

export interface typeTeamMemberProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  photo: StaticImageData | string | null;
  firstName: string;
  lastName: string;
}
