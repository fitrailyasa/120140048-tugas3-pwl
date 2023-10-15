// Tugas Individu 3 - Pemrograman Web Lanjut
// 120140048 - Fitra Ilyasa
import React, { useState } from 'react';
import TitleHeading from '../component/TitleHeading';
import Button from '../component/Button';

function Kontak() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Mendapatkan pesan yang tersimpan di localStorage saat komponen dimuat
    const storedMessage = localStorage.getItem('pesan');
    const [pesan, setPesan] = useState(storedMessage || '');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lakukan sesuatu dengan data yang telah diisi, misalnya mengirimnya ke server

        // Simpan pesan ke dalam localStorage
        const pesanToStore = `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`;
        localStorage.setItem('pesan', pesanToStore);

        // Set pesan yang ditampilkan
        setPesan(pesanToStore);
    };

    return (
        <div className="container">
            <div className="">
                <TitleHeading text="Kontak" />
                <form onSubmit={handleSubmit}>
                    <div className="my-4 form-group">
                        <label>Nama:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="my-4 form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="my-4 form-group">
                        <label>Pesan:</label>
                        <textarea
                            className="form-control"
                            name="message"
                            value={message}
                            onChange={handleInputChange}
                        />
                    </div>
                    <Button />
                </form>

                {/* Menampilkan pesan yang telah dikirim */}
                <div>
                    <h3>Pesan yang Telah Dikirim:</h3>
                    <pre>{pesan}</pre>
                </div>
            </div>
        </div>
    );
}

export default Kontak;
