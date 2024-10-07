'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';

import { typeWelcomeInfoProps } from './types';
import Image from 'next/image';

import userPhoto from '@/source/shared/images/user-photo.jpg';
import Link from 'next/link';

export const WelcomeInfo: React.FC<typeWelcomeInfoProps> = props => {
  const {} = props;

  return (
    <section className={cn(classes.greeting)}>
      <div className={cn(classes.important)}>
        <h2 className={cn(classes.title)}>Приветствую, ХХХ!</h2>
        <p className={cn(classes.subtitle)}>Cамое важное о команде:</p>
        <ul className={cn(classes.items)}>
          <li className={cn(classes.item)}>
            Бас-фактор равен 6, что говорит о стабильности в команде
          </li>
          <li className={cn(classes.item)}>
            Рекомендовано повысить уровень соответствия задачам (75%)
          </li>
          <li className={cn(classes.item)}>
            Подобрано 11 мероприятий для включения в планы развития членов
            команды
          </li>
        </ul>
      </div>

      <div className={cn(classes.about)}>
        <h2 className={cn(classes.title)}>О команде</h2>
        <p className={cn(classes.description)}>
          Краткое описание, чем занимается команда, за что ответствена. Это поле
          на три строчки, чтобы можно было вместить нужное количество инфы о
          команде. Еще пара слов, чтобы было все же три строки.
        </p>
        <ul className={cn(classes.tags)}>
          <li className={cn(classes.tag)}>Омниканальные клиенты</li>
          <li className={cn(classes.tag)}>E-commerce</li>
        </ul>

        <div className={cn(classes.info)}>
          <div className={cn(classes.manager, classes.teamLead)}>
            <h3 className={cn(classes.infoTitle)}>Team lead</h3>
            <div className={cn(classes.userInfo)}>
              <Image
                className={cn(classes.userAvatar)}
                src={userPhoto}
                alt=""
                width={100}
                height={100}
              />
              <span className={cn(classes.userName)}>Имя Фамилия</span>
            </div>
          </div>

          <div className={cn(classes.manager, classes.productOwner)}>
            <h3 className={cn(classes.infoTitle)}>Product owner</h3>
            <div className={cn(classes.userInfo)}>
              <Image
                className={cn(classes.userAvatar)}
                src={userPhoto}
                alt=""
                width={100}
                height={100}
              />
              <span className={cn(classes.userName)}>
                ДлинноеИмя ФамилияТоже
              </span>
            </div>
          </div>

          <div className={cn(classes.links)}>
            <h3 className={cn(classes.infoTitle)}>Ссылки</h3>
            <div className={cn(classes.linksList)}>
              <Link href={'#'} className={cn(classes.link, classes.wiki)}>
                Wiki
              </Link>
              <Link href={'#'} className={cn(classes.link, classes.jira)}>
                Jira Board
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
