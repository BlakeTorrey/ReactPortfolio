
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
        <div className='mb-3'>
            <form onSubmit={handleSubmit}>
                <div>
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
                <div>
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
                <div>
                    <label className='form-label'>
                        Message:
                        <textarea
                            name='message'
                            className="form-control"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='Please enter a message'
                        />
                    </label>
                </div>

                <button type="submit">Send!</button>
            </form>
        </div>
    );
}