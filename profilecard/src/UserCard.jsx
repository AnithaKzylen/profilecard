import React from 'react';
import "./userCard.css";

const Data = [
    {
        name: "Shri",
        city:  "Chennai",
        desc: "Front-end developer",
        skills: ["UI/UX","HTML","CSS","JS","ReactJS","Redux"],
        online: false,
        profile: "shri.jpg",
    },
    {
        name: "Karan",
        city: "Mumbai",
        desc: "Full-Stack developer",
        skills: ["UI/UX","HTML","CSS","JS","ReactJS","Redux","MongoDB","SQL"],
        online: true,
        profile: "karan.jpg",
    },
    {
        name: "Selena",
        city: "Noida",
        desc: "Back-End developer",
        skills: ["HTML","CSS","JS","DBMS","mongoDB","SQL","mySQL"],
        online: true,
        profile: "selena.jpg",
    },
];

function User(props) {
return(
    <div className="card-container">
        <span className={props.online ? "profile online":"profile offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
        <img src={props.profile} alt="profile pic of shri "className='profile-img' />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.desc}</p>
        <div className='buttons'>
            <button className='primary'>Message</button>
            <button className='primary outline'>Following</button>
        </div>
        <div className="skills">
        <h5>Skills</h5>
        <ul>
           {props.skills.map((skill, index)=>(
            <li key={index}>{skill}</li>
           ))}
        </ul>
        </div>

    </div>
)
}

export const UserCard = () => {
  return (
    // <User name="Shri" city="Chennai" desc ="Front-end developer" skills={["UI/UX","HTML","CSS","JS","ReactJS","Redux"]} online={false} profile="shri.jpg"/>
<>
    {Data.map((user,index) => (
        <User key={index} 
        name={user.name}
        city={user.city}
        desc={user.desc}
        skills={user.skills}
        online={user.online}
        profile={user.profile} />
    ))}
    </>
  );
};
