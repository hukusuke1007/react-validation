import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import * as counterModule from '../modules/Counter'
import { ReduxSample } from '../../component/ReduxSample'

export type State = {
  counter: counterModule.State
}

const mapStateToProps = (state: State) => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    increment: () => dispatch(counterModule.increment()),
    decrement: () => dispatch(counterModule.decrement()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxSample)