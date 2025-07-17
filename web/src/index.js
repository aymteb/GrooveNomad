import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/fonts.css';
import './styles/colors.css';
import './styles/tailwind.css';

/* global document */
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
