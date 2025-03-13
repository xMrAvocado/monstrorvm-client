import Sidebar from './Sidebar.jsx'
import { useState } from 'react';

let cambioScaleY = "scaleY(0)";

function Navbar() {
  const [stateSidebar, setStateSidebar] = useState(false);

    const handleStateSidebar = () => {
        let clone;
        if(stateSidebar === true){
            clone = false;
            cambioScaleY = "scaleY(0)"; // Lo hacemos invisible

        }else if(stateSidebar === false){
            clone = true;
            cambioScaleY = "scaleY(1)"; // Lo hacemos visible
        }
        //console.log(clone)
        setStateSidebar(clone);
    };

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navBarCSS").style.top = "0";
      } else {
        document.getElementById("navBarCSS").style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    }

    return (
        <div id="navBarCSS">
            <div id="divBtnSidebarCss"  onClick={() => handleStateSidebar()}>
                <img width={"40vW"} height={"40vW"} src="https://res.cloudinary.com/dh8naz2ht/image/upload/v1741614866/burgericon_oyxbn3.png" alt="logo-menu"/>
                <h3 id="menuWord"style={{paddingLeft: "10px"}}>MENU</h3>
            </div>
           
            <div id="divTituloCSS">
            <h2 style={{width: "15vW", textAlign: "center"}}>MONSTRORVM</h2>
            </div>
            <Sidebar cambioScaleY={cambioScaleY} />
            <div id="empty-space">
            </div>
        </div>
    )
}

export default Navbar