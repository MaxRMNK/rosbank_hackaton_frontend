import cn from 'classnames';
import classes from './styles.module.scss';
import { typeSkillsStatsProps } from './types';
import { SkillTableRow } from '@/source/shared/skill-table-row';

export const SkillsStats: React.FC<typeSkillsStatsProps> = props => {
  const { skillData, skillLimit, className } = props;

  const glossary = {
    none: 'Не владеет',
    junior: 'Начинающий',
    middle: 'Базовый',
    senior: 'Уверенный',
    expert: 'Экспертный',
  };

  // Получает только ключевые скиллы
  const keySkills = skillData
    .filter(skill => skill.keySkill)
    .slice(0, skillLimit);

  return (
    <div className={cn(className, classes.skills)}>
      <div className={cn(classes.glossary)}>
        <ul className={cn(classes.listItems)}>
          {Object.entries(glossary).map(([key, value]) => (
            <li className={cn(classes.item)} key={key}>
              <span className={cn(classes.marker, classes[key])}></span>
              {value}
            </li>
          ))}
        </ul>
      </div>

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

        {keySkills.map((item, index) => (
          <SkillTableRow
            key={index}
            // skillName={item.skillName}
            title={item.title}
            image={item.image}
            keySkill={item.keySkill}
            type={item.type}
            level={item.level}
            targetLevel={item.targetLevel}
            className={cn(classes.tableSkillsRow)}
          />
        ))}
      </div>
    </div>
  );
};
