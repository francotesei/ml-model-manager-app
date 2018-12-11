import { EnthusiasmAction } from '../../actions';
import { StoreState } from '../../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../../actions/constants';


export  function enthusiasm(state: StoreState.Enthusiasm , action: EnthusiasmAction): StoreState.Enthusiasm {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    default:
      return state
    }
}