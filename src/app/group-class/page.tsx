'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/context/TranslationContext';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function BookSession() {
    const {  tReact } = useTranslation();
    const [activeTab, setActiveTab] = useState('overview');
    // Form state and handlers removed as they're not being used in this component

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
            className="font-sans text-black bg-white pt-24 "
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
                            <Link href="/" className="hover:text-yellow-500 transition-colors">{tReact('groupclass.breadcrumb.home')}</Link>
                            <span className="mx-2">/</span>
                            <span className="text-gray-700">{tReact('groupclass.breadcrumb.page')}</span>
                        </motion.div>

                        {/* Page Title */}
                        <motion.h1
                            className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                            variants={fadeIn}
                        >
                            {tReact('groupclass.title')}
                        </motion.h1>
                        <motion.p
                            className="text-black mb-8"
                            variants={fadeIn}
                        >
                            {tReact('groupclass.subtitle')}
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
                                {tReact('groupclass.enroll')}
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
                            {tReact('groupclass.tabs.overview')}
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
                            {tReact('groupclass.tabs.plans')}
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
                            {tReact('groupclass.tabs.faq')}
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
                            {tReact('groupclass.tabs.reviews')}
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
                            {tReact('groupclass.tabs.schedule')}
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
                                    {tReact('groupclass.overview.title')}
                                </motion.h2>
                                <motion.p
                                    className="text-gray-700"
                                    variants={fadeIn}
                                >
                                    {tReact('groupclass.overview.description')}
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
                                    {tReact('groupclass.features.title')}
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
                                        <span className="text-gray-700">{tReact('groupclass.features.1')}</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-start"
                                        variants={fadeIn}
                                        whileHover={{ x: 5 }}
                                    >
                                        <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-yellow-400 mr-2 mt-0.5" readOnly checked />
                                        <span className="text-gray-700">{tReact('groupclass.features.2')}</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-start"
                                        variants={fadeIn}
                                        whileHover={{ x: 5 }}
                                    >
                                        <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-yellow-400 mr-2 mt-0.5" readOnly checked />
                                        <span className="text-gray-700">{tReact('groupclass.features.3')}</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-start"
                                        variants={fadeIn}
                                        whileHover={{ x: 5 }}
                                    >
                                        <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-yellow-400 mr-2 mt-0.5" readOnly checked />
                                        <span className="text-gray-700">{tReact('groupclass.features.4')}</span>
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
                                            <h3 className="font-medium text-black">{tReact('groupclass.reviews.name1')}</h3>
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
                                        {tReact('groupclass.reviews.text1')}
                                    </p>
                                </div>

                                {/* Review 2 */}
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                    <div className="flex items-center mb-4">
                                        <div className="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center text-xl text-white font-bold mr-3">
                                            M
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-black">{tReact('groupclass.reviews.name2')}</h3>
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
                                        {tReact('groupclass.reviews.text2')}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Schedule Tab Content */}
                    {/* Plans Tab Content */}
                    {activeTab === 'plans' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white w-full py-6"
                        >
                            <motion.div
                                className="mb-8 text-center"
                                variants={fadeIn}
                            >
                                <motion.h2
                                    className="text-3xl font-bold text-gray-900 mb-3"
                                    variants={fadeIn}
                                >
                                    {tReact('groupclass.plans.title')}
                                </motion.h2>
                                <motion.p
                                    className="text-gray-700"
                                    variants={fadeIn}
                                >
                                    {tReact('groupclass.plans.subtitle')}
                                </motion.p>
                            </motion.div>

                            {/* Plans Packages */}
                            <motion.div 
                                className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8"
                                variants={staggerContainer}
                            >
                                {/* Package 1 */}
                                <motion.div
                                    className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col"
                                    variants={fadeIn}
                                    whileHover={{ y: -5 }}
                                >
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tReact('groupclass.plans.package1.title')}</h3>
                                    <p className="text-yellow-500 font-bold mb-1">{tReact('groupclass.plans.package1.price')}</p>
                                    <p className="text-sm text-gray-500 mb-4">{tReact('groupclass.plans.package1.usd')}</p>
                                    <p className="text-gray-700 mb-4">{tReact('groupclass.plans.package1.description')}</p>
                                    <ul className="list-none space-y-2 mb-6 flex-grow">
                                        {(() => {
                                            const features = tReact('groupclass.plans.package1.features', { returnObjects: true });
                                            return Array.isArray(features)
                                                ? features.map((feature: string, index: number) => (
                                                    <li key={index} className="flex items-center">
                                                        <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        {feature}
                                                    </li>
                                                ))
                                                : <li className="flex items-center">{tReact('groupclass.plans.package1.features')}</li>
                                        })()
                                        }
                                    </ul>
                                    <motion.button
                                        onClick={() => setActiveTab('schedule')}
                                        className="mt-auto w-full bg-yellow-400 text-black font-medium py-2 rounded-full transition-colors text-center"
                                        whileHover={{ scale: 1.03, backgroundColor: "#eab308" }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        {tReact('groupclass.plans.trialbutton')}
                                    </motion.button>
                                </motion.div>

                                {/* Package 2 */}
                                <motion.div
                                    className="bg-white border border-yellow-400 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col relative overflow-hidden"
                                    variants={fadeIn}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="absolute -top-1 -right-12 bg-yellow-400 text-black px-10 py-1 rotate-45 transform text-xs font-bold">
                                        Popular
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tReact('groupclass.plans.package2.title')}</h3>
                                    <p className="text-yellow-500 font-bold mb-1">{tReact('groupclass.plans.package2.price')}</p>
                                    <p className="text-sm text-gray-500 mb-4">{tReact('groupclass.plans.package2.usd')}</p>
                                    <p className="text-gray-700 mb-4">{tReact('groupclass.plans.package2.description')}</p>
                                    <ul className="list-none space-y-2 mb-6 flex-grow">
                                        {(() => {
                                            const features = tReact('groupclass.plans.package2.features', { returnObjects: true });
                                            return Array.isArray(features)
                                                ? features.map((feature: string, index: number) => (
                                                    <li key={index} className="flex items-center">
                                                        <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        {feature}
                                                    </li>
                                                ))
                                                : <li className="flex items-center">{tReact('groupclass.plans.package2.features')}</li>
                                        })()
                                        }
                                    </ul>
                                    <motion.button
                                        onClick={() => setActiveTab('schedule')}
                                        className="mt-auto w-full bg-yellow-400 text-black font-medium py-2 rounded-full transition-colors text-center"
                                        whileHover={{ scale: 1.03, backgroundColor: "#eab308" }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        {tReact('groupclass.plans.trialbutton')}
                                    </motion.button>
                                </motion.div>

                                {/* Package 3 */}
                                <motion.div
                                    className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col"
                                    variants={fadeIn}
                                    whileHover={{ y: -5 }}
                                >
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tReact('groupclass.plans.package3.title')}</h3>
                                    <p className="text-yellow-500 font-bold mb-1">{tReact('groupclass.plans.package3.price')}</p>
                                    <p className="text-sm text-gray-500 mb-4">{tReact('groupclass.plans.package3.usd')}</p>
                                    <p className="text-gray-700 mb-4">{tReact('groupclass.plans.package3.description')}</p>
                                    <ul className="list-none space-y-2 mb-6 flex-grow">
                                        {(() => {
                                            const features = tReact('groupclass.plans.package3.features', { returnObjects: true });
                                            return Array.isArray(features)
                                                ? features.map((feature: string, index: number) => (
                                                    <li key={index} className="flex items-center">
                                                        <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        {feature}
                                                    </li>
                                                ))
                                                : <li className="flex items-center">{tReact('groupclass.plans.package3.features')}</li>
                                        })()
                                        }
                                    </ul>
                                    <motion.button
                                        onClick={() => setActiveTab('schedule')}
                                        className="mt-auto w-full bg-yellow-400 text-black font-medium py-2 rounded-full transition-colors text-center"
                                        whileHover={{ scale: 1.03, backgroundColor: "#eab308" }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        {tReact('groupclass.plans.trialbutton')}
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}

                    {/* FAQ Tab Content */}
                    {activeTab === 'faq' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white w-full py-6"
                        >
                            <motion.div
                                className="mb-12 text-center"
                                variants={fadeIn}
                            >
                                <motion.h2
                                    className="text-3xl font-bold text-gray-900 mb-3"
                                    variants={fadeIn}
                                >
                                    {tReact('groupclass.faq.title')}
                                </motion.h2>
                            </motion.div>

                            <div className="max-w-3xl mx-auto space-y-6">
                                {/* FAQ Item 1 */}
                                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">{tReact('groupclass.faq.q1')}</h3>
                                    <p className="text-gray-700">{tReact('groupclass.faq.a1')}</p>
                                </div>

                                {/* FAQ Item 2 */}
                                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">{tReact('groupclass.faq.q2')}</h3>
                                    <p className="text-gray-700">{tReact('groupclass.faq.a2')}</p>
                                </div>

                                {/* FAQ Item 3 */}
                                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">{tReact('groupclass.faq.q3')}</h3>
                                    <p className="text-gray-700">{tReact('groupclass.faq.a3')}</p>
                                </div>

                                {/* FAQ Item 4 */}
                                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">{tReact('groupclass.faq.q4')}</h3>
                                    <p className="text-gray-700">{tReact('groupclass.faq.a4')}</p>
                                </div>

                                {/* FAQ Item 5 */}
                                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">{tReact('groupclass.faq.q5')}</h3>
                                    <p className="text-gray-700">{tReact('groupclass.faq.a5')}</p>
                                </div>

                                {/* FAQ Item 6 */}
                                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">{tReact('groupclass.faq.q6')}</h3>
                                    <p className="text-gray-700">{tReact('groupclass.faq.a6')}</p>
                                </div>

                                {/* FAQ Item 7 */}
                                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">{tReact('groupclass.faq.q7')}</h3>
                                    <p className="text-gray-700">{tReact('groupclass.faq.a7')}</p>
                                </div>

                                <div className="text-center mt-12">
                                    <motion.button
                                        onClick={() => setActiveTab('schedule')}
                                        className="bg-yellow-400 text-black font-medium py-3 px-8 rounded-full transition-colors inline-block"
                                        whileHover={{ scale: 1.03, backgroundColor: "#eab308" }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        {tReact('groupclass.faq.schedulebutton')}
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    )}

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
                                        <h3 className="text-4xl font-bold text-black mb-1">{tReact('groupclass.level.a1.title')}</h3>
                                        <p className="text-lg text-black mb-2">{tReact('groupclass.level.a1.subtitle')}</p>
                                        <p className="font-medium text-black">{tReact('groupclass.level.a1.price')}</p>
                                        <p className="text-xl font-bold mb-2 text-black">{tReact('groupclass.level.a1.usd')}</p>
                                    </div>

                                    <div className="space-y-3 mb-6 flex-grow">
                                        <div className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{tReact('groupclass.features.sessions')}</span>
                                        </div>
                                        <div className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{tReact('groupclass.features.groups')}</span>
                                        </div>
                                        <div className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{tReact('groupclass.features.dynamic')}</span>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <p className="font-medium mb-2 text-black">{tReact('groupclass.timeslots.title')}</p>
                                        <div className="flex items-start mb-2">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{tReact('groupclass.timeslots.one')}</span>
                                        </div>
                                        <div className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{tReact('groupclass.timeslots.two')}</span>
                                        </div>
                                    </div>

                                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-6 rounded-full transition-colors w-full">
                                        {tReact('groupclass.enroll')}
                                    </button>
                                </div>

                                {/* A2.1 Elementary */}
                                <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
                                    <div className="text-center mb-6">
                                        <h3 className="text-4xl font-bold text-black mb-1">{tReact('groupclass.level.a2.title')}</h3>
                                        <p className="text-lg text-black mb-2">{tReact('groupclass.level.a2.subtitle')}</p>
                                        <p className="font-medium text-black">{tReact('groupclass.level.a2.price')}</p>
                                        <p className="text-xl font-bold mb-2 text-black">{tReact('groupclass.level.a2.usd')}</p>
                                    </div>

                                    <div className="space-y-3 mb-6 flex-grow">
                                        <div className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{tReact('groupclass.features.sessions')}</span>
                                        </div>
                                        <div className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{tReact('groupclass.features.groups')}</span>
                                        </div>
                                        <div className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{tReact('groupclass.features.dynamic')}</span>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <p className="font-medium mb-2 text-black">{tReact('groupclass.timeslots.a2.title')}</p>
                                        <div className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{tReact('groupclass.timeslots.a2.one')}</span>
                                        </div>
                                    </div>

                                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-6 rounded-full transition-colors w-full">
                                        {tReact('groupclass.enroll')}
                                    </button>
                                </div>

                                {/* B1.1 Intermediate */}
                                <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
                                    <div className="text-center mb-6">
                                        <h3 className="text-4xl font-bold text-black mb-1">{tReact('groupclass.level.b1.title')}</h3>
                                        <p className="text-lg text-black mb-2">{tReact('groupclass.level.b1.subtitle')}</p>
                                        <p className="font-medium text-black">{tReact('groupclass.level.b1.price')}</p>
                                        <p className="text-xl font-bold mb-2 text-black">{tReact('groupclass.level.b1.usd')}</p>
                                    </div>

                                    <div className="space-y-3 mb-6 flex-grow">
                                        <div className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{tReact('groupclass.features.sessions')}</span>
                                        </div>
                                        <div className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{tReact('groupclass.features.groups')}</span>
                                        </div>
                                        <div className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{tReact('groupclass.features.dynamic')}</span>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <p className="font-medium mb-2 text-black">{tReact('groupclass.timeslots.b1.title')}</p>
                                        <div className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-black">{tReact('groupclass.timeslots.b1.one')}</span>
                                        </div>
                                    </div>

                                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-6 rounded-full transition-colors w-full">
                                        {tReact('groupclass.enroll')}
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
