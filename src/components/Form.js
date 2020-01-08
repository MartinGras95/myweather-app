import React from "react";

// Alternate way of coding a stateless componenet. The code in Weather.js is preffered. This code is kept for future educational comparisons

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City..."></input>
                <input type="text" name="country" placeholder="Country..."></input>
                <button>Get Weather</button>
            </form>
        );
    }
}

export default Form;