export type Action = IncrementAction | DecrementAction;

export interface IncrementAction {
    type: 'increment';
}

export interface DecrementAction {
    type: 'decrement';
}
