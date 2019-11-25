import React from "react";

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class ReactFromPractice extends React.Component{

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
        console.log(this.state);
        return(
        <main>
            <form>
                <input 
                    type="text" 
                    placeholder="First Name" 
                    value={this.state.firstName} 
                    name="firstName" 
                    onChange={this.handleChange} 
                />
                <br/>
                <input 
                    type="text" 
                    placeholder="Last Name" 
                    value={this.state.lastName} 
                    name="lastName" 
                    onChange={this.handleChange} 
                />
                <br/>
                <input 
                    type="number" 
                    placeholder="Age" 
                    value={this.state.age} 
                    name="age" 
                    onChange={this.handleChange}
                />
                <br/>
            <label>
            Male
                <input 
                    type="radio"
                    name="gender"
                    value="male"
                    checked={this.state.gender === "male"}
                    onChange={this.handleChange}
                />
            </label>
            <label>
            Female
                <input 
                    type="radio"
                    name="gender"
                    value="female"
                    checked={this.state.gender === "female"}
                    onChange={this.handleChange}
                />
            </label>
                <br/>
                <label>
                    Choose destination:
                    <br/>
                    <select name="country" value={this.state.country} onChange={this.handleChange}>
                        <option value=""> --Please Choose a country--</option>
                        <option value="israel"> Israel</option>
                        <option value="newYork">New-York</option>
                        <option value="losAngeles">Loa-Angeles</option>
                    </select>
                </label>
                 <br />
                <p> Dietary restrictions:</p>
              
                    <label>
                    Kosher
                    <input
                            name="kosher"
                            type="checkbox"
                            checked={this.state.kosher}
                            onChange={this.handleChange}
                        />

                    </label>
                    <label>
                   Lactos Free
                    <input
                            name="lactoseFree"
                            type="checkbox"
                            checked={this.state.lactoseFree}
                            onChange={this.handleChange}
                        />

                    </label>
                    <label>
                    Vegetarian
                    <input
                            name="vegetarian"
                            type="checkbox"
                            checked={this.state.vegetarian}
                            onChange={this.handleChange}
                        />

                    </label>
                <br />

                <p>Religions</p>
                    <label>
                        Jewish
                        <input
                                name="jewish"
                                type="checkbox"
                                checked={this.state.religions.jewish}
                                onChange={this.handleChangeMultipeCheckboxesPart2}
                            />

                        </label>
                        <label>
                        Christian
                        <input
                                name="christian"
                                type="checkbox"
                                checked={this.state.religions.christian}
                                onChange={this.handleChangeMultipeCheckboxesPart2}
                            />

                        </label>
                        <label>
                        Muslim
                        <input
                                name="muslim"
                                type="checkbox"
                                checked={this.state.religions.muslim}
                                onChange={this.handleChangeMultipeCheckboxesPart2}
                            />

                        </label>
                        <br/>

                <button>Submit</button>

            </form>
            <hr/>
            <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.country}</p>
                <p>
                    Your dietary restrictions:  &nbsp;
                   {this.state.kosher && "Kosher "}
                   {this.state.lactoseFree && "Lactos free "}
                   {this.state.vegetarian && "Vegetarian "}
                </p>
                <p>Religions: &nbsp;
                    {this.state.religions.jewish && "Jewish "}
                    {this.state.religions.christian && "Christian "}
                    {this.state.religions.muslim && "Muslim "}
                </p>
        </main>
        )
    }
}

export default ReactFromPractice;