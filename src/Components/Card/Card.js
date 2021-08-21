import React, { useState } from 'react'
import close from '../img/close.png'
import { useDispatch } from 'react-redux'
import { deleteTaskTodo } from '../../redux/actions/deleteTaskTodo'
import { deleteTaskDoing } from '../../redux/actions/deleteTaskDoing'
import { deleteTaskDone } from '../../redux/actions/deleteTaskDone'
function Card({ title, text, id, name }) {

    const [showPopUp, setShowPopUp] = useState(false)
    const [editTitleForTask, setEditTitleForTask] = useState(false)
    const [titleValue, setTitleValue] = useState(title)
    const [textareaValue, setTextareaValue] = useState(text)
    const dispatch = useDispatch()

    const showEditPopUp = (e) => {

        if (e.target.className === 'card') setShowPopUp(true)

    }

    const closeEditPopUp = () => {

        setShowPopUp(false)
        setEditTitleForTask(false)
        setTitleValue(title)
        setTextareaValue(text)
    }

    const editTitle = () => {

        setEditTitleForTask(true)
    }

    const onChange = (e) => {

        if (e.target.nodeName === 'INPUT') setTitleValue(e.target.value)

        if (e.target.nodeName === 'TEXTAREA') setTextareaValue(e.target.value)

    }

    const deleteCard = (id) => {


        if (name === 'To do') dispatch(deleteTaskTodo(id))

        if (name === 'Doing') dispatch(deleteTaskDoing(id))

        if (name === 'Done') dispatch(deleteTaskDone(id))
    }

    return (
        <>
            {showPopUp && <>

                <div className='popup_wrapper'>
                    <div className='pop_up'>
                        <div className='pop_up_header'>
                            {editTitleForTask ?
                                <input
                                    value={titleValue}
                                    onChange={onChange}
                                    type='text'
                                    placeholder='type title'
                                />
                                : <h2 onClick={editTitle}>{title}</h2>}

                            <div onClick={closeEditPopUp} className='pop_up_close'>
                                <img src={close} alt="close icon" />
                            </div>
                        </div>
                        <textarea
                            value={textareaValue}
                            onChange={onChange}
                            type='text' placeholder='type task' />
                        <button>Save</button>
                    </div>
                </div>

            </>}
            <div onClick={showEditPopUp} className='card'>
                {text}
                <button onClick={() => deleteCard(id)} className='delete_card'></button>
            </div>
        </>
    )
}

export default Card
