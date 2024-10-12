'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeTrainingCardListProps } from './types';
import { Button } from '@/source/shared/ui/button';
import { TrainingCard } from '@/source/features/training-card-list/training-card';

export const TrainingCardList: React.FC<typeTrainingCardListProps> = props => {
  const { taskList, handleAddToPlan, handleGetMoreCards } = props;

  return (
    <>
      <div className={cn(classes.cardList)}>
        {taskList.map((item, index) => (
          <TrainingCard
            key={index}
            task={item}
            handleAddToPlan={handleAddToPlan}
          />
        ))}
        {/* <TrainingCard task={task} handleAddToPlan={handleAddToPlan} /> */}
      </div>

      <div className={cn(classes.buttonWrapper)}>
        <Button
          variant="white"
          className={cn(classes.more)}
          onClick={handleGetMoreCards}
          // disabled={true}
        >
          Показать еще
        </Button>
      </div>
    </>
  );
};
