'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import Link from 'next/link';

import taskData from '@/public/demo-task-list.json';

import { TrainingCardList } from '@/source/features/training-card-list';

import { Activities } from '@/source/widgets/activities';

export const TrainingsPage: React.FC = () => {
  // Карточек показывать
  const initialCardCount = 4;
  // Карточек добавлять
  const addVisibleCard = 4;

  const [visibleCardCount, setVisibleCardCount] =
    React.useState(initialCardCount);

  const handleGetMoreCards = () => {
    setVisibleCardCount(visibleCardCount + addVisibleCard);
  };

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

    // Let's set the initial size
    handleResize();

    window.addEventListener('resize', handleResize);

    // Clearing the event handler
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, visibleCardCount]);

  // Activity cards
  function handleAddToPlan(data: any) {
    console.log('запрос для редактирования плана развития сотрудников', data);
  }

  return (
    <main className={cn(classes.main)}>
      <section className={cn(classes.activities)}>
        <h2 className={cn(classes.title)}>Рекомендованные активности</h2>
        <p className={cn(classes.description)}>
          Учебные материалы из нашего{' '}
          <Link href={'/404'} className={cn(classes.link)}>
            Центра повышения квалификации сотрудников
          </Link>
          , а также HR-активности, которые помогут в развитии компетенций в
          команде.
        </p>

        <div
          ref={contentRef}
          className={cn(classes.cardWrapper, { [classes.open]: isOpen })}
          style={{
            maxHeight: isOpen ? `${blockHeight}px` : '0',
          }}
        >
          <TrainingCardList
            taskList={taskData?.slice(0, visibleCardCount)}
            addVisibleCard={addVisibleCard}
            summTask={taskData.length}
            handleAddToPlan={handleAddToPlan}
            handleGetMoreCards={handleGetMoreCards}
          />
        </div>
      </section>
    </main>
  );
};
