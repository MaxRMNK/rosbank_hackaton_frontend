import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { typeTrainingCardProps } from './training-card/types';

export interface typeTrainingCardListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  taskList: typeTrainingCardProps['task'][];
  handleAddToPlan: typeTrainingCardProps['handleAddToPlan'];
  handleGetMoreCards: () => void;
}
