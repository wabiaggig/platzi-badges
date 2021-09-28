//imports
import React from 'react';
import Navbar from '../components/Navbar';
import header from "../images/badge-header.svg"
import './styles/BadgeNew.css'
import Badge from '../components/Bagde'
import BadgeForm from '../components/BadgeForm'
//CONSTRUCCION
class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName="Aaron" 
                                lastName="Biaggi" 
                                twitter="wabiaggig" 
                                jobTittle="Technical Support" 
                                avatarUrl="https://scontent.flim25-1.fna.fbcdn.net/v/t1.6435-1/p160x160/118602354_10223199261748327_8578560018634670410_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=iH2BEsazu18AX_yVxsw&_nc_ht=scontent.flim25-1.fna&oh=3336917c313a1ebbee763da84ccfac06&oe=6176803C"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BadgeNew