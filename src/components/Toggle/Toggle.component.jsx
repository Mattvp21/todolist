import React from 'react';
import {ReactComponent as ToggleButton} from '../../images/icon-moon.svg'


const Toggle = () => {
    return (
       
            
        <div className='toggle-container'> 
            <h1 style={ {clear:'left'}}>TODO</h1>
        <ToggleButton style={{marginRight: 'auto', float:'right', transform: 'translateY(-3.5rem)'}}/>
        </div>

       
        
    )
}

export default Toggle