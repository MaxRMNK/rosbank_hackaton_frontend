import cn from 'classnames';
import classes from './styles.module.scss';
import { typeIndicatorsCardProps } from './types';
import Link from 'next/link';

export const IndicatorsCard: React.FC<typeIndicatorsCardProps> = props => {
  const { type, title, fieldData, handleClick, className } = props;

  // const fieldTitle: any = {
  //   allEmployees: 'Все сотрудники',
  //   keyEmployees: 'Ключевые сотрудники',
  //   normal: 'Соответствуют требуемому уровню',
  //   attention: 'Требуют развития',
  // };

  return (
    <div className={cn(className, classes.card)}>
      <h2 className={cn(classes.titleCard, classes[type])}>{title}</h2>
      <ul className={cn(classes.list)}>
        {fieldData &&
          fieldData.map(function (item, index) {
            return (
              <li className={cn(classes.item, classes[item.name])} key={index}>
                <span className={cn(classes.title)}>
                  {item.title}
                  {/* {fieldTitle[item.name]} */}
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
            );
          })}
      </ul>
      <div className={cn(classes.linkWrapper)}>
        <Link href={'#'} onClick={handleClick} className={cn(classes.link)}>
          Подробнее
        </Link>
      </div>
    </div>
  );
};
