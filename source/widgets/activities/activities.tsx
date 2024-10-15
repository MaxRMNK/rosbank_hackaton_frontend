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

  const [visibleCardCount, setVisibleCardCount] =
    React.useState(initialCardCount);

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
        // ref={ref}
        className={cn(classes.cardWrapper, { [classes.open]: isOpen })}
      >
        <TrainingCardList
          // films={cards?.slice(0, roundedVisibleCardCount)}
          taskList={taskList?.slice(0, visibleCardCount)}
          addVisibleCard={addVisibleCard}
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
