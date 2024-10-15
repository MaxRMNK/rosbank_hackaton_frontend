import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeSkillsStatsProps } from './types';
// import { TeamTableRow } from '../team-table-row';

export const SkillsStats: React.FC<typeSkillsStatsProps> = props => {
  const { className } = props;

  const [checked, setChecked] = React.useState(false);

  const chengeCheckbox = (e: any) => {
    setChecked(!checked);
    // console.log(e?.target?.name);
  };

  const requestForTraining = (e: any) => {
    console.log('Отправить запрос на обучение', e);
  };

  return (
    <div className={cn(className, classes.skills)}>
      {/* <div className={cn(classes.glossary)}>Пояснение к таблице</div> */}

      <div className={cn(classes.tableTeam)}>
        <div className={cn(classes.tableHeader)}>
          <div className={cn(classes.skills, classes.tableCell)}>
            Ключевые навыки
          </div>
          <div className={cn(classes.users, classes.tableCell)}></div>
          <div className={cn(classes.level, classes.tableCell)}>
            Уровень навыка
          </div>
          <div className={cn(classes.targetLevel, classes.tableCell)}>
            Требуемый уровень
          </div>
          <div className={cn(classes.alert, classes.tableCell)}></div>
        </div>

        <div className={cn(classes.sorry)}>Не успел сделать</div>
        {/* {teamData.map((item, index) => (
          <TeamTableRow
            key={index}
            user={item}
            className={cn(classes.tableUserRow)}
            requestForTraining={requestForTraining}
          />
        ))} */}
      </div>
    </div>
  );
};
