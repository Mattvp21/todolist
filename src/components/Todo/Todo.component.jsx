import React from 'react';
import './Todo.styles.scss'
import {ReactComponent as Checkmark} from '../../images/icon-check.svg'


const Todo = ({todo}) => {
    return (
    <div className='item'>
        <li >
            <div className='check'>
                <Checkmark />
            </div>
            
            {todo.task}
           
        </li>

    </div>
        
    )
}

export default Todo