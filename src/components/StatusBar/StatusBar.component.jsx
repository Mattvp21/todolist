import React from 'react'
import './StatusBar.styles.scss'

const StatusBar = ({check, todosLength,handleAllButton, handleActiveButton, handleCompleteButton, clearCompleted}) => {
  
    const handleClear = () => {
        clearCompleted()
    }    
   
    return (
        <div className='bar'
        style={{backgroundColor: check.isChecked ? 'hsl(236, 9%, 61%)' : 'hsl(235, 24%, 19%)',
            color: check.isChecked ? 'hsl(235, 19%, 35%)' : 'hsl(233, 11%, 52%)',
            transition: 'ease-in .3s'}}>
            <p className='bar__count'>{todosLength} items left</p>
                
                <button onClick={handleAllButton} style={{transform: 'translateX(.5rem)'}} className='bar__button'>All</button>
                <button onClick={handleActiveButton}  className='bar__button'>Active</button>
                <button onClick={handleCompleteButton} style={{transform: 'translateX(-.5rem)'}} className='bar__button'>Completed</button>
                <button onClick={handleClear} className='bar__button'>Clear Completed</button>            
            
        </div>
    )
}

export default StatusBar