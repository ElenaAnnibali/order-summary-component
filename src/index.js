import './index.css';
/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        body {
          margin: 0;
          font-family: 'RedHatDisplay', Georgia, serif;
          color: #7280a7;
          background-color: #e0e8ff;
          font-size: 16px;
          font-weight: 700;
          line-height: 150%;
        }
        *,
        ::before,
        ::after {
          box-sizing: border-box;
        }
      `}
    />
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
