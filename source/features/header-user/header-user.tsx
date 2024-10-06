import cn from 'classnames';
import classes from './styles.module.scss';
import { typeUserInfoProps } from './types';
import Image from 'next/image';

import DefaultAvatar from './images/default-avatar.jpg';

export const HeaderUserInfo: React.FC<typeUserInfoProps> = ({ userInfo }) => {
  const name = (
    userInfo?.firstName +
    ' ' +
    userInfo?.lastName.substring(0, 1) +
    '.'
  ).trim();

  return (
    <div className={cn(classes.user)}>
      <span className={cn(classes.userName)}>{name}</span>
      <Image
        className={cn(classes.userPhoto)}
        src={userInfo.userPhoto || DefaultAvatar}
        width={100}
        height={100}
        alt={name}
      />
    </div>
  );
};
