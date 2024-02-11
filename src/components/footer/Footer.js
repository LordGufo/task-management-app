import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'rgb(255, 177, 10)',
    color: 'black',
    textAlign: 'center',
    padding: '20px',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  };

  return (
    <footer style={footerStyle}>
      <p>~  Velocizza le tue task in modo più semplice con Swifty!  ~</p>
    </footer>
  );
};

export default Footer;