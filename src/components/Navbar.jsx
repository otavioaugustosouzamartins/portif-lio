import { useState } from "react";

export default function Navbar() {

    const [open, setOpen] = useState(false);
    const links = [
        { href: "#about", label: "sobre"},
        { href: "#skills", label: "habilidades"},
        { href: "#projects", label: "projetos"},
        { href: "#contact", label: "contato"},
    ];

    return (
        <header className= "Navbar">
            <div className= "container navbar-inner">
                <a href="#home" className="brand">Otávio.dev</a>

                <nav className="nav-links">
                    {links.map(l => <a key = {l.href} href={l.href}>{l.label}</a>)}
                    <a href="/CV-otavio.pdf" className="btn" download={"CV-otavio.pdf"}>Download currículo</a>
                </nav>

                <button className="menu-btn" onClick={() => setOpen(v => !v)} aria-label="Menu">☰</button>
            </div>

            <div className="btn" onClick={() => setOpen(false)}>

            </div>

            {open && (
                 <div className= "container mobile-menu">
                      {links.map(l => <a key={l.href} href={l.href} onClick={()=>setOpen(false)}>{l.label}</a>)}
                      <a className="btn" href="/CV_Otavio.pdf" download onClick={()=>setOpen(false)}>Download CV</a>
                 </div>
            )}
        </header>
    )

}