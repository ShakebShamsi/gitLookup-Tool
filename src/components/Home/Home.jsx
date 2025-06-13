import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="w-full bg-white min-h-screen overflow-hidden">
            {/* Hero Section */}
            <section className="relative flex flex-col-reverse lg:flex-row items-center max-w-7xl mx-auto px-4 sm:px-8 py-12">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                        Download Now
                        <br />
                        <span className="text-orange-700">DevPedia</span>
                    </h1>
                    <p className="mt-4 text-gray-600 text-lg">
                        Experience next-gen convenience and performance. Your solution starts here.
                    </p>

                    <Link
                        to="/"
                        className="mt-6 inline-flex items-center px-6 py-3 bg-orange-700 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
                    >
                        <svg
                            fill="white"
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        >
                            <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                        </svg>
                        &nbsp; Download Now
                    </Link>
                </div>

                {/* Right Hero Image */}
                <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                    <img
                        src="/img/devpedia_home.png"
                        alt="hero illustration"
                        className="w-full max-w mx-auto"
                    />
                </div>
            </section>

            {/* Feature Illustration */}
            <div className="flex justify-center mt-16">
                <img
                    src="/img/devpedia_home_download.png"
                    alt="feature"
                    className="w-48 sm:w-96"
                />
            </div>

            {/* Tagline */}
            <div className="text-center py-10">
                <h2 className="text-3xl sm:text-5xl font-semibold text-gray-800">
                  Where Devs Decode the Future.
                </h2>
                <p className="text-gray-500 mt-2">
                    Crafted with care by developers, for developers.
                </p>
            </div>
        </div>
    );
}
