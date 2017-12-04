import { NavigationActions } from 'react-navigation';
import { combineReducers } from 'redux'

import { READ } from '../actions/listing'
import { AppNavigator } from '../containers/AppNavigation'
import { ReaderNavigator } from '../containers/ReaderScreen'

const initialAppNavigation = AppNavigator.router.getStateForAction(
  NavigationActions.navigate({ routeName: 'Main' })
)
export const appNavigation = (state = initialAppNavigation, { type }) => {
  switch (type) {
    case READ:

    return AppNavigator.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'ReaderScreen' }),
      state
    )

    case NavigationActions.BACK:

    return AppNavigator.router.getStateForAction(
      NavigationActions.back(),
      state
    )
  }

  return state
}

const initialReaderNavigation = ReaderNavigator.router.getStateForAction(
  NavigationActions.navigate({ routeName: 'Reader' })
)
export const readerNavigation = (state = initialReaderNavigation) => {
  return state
}

export const navigation = combineReducers({
  appNavigation,
  readerNavigation,
})
