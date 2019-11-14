import React, {
    useState
} from "react";

const MemberForm = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    const handleChanges = event => {
        setMember({
            ...member,
            [event.target.name]: event.target.value,
            [event.target.email]: event.target.value,
            [event.target.role]: event.target.value
        });
    }

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({
            name: "",
            email: "",
            role: ""
        });
    };

    return ( <
        form onSubmit = {
            submitForm
        } >
        <
        label htmlFor = "name" > Name < /label> <
        input id = "name"
        type = "text"
        name = "name"
        onChange = {
            handleChanges
        }
        value = {
            member.name
        }
        /> <
        label htmlFor = "email" > Email < /label> <
        input id = "email"
        type = "email"
        name = "email"
        value = {
            member.email
        }
        onChange = {
            handleChanges
        }
        /> <
        label htmlFor = "role" > Role < /label> <
        select id = "role"
        name = "role"
        value = {
            member.role
        }
        onChange = {
            handleChanges
        } >
        <
        option value = "Leader" > < /option> <
        option value = "Leader" > Leader < /option> <
        option value = "Lead Dancer" > Lead Dancer < /option> <
        option value = "Lead Vocalist" > Lead Vocalist < /option> <
        option value = "Maknae" > Maknae < /option> <
        option value = "Rapper" > Rapper < /option>           <
        option value = "Visual" > Visual < /option> <
        /select> <
        button type = "submit" > Submit < /button>

        <
        /form>
    )
} //ends function MemberForm

export default MemberForm;