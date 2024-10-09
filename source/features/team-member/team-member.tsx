import cn from 'classnames';
import classes from './styles.module.scss';
import { typeTeamMemberProps } from './types';
import Image from 'next/image';

export const TeamMember: React.FC<typeTeamMemberProps> = props => {
  const { photo, firstName, lastName, className } = props;

  const DefaultAvatar = '/default-avatar.jpg';

  const name = (firstName + ' ' + lastName).trim();

  return (
    <div className={cn(className, classes.userInfo)}>
      <Image
        className={cn(classes.userAvatar)}
        src={photo || DefaultAvatar}
        alt=""
        width={100}
        height={100}
      />
      <span className={cn(classes.userName)}>{name}</span>
    </div>
  );
};
