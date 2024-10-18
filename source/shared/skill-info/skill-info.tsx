import cn from 'classnames';
import classes from './styles.module.scss';
import { typeSkillInfoProps } from './types';
import Image from 'next/image';

export const SkillInfo: React.FC<typeSkillInfoProps> = props => {
  const { title, image, keySkill, type, className, ...otherProps } = props;

  const typeName = {
    softSkills: 'Универсальный навык',
    hardSkills: 'Технический навык',
  };

  const getStringValueByKey = (
    obj: Record<string, any>,
    key: string,
  ): string | null => {
    if (key in obj) {
      const value = obj[key];
      return typeof value === 'string' ? value : null; // Вернем значение как строку, если оно этого типа
    }
    return null; // Возвращаем null, если ключ не найден в объекте
  };
  const skillType = getStringValueByKey(typeName, type);

  return (
    <div className={cn(className, classes.skill)}>
      <div className={cn(classes.imageWrapper)}>
        <Image
          className={cn(classes.logo)}
          src={image}
          alt=""
          width={100}
          height={100}
        />
        {keySkill && <span className={cn(classes.key)}></span>}
      </div>
      <div className={cn(classes.info)}>
        <h4 className={cn(classes.title)}>{title}</h4>
        {skillType && <span className={cn(classes.type)}>{skillType}</span>}
      </div>
    </div>
  );
};
