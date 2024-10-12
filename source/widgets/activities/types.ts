import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { typeTrainingCardListProps } from '@/source/features/training-card-list/types';

export interface typeActivitiesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  handleGetMoreCards: () => void;
  taskList: typeTrainingCardListProps['taskList'];
  handleAddToPlan: typeTrainingCardListProps['handleAddToPlan'];
}
