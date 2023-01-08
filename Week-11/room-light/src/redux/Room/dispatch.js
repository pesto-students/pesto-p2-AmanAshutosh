import { ModeAction } from "./action"

// maping states to props
export const mapStateToProps = (state) => {
    return {
        lights: state.lights,
        text: state.text,
    }
}

// maping dispatch to props
export const mapDispatchToProps = (dispatch) => {
    return {
        toggle:() => dispatch(ModeAction())
    }
}