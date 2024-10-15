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

  // Карточек изначально
  const initialCardCount = 4;
  // Каточек добавлять по клику "Еще"
  const addVisibleCard = 2;

  const [visibleCardCount, setVisibleCardCount] =
    React.useState(initialCardCount);

  const handleGetMoreCards = () => {
    // console.log('загрузить еще карточки');
    setVisibleCardCount(visibleCardCount + addVisibleCard);
  };

  // ------------------------
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const [blockHeight, setBlockHeight] = React.useState<number>(0);

  const handleChangeVisibility = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setBlockHeight(contentRef.current.scrollHeight);
      }
    };

    // Установим начальный размер
    handleResize();

    window.addEventListener('resize', handleResize);

    // Очистка обработчика событий
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, visibleCardCount]);

  return (
    <section className={cn(classes.activities)}>
      <div className={cn(classes.intro)}>
        <div className={cn(classes.introContent)}>
          <h2 className={cn(classes.title)}>Рекомендованные активности</h2>
          <p className={cn(classes.description)}>
            Ниже собраны некоторые учебные материалы из нашего{' '}
            <Link href={'/404'} className={cn(classes.link)}>
              Учебного центра
            </Link>
            , а также HR-активности, которые помогут в развитии компетенций в
            команде
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
        ref={contentRef}
        className={cn(classes.cardWrapper, { [classes.open]: isOpen })}
        style={{
          maxHeight: isOpen ? `${blockHeight}px` : '0',
        }}
      >
        <TrainingCardList
          taskList={taskList?.slice(0, visibleCardCount)}
          addVisibleCard={addVisibleCard}
          summTask={taskList.length}
          handleAddToPlan={handleAddToPlan}
          handleGetMoreCards={handleGetMoreCards}
        />
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
