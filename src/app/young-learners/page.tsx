'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/context/TranslationContext';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';


export default function YoungLearners() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('overview');
    const [formData, setFormData] = useState({
        childName: '',
        childAge: '',
        parentName: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        level: 'beginner',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        try {
            // Here you would typically send the data to your API
            // For now we'll just simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitSuccess(true);
            setFormData({
                childName: '',
                childAge: '',
                parentName: '',
                email: '',
                phone: '',
                date: '',
                time: '',
                level: 'beginner',
                message: '',
            });
        } catch {
            setSubmitError('There was an error submitting your request. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    // Animation variants for tab buttons
    const tabVariants = {
        inactive: { borderBottom: "2px solid transparent" },
        active: { borderBottom: "2px solid #eab308" },
    };

    return (
        <motion.div
            className="font-sans bg-white pt-24"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
        >
            <motion.div
                className="container mx-auto bg-white px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-8"
                variants={staggerContainer}
            >

                <motion.div
                    variants={fadeIn}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">

                    <motion.div 
                        variants={fadeIn}
                        className="">

                        {/* Breadcrumb Navigation */}
                        <motion.div
                            className="text-sm text-black mb-4"
                            variants={fadeIn}
                        >
                            <Link href="/" className="hover:text-yellow-500 transition-colors">{t('younglearners.breadcrumb.home')}</Link>
                            <span className="mx-2">/</span>
                            <span className="text-gray-700">{t('younglearners.breadcrumb.page')}</span>
                        </motion.div>

                        {/* Page Title */}
                        <motion.h1
                            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                            variants={fadeIn}
                        >
                            {t('younglearners.title')}
                        </motion.h1>
                        <motion.p
                            className="text-black mb-8"
                            variants={fadeIn}
                        >
                            {t('younglearners.subtitle')}
                        </motion.p>
                    </motion.div>


                    {
                        activeTab === 'reviews' && (
                            
                            <motion.div
                                className="mt-10 text-center"
                                variants={fadeIn}
                            >
                                <motion.button
                                    onClick={() => setActiveTab('schedule')}
                                    className="bg-yellow-400 text-black font-medium py-2 sm:py-3 px-6 sm:px-8 text-sm sm:text-base rounded-full transition-colors"
                                    whileHover={{ scale: 1.05, backgroundColor: "#eab308" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {t('younglearners.enroll.button')}
                                </motion.button>
                            </motion.div>
                        )
                    }
                </motion.div>


                {/* Tab Navigation */}
                <motion.div
                    className="border-b border-gray-200 mb-8 w-full overflow-x-auto"
                    variants={fadeIn}
                >
                    <motion.div
                        className="flex space-x-4 md:space-x-8 min-w-max"
                        variants={staggerContainer}
                    >
                        <motion.button
                            onClick={() => setActiveTab('overview')}
                            className={`py-4 text-sm font-medium ${activeTab === 'overview' ? 'text-yellow-500' : 'text-black hover:text-gray-700'}`}
                            animate={activeTab === 'overview' ? "active" : "inactive"}
                            initial="inactive"
                            variants={tabVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('younglearners.tabs.overview')}
                        </motion.button>
                        <motion.button
                            onClick={() => setActiveTab('reviews')}
                            className={`py-4 text-sm font-medium ${activeTab === 'reviews' ? 'text-yellow-500' : 'text-black hover:text-gray-700'}`}
                            animate={activeTab === 'reviews' ? "active" : "inactive"}
                            initial="inactive"
                            variants={tabVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('younglearners.tabs.reviews')}
                        </motion.button>
                        <motion.button
                            onClick={() => setActiveTab('schedule')}
                            className={`py-4 text-sm font-medium ${activeTab === 'schedule' ? 'text-yellow-500' : 'text-black hover:text-gray-700'}`}
                            animate={activeTab === 'schedule' ? "active" : "inactive"}
                            initial="inactive"
                            variants={tabVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('younglearners.tabs.schedule')}
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    className="w-full px-2 sm:px-4 py-8 sm:py-12 md:py-16"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                >
                    {activeTab === 'overview' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* About this program */}
                            <motion.div
                                className="mb-8"
                                variants={fadeIn}
                            >
                                <motion.h2
                                    className="text-2xl font-bold text-gray-900 mb-3"
                                    variants={fadeIn}
                                    whileHover={{ x: 5 }}
                                >
                                    {t('younglearners.overview.title')}
                                </motion.h2>
                                <motion.p
                                    className="text-gray-700"
                                    variants={fadeIn}
                                >
                                    {t('younglearners.overview.description')}
                                </motion.p>
                            </motion.div>

                            {/* Program features */}
                            <motion.div
                                variants={fadeIn}
                            >
                                <motion.h2
                                    className="text-2xl font-bold text-gray-900 mb-3"
                                    variants={fadeIn}
                                    whileHover={{ x: 5 }}
                                >
                                    {t('younglearners.features.title')}
                                </motion.h2>
                                <motion.div
                                    className="space-y-3"
                                    variants={staggerContainer}
                                >
                                    <motion.div
                                        className="flex items-start"
                                        variants={fadeIn}
                                        whileHover={{ x: 5 }}
                                    >
                                        <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-yellow-400 mr-2 mt-0.5" readOnly checked />
                                        <span className="text-gray-700">{t('younglearners.features.1')}</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-start"
                                        variants={fadeIn}
                                        whileHover={{ x: 5 }}
                                    >
                                        <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-yellow-400 mr-2 mt-0.5" readOnly checked />
                                        <span className="text-gray-700">{t('younglearners.features.2')}</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-start"
                                        variants={fadeIn}
                                        whileHover={{ x: 5 }}
                                    >
                                        <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-yellow-400 mr-2 mt-0.5" readOnly checked />
                                        <span className="text-gray-700">{t('younglearners.features.3')}</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-start"
                                        variants={fadeIn}
                                        whileHover={{ x: 5 }}
                                    >
                                        <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-yellow-400 mr-2 mt-0.5" readOnly checked />
                                        <span className="text-gray-700">{t('younglearners.features.4')}</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-start"
                                        variants={fadeIn}
                                        whileHover={{ x: 5 }}
                                    >
                                        <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-yellow-400 mr-2 mt-0.5" readOnly checked />
                                        <span className="text-gray-700">{t('younglearners.features.5')}</span>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}

                    {activeTab === 'reviews' && (
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('younglearners.reviews.title')}</h2>

                            {/* Reviews */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Review 1 */}
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic mb-4">{t('younglearners.reviews.text1')}</p>
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                                        <div className="ml-3">
                                            <p className="font-medium text-gray-800">{t('younglearners.reviews.name1')}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Review 2 */}
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic mb-4">{t('younglearners.reviews.text2')}</p>
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                                        <div className="ml-3">
                                            <p className="font-medium text-gray-800">{t('younglearners.reviews.name2')}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Review 3 */}
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5" fill={i < 5 ? "currentColor" : "none"} stroke={i < 5 ? "none" : "currentColor"} viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic mb-4">{t('younglearners.reviews.text3')}</p>
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                                        <div className="ml-3">
                                            <p className="font-medium text-gray-800">{t('younglearners.reviews.name3')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'schedule' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('younglearners.enroll.title')}</h2>

                            {/* Booking Success Message */}
                            {submitSuccess && (
                                <motion.div 
                                    className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <p>{t('younglearners.enroll.success')}</p>
                                </motion.div>
                            )}

                            {/* Booking Form */}
                            {!submitSuccess && (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Child Information */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-1">{t('younglearners.form.childName')}</label>
                                            <input
                                                type="text"
                                                id="childName"
                                                name="childName"
                                                value={formData.childName}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-1">{t('younglearners.form.childAge')}</label>
                                            <input
                                                type="text"
                                                id="childAge"
                                                name="childAge"
                                                value={formData.childAge}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Parent Information */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">{t('younglearners.form.parentName')}</label>
                                            <input
                                                type="text"
                                                id="parentName"
                                                name="parentName"
                                                value={formData.parentName}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('younglearners.form.email')}</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{t('younglearners.form.phone')}</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">{t('younglearners.form.level')}</label>
                                            <select
                                                id="level"
                                                name="level"
                                                value={formData.level}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                                            >
                                                <option value="beginner">{t('younglearners.form.level.beginner')}</option>
                                                <option value="elementary">{t('younglearners.form.level.elementary')}</option>
                                                <option value="intermediate">{t('younglearners.form.level.intermediate')}</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('younglearners.form.message')}</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                                        ></textarea>
                                    </div>

                                    {submitError && (
                                        <div className="text-red-600 text-sm">
                                            {submitError}
                                        </div>
                                    )}

                                    <div className="flex justify-center">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-8 rounded-full transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {isSubmitting ? t('younglearners.form.submitting') : t('younglearners.form.submit')}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>

            <Footer />
        </motion.div>
    );
}
