import React from "react";
import FormComponent from "./FormComponent";

class FormContainer extends React.Component{
    
    constructor (){
        super();
        this.state={
            firstName: "",
            lastName: "",
            age:"",
            gender:"",
            country: "",
            // for dealing multipe checkboxes part 1
            kosher: false,
            lactoseFree: false,
            vegetarian: false,
            // for dealing multipe checkboxes  part 2
            religions: {
                jewish: false,
                christian: false,
                muslim: false
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeMultipeCheckboxesPart2 = this.handleChangeMultipeCheckboxesPart2.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const name = target.name;
        // in case the target.type === checkbox we want to set those objects in state as true/false
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]:value
        });

    }

    handleChangeMultipeCheckboxesPart2(event){
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState(prevState => {
            return {
                religions: {
                    ...prevState.religions, //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
                    [name]: value
                }
            }
        });
        
    }

    handleSubmit(){

    }

    render(){
        return(
            <FormComponent
                handleChange={this.handleChange}
                handleChangeMultipeCheckboxesPart2 = {this.handleChangeMultipeCheckboxesPart2}
                {...this.state}
            />
        )
    }

}
export default FormContainer;