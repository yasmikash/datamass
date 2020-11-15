import { Navbar, Nav } from "react-bootstrap";

function AppNavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">DataMass</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#myaccount">My Account</Nav.Link>
        <Nav.Link href="#hive">Project Hive</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default AppNavBar;
