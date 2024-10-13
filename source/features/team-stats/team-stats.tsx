import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeTeamStatsProps } from './types';
import { TeamTableRow } from '../team-table-row';
// import Image from 'next/image';

export const TeamStats: React.FC<typeTeamStatsProps> = props => {
  const { teamData } = props;

  // let newData = [];

  const [checked, setChecked] = React.useState(false);

  function chengeCheckbox(e: any) {
    setChecked(!checked);

    console.log(e?.target?.name);

    // newData = teamData.filter(function (item) {
    //   // return item.description
    // })
  }

  return (
    <div className={cn(classes.one)}>
      <div className={cn(classes.tableToggle)}>
        Блоки переключателей
        <input
          type="checkbox"
          checked={checked}
          onChange={chengeCheckbox}
          name="advanced"
        />
      </div>

      <div className={cn(classes.tableTeam)}>
        <div className={cn(classes.tableHeader)}>
          <div className={cn(classes.users, classes.tableCell)}>
            Ключевые сотрудники
          </div>
          <div className={cn(classes.userRole, classes.tableCell)}>Роль</div>
          <div className={cn(classes.grade, classes.tableCell)}>Грейд</div>
          <div className={cn(classes.skills, classes.tableCell)}>Навыки</div>
          <div className={cn(classes.expertise, classes.tableCell)}>
            Соответствие задачам команды, %
          </div>
          <div className={cn(classes.progress, classes.tableCell)}>
            Готовность к повышению, %
          </div>
          <div className={cn(classes.action, classes.tableCell)}>Х</div>
        </div>
        {teamData.map((item, index) => (
          <TeamTableRow
            key={index}
            user={item}
            className={cn(classes.tableUserRow)}
          />
        ))}
      </div>
    </div>
  );
};
