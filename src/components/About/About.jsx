import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="py-20 bg-gradient-to-r from-white via-gray-50 to-white">
            <div className="container mx-auto px-6 md:px-12 xl:px-20 flex flex-col-reverse lg:flex-row items-center gap-12">
                
                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-900 md:text-5xl leading-tight">
                        Passionate React Developers <br /> Building the Future
                    </h2>
                    <p className="mt-6 text-gray-700 text-lg">
                        We bring your web ideas to life with modern, scalable, and beautiful React applications.
                        Our team specializes in creating fast, responsive, and maintainable web interfaces tailored to your needs.
                    </p>
                    <p className="mt-4 text-gray-600">
                        With a strong focus on user experience and clean code, we deliver projects that not only perform but impress.
                    </p>

                    {/* CTA Button */}
                    <div className="mt-8">
                        <Link
                            to="/contact"
                            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src="./public/img/devpedia_about.png"
                        alt="React Development Illustration"
                        className="w-full h-auto rounded-lg shadow-lg animate-fade-in"
                    />
                </div>
            </div>
        </div>
    );
}
