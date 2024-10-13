'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeActivitiesProps } from './types';
// import { typeTrainingCardListProps } from '@/source/features/training-card-list/types';
// import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/source/shared/ui/button';
// import { AvatarGroup } from '@/source/shared/ui/avatar-group';
// import { TagList } from '@/source/shared/ui/tag-list';
// import { TrainingCard } from '@/source/features/training-card-list/training-card';
import { TrainingCardList } from '@/source/features/training-card-list';

// import taskData from '@/public/demo-task-list.json';

export const Activities: React.FC<typeActivitiesProps> = props => {
  const { taskList, handleAddToPlan } = props;

  const [isOpen, setIsOpen] = React.useState(true);

  const handleChangeVisibility = () => {
    setIsOpen(!isOpen);
  };

  // Карточек изначально
  const initialCardCount = 4;
  // Каточек добавлять по клику "Еще"
  const addVisibleCard = 2;

  const [visibleCardCount, setVisibleCardCount] = React.useState(initialCardCount);

  const handleGetMoreCards = () => {
    // console.log('загрузить еще карточки');
    setVisibleCardCount(visibleCardCount + addVisibleCard);
  };

  return (
    <section className={cn(classes.activities)}>
      <div className={cn(classes.intro)}>
        <div className={cn(classes.introContent)}>
          <h2 className={cn(classes.title)}>Рекомендованные активности</h2>
          <p className={cn(classes.description)}>
            Ниже собраны некоторые учебные материалы из нашего{' '}
            <Link href={'#'} className={cn(classes.link)}>
              Учебного центра
            </Link>
            , а также HR-активности, которые помогут в развитии компетенций в команде
          </p>
        </div>

        <button
          className={cn(classes.introButton, { [classes.show]: isOpen })}
          onClick={handleChangeVisibility}
        >
          {!isOpen ? 'Показать' : 'Скрыть'}
        </button>
      </div>

      <div
        // ref={ref}
        className={cn(classes.cardWrapper, { [classes.open]: isOpen })}
      >
        <TrainingCardList
          // films={cards?.slice(0, roundedVisibleCardCount)}
          taskList={taskList?.slice(0, visibleCardCount)}
          // taskList={taskList}
          summTask={taskList.length}
          handleAddToPlan={handleAddToPlan}
          handleGetMoreCards={handleGetMoreCards}
        />

        {/* {taskList.map((item, index) => (
          <TrainingCardList
            key={index}
            task={item}
            handleAddToPlan={handleAddToPlan}
            handleGetMoreCards={handleGetMoreCards}
          />
        ))} */}

        {/* <div className={cn(classes.buttonWrapper)}>
          <Button
            variant="white"
            className={cn(classes.more)}
            onClick={handleGetMoreCards}
            // disabled={true}
          >
            Показать еще
          </Button>
        </div> */}
      </div>
    </section>
  );
};

// const handleChangeVisibility = () => {
//   setIsOpen(!isOpen);
//   console.log(ref.current?.clientHeight);
// };

// const ref = React.useRef<HTMLDivElement>(null);
// const [height, setHeight] = React.useState(0);

// // React.useLayoutEffect(() => {
// //   setHeight(ref.current?.clientHeight);
// // }, []);

// React.useEffect(() => {
//   function handleResize() {
//     setHeight(ref.current?.clientHeight);
//   }

//   window.addEventListener('resize', handleWindowResize);
//   return window.removeEventListener('resize', handleWindowResize);
// }, []);

// // console.log(ref);

// --------------------------

// const userList = [
//   {
//     name: 'Иван Иванов',
//     photo: '/user-photo2.jpg',
//   },
//   {
//     name: 'Мария Иванова',
//     photo: '/user-photo.jpg',
//   },
//   {
//     name: 'Иван',
//     photo: '/default-avatar.jpg',
//   },
//   {
//     name: 'Иван Петров',
//     photo: '/user-photo2.jpg',
//   },
// ];

// const taskList = [
//   {
//     type: 'article', // meeting, training, course
//     heading: {
//       category: 'Прочитать статью',
//       title: '',
//       link: {
//         title: 'Плюсы и минусы GA4:  переход на новую систему аналитики',
//         route: '#',
//       },
//     },
//     userList: [
//       {
//         name: 'Иван Иванов',
//         photo: '/user-photo2.jpg',
//       },
//       {
//         name: 'Мария Иванова',
//         photo: '/user-photo.jpg',
//       },
//       {
//         name: 'Иван',
//         photo: '/default-avatar.jpg',
//       },
//     ],
//     tags: [
//       { title: 'Universal Analytics' },
//       { title: 'Продвинутый' },
//       { title: 'Статья' },
//     ],
//     description:
//       'Если вы не перешли на новую систему аналитики, сейчас самое время. Софья Попова, аналитик в агентстве MediaNation, рассказала, с какими сложностями придётся столкнуться.',
//     image: '/image1.jpg',
//   },
//   {
//     type: 'meeting',
//     heading: {
//       category: 'Посетить встречу',
//       title: 'Аналитическая поддержка',
//       link: { title: 'Смотреть календарь встреч', route: '#' },
//     },
//     userList: [
//       {
//         name: 'Иван Иванов',
//         photo: '/user-photo2.jpg',
//       },
//       {
//         name: 'Мария Иванова',
//         photo: '/user-photo.jpg',
//       },
//       {
//         name: 'Иван Петров',
//         photo: '/user-photo2.jpg',
//       },
//     ],
//     tags: [
//       { title: 'Google Analytics' },
//       { title: 'Продвинутый' },
//       { title: 'Встреча' },
//     ],
//     description:
//       'Обучение слушателей практическим навыкам использования современных средств аналитики, анализу работы сайтов, продаж в интернет-магазинах, конверсии и эффективности маркетинговых мероприятий.',
//     image: '/image2.jpg',
//   },
//   {
//     type: 'training',
//     heading: {
//       category: 'Пройти тренинг',
//       title: '«JavaScript Essential»',
//       link: { title: 'Смотреть программу тренингов', route: '#' },
//     },
//     userList: [
//       {
//         name: 'Иван Иванов',
//         photo: '/user-photo2.jpg',
//       },
//       {
//         name: 'Мария Иванова',
//         photo: '/user-photo.jpg',
//       },
//       {
//         name: 'Иван',
//         photo: '/default-avatar.jpg',
//       },
//     ],
//     tags: [
//       { title: '«JavaScript' },
//       { title: 'Продвинутый' },
//       { title: 'Тренинг' },
//     ],
//     description:
//       'Этот тренинг поможет  научиться анализировать код и улучшить навыки работы с HTML и CSS. Это полезно для начинающих и профессионалов в области программирования.',
//     image: '/image3.jpg',
//   },
//   {
//     type: 'course',
//     heading: {
//       category: 'Пройти курс',
//       title: '«Figma с нуля до PRO»',
//       link: { title: 'Смотреть программу курса', route: '#' },
//     },
//     userList: [
//       {
//         name: 'Иван Иванов',
//         photo: '/user-photo2.jpg',
//       },
//       {
//         name: 'Мария Иванова',
//         photo: '/user-photo.jpg',
//       },
//       {
//         name: 'Иван',
//         photo: '/default-avatar.jpg',
//       },
//     ],
//     tags: [{ title: 'Figma' }, { title: 'Начинающий' }, { title: 'Курс' }],
//     description:
//       'Освоите самую популярную программу для веб-дизайна на профессиональном уровне. Научитесь создавать интерактивные прототипы, передавать макеты разработчикам и экономить время на рутинных задачах.',
//     image: '/image4.jpg',
//   },
// ];
