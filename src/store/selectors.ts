import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

const getState = (state: RootState) => state.widget;

export const getMessage = createDraftSafeSelector(
  getState,
  (widget) => widget.message,
);

