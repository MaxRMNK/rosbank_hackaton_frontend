'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeIndicatorsProps } from './types';
import Link from 'next/link';

export const Indicators: React.FC<typeIndicatorsProps> = props => {
  const { indicatorsData } = props;

  const team = [
    {
      name: 'allEmployees',
      title: 'Все сотрудники',
    },
    {
      name: 'keyEmployees',
      title: 'Ключевые сотрудники',
    },
  ];

  // const [fieldData, setFieldData] = React.useState([
  //   {
  //     title: 'Состав команды',
  //     linkMore: '#',
  //     team: [
  //       {
  //         name: 'allEmployees',
  //         title: 'Все сотрудники',
  //       },
  //       {
  //         name: 'keyEmployees',
  //         title: 'Ключевые сотрудники',
  //       },
  //     ],
  //   },
  //   {
  //     skills: [
  //       {
  //         name: 'normal',
  //         title: 'Соответствуют требуемому уровню',
  //       },
  //       {
  //         name: 'attention',
  //         title: 'Требуют развития',
  //       },
  //     ],
  //   },
  // ]);

  return (
    <section className={cn(classes.indicators)}>
      <div className={cn(classes.card, classes.busFactor)}>
        <div className={cn(classes.number)}>{indicatorsData.busFactor}</div>
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
          {/* {indicatorsData.team &&
            indicatorsData.team.map(itemList => (
              <li className={cn(classes.item)}>{itemList.item}</li>

              <li className={cn(classes.item)}>
                Все сотрудники<span className={cn(classes.value)}>21</span>
              </li>
            ))
          } */}

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
