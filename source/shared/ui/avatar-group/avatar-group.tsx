'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeAvatarGroupProps } from './types';
import Image from 'next/image';

export const AvatarGroup: React.FC<typeAvatarGroupProps> = props => {
  const { userList, className } = props;

  const DefaultAvatar = '/default-avatar.jpg';

  return (
    <ul className={cn(className, classes.userList)}>
      {userList &&
        userList.map(function (item, index) {
          // Выводить только первых 3х пользователей
          // if (index > 2) {
          //   return;
          // }
          return (
            <li className={cn(classes.listItem)} key={index}>
              <Image
                className={cn(classes.userPhoto)}
                src={item.photo || DefaultAvatar}
                width={100}
                height={100}
                alt={item.name}
              />
            </li>
          );
        })}
    </ul>
  );
};
