import cn from 'classnames';
import classes from './styles.module.scss';
import { typeTeamTableRowProps } from './types';
import { TeamMember } from '../team-member';
import { TagListSkills } from '@/source/shared/ui/tag-list-skills';

export const TeamTableRow: React.FC<typeTeamTableRowProps> = props => {
  const { user, requestForTraining, className } = props;

  const printPercent = (value: number) => {
    if (value > 0.64) {
      return <span className={cn(classes.green)}>{value * 100 + '%'}</span>;
    } else {
      return <span className={cn(classes.red)}>{value * 100 + '%'}</span>;
    }
  };

  return (
    <div className={cn(className, classes.tableRow)}>
      <div className={cn(classes.users, classes.tableCell)}>
        <TeamMember
          photo={user.userPhoto}
          firstName={user.firstName}
          lastName={user.lastName}
          keyEmployee={user.keyEmployee}
          className={cn(classes.user)}
        />
      </div>
      <div className={cn(classes.userRole, classes.tableCell)}>
        {user.userRole}
      </div>
      <div className={cn(classes.grade, classes.tableCell)}>{user.grade}</div>
      <div className={cn(classes.skills, classes.tableCell)}>
        <TagListSkills tags={user.skills} />
      </div>
      <div className={cn(classes.expertise, classes.tableCell)}>
        {printPercent(user.expertise)}
      </div>
      <div className={cn(classes.progress, classes.tableCell)}>
        {printPercent(user.progress)}
      </div>
      <div className={cn(classes.action, classes.tableCell)}>
        <button
          className={cn(classes.trainingButton)}
          onClick={requestForTraining}
        ></button>
      </div>
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
