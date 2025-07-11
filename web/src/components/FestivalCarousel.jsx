import React, { useState } from 'react';

// Example festival data
const festivals = [
    {
        id: 1,
        name: 'Sunshine Festival',
        location: 'California, USA',
        date: '2024-07-15',
        description: 'A vibrant celebration of music and sunshine in California.',
        image: 'https://i.ytimg.com/vi/jkK7SAkZGTk/sddefault.jpg',
    },
    {
        id: 2,
        name: 'Groove Nights',
        location: 'Berlin, Germany',
        date: '2024-08-10',
        description: 'Berlin’s best electronic music festival under the stars.',
        image: 'https://cdn.prod.website-files.com/61ca202c21faec1a3d1b4937/65f27783ca1eef0adf597c18_bvx%20cfv.png',
    },
    {
        id: 3,
        name: 'Rhythm Valley',
        location: 'Tokyo, Japan',
        date: '2024-09-05',
        description: 'Experience the rhythm of Tokyo with world-class artists.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3Pg2G7LLVPkzPBTwf-As-Nn8gMDFfM2ZNQ&s',
    },
];

const primaryBlue = 'var(--primary-blue, #007bff)';

const FestivalCarousel = () => {
    const [current, setCurrent] = useState(0);

    const prevFestival = () => {
        setCurrent((prev) => (prev === 0 ? festivals.length - 1 : prev - 1));
    };

    const nextFestival = () => {
        setCurrent((prev) => (prev === festivals.length - 1 ? 0 : prev + 1));
    };

    const festival = festivals[current];

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                maxWidth: 700,
                height: 400,
                margin: '0 auto',
                borderRadius: 20,
                overflow: 'hidden',
                boxShadow: '0 4px 32px rgba(0,0,0,0.15)',
                background: `url(${festival.image}) center center/cover no-repeat`,
            }}
        >
            {/* Glass name top left */}
            <div
                style={{
                    position: 'absolute',
                    top: 24,
                    left: 24,
                    padding: '12px 24px',
                    borderRadius: 16,
                    background: 'rgba(255,255,255,0.25)',
                    backdropFilter: 'blur(8px)',
                    color: '#222',
                    fontWeight: 700,
                    fontSize: 24,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}
            >
                {festival.name}
            </div>

            {/* Description right */}
            <div
                style={{
                    position: 'absolute',
                    top: 40,
                    right: 24,
                    width: 260,
                    minHeight: 120,
                    padding: '20px 24px',
                    borderRadius: 18,
                    background: 'rgba(255,255,255,0.18)',
                    backdropFilter: 'blur(12px)',
                    color: '#222',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                }}
            >
                <div style={{ fontWeight: 600, fontSize: 18 }}>{festival.location}</div>
                <div style={{ fontSize: 15, opacity: 0.8 }}>{festival.date}</div>
                <div style={{ fontSize: 15 }}>{festival.description}</div>
            </div>

            {/* Carousel buttons bottom left */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 24,
                    left: 24,
                    display: 'flex',
                    gap: 12,
                }}
            >
                {festivals.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        style={{
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            background: idx === current ? primaryBlue : '#fff',
                            color: idx === current ? '#fff' : primaryBlue,
                            fontWeight: 700,
                            fontSize: 18,
                            cursor: 'pointer',
                            transition: 'background 0.2s, color 0.2s',
                            outline: 'none',
                            boxShadow: idx === current ? '0 2px 8px rgba(0,0,0,0.10)' : 'none',
                        }}
                        aria-label={`Go to festival ${idx + 1}`}
                    >
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FestivalCarousel;