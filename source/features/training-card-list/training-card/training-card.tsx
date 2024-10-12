'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeTrainingCardProps } from './types';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/source/shared/ui/button';
import { AvatarGroup } from '@/source/shared/ui/avatar-group';
import { TagList } from '@/source/shared/ui/tag-list';

export const TrainingCard: React.FC<typeTrainingCardProps> = props => {
  const { task, handleAddToPlan } = props;

  // console.log('task', task);

  return (
    <article className={cn(classes.card)}>
      {/* {task.type} */}
      <div className={cn(classes.header)}>
        <h3 className={cn(classes.title, classes.type)}>
          <span className={cn(classes.category)}>{task.heading.category}</span>
        </h3>
        <div className={cn(classes.recommended)}>
          <AvatarGroup
            userList={task.userList}
            className={cn(classes.userList)}
          />
          <span className={cn(classes.listHeader)}>рекомендовано</span>
        </div>
      </div>
      <TagList tags={task.tags} className={cn(classes.tagList)} />
      <div className={cn(classes.contentWrapper)}>
        <Image
          className={cn(classes.previewImage)}
          src={task.image}
          alt=""
          width={210}
          height={110}
        />
        <p className={cn(classes.description)}>{task.description}</p>
      </div>
      <Button
        variant="red"
        className={cn(classes.more)}
        // onClick={handleAddToPlan}
      >
        Включить в план развития
      </Button>
    </article>
  );
};
