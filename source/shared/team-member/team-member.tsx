import cn from 'classnames';
import classes from './styles.module.scss';
import { typeTeamMemberProps } from './types';
import Image from 'next/image';

export const TeamMember: React.FC<typeTeamMemberProps> = props => {
  const { photo, firstName, lastName, keyEmployee, className } = props;

  const DefaultAvatar = '/default-avatar.jpg';

  const name = (firstName + ' ' + lastName).trim();

  return (
    <div className={cn(classes.userInfo, className)}>
      <div className={cn(classes.imageWrapper)}>
        <Image
          className={cn(classes.userAvatar)}
          src={photo || DefaultAvatar}
          alt=""
          width={100}
          height={100}
        />
        {keyEmployee && <span className={cn(classes.key)}></span>}
      </div>
      <span className={cn(classes.userName)}>{name}</span>
    </div>
  );
};
