import React from 'react';

function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <footer>
            <h3>copyright @ {currentYear}</h3>
        </footer>
    );
}
export default Footer;
