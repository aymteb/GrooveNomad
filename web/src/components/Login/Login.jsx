import React from 'react'
import { Facebook, Chrome, Apple } from 'lucide-react'
import './Login.css'
import login_img  from '../../assets/login.png'

export default function LoginForm() {
  return (
    <div className="login-container">
      {/* Left Section - Image Background */}
      <div className="login-left">
        <img
          src={login_img}
          alt="GrooveNomad Festival Booth"
          className="login-image"
        />
      </div>

      {/* Right Section - Login Form */}}
      <div className="login-right">
        <div className="login-box">
          <div className="login-header">
            <h1>Connexion</h1>
            <p>
              Vous y êtes enfin!
              <br />
              Toute l'équipe de GrooveNomad est prête à vous offrir le festival que vous méritez!
            </p>
          </div>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Ton email :</label>
              <input id="email" type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Ton mot de passe :</label>
              <input id="password" type="password" placeholder="Mot de passe" />
              <span className="forgot-password">Mot de passe oublié</span>
            </div>
            <button type="submit" className="submit-btn">Se connecter</button>
            <div className="divider">
              <span className="divider-line"></span>
              <span className="divider-text">ou enregistre toi avec</span>
              <span className="divider-line"></span>
            </div>
            <div className="social-buttons">
              <button type="button" className="social-btn">
                <Facebook />
              </button>
              <button type="button" className="social-btn">
                <Chrome />
              </button>
              <button type="button" className="social-btn">
                <Apple />
              </button>
            </div>
            <button type="button" className="create-account">Créer un compte</button>
          </form>
        </div>
      </div>
    </div>
  )
}
