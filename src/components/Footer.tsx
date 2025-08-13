'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpVariants, slideFromLeftVariants, staggerChildrenVariants } from "@/utils/animations";
import { useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Subscribing email:', email);
        // Reset form
        setEmail('');
        // Here you would typically send the email to your backend/API
    };

    return (
        <motion.footer 
            className="bg-footer text-white py-16 px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.div 
                className="w-full max-w-6xl mx-auto"
                variants={staggerChildrenVariants}
            >
                {/* Main content */}
                <motion.div 
                    className="flex flex-col md:flex-row justify-between items-start mb-16"
                    variants={staggerChildrenVariants}
                >
                    {/* Left side - Heading */}
                    <motion.div 
                        className="mb-8 md:mb-0"
                        variants={slideFromLeftVariants}
                    >
                        <motion.h2 
                            className="text-4xl md:text-5xl font-bold mb-4"
                            variants={fadeUpVariants}
                        >
                            Begin Your<br />
                            Journey Today
                        </motion.h2>
                    </motion.div>

                    {/* Right side - Newsletter */}
                    <motion.div 
                        className="w-full md:w-1/2"
                        variants={fadeUpVariants}
                    >
                        <motion.p 
                            className="text-gray-300 mb-6 text-end"
                            variants={fadeUpVariants}
                        >
                            Whether you're a beginner taking your first steps or a seasoned learner
                            aiming for fluency, our newsletter is your compass.
                        </motion.p>
                        <motion.form 
                            onSubmit={handleSubmit} 
                            className="flex flex-col bg-white rounded-full p-1 sm:flex-row gap-4"
                            variants={fadeUpVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            <input
                                type="email"
                                placeholder="name@email.com"
                                className="flex-grow bg-white text-gray-800 px-4 py-2 rounded-full focus:outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <motion.button
                                type="submit"
                                className="bg-gray-700 hover:bg-gray-600 text-white font-medium px-6 py-2 rounded-full"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Subscribe
                            </motion.button>
                        </motion.form>
                    </motion.div>
                </motion.div>

                {/* Social links */}
                <motion.div 
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    variants={staggerChildrenVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    
                    <motion.div 
                        className="flex items-center"
                        variants={fadeUpVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.span 
                            className="bg-[#F0743E] text-white p-1 flex items-center justify-center rounded-full"
                            whileHover={{ rotate: 15 }}
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8333 7.51667V12.0833C10.8333 14.3417 8.99167 16.1833 6.73333 16.1833C4.475 16.1833 2.63333 14.3417 2.63333 12.0833C2.63333 9.825 4.475 7.98333 6.73333 7.98333C6.88333 7.98333 7.03333 8 7.18333 8.01667V10.2C7.03333 10.1667 6.88333 10.15 6.73333 10.15C5.675 10.15 4.8 11.025 4.8 12.0833C4.8 13.1417 5.675 14.0167 6.73333 14.0167C7.79167 14.0167 8.7 13.175 8.7 12.0833V3.81667H10.8333C10.8333 3.81667 10.8333 3.81667 10.8333 3.83333C10.8333 5.75 12.4 7.31667 14.3167 7.31667V9.48333C12.9333 9.48333 11.6667 8.675 10.8333 7.51667Z" fill="currentColor" />
                            </svg>
                        </motion.span>
                    <motion.a
                        href="https://www.tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-white text-gray-900 px-12 py-1 rounded-full overflow-hidden"
                        whileHover={{ x: 5 }}
                    >
                        <span className="font-medium text-sm">TikTok</span>
                    </motion.a>
                    </motion.div>

                    <motion.div 
                        className="flex items-center"
                        variants={fadeUpVariants}
                        whileHover={{ scale: 1.05 }}
                        custom={0.1}
                    >
                        <motion.span 
                            className="bg-[#8BC7AD] text-white p-1 flex items-center justify-center rounded-full"
                            whileHover={{ rotate: 15 }}
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3333 3.33333H6.66667C4.83333 3.33333 3.33333 4.83333 3.33333 6.66667V13.3333C3.33333 15.1667 4.83333 16.6667 6.66667 16.6667H13.3333C15.1667 16.6667 16.6667 15.1667 16.6667 13.3333V6.66667C16.6667 4.83333 15.1667 3.33333 13.3333 3.33333ZM10 13.75C7.93333 13.75 6.25 12.0667 6.25 10C6.25 7.93333 7.93333 6.25 10 6.25C12.0667 6.25 13.75 7.93333 13.75 10C13.75 12.0667 12.0667 13.75 10 13.75ZM14.1667 7.08333C13.5833 7.08333 13.0833 6.58333 13.0833 6C13.0833 5.41667 13.5833 4.91667 14.1667 4.91667C14.75 4.91667 15.25 5.41667 15.25 6C15.25 6.58333 14.75 7.08333 14.1667 7.08333Z" fill="currentColor" />
                            </svg>  
                        </motion.span>
                    <motion.a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-white text-gray-900 rounded-full px-12 py-1 overflow-hidden"
                        whileHover={{ x: 5 }}
                    >
                        <span className="font-medium text-sm">Instagram</span>
                    </motion.a>
                    </motion.div>

                    <motion.div 
                        className="flex items-center"
                        variants={fadeUpVariants}
                        whileHover={{ scale: 1.05 }}
                        custom={0.2}
                    >
                        <motion.span 
                            className="bg-[#FFD370] text-white p-1 flex items-center justify-center rounded-full"
                            whileHover={{ rotate: 15 }}
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.9167 6.41667C17.8333 6.08333 17.6667 5.78333 17.4167 5.53333C17.1667 5.28333 16.8667 5.11667 16.5333 5.03333C15.2 4.66667 10 4.66667 10 4.66667C10 4.66667 4.8 4.66667 3.46667 5.03333C3.13333 5.11667 2.83333 5.28333 2.58333 5.53333C2.33333 5.78333 2.16667 6.08333 2.08333 6.41667C1.83333 7.75 1.83333 10.4167 1.83333 10.4167C1.83333 10.4167 1.83333 13.0833 2.08333 14.4167C2.16667 14.75 2.33333 15.05 2.58333 15.3C2.83333 15.55 3.13333 15.7167 3.46667 15.8C4.8 16.1667 10 16.1667 10 16.1667C10 16.1667 15.2 16.1667 16.5333 15.8C16.8667 15.7167 17.1667 15.55 17.4167 15.3C17.6667 15.05 17.8333 14.75 17.9167 14.4167C18.1667 13.0833 18.1667 10.4167 18.1667 10.4167C18.1667 10.4167 18.1667 7.75 17.9167 6.41667ZM8.25 12.9167V7.91667L12.8333 10.4167L8.25 12.9167Z" fill="currentColor" />
                            </svg>
                        </motion.span>
                    <motion.a
                        href="https://www.youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-white text-gray-900 rounded-full px-12 py-1 overflow-hidden"
                        whileHover={{ x: 5 }}
                    >
                        <span className="font-medium text-sm">Youtube</span>
                    </motion.a>
                    </motion.div>

                    <motion.div 
                        className="flex items-center"
                        variants={fadeUpVariants}
                        whileHover={{ scale: 1.05 }}
                        custom={0.3}
                    >
                        <motion.span 
                            className="bg-[#9BB3D5] text-white p-1 flex items-center justify-center rounded-full"
                            whileHover={{ rotate: 15 }}
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 5.83333C17 6.08333 16.4167 6.25 15.8333 6.33333C16.4167 5.91667 16.8333 5.33333 17 4.58333C16.4167 4.91667 15.8333 5.16667 15.1667 5.33333C14.5833 4.75 13.8333 4.41667 12.9167 4.41667C11.25 4.41667 9.91667 5.75 9.91667 7.41667C9.91667 7.66667 9.91667 7.91667 10 8.16667C7.41667 8 5.08333 6.83333 3.58333 5C3.25 5.58333 3.08333 6.16667 3.08333 6.83333C3.08333 8 3.66667 9.08333 4.58333 9.66667C4.08333 9.66667 3.58333 9.5 3.16667 9.33333V9.41667C3.16667 10.9167 4.16667 12.0833 5.5 12.3333C5.25 12.4167 5 12.4167 4.66667 12.4167C4.5 12.4167 4.33333 12.4167 4.16667 12.3333C4.5 13.5 5.58333 14.3333 6.83333 14.3333C5.83333 15.0833 4.58333 15.5 3.16667 15.5C2.91667 15.5 2.66667 15.5 2.5 15.4167C3.75 16.25 5.25 16.6667 6.83333 16.6667C12.9167 16.6667 16.25 11.6667 16.25 7.33333C16.25 7.16667 16.25 7.08333 16.25 6.91667C16.9167 6.5 17.4167 5.91667 17.5 5.83333Z" fill="currentColor" />
                            </svg>
                        </motion.span>
                        <motion.a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-white text-gray-900 rounded-full px-12 py-1 overflow-hidden"
                            whileHover={{ x: 5 }}
                        >
                            <span className="font-medium text-sm">Twitter</span>
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Divider */}
                <motion.div 
                    className="border-t border-gray-700"
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: '100%' }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: true }}
                ></motion.div>

                {/* Copyright */}
                <motion.div 
                    className="py-6 text-center text-sm text-gray-500"
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <p>&copy; {new Date().getFullYear()} Linguify. All rights reserved.</p>
                </motion.div>
            </motion.div>
        </motion.footer>
    );
}
