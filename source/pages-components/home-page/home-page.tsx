'use client';

// import Image from 'next/image';
// import styles from './page.module.css';
import React from 'react';
// import React, { ReactNode } from 'react';

// import { Pagination } from "antd";

import { Header } from '@/source/widgets/header';

import logoHader from '@/source/shared/images/logo-rosbank.svg';

export const HomePage: React.FC = () => {
  const [links, setLinks] = React.useState([
    { title: 'Организация', link: '/profile' },
    {
      title: 'Мои команды',
      link: '/404',
      sublink: [
        { title: 'Вложенная ссылка', link: '/404' },
        { title: 'Вторая вложенная ссылка', link: '/404' },
      ],
    },
    { title: 'Еще одна ссылка', link: '/404' },
  ]);

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

  return (
    <div>
      {/* <Pagination
        onChange={handlePageChange}
        total={50}
        itemRender={renderItem}
      /> */}
      <Header logo={logoHader} />

      <main>sdsdf</main>
      <footer className="ddd">:::///</footer>
    </div>
  );
};
