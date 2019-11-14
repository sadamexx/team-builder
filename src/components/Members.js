import React from "react";

const Members = props => {
    return (
        <div className="team-list">
            {props.team.map(member => (
                <div className="member" key={member.id}>
                    <h2>Team Member</h2>
                    <p>{member.name}</p>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>    
            ))}
        </div>
    );
};

export default Members;