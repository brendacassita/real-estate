import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Badge from "react-bootstrap/esm/Badge";
import Button from "react-bootstrap/esm/Button";

const Navbar = () => {
  const auth = useContext(AuthContext);
  //   const {user} = useContext(AuthContext);
  //    if(user) => logout
  //    if(!user) => login/register
  const renderRightNav = () => {
    if (auth.user) {
      return <Button variant="primary" size="sm" onClick={auth.handleLogout}>Logout</Button>;
    }
    return (
      <>
        <Link className="Nav-link" to="/login">Login</Link>
        <Link className="Nav-link" to="/register">Register</Link>
        

        
      </>
    );
  };

  const renderLeft = () => {
    //if we have a user, return the links we want to show(if logged in)
    if (auth.user) {
      return (
        <>
          {/* <Link className="Nav-link" to="/home">Home Protected</Link> */}
          {/* <Badge onClick={auth.handleLogout }>Logout</Badge> */}
        </>
      );
    }
  };
  
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
      {renderLeft()}
        <Link className="Nav-link" to="/">Home</Link>
        <Link className="Nav-link" to="/available">Available</Link>
        <Link className="Nav-link" to="/cities">Cities</Link>

        {renderLeft()}

      </div>
      <div>{renderRightNav()}</div>
    </div>
  );
};

export default Navbar;