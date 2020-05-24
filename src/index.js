import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// importar o provider aqui, no mais alto nivel
import AuthProvider from './state/Auth/Provider'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

