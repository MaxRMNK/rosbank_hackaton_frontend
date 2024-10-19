import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeIndicatorsProps } from './types';
import { IndicatorsCard } from '@/source/features/indicators-card';

export const Indicators: React.FC<typeIndicatorsProps> = props => {
  const { indicatorsData } = props;

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
        type="team"
        title={'Состав команды'}
        className={cn(classes.team)}
        fieldData={indicatorsData.team}
      />

      <IndicatorsCard
        type="skills"
        className={cn(classes.skills)}
        title={'Ключевые навыки'}
        fieldData={indicatorsData.skills}
      />
    </section>
  );
};
