import React, { Component } from 'react'

export class CreateEdit extends Component {
    constructor(props) {
        super(props);
        if (this.props.dbaction == "edit") {
            this.state = { actor: null, loading: true, save: false }
            fetch('api/actors/' + this.props.id, { method: 'get' })
                .then(response => response.json())
                .then(data => {
                    this.setState({ actor: data, loading: false })
                })
        } else {
            this.state = { actor: null, loading: false, save: false }
        }
    }

    handleSave(e) {
        e.preventDefault()
        let meth = (this.props.dbaction == "edit" ? "put" : "post")
        let form = Element = document.querySelector('#frmCreateEdit')
        let url = (this.props.dbaction == "edit" ? 'api/actors/' + document.getElementById('Id').value  : 'api/actors/' )
        
        fetch(url,
            {
                method: meth,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.formToJson(form))
            })
            .then(data => {
                this.setState({ save: false });
                this.props.onSave(true);
            })
    }
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderForm(this.state.actor);
        return <div>
            <h1>{this.props.dbaction == "edit" ? "Editor Actor" : "Create Actor"}</h1>
            {contents}
        </div>
    }

    renderForm(item) {
        console.log("this.props.dbaction " + this.props.dbaction)
        if (this.props.dbaction != "edit")
            item = { Name: '', Gender: '', Age: 0, Picture: '' }
        return <form id='frmCreateEdit'>
            {this.props.dbaction == 'edit' ? <input id='Id' name='Id' type='hidden' value={item.Id} />
                : null}
            <label>Name</label>
            <input id='Name' name='Name' type="text" defaultValue={item.Name != null ? (item.Name + '') : ''} />
            <label>Gender</label>
            <input id='Gender' name='Gender' type="text" defaultValue={item.Gender != null ? (item.Gender + '') : ''} />
            <label>Age</label>
            <input id='Age' name='Age' type="text" defaultValue={item.Age != null ? (item.Age + '') : ''} />
            <label>Picture</label>
            <input id='Picture' name='Picture' type="text" defaultValue={item.Picture != null ? (item.Picture + '') : ''} />
            <button onClick={this.handleSave.bind(this)}>submit</button>
        </form>
    }

    isValidElement = element => {
        return element.name && element.value;
    };

    isValidValue = element => {
        return (['checkbox', 'radio'].indexOf(element.type) == -1 || element.checked);
    };

    formToJson = elements => [].reduce.call(elements, (data, element) => {
        console.log('formToJson()', element)
        if (this.isValidElement(element) && this.isValidValue(element)) {
            data[element.name] = element.value;
        }
        return data;
    }, {});
}