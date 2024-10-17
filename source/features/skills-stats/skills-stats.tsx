import cn from 'classnames';
import classes from './styles.module.scss';
import { typeSkillsStatsProps } from './types';
import { SkillTableRow } from '../skill-table-row';

export const SkillsStats: React.FC<typeSkillsStatsProps> = props => {
  const { skillData, className } = props;

  return (
    <div className={cn(className, classes.skills)}>
      {/* <div className={cn(classes.glossary)}>Пояснение к таблице</div> */}

      <div className={cn(classes.tableSkills)}>
        <div className={cn(classes.tableHeader)}>
          <div className={cn(classes.skills, classes.tableCell)}>
            Ключевые навыки
          </div>
          <div className={cn(classes.users, classes.tableCell)}></div>
          <div className={cn(classes.level, classes.tableCell)}>
            Уровень навыка
          </div>
          <div className={cn(classes.targetLevel, classes.tableCell)}>
            Требуемый уровень
          </div>
          <div className={cn(classes.alert, classes.tableCell)}></div>
        </div>

        {/* <div className={cn(classes.sorry)}>Не успел сделать</div> */}
        {skillData.map((item, index) => {
          // Выводит только ключевые навыки
          if (!item.keySkill) return;

          return (
            <SkillTableRow
              key={index}
              skillName={item.skillName}
              title={item.title}
              image={item.image}
              keySkill={item.keySkill}
              type={item.type}
              level={item.level}
              targetLevel={item.targetLevel}
              className={cn(classes.tableSkillsRow)}
            />
          );
        })}
      </div>
    </div>
  );
};
