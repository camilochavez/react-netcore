import React from 'react';

export class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actor: null,
            loading: true
        };

        fetch('api/actors/' + this.props.id, { method: 'get' })
            .then(response => response.json())
            .then(data => {
                this.setState({ actor: data, loading: false })
            })
    }
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderDetails(this.state.actor);
        return (<React.Fragment>
            <h1>Actor Details</h1>
            {contents}
        </React.Fragment>);
    }
    renderDetails(actor) {
        console.log("renderDetails: " + actor);        
        return (
            <div className="details">
                <label>Id</label>
                <div>{actor.Id}</div>
                <label>Name</label>
                <div>{actor.Name}</div>
                <label>Gender</label>
                <div>{actor.Gender}</div>
                <label>Age</label>
                <div>{actor.Age}</div>
                <label>Picture</label>
                <img src={actor.Picture} className="Details" />
            </div>);
    }
}