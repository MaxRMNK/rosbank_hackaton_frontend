// import { DemoPage } from '@/source/pages-components/demo-page/';
import cn from 'classnames';
import classes from './styles.module.scss';
import { HomePage } from '@/source/pages-components/home-page/';

export default function Home() {
  // return <DemoPage />;
  return (
    <div className={cn(classes.page)}>
      <HomePage />
    </div>
  );
}
