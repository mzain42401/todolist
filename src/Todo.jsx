import React, { useRef, useState } from 'react'
import {AiOutlinePlus,AiFillDelete,AiFillEdit,AiFillCheckCircle} from 'react-icons/ai'
import {RiNewspaperFill} from "react-icons/ri"
const Todo = () => {

  const [userText,setUserText]=useState([])
  const [isEdit,setIsEdit]=useState(false)
  const [editData,setEditData]=useState()
  const userRef=useRef()
  const itemRef=useRef()
  const editRef=useRef()


  const addList=()=>{
const text=userRef.current.value;
setUserText([...userText,text])
userRef.current.value=''
setIsEdit(false)

  }

  const delAllList=()=>{

    setUserText([])
 setIsEdit(false)

  }

  const delItem=(elem)=>{
const data=userText.filter((element)=>{
  return(
elem!==element
  )
})
setUserText(data)
  }

const complete=(elem)=>{
  itemRef.current.classList.toggle('active')
}

const editItem=(elem,index)=>{
setIsEdit(true)
const editValue=prompt('enter your value')
setEditData(editValue)
userText.splice(index,1,editData)
 setUserText(userText)
}


  return (
    <>

      <div className="container">
        <h1> <RiNewspaperFill/>Todo List</h1>
        <div className="userInput">
          <input ref={userRef} id='todo' type="text" placeholder='add item' />
          <div onClick={addList}  className='addListBtn'><AiOutlinePlus/></div>
          <div onClick={delAllList} className='addListBtn'><AiFillDelete/></div>

        </div>
        <ul className='list'>

{
  userText.map((elem,index)=>{
return(
<li>
            <div className='div1'>
              <AiFillCheckCircle onClick={complete} className='check'/>
                <h3 ref={itemRef}>{elem}</h3>
              
            </div>
            <div className='div2'>
            <button onClick={()=>editItem(elem,index)}>
                        <AiFillEdit/>
              </button>
              
              
              
              <button onClick={()=>delItem(elem)}><AiFillDelete /></button>
            </div>
          </li>
)
  })
}

          
         
         

        </ul>


      </div>
    </>
  )
}

export default Todo
