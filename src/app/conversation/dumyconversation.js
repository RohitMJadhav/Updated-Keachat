import React, { Component } from "react";
import "./conversation.css";
import Axios from "axios";
import  { useState,useEffect,useRef} from 'react'
import BeatLoader from "react-spinners/BeatLoader";
import ClipLoader from "react-spinners/ClipLoader";
import SendIcon from '@mui/icons-material/Send';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


export default function Conversation() {
 
  const [visitors, setVisitors] = useState([])
  const [messages, setMessages] = useState([])
  const [roomsname,setRoomsname]=useState([])
  const [roomsid,setRoomsid]=useState([])
  const [loading,setLoading]=useState(false)

 useEffect(() => {
  setLoading(true)
  getVisitors()
    // setInterval(()=>{ getVisitors()},5000) 
    // return ()=>{clearInterval( getVisitors())}
}, [])

let intervalId = useRef(null);
// useEffect(() => {
//   intervalId.current= setInterval(()=>{getMessagesonVisitorsclick(localStorage.getItem("roomId"),localStorage.getItem("clientId"),localStorage.getItem("roomName"))},5000)
//   console.log(intervalId.current)  
//   return ()=>{clearInterval(intervalId.current)}
// }, [intervalId.current])

const getVisitors = async ( ) => {
    const result = await Axios.get(`${process.env.REACT_APP_API_URL}api/v1/visitors/list/${JSON.parse(localStorage.getItem("user_info")).userinfo._id.$oid}/1`,{ headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Authorization":"Bearer "+JSON.parse(localStorage.getItem("user_info")).access_token
  }})
  setVisitors(result.data.visitors)
  setLoading(false)   
}

//visitorsBody map the visitors for chatting

const visitorsBody = () => {
  return visitors && visitors.map(( {_id,roomName,avatar,roomId,client_id,agent_id}) => {
      return (
        <>
          <tr key={_id.$oid} id="whtasappuser"onClick={()=>{getMessagesonVisitorsclick(roomId,client_id.$oid,agent_id,roomName)}} >
           
              <td ><img src={avatar} alt="whatsapp User" /></td> 
              <td  id="whtasappusername"style={{}}  >{roomName}</td> 
          </tr>
          </>
      )
  })
 
}


const getMessagesonVisitorsclick= async (roomId,client_id,agent_id,roomName )=> {
   localStorage.setItem("roomId",roomId)
   localStorage.setItem("clientId",client_id)
   localStorage.setItem("agentId",agent_id)
   localStorage.setItem("roomName",roomName)
  const res=await Axios.get(`${process.env.REACT_APP_API_URL}api/v1/messages/${roomId}/${client_id}/1`,
  { headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Authorization":"Bearer "+JSON.parse(localStorage.getItem("user_info")).access_token
  }})
 
  console.log(res.data.messages)
  setRoomsname(roomName)
  setRoomsid(roomId)
  setLoading(false)
  setMessages(res.data.messages)
  
 
}

 // const fetchgetMessagesonVisitorsclick = async (
  //   roomId,
  //   roomName
  // ) => {
  //   let room_id = localStorage.getItem("roomId");
  //   let client_id =localStorage.getItem("clientId");

  //   const res = await Axios.get(
  //     `${process.env.REACT_APP_API_URL}api/v1/messages/${room_id}/${client_id}/${page}`,
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         Authorization:
  //           "Bearer " +
  //           JSON.parse(localStorage.getItem("user_info")).access_token,
  //       },
  //     }
  //   );

  //   console.log(res.data.messages);
  //   setRoomsname(roomName);
  //   setRoomsid(roomId);
  //   setLoading(false);
  //   return res.data.messages
  // };

  // const fetchData=async()=>{
  //   const commentfromServer=await fetchgetMessagesonVisitorsclick()
  //   setMessages([...commentfromServer,...messages])
  //   if(commentfromServer.length===0||commentfromServer.length<10){
  //   setnoMore(false)
  //   }
  //   setPage(page + 1)
  // }

const renderMessageBody = () => {
  let index=0;
  return messages && messages.map(( {content,sender_id,room_id}) => {
          if(sender_id!="" && sender_id ==room_id){
           return (<tr key={++index}>
                            <td>
                              <p className="bg-primary p-2 mt-2 mr-3 shadow-sm text-white float-left rounded customer">
                               {content}
                              </p>
                              
                            </td>
                          </tr>
                        )
          }else if(sender_id=="" || sender_id !=room_id){
            return (<tr key={++index}>
              <td>
                 <p className="bg-light p-2 mt-2 mr-1 shadow-sm text-black float-right rounded agent">
                 {content}
                </p> 
              </td>
            </tr>
          )
          }

  })
}


