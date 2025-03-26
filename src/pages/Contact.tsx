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
            <div className="max-w-3xl mx-auto p-6">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800">Get in Touch</h1>
                    <p className="text-lg text-gray-600 mt-2">
                        Send me a message directly on WhatsApp!
                    </p>
                </div>

                <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Your Message"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            ></textarea>
                        </div>

                        <button
                            onClick={handleSend}
                            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition">
                            Send via WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default Contact;
