import React, { Component } from "react";
import "./conversation.css";
import Axios from "axios";
import { useState, useEffect, useRef } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import ClipLoader from "react-spinners/ClipLoader";
import SendIcon from "@mui/icons-material/Send";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Picker from 'emoji-picker-react';
import { IoMdSend } from "react-icons/io"
import { BsEmojiSmileFill } from "react-icons/bs"
import { useHistory } from "react-router-dom";
// import {io} from "socket.io-client"
// import Contacts from "./Contacts";
// import InfiniteScroll from "react-infinite-scroll-component";

export default function Conversationchat() {
  const socket=useRef();
  const [loading, setLoading] = useState(false);
  const [showEmojiPicker, setshowEmojiPicker] = useState(false);
  const [msg,setmsg]=useState("")

  // const [visitors, setVisitors] = useState([]);
  const[contacts,setContacts]=useState([])
  const[currentUser,setCurrentUser]=useState(undefined)
  const[currentChat,setCurrentChat]=useState(undefined)
  const[currentSelected,setCurrentSelected]=useState(undefined)
  const[arrivalMessage,setArrivalMessage]=useState(null)

  const [messages, setMessages] = useState([]);
  const [roomsname, setRoomsname] = useState([]);
  const [roomsid, setRoomsid] = useState([]);
  const[isLoaded,setisLoaded]=useState(false)


  //*****handling emoji click with these codes*****//
  const handleEmojiPickerHideShow = () => {
    setshowEmojiPicker(!showEmojiPicker);
  };

const handleEmojiClick=(event,emoji)=>{
 let message=msg;
 message += emoji.emoji
 setmsg(message)

  }

  // const scrollRef=useRef();
  let intervalId = useRef(null);

  //*****Contactlist get with this code******//
  const getContacts = async () => {
    if(currentUser){
    const result = await Axios.get(
      `${process.env.REACT_APP_API_URL}api/v1/visitors/list/${
        currentUser.userinfo._id.$oid
      }/1`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user_info")).access_token,
        },
      }
    );
    setContacts(result.data.visitors);
    }
   
  };

  useEffect( () =>{   
        setCurrentUser(JSON.parse(localStorage.getItem("user_info")))
        setisLoaded(true)
  }, []);

  useEffect( () =>{
    getContacts()
  }, [currentUser])
 


  const getMessagesonVisitorsclick = async (
    roomId,
    client_id,
    agent_id,
    roomName
  ) => {
    // if(currentChat){
    localStorage.setItem("roomId", roomId);
    localStorage.setItem("clientId", client_id);
    localStorage.setItem("agentId", agent_id);
    localStorage.setItem("roomName", roomName);
    const res = await Axios.get(
      `${process.env.REACT_APP_API_URL}api/v1/messages/${roomId}/${client_id}/1`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user_info")).access_token,
        },
      }
    );
    setCurrentChat(10)
    setRoomsname(roomName);
    setRoomsid(roomId);
    setMessages(res.data.messages);
    
    // }
  };


  let textInput = React.createRef();
  function sendMessage() {
    let data = {
      content: textInput.current.value,
      room_id: localStorage.getItem("roomId"),
      client_id: localStorage.getItem("clientId"),
      agent_id: localStorage.getItem("agentId"),
    };
    setMessages([
      ...messages,
      {
        content: textInput.current.value,
        room_id: data.room_id,
        sender_id: data.agent_id,
      },
    ]);
    Axios.post(process.env.REACT_APP_API_URL + "api/v1/sendmsg_to_user", data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer " +
          currentUser.access_token,
      },
    });
    textInput.current.value = " ";
    setmsg(" ")

    //Socket for sendmessages
    // socket.current.emit("send-msg",{
    //   to:currentChat._id,
    //   from:currentUser.userinfo._id.$oid,
    //   message:msg
    // });
    // const msgs=[...messages];
    // msg.push({fromSelf:true, message:msg});
    // setMessages(msgs)
  
    // window.scroll({
    //   bottom: document.body, 
    //   left: 0,
    //   behavior: "smooth",
    // });
  }


//   useEffect((currentUser)=>{
//     if(currentUser){
//       socket.current=io(process.env.REACT_APP_API_URL)
//       socket.current.emit("add-user",currentUser.userinfo._id.$oid)
//     }
//       },[currentUser])


//   useEffect(()=>{
//     if(socket.current){
//       socket.current.on("msg-recieve",(msg)=>{
//         setArrivalMessage({fromSelf:false, message:msg})
//       })
//     }
//   },[])


//   useEffect(()=>{
//      arrivalMessage && setMessages((prev)=>[...prev,arrivalMessage])
//   },[arrivalMessage])


