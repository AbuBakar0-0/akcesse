import React from 'react'
import express from '../assets/services/express.png';
import figma from '../assets/services/figma.png';
import flutter from '../assets/services/flutter.png';
import illustrator from '../assets/services/illustrator.png';
import mongo from '../assets/services/mongo.png';
import nodejs from '../assets/services/nodejs.png';
import photoshop from '../assets/services/photoshop.png';
import php from '../assets/services/php.png';
import reactimg from '../assets/services/react.png';
import wordpress from '../assets/services/wordpress.png';
import postgres from '../assets/services/postgres.png';
import golang from '../assets/services/golang.png';

function ServiceCard() {
    const data = [
        {
            title: "Mongo DB",
            image: mongo
        },
        {
            title: "Express",
            image: express
        },
        {
            title: "React JS/Native",
            image: reactimg
        },
        {
            title: "Node JS",
            image: nodejs
        },
        {
            title: "Flutter",
            image: flutter
        },
        {
            title: "Postgres",
            image: postgres
        },
        {
            title: "Golang",
            image: golang
        },
        {
            title: "PHP",
            image: php
        },
        {
            title: "Wordpress",
            image: wordpress
        },
        {
            title: "Figma",
            image: figma
        },
        {
            title: "Illustrator",
            image: illustrator
        },
        {
            title: "Photoshop",
            image: photoshop
        },
    ]

    return (
        <>
            {data.map((item) => (
                <div className='w-56 h-56 bg-white bg-opacity-10 rounded-3xl p-10 text-white text-center flex flex-col justify-between items-center'>
                    <img src={item.image} alt="" className='w-20 h-auto' />
                    <p>{item.title}</p>
                </div>
            ))}
        </>
    )
}

export default ServiceCard