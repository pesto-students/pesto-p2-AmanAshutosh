import { stepInc, stepReset } from "./Action"

// mapping state to props
export const mapStateToProps = (state) => {
    return {
        numOfSteps: state.numOfSteps
    }
}

// maping dispatch actions to props
export const mapDispatchToProps = (dispatch) => {
    return {
        stepInc: () => dispatch(stepInc()),
        stepReset: () => dispatch(stepReset())
    }
}