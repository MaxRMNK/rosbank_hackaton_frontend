import cn from 'classnames';
import classes from './styles.module.scss';
import { HeaderMenuLink } from '../header-menu-link';
import { headerMenuProps } from './types';

export const HeaderMenu: React.FC<headerMenuProps> = props => {
  const { className, links } = props;

  return (
    <nav className={cn(className, classes.headerMenu)}>
      <ul className={cn(className, classes.headerMenuWrapper)}>
        {links &&
          links.map((link, index) => (
            <HeaderMenuLink key={index} link={link} />
          ))}
      </ul>
    </nav>
  );
};
