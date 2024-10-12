'use client';

// import Image from 'next/image';
// import styles from './styles.module.scss';
import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';

import userData from '@/public/user.json';
import summaryData from '@/public/demo-summary.json';
import taskData from '@/public/demo-task-list.json';

import { Header } from '@/source/widgets/header';
import { Notification } from '@/source/widgets/notification';
import { WelcomeInfo } from '@/source/widgets/welcome-info';
import { Indicators } from '@/source/widgets/indicators';
import { Activities } from '@/source/widgets/activities';

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
  // const [report, setReport] = React.useState({
  //   title: '4 запроса на развитие навыков ожидают согласования' || '',
  //   description:
  //     'У вас 4 новых запроса от Андрея Сухова и Кирилла Федорова на развитие навыков React, Python' ||
  //     '',
  // });

  // Действия для кнопок в блоке уведомлений
  const handleReadMore = () => {
    console.log('Подробнее');
  };
  const handleApprove = () => {
    console.log('Согласовать');
  };

  // Переход к разделам страницы
  const handleGoToTeam = () => {
    console.log('О команде');
  };
  const handleGoToSkills = () => {
    console.log('О навыках');
  };

  // Карточки активности
  function handleAddToPlan(data: any) {
    console.log('запрос для редактирования плана развития сотрудников', data);
  }

  return (
    <>
      <Header links={links} userInfo={userInfo} />

      {(report.title || report.description) && (
        <Notification
          title={report.title}
          description={report.description}
          handleReadMore={handleReadMore}
          handleApprove={handleApprove}
        />
      )}

      <main className={cn(classes.main)}>
        <WelcomeInfo welcomeData={summaryData.welcomeData} />

        <Indicators
          indicatorsData={summaryData.indicators}
          handleGoToTeam={handleGoToTeam}
          handleGoToSkills={handleGoToSkills}
        />

        <Activities taskList={taskData} handleAddToPlan={handleAddToPlan} />
      </main>
      {/* <footer className="ddd">Footer</footer> */}
    </>
  );
};

//  <Pagination
//    onChange={handlePageChange}
//    total={50}
//    itemRender={renderItem}
//  />

// const handlePageChange = (page: number, pagesize: number) => {
//   console.log('page', page);
//   console.log('pagesize', pagesize);
// }

// function renderItem(currentPage: number, type: "page" | "prev" | "next" | "jump-prev" | "jump-next", element: ReactNode) {
//   if (type === 'page') {
//     return currentPage;
//   } else if (type === 'prev') {
//     return 'DDD';
//   } else if (type === 'next') {
//     return 'CCC';
//   }
//   return element;
// }
