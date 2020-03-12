import React, { useState } from 'react';


const Toggle = () => {
    const [isToggle, isSetToggle ] = useState(false);

    const handleClick = () => {
        isSetToggle(!isToggle)
    }

    return (
        <button onClick={handleClick}>
            {isToggle ? 'ON' : 'OFF'}
        </button>
    );
}

export default Toggle;