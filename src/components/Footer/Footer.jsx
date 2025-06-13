import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-50 text-gray-700 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {/* Logo and Description */}
                    <div>
                        <Link to="/" className="flex items-center space-x-2">
                            <img
                                src="./public/img/devpedia_logo.png"
                                alt="Logo"
                                className="h-14 scale-300 ml-10"
                            />
                        </Link>
                        <p className="mt-4 text-sm text-gray-600">
                            Crafting modern web experiences with passion, precision, and performance.
                        </p>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-md font-semibold mb-3 text-orange-600 uppercase">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-orange-600 transition">Home</Link></li>
                            <li><Link to="/about" className="hover:text-orange-600 transition">About</Link></li>
                            <li><Link to="/contact" className="hover:text-orange-600 transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h3 className="text-md font-semibold mb-3 text-orange-600 uppercase">Community</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="https://github.com/ShakebShamsi" target="_blank" rel="noreferrer" className="hover:text-orange-600 transition">GitHub</a></li>
                            <li><a href="https://discord.com/users/492700350323884052" target="_blank" rel="noreferrer" className="hover:text-orange-600 transition">Discord</a></li>
                            <li><a href="https://www.linkedin.com/in/shakebshamsi" target="_blank" rel="noreferrer" className="hover:text-orange-600 transition">LinkedIn</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-md font-semibold mb-3 text-orange-600 uppercase">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="#" className="hover:text-orange-600 transition">Privacy Policy</Link></li>
                            <li><Link to="#" className="hover:text-orange-600 transition">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-8 border-gray-300" />

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                    <p className="mb-4 md:mb-0">
                        © {new Date().getFullYear()}{" "}
                        <a href="https://shakeb.onrender.com" className="text-orange-600 hover:underline">
                            ShakebShamsi
                        </a>. All rights reserved.
                    </p>

                    <div className="flex space-x-4">
                        {[
                            { href: 'https://www.instagram.com/shakebshamsi', icon: "fab fa-instagram", label: 'Facebook' },
                            { href: 'https://x.com/shakebshamsi', icon: 'fab fa-twitter', label: 'Twitter' },
                            { href: 'https://github.com/ShakebShamsi', icon: 'fab fa-github', label: 'GitHub' },
                            { href: 'https://www.linkedin.com/in/shakebshamsi', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
                        ].map(({ href, icon, label }) => (
                            <a
                                key={label}
                              href={href}
                              target='_blank'
                                aria-label={label}
                                className="text-gray-500 hover:text-orange-600 transition"
                            >
                                <i className={`${icon} text-base`}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
