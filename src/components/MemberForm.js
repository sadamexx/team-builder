import React, {useState} from "react";

const MemberForm = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: "",
        power: ""
    });

    const handleChanges = event => {
        setMember({
            ...member,
            [event.target.name]: event.target.value,
            [event.target.email]: event.target.value,
            [event.target.role]: event.target.value,
            [event.target.power]: event.target.value
        });
    }

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({
            name: "",
            email: "",
            role: "",
            power: ""
        });
    };

    return ( 
        <form onSubmit = {submitForm} >
        <label htmlFor = "name" className="name">Name</label>
         <input 
            id = "name"
            type = "text"
            name = "name"
            onChange = {handleChanges}
            value = {member.name}/>
        <label htmlFor = "email" className= "email">Email</label>
        <input id = "email"
            type = "email"
            name = "email"
            value = {member.email}
            onChange = {handleChanges}/> 
        <label htmlFor = "role" className="role">Role</label>
        <select id = "role" name = "role" value = {member.role} onChange = {handleChanges}>
            <option value = "empty"> </option> 
            <option value = "Leader"> Leader </option> 
            <option value = "Lead Dancer"> Lead Dancer </option> 
            <option value = "Lead Vocalist"> Lead Vocalist </option>
            <option value = "Maknae"> Maknae </option> 
            <option value = "Rapper" > Rapper </option>           
            <option value = "Visual" > Visual </option> 
        </select> 
        <label htmlFor = "power" className="power">Super-Power</label>
        <select id = "power" name = "power" value = {member.power} onChange = {handleChanges}>
            <option value = "empty"> </option>
            <option value = "Earth"> Earth </option>  
            <option value = "Fire"> Fire </option> 
            <option value = "Frost" > Frost </option> 
            <option value = "Light"> Light </option>
            <option value = "Lightning" > Lightning </option>  
            <option value = "Teleportation" > Teleportation </option>           
            <option value = "Water" > Water </option>
            <option value = "Wind"> Wind </option>  
        </select> 
        <button className="submit" type="submit">Submit</button>

        </form>
    )
} //ends function MemberForm

export default MemberForm;