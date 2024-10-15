'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';

import { typeTagListSkillsProps } from './types';

export const TagListSkills: React.FC<typeTagListSkillsProps> = props => {
  const { tags, className } = props;

  // const { skill = '',
  //   level = '',
  //   status= '',
  //  } = tags;

  // Тегов изначально
  const initialTagCount = 9;
  // Всего тегов
  const summTags = tags.length;
  // Осталось тегов
  const tagsLeft = tags.length - initialTagCount;

  const visibleTag = tags?.slice(0, initialTagCount);
  const hiddenTag = tags?.slice(initialTagCount, summTags);

  const [isShowMoreTag, setIsShowMoreTag] = React.useState(true);
  const showMoreTag = () => {
    setIsShowMoreTag(false);
  };

  return (
    <ul className={cn(className, classes.tagsList)}>
      {visibleTag &&
        visibleTag.map((tag, index) => (
          <li
            className={cn(
              classes.listItem,
              classes[tag.level],
              classes[tag.status],
            )}
            key={index}
          >
            {tag.skill}
          </li>
        ))}
      {tagsLeft > 0 && isShowMoreTag && (
        <li className={cn(classes.listItemButton)}>
          <button className={cn(classes.moreTag)} onClick={showMoreTag}>
            {'+' + tagsLeft}
          </button>
        </li>
      )}
      {hiddenTag.length > 0 &&
        !isShowMoreTag &&
        hiddenTag.map((tag, index) => (
          <li
            className={cn(
              classes.listItem,
              classes[tag.level],
              classes[tag.status],
            )}
            key={index}
          >
            {tag.skill}
          </li>
        ))}
    </ul>
  );
};
