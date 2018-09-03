import React, { Component } from 'react';
import Modal from 'react-modal';
import { CreateEdit } from './CreateEdit'
import { Details } from './Details'

Modal.setAppElement('#root')

export class Actors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actor: [],
            loading: true,
            showCreate: false,
            showDetails: false,
            showUpdate: false,
            showModal: true,
            activeId: 0
        };
        fetch('api/actors')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    actor: data,
                    loading: false,
                    showCreate: false,
                    showDetails: false,
                    showUpdate: false,
                    showModal: true,
                    activeId: 0
                });
            });
        this.closeModal = this.closeModal.bind(this);
    }

    handleCreate() {
        this.setState({ showCreate: true, showDetails: false, showUpdate: false })
    }

    handleUpdate(id) {
        this.setState({ showUpdate: true, showDetails: false, showCreate: false, activeId: id })
    }

    handleDetails(id) {
        this.setState({ showCreate: false, showDetails: true, showUpdate: false, activeId: id })
    }

    handleDelete(id) {
        if (!window.confirm("Are you sure to delete this item?"))
            return
        fetch('api/actors/' + id, { method: 'delete' })
            .then(data => {
                this.setState({
                    actor: this.state.actor.filter((rec) => {
                        return rec.Id !== id;
                    })

                })
            })

    }

    renderTable(actor) {
        return (<table className='table'>
            <thead>
                <tr>
                    <th></th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Picture</th>
                </tr>
            </thead>
            <tbody>
                {actor.map(item =>
                    <tr key={item.Id}>
                        <td>
                            <button className="action" onClick={() => this.handleDelete(item.Id)}>X</button>
                            <button className="action" onClick={() => this.handleUpdate(item.Id)}>Update</button>
                            <button className="action" onClick={(id) => this.handleDetails(item.Id)}>Details</button>
                        </td>
                        <td>{item.Id}</td>
                        <td>{item.Name}</td>
                        <td>{item.Gender}</td>
                        <td>{item.Age}</td>
                        <td> <img src={item.Picture} className="List" /></td>
                    </tr>
                )}
            </tbody>
        </table>);
    }

    renderPopup() {
        if (!this.state.showCreate && !this.state.showDetails && !this.state.showUpdate)
            return
        return (<Modal
            isOpen={true}
            contentLabel="Crawl"
            onRequestClose={this.closeModal}>
            <button onClick={this.closeModal} className="action" title="close">X</button>
            {this.renderPopupContent()}
        </Modal>);
    }

    renderPopupContent() {
        if (this.state.showCreate) {
            console.log(this.state.showCreate);
            return <CreateEdit id={null} dbaction="create"
                onSave={this.handlePopupSave.bind(this)} />
        }

        if (this.state.showDetails) {
            return <div><Details id={this.state.activeId} /></div>
        }
        if (this.state.showUpdate) {
            return <CreateEdit id={this.state.activeId} dbaction="edit"
                onSave={this.handlePopupSave.bind(this)} />
        }
    }

    closeModal() {
        this.setState({ showDetails: false, showCreate: false, showUpdate: false, showModal: false })
    }

    handlePopupSave(success) {
        if (success)
            this.setState({ showCreate: false, showUpdate: false })
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderTable(this.state.actor);

        return (<div>
            <h1>Actor</h1>
            <button className="action" onClick={this.handleCreate.bind(this)}>Create</button>
            {contents}
            {this.renderPopup()}
        </div>);

    }
}