import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { StaticImageData } from 'next/image';

export interface typeHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  logo: StaticImageData;
  links?: object;
}
