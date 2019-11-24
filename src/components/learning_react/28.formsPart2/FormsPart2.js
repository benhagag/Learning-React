import React from 'react';

// Doc about forms
// https://reactjs.org/docs/forms.html

// library for froms in React
// Formik


class FormsPart1 extends React.Component{
    constructor() {
        super();
        this.state={
            firstName:"",
            lastName:"",
            isFriendly: false,
            comment: "",
            gender: "",
            favColor: "yellow"
        };
        // binding
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(event){

        //const name is = to event.target.name;
        //const value is = to event.target.value;
        //const type is = to event.target.type;
        //const checked is = to event.target.checked;
        const{name, value, type, checked} = event.target;
        
        // in case event.target.type is checkbox we want to change the object that represnt him in state as true/false.
        // which in checkbox type case will be ->  event.tearget.checked.

        // in case event.target.type is everything else except checkbox we want to change the object that represent the input in state as the value of it.
        // which will be -> event.target.value

        // the way we choose to catch the input element is by his name -> event.target.name which will be equale to his object name in state.
        
        type === "checkbox"
        ? 
        this.setState({[name]: checked})
        :
        this.setState({[name]: value})
    }

    handleSubmit(){
        // here we will send the form data to an API
        console.log(this.state);
    }

    render(){
       return (
        <div>
           <form onSubmit={this.handleSubmit}>
               <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
               <br/>
               <input
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
                <br/>
                <textarea
                        name="comment" 
                        value={this.state.comment} 
                        placeholder="Leave a comment" 
                        onChange={this.handleChange}
                />

                <br/>
                <label>
                    Is friendly?
                    <input 
                        type="checkbox" 
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    /> 
                </label>
                <br/>
                <label>
                     Male
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={this.state.gender==="male"}
                        onChange={this.handleChange}
                    /> 
                </label>
                <label>
                    Female
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={this.state.gender==="female"}
                        onChange={this.handleChange}
                    /> 
                </label>
                <br/>
                <label>
                    Favorite Color
                    <select value={this.state.favColor} name="favColor" onChange={this.handleChange}>
                        <option value="blue">Blue</option>
                        <option value="red">Red</option>
                        <option value="yellow">Yellow</option>
                    </select>
                </label>
                
                {/*  button inside a form in React acts like input type submit   */}
                <button>Submit</button>
                

           </form>
           <h1>{this.state.firstName} {this.state.lastName}</h1>
           <p>{this.state.comment}</p>
           {this.state.isFriendly && <p>He is a freinly dog</p>}
           <p>{this.state.gender}</p>
           <p>Your favorite Color is : {this.state.favColor}</p>
        </div>
        )
    }
}

export default FormsPart1;