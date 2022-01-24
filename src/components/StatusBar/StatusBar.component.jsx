import React from 'react'
import './StatusBar.styles.scss'

const StatusBar = () => {
    return (
        <div className='bar'>
            <p className='bar__count'>0 items left</p>
                
                <button style={{marginLeft:'2rem'}} className='bar__button'>All</button>
                <button className='bar__button'>Active</button>
                <button style={{marginRight:'2rem'}} className='bar__button'>Completed</button>
                <button className='bar__button'>Clear Completed</button>
            
            
        </div>
    )
}

export default StatusBar