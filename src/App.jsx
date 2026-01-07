import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code2, Briefcase, User, ChevronDown, ExternalLink, Terminal, Database, Smartphone, Monitor } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Bot WhatsApp Inteligente",
      description: "Sistema automatizado de atendimento via WhatsApp com integração de IA, processamento de linguagem natural e respostas contextuais.",
      tech: ["Python", "API WhatsApp", "NLP", "WebSockets"],
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Sistema Desktop MVC",
      description: "Aplicação empresarial robusta desenvolvida em Java seguindo padrão MVC, com interface gráfica moderna e banco de dados integrado.",
      tech: ["Java", "JavaFX", "MVC", "MySQL"],
      icon: <Monitor className="w-6 h-6" />
    },
    {
      title: "API RESTful Completa",
      description: "Backend escalável com operações CRUD, autenticação JWT, documentação Swagger e testes automatizados.",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Sistemas Distribuídos",
      description: "Arquitetura de microsserviços com comunicação assíncrona, cache distribuído e balanceamento de carga.",
      tech: ["C++", "Python", "Redis", "Docker"],
      icon: <Terminal className="w-6 h-6" />
    }
  ];

  const skills = {
    hard: [
      { name: "C++", level: 90 },
      { name: "Java", level: 88 },
      { name: "Python", level: 92 },
      { name: "JavaScript/Node.js", level: 85 },
      { name: "API REST", level: 90 },
      { name: "SQL/NoSQL", level: 87 },
      { name: "Git & GitHub", level: 93 },
      { name: "Docker", level: 82 }
    ],
    soft: [
      { name: "Resolução de Problemas", level: 95 },
      { name: "Trabalho em Equipe", level: 90 },
      { name: "Comunicação", level: 88 },
      { name: "Adaptabilidade", level: 92 },
      { name: "Gestão de Tempo", level: 87 },
      { name: "Pensamento Crítico", level: 91 }
    ]
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            TC
          </div>
          <div className="hidden md:flex gap-8">
            {['home', 'sobre', 'projetos', 'habilidades'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors hover:text-cyan-400 ${activeSection === section ? 'text-cyan-400' : 'text-gray-300'}`}
              >
                {section}
              </button>
            ))}
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/tassiocarvalho" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/tassio-carvalho-a5315121a/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent"></div>
        <div className="relative z-10 text-center max-w-4xl">
          <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">
            Desenvolvedor Full Stack
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Tássio Carvalho
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Transformando ideias em soluções tecnológicas inovadoras
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={() => scrollToSection('projetos')} className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:scale-105 transition-transform">
              Ver Projetos
            </button>
            <button onClick={() => scrollToSection('habilidades')} className="px-8 py-3 border border-cyan-500/50 rounded-lg font-semibold hover:bg-cyan-500/10 transition-colors">
              Habilidades
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Sobre Mim</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                Sou desenvolvedor full stack apaixonado por criar soluções tecnológicas que fazem a diferença. 
                Com expertise em múltiplas linguagens e tecnologias, transformo desafios complexos em aplicações elegantes e eficientes.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Minha experiência abrange desde desenvolvimento de bots inteligentes até sistemas empresariais robustos, 
                sempre focando em código limpo, arquitetura escalável e excelência técnica.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="https://github.com/tassiocarvalho" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/tassio-carvalho-a5315121a/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6 hover:scale-105 transition-transform">
                <Code2 className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="font-semibold mb-2">Clean Code</h3>
                <p className="text-sm text-gray-400">Código limpo e manutenível</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6 hover:scale-105 transition-transform">
                <Briefcase className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="font-semibold mb-2">Experiência</h3>
                <p className="text-sm text-gray-400">Projetos diversos e desafiadores</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6 hover:scale-105 transition-transform">
                <Terminal className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="font-semibold mb-2">Inovação</h3>
                <p className="text-sm text-gray-400">Soluções criativas</p>
              </div>
              <div className="bg-gradient-to-br from-pink-500/10 to-cyan-500/10 border border-pink-500/30 rounded-xl p-6 hover:scale-105 transition-transform">
                <User className="w-8 h-8 text-pink-400 mb-3" />
                <h3 className="font-semibold mb-2">Colaboração</h3>
                <p className="text-sm text-gray-400">Trabalho em equipe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projetos em Destaque</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all hover:scale-105">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Habilidades Section */}
      <section id="habilidades" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Habilidades</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Hard Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Code2 className="w-6 h-6 text-cyan-400" />
                Hard Skills
              </h3>
              <div className="space-y-6">
                {skills.hard.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <User className="w-6 h-6 text-purple-400" />
                Soft Skills
              </h3>
              <div className="space-y-6">
                {skills.soft.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-600 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">© 2026 Tássio Carvalho. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/tassiocarvalho" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/tassio-carvalho-a5315121a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}