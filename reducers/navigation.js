import { NavigationActions } from 'react-navigation';

import { READ } from '../actions/listing'
import { Navigator } from '../containers/Navigation'

const initialNavigation = Navigator.router.getStateForAction(
  NavigationActions.navigate({ routeName: 'Main' })
)
export const navigation = (state = initialNavigation, { type }) => {
  switch (type) {
    case READ:

    return Navigator.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'Reader' }),
      state
    )

    case NavigationActions.BACK:

    return Navigator.router.getStateForAction(
      NavigationActions.back(),
      state
    )
  }

  return state
}
