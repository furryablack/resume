import { Frame } from './frame';
import { Area as Unauth } from './unauth';

export const Area = {
  path: '',
  component: Frame,

  children: [
    Unauth,
  ],
};