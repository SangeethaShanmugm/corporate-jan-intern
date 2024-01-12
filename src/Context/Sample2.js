import { useGlobalContext } from "./Context"

export function Sample2() {
    const name = useGlobalContext()
    return (
        <h1>Hey {name}</h1>
    )
}
