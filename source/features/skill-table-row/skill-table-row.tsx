import cn from 'classnames';
import classes from './styles.module.scss';
import { typeSkillTableRowProps, typeLevel } from './types';
import { SkillInfo } from '@/source/shared/skill-info';

export const SkillTableRow: React.FC<typeSkillTableRowProps> = props => {
  const { title, image, keySkill, type, level, targetLevel, className } = props;

  // Считает сколько всего человек владеет навыком
  let sumPeople: number = 0;
  for (let value of Object.values(level)) {
    sumPeople += value;
  }

  // Выводит элементы для "Уровень навыка"
  const renderLevel = (obj: typeLevel) => {
    return Object.keys(obj).map(key => {
      if (obj[key] <= 0) return;
      return (
        <div
          key={key}
          className={cn(classes.chart, classes.line, classes[key])}
          style={{
            width: `${(obj[key] * 100) / sumPeople}%`,
          }}
        >
          {obj[key]}
        </div>
      );
    });
  };

  // Выводит элементы для "Требуемый уровень"
  const renderTargetLevel = (obj: typeLevel) => {
    return Object.keys(obj).map(key => {
      if (obj[key] <= 0) return;
      return (
        <div
          key={key}
          className={cn(classes.chart, classes.circle, classes[key])}
        >
          {obj[key]}
        </div>
      );
    });
  };

  // Выводит предупреждение, если требования выше фактических уровней навыка
  // !!!
  // Нет формулы и объяснения от PM и аналитиков, как вычислять %
  // соответствия или несоответствия уровней владения навыком.
  // Поэтому картинка с предупреждением без пояснения:
  // "🙁 уровень навыка соответствует требуемому на 54%"
  const compareLevel = (levelA: typeLevel, levelB: typeLevel): boolean => {
    for (const key in levelA) {
      if (
        levelA.hasOwnProperty(key) &&
        levelB.hasOwnProperty(key) &&
        levelB[key] > levelA[key]
      ) {
        return true;
      }
    }
    return false;
  };
  const compare = compareLevel(level, targetLevel);

  return (
    <div className={cn(className, classes.tableRow)}>
      <SkillInfo
        className={cn(classes.skill, classes.tableCell)}
        title={title}
        image={image}
        keySkill={keySkill}
        type={type}
      />

      <div className={cn(classes.users, classes.tableCell)}>
        <span className={cn(classes.container)}>{sumPeople}</span>
      </div>

      <div className={cn(classes.level, classes.tableCell)}>
        {renderLevel(level)}
      </div>

      <div className={cn(classes.targetLevel, classes.tableCell)}>
        {renderTargetLevel(targetLevel)}
      </div>

      <div className={cn(classes.status, classes.tableCell)}>
        {compare && <span className={cn(classes.warning)}></span>}
      </div>
    </div>
  );
};
