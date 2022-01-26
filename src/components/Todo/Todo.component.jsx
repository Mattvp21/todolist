import React from 'react';
import './Todo.styles.scss'
import {ReactComponent as Checkmark} from '../../images/icon-check.svg'


const Todo = ({todo, check, isChecked, setTodos}) => {
    return (
    <div className='item'
        style={{backgroundColor: check.isChecked ? 'hsl(236, 9%, 61%)' : 'hsl(235, 24%, 19%)',
            color: check.isChecked ? 'hsl(235, 19%, 35%)' : 'hsl(233, 11%, 52%)',
            transition: 'ease-in .3s'}}>
        <li >
            <div className='check'>
                <Checkmark  />
            </div>
            
            {todo.task}
           
        </li>

    </div>
        
    )
}

export default Todo