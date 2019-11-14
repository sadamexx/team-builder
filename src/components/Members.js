import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, Col} from 'reactstrap';

const Members = props => {
    return (
        <Col xs="12" s="6" md="4">
            {props.team.map(member => (
                <Card className="card-main" key={member.id}>
                    <CardImg
                        top
                        width="100%"
                        src="https://img.kpopmap.com/2019/01/check-out-5-beautiful-song-covers-by-exo-02.jpg"
                        alt="Exo Team Pic"
                    />
                    <CardBody className="card-container">
                        <CardTitle className="member-title">Team Member</CardTitle>
                        <CardText>Name: {member.name}</CardText>
                        <CardText>Email: {member.email}</CardText>
                        <CardText>Role: {member.role}</CardText>
                    </CardBody>
                </Card>    
            ))}
        </Col>
    );
};

export default Members;