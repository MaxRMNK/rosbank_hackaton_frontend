'use client';

// import Image from 'next/image';
// import styles from './styles.module.scss';
import React from 'react';
// import React, { ReactNode } from 'react';

// import { Pagination } from "antd";

import { Header } from '@/source/widgets/header';

import userPhoto from '@/source/shared/images/user-photo.jpg';

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

  const [userInfo, setUserInfo] = React.useState({
    userPhoto: userPhoto || '',
    firstName: 'Константин' || '',
    lastName: 'Иванов' || '',
  });

  return (
    <>
      <Header links={links} userInfo={userInfo} />

      <main>Main</main>
      <footer className="ddd">Footer</footer>
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
