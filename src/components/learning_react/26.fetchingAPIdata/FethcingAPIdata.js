import React from "react";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

// fetch
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch

// SWAPI - Star Wars API
// https://swapi.co/

// promises
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class FetchingAPIdata extends React.Component {
  constructor() {
    super();
    this.state = {
        character:{},
        loading: true
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/1")
        .then(response =>response.json()
        .then(data => {this.setState(
            prevState => { 
                return {
                    character: data,
                    loading: !prevState.loading                   
                };
            });
        })
    );
  }


  render() {
    console.log(this.state);
    return (
        <div>
            {this.state.loading &&
                <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
                />
            }
            {this.state.character !== {} && <h2>{this.state.character.name}</h2>}
        </div>
    );
  }
}

export default FetchingAPIdata;
