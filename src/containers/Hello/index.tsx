
import Hello from '../../components/Hello';
import * as actions from '../../actions';
import { StoreState } from '../../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';


export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState.Enthusiasm) {
  return {
    enthusiasmLevel,
    name: languageName,
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);