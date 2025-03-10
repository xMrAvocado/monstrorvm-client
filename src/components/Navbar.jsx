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

    return (
        <div id="navBarCSS">
            <div id="divBtnSidebarCss"  onClick={() => handleStateSidebar()}>
                <img width={"40vW"} height={"40vW"} src="src\images\burgericon.png" alt="logo-menu"/>
                <h3 style={{paddingLeft: "10px"}}>MENU</h3>
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