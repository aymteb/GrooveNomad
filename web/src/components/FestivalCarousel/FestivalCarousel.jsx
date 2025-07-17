"use client"

import React from "react"
import { useState, useEffect } from "react"
import "./FestivalCarousel.css"

import tommorowlandBg from '../../assets/tommorowland.png';
import coachellaBg from '../../assets/Coachella.png';
import fullmoonBg from '../../assets/fullmon.png';

const festivals = [
  {
    id: 1,
    title: "TOMORROWLAND",
    description: "Tomorrowland est prêt à ouvrir un tout nouveau monde dans le magnifique paysage de De Schorre à Boom (Belgique) cet été. Le tout nouveau thème du festival 'Orbyz', situé dans un univers magique entièrement fait de glace, révélera une communauté cachée qui existe sous une gigantesque calotte glaciaire depuis de nombreuses années. Une fois que la masse de glace et les glaciers commencent à fondre, la communauté indigène remonte à la surface, consistant en une source unique de lumière, d'énergie et de puissance qui provient de cristaux et de roches puissantes de couleur rouge.",
    image: tommorowlandBg,
  },
  {
    id: 2,
    title: "COACHELLA",
    description: "Coachella est un festival annuel de musique et d'arts qui se tient à l'Empire Polo Club à Indio, en Californie, dans la vallée de Coachella dans le désert du Colorado. Il a été co-fondé par Paul Tollett et Rick Van Santen en 1999, et est organisé par Goldenvoice, une filiale d'AEG Presents. L'événement présente des artistes musicaux de nombreux genres musicaux, y compris le rock, la pop, l'indie, le hip-hop et la musique électronique, ainsi que des installations artistiques et des sculptures. À travers les terrains, plusieurs scènes accueillent en continu de la musique live.",
    image: coachellaBg,
  },
  {
    id: 3,
    title: "FULL MOON PARTY",
    description: "La Full Moon Party se présente comme la fête sur la plage la plus emblématique de Thaïlande et l'une des fêtes sur la plage les plus célèbres au monde. Cela se produit chaque mois sur la plage de Haad Rin sur l'île de Koh Phangan, attirant des milliers de voyageurs de tous les coins du globe. Une fois que le soleil se couche, la plage de Haad Rin se transforme en un terrain de jeu palpitant de musique live, de lumières et d'énergie. La plage se remplit de systèmes sonores, chacun jouant des styles musicaux différents—des succès commerciaux et de l'EDM au reggae, à la drum and bass et à la techno.",
    image: fullmoonBg,
  },
]
export default function FestivalCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % festivals.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="festival-carousel">
      {/* Carousel Content */}
      <div className="carousel-content">
        <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {festivals.map((festival) => (
            <div
              key={festival.id}
              className="carousel-slide"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${festival.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Festival Title Container - Top Left with Glass Effect */}
              <div className="festival-title-container glass-effect">
                <div className="festival-title">{festival.title}</div>
              </div>

              {/* Festival Description Container - Bottom Right with Glass Effect */}
              <div className="festival-description-container glass-effect">
                <div className="festival-description">{festival.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots Container - Bottom Left with Glass Effect */}
        <div className="carousel-dots-container">
          <div className="carousel-dots">
            {festivals.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
