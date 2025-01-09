import cn from 'classnames';
import classes from './styles.module.scss';
import { Header } from '@/source/widgets/header';

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={cn(classes.page)}>
      <Header />
      {children}
    </div>
  );
};

export default RootLayout;
