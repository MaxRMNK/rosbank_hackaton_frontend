import { HTMLAttributes, DetailedHTMLProps } from 'react';

interface headerMenuLink {
  title: string;
  link: string;
}

export interface headerMenuLinkWithChildren extends headerMenuLink {
  children?: headerMenuLink[];
}

export interface headerMenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  links: headerMenuLinkWithChildren[];
}
