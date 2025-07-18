import React from 'react';
import Header from '../../components/Header/Header';
import './AboutUs.css';
import image1 from '../../assets/festival1.png';
import image2 from '../../assets/festival2.png';
import image3 from '../../assets/festival3.png';
import Contact from './components/Contact';
import image4 from '../../assets/Louis.png';
import image5 from '../../assets/Pierre.png';
import image6 from '../../assets/Evan.png';
import image7 from '../../assets/Ayman.png';
import image8 from '../../assets/Thibaut.png';
import image9 from '../../assets/Nahia.png';
import image10 from '../../assets/PY.png';

const AboutUs = ({ onNavigate }) => {
  return (
    <div>
      <Header onNavigate={onNavigate} />
      <main>
        <div className="image-container">
          <img src={image1} alt="About Us" />
          <img src={image2} alt="About Us" />
          <img src={image3} alt="About Us" />
        </div>
        <div className="text-container">
          <h2>Qui sommes-nous ?</h2>
          <p>
            Groove Nomad, c’est bien plus qu’une agence de voyage : c’est une
            nouvelle façon de vivre la musique partout dans le monde. Notre cœur
            de métier, c’est de réunir en un seul endroit tout ce dont tu as
            besoin pour partir en festival sans stress : une plateforme
            intelligente qui comprend tes goûts musicaux, tes envies de
            découverte et ton budget pour te proposer un séjour sur mesure,
            combinant billets de festival, hébergement, transport et activités
            locales. Grâce à notre technologie et à l’automatisation, on
            simplifie tout ce qui te prenait des heures : comparaisons,
            réservations, devis, relances. Notre promesse : plus de liberté,
            plus de souvenirs, plus de musique, moins de tracas. Derrière Groove
            Nomad, une équipe passionnée met tout en œuvre pour transformer
            chaque voyage en expérience inoubliable.
          </p>
        </div>
        <div className="trombinoscope">
          <div className="trombinoscope-item">
            <img src={image4} alt="Trombinoscope" />
            <p>
              Louis <br /> Linskens
            </p>
          </div>
          <div className="trombinoscope-item">
            <img src={image5} alt="Trombinoscope" />
            <p>
              Pierre <br /> Bouillard
            </p>
          </div>
          <div className="trombinoscope-item">
            <img src={image6} alt="Trombinoscope" />
            <p>
              Evan <br /> Bisiaux
            </p>
          </div>
          <div className="trombinoscope-item">
            <img src={image7} alt="Trombinoscope" />
            <p>
              Ayman <br /> Tebini
            </p>
          </div>
          <div className="trombinoscope-item">
            <img src={image8} alt="Trombinoscope" />
            <p>
              Thibaut <br /> Oulieres
            </p>
          </div>
          <div className="trombinoscope-item">
            <img src={image9} alt="Trombinoscope" />
            <p>
              Nahia <br /> Bidegainberry
            </p>
          </div>
          <div className="trombinoscope-item">
            <img src={image10} alt="Trombinoscope" />
            <p>
              Pierre-Yves <br /> Rousseau
            </p>
          </div>
        </div>
        <div className="text-container">
          <p>
            Derrière Groove Nomad, une équipe de passionnés réunit experts
            voyages, dénicheurs de bons plans, créateurs de communauté et
            technophiles pour transformer chaque festival en aventure unique.
            Ensemble, on partage une vision simple : rendre le voyage musical
            plus libre, plus humain et plus intelligent grâce à la technologie,
            à la personnalisation et à une bonne dose de passion. Chez nous,
            tout est pensé pour que tu profites à fond : moins de stress, plus
            de souvenirs, toujours dans le respect des lieux et des cultures
            qu’on aime découvrir.
          </p>
        </div>
      </main>
      <Contact />
    </div>
  );
};

export default AboutUs;
