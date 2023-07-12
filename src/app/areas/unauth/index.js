import { PagesArea } from '@pages';
import { Frame } from './frame';

export const Area = {
  path: '',
  component: Frame,

  children: [
    {
      path: '',
      children: PagesArea.Entire,
    },
  ],
};
