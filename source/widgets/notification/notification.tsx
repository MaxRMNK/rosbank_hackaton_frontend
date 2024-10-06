'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeNotificationProps } from './types';
import { Button } from '@/source/shared/ui/button';

export const Notification: React.FC<typeNotificationProps> = props => {
  const { title, description, readMore, approve } = props;

  const [isClose, setClose] = React.useState(false);

  const handlerClose = () => {
    setClose(true);
  };

  return (
    <>
      <div
        className={cn(classes.notification, {
          [classes.close]: isClose,
        })}
      >
        <div className={cn(classes.message)}>
          <h3 className={cn(classes.title)}>{title}</h3>
          <p className={cn(classes.description)}>{description}</p>
        </div>
        <div className={cn(classes.actions)}>
          <Button
            variant="white"
            className={cn(classes.readMore)}
            onClick={readMore}
          >
            Подробнее
          </Button>
          <Button
            variant="red"
            className={cn(classes.approve)}
            onClick={approve}
            // disabled={true}
          >
            Согласовать
          </Button>
        </div>
        <button className={cn(classes.closeButton)} onClick={handlerClose} />
      </div>
    </>
  );
};
