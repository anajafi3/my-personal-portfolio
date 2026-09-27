function Home() {
  return (
    <section className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Mission: I build clean, modern, and efficient personal portfolio website.</p>
         <div>
      <a href="/about" className="btn">Learn More About Me</a>
        </div>
         <div>
      <a href="/education" className="btn">Learn More About my academic background.</a>
        </div>
         <div>
      <a href="/projects" className="btn">View My Projects</a>
        </div>
    </section>
  );
}

export default Home;
