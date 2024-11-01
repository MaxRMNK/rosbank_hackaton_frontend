import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeTeamStatsProps } from './types';
import { TeamTableRow } from '@/source/features/team-stats/team-table-row';

export const TeamStats: React.FC<typeTeamStatsProps> = props => {
  const { teamData, teamLimit, className } = props;

  const level = {
    none: 'Не владеет',
    junior: 'Начинающий',
    middle: 'Базовый',
    senior: 'Уверенный',
    expert: 'Экспертный',
  };

  const status = {
    normal: 'Соответствует',
    low: 'Не соответствует',
    improving: 'В процессе развития',
  };

  // Получает только ключевых сотрудников
  const keyEmployees = teamData
    .filter(employee => employee.keyEmployee)
    .slice(0, teamLimit);

  const requestForTraining = (e: any) => {
    console.log('Отправить запрос на обучение', e);
  };

  return (
    <div className={cn(className, classes.team)}>
      <div className={cn(classes.glossary)}>
        <ul className={cn(classes.listItems, classes.level)}>
          {Object.entries(level).map(([key, value]) => (
            <li className={cn(classes.item, classes[key])} key={key}>
              {value}
            </li>
          ))}
        </ul>

        <ul className={cn(classes.listItems, classes.status)}>
          {Object.entries(status).map(([key, value]) => (
            <li className={cn(classes.item, classes[key])} key={key}>
              {value}
            </li>
          ))}
        </ul>
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
          <div className={cn(classes.action, classes.tableCell)}></div>
        </div>

        {keyEmployees.map((item, index) => (
          <TeamTableRow
            key={index}
            user={item}
            className={cn(classes.tableUserRow)}
            requestForTraining={requestForTraining}
          />
        ))}
      </div>
    </div>
  );
};
