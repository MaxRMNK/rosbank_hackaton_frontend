'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeWelcomeInfoProps } from './types';
import Image from 'next/image';
import Link from 'next/link';
import { TagList } from '@/source/shared/ui/tag-list';

import userPhoto from '@/source/shared/images/user-photo.jpg';
import DefaultAvatar from '@/source/shared/images/default-avatar.jpg';

export const WelcomeInfo: React.FC<typeWelcomeInfoProps> = props => {
  const { welcomeData } = props;

  // const welcomeData = {
  //   aboutTeam: [
  //     { item: 'Бас-фактор равен 6, что говорит о стабильности в команде' },
  //     { item: 'Рекомендовано повысить уровень соответствия задачам (75%)' },
  //     {
  //       item: 'Подобрано 11 мероприятий для включения в планы развития членов команды',
  //     },
  //   ],
  //   description:
  //     'Краткое описание, чем занимается команда, за что ответствена. Это поле на три строчки, чтобы можно было вместить нужное количество инфы о команде. Еще пара слов, чтобы было все же три строки.',
  //   tags: [{ title: 'Омниканальные клиенты' }, { title: 'E-commerce' }],
  //   managers: [
  //     {
  //       jobPosition: 'Team lead',
  //       photo: null,
  //       firstName: 'Имя',
  //       lastName: 'Фамилия',
  //     },
  //     {
  //       jobPosition: 'Product owner',
  //       photo: userPhoto,
  //       firstName: 'ДлинноеИмя',
  //       lastName: 'ФамилияТоже',
  //     },
  //   ],
  //   links: [
  //     {
  //       key: 'wiki',
  //       name: 'Wiki',
  //       link: 'https://ya.ru/search/?text=wiki',
  //     },
  //     {
  //       key: 'jira',
  //       name: 'Jira Board',
  //       link: 'https://www.atlassian.com/ru/software/jira',
  //     },
  //   ],
  // };

  // const tags = [{ title: 'Омниканальные клиенты' }, { title: 'E-commerce' }];

  return (
    <section className={cn(classes.greeting)}>
      <div className={cn(classes.important)}>
        <h2 className={cn(classes.title)}>Cамое важное о команде</h2>
        {/* <p className={cn(classes.subtitle)}>:</p> */}
        <ul className={cn(classes.items)}>
          {welcomeData.aboutTeam &&
            welcomeData.aboutTeam.map(itemList => (
              <li className={cn(classes.item)}>{itemList.item}</li>
            ))}
        </ul>
      </div>

      <div className={cn(classes.about)}>
        <h2 className={cn(classes.title)}>О команде</h2>
        <p className={cn(classes.description)}>{welcomeData.description}</p>

        <TagList tags={welcomeData.tags} className={cn(classes.tagList)} />

        <div className={cn(classes.info)}>
          {welcomeData.managers &&
            welcomeData.managers.map(itemList => (
              <div className={cn(classes.manager)}>
                <h3 className={cn(classes.infoTitle)}>
                  {itemList.jobPosition}
                </h3>
                <div className={cn(classes.userInfo)}>
                  <Image
                    className={cn(classes.userAvatar)}
                    src={itemList.photo || DefaultAvatar}
                    alt=""
                    width={100}
                    height={100}
                  />
                  <span className={cn(classes.userName)}>
                    {itemList.firstName} {itemList.lastName}
                  </span>
                </div>
              </div>
            ))}

          <div className={cn(classes.links)}>
            <h3 className={cn(classes.infoTitle)}>Ссылки</h3>
            <div className={cn(classes.linksList)}>
              {welcomeData.links &&
                welcomeData.links.map(itemList => (
                  <Link
                    href={itemList.link}
                    className={cn(classes.link, classes[itemList.key])}
                    target="_blank"
                    rel="nofollow noindex noopener"
                  >
                    {itemList.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
