export const setMessageToStorage = (messages)=>{
    localStorage.setItem("message",JSON.stringify(messages));
}
export const getMessageFromStorage = ()=> {
      if(localStorage.getItem("message")){
        return JSON.parse(localStorage.getItem("message"));
        
      }
}
