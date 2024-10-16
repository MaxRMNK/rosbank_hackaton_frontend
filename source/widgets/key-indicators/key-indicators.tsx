'use client';

import React, { useState } from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeKeyIndicatorsProps } from './types';
import Link from 'next/link';
import { TeamStats } from '@/source/features/team-stats';
import { SkillsStats } from '@/source/features/skills-stats';

export const KeyIndicators: React.FC<typeKeyIndicatorsProps> = props => {
  const { teamData, className } = props;

  const [activeTab, setActiveTab] = useState<'team' | 'skills'>('team');

  const handleTabClick = (tab: 'team' | 'skills') => {
    setActiveTab(tab);
  };

  return (
    <section className={cn(className, classes.keyIndicators)}>
      <h2 className={cn(classes.title)}>Ключевые показатели</h2>
      <div className={cn(classes.navigate)}>
        <div className={cn(classes.tabs)}>
          <button
            className={cn(classes.tab, classes.team, {
              [classes.active]: activeTab === 'team',
            })}
            onClick={() => handleTabClick('team')}
          >
            Сотрудники
          </button>
          <button
            className={cn(classes.tab, classes.skills, {
              [classes.active]: activeTab === 'skills',
            })}
            onClick={() => handleTabClick('skills')}
          >
            Навыки
          </button>
        </div>

        {activeTab === 'team' ? (
          <Link href={'/team'} className={cn(classes.link)}>
            Все сотрудники
          </Link>
        ) : (
          <Link href={'/skills'} className={cn(classes.link)}>
            Все навыки
          </Link>
        )}
      </div>

      {activeTab === 'team' ? (
        <TeamStats
          teamData={teamData}
          className={cn(classes.tabContent, classes.teamTab, classes.activeTab)}
        />
      ) : (
        <SkillsStats
          className={cn(
            classes.tabContent,
            classes.skillsTab,
            classes.activeTab,
          )}
        />
      )}
    </section>
  );
};
