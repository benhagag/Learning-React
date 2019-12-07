import React from "react";

function FormComponent(props){
    return(
        <main>
            <form>
                <input 
                    type="text" 
                    placeholder="First Name" 
                    value={props.firstName} 
                    name="firstName" 
                    onChange={props.handleChange} 
                />
                <br/>
                <input 
                    type="text" 
                    placeholder="Last Name" 
                    value={props.lastName} 
                    name="lastName" 
                    onChange={props.handleChange} 
                />
                <br/>
                <input 
                    type="number" 
                    placeholder="Age" 
                    value={props.age} 
                    name="age" 
                    onChange={props.handleChange}
                />
                <br/>
            <label>
            Male
                <input 
                    type="radio"
                    name="gender"
                    value="male"
                    checked={props.gender === "male"}
                    onChange={props.handleChange}
                />
            </label>
            <label>
            Female
                <input 
                    type="radio"
                    name="gender"
                    value="female"
                    checked={props.gender === "female"}
                    onChange={props.handleChange}
                />
            </label>
                <br/>
                <label>
                    Choose destination:
                    <br/>
                    <select name="country" value={props.country} onChange={props.handleChange}>
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
                            checked={props.kosher}
                            onChange={props.handleChange}
                        />

                    </label>
                    <label>
                    Lactos Free
                    <input
                            name="lactoseFree"
                            type="checkbox"
                            checked={props.lactoseFree}
                            onChange={props.handleChange}
                        />

                    </label>
                    <label>
                    Vegetarian
                    <input
                            name="vegetarian"
                            type="checkbox"
                            checked={props.vegetarian}
                            onChange={props.handleChange}
                        />

                    </label>
                <br />

                <p>Religions</p>
                    <label>
                        Jewish
                        <input
                                name="jewish"
                                type="checkbox"
                                checked={props.religions.jewish}
                                onChange={props.handleChangeMultipeCheckboxesPart2}
                            />

                        </label>
                        <label>
                        Christian
                        <input
                                name="christian"
                                type="checkbox"
                                checked={props.religions.christian}
                                onChange={props.handleChangeMultipeCheckboxesPart2}
                            />

                        </label>
                        <label>
                        Muslim
                        <input
                                name="muslim"
                                type="checkbox"
                                checked={props.religions.muslim}
                                onChange={props.handleChangeMultipeCheckboxesPart2}
                            />

                        </label>
                        <br/>

                <button>Submit</button>

            </form>
            <hr/>
            <h2>Entered information:</h2>
                <p>Your name: {props.firstName} {props.lastName}</p>
                <p>Your age: {props.age}</p>
                <p>Your gender: {props.gender}</p>
                <p>Your destination: {props.country}</p>
                <p>
                    Your dietary restrictions:  &nbsp;
                    {props.kosher && "Kosher "}
                    {props.lactoseFree && "Lactos free "}
                    {props.vegetarian && "Vegetarian "}
                </p>
                <p>Religions: &nbsp;
                    {props.religions.jewish && "Jewish "}
                    {props.religions.christian && "Christian "}
                    {props.religions.muslim && "Muslim "}
                </p>
        </main>
        
   )

}

export default FormComponent;