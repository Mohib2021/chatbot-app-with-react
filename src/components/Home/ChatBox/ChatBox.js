import React from 'react'
import style from "./ChatBox.module.css"
const ChatBox = () => {
  return (
   <>
   <div className={style.chatBoxContainer}>
    <div className="row justify-content-center align-items-center">
        <div md={8} sm={12} className={style.chatBox}>
            <div>
                <h2 className='text-center'>Chat application</h2>
                <div className={style.chatShowBox}>

                </div>
            </div>
           <form action="">
               <div className='d-flex'>
               <input type="text" className='form-control' />
               <button className='btn btn-success' type="submit">Send</button>
               </div>
           </form>
        </div>
    </div>
   </div>
   </>
  )
}

export default ChatBox