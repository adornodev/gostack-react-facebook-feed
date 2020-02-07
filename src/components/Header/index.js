import React from 'react';
import './style.css';

function Header() {
  return (
    <header>
      <h1 class="title">facebook</h1>
      <div class="profile">
        <small class="profile__label">Meu perfil</small>
        <i class="profile__icon"></i>
      </div>
    </header>
  );
}

export default Header;
