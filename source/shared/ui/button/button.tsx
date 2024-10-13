'use client';

import React from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';
import { typeButtonProps } from '@/source/shared/ui/button/types';

export const Button: React.FC<typeButtonProps> = props => {
  const {
    variant = 'clear',
    children,
    disabled,
    className,
    ...otherProps
  } = props;

  return (
    <button
      disabled={disabled}
      className={cn(className, classes.button, classes[variant])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
