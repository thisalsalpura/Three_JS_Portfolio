import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const formRef = useRef();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {

            await emailjs.send(
                '--',
                '--',
                {
                    from_name: form.name,
                    to_name: 'Thisal Senevirathne',
                    form_email: form.email,
                    to_email: 'salpurathisal@gmail.com',
                    message: form.message
                },
                '--'
            )

            setLoading(false);

            alert('Your message has been sent!');

            setForm({
                name: '',
                email: '',
                message: ''
            })

        } catch (error) {

            setLoading(false);

            console.log(error);

            alert('Something went wrong');

        }
    }

    return (
        <section className="c-space my-20">
            <div className="relative flex items-center justify-center flex-col bg-black-200 md:bg-transparent rounded-lg">
                <img
                    src="/assets/terminal.png"
                    alt="terminal background"
                    className="absolute inset-0 h-full w-full hidden md:block"
                />
                <div className="contact-container relative z-10 p-16">
                    <h3 className="head-text text-white">Let's Talk</h3>
                    <p className="text-lg text-gray-300 mt-3">
                        Whether you're looking to build a new website, improve your existing
                        platform, or bring a unique project to life, I'm here to help.
                    </p>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 flex flex-col space-y-7"
                    >
                        <label className="space-y-3">
                            <span className="field-label text-white">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input p-2 rounded-md"
                                placeholder="John Doe"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label text-white">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input p-2 rounded-md"
                                placeholder="johndoe@gmail.com"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label text-white">Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input p-2 rounded-md"
                                placeholder="Hi, I'm interested in..."
                            />
                        </label>
                        <button
                            className="field-btn bg-blue-500 text-white p-3 rounded-md flex items-center justify-center disabled:opacity-50"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                            <img
                                src="/assets/arrow-up.png"
                                alt="arrow-up"
                                className="field-btn_arrow ml-2"
                            />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default Contact;