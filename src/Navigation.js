import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import './App.css';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Error from './Error';
import User from './User';


const Data=(props)=> {
    return (
      <div className='mt-5'>
         <h1>This is page</h1>
      </div>
    );
  }

const Navigation = (props)=>{
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Saten</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home"><Link to='/' classname="mr-2">Home</Link></Nav.Link>
                    <Nav.Link href="#about"><Link to="/about" className="mr-2"> About</Link></Nav.Link>
                    <Nav.Link href="#contact"><Link to='/contact' classname="mr-2">Contact</Link></Nav.Link>
                    <Nav.Link href="#user"><Link to='/user'>User</Link></Nav.Link>
                    {/* <Nav.Link href="#user"><Link to='/user/saten'>User</Link></Nav.Link> */}
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} /> 
                <Route exact path="/contact" component={Contact} /> 
                <Route path="/contact/data" component={Data} /> 
                <Route exact path="/user/" component={User} />
                {/* <Route path="/user/:name" component={User} /> */}
                <Route path="/user/:name/:country" component={User} />
                <Route component={Error}  />
            </Switch> 
           
            {/* OR BELOW ONE */}
            {/*              
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about" >
                    <About />
                </Route>
                <Route exact path="/contact" >
                    <Contact />
                </Route>
                 <Route path="/contact/data" >
                    <Data />
                </Route>
                <Route>
                     <Error />
                </Route>
            </Switch>
            */}
        </div>
    );
}
export default Navigation;