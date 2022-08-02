import React,{useState,useEffect} from 'react'
import Axios from "axios";
import "./conversation.css";



export default function Contacts({contacts,currentUser,changeChat}){
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);
    const [roomsname, setRoomsname] = useState([]);
    const [roomsid, setRoomsid] = useState([]);
    const [messages, setMessages] = useState([]);

    // useEffect(() => {
    //    if(currentUser){
    //     setCurrentUserName(currentUser.username);
    //     setCurrentUserImage(currentUser.avatarImage);
    //    }
    //   }, [currentUser]);

    //   const changeCurrentChat = (index, contact) => {
    //     setCurrentSelected(index);
    //     changeChat(contact);
    //   };

    const getMessagesonVisitorsclick = async (
        roomId,
        client_id,
        agent_id,
        roomName
      ) => {
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
                currentUser.access_token,
            },
          }
        );
        console.log("hii")
        console.log(res.data.messages);
        console.log("hii")
        setRoomsname(roomName);
        setRoomsid(roomId);
        setMessages(res.data.messages);
      };

  return (
    <>
    
      
          { contacts && contacts.map(({_id, roomName, avatar,roomId, client_id, agent_id}) => {
            return (
              <tr
                key={_id.$oid}
                // className={`contact ${
                //   index === currentSelected ? "selected" : ""
                // }`}
                onClick={() => getMessagesonVisitorsclick(roomId,client_id.$oid,agent_id,roomName)}
              >
                 <td>
                <img src={avatar} alt="whatsapp User" />
              </td>
              <td id="whtasappusername">
                {roomName}
              </td>
              </tr>
            );
          })}
        
        {/* <div className="current-user">
          <div className="avatar">
            <img
              src={`${currentUserImage}`}
              alt="avatar"
            />
          </div>
          <div className="username">
            <h2>{currentUserName}</h2>
          </div>
        </div> */}
      
   
  </>
  )
}




