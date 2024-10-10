import cn from 'classnames';
import classes from './styles.module.scss';
import { typeIndicatorsCardProps } from './types';
import Link from 'next/link';

export const IndicatorsCard: React.FC<typeIndicatorsCardProps> = props => {
  const { type, title, fieldData, handlerClick, className } = props;

  return (
    <div className={cn(className, classes.card)}>
      <h2 className={cn(classes.titleCard, classes[type])}>{title}</h2>
      <ul className={cn(classes.list)}>
        {fieldData &&
          fieldData.map((item, index) => (
            <li className={cn(classes.item, classes[item.name])} key={index}>
              <span className={cn(classes.title)}>
                {item.title}
                {/* {item.info !== null && item.info !== '' && (
                  <span className={cn(classes.info)}>{item.info}</span>
                )} */}
              </span>
              <span
                className={cn(classes.value, {
                  [classes.alert]: item.alert,
                })}
              >
                {item.value}
              </span>
            </li>
          ))}
      </ul>
      <div className={cn(classes.linkWrapper)}>
        <Link href={'#'} onClick={handlerClick} className={cn(classes.link)}>
          Подробнее
        </Link>
      </div>
    </div>
  );
};
