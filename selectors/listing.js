import { createSelector } from 'reselect';

const listingSelector = (state) => state.listing

export const isLoadingSelector = createSelector(
  listingSelector,
  (listing) => listing.isLoading
)

export const isAnyLoadedSelector = createSelector(
  listingSelector,
  (listing) => listing.isAnyLoaded
)

export const itemsSelector = createSelector(
  listingSelector,
  (listing) => listing.items
)
