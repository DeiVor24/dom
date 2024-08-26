const headerListDOM = document.getElementsByTagName('header');

if (headerListDOM.length === 0 ) {
    console.error('Nepavyko rasti "header" elemento');    
}else {
    const headerDOM = headerListDOM[0];
    const headerHTML =`
           <header>
                    <img src="../header/img/Screenshot 2024-08-26 072905.png" alt="logo">
                    <nav>
                        <a id="home" href="../index.html">Home</a>
                        <a id="Services" href="../header/services/index.html">Services</a>
                        <a id="About"href="../header/About/index.html">About</a>
                        <a id="contact"href="../header/Contact us/index.html">Contact us</a>
                    </nav>
            </header>`
    

    headerDOM.innerHTML = headerHTML;
}

console.log(headerDOM);
