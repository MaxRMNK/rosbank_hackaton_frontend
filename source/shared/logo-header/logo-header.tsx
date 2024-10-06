import cn from 'classnames';
import classes from './styles.module.scss';

import Link from 'next/link';

export const LogoHeader = () => {
  return (
    <Link href="/" className={cn(classes.logo)}>
      <span className={cn(classes.logoImage)}></span>
    </Link>
  );
};
