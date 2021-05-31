import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Checkbox } from 'semantic-ui-react'
import Search from './Search'
import { Jumbotron } from './Jumbotron';

function NavBar({ traveler, setTraveler }) {

  const history = useHistory()

  function logout(){
    localStorage.removeItem("token")
    setTraveler(null)
    history.push('/')
  }
  
  return (
    
    <header>
    
          <div>
            <Link to="/">Home</Link>
          </div>
       
         <div>
           { traveler ? (
             <>
                <Link to="/hotels">Hotels</Link> 
                <Link to="/tours">Tours</Link> 
                <Link to="/reservations">Reservation</Link>
                <Link to="/profile">Profile</Link>
                <button onClick={logout}>Logout</button>
            </>
           ):(
             <>
                <Link to="/hotels">Hotels</Link> 
                {/* <Link to="/tours">Tours</Link>  */}
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
             </>
           )
           }
            <span></span><span></span>   
            <Checkbox toggle/>
            
        </div>        
     
        </header>
     
  );
}

export default NavBar;