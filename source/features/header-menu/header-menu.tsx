import cn from 'classnames';
import classes from './styles.module.scss';
import { headerMenuProps } from './types';
import { HeaderMenuLink } from './header-menu-link';

export const HeaderMenu: React.FC<headerMenuProps> = ({ className, links }) => {
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
