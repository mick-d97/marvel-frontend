import { Link } from "react-router-dom";

const Nav = () => {
  return (
      <>
  <div className="nav">
    
    <Link to=""><button>Comics</button></Link>
    
    <button>Personnages</button>
    <input type="text" />
    <button>S'inscrire</button>
    <button>Connexion</button>
  </div>
  </>
  );
};

export default Nav;
