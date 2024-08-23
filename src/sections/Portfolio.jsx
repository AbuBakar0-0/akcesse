import React, { useState } from 'react';

import froggit from '../assets/portfolio/froggit.png';
import urbanloop from '../assets/portfolio/urbanloop.png';
import comerzio from '../assets/portfolio/comerzio.png';
import zelly from '../assets/portfolio/zelly.png';
import fypms from '../assets/portfolio/fypms.png';
import concluons from '../assets/portfolio/concluons.png';
import expresslab from '../assets/portfolio/expresslab.png';
import tss from '../assets/portfolio/tss.png';
import bcs from '../assets/portfolio/bcs.png';
import lys from '../assets/portfolio/lys.png';
import bvc from '../assets/portfolio/bvc.png';
import globesity from '../assets/portfolio/globesity.png';
import fms from '../assets/portfolio/fms.png';
import auraq from '../assets/portfolio/auraq.png';

const Portfolio = () => {

    const portfolioData = {
        all: [
            { title: 'Froggit', url: 'https://froggit.akcesse.com/', image: froggit },
            { title: 'Urbanloop', url: 'https://www.urbanloop.tech/', image: urbanloop },
            { title: 'Comerzio', url: 'https://comerzio.fly.dev/', image: comerzio },
            { title: 'Zelly', url: 'https://github.com/AbuBakar0-0/zelly', image: zelly },
            { title: 'FYP MS', url: 'https://github.com/AbuBakar0-0/Fyp-Management-System', image: fypms },
            { title: 'Concluons', url: 'https://concluons.com/', image: concluons },
            { title: 'ExpressWelnessLab', url: 'https://expresswellnesslab.com/', image: expresslab },
            { title: 'Total Screening Solutions', url: 'https://tss.akcesse.com/', image: tss },
            { title: 'Billing Care Solutions', url: 'https://bcs.akcesse.com/', image: bcs },
            { title: 'Lead Your School', url: 'https://leadyourschool.com/', image: lys },
            { title: 'Business Value Calculator', url: 'https://businessvaluecalculator.com/', image: bvc },
            { title: 'Globesity Foundation', url: 'https://github.com/AbuBakar0-0/globesity_foundation_app', image: globesity },
            { title: 'Folder Management System', url: 'https://github.com/AbuBakar0-0/biit_fms', image: fms },
            { title: 'Auraaq Publications', url: 'https://github.com/AbuBakar0-0/snips/auraq/auraq_publications', image: auraq },
        ],
        mern: [
            { title: 'Froggit', url: 'https://froggit.urbanloop.tech/', image: froggit },
            { title: 'Urbanloop', url: 'https://www.urbanloop.tech/', image: urbanloop },
            { title: 'Comerzio', url: 'https://comerzio.fly.dev/', image: comerzio },
            { title: 'Zelly', url: 'https://github.com/AbuBakar0-0/zelly', image: zelly },
            { title: 'FYP MS', url: 'https://github.com/AbuBakar0-0/Fyp-Management-System', image: fypms },
        ],
        wordpress: [
            { title: 'Concluons', url: 'https://concluons.com/', image: concluons },
            { title: 'ExpressWelnessLab', url: 'https://expresswellnesslab.com/', image: expresslab },
            { title: 'Total Screening Solutions', url: 'https://tss.akcesse.com/', image: tss },
            { title: 'Billing Care Solutions', url: 'https://bcs.akcesse.com/', image: bcs },
            { title: 'Lead Your School', url: 'https://leadyourschool.com/', image: lys },
            { title: 'Business Value Calculator', url: 'https://businessvaluecalculator.com/', image: bvc },
        ],
        flutter: [
            { title: 'Globesity Foundation', url: 'https://github.com/AbuBakar0-0/globesity_foundation_app', image: globesity },
            { title: 'Folder Management System', url: 'https://github.com/AbuBakar0-0/biit_fms', image: fms },
            { title: 'Auraaq Publications', url: 'https://github.com/AbuBakar0-0/snips/auraq/auraq_publications', image: auraq },
        ],
    };

    const categories = [
        {
            key: "all",
            name: "All"
        },
        {
            key: "mern",
            name: "MERN STACK"
        },
        {
            key: "wordpress",
            name: "Wordpress / PHP"
        },
        {
            key: "flutter",
            name: "Flutter"
        },
    ]

    const [activeTab, setActiveTab] = useState('all');
    const [showMore, setShowMore] = useState(false);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setShowMore(false);
    };

    const currentData = portfolioData[activeTab] || [];

    const displayData = showMore ? currentData : currentData.slice(0, 6);

    return (
        <>
            <div id='portfolio'>
                <p className='text-white text-5xl font-bold'>Portfolio</p>
                <section className="my-10">
                    <div className="flex flex-wrap gap-4 mb-6 justify-center items-center">
                        {categories.map((tab) => (
                            <button key={tab.key} onClick={() => handleTabClick(tab.key.toLowerCase().replace(' ', ''))}
                                className={`w-full md:w-44 h-20 md:h-14 px-4 py-2 font-semibold ${activeTab === tab.key.toLowerCase().replace(' ', '') ? 'bg-gradient-to-r from-primary to-secondary text-white' : 'bg-gray-200'} rounded`} >
                                {tab.name}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayData.map((project, index) => (
                            <a href={project.url}>
                                <div key={index} className="bg-white bg-opacity-10 rounded-xl shadow-md hover:scale-105 transition-all flex flex-col justify-center items-center">
                                    <img src={project.image} alt={project.title} className='rounded-t-xl bg-white px-10 py-3' />
                                    <h3 className="bg-transparent text-xl font-semibold text-center text-white my-4 ">{project.title}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className='w-full flex justify-center items-center '>
                        {currentData.length > 6 && (
                            <button onClick={() => setShowMore(!showMore)} className="mt-10 px-6 py-3 text-2xl bg-gradient-to-r from-primary to-secondary text-white rounded"         >
                                {showMore ? 'Show Less' : 'Show More'}
                            </button>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Portfolio;
