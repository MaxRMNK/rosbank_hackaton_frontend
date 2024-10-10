'use client';

// import Image from 'next/image';
// import styles from './styles.module.scss';
import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';

import userData from '@/public/user.json';
import summaryData from '@/public/demo-summary.json';

import { Header } from '@/source/widgets/header';
import { Notification } from '@/source/widgets/notification';
import { WelcomeInfo } from '@/source/widgets/welcome-info';
import { Indicators } from '@/source/widgets/indicators';

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

  const handlerReadMore = () => {
    console.log('Подробнее');
  };
  const handlerApprove = () => {
    console.log('Согласовать');
  };

  const handlerTeam = () => {
    console.log('О команде');
  };
  const handlerSkills = () => {
    console.log('О навыках');
  };

  return (
    <>
      <Header links={links} userInfo={userInfo} />

      {(report.title || report.description) && (
        <Notification
          title={report.title}
          description={report.description}
          readMore={handlerReadMore}
          approve={handlerApprove}
        />
      )}

      <main className={cn(classes.main)}>
        <WelcomeInfo welcomeData={summaryData.welcomeData} />

        <Indicators
          indicatorsData={summaryData.indicators}
          handlerTeam={handlerTeam}
          handlerSkills={handlerSkills}
        />
        <p>sda</p>
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
