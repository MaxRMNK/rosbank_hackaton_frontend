import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { typeTrainingCardListProps } from '@/source/shared/training-card-list/types';

export interface typeActivitiesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  taskList: typeTrainingCardListProps['taskList'];
  handleAddToPlan: typeTrainingCardListProps['handleAddToPlan'];
  // handleGetMoreCards: () => void;
}
