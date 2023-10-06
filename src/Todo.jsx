import React from 'react'
import {AiOutlinePlus,AiFillDelete,AiFillEdit,AiFillCheckCircle} from 'react-icons/ai'
const Todo = () => {
  return (
    <>

      <div className="container">
        <div className="userInput">
          <input id='todo' type="text" placeholder='add item' />
          <div className='addListBtn'><AiOutlinePlus/></div>
          <div className='addListBtn'><AiFillDelete/></div>

        </div>
        <ul className='list'>

          
          <li>
            <div className='div1'>
              <AiFillCheckCircle className='check'/>
              <h3>zain</h3>
            </div>
            <div className='div2'>
              <button><AiFillEdit/></button>
              <button><AiFillDelete/></button>
            </div>
          </li>
         

        </ul>


      </div>
    </>
  )
}

export default Todo
