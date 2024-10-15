'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeIndicatorsProps } from './types';
import Link from 'next/link';
import { IndicatorsCard } from '@/source/features/indicators-card';

export const Indicators: React.FC<typeIndicatorsProps> = props => {
  const { indicatorsData, handleGoToTeam, handleGoToSkills } = props;

  const [isAlert, setIsAlert] = React.useState<boolean>(false);

  return (
    <section className={cn(classes.indicators)}>
      <div className={cn(classes.busFactor, { [classes.alert]: isAlert })}>
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
        handleClick={handleGoToTeam}
        type="team"
        className={cn(classes.team)}
        title={'Состав команды'}
        fieldData={indicatorsData.team}
      />

      <IndicatorsCard
        handleClick={handleGoToSkills}
        type="skills"
        className={cn(classes.skills)}
        title={'Ключевые навыки'}
        fieldData={indicatorsData.skills}
      />
    </section>
  );
};
