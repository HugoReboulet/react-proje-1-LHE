import React from 'react';
import F1constructeur from "./F1-constructeur";

const app = () => {
    componentDidMount()
    {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title: 'F1 2021 constructors'})
        };
        fetch('http://ergast.com/api/f1/2022/constructors', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({postId: data.id}));
    }

    render()
    {
        const {postId} = this.state;
        return (
            <div>
                <h5>Simple POST Request</h5>
                <div>
                    Returned Id: {postId}
                </div>
            </div>
        );
    }
}

export default app
