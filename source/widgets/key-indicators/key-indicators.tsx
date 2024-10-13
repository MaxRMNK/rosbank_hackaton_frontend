import cn from 'classnames';
import classes from './styles.module.scss';
import { typeKeyIndicatorsProps } from './types';
import { TeamStats } from '@/source/features/team-stats';
import Link from 'next/link';

export const KeyIndicators: React.FC<typeKeyIndicatorsProps> = props => {
  const { teamData, className } = props;

  return (
    <div className={cn(className, classes.keyIndicators)}>
      <h2 className={cn(className, classes.title)}>Ключевые показатели</h2>
      <div className={cn(className, classes.navigate)}>
        <div className={cn(className, classes.toggle)}>переключалка между таблицами</div>
        <Link href={'#'} className={cn(className, classes.link)}>
          меняющиеся ссылки
        </Link>
      </div>

      <TeamStats teamData={teamData} />
    </div>
  );
};
