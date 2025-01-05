'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeNotificationProps } from './types';
import { Button } from '@/source/shared/ui/button';

export const Notification: React.FC<typeNotificationProps> = props => {
  const { title, handleReadMore, handleApprove, handleClose, isClose } = props;

  return (
    <div
      className={cn(classes.notificationWrapper, {
        [classes.close]: isClose,
      })}
    >
      <div className={cn(classes.notification)}>
        <div className={cn(classes.message)}>{title}</div>
        <div className={cn(classes.actions)}>
          <Button
            variant="clear"
            className={cn(classes.readMore)}
            onClick={handleReadMore}
          >
            Подробнее
          </Button>
          <Button
            variant="red"
            className={cn(classes.approve)}
            onClick={handleApprove}
            // disabled={true}
          >
            Согласовать все
          </Button>
        </div>
      </div>

      <button className={cn(classes.closeButton)} onClick={handleClose} />
    </div>
  );
};
