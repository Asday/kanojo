import { createSelector } from 'reselect'

export const navigationSelector = (state) => state.navigation

export const appNavigationSelector = createSelector(
  navigationSelector,
  (navigation) => navigation.appNavigation
)

export const readerNavigationSelector = createSelector(
  navigationSelector,
  (navigation) => navigation.readerNavigation
)
