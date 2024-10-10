import { DetailedHTMLProps, HTMLAttributes } from 'react';
// import { StaticImageData } from 'next/image';

export interface typeIndicatorsCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  type: string;
  title: string;
  fieldData: {
    name: string;
    title: string;
    value: number;
    info?: null | string;
    alert?: boolean;
  }[];
}
