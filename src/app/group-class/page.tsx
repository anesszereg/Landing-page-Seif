'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/context/TranslationContext';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function BookSession() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('overview');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        level: 'beginner',
        message: '',
    });
    const [_isSubmitting, setIsSubmitting] = useState(false);
    const [_submitSuccess, setSubmitSuccess] = useState(false);
    const [_submitError, setSubmitError] = useState('');

    const _handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const _handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        try {
            // Here you would typically send the data to your API
            // For now we'll just simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitSuccess(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                date: '',
                time: '',
                level: 'beginner',
                message: '',
            });
        } catch (error) {
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
            className="font-sans bg-white pt-24 "
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
                            <Link href="/" className="hover:text-yellow-500 transition-colors">{t('groupclass.breadcrumb.home')}</Link>
                            <span className="mx-2">/</span>
                            <span className="text-gray-700">{t('groupclass.breadcrumb.page')}</span>
                        </motion.div>

                        {/* Page Title */}
                        <motion.h1
                            className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                            variants={fadeIn}
                        >
                            {t('groupclass.title')}
                        </motion.h1>
                        <motion.p
                            className="text-black mb-8"
                            variants={fadeIn}
                        >
                            {t('groupclass.subtitle')}
                        </motion.p>
                    </motion.div>

                    {activeTab === 'reviews' && (
                        <motion.div
                            className="mt-10 text-center"
                            variants={fadeIn}
                        >
                            <motion.button
                                onClick={() => setActiveTab('schedule')}
                                className="bg-yellow-400 text-black font-medium py-3 px-8 rounded-full transition-colors"
                                whileHover={{ scale: 1.05, backgroundColor: "#eab308" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {t('groupclass.enroll')}
                            </motion.button>
                        </motion.div>
                    )}
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
                            {t('groupclass.tabs.overview')}
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
                            {t('groupclass.tabs.reviews')}
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
                            {t('groupclass.tabs.schedule')}
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    className="w-full px-4 py-16"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5 }}
                    key={activeTab}
                >
                    {/* Overview Tab Content */}
                    {activeTab === 'overview' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* About this track */}
                            <motion.div
                                className="mb-8"
                                variants={fadeIn}
                            >
                                <motion.h2
                                    className="text-2xl font-bold text-gray-900 mb-3"
                                    variants={fadeIn}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    {t('groupclass.overview.title')}
                                </motion.h2>
                                <motion.p
                                    className="text-gray-700"
                                    variants={fadeIn}
                                >
                                    {t('groupclass.overview.description')}
                                </motion.p>
                            </motion.div>

                            {/* What you'll learn */}
                            <motion.div
                                variants={fadeIn}
                            >
                                <motion.h2
                                    className="text-2xl font-bold text-gray-900 mb-3"
                                    variants={fadeIn}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    {t('groupclass.features.title')}
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
                                        <span className="text-gray-700">{t('groupclass.features.1')}</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-start"
                                        variants={fadeIn}
                                        whileHover={{ x: 5 }}
                                    >
                                        <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-yellow-400 mr-2 mt-0.5" readOnly checked />
                                        <span className="text-gray-700">{t('groupclass.features.2')}</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-start"
                                        variants={fadeIn}
                                        whileHover={{ x: 5 }}
                                    >
                                        <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-yellow-400 mr-2 mt-0.5" readOnly checked />
                                        <span className="text-gray-700">{t('groupclass.features.3')}</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-start"
                                        variants={fadeIn}
                                        whileHover={{ x: 5 }}
                                    >
                                        <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-yellow-400 mr-2 mt-0.5" readOnly checked />
                                        <span className="text-gray-700">{t('groupclass.features.4')}</span>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}

                    {/* Reviews Tab Content */}
                    {activeTab === 'reviews' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Reviews content here */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Review 1 */}
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                    <div className="flex items-center mb-4">
                                        <div className="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center text-xl text-white font-bold mr-3">
                                            S
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-black">{t('groupclass.reviews.name1')}</h3>
                                            <div className="flex text-yellow-400 mt-1">
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-700">
                                        {t('groupclass.reviews.text1')}
                                    </p>
                                </div>

                                {/* Review 2 */}
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                    <div className="flex items-center mb-4">
                                        <div className="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center text-xl text-white font-bold mr-3">
                                            M
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-black">{t('groupclass.reviews.name2')}</h3>
                                            <div className="flex text-yellow-400 mt-1">
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-700">
                                        {t('groupclass.reviews.text2')}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Schedule Tab Content */}
                    {activeTab === 'schedule' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* A1.1 Beginner */}
                                <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
                                    <div className="text-center mb-6">
                                        <h3 className="text-4xl font-bold text-black mb-1">{t('groupclass.level.a1.title')}</h3>
                                        <p className="text-lg text-black mb-2">{t('groupclass.level.a1.subtitle')}</p>
                                        <p className="font-medium text-black">{t('groupclass.level.a1.price')}</p>
                                        <p className="text-xl font-bold mb-2 text-black">{t('groupclass.level.a1.usd')}</p>
                                    </div>

                                    <div className="space-y-3 mb-6 flex-grow">
                                        <div className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{t('groupclass.features.sessions')}</span>
                                        </div>
                                        <div className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{t('groupclass.features.groups')}</span>
                                        </div>
                                        <div className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{t('groupclass.features.dynamic')}</span>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <p className="font-medium mb-2 text-black">{t('groupclass.timeslots.title')}</p>
                                        <div className="flex items-start mb-2">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{t('groupclass.timeslots.one')}</span>
                                        </div>
                                        <div className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{t('groupclass.timeslots.two')}</span>
                                        </div>
                                    </div>

                                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-6 rounded-full transition-colors w-full">
                                        {t('groupclass.enroll')}
                                    </button>
                                </div>

                                {/* A2.1 Elementary */}
                                <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
                                    <div className="text-center mb-6">
                                        <h3 className="text-4xl font-bold text-black mb-1">{t('groupclass.level.a2.title')}</h3>
                                        <p className="text-lg text-black mb-2">{t('groupclass.level.a2.subtitle')}</p>
                                        <p className="font-medium text-black">{t('groupclass.level.a2.price')}</p>
                                        <p className="text-xl font-bold mb-2 text-black">{t('groupclass.level.a2.usd')}</p>
                                    </div>

                                    <div className="space-y-3 mb-6 flex-grow">
                                        <div className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{t('groupclass.features.sessions')}</span>
                                        </div>
                                        <div className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{t('groupclass.features.groups')}</span>
                                        </div>
                                        <div className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{t('groupclass.features.dynamic')}</span>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <p className="font-medium mb-2 text-black">{t('groupclass.timeslots.a2.title')}</p>
                                        <div className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{t('groupclass.timeslots.a2.one')}</span>
                                        </div>
                                    </div>

                                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-6 rounded-full transition-colors w-full">
                                        {t('groupclass.enroll')}
                                    </button>
                                </div>

                                {/* B1.1 Intermediate */}
                                <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
                                    <div className="text-center mb-6">
                                        <h3 className="text-4xl font-bold text-black mb-1">{t('groupclass.level.b1.title')}</h3>
                                        <p className="text-lg text-black mb-2">{t('groupclass.level.b1.subtitle')}</p>
                                        <p className="font-medium text-black">{t('groupclass.level.b1.price')}</p>
                                        <p className="text-xl font-bold mb-2 text-black">{t('groupclass.level.b1.usd')}</p>
                                    </div>

                                    <div className="space-y-3 mb-6 flex-grow">
                                        <div className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{t('groupclass.features.sessions')}</span>
                                        </div>
                                        <div className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{t('groupclass.features.groups')}</span>
                                        </div>
                                        <div className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{t('groupclass.features.dynamic')}</span>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <p className="font-medium mb-2 text-black">{t('groupclass.timeslots.b1.title')}</p>
                                        <div className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{t('groupclass.timeslots.b1.one')}</span>
                                        </div>
                                    </div>

                                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-6 rounded-full transition-colors w-full">
                                        {t('groupclass.enroll')}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
            <Footer />
        </motion.div>
    );
}
