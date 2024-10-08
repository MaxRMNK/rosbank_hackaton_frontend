'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeIndicatorsProps } from './types';
import Link from 'next/link';

export const Indicators: React.FC<typeIndicatorsProps> = props => {
  const {} = props;

  const indicators = {
    busFactor: 6,
    team: {
      allEmployees: 21,
      keyEmployees: 11,
    },
    skills: {
      normal: 11,
      attention: 8,
    },
  };

  const fieldData = {
    team: [
      {
        name: indicators.team.allEmployees,
        title: 'Все сотрудники',
        value: 21,
      },
      {
        name: indicators.team.keyEmployees,
        title: 'Ключевые сотрудники',
        value: 11,
      },
    ],
    skills: [
      {
        name: indicators.skills.normal,
        title: 'Соответствуют требуемому уровню',
        value: 11,
      },
      {
        name: indicators.skills.attention,
        title: 'Требуют развития',
        value: 8,
      },
    ],
  };

  return (
    <section className={cn(classes.indicators)}>
      <div className={cn(classes.card, classes.busFactor)}>
        <div className={cn(classes.number)}>6</div>
        <div className={cn(classes.description)}>
          <h2 className={cn(classes.title, classes.titleBusFactor)}>
            Бас-фактор
            {/* <span className={cn(classes.info)}></span> */}
          </h2>
          <p className={cn(classes.subtitle)}>
            Чем больше бас-фактор, тем меньше риска
          </p>
        </div>
      </div>

      <div className={cn(classes.card, classes.team)}>
        <h2 className={cn(classes.title, classes.titleTeam)}>Состав команды</h2>
        <ul className={cn(classes.list)}>
          <li className={cn(classes.item)}>
            Все сотрудники<span className={cn(classes.value)}>21</span>
          </li>
          <li className={cn(classes.item)}>
            Ключевые сотрудники
            {/* <span className={cn(classes.info)}></span> */}
            <span className={cn(classes.value)}>10</span>
          </li>
        </ul>
        <Link href={'#'} className={cn(classes.link)}>
          Подробнее
        </Link>
      </div>

      <div className={cn(classes.card, classes.skills)}>
        <h2 className={cn(classes.title, classes.titleSkills)}>
          Ключевые навыки {/* <span className={cn(classes.info)}></span> */}
        </h2>
        <ul className={cn(classes.list)}>
          <li className={cn(classes.item)}>
            Соответствуют требуемому уровню
            <span className={cn(classes.value)}>11</span>
          </li>
          <li className={cn(classes.item)}>
            ️Требуют развития
            <span className={cn(classes.value, classes.alert)}>8</span>
          </li>
        </ul>
        <Link href={'#'} className={cn(classes.link)}>
          Подробнее
        </Link>
      </div>
    </section>
  );
};
