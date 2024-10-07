'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeIndicatorsProps } from './types';

export const Indicators: React.FC<typeIndicatorsProps> = props => {
  const {} = props;

  return (
    <section className={cn(classes.indicators)}>
      <div className={cn(classes.card, classes.busFactor)}>sdf</div>
      <div className={cn(classes.card, classes.team)}>sdf</div>
      <div className={cn(classes.card, classes.skills)}>sdf</div>
    </section>
  );
};
