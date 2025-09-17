const projects = [
    {
        title: "Automação bunnyCDN/Vimeo",
        desc: "Scripts de migração de vídeos entre plataformas (vimeo para bunnyCDN) com criação de relátorios CSV e criação de cache.",
        techs:  ["JavaScript", "PHP", "API´s"],
        image: "./public/automation.png"
    },

    {
        title: "Vaga Scanner IA",
        desc: "Projeto de Inteligência Artificial para análise de vagas de emprego, classificando entre boas e ruins com base.",
        techs:  ["python"],
        image: "./public/ia.png"
    },
    


];

export default function Project(){
    return (
         <section className="section" id= "projects">
             <div className="container">
                <h2 className="title fade-up"> Projetos </h2>

                <div className="grid-3" style={{marginTop: 18}}>
                    {projects.map((p, i) => (
                        <article key={p.title} className={`card fade-up ${i%3 === 1 ? 'd2' : i%3 === 2 ? 'd3': ''}`}>
                            <img src={p.image} alt={p.title} className="project-thumb"/>
                               <h3 style={{margin: "12px 0 4px"}}>{p.title}</h3>
                            <p className="subtle"> {p.desc}</p>

                            <div className="badges">
                                {p.techs.map((t => <span className="badge" key={t}> {t} </span>))}
                            </div>

                            <div style={{display: "flex", gap: 12, marginTop: 12}}>
                                <a className="btn" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                                <a className="btn" href={p.demo} target="_blank" rel="noreferrer">Demo</a>
                            </div>  
                        </article>
                    ))}
                </div>
             </div>
         </section>
    )
}