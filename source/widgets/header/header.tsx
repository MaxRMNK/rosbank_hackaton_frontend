'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeHeaderProps } from './types';

import { HeaderMenu } from '@/source/features/navigation/header-menu';
// import { headerMenuProps } from '@/source/features/navigation/header-menu/types';
import { LogoHeader } from '@/source/shared/logo-header';
import { HeaderUserInfo } from '@/source/shared/header-user';

import userData from '@/public/user.json';

export const Header: React.FC<typeHeaderProps> = props => {
  // const { } = props;

  const [userInfo, setUserInfo] = React.useState(userData);

  const [links, setLinks] = React.useState([
    { title: 'Организация', link: '/404' },
    {
      title: 'Мои команды',
      link: '#',
      children: [
        { title: 'Команда один', link: '/404' },
        { title: 'Вторая команда', link: '/404' },
        { title: 'Команда номер три', link: '/404' },
      ],
    },
    { title: 'Тренинги', link: '/trainings' },
  ]);

  return (
    <header className={cn(classes.header)}>
      <LogoHeader />

      <HeaderMenu links={links} />

      <HeaderUserInfo userInfo={userInfo} />
    </header>
  );
};
