const KnowledgeEn = [
  {
    id: "frontend",
    description:
      "I design and develop modern, accessible interfaces optimized for all devices. I use technologies like React, Next.js, and subtle animations to create intuitive, dynamic, and visually appealing experiences. I focus on performance, usability, and a minimalist aesthetic that reflects each project's identity.",
    technologies: [],
    certifications: [],
    projects: [],
  },
  {
    id: "backend",
    description:
      "I build robust and scalable APIs using technologies like Node.js and NestJS, efficiently connecting systems, databases, and external services. I design clean, secure, and maintainable architectures, prioritizing logical structure, data validation, and seamless communication between frontend and backend.",
    technologies: [],
    certifications: [],
    projects: [],
  },
  {
    id: "automation",
    description:
      "I automate repetitive tasks and workflows to optimize time and reduce operational errors. I use platforms like n8n, Zapier, or custom-built solutions that integrate APIs, databases, and external services. From smart scheduling to automated reporting, I implement systems that enhance efficiency and scalability.",
    technologies: [],
    certifications: [],
    projects: [],
  },
  {
    id: "ai",
    description:
      "I develop solutions that integrate artificial intelligence to enhance digital products. I design conversational agents, intelligent workflows, and RAG (retrieval-augmented generation) systems that connect language models with databases to deliver more accurate and personalized responses. I use tools like LangChain, OpenAI, and AI APIs.",
    technologies: [],
    certifications: [],
    projects: [],
  },
  {
    id: "photovideo",
    description:
      "I capture moments with a creative and professional approach, focusing on sports, portraits, and lifestyle. I combine technique, composition, and post-production to convey emotions and visual identity. I also produce audiovisual content for brands, social media, or events, tailored to each platform and communication goal.",
    technologies: [],
    certifications: [],
    projects: [],
  },
];

const KnowledgeEs = [
  {
    id: "frontend",
    description:
      "Diseño y desarrollo interfaces modernas, accesibles y optimizadas para todos los dispositivos. Uso tecnologías como React, Next.js y animaciones sutiles para crear experiencias intuitivas, dinámicas y visualmente atractivas. Me enfoco en la performance, la usabilidad y una estética minimalista que refleje la identidad de cada proyecto.",
    technologies: [],
    certifications: [],
    projects: [],
  },
  {
    id: "backend",
    description:
      "Construyo APIs robustas y escalables con tecnologías como Node.js y NestJS, conectando sistemas, bases de datos y servicios externos de forma eficiente. Diseño arquitecturas limpias, seguras y mantenibles, priorizando la estructura lógica, la validación de datos y una comunicación fluida entre frontend y backend.",
    technologies: [],
    certifications: [],
    projects: [],
  },
  {
    id: "automation",
    description:
      "Automatizo tareas repetitivas y flujos de trabajo para optimizar el tiempo y reducir errores operativos. Utilizo plataformas como n8n, Zapier o soluciones a medida que integran APIs, bases de datos y servicios externos. Desde agendamientos inteligentes hasta reportes automatizados, implemento sistemas que mejoran la eficiencia y la escalabilidad.",
    technologies: [],
    certifications: [],
    projects: [],
  },
  {
    id: "ai",
    description:
      "Desarrollo soluciones que integran inteligencia artificial para potenciar productos digitales. Diseño agentes conversacionales, workflows inteligentes y sistemas RAG (retrieval-augmented generation) que conectan modelos de lenguaje con bases de datos para ofrecer respuestas más precisas y personalizadas. Uso herramientas como LangChain, OpenAI y APIs de IA.",
    technologies: [],
    certifications: [],
    projects: [],
  },
  {
    id: "photovideo",
    description:
      "Capturo momentos con una mirada creativa y profesional, enfocándome en deportes, retratos y lifestyle. Combino técnica, composición y postproducción para transmitir emociones e identidad visual. También produzco contenido audiovisual para marcas, redes sociales o eventos, adaptado a cada canal y objetivo de comunicación.",
    technologies: [],
    certifications: [],
    projects: [],
  },
];

// export { KnowledgeEn, KnowledgeEs };

const getSectionById = (id, english) => {
  const knowledge = english === true ? KnowledgeEn : KnowledgeEs;
  return knowledge.find((section) => section.id === id);
};

export { getSectionById };
