// Lets you have a component that is remote controlled (0 local, 1 remote) in prod OR local controlled (1 local, 0 remote) in test
// An example use case of this is using it with a component that is an island but has updates that are needed elsewhere 
import { useState } from 'react'
export const useControllableState = ({ value, defaultValue, onChange }) => {
    const [internal, setInternal] = useState(defaultValue)
    const current = value !== undefined ? value : internal
    const set = newValue => { if (value !== undefined) { onChange?.(newValue) } else setInternal(newValue) }
    return [current, set]
}