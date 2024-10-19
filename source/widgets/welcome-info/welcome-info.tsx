import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeWelcomeInfoProps } from './types';
import { AboutTeam } from '@/source/shared/about-team';

export const WelcomeInfo: React.FC<typeWelcomeInfoProps> = props => {
  const { welcomeData, importantData, editProfileTeam } = props;

  return (
    <section className={cn(classes.summary)}>
      <AboutTeam welcomeData={welcomeData} editProfileTeam={editProfileTeam} />

      <div className={cn(classes.report)}>
        <h2 className={cn(classes.title)}>Важное о команде</h2>
        <p className={cn(classes.subtitle)}>
          Здесь собрана информация по компетенциям команды, которые требуют
          внимания
        </p>
        <ul className={cn(classes.listItems)}>
          {importantData &&
            importantData.map((text, index) => (
              <li className={cn(classes.item)} key={index}>
                {text.item}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
