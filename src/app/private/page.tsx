'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/context/TranslationContext';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function PrivateLessons() {
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
                name: '',
                email: '',
                phone: '',
                date: '',
                time: '',
                level: 'beginner',
                message: '',
            });
        } catch {
            setSubmitError(t('private.schedule.form.error'));
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
                            <Link href="/" className="hover:text-yellow-500 transition-colors">{t('private.breadcrumb.home')}</Link>
                            <span className="mx-2">/</span>
                            <span className="text-gray-700">{t('private.breadcrumb.page')}</span>
                        </motion.div>

                        {/* Page Title */}
                        <motion.h1
                            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                            variants={fadeIn}
                        >
                            {t('private.title')}
                        </motion.h1>
                        <motion.p
                            className="text-black mb-8"
                            variants={fadeIn}
                        >
                            {t('private.subtitle')}
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
                                    {t('private.book.button')}
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
                        className="flex space-x-4  gap-4 md:space-x-8 min-w-max"
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
                            {t('private.tabs.overview')}
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
                            {t('private.tabs.reviews')}
                        </motion.button>
                        <motion.button
                            onClick={() => setActiveTab('faq')}
                            className={`py-4 text-sm font-medium ${activeTab === 'faq' ? 'text-yellow-500' : 'text-black hover:text-gray-700'}`}
                            animate={activeTab === 'faq' ? "active" : "inactive"}
                            initial="inactive"
                            variants={tabVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('private.tabs.faq')}
                        </motion.button>
                        <motion.button
                            onClick={() => setActiveTab('plans')}
                            className={`py-4 text-sm font-medium ${activeTab === 'plans' ? 'text-yellow-500' : 'text-black hover:text-gray-700'}`}
                            animate={activeTab === 'plans' ? "active" : "inactive"}
                            initial="inactive"
                            variants={tabVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('private.tabs.plans')}
                        </motion.button>
                        {/* <motion.button
                            onClick={() => setActiveTab('schedule')}
                            className={`py-4 text-sm font-medium ${activeTab === 'schedule' ? 'text-yellow-500' : 'text-black hover:text-gray-700'}`}
                            animate={activeTab === 'schedule' ? "active" : "inactive"}
                            initial="inactive"
                            variants={tabVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('private.tabs.schedule')}
                        </motion.button> */}
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
                            variants={fadeIn}
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
                                >
                                    {t('private.overview.about.title')}
                                </motion.h2>
                                <motion.p
                                    className="text-gray-700"
                                    variants={fadeIn}
                                >
                                    {t('private.overview.about.description')}
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
                                >
                                    {t('private.overview.benefits.title')}
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
                                        <span className="text-gray-700">{t('private.overview.benefits.item1')}</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-start"
                                        variants={fadeIn}
                                        whileHover={{ x: 5 }}
                                    >
                                        <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-yellow-400 mr-2 mt-0.5" readOnly checked />
                                        <span className="text-gray-700">{t('private.overview.benefits.item2')}</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-start"
                                        variants={fadeIn}
                                        whileHover={{ x: 5 }}
                                    >
                                        <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-yellow-400 mr-2 mt-0.5" readOnly checked />
                                        <span className="text-gray-700">{t('private.overview.benefits.item3')}</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-start"
                                        variants={fadeIn}
                                        whileHover={{ x: 5 }}
                                    >
                                        <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-yellow-400 mr-2 mt-0.5" readOnly checked />
                                        <span className="text-gray-700">{t('private.overview.benefits.item4')}</span>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}

                    {activeTab === 'reviews' && (
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('private.reviews.title')}</h2>

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
                                    <p className="text-gray-700 italic mb-4">&quot;{t('private.reviews.review1.text')}&quot;</p>
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                                        <div className="ml-3">
                                            <p className="font-medium text-gray-800">{t('private.reviews.review1.name')}</p>
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
                                    <p className="text-gray-700 italic mb-4">&quot;{t('private.reviews.review2.text')}&quot;</p>
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                                        <div className="ml-3">
                                            <p className="font-medium text-gray-800">{t('private.reviews.review2.name')}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Review 3 */}
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5" fill={i < 4 ? "currentColor" : "none"} stroke={i < 4 ? "none" : "currentColor"} viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic mb-4">&quot;{t('private.reviews.review3.text')}&quot;</p>
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                                        <div className="ml-3">
                                            <p className="font-medium text-gray-800">{t('private.reviews.review3.name')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                   
                    {activeTab === 'plans' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('private.plans.title')}</h2>
                            <p className="text-xl font-medium text-gray-700 mb-8">{t('private.plans.subtitle')}</p>

                            {/* Plans Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Package 1 */}
                                <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{t('private.plans.package1.title')}</h3>
                                        <div className="text-yellow-500 text-2xl font-bold mb-1">{t('private.plans.package1.price')}</div>
                                        <div className="text-black mb-4">{t('private.plans.package1.usd')}</div>
                                        <p className="text-black     mb-4">{t('private.plans.package1.description')}</p>
                                        <ul className="space-y-2 mb-6">
                                            {(t('private.plans.package1.features', { returnObjects: true }) as unknown as string[]).map((feature: string, index: number) => (
                                                <li key={index} className="flex items-start">
                                                    <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className='text-gray-500' >{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Package 2 */}
                                <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{t('private.plans.package2.title')}</h3>
                                        <div className="text-yellow-500 text-2xl font-bold mb-1">{t('private.plans.package2.price')}</div>
                                        <div className="text-gray-600 mb-4">{t('private.plans.package2.usd')}</div>
                                        <p className="text-gray-700 mb-4">{t('private.plans.package2.description')}</p>
                                        <ul className="space-y-2 mb-6">
                                            {(t('private.plans.package2.features', { returnObjects: true }) as unknown as string[]).map((feature: string, index: number) => (
                                                <li key={index} className="flex items-start">
                                                    <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className='text-gray-500'>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Package 3 */}
                                <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{t('private.plans.package3.title')}</h3>
                                        <div className="text-yellow-500 text-2xl font-bold mb-1">{t('private.plans.package3.price')}</div>
                                        <div className="text-gray-600 mb-4">{t('private.plans.package3.usd')}</div>
                                        <p className="text-black mb-4">{t('private.plans.package3.description')}</p>
                                        <ul className="space-y-2 mb-6">
                                            {(t('private.plans.package3.features', { returnObjects: true }) as unknown as string[]).map((feature: string, index: number) => (
                                                <li key={index} className="flex items-start">
                                                    <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className='text-gray-500'>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Book Trial Button */}
                            {/* <div className="flex justify-center mt-8">
                                <motion.button
                                    onClick={() => setActiveTab('schedule')}
                                    className="bg-yellow-400 text-black font-medium py-3 px-8 rounded-full transition-colors"
                                    whileHover={{ scale: 1.05, backgroundColor: "#eab308" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {t('private.plans.trialbutton')}
                                </motion.button>
                            </div> */}
                        </motion.div>
                    )}

                    {activeTab === 'faq' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('private.faq.title')}</h2>
                            
                            <div className="space-y-6">
                                {/* FAQ Item 1 */}
                                <div className="border-b border-gray-200 pb-4">
                                    <h3 className="text-xl font-medium text-gray-900 mb-2">{t('private.faq.q1')}</h3>
                                    <p className="text-gray-700">{t('private.faq.a1')}</p>
                                </div>

                                {/* FAQ Item 2 */}
                                <div className="border-b border-gray-200 pb-4">
                                    <h3 className="text-xl font-medium text-gray-900 mb-2">{t('private.faq.q2')}</h3>
                                    <p className="text-gray-700">{t('private.faq.a2')}</p>
                                </div>

                                {/* FAQ Item 3 */}
                                <div className="border-b border-gray-200 pb-4">
                                    <h3 className="text-xl font-medium text-gray-900 mb-2">{t('private.faq.q3')}</h3>
                                    <p className="text-gray-700">{t('private.faq.a3')}</p>
                                </div>

                                {/* FAQ Item 4 */}
                                <div className="border-b border-gray-200 pb-4">
                                    <h3 className="text-xl font-medium text-gray-900 mb-2">{t('private.faq.q4')}</h3>
                                    <p className="text-gray-700">{t('private.faq.a4')}</p>
                                </div>

                                {/* FAQ Item 5 */}
                                <div className="border-b border-gray-200 pb-4">
                                    <h3 className="text-xl font-medium text-gray-900 mb-2">{t('private.faq.q5')}</h3>
                                    <p className="text-gray-700">{t('private.faq.a5')}</p>
                                </div>

                                {/* FAQ Item 6 */}
                                <div className="border-b border-gray-200 pb-4">
                                    <h3 className="text-xl font-medium text-gray-900 mb-2">{t('private.faq.q6')}</h3>
                                    <p className="text-gray-700">{t('private.faq.a6')}</p>
                                </div>

                                {/* FAQ Item 7 */}
                                <div className="border-b border-gray-200 pb-4">
                                    <h3 className="text-xl font-medium text-gray-900 mb-2">{t('private.faq.q7')}</h3>
                                    <p className="text-gray-700">{t('private.faq.a7')}</p>
                                </div>

                                {/* FAQ Item 8 */}
                                <div className="border-b border-gray-200 pb-4">
                                    <h3 className="text-xl font-medium text-gray-900 mb-2">{t('private.faq.q8')}</h3>
                                    <p className="text-gray-700">{t('private.faq.a8')}</p>
                                </div>
                            </div>
                            
                            {/* Schedule Button */}
                            <div className="flex justify-center mt-8">
                                <motion.button
                                    onClick={() => setActiveTab('schedule')}
                                    className="bg-yellow-400 text-black font-medium py-3 px-8 rounded-full transition-colors"
                                    whileHover={{ scale: 1.05, backgroundColor: "#eab308" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {t('private.faq.schedulebutton')}
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>

            <Footer />
        </motion.div>
    );
}
