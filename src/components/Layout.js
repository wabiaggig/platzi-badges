import React, { Children } from 'react'
import Navbar from '../components/Navbar';

function Layout(props){
    //const children= propos.children;
    return(
        //Regresa solo un elemento en ves de usar DIV
        <React.Fragment>
            <Navbar />
            {props.children}
        </React.Fragment>
    ) 
    

}

export default Layout;