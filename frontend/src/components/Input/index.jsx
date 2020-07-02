import React, { useState } from 'react';

// import { Container } from './styles';

function Input() {
    const [value, setValue] = useState('')

    return (
        <input
            value={value}
            onChange={e => setValue(e.target.value)}
        />
    )
}

export default Input;