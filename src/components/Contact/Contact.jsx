import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Contact() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white px-4">
            <div className="max-w-6xl mx-auto w-full">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
                    <p className="text-gray-500 mt-2">We’d love to hear from you. Let’s start a conversation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Contact Info */}
                    <div className="p-6 bg-gray-100 sm:rounded-lg">
                        <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                            Get in touch:
                        </h1>
                        <p className="text-lg sm:text-xl font-medium text-gray-600 mt-2">
                            Fill in the form to start a conversation
                        </p>

                        <div className="flex items-center mt-8 text-gray-600">
                            <svg
                                className="w-8 h-8 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0L6.343 16.657a8 8 0 1111.314 0z" />
                                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="ml-4 text-md tracking-wide font-semibold w-40">
                                Bangalore-17
                            </span>
                        </div>

                        <div className="flex items-center mt-4 text-gray-600">
                            <svg
                                className="w-8 h-8 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.867 10.517a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15v4a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="ml-4 text-md tracking-wide font-semibold w-40">
                                +91 98XXXX1230
                            </span>
                        </div>

                        <div className="flex items-center mt-4 text-gray-600">
                            <svg
                                className="w-8 h-8 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="ml-4 text-md tracking-wide font-semibold w-40">
                                info.shakeb@gmail.com
                            </span>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="p-6 bg-white flex flex-col justify-center">
                        <div className="flex flex-col mb-4">
                            <label htmlFor="name" className="hidden">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                className="py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="email" className="hidden">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="tel" className="hidden">Telephone</label>
                            <input
                                type="tel"
                                name="tel"
                                id="tel"
                                placeholder="Telephone Number"
                                className="py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