//  useEffect(()=>{
//   scrollRef.current?.scrollIntoView({behavior:"smooth"}) 
//  },[messages])



  const endChat = (data) => {
    console.log(intervalId.current, "IntervalId");
    clearInterval(intervalId.current);
    let agent_id = localStorage.getItem("agentId");
    let room_id = localStorage.getItem("roomId");

    Axios.put(
      `${process.env.REACT_APP_API_URL}api/v1/agent/available/${agent_id}/${room_id}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user_info")).access_token,
        },
      }
    )
      .then((response) =>
        toast.success("Chat has been ended!", {
          position: toast.POSITION.TOP_CENTER,
        })
      )
      .catch((error) => console.log(error));

      setCurrentChat(undefined)
  };

  const onKeyPress = (e) => {
    if (e.which === 13) {
      sendMessage();
    }
  };

  const visitorsBody = () => {
    return contacts && contacts.map(( {_id,roomName,avatar,roomId,client_id,agent_id,contact,index}) => {
        return (
          <>
            <tr key={_id.$oid} 
            id="whtasappuser"
            onClick={()=>{getMessagesonVisitorsclick(roomId,client_id.$oid,agent_id,roomName,index,contact)}} >
             
                <td ><img src={avatar} alt="whatsapp User" /></td> 
                <td  id="whtasappusername" >{roomName}</td> 
            </tr>
            </>
        )
    })
   
  }


  const renderMessageBody = () => {
    let index = 0;

    return (
      messages &&
      messages.map(({ content, sender_id, room_id }) => {
        if (sender_id != "" && sender_id == room_id) {
          return (
            <>
            <tr key={++index}>
              <td>
                <p className="bg-primary p-2 mt-2 mr-3 shadow-sm text-white float-left rounded customer">
                  {content}
                </p>
              </td>
            </tr>
            </>
          );
        } else if (sender_id == "" || sender_id != room_id) {
          return (
            <>
            <tr key={++index}>
              <td>
                <p className="bg-light p-2 mt-2 mr-1 shadow-sm text-black float-right rounded agent">
                  {content}
                </p>
              </td>
            </tr>
            </>
          );
        }
      })
    );
  };

  return (
    <>
      <div className="col-md-12 grid-margin stretch-card">
        <div className="card-body">
          <div className="container">
            <div className="row chat-top">
              <div className="col-sm-3 border-right border-secondary">
              </div>

              <div className="col-sm-9">
                <div className="row" id="endposition">
                  <span
                    style={{
                     
                      borderRadius: "5px",
                      fontFamily: "cursive",
                    }}
                    className="ml-2"
                  >
                    {roomsname}
                  </span>
                  <br />
                  <span
                    style={{
                     
                      borderRadius: "5px",
                      fontFamily: "cursive",
                    }}
                    className="ml-2"
                  >
                    {roomsid}
                  </span>
                 
                  <button
                    className="button-3"
                    role="button"
                    id="endbtnposition"
                    onClick={() => endChat()}
                  >
                    End chat
                  </button>
               
                </div>
                <ToastContainer autoClose={1500} />
              </div>
            </div>
            <div className="row">
             
                <div className="col-sm-3 contacts">
                  <div className="contact-table-scroll">
                    <table className="table table-hover">
                      <tbody>
                        {visitorsBody()}
                        {/* <Contacts contacts={contacts} currentUser={currentUser} roomsname={roomsname} changeChat={handleChatChange} /> */}
                        {/* <Contacts contacts={contacts} currentUser={currentUser} roomsname={roomsname} getMessagesonVisitorsclick={getMessagesonVisitorsclick} /> */}
                      </tbody>
                    </table>
                  </div>
                </div>
         
                 {isLoaded && currentChat === undefined ? (
                  <>
                   <div className="col-sm-9 message-areawelcomepage">
                   <div className="message-table-scrollwelcomepage">
                     <table className="table">
                       <tbody className="welcomemsg">
              
               <h1>Welcome <span style={{color:"blue"}}>{JSON.stringify(currentUser.userinfo.name)}</span></h1>
               <h3>Please start your chat</h3>
              
               </tbody>
                  </table>
                </div>
                </div>
                </>
                
          ) : ( 
              <div className="col-sm-9 message-area">
                <div className="message-table-scroll">
                  <table className="table">
                    <tbody>
                      {renderMessageBody()}

                    </tbody>
                  </table>
                </div>

                <div className="row message-box " id="position">
                  <input
                    type="text"
                    className="msginputbox"
                    placeholder="Write message..."
                    name="content"
                    autoComplete="off"
                    ref={textInput}
                    onKeyPress={onKeyPress}

                    value={msg}
                    onChange={(e)=>setmsg(e.target.value)}
                  />
                  <div className='emoji'>
                  <BsEmojiSmileFill  onClick={handleEmojiPickerHideShow}/>
                  {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick}/>}
                    </div>

                  <button
                    className="button-3"
                    role="button"
                    id="btnposition"
                    onClick={() => sendMessage()}
                  >
                    <SendIcon />  
                  </button>
    
                </div>
              </div>
             )}  
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

