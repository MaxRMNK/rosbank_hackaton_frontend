'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeSkillsStatsProps } from './types';
// import { TeamTableRow } from '../team-table-row';

export const SkillsStats: React.FC<typeSkillsStatsProps> = props => {
  const { className } = props;

  // interface Level {
  //   none: number;
  //   beginner: number;
  //   intermediate: number;
  //   advanced: number;
  //   expert: number;
  // }

  // interface ObjectWithLevels {
  //   level: Level;
  //   targetLevel: Level;
  // }

  // const data: ObjectWithLevels = {
  //   level: {
  //     none: 0,
  //     beginner: 1,
  //     intermediate: 1,
  //     advanced: 2,
  //     expert: 1,
  //   },
  //   targetLevel: {
  //     none: 0,
  //     beginner: 0,
  //     intermediate: 1,
  //     advanced: 2,
  //     expert: 2,
  //   },
  // };

  // const calculateDifference = (obj1: Level, obj2: Level) => {
  //   const difference: Level = {
  //     none: obj1.none - obj2.none,
  //     beginner: obj1.beginner - obj2.beginner,
  //     intermediate: obj1.intermediate - obj2.intermediate,
  //     advanced: obj1.advanced - obj2.advanced,
  //     expert: obj1.expert - obj2.expert,
  //   };
  //   return difference;
  // };

  // const difference = calculateDifference(data.targetLevel, data.level);

  // console.log('ffff', difference);

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

// const [checked, setChecked] = React.useState(false);

// const chengeCheckbox = (e: any) => {
//   setChecked(!checked);
//   // console.log(e?.target?.name);
// };

// const requestForTraining = (e: any) => {
//   console.log('Отправить запрос на обучение', e);
// };

//----------------------------------

// Работает

//----------------------------------

// interface Levels {
//   [none: string]: number;
//   beginner: number;
//   intermediate: number;
//   advanced: number;
//   expert: number;
// }

// interface LevelDifference {
//   [key: string]: number;
// }

// const level = {
//   none: 0,
//   beginner: 1,
//   intermediate: 1,
//   advanced: 2,
//   expert: 1,
// };

// const targetLevel = {
//   none: 0,
//   beginner: 0,
//   intermediate: 1,
//   advanced: 2,
//   expert: 2,
// };

// const calculateDifference = (
//   levelA: Levels,
//   levelB: Levels,
// ): LevelDifference => {
//   const difference: LevelDifference = {};

//   for (const key in levelA) {
//     if (levelA.hasOwnProperty(key) && levelB.hasOwnProperty(key)) {
//       difference[key] = levelA[key] - levelB[key];
//     }
//   }

//   return difference;
// };

// const difference = calculateDifference(level, targetLevel);

// console.log('ffff', difference);

//----------------------------------
