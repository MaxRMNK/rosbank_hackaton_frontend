import cn from 'classnames';
import classes from './styles.module.scss';
import { typeTeamTableRowProps } from './types';
import { TeamMember } from '../team-member';
// import Image from 'next/image';

import userData from '@/public/user.json';

export const TeamTableRow: React.FC<typeTeamTableRowProps> = props => {
  const { user } = props;

  return (
    <div className={cn(classes.tableRow)}>
      <div className={cn(classes.users)}>
        <TeamMember
          photo={user.userPhoto}
          firstName={user.firstName}
          lastName={user.lastName}
        />
      </div>
      <div className={cn(classes.userRole)}>X</div>
      <div className={cn(classes.grade)}>X</div>
      <div className={cn(classes.skills)}>
        {user.skills.map((item, index) => (
          <span key={index}>{item.skill + ' '}</span>
        ))}
      </div>
      <div className={cn(classes.expertise)}>X</div>
      <div className={cn(classes.progress)}>X</div>
      <div className={cn(classes.action)}>Х</div>
    </div>

    // <div className={cn(classes.one)}>
    //   <TeamMember
    //     photo={user.userPhoto}
    //     firstName={user.firstName}
    //     lastName={user.lastName}
    //   />
    // </div>
  );
};
