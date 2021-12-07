import React from 'react';

const Header = () => {
    return(<header className="bg-primary bg-gradient text-white">
    <div className="container px-4 text-center">
        <h1 className="fw-bolder">Selamat Datang Di Kalender Dunia</h1>
        <p className="lead">Mencari Tau Negara mana saja yang memiliki hari libur yang unik </p>
        <a className="btn btn-lg btn-light" href="#about">Tentang Project Ini</a>
    </div>
</header>);
}

export default Header