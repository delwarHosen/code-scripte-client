import { Button, Navbar } from 'keep-react';
import React, { useContext } from 'react';
import logo from '../../../assets/logo-code-craft_876127-13.avif'
import { AuthContext } from '../../../Provider/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <Navbar fluid={true} className="">
            <Navbar.Container className="flex items-center justify-between">
                <Navbar.Container className="flex items-center">
                    <Navbar.Brand>
                        <img style={{ height: "100px" }} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Divider></Navbar.Divider>
                    <Navbar.Container
                        tag="ul"
                        className="lg:flex hidden items-center justify-between gap-8" >
                        <Navbar.Link className='text-2xl font-bold' to='/' linkName="Home" />
                        <Navbar.Link to='/courses' linkName="Courses" />
                        <Navbar.Link to='/faq' linkName="FAQ" />
                        <Navbar.Link to='/blog' linkName="Blog" />
                    </Navbar.Container>
                    <Navbar.Collapse collapseType="sidebar">
                        <Navbar.Container tag="ul" className="flex flex-col gap-5">
                            <Navbar.Link linkName="Home" />
                            <Navbar.Link linkName="Projects" />
                            <Navbar.Link linkName="Blogs" />
                            <Navbar.Link linkName="News" />
                            <Navbar.Link linkName="Resources" />
                        </Navbar.Container>
                    </Navbar.Collapse>
                </Navbar.Container>

                <Navbar.Container className="flex gap-2">
                    {
                        user && <p>{user.displayName}</p>
                    }
                    {
                        user ? <Button size="sm" type="primary">
                            Logout
                        </Button> : <Button size="sm" type="primary">
                            Login
                        </Button>
                    }
                    <Navbar.Toggle />
                </Navbar.Container>
            </Navbar.Container>
        </Navbar>
    );
};

export default Header;