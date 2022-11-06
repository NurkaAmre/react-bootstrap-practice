import React, { Component } from 'react'
import { Button, Container, FormControl, Form, Nav, Navbar, NavLink } from 'react-bootstrap'
import { Route, BrowserRouter as Router, Routes, Link} from 'react-router-dom'
import logo from './logo192.png'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'
import Blog from '../Pages/Blog'
import Home from '../Pages/Home'

// eslint-disable-next-line

export default class Header extends Component {
  render() {
    return (
        <>
      <Navbar fixed='top' collapseOnSelect expand="md" bg="warning" variant="dark">
        <Container>
            <Navbar.Brand href="/">
                <img 
                src={logo}
                height="30"
                width="30"
                className='d-inline-block align-top'
                alt='logo'/>NurkaAmre
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link as={NavLink} to href="/" > Home </Nav.Link>
                    <Nav.Link as={NavLink} to href="/about" > About us </Nav.Link>
                    <Nav.Link as={NavLink} to href="/contacts" > Contacts </Nav.Link>
                    <Nav.Link as={NavLink} to href="/blog" > Blog </Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl
                    type="text"
                    placeholder='Search'
                    className='mr-sm-2'
                    />
                    <Button variant='outline-info'>Search</Button>

                </Form>

            </Navbar.Collapse>
        </Container>
      </Navbar>

      <Router>
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/contacts' element={<Contacts/>} />
            <Route exact path='/blog' element={<Blog/>} />
        </Routes>
      </Router>
      </>
    )
  }
}
