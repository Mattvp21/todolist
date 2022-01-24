import React from 'react';
import './Todo.styles.scss'
import {ReactComponent as Checkmark} from '../../images/icon-check.svg'


const Todo = (props) => {
    return (

        <div className='item'>
            <div className='check'>
                <Checkmark />
            </div>
            
            
            <p className='item__todo'>{props.item}</p>
        </div>
    )
}

export default Todo