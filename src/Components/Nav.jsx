import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
    const [show, setShow] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        setShow(window.scrollY > 100);
      });
    }, []);
  
    return (
      <div className={`nav-container ${show && "nav-container-black"}`}>
        <img className='nav-logo' src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='netflix-logo'></img>
        <img className="nav-avatar" src="https://occ-0-577-1123.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABRMB_9cg8pMt4J73ATZflW3AsCra4TVI-9JquOIGlOmvNj1eFCwTbkLbxIDQT6bS96vwsVjgzZIuwcEYe9kbPlnYpdptKmtlWw.png?r=ff8&quot" alt="avatar"></img>
    </div>
  )
}

export default Nav