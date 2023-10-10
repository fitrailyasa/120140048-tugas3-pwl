// Tugas Individu 3 - Pemrograman Web Lanjut
// 120140048 - Fitra Ilyasa
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // Lakukan sesuatu dengan data yang telah diisi, misalnya mengirimnya ke server
        console.log('Data yang dikirim:', this.state);
    };

    render() {
        return (
            <div className="container">
                <div className="">
                    <h1>Kontak</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="my-4 form-group">
                            <label>Nama:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="my-4 form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="my-4 form-group">
                            <label>Pesan:</label>
                            <textarea
                                className="form-control"
                                name="message"
                                value={this.state.message}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <button type="submit" className="mb-4 btn btn-primary">Kirim Pesan</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;
