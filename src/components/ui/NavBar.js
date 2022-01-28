import React from 'react'
import { Navbar, Nav, Button, Container} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom'



export const NavbarNavegate = () => {

    // const navigate = useNavigate();

    // const handleLogout = () => {
    //     navigate('/login', {
    //         replace: true
    //     });
    // }
    return (
    < Navbar className='rounded' bg = "dark" variant='dark' sticky='top' expand = { false } >
        <Container fluid>
                        <Link
                            className="navbar-brand"
                            to="/"
                            >
                            HomeCinema
                        </Link>
                        <NavLink
                            className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                            to="/search"
                            >
                            <Button>Search</Button>
                        </NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <NavLink
                            className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                            to="/marvel"
                            >
                            Marvel
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                            to="/dc"
                            >
                            DC
                        </NavLink>
                    </Nav>

            </Navbar.Collapse>
         
        </Container>
</Navbar >
        )
    }

    

                            //     <div className=" navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end ">
                            //         <ul className=" navbar-nav ml-auto ">
                            //             <span className=' nav-item nav-items text-info '>
                            //                 toledo
                            //             </span>
                            //             <button
                            //                 className=" nav-item nav-link btn "
                            //                 onClick={handleLogout}
                        
                            //             >
                            //                 Logout
                            //             </button>
                            //         </ul>
                            //     </div>
                            // </NavBar>