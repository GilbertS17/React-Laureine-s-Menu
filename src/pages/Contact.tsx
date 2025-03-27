import { useState } from "react";
import { PageWrapper } from "../components/PageWrapper";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSend = () => {
        const phoneNumber = "96170587306";
        const message = `Hello, my name is ${formData.name}. ${formData.message}`;
        const encodedMessage = encodeURIComponent(message);

        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
        setFormData({
            name: "",
            message: ""
        })
    };

    return (
        <PageWrapper>
            <div className="contact-outer-container">
                <div className="text-center">
                    <h1 className="section-title">Get in Touch</h1>
                    <p className="about-me-text text-gray-600">
                        Send me a message directly on WhatsApp!
                    </p>
                </div>

                <div className="contact-inner-container">
                    <div className="space-y-4">
                        <div>
                            <label className="label">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="name-input"
                            />
                        </div>

                        <div>
                            <label className="label">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Your Message"
                                className="message-input"
                            ></textarea>
                        </div>

                        <button
                            onClick={handleSend}
                            className="send-button">
                            Send via WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default Contact;