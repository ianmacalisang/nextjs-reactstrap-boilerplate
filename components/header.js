import React, {useState} from 'react'
import Link from '../utils/ActiveLink';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container
} from 'reactstrap'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blogs', label: 'Blogs' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const NavMenu = props => {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Navbar color="dark" dark expand="md">
      <Container>
      <Link href='/'><a className='navbar-brand'>NextJS - Reactstrap</a></Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {navLinks.map(({href,label,key}) => (
            <NavItem key={key}>
              <Link href={href} activeClassName="active"><a className="nav-link">{label}</a></Link>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
      </Container>
    </Navbar>
  )
}

export default NavMenu
