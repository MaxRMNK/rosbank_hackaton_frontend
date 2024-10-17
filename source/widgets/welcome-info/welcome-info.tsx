'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import Link from 'next/link';
import { typeWelcomeInfoProps } from './types';
import { TagList } from '@/source/shared/ui/tag-list';
import { TeamMember } from '@/source/shared/team-member';
import { AboutTeam } from '@/source/features/about-team';

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
