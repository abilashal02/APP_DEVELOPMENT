import React, { useState } from 'react';
import './Checkout.css'; // Import CSS for styling

const CheckoutPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (window.Razorpay) {
            const options = {
                key: "rzp_test_xtFnbnQ0oQ9B1o",
                key_secret: "6hJKdPHxGCkjBLvHGzdWjsMK",
                amount: 10000,
                currency: "INR",
                name: "MINITURE",
                description: "Fastest Delivery",
                handler: function (response) {
                    console.log('Payment successful', response);
                    // Send the order data to your backend here
                },
                prefill: {
                    name: formData.name,
                    email: formData.email,
                    contact: formData.phone
                },
                notes: {
                    address: formData.address,
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const pay = new window.Razorpay(options);
            pay.open();
        } else {
            console.error("Razorpay SDK not loaded");
        }
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="checkout-container">
            <h1 style={{fontSize:'45px'}}>Checkout</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Pay Now</button>
            </form>
        </div>
    );
};

export default CheckoutPage;
