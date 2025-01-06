'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeActivitiesProps } from './types';
import Link from 'next/link';
import { TrainingCardList } from '@/source/features/training-card-list';

export const Activities: React.FC<typeActivitiesProps> = props => {
  const { taskList, handleAddToPlan } = props;

  // Карточек показывать
  const initialCardCount = 4;
  // Карточек добавлять
  const addVisibleCard = 2;

  const [visibleCardCount, setVisibleCardCount] =
    React.useState(initialCardCount);

  const handleGetMoreCards = () => {
    setVisibleCardCount(visibleCardCount + addVisibleCard);
  };

  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  // const [blockHeight, setBlockHeight] = React.useState<number>(0);

  const handleChangeVisibility = () => {
    setIsOpen(!isOpen);
  };

  // Было нужно для плавного раскрытия блока карточек. Переделал на гридах - 2025-01-03
  // React.useEffect(() => {
  //   const handleResize = () => {
  //     if (contentRef.current) {
  //       setBlockHeight(contentRef.current.scrollHeight);
  //     }
  //   };

  //   // Let's set the initial size
  //   handleResize();

  //   window.addEventListener('resize', handleResize);

  //   // Clearing the event handler
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [isOpen, visibleCardCount]);

  return (
    <section className={cn(classes.activities)}>
      <div className={cn(classes.intro)}>
        <div className={cn(classes.introContent)}>
          <h2 className={cn(classes.title)}>Рекомендованные активности</h2>
          <p className={cn(classes.description)}>
            Ниже собраны некоторые учебные материалы из нашего{' '}
            <Link
              href={'/404'}
              className={cn(classes.link)}
              target="_blank"
              rel="noopener"
            >
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
        // style={{
        //   maxHeight: isOpen ? `${blockHeight}px` : '0',
        // }}
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
