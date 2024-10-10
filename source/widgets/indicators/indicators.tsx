'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeIndicatorsProps } from './types';
import Link from 'next/link';
import { IndicatorsCard } from '@/source/features/indicators-card';

export const Indicators: React.FC<typeIndicatorsProps> = props => {
  const { indicatorsData } = props;

  return (
    <section className={cn(classes.indicators)}>
      <div className={cn(classes.busFactor)}>
        <div className={cn(classes.number)}>{indicatorsData.busFactor}</div>
        <div className={cn(classes.description)}>
          <h2 className={cn(classes.title)}>
            Бас-фактор
            {/* <span className={cn(classes.info)}></span> */}
          </h2>
          <p className={cn(classes.subtitle)}>
            Чем больше бас-фактор, тем меньше риска
          </p>
        </div>
      </div>

      <IndicatorsCard
        type="team"
        className={cn(classes.team)}
        title={'Состав команды'}
        fieldData={indicatorsData.team}
      />

      <IndicatorsCard
        type="skills"
        className={cn(classes.skills)}
        title={'Ключевые навыки'}
        fieldData={indicatorsData.skills}
      />

      {/* <div className={cn(classes.card, classes.team)}>
        <h2 className={cn(classes.title, classes.titleTeam)}>Состав команды</h2>
        <ul className={cn(classes.list)}>
          <li className={cn(classes.item)}>
            Все сотрудники<span className={cn(classes.value)}>21</span>
          </li>
          <li className={cn(classes.item)}>
            Ключевые сотрудники
            <span className={cn(classes.info)}></span>
            <span className={cn(classes.value)}>10</span>
          </li>
        </ul>
        <Link href={'#'} className={cn(classes.link)}>
          Подробнее
        </Link>
      </div> */}

      {/* <div className={cn(classes.card, classes.skills)}>
        <h2 className={cn(classes.title, classes.titleSkills)}>
          Ключевые навыки
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
      </div> */}
    </section>
  );
};
