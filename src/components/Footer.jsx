export default function Footer(){
    return(
        <footer className="footer">
            <div className="container" style={{display: "flex",justifyContent:"space-between",alignItems:"center"}}>
             <span>© {new Date().getFullYear()} Otávio.</span>
             <a href="#home" className="subtle" style={{textDecoration:"none"}}>Voltar ao topo ↑</a>
             </div>
        </footer>
    )
}