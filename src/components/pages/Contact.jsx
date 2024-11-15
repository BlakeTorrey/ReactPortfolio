import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data:', formData);
    };


    return (
        <section className="contact-form py-5 min-vh-100">
            <div className='container justify-content-center align-items-center'>
                <h2 className="mb-4">Shoot me a message!</h2>
                <form onSubmit={handleSubmit} className='col-12 col-md-8 mx-auto'>
                    <div className='mb-3'>
                        <label className='form-label'>
                            Name:
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Please enter your name"
                            />
                        </label>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>
                            Email:
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Please enter your email'
                            />
                        </label>
                    </div>
                    <div className="mb-3 ">
                        <label className='form-label'>
                            Message:
                            <textarea
                                name='message'
                                className="form-control"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder='Please enter a message'
                            />
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary ">Send!</button>
                </form>
            </div>
        </section>
    );
}