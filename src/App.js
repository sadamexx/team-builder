import React, {useState} from 'react';
import Members from "./components/Members";
import MemberForm from "./components/MemberForm";
import { Container, Row} from "reactstrap";

import './App.css';

function App() {
  const [team, setTeam] = useState([]);

  const addNewMember = member => {
    const newMember = {
      id: member.name,
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeam([...team, newMember]);
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Team Tracker!</h1>
      </header>
      <MemberForm addNewMember={addNewMember}/>
      <Container>
        <Row>
          <Members team={team}/>
        </Row>
      </Container>
     </div>
  );
}

export default App;
