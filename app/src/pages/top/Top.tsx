import React from 'react';
import icon_svg from '../../assets/images/tournamenter_logo.svg'
import './Top.css';

function Top() {
  const title: string = 'とーなめんた';
  const subtitle: string = 'おしゃれなホームページへようこそ';

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-logo">
          <img src={icon_svg} alt="とーなめんた" className="app-logo" />
        </div>
        <div className="header-string">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </header>
    </div>
  );
}

export default Top;
