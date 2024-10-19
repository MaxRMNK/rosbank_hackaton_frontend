import cn from 'classnames';
import classes from './styles.module.scss';
import { typeIndicatorsCardProps } from './types';

export const IndicatorsCard: React.FC<typeIndicatorsCardProps> = props => {
  const { type, title, fieldData, className } = props;

  return (
    <div className={cn(className, classes.card)}>
      <h2 className={cn(classes.titleCard, classes[type])}>{title}</h2>
      <ul className={cn(classes.list)}>
        {fieldData &&
          fieldData.map(function (item, index) {
            return (
              <li className={cn(classes.item, classes[item.name])} key={index}>
                <span className={cn(classes.title)}>{item.title}</span>
                <span className={cn(classes.value, classes[item.status])}>
                  {item.value}
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
