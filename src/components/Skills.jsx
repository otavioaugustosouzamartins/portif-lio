const skill = [
    "JavaScript", "React", "Git (Versionamento de código)", "n8n",
    "MySQL"
];

export default function skills(){
    return (
        <section className="section" id="skills">
            <div className= "container">
                <h2 className="title fade-up">Habilidades</h2>
                <div className="grid-3" style={{marginTop: 18}}>
                    {skill.map((s,i) => (
                        <div key={s} className={`card fade-up ${i%3===1 ? 'd2' : i%3===2 ? 'd3': ''}`}>
                            <strong>{s}</strong>

                            <p className="subtitle" style={{marginTop: 6}}>
                                {i % 2 === 0
                                  ? "Experiência prática em projetos reais e estudos."
                                  : "Foco em legibilidade, performance e boas práticas."}    
                            </p>
                        </div>
                    ))}

                </div>
            </div>

        </section>
    );

}
