import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Auth0Provider
    domain="dev-njrk6jem4vh1fqml.us.auth0.com"
    clientId="0u6TQqXPzpaZy1Tw0ABtmO8cl4Z7z0fK"
    authorizationParams={{
      redirect_uri: "https://pet-veterinary-self.vercel.app/dashboard"
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);

reportWebVitals();
