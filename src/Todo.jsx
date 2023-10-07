import React, { useRef, useState } from 'react'
import { AiOutlinePlus, AiFillDelete, AiFillEdit, AiFillCheckCircle } from 'react-icons/ai'
import { RiNewspaperFill } from "react-icons/ri"
const Todo = () => {

  const [userText, setUserText] = useState([])
  const [inputData,setInputData]=useState()
  const [toggle, settoggle] = useState(false)
  const [id, setId] = useState(null)
  const itemRef = useRef()


  const addList = () => {

    if (inputData.length > 0 ) {
      const createId = new Date().getTime().toString()
      const Data = { id: createId, task: inputData ,complete:false};

      setUserText([...userText, Data])
      setInputData('')
    }
    
     
    

    else {
      alert("enter value")
    }
   


  }

  const delAllList = () => {

    setUserText([])

  }

  const delItem = (elem) => {
    const data = userText.filter((element) => {
      return (
        elem !== element
      )
    })
    setUserText(data)
  }

  const complete = (id) => {
    const filter=userText.filter((elem)=>{

  return elem.id===id

    })
    filter[0].complete=true

    setUserText([...userText])
  }

  
  return (
    <>
      <div className="container">
        <h1> <RiNewspaperFill />Todo List</h1>
        <div className="userInput">
          <input 
          value={inputData} onChange={(e) => setInputData(e.target.value)} id='todo' type="text" placeholder='add item' />
          
          <div className='addListBtn' onClick={addList} > <AiOutlinePlus /></div> 
          <div onClick={delAllList} className='addListBtn'><AiFillDelete /></div>
        </div>
        <ul className='list'>
          {
            userText.map((elem,index) => {
              return (
                <li key={elem.id}>
                  <div className='div1'>
                    <AiFillCheckCircle onClick={()=>complete(elem.id)} className='check'/>
                    <h3 className={`${elem.complete?'linethrough':null}`} ref={itemRef}>{elem.task}</h3>
                  </div>
                  <div className='div2'>
                    
                    <button onClick={() => delItem(elem)}><AiFillDelete /></button>
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
