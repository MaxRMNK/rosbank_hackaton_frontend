import React, { FC } from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeHeaderProps } from './types';

import Link from 'next/link';
import Image from 'next/image';

export const Header: FC<typeHeaderProps> = props => {
  const { logo, links, ...otherProps } = props;

  return (
    <header className={cn(classes.header)}>
      <Link href="/">
        <Image
          className={cn(classes.header__logo)}
          src={logo.src}
          alt="Росбанк"
          width={logo.width}
          height={logo.height}
        />
      </Link>
      {/* {otherProps.avatar && (
        <Image
          className={cn(classes.header__logo)}
          src={otherProps.avatar.src}
          alt=""
          width={image.width}
          height={image.height}
        />
      )} */}
    </header>
  );
};
