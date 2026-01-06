const Home = () => (
  <section id="home" className="py-12">
    <div className="md:grid md:grid-cols-[260px_1fr] md:items-start md:gap-10">
      <div className="flex-shrink-0 mb-6 md:mb-0 flex flex-col items-center mt-4">
        {/* Use uploaded profile image if available */}
        <img
          src="/assets/profile.jpeg"
          alt="Madan K C"
          className="w-44 h-44 md:w-48 md:h-48 rounded-full object-cover shadow-sm"
        />

        {/* Location */}
  <div className="mt-4 flex items-center justify-center gap-2 text-gray-700">
          <span aria-hidden>📍</span>
          <span>Dallas, USA</span>
        </div>

        {/* Primary actions under image */}
  <div className="mt-4 flex gap-3 justify-center">
          <a
            href="https://github.com/madankc71"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-primary"
          >
            View GitHub
          </a>
          <a
            href="mailto:madankc71@gmail.com"
            className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="md:flex-1">
        <h1 className="text-5xl font-bold text-primary mb-2">Madan K C</h1>
        <div className="h-1 w-20 bg-primary mb-6"></div>
        <div className="space-y-4">
          <p className="text-xl text-gray-800 max-w-2xl leading-relaxed">
            Hi, I am Madan K C. I have a B.E. in Computer Engineering from Tribhuvan University (Nepal)
            and an M.S. in Data Science & Analytics from Grand Valley State University (USA), with
            training across core CS foundations, data science and statistical methods. I have worked across
            research/teaching environments and hands-on engineering, and I value careful experimentation,
            clear writing, and steady iteration.            </p>
          <p className="text-xl text-gray-800 max-w-2xl leading-relaxed">
            I am broadly interested in modern machine learning and GenAI, 
            including both learning methods and the systems that use them in practice. 
            I enjoy working end-to-end-from data preparation and modeling to evaluation and deployment, 
            and I am especially motivated by research that studies model behavior carefully and improves it systematically.
            </p>
          <p className="text-xl text-gray-800 max-w-2xl leading-relaxed">
            I am applying for a PhD in Computer Science and 
            I am interested in collaborating with faculty in machine learning, AI, and GenAI.
            I also enjoy data-driven research that combines solid methodology with real-world constraints, 
            including interdisciplinary domains such as healthcare, privacy, and climate-related applications.
            </p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-dark mb-2">Research Interests</h3>
          <ul className="list-disc pl-5 text-gray-800 space-y-2">
            <li>ML, AI, and GenAI systems</li>
            <li>Computer vision and NLP</li>
            <li>Evaluation, reliability, interpretability, responsible AI</li>
            <li>Data-centric ML and applied data science</li>
            <li>Reinforcement learning</li>
            <li>Interdisciplinary research in other domains (healthcare, privacy, climate, agriculture and so on)</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
export default Home;
