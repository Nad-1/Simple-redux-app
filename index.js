/*string constant that indicate the type of the action */

const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'
    /** creating the action
     */
function buycake() {
    return {

        type: BUY_CAKE,
        info: 'First redux store'
    }
}
// reducers to update the state (previousState, action) --> returns the new State

const InitialState = {
    NumberofCake: 10
}
const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                NumberofCake: state.NumberofCake - 1
            }
        default:
            return state

    }
}
const store = createStore(reducer)
console.log('Initial State ', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
    //dispatch methode to update the this.state.first
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())

unsubscribe()