import cn from 'classnames';
import classes from './styles.module.scss';
import { typeSkillTableRowProps, typeLevel } from './types';
import { SkillInfo } from '@/source/shared/skill-info';

export const SkillTableRow: React.FC<typeSkillTableRowProps> = props => {
  const {
    skillName,
    title,
    image,
    keySkill,
    type,
    level,
    targetLevel,
    // setIsPeople,
    className,
  } = props;

  let sumPeople: number = 0;

  for (let value of Object.values(level)) {
    sumPeople += value;
  }

  // Отрисовка элементов для "Уровень навыка"
  const renderLevel = (obj: typeLevel) => {
    return Object.keys(obj).map(key => {
      if (obj[key] <= 0) return;
      return (
        <div
          key={key}
          className={cn(classes.line, classes[key])}
          style={{
            width: `${(obj[key] * 100) / sumPeople}%`,
          }}
        >
          {obj[key]}
        </div>
      );
    });
  };

  // Отрисовка элементов для "Требуемый уровень"
  const renderTargetLevel = (obj: typeLevel) => {
    return Object.keys(obj).map(key => {
      if (obj[key] <= 0) return;
      return (
        <div key={key} className={cn(classes.line, classes[key])}>
          {obj[key]}
        </div>
      );
    });
  };

  // Предупреждение, если требования выше фактических уровней скилла
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

  // !!!
  // Нет формулы и объяснения от PM и аналитиков, как
  // вычислять % соответствия или несоответствия уровней.
  // Поэтому пока картинка с Warning'ом без пояснения:
  // "🙁 уровень навыка соответствует требуемому на 54%"

  return (
    <div className={cn(className, classes.tableRow)}>
      <div
        className={cn(classes.skills, classes.tableCell, {
          [classes.key]: keySkill,
        })}
      >
        <SkillInfo
          title={title}
          image={image}
          keySkill={keySkill}
          type={type}
          className={cn(classes.skillInfo)}
        />
      </div>

      <div className={cn(classes.users, classes.tableCell)}>{sumPeople}</div>

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
