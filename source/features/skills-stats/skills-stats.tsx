'use client';

import React, { useState } from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeSkillsStatsProps, typeSkills } from './types';
import { SkillTableRow } from '../skill-table-row';
// import { TeamTableRow } from '../team-table-row';

export const SkillsStats: React.FC<typeSkillsStatsProps> = props => {
  const { skillData, className } = props;

  // Для сортировки по количеству человек в команде
  // const [isPeople, setIsPeople] = useState<number>(0);

  //---------------------

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

      <div className={cn(classes.tableSkills)}>
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

        {/* <div className={cn(classes.sorry)}>Не успел сделать</div> */}
        {skillData.map((item, index) => {
          // Выводит только ключевые навыки
          if (!item.keySkill) return;

          return (
            <SkillTableRow
              key={index}
              skillName={item.skillName}
              title={item.title}
              image={item.image}
              keySkill={item.keySkill}
              type={item.type}
              level={item.level}
              targetLevel={item.targetLevel}
              // setIsPeople={setIsPeople}
              className={cn(classes.tableSkillsRow)}
            />
          );
        })}
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
