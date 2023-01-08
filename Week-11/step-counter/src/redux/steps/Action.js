export const STEP_INCREMENT = "STEP_INCREMENT"
export const STEP_RESET = "STEP_RESET"

// Increment action creator
export function stepInc(){
    return {
        type: STEP_INCREMENT
    }
}

// Reset action creator
export function stepReset(){
    return {
        type: STEP_RESET
    }
}