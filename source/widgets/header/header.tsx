'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';

import { HeaderMenu } from '@/source/features/header-menu';
import { typeHeaderProps } from './types';
import { headerMenuProps } from '@/source/features/header-menu/types';

import { LogoHeader } from '@/source/shared/logo-header';

export const Header: React.FC<typeHeaderProps & headerMenuProps> = props => {
  const { links, userInfo } = props;

  return (
    <header className={cn(classes.header)}>
      <LogoHeader />

      <HeaderMenu links={links} />

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
