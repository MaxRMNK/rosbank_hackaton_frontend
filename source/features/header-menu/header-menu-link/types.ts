import { LiHTMLAttributes, DetailedHTMLProps } from 'react';
import { headerMenuLinkWithChildren } from '../types';

export interface headerMenuLinkProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLElement>, HTMLElement> {
  link: headerMenuLinkWithChildren;
}
