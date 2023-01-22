import React from 'react';
import './../App.css';
import {Button, Container} from 'reactstrap';
import AppNavbar from './AppNavbar';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
            <div>
                    <AppNavbar/>
                    <Container fluid>
                        <Button color="link"><Link to="/groups">Manage JUG Tour</Link></Button>
                    </Container>
            </div>

    ) 
}

export default Home;