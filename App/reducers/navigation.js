
'use strict';

import * as actionType from '../actions/types';

const initialState = {
	index: 1,
    routes: [
        { key: 'H', routeName: 'Home' },
        { key: 'N', routeName: 'Activity' }
    ]
};

export default function navigation(state = initialState, action) {
    switch (action.type) {
            case actionType.HOME:
                return AppNavigator.router.getStateForAction(action, state);
            case actionType.NOTIFICATIONS:
                return AppNavigator.router.getStateForAction(action, state);
        }
    return state;
}