let textInput=React.createRef();
// let textInput=useRef();
function sendMessage(){
 
  let data={
    content:textInput.current.value,
    room_id:localStorage.getItem("roomId"),
    client_id:localStorage.getItem("clientId"),
    agent_id:localStorage.getItem("agentId")
  }
  setMessages([...messages,{content:textInput.current.value,room_id:data.room_id,sender_id:data.agent_id}])
  Axios.post(process.env.REACT_APP_API_URL+"api/v1/sendmsg_to_user", data,{ headers:{
          "Content-Type":"application/json",
          "Accept":"application/json",
          "Authorization":"Bearer "+JSON.parse(localStorage.getItem("user_info")).access_token
        }},
         )
         textInput.current.value=" "
         window.scroll({
          bottom: document.body, // or document.scrollingElement || document.body
          left: 0,
          behavior: 'smooth'
        });
  
}


const endChat = (data) => {
  console.log(intervalId.current,"IntervalId")
  clearInterval(intervalId.current)
  // clearInterval(intervalRef.current)
  let agent_id=localStorage.getItem("agentId")
  let room_id=localStorage.getItem("roomId")

  Axios.put(`${process.env.REACT_APP_API_URL}api/v1/agent/available/${agent_id}/${room_id}`,data,{ headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Authorization":"Bearer "+JSON.parse(localStorage.getItem("user_info")).access_token
  }} )
  .then(response=>
 toast.success("Chat has been ended!", {
   position: toast.POSITION.TOP_CENTER
 }))
 .catch(error => console.log(error));   
};

const onKeyPress = (e) => {
  if(e.which === 13) {
    sendMessage();
  }
}

    return (
      <>
        {/* <div style={{backgroundColor:"gray"}} className="col-md-12 grid-margin stretch-card"> */}
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card-body">
              <div className="container">
                <div className="row chat-top">
                  <div className="col-sm-3 border-right border-secondary">
                    <img
                  className="img-xs rounded-circle"
                  src={require("../../assets/images/faces-clipart/pic-1.png")}
                  alt="Whatsapp User"
                />
                  </div>
 
                  <div className="col-sm-9">
                  <div className="row" id="endposition">
                  {/* <div className="col-sm-3"> */}
                  <span style={{backgroundColor:"yellow",borderRadius:"5px",fontFamily:"cursive"}}  className="ml-2">{roomsname}</span><br/>
                  <span style={{backgroundColor:"yellow",borderRadius:"5px",fontFamily:"cursive"}} className="ml-2">{roomsid}</span>
                  {/* </div> */}
                  {/* <div className="col-sm-9 " id="endchatbutton" > */}
                   <button className="button-3" role="button" id="endbtnposition" onClick={()=>endChat()}>End chat</button>
                   {/* </div> */}
                 </div>
                 <ToastContainer autoClose={1500} />
                  </div>

                </div>
                <div className="row">
                  {loading? <div style={{paddingLeft:"100px",paddingTop:"200px"}}>
            <ClipLoader color={"#7ED321"} loading={loading} size={35}  />
            </div>:<div className="col-sm-3 contacts">
                    <div className="contact-table-scroll">
                      <table className="table table-hover">
                        <tbody>
                          
                         {visitorsBody()}
                       
                        </tbody>
                      </table>
                    </div>
                  </div>
}
                  
          {loading? <div style={{paddingLeft:"500px",paddingTop:"200px"}}>
            <BeatLoader color={"#7ED321"} loading={loading} size={35} margin={5} />
            </div>:
                  <div className="col-sm-9 message-area">
                    <div className="message-table-scroll">
                      <table className="table">
                        <tbody>
                          
                            { renderMessageBody()}

                             {/* <InfiniteScroll
                          dataLength={messages.length}
                          loader={<h4>Loading...</h4>}
                          // loader={<ClipLoader color={"#7ED321"} loading={loading} size={35} />}
                          next={fetchData}
                          hasMore={noMore}
                         
                          endMessage={
                            <p style={{ textAlign: "center" }}>
                              <b>Yay! You have seen it all</b>
                             </p>
                          }
                        >
                       {renderMessageBody()}
                        </InfiniteScroll> */}
                                            
                        </tbody>               
                      </table>
                    </div>
                    
                    <div  className="row message-box " id="position" >
                          <input
                            type="text"
                            className="msginputbox"
                            placeholder="Write message..."
                            name="content"
                            autoComplete="off"
                            ref={textInput}
                            onKeyPress={onKeyPress}  />
                         
                          {/* <div className="col-sm-2 "> */}
                          <button className="button-3" role="button" id="btnposition" onClick={()=>sendMessage()}> <SendIcon /></button>
                      {/* </div> */}
                          
                    </div>

                  </div>}
                  
                </div>
              </div>
              
            </div>
         </div>
        {/* </div> */}
      </>
    );
  }




