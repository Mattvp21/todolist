import React, {useState} from 'react'
import './StatusBar.styles.scss'

const StatusBar = ({todo, check, isChecked}) => {
   
    return (
        <div className='bar'
        style={{backgroundColor: check.isChecked ? 'hsl(236, 9%, 61%)' : 'hsl(235, 24%, 19%)',
            color: check.isChecked ? 'hsl(235, 19%, 35%)' : 'hsl(233, 11%, 52%)',
            transition: 'ease-in .3s'}}>
            <p className='bar__count'>0 items left</p>
                
                <button style={{transform: 'translateX(.5rem)'}} className='bar__button'>All</button>
                <button className='bar__button'>Active</button>
                <button style={{transform: 'translateX(-.5rem)'}} className='bar__button'>Completed</button>
                <button className='bar__button'>Clear Completed</button>
            
            
        </div>
    )
}

export default StatusBar