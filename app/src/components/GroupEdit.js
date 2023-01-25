import React, {useEffect, useState} from 'react';
import {Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';
import AppNavbar from './AppNavbar';
import {Link, useNavigate, useParams} from 'react-router-dom';

const GroupEdit = () => {

    const iniialFormState={
        name:'',
        address:'',
        city:'',
        stateOrProvince:'',
        country:'',
        postalCode:'',
    }

    const [group, setGroup] = useState(iniialFormState);
    const navigate = useNavigate();
    const id = useParams().id;

    useEffect(() => {
        if(id !== 'new'){
            fetch(`/api/group/${id}`)
            .then(response => response.json()
            .then(data => setGroup(data)));
        
        }
    }, [id, setGroup]);

    const handleChange =(event) =>{
        const {name, value} = event.target
        setGroup({...group, [name]: value})
    }

    
    const handleSubmit = async(event) =>{
        event.preventDefault();
        await fetch (`/api/group${group.id ? `/${group.id}` : ''}`, {
            method :(group.id) ? 'PUT' : 'POST',
            headers :{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify(group)
        });
        setGroup(iniialFormState)
        navigate('/groups');
    }

    const title = <h2>{group.id ? 'Edit Group' : 'Add Group'}</h2>

    return(<div>
        <AppNavbar/>
        <Container>
          {title}
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <label for="name">Name</label>
                    <Input type='text' name='name' id='name' value={group.name || ''}
                    onChange={handleChange} autoComplete="name" />
                </FormGroup>

                <FormGroup>
                    <label for="address">Address</label>
                    <Input type='text' name='address' id='address' value={group.name || ''}
                    onChange={handleChange} autoComplete="address-level1" />
                </FormGroup>

                <FormGroup>
                    <label for="city">City</label>
                    <Input type='text' name='city' id='city' value={group.name || ''}
                    onChange={handleChange} autoComplete="address-level1" />
                </FormGroup>
                <div className='row'>
                        
                    <FormGroup className='col-md-4 mb-3'>
                        <label for="stateOrProvince">State/Province</label>
                        <Input type='text' name='stateOrProvince' id='stateOrProvince' value={group.stateOrProvince || ''}
                        onChange={handleChange} autoComplete="address-level1" />
                    </FormGroup>

                    
                    <FormGroup className='col-md-5 mb-3'>
                        <label for="country">State/Province</label>
                        <Input type='text' name='country' id='country' value={group.country || ''}
                        onChange={handleChange} autoComplete="address-level1" />
                    </FormGroup>

                    
                    <FormGroup className='col-md-3 mb-3'>
                        <label for="country">State/Province</label>
                        <Input type='text' name='postalCode' id='postalCode' value={group.stateOrProvince || ''}
                        onChange={handleChange} autoComplete="address-level1" />
                    </FormGroup>
                </div>
                <FormGroup>
                    <Button color='primary' type='submit'>save</Button>{' '}
                    <Button color='secondary' tag={Link} to="/groups">Cancel</Button>
                </FormGroup>

            </Form>
            
        </Container>
    </div>)
  
}

export default GroupEdit;
