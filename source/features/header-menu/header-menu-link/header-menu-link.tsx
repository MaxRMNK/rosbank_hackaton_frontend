'use client';

import cn from 'classnames';
import classes from './styles.module.scss';
import React from 'react';
import Link from 'next/link';
import { headerMenuLinkProps } from './types';
import Image from 'next/image';

import arrow from './images/arrow.svg';

export const HeaderMenuLink: React.FC<headerMenuLinkProps> = props => {
  const { className, link } = props;

  const [isOpen, setOpen] = React.useState(false);

  const visable = () => {
    setOpen(!isOpen);
  };

  const hidden = () => {
    setOpen(false);
  };

  return (
    <>
      {link.children ? (
        <li
          className={cn(className, classes.headerMenuLinkWrapper)}
          // onClick={visable}
          onMouseEnter={visable}
          onMouseLeave={hidden}
        >
          <button
            className={cn(
              className,
              classes.headerMenuLink,
              classes.headerMenuDropdown,
            )}
          >
            {link.title}
            <Image src={arrow} alt="" />
          </button>
          {link.children && (
            <ul
              className={cn(className, classes.headerMenuLinksChildren, {
                [classes.open]: isOpen,
              })}
              // onMouseLeave={hidden}
            >
              {link.children.map((link, index) => (
                <li
                  key={index}
                  className={cn(className, classes.headerMenuChildrenItems)}
                >
                  <Link
                    className={cn(
                      className,
                      classes.headerMenuLink,
                      classes.headerMenuChildrenLink,
                    )}
                    href={link.link}
                    key={index}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ) : (
        <li className={cn(className, classes.headerMenuLinkWrapper)}>
          <Link
            className={cn(className, classes.headerMenuLink)}
            href={link.link}
          >
            {link.title}
          </Link>
        </li>
      )}
    </>
  );
};
