import React from 'react';

// Doc about forms
// https://reactjs.org/docs/forms.html


class FormsPart1 extends React.Component{
    constructor() {
        super();
        this.state={
            firstName:"",
            lastName:""
        };
        // binding
        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(event){

        //const name is = to event.target.name;
        //const value is = to event.target.value;
        const{name, value} = event.target;

        this.setState({
            [name]:value
        });
    }

    render(){
       return (
        <div>
           <form>
               <input type="text" value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleChange} />
               <br/>
               <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange} />
           </form>
           <h1>{this.state.firstName} {this.state.lastName}</h1>
        </div>
        )
    }
}

export default FormsPart1;