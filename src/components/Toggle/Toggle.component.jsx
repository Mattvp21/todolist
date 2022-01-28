import React from 'react';
import {ReactComponent as DarkToggleButton} from '../../images/icon-moon.svg'
import {ReactComponent as LightToggleButton} from '../../images/icon-sun.svg'
import './Toggle.component.scss'



const Toggle = ({isChecked, check}) => {

   
    return (      
            
        <div className='toggle-container'> 
            <h1 style={ {clear:'left'}}>TODO</h1>
            <input onChange={isChecked} className='checkbox' type='checkbox'/>
            <div>
            { check.isChecked ? <LightToggleButton style={{marginRight: 'auto', float:'right', transform: 'translateY(-3.5rem)'}}/>
            :<DarkToggleButton style={{marginRight: 'auto', float:'right', transform: 'translateY(-3.5rem)'}}/>
           }
            </div>            
            
        </div>       
        
    )
}

export default Toggle