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

    if (inputData.length > 0 && !toggle) {
      const createId = new Date().getTime().toString()
      const Data = { id: createId, task: inputData ,complete:false};

      setUserText([...userText, Data])
      setInputData('')
    }
    else if (inputData.length > 0 && toggle) {


      setUserText(userText.map((elem) => {
        if (elem.id === id) {
          return { ...elem, task: inputData }
        }
        return elem
      }))
      settoggle(false)
      setInputData('')
    }

    else {
      alert("enter value")
    }
    // setIsEdit(false)


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

    console.log(filter);

    // filter.complete=true
    // itemRef.current.classList.toggle('active')
  }

  const editItem = (elem, id) => {
    settoggle(true)
    setInputData(elem.task)
    setId(id)

  }
  return (
    <>
      <div className="container">
        <h1> <RiNewspaperFill />Todo List</h1>
        <div className="userInput">
          <input className={` ${toggle ? "lightgreen" : "whitebbackroung"}`}
          value={inputData} onChange={(e) => setInputData(e.target.value)} id='todo' type="text" placeholder='add item' />
          {
            toggle ?
              <div className={`addListBtn ${toggle ? "lightgreen" : null}`}  onClick={addList}>
                <AiFillEdit /></div> :
              <div className='addListBtn' onClick={addList} > <AiOutlinePlus /></div>
          }
          <div onClick={delAllList} className='addListBtn'><AiFillDelete /></div>
        </div>
        <ul className='list'>
          {
            userText.map((elem) => {
              return (
                <li key={elem.id}>
                  <div className='div1'>
                    <AiFillCheckCircle onClick={()=>complete(elem.id)} className='check' />
                    <h3 ref={itemRef}>{elem.task}</h3>
                  </div>
                  <div className='div2'>
                    <button onClick={() => editItem(elem, elem.id)}>
                      <AiFillEdit />
                    </button>
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
