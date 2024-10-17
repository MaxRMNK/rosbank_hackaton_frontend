'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';

import userData from '@/public/user.json';
import summaryData from '@/public/demo-summary.json';
import taskData from '@/public/demo-task-list.json';
import teamData from '@/public/demo-team.json';
import skillData from '@/public/demo-skills.json';

import { Header } from '@/source/widgets/header';
import { Notification } from '@/source/widgets/notification';
import { WelcomeInfo } from '@/source/widgets/welcome-info';
import { Indicators } from '@/source/widgets/indicators';
import { Activities } from '@/source/widgets/activities';
import { KeyIndicators } from '@/source/widgets/key-indicators';

export const HomePage: React.FC = () => {
  const [links, setLinks] = React.useState([
    { title: 'Организация', link: '/404' },
    {
      title: 'Мои команды',
      link: '#',
      children: [
        { title: 'Команда один', link: '/404' },
        { title: 'Вторая команда', link: '/404' },
        { title: 'Команда номер три', link: '/404' },
      ],
    },
  ]);

  const [userInfo, setUserInfo] = React.useState(userData);
  // const [userInfo, setUserInfo] = React.useState({
  //   userPhoto: userData.userPhoto || '',
  //   firstName: userData.firstName || '',
  //   lastName: userData.lastName || '',
  // });

  const [report, setReport] = React.useState(summaryData.notice);

  const [isCloseNotice, setCloseNotice] = React.useState(false);

  // Actions for buttons in the notification block
  const handleNoticeClose = () => {
    setCloseNotice(true);
  };
  const handleNoticeReadMore = () => {
    console.log('Подробнее');
  };
  const handleNoticeApprove = () => {
    console.log('Согласовать');
  };

  const editProfileTeam = () => {
    console.log('Редактировать профиль команды');
  };

  // Jump to page sections
  const handleGoToTeam = () => {
    console.log('О команде');
  };
  const handleGoToSkills = () => {
    console.log('О навыках');
  };

  // Activity cards
  function handleAddToPlan(data: any) {
    console.log('запрос для редактирования плана развития сотрудников', data);
  }

  return (
    <>
      <Header links={links} userInfo={userInfo} />

      {report.title && (
        <Notification
          title={report.title}
          handleReadMore={handleNoticeReadMore}
          handleApprove={handleNoticeApprove}
          handleClose={handleNoticeClose}
          isClose={isCloseNotice}
        />
      )}

      <main className={cn(classes.main)}>
        <WelcomeInfo
          welcomeData={summaryData.welcomeData}
          importantData={summaryData.important}
          editProfileTeam={editProfileTeam}
        />

        <Indicators
          indicatorsData={summaryData.indicators}
          handleGoToTeam={handleGoToTeam}
          handleGoToSkills={handleGoToSkills}
        />

        <KeyIndicators
          teamData={teamData}
          skillData={skillData}
          className={cn(classes.keyIndicators)}
        />

        <Activities taskList={taskData} handleAddToPlan={handleAddToPlan} />
      </main>
    </>
  );
};
