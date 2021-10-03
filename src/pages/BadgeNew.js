//imports
import React from 'react';

import header from "../images/badge-header.svg"
import './styles/BadgeNew.css'
import Badge from '../components/Bagde'
import BadgeForm from '../components/BadgeForm'
//CONSTRUCCION
class BadgeNew extends React.Component{
    state = {
        form:{
            firstName: '',
            lastName: '',
            email: '',
            jobTittle: '',
            twitter: '',
        }
    };
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        })
    }
    render(){
        return(
            <React.Fragment>
                
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                twitter={this.state.form.twitter}
                                jobTittle={this.state.form.jobTittle}
                                avatarUrl="https://scontent.flim25-1.fna.fbcdn.net/v/t1.6435-1/p160x160/118602354_10223199261748327_8578560018634670410_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=iH2BEsazu18AX_yVxsw&_nc_ht=scontent.flim25-1.fna&oh=3336917c313a1ebbee763da84ccfac06&oe=6176803C"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange} 
                                formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default BadgeNew