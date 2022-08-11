import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Layout } from './Layout';
import AOS from 'aos'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

AOS.init();

root.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);

reportWebVitals();
