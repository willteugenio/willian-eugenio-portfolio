import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Code, 
  Server, 
  Cloud, 
  Database,
  Terminal,
  ChevronDown,
  ExternalLink,
  MapPin,
  Phone,
  Calendar,
  Award,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Progress } from './components/ui/progress';
import './App.css';

// Import assets
import avatarImg from './assets/avatar_professional.png';
import devopsIcon from './assets/devops_icon.png';
import codeIcon from './assets/code_icon.png';
import cloudIcon from './assets/cloud_icon.png';

function App() {
  const [currentSection, setCurrentSection] = useState('hero');
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([
    { type: 'system', text: 'Willian Eugenio Terminal v1.0.0' },
    { type: 'system', text: 'Digite "help" para ver os comandos disponíveis' }
  ]);
  const [typingText, setTypingText] = useState('');

  const fullText = "Full Stack Developer | DevOps Engineer | SRE";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypingText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const skills = [
    { name: 'Python', level: 90, icon: Code },
    { name: 'React', level: 85, icon: Code },
    { name: 'Docker', level: 88, icon: Server },
    { name: 'AWS', level: 82, icon: Cloud },
    { name: 'Kubernetes', level: 75, icon: Server },
    { name: 'DevOps', level: 90, icon: Server },
    { name: 'Oracle DB', level: 80, icon: Database },
    { name: 'Linux', level: 85, icon: Terminal }
  ];

  const experiences = [
    {
      company: 'Finly Tech',
      position: 'Desenvolvedor Full Stack',
      period: 'Agosto 2024 - Presente',
      description: 'Desenvolvimento de ferramentas de tradução de arquivo de conciliação financeira. Levantamento de requisitos e testes de performance.',
      technologies: ['Docker', 'Python', 'React', 'AWS']
    },
    {
      company: 'Minas Verde John Deere',
      position: 'Desenvolvedor Full Stack Pleno',
      period: 'Junho 2024 - Julho 2024',
      description: 'Desenvolvimento de soluções full-stack para o setor agrícola.',
      technologies: ['Full Stack', 'Desenvolvimento']
    },
    {
      company: 'Equals - Gestão Financeira Inteligente',
      position: 'Analista OpsTech',
      period: 'Abril 2023 - Abril 2024',
      description: 'Garantia da disponibilidade, resiliência e escalabilidade dos sistemas. Infraestrutura DevOps, monitoramento e automação.',
      technologies: ['Grafana', 'Zabbix', 'Python', 'Terraform', 'Jenkins']
    },
    {
      company: 'Equals - Gestão Financeira Inteligente',
      position: 'Analista de Operações II',
      period: 'Maio 2022 - Abril 2023',
      description: 'Análise e implementação de pipelines de dados. Identificação e solução de problemas em layouts de arquivos.',
      technologies: ['Shell Script', 'Java', 'Spring Admin', 'Grafana']
    }
  ];

  const terminalCommands = {
    help: () => [
      { type: 'output', text: 'Comandos disponíveis:' },
      { type: 'output', text: '  whoami     - Informações básicas' },
      { type: 'output', text: '  skills     - Lista de habilidades' },
      { type: 'output', text: '  experience - Experiência profissional' },
      { type: 'output', text: '  contact    - Informações de contato' },
      { type: 'output', text: '  clear      - Limpar terminal' }
    ],
    whoami: () => [
      { type: 'output', text: 'Willian Eugenio' },
      { type: 'output', text: 'Full Stack Developer | DevOps Engineer | SRE' },
      { type: 'output', text: 'Localização: Lavras, Minas Gerais, Brasil' },
      { type: 'output', text: 'Formação: Sistemas de Informação - UNIS' }
    ],
    skills: () => [
      { type: 'output', text: 'Principais habilidades técnicas:' },
      { type: 'output', text: '• Python, React, JavaScript, TypeScript' },
      { type: 'output', text: '• Docker, Kubernetes, AWS, Oracle Cloud' },
      { type: 'output', text: '• Grafana, Zabbix, Jenkins, Terraform' },
      { type: 'output', text: '• Oracle DB, PostgreSQL, MongoDB' },
      { type: 'output', text: '• Linux, Shell Script, Git' }
    ],
    experience: () => [
      { type: 'output', text: 'Experiência profissional:' },
      { type: 'output', text: '2024-atual: Desenvolvedor Full Stack - Finly Tech' },
      { type: 'output', text: '2023-2024: Analista OpsTech - Equals' },
      { type: 'output', text: '2022-2023: Analista de Operações II - Equals' },
      { type: 'output', text: '2021-2022: Analista de Operações I - Equals' }
    ],
    contact: () => [
      { type: 'output', text: 'Informações de contato:' },
      { type: 'output', text: 'Email: wilteugenio@gmail.com' },
      { type: 'output', text: 'Telefone: (35) 99867-5908' },
      { type: 'output', text: 'LinkedIn: linkedin.com/in/willian-eugenio-b75ba11a4' },
      { type: 'output', text: 'Localização: Lavras, MG, Brasil' }
    ],
    clear: () => []
  };

  const handleTerminalCommand = (command) => {
    const cmd = command.toLowerCase().trim();
    const newOutput = [...terminalOutput, { type: 'input', text: `$ ${command}` }];
    
    if (terminalCommands[cmd]) {
      if (cmd === 'clear') {
        setTerminalOutput([
          { type: 'system', text: 'Willian Eugenio Terminal v1.0.0' },
          { type: 'system', text: 'Digite "help" para ver os comandos disponíveis' }
        ]);
      } else {
        setTerminalOutput([...newOutput, ...terminalCommands[cmd]()]);
      }
    } else {
      setTerminalOutput([...newOutput, { type: 'error', text: `Comando não encontrado: ${command}` }]);
    }
    setTerminalInput('');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold gradient-text"
            >
              Willian Eugenio
            </motion.div>
            <div className="hidden md:flex space-x-6">
              {['hero', 'about', 'experience', 'skills', 'terminal', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-primary transition-colors ${
                    currentSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'hero' ? 'Início' : 
                   section === 'about' ? 'Sobre' :
                   section === 'experience' ? 'Experiência' :
                   section === 'skills' ? 'Habilidades' :
                   section === 'terminal' ? 'Terminal' :
                   'Contato'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center particles-bg relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-8 float-animation">
              <img
                src={avatarImg}
                alt="Willian Eugenio"
                className="w-32 h-32 rounded-full mx-auto mb-6 pulse-glow"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Olá, eu sou <span className="gradient-text">Willian</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-8">
              {typingText}
              <span className="animate-pulse">|</span>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Especialista em DevOps e desenvolvimento full-stack com mais de 3 anos de experiência 
              em infraestrutura, automação e desenvolvimento de sistemas escaláveis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="pulse-glow">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
                <Mail className="mr-2 h-4 w-4" />
                Entre em Contato
              </Button>
            </div>
            
            <div className="flex justify-center space-x-6 mt-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/willian-eugenio-b75ba11a4" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:wilteugenio@gmail.com"
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="h-8 w-8 animate-bounce text-primary" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Sobre Mim</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Formado em Sistemas de Informação pelo Grupo Educacional UNIS, com experiência sólida 
              em DevOps, SRE e desenvolvimento full-stack. Especializado em infraestrutura em nuvem, 
              automação e sistemas de monitoramento.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <img src={devopsIcon} alt="DevOps" className="w-16 h-16 mx-auto mb-4" />
                  <CardTitle>DevOps & SRE</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Especialista em infraestrutura, automação, monitoramento e garantia de 
                    disponibilidade de sistemas críticos.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <img src={codeIcon} alt="Development" className="w-16 h-16 mx-auto mb-4" />
                  <CardTitle>Full Stack Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Desenvolvimento de aplicações completas usando Python, React, e tecnologias 
                    modernas de frontend e backend.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <img src={cloudIcon} alt="Cloud" className="w-16 h-16 mx-auto mb-4" />
                  <CardTitle>Cloud & Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Experiência em AWS, Oracle Cloud, Docker, Kubernetes e implementação 
                    de pipelines CI/CD.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Experiência Profissional</h2>
            <p className="text-xl text-muted-foreground">
              Minha jornada profissional em tecnologia e DevOps
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-8"
              >
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{exp.position}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-primary">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="ml-4">
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Habilidades Técnicas</h2>
            <p className="text-xl text-muted-foreground">
              Tecnologias e ferramentas que domino
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <skill.icon className="w-8 h-8 text-primary mr-3" />
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-semibold">{skill.name}</h3>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section id="terminal" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Terminal Interativo</h2>
            <p className="text-xl text-muted-foreground">
              Explore meu perfil através do terminal
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-black border-primary/20">
              <CardHeader className="bg-primary/10 border-b border-primary/20">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-sm text-muted-foreground terminal-font">
                    willian@portfolio:~$
                  </span>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="terminal-font text-sm space-y-2 h-64 overflow-y-auto mb-4">
                  {terminalOutput.map((line, index) => (
                    <div key={index} className={`
                      ${line.type === 'system' ? 'text-green-400' : ''}
                      ${line.type === 'input' ? 'text-blue-400' : ''}
                      ${line.type === 'output' ? 'text-white' : ''}
                      ${line.type === 'error' ? 'text-red-400' : ''}
                    `}>
                      {line.text}
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400 terminal-font">$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleTerminalCommand(terminalInput);
                      }
                    }}
                    className="flex-1 bg-transparent border-none outline-none text-white terminal-font"
                    placeholder="Digite um comando..."
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Entre em Contato</h2>
            <p className="text-xl text-muted-foreground">
              Vamos conversar sobre oportunidades e projetos
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>wilteugenio@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>(35) 99867-5908</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Lavras, Minas Gerais, Brasil</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-primary" />
                    <a href="https://linkedin.com/in/willian-eugenio-b75ba11a4" 
                       target="_blank" rel="noopener noreferrer"
                       className="hover:text-primary transition-colors">
                      LinkedIn Profile
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Formação & Certificações</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Sistemas de Informação</p>
                      <p className="text-sm text-muted-foreground">Grupo Educacional UNIS (2022-2024)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Certificações</p>
                      <p className="text-sm text-muted-foreground">Flask, Kubernetes, Docker, Git & GitHub</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Willian Eugenio. Desenvolvido com React e Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
