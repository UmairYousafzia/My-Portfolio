// Translation object for multiple languages
const translations = {
    en: {
        // Navigation
        'nav_home': 'Home',
        'nav_about': 'About',
        'nav_experience': 'Experience',
        'nav_skills': 'Skills',
        'nav_projects': 'Projects',
        'nav_contact': 'Contact',
        
        // Hero Section
        'hero_greeting': "Hi, I'm",
        'hero_title': 'Full Stack Developer',
        'hero_description': "I'm a passionate Full Stack Developer with 4+ years of experience crafting scalable web applications using Laravel, WordPress, and modern JavaScript frameworks, Linux , WindowServer, Devops, Kubernetes, AWS, Git & github.",
        'hero_view_work': 'View Work',
        'hero_contact_me': 'Contact Me',
        
        // About Section
        'about_title': 'About Me',
        'about_who_i_am': 'Who I Am',
        'about_description1': " I'm a passionate Full Stack Developer with 4+ years of experience building web applications. My expertise lies in Laravel Framework, Wordpress, Html, CSs, Bootstrap & React js , Linux, Window Server, Devops, Docker, Kubernetes, AWS, Git & Github.",
        'about_description2': 'I specialize in creating responsive, accessible, and performant web applications. My approach combines technical excellence with thoughtful design to deliver exceptional user experiences.',
        'about_problem_solver': 'Problem Solver',
        'about_problem_solver_desc': 'Creative solutions for complex challenges',
        'about_continuous_learner': 'Continuous Learner',
        'about_continuous_learner_desc': 'Always expanding my skills and knowledge',
        'about_team_player': 'Team Player',
        'about_team_player_desc': 'Collaborative and effective communicator',
        'about_detail_oriented': 'Detail Oriented',
        'about_detail_oriented_desc': 'Precision and quality in every line of code',
        
        // Experience Section
        'experience_title': 'Work Experience',
        'experience_description': 'My professional journey in web development, working with various technologies and frameworks.',
        'experience_current': 'Current',
        'experience_present': 'Present',
        'experience_years': '~2 years',
        
        // Tryinotech Experience
        'tryinotech_title': 'Full Stack Web Developer',
        'tryinotech_company': 'Tryinotech',
        'tryinotech_location': 'Kurri Road, Islamabad',
        'tryinotech_responsibility1': 'Developing and maintaining Laravel and WordPress websites for diverse clients',
        'tryinotech_responsibility2': 'Learning and implementing NestJS framework for modern backend development',
        'tryinotech_responsibility3': 'Building responsive and user-friendly web applications with modern technologies',
        
        // Bot Solutions Experience
        'bot_solutions_title': 'Full Stack Developer',
        'bot_solutions_company': 'Bot Solutions',
        'bot_solutions_location': 'Shamshabad, Islamabad',
        'bot_solutions_responsibility1': 'Developed and maintained multiple Laravel-based web applications',
        'bot_solutions_responsibility2': 'Created custom WordPress themes and plugins for client websites',
        'bot_solutions_responsibility3': 'Worked on frontend development using HTML, CSS, Bootstrap, and React.js',
        'bot_solutions_responsibility4': 'Collaborated with cross-functional teams to deliver high-quality web solutions',
        
        // Skills Section
        'skills_title': 'My Skills',
        'skills_technical': 'Technical Skills',
        'skills_professional': 'Professional Skills',
        
        // Projects Section
        'projects_title': 'My Projects',
        'projects_description': 'Here are some of my recent projects. Each one demonstrates different aspects of my skills and expertise.',
        
        // Project 1
        'project1_title': 'Dental Managment System',
        'project1_description': 'Comprehensive analytics dashboard for Dental Managment System with Laravel and React js with interactive charts.',
        
        // Project 2
        'project2_title': 'CMS Dashboard',
        'project2_description': 'Creating a comprehensive analytics dashboard with full Functionality like Full Crud Operation & Peremission and Role.',
        
        // Project 3
        'project3_title': 'Wordpress eCommerce Website',
        'project3_description': 'A responsive and secure WordPress-based online store with integrated payment gateways, product management, and user-friendly shopping experience.',
        
        // Contact Section
        'contact_title': 'Get In Touch',
        'contact_description': 'Have a project in mind or want to discuss potential opportunities? Feel free to reach out!',
        'contact_connect': 'Connect with me on social media or reach out via email:',
        'contact_email_me': 'Email me directly:',
        
        // Footer
        'footer_copyright': '© umairsb84@gmail.com 2025'
    },
    
    es: {
        // Navigation
        'nav_home': 'Inicio',
        'nav_about': 'Acerca de',
        'nav_experience': 'Experiencia',
        'nav_skills': 'Habilidades',
        'nav_projects': 'Proyectos',
        'nav_contact': 'Contacto',
        
        // Hero Section
        'hero_greeting': 'Hola, soy',
        'hero_title': 'Desarrollador Full Stack',
        'hero_description': 'Soy un apasionado Desarrollador Full Stack con más de 3 años de experiencia creando aplicaciones web escalables usando Laravel, WordPress y modernos frameworks JavaScript,  Linux , WindowServer, Devops, Kubernetes, AWS, Git & github.',
        'hero_view_work': 'Ver Trabajo',
        'hero_contact_me': 'Contáctame',
        
        // About Section
        'about_title': 'Acerca de Mí',
        'about_who_i_am': 'Quién Soy',
        'about_description1': 'Soy un apasionado Desarrollador Full Stack con más de 3 años de experiencia construyendo aplicaciones web. Mi experiencia se encuentra en Laravel Framework, Wordpress, Html, CSS, Bootstrap y React js ,  Linux , WindowServer, Devops, Kubernetes, AWS, Git & github.',
        'about_description2': 'Me especializo en crear aplicaciones web responsivas, accesibles y de alto rendimiento. Mi enfoque combina excelencia técnica con diseño cuidadoso para ofrecer experiencias de usuario excepcionales.',
        'about_problem_solver': 'Solucionador de Problemas',
        'about_problem_solver_desc': 'Soluciones creativas para desafíos complejos',
        'about_continuous_learner': 'Aprendiz Continuo',
        'about_continuous_learner_desc': 'Siempre expandiendo mis habilidades y conocimientos',
        'about_team_player': 'Jugador de Equipo',
        'about_team_player_desc': 'Colaborativo y comunicador efectivo',
        'about_detail_oriented': 'Orientado a Detalles',
        'about_detail_oriented_desc': 'Precisión y calidad en cada línea de código',
        
        // Experience Section
        'experience_title': 'Experiencia Laboral',
        'experience_description': 'Mi viaje profesional en desarrollo web, trabajando con varias tecnologías y frameworks.',
        'experience_current': 'Actual',
        'experience_present': 'Presente',
        'experience_years': '~2 años',
        
        // Tryinotech Experience
        'tryinotech_title': 'Desarrollador Web Full Stack',
        'tryinotech_company': 'Tryinotech',
        'tryinotech_location': 'Kurri Road, Islamabad',
        'tryinotech_responsibility1': 'Desarrollando y manteniendo sitios web Laravel y WordPress para diversos clientes',
        'tryinotech_responsibility2': 'Aprendiendo e implementando el framework NestJS para desarrollo backend moderno',
        'tryinotech_responsibility3': 'Construyendo aplicaciones web responsivas y amigables con tecnologías modernas',
        
        // Bot Solutions Experience
        'bot_solutions_title': 'Desarrollador Full Stack',
        'bot_solutions_company': 'Bot Solutions',
        'bot_solutions_location': 'Shamshabad, Islamabad',
        'bot_solutions_responsibility1': 'Desarrollé y mantuve múltiples aplicaciones web basadas en Laravel',
        'bot_solutions_responsibility2': 'Creé temas y plugins personalizados de WordPress para sitios web de clientes',
        'bot_solutions_responsibility3': 'Trabajé en desarrollo frontend usando HTML, CSS, Bootstrap y React.js , Linux , WindowServer, Devops, Kubernetes, AWS, Git & github',
        'bot_solutions_responsibility4': 'Colaboré con equipos multifuncionales para entregar soluciones web de alta calidad',
        
        // Skills Section
        'skills_title': 'Mis Habilidades',
        'skills_technical': 'Habilidades Técnicas',
        'skills_professional': 'Habilidades Profesionales',
        
        // Projects Section
        'projects_title': 'Mis Proyectos',
        'projects_description': 'Aquí están algunos de mis proyectos recientes. Cada uno demuestra diferentes aspectos de mis habilidades y experiencia.',
        
        // Project 1
        'project1_title': 'Sistema de Gestión Dental',
        'project1_description': 'Panel de análisis integral para Sistema de Gestión Dental con Laravel y React js con gráficos interactivos.',
        
        // Project 2
        'project2_title': 'Panel CMS',
        'project2_description': 'Creando un panel de análisis integral con funcionalidad completa como Operaciones CRUD completas y Permisos y Roles.',
        
        // Project 3
        'project3_title': 'Sitio Web eCommerce WordPress',
        'project3_description': 'Una tienda online segura y responsiva basada en WordPress con pasarelas de pago integradas, gestión de productos y experiencia de compra amigable.',
        
        // Contact Section
        'contact_title': 'Ponte en Contacto',
        'contact_description': '¿Tienes un proyecto en mente o quieres discutir oportunidades potenciales? ¡No dudes en contactarme!',
        'contact_connect': 'Conecta conmigo en redes sociales o contáctame por correo:',
        'contact_email_me': 'Envíame un correo directamente:',
        
        // Footer
        'footer_copyright': '© umairsb84@gmail.com 2025'
    },
    
    fr: {
        // Navigation
        'nav_home': 'Accueil',
        'nav_about': 'À Propos',
        'nav_experience': 'Expérience',
        'nav_skills': 'Compétences',
        'nav_projects': 'Projets',
        'nav_contact': 'Contact',
        
        // Hero Section
        'hero_greeting': 'Bonjour, je suis',
        'hero_title': 'Développeur Full Stack',
        'hero_description': 'Je suis un développeur Full Stack passionné avec plus de 3 ans d\'expérience dans la création d\'applications web évolutives utilisant Laravel, WordPress et frameworks JavaScript modernes,  Linux , WindowServer, Devops, Kubernetes, AWS, Git & github.',
        'hero_view_work': 'Voir le Travail',
        'hero_contact_me': 'Me Contacter',
        
        // About Section
        'about_title': 'À Propos de Moi',
        'about_who_i_am': 'Qui Je Suis',
        'about_description1': 'Je suis un développeur Full Stack passionné avec plus de 3 ans d\'expérience dans la construction d\'applications web. Mon expertise réside dans Laravel Framework, Wordpress, Html, CSS, Bootstrap et React js,  Linux , WindowServer, Devops, Kubernetes, AWS, Git & github.',
        'about_description2': 'Je me spécialise dans la création d\'applications web responsives, accessibles et performantes. Mon approche combine l\'excellence technique avec un design réfléchi pour offrir des expériences utilisateur exceptionnelles.',
        'about_problem_solver': 'Solutionneur de Problèmes',
        'about_problem_solver_desc': 'Solutions créatives pour des défis complexes',
        'about_continuous_learner': 'Apprenant Continuel',
        'about_continuous_learner_desc': 'Toujours en expansion de mes compétences et connaissances',
        'about_team_player': 'Joueur d\'Équipe',
        'about_team_player_desc': 'Collaboratif et communicateur efficace',
        'about_detail_oriented': 'Orienté Détail',
        'about_detail_oriented_desc': 'Précision et qualité dans chaque ligne de code',
        
        // Experience Section
        'experience_title': 'Expérience Professionnelle',
        'experience_description': 'Mon parcours professionnel en développement web, travaillant avec diverses technologies et frameworks.',
        'experience_current': 'Actuel',
        'experience_present': 'Présent',
        'experience_years': '~2 ans',
        
        // Tryinotech Experience
        'tryinotech_title': 'Développeur Web Full Stack',
        'tryinotech_company': 'Tryinotech',
        'tryinotech_location': 'Kurri Road, Islamabad',
        'tryinotech_responsibility1': 'Développement et maintenance de sites web Laravel et WordPress pour divers clients',
        'tryinotech_responsibility2': 'Apprentissage et implémentation du framework NestJS pour le développement backend moderne',
        'tryinotech_responsibility3': 'Construction d\'applications web responsives et conviviales avec des technologies modernes',
        
        // Bot Solutions Experience
        'bot_solutions_title': 'Développeur Full Stack',
        'bot_solutions_company': 'Bot Solutions',
        'bot_solutions_location': 'Shamshabad, Islamabad',
        'bot_solutions_responsibility1': 'Développé et maintenu plusieurs applications web basées sur Laravel',
        'bot_solutions_responsibility2': 'Créé des thèmes et plugins WordPress personnalisés pour les sites web des clients',
        'bot_solutions_responsibility3': 'Travaillé sur le développement frontend utilisant HTML, CSS, Bootstrap et React.js',
        'bot_solutions_responsibility4': 'Collaboré avec des équipes multifonctionnelles pour livrer des solutions web de haute qualité',
        
        // Skills Section
        'skills_title': 'Mes Compétences',
        'skills_technical': 'Compétences Techniques',
        'skills_professional': 'Compétences Professionnelles',
        
        // Projects Section
        'projects_title': 'Mes Projets',
        'projects_description': 'Voici quelques-uns de mes projets récents. Chacun démontre différents aspects de mes compétences et expertise.',
        
        // Project 1
        'project1_title': 'Système de Gestion Dentaire',
        'project1_description': 'Tableau de bord analytique complet pour le Système de Gestion Dentaire avec Laravel et React js avec graphiques interactifs.',
        
        // Project 2
        'project2_title': 'Tableau de Bord CMS',
        'project2_description': 'Création d\'un tableau de bord analytique complet avec fonctionnalité complète comme Opérations CRUD complètes et Permissions et Rôles.',
        
        // Project 3
        'project3_title': 'Site Web eCommerce WordPress',
        'project3_description': 'Une boutique en ligne sécurisée et responsive basée sur WordPress avec passerelles de paiement intégrées, gestion des produits et expérience d\'achat conviviale.',
        
        // Contact Section
        'contact_title': 'Contactez-moi',
        'contact_description': 'Avez-vous un projet en tête ou voulez-vous discuter d\'opportunités potentielles? N\'hésitez pas à me contacter!',
        'contact_connect': 'Connectez-vous avec moi sur les réseaux sociaux ou contactez-moi par email:',
        'contact_email_me': 'Envoyez-moi un email directement:',
        
        // Footer
        'footer_copyright': '© umairsb84@gmail.com 2025'
    },
    
    ar: {
        // Navigation
        'nav_home': 'الرئيسية',
        'nav_about': 'نبذة عني',
        'nav_experience': 'الخبرة',
        'nav_skills': 'المهارات',
        'nav_projects': 'المشاريع',
        'nav_contact': 'التواصل',
        
        // Hero Section
        'hero_greeting': 'مرحباً، أنا',
        'hero_title': 'مطور Full Stack',
        'hero_description': 'أنا مطور Full Stack شغوف مع أكثر من 3 سنوات من الخبرة في بناء تطبيقات الويب القابلة للتوسع باستخدام Laravel و WordPress وأطر JavaScript الحديثة , Linux , WindowServer, Devops, Kubernetes, AWS, Git & github.',
        'hero_view_work': 'عرض الأعمال',
        'hero_contact_me': 'تواصل معي',
        
        // About Section
        'about_title': 'نبذة عني',
        'about_who_i_am': 'من أنا',
        'about_description1': 'أنا مطور Full Stack شغوف مع أكثر من 3 سنوات من الخبرة في بناء تطبيقات الويب. تتمثل خبرتي في Laravel Framework و Wordpress و Html و CSS و Bootstrap و React js,  Linux , WindowServer, Devops, Kubernetes, AWS, Git & github.',
        'about_description2': 'أنا متخصص في إنشاء تطبيقات الويب المتجاوبة والقابلة للوصول وعالية الأداء. يجمع نهجي بين التميز التقني والتصميم المدروس لتقديم تجارب مستخدم استثنائية.',
        'about_problem_solver': 'حل المشكلات',
        'about_problem_solver_desc': 'حلول إبداعية للتحديات المعقدة',
        'about_continuous_learner': 'المتعلم المستمر',
        'about_continuous_learner_desc': 'دائماً أوسع مهاراتي ومعرفتي',
        'about_team_player': 'لاعب الفريق',
        'about_team_player_desc': 'متعاون ومواصل فعال',
        'about_detail_oriented': 'مهتم بالتفاصيل',
        'about_detail_oriented_desc': 'دقة وجودة في كل سطر من التعليمات البرمجية',
        
        // Experience Section
        'experience_title': 'الخبرة العملية',
        'experience_description': 'رحلتي المهنية في تطوير الويب، والعمل مع تقنيات وأطر مختلفة.',
        'experience_current': 'الحالي',
        'experience_present': 'الحاضر',
        'experience_years': '~2 سنة',
        
        // Tryinotech Experience
        'tryinotech_title': 'مطور ويب Full Stack',
        'tryinotech_company': 'Tryinotech',
        'tryinotech_location': 'Kurri Road, Islamabad',
        'tryinotech_responsibility1': 'تطوير وصيانة مواقع الويب Laravel و WordPress لعملاء متنوعين',
        'tryinotech_responsibility2': 'تعلم وتطبيق إطار NestJS للتطوير الخلفي الحديث',
        'tryinotech_responsibility3': 'بناء تطبيقات الويب المتجاوبة وسهلة الاستخدام مع التقنيات الحديثة',
        
        // Bot Solutions Experience
        'bot_solutions_title': 'مطور Full Stack',
        'bot_solutions_company': 'Bot Solutions',
        'bot_solutions_location': 'Shamshabad, Islamabad',
        'bot_solutions_responsibility1': 'طورت وصونت تطبيقات ويب متعددة قائمة على Laravel',
        'bot_solutions_responsibility2': 'أنشأت سمات وإضافات WordPress مخصصة لمواقع العملاء',
        'bot_solutions_responsibility3': 'عملت على التطوير الأمامي باستخدام HTML و CSS و Bootstrap و React.js',
        'bot_solutions_responsibility4': 'تعاونت مع فرق متعددة الوظائف لتقديم حلول ويب عالية الجودة',
        
        // Skills Section
        'skills_title': 'مهاراتي',
        'skills_technical': 'المهارات التقنية',
        'skills_professional': 'المهارات المهنية',
        
        // Projects Section
        'projects_title': 'مشاريعي',
        'projects_description': 'هنا بعض من مشاريعي الأخيرة. كل واحد يوضح جوانب مختلفة من مهاراتي وخبرتي.',
        
        // Project 1
        'project1_title': 'نظام إدارة الأسنان',
        'project1_description': 'لوحة تحليل شاملة لنظام إدارة الأسنان مع Laravel و React js مع رسوم بيانية تفاعلية.',
        
        // Project 2
        'project2_title': 'لوحة تحكم CMS',
        'project2_description': 'إنشاء لوحة تحليل شاملة مع وظائف كاملة مثل عمليات CRUD الكاملة والأذون والأدوار.',
        
        // Project 3
        'project3_title': 'موقع eCommerce WordPress',
        'project3_description': 'متجر عبر الإنترنت آمن ومتجاوب قائم على WordPress مع بوابات دفع متكاملة وإدارة المنتجات وتجربة تسوق سهلة الاستخدام.',
        
        // Contact Section
        'contact_title': 'تواصل معي',
        'contact_description': 'هل لديك مشروع في ذهنك أو تريد مناقشة الفرص المحتملة؟ لا تتردد في التواصل!',
        'contact_connect': 'تواصل معي على وسائل التواصل الاجتماعي أو راسلني عبر البريد الإلكتروني:',
        'contact_email_me': 'راسلني عبر البريد الإلكتروني مباشرة:',
        
        // Footer
        'footer_copyright': '© umairsb84@gmail.com 2025'
    }
};
