export default function Contact(){
    function handleSubmit(e){
        e.preventDefault();
        alert("Obrigado! Em breve te respondo");
    }

    return (
        <section className="section" id="contact">
           <div className="contact-box">
            <div className="title fade-up btn-row"></div>
               <h2 className="subtle fade-up">Contato</h2>
               <p className="subtle fade-up d2">Bora conversar sobre oportunidades</p>
               
              
                <form className="form fade-up d3" onSubmit={handleSubmit} style={{marginTop: 14}}>
                    <input className="input" placeholder="Seu nome" required />
                    <input className="input" type="email" placeholder="Seu e-mail" required />
                    <textarea className="textarea" placeholder="Sua mensagem" />
                    <button className="btn primary" type="submit">Enviar</button>
                </form>
                
      
                    <p className="subtle" style={{marginTop: 14}}>
                    ou me encontre em:{" "}
                    <a className="btn" href="https://github.com/otavioaugustosouzamartins" target="_blank" rel="noreferrer">GitHub</a>
                    {" "}
                    <a className="btn" href="https://www.linkedin.com/in/otavioaugustosouzamartins/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </p> 
            </div>
        </section>
    )
}