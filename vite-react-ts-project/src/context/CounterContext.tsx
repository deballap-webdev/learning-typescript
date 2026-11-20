import { createContext, ReactElement, useContext, ChangeEvent } from "react"
import { initState, useCounterContext, UseCounterContextType, StateType } from "./CounterReducer"

const initContextState: UseCounterContextType = {
    state: initState,
    increment: () => { },
    decrement: () => { },
    handleTextInput: (e: ChangeEvent<HTMLInputElement>) => { }
}

type ChildrenType = {
    children?: ReactElement | undefined
}

export const CounterContext = createContext<UseCounterContextType>({ ...initContextState })

export const CounterProvider = ({
    children, ...initState
}: ChildrenType & StateType): ReactElement => {
    return (
        <CounterContext value={useCounterContext(initState)}>
            {children}
        </CounterContext>
    )
}

type UseCounterHookType = {
    count: number,
    increment: () => void,
    decrement: () => void
}

export const useCounter = (): UseCounterHookType => {
    const { state: { count }, increment, decrement } = useContext(CounterContext)
    return { count, increment, decrement }
}

type UseCounterTextHookType = {
    text: string,
    handleTextInput: (e: ChangeEvent<HTMLInputElement>) => void
}

export const useCounterText = (): UseCounterTextHookType => {
    const { state: { text }, handleTextInput } = useContext(CounterContext)
    return { text, handleTextInput }
}