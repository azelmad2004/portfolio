/**
 * MOHAMED AZELMAD — OFFICIAL PORTFOLIO APPLICATION JAVASCRIPT
 * Features: i18n (EN/FR/AR), Theme Toggle, Interactive Terminal,
 * Project Modals, CV Modal, Typewriter, Number Counters, Sound FX & Toast
 */

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------------------------
  // 1. TRANSLATION DICTIONARY (EN, FR, AR)
  // --------------------------------------------------------------------------
  const translations = {
    en: {
      "page.title": "Mohamed Azelmad — Full-Stack & FinTech Developer",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.skills": "Skills",
      "nav.work": "Projects",
      "nav.experience": "Experience",
      "nav.certifications": "Education",
      "nav.contact": "Contact",
      "nav.letstalk": "Let's Talk",
      "nav.faq": "FAQ",

      "hero.status": "Available for PFE Internships & Full-Time Roles — Kénitra / Rabat / Remote",
      "hero.greeting": "Mohamed Azelmad",
      "hero.role": "Full-Stack & FinTech Developer",
      "hero.bio": "Double academic excellence: Software Engineering (Bachelor GIGD ESTK, DUT ILR) & Accounting, Finance and Taxation (DEUG FEG). Creator of Awal GPT (Amazigh/Darija RAG), Khlas Wallet (QR Pay & ML Fraud), and ServicePub (Commune of Khénifra).",
      "hero.cv": "Download Resume",
      "hero.github": "GitHub Profile",
      "hero.chip_est": "EST Kénitra (GIGD)",
      "hero.chip_feg": "FEG Errachidia",
      "hero.chip_enactus": "Enactus Morocco",
      "hero.chip_telintec": "Telintec SARL",
      "hero.chip_commune": "Commune Khénifra",
      "hero.float_exp": "Year of Field Experience",
      "hero.float_spec_tag": "Specialization",
      "hero.float_spec": "FinTech · E-Gov · Local AI",
      "hero.float_loc": "Kénitra / Midelt, Morocco 🇲🇦",

      "about.eyebrow": "ABOUT ME",
      "about.title": "Designing with Empathy, Engineering with Precision",
      "about.subtitle": "A rare hybrid engineering profile combining Computer & Network Systems with Accounting & Finance to build software that creates measurable real-world value.",
      "about.tab_origins": "Education & Vision",
      "about.tab_leadership": "Leadership & Impact",
      "about.bg_title": "Academic Roots & Architecture",
      "about.bg_p1": "Born and raised in Midelt with roots in the Middle Atlas, my trajectory is founded upon double academic excellence: rigorous mathematical training (Sciences Mathématiques A) and higher technical education in Computer & Network Systems (DUT ILR EST Khénifra).",
      "about.bg_p2": "Further strengthening my profile with a Bachelor in Software Engineering & Digital Governance (EST Kénitra) and a DEUG in Accounting, Finance & Taxation (FEG Errachidia), I build software grounded in fiscal accuracy and architectural scalability.",
      "about.lead_title": "Leadership & Collective Impact",
      "about.lead_p1": "As President of Enactus EST Khénifra, I led student engineering teams building social innovation startups (UniStay, DalilLegal), pitching before national juries and managing agile deliverables.",
      "about.lead_p2": "Serving as Creative Media Coordinator for the Moroccan Leadership Seminar (MLS) and Vice-President of Club Digital, I champion digital literacy, mentoring fellow developers and driving tech community initiatives.",

      "stats.exp_label": "Year of Professional Experience",
      "stats.exp_desc": "Enterprise internships (Telintec, Commune Khénifra, Rawassi) and international freelance contracts.",
      "stats.projects_label": "Engineered & Deployed Projects",
      "stats.projects_desc": "FinTech applications, local RAG AI models, public administration portals, and telecom networks.",
      "stats.certs_label": "Verified Certifications",
      "stats.certs_desc": "Scrum PSM I, Advanced SQL, Cisco CCNA, Credly Cloud/DevOps, FreeCodeCamp, and Google.",
      "stats.commit_label": "Technical Commitment & Passion",
      "stats.commit_desc": "Dedicated to designing reliable, scalable software architectures that create genuine economic value.",

      "services.eyebrow": "CORE COMPETENCIES",
      "services.title": "Services I Offer",
      "services.subtitle": "Delivering production-grade applications that combine software robustness, financial precision, and seamless user experiences.",
      "services.s1_title": "Full-Stack Web Engineering",
      "services.s1_desc": "Modern Single Page Applications & scalable microservices with React, Next.js, Django, FastAPI, and PostgreSQL.",
      "services.s2_title": "FinTech & Financial Systems",
      "services.s2_desc": "Payment pipelines, automated invoicing systems, and double-entry accounting tools compliant with Moroccan tax regulations (CGI: TVA, IS, IR).",
      "services.s3_title": "Local AI & NLP Systems (RAG)",
      "services.s3_desc": "Custom dialectal conversational agents (Moroccan Darija & Amazigh), local CPU inference with Qwen2.5, spaCy, and semantic search.",
      "services.s4_title": "Telecom & Optical Networks",
      "services.s4_desc": "GPON FTTH network design, OLT/ONT configuration, OTDR reflectometry testing, and GIS telecom mapping.",

      "skills.eyebrow": "TOOLS & SKILLS",
      "skills.title": "Technologies & Tech Stack",
      "skills.subtitle": "Carefully selected languages, frameworks, and instruments used to deliver robust digital solutions.",
      "filter.all": "All Stack",
      "filter.languages": "Languages",
      "filter.frameworks": "Frameworks & Web",
      "filter.ai": "AI & Data",
      "filter.networks": "Networks & Cloud",
      "filter.tools": "Design & Tools",

      "projects.eyebrow": "PROJECT PORTFOLIO",
      "projects.title": "Selected Work & Engineering Deployments",
      "projects.subtitle": "Real deployed projects combining Full-Stack development, FinTech engineering, dialectal AI, and telecom networks.",

      "exp.eyebrow": "JOURNEY & TRACK RECORD",
      "exp.title": "Work Experience & Leadership",
      "exp.subtitle": "Chronological progression across enterprise environments, government digital services, social entrepreneurship, and freelance contracts.",
      "exp.telintec_desc": "Deployment and configuration of GPON & ADSL fiber optic infrastructure: OLT/ONT optical splicing, photometric budget calculation, OTDR testing, splitters, VLAN segmentation, and GIS mapping.",
      "exp.ministere_desc": "Design and development of ServicePub, the citizen e-gov portal for the Territorial Commune of Khénifra: secure request workflows, role-based authentication, and executive Django administration dashboards.",
      "exp.rawassi_desc": "Visual branding design and responsive web development: UI/UX prototyping, front-end HTML5/CSS3/JS integration, and end-to-end client delivery.",
      "exp.mls_desc": "Art direction, video production, and social media strategy for the national leadership seminar bringing together high-potential Moroccan youth.",
      "exp.enactus_desc": "Presidency and strategic direction of Enactus team: incubating tech social ventures UniStay (student housing) and DalilLegal (legal guidance), managing agile sprints, and national pitching.",
      "exp.club_desc": "Organizing tech hackathons, web development bootcamps, and applied artificial intelligence workshops for university students.",
      "exp.freelance_desc": "Building custom full-stack web platforms, high-performance REST APIs (FastAPI, Django), dynamic React interfaces, and analytics dashboards with a 5.0/5 client satisfaction rating.",

      "certs.eyebrow": "ACADEMIC & DIGITAL CREDENTIALS",
      "certs.title": "Education & Academic Degrees",
      "certs.subtitle": "Rigorous academic training combining software engineering, digital governance, and accounting finance.",
      "certs.verified_eyebrow": "DIGITAL CREDENTIALS & LICENSES",
      "certs.verified_title": "Verified Official Certifications",
      "certs.verified_subtitle": "Verified professional credentials issued by leading international platforms (LinkedIn, FreeCodeCamp, Credly, Google).",

      "testi.eyebrow": "ACADEMIC ENDORSEMENTS",
      "testi.title": "Faculty & Supervisor Reviews",
      "testi.subtitle": "Recommendations from the faculty of the Higher School of Technology of Khénifra (ESTK).",

      "faq.eyebrow": "TRANSPARENCY & CLARITY",
      "faq.title": "Frequently Asked Questions",
      "faq.subtitle": "Direct, honest answers about my background, work philosophy, and availability.",
      "faq.q1": "Why did you combine Software Engineering with an Accounting & Finance degree?",
      "faq.a1": "Software is fundamentally about business logic and asset movement. Having formal training in accounting (Comptabilité, Finance & Fiscalité - DEUG FEG) enables me to architect FinTech applications, ERPs, and automated payment pipelines with a deep understanding of Moroccan taxation (TVA, IS, IR), debit/credit mechanisms, and balance-sheet diagnostics without needing an analyst to translate business requirements.",
      "faq.q2": "What is unique about Awal GPT for Moroccan Darija and Amazigh?",
      "faq.a2": "Standard commercial LLMs perform poorly on Moroccan Darija and Amazigh due to dialectal code-switching and sparse web corpora. Awal GPT integrates an official IRCAM lexical database of 9,000+ entries, optimized with RapidFuzz semantic proximity, spaCy linguistic filtering, and local RAG Qwen2.5 execution on CPU, providing authentic, culturally aware answers.",
      "faq.q3": "How does your hands-on GPON fiber experience help with full-stack development?",
      "faq.a3": "Field experience with physical telecom networks (GPON optical splitters, OLT/ONT configuration, OTDR reflectometry, VLAN segmentation) demystifies cloud infrastructure. It allows me to design distributed APIs with low latency, anticipate network bottlenecks, implement strict SSL/TLS encryption, and architect resilient architectures.",
      "faq.q4": "Are you available for internships, full-time roles, or freelance contracts?",
      "faq.a4": "Yes! Currently completing my Bachelor GIGD at EST Kénitra, I am actively available for high-impact software engineering roles, FinTech internships, startup collaborations, and freelance missions in Kénitra, Rabat, Casablanca, or remotely worldwide.",
      "faq.q5": "What is your primary technology stack for client deployments?",
      "faq.a5": "My core stack covers Python (Django, FastAPI, scikit-learn, spaCy), TypeScript/JavaScript (React, Next.js, Node.js), Mobile (React Native, Expo, Flutter), Databases (PostgreSQL, MySQL, SQLite), alongside Docker, Git CI/CD, and Linux deployment environments.",
      "faq.q6": "What languages do you speak and how do you collaborate in international teams?",
      "faq.a6": "I am native bilingual in Arabic and Tamazight, fully proficient in professional French (B2/C1), and fluent in technical English. Through Enactus and international freelance projects, I work smoothly across multicultural teams and agile Scrum ceremonies.",

      "contact.eyebrow": "LET'S WORK TOGETHER",
      "contact.title": "Have a project in mind?<br>Let's create something amazing together.",
      "contact.subtitle": "Available for technical leadership, FinTech architecture, full-stack development, and consultation across Morocco and worldwide.",
      "contact.info_title": "Contact Information",
      "contact.info_desc": "Feel free to reach out directly via WhatsApp, email, or through the contact form.",
      "contact.direct_email": "Direct Email",
      "contact.whatsapp": "WhatsApp & Phone",
      "contact.location": "Location",
      "contact.loc_val": "Kénitra / Midelt, Morocco",
      "form.name": "Your Name",
      "form.email": "Your Email",
      "form.service": "Project Type / Service",
      "form.message": "Your Message",
      "form.send": "Send Message",
      "form.name_placeholder": "Your Full Name",
      "form.email_placeholder": "your.email@example.com",
      "form.msg_placeholder": "Tell me about your project, timeline, or technical requirements...",

      "footer.tagline": "Full-Stack Developer at the intersection of software engineering and finance. Based in Kénitra & Midelt, Morocco.",
      "footer.copyright": "© 2026 Mohamed Azelmad. All rights reserved. Engineered with excellence and technological passion.",
      "about.phil_title": "Core Engineering Philosophy",
      "about.phil_p1": "Software architecture is not merely about code—it is about designing resilient systems that withstand scale, minimize operational overhead, and serve real human needs.",
      "about.phil_p2": "I treat code quality, automated testing, security, and financial compliance as foundational non-negotiables, not afterthoughts.",
      "about.tab_background": "Background & Roots",
      "about.tab_philosophy": "Engineering Philosophy",
      "about.view_journey": "Explore My Full Journey",
      "banner.otw": "Available for High-Impact Software Engineering Roles",
      "blueprints.eyebrow": "SYSTEM ARCHITECTURES",
      "blueprints.title": "Architectural Blueprints & Specs",
      "blueprints.subtitle": "Detailed specifications of distributed systems, database schemas, and cryptographic pipelines.",
      "contact.headline": "Have a project in mind?<br>Let's create something amazing together.",
      "contact.intro": "Available for technical leadership, FinTech architecture, and consultation across Morocco and worldwide.",
      "contact.email_label": "Direct Email",
      "contact.phone_label": "WhatsApp & Phone",
      "contact.loc_label": "Location",
      "hero.collaborations": "Trusted by & Academic Affiliations",
      "hero.cta.resume": "Download Resume",
      "hero.cta.work": "View Projects",
      "metrics.eyebrow": "METRICS & ACTIVITY",
      "metrics.title": "Live Coding & Algorithmic Activity",
      "metrics.subtitle": "Continuous engineering contributions and algorithm problem-solving track record.",
      "process.eyebrow": "METHODOLOGY & STANDARDS",
      "process.title": "Engineering Process I Follow",
      "process.subtitle": "A disciplined, iterative delivery lifecycle ensuring high precision from conception to production.",
      "process.s1_title": "Requirements & Modeling",
      "process.s1_desc": "UML class diagrams, domain modeling, and technical scope alignment.",
      "process.s2_title": "Architecture & Database",
      "process.s2_desc": "Relational schema design, normalization, ACID guarantees, and security policies.",
      "process.s3_title": "Iterative Agile Sprints",
      "process.s3_desc": "Scrum ceremonies, 2-week sprint cycles, and continuous peer code reviews.",
      "process.s4_title": "Testing & Verification",
      "process.s4_desc": "Unit testing, integration testing, API contract tests, and security audits.",
      "process.s5_title": "CI/CD & Deployment",
      "process.s5_desc": "Automated Docker build pipelines, cloud provisioning, and telemetry monitoring.",
      "filter.finance": "Finance & ERP",
      "lang.eyebrow": "COMMUNICATION & GLOBAL MOBILITY",
      "lang.title": "Language Proficiency & Native Idioms",
      "lang.subtitle": "Working languages and native idioms enabling seamless collaboration in multicultural and global engineering environments.",
      "lang.ar_name": "Arabic (العربية)",
      "lang.ar_level": "Native Language",
      "lang.ar_desc": "Native written and spoken proficiency. Professional authoring, Modern Standard Arabic, and Moroccan Darija.",
      "lang.berber_name": "Tamazight (ⵜⴰⵎⴰⵣⵉⵖⵜ)",
      "lang.berber_level": "Native Language",
      "lang.berber_desc": "Mother tongue of the Middle Atlas. Foundational linguistic basis for the Awal GPT conversational AI system.",
      "lang.fr_name": "French",
      "lang.fr_level": "B2 / Full Professional",
      "lang.fr_desc": "Primary language of university engineering and business training. Thesis writing, academic defenses, and technical reports.",
      "lang.en_name": "English",
      "lang.en_level": "Technical Intermediate",
      "lang.en_desc": "Technical documentation, international certifications (Cisco, Scrum, CFTE London), and global freelance contracts."
    },
    fr: {
      "page.title": "Mohamed Azelmad — Développeur Full-Stack & Développeur FinTech",
      "nav.home": "Accueil",
      "nav.about": "À Propos",
      "nav.services": "Services",
      "nav.skills": "Compétences",
      "nav.work": "Projets",
      "nav.experience": "Expérience",
      "nav.certifications": "Formations",
      "nav.contact": "Contact",
      "nav.letstalk": "Discutons",
      "nav.faq": "FAQ",

      "hero.status": "Disponible pour Stages PFE & Postes CDI — Kénitra / Rabat / Télétravail",
      "hero.greeting": "Mohamed Azelmad",
      "hero.role": "Développeur Full-Stack & Développeur FinTech",
      "hero.bio": "Double cursus d'excellence : Ingénierie Logicielle (Bachelor GIGD ESTK, DUT ILR) & Comptabilité, Finance et Fiscalité (DEUG FEG). Concepteur d'Awal GPT (RAG Amazigh/Darija), Khlas Wallet (QR Pay & Fraude ML) et ServicePub (Commune de Khénifra).",
      "hero.cv": "Télécharger Mon CV",
      "hero.github": "Profil GitHub",
      "hero.chip_est": "EST Kénitra (GIGD)",
      "hero.chip_feg": "FEG Errachidia",
      "hero.chip_enactus": "Enactus Morocco",
      "hero.chip_telintec": "Telintec SARL",
      "hero.chip_commune": "Commune Khénifra",
      "hero.float_exp": "An d'Expérience Professionnelle",
      "hero.float_spec_tag": "Spécialisation",
      "hero.float_spec": "FinTech · E-Gov · IA Locale",
      "hero.float_loc": "Kénitra / Midelt, Maroc 🇲🇦",

      "about.eyebrow": "À PROPOS DE MOI",
      "about.title": "Concevoir avec Empathie, Développer avec Précision",
      "about.subtitle": "Un profil hybride rare combinant Systèmes Informatiques & Réseaux avec la Comptabilité & Finance pour créer des logiciels à forte valeur ajoutée économique.",
      "about.tab_origins": "Formation & Vision",
      "about.tab_leadership": "Leadership & Impact",
      "about.bg_title": "Racines Académiques & Architecture",
      "about.bg_p1": "Originaire de Midelt, mon parcours repose sur une double excellence académique : une formation mathématique rigoureuse (Bac Sciences Mathématiques A) et des études supérieures en Ingénierie Logiciel & Réseaux (DUT ILR EST Khénifra).",
      "about.bg_p2": "Poursuivant actuellement mon Bachelor en Génie Informatique & Gouvernance Digitale (EST Kénitra) et un DEUG en Comptabilité, Finance & Fiscalité (FEG Errachidia), je conçois des systèmes informatiques à forte valeur économique.",
      "about.lead_title": "Leadership & Engagement Collectif",
      "about.lead_p1": "En tant que Président d'Enactus EST Khénifra, j'ai piloté des équipes d'ingénierie sur des projets d'entrepreneuriat social technologique (UniStay, DalilLegal), assurant le pitch devant des jurys nationaux et la gestion des livrables.",
      "about.lead_p2": "Coordinateur Médias pour le Moroccan Leadership Seminar (MLS) et Vice-Président du Club Digital, je m'investis activement dans la transmission des compétences, le mentorat et l'animation des hackathons.",

      "stats.exp_label": "An d'Expérience Professionnelle",
      "stats.exp_desc": "Stages en entreprise (Telintec, Commune Khénifra, Rawassi) et contrats freelance internationaux.",
      "stats.projects_label": "Projets Conçus & Déployés",
      "stats.projects_desc": "Applications FinTech, modèles IA RAG, portails administratifs et réseaux télécoms.",
      "stats.certs_label": "Certifications Vérifiées",
      "stats.certs_desc": "Scrum PSM I, Advanced SQL, Cisco CCNA, Credly Cloud/DevOps, FreeCodeCamp et Google.",
      "stats.commit_label": "Engagement & Rigueur Technique",
      "stats.commit_desc": "Dédié à la création d'architectures logicielles fiables, scalables et créatrices de valeur.",

      "services.eyebrow": "COMPÉTENCES CLÉS",
      "services.title": "Mes Prestations & Services",
      "services.subtitle": "Des applications de niveau production associant robustesse logicielle, rigueur financière et expérience utilisateur fluide.",
      "services.s1_title": "Ingénierie Web Full-Stack",
      "services.s1_desc": "Applications modernes Single Page & microservices scalables avec React, Next.js, Django, FastAPI et PostgreSQL.",
      "services.s2_title": "Systèmes FinTech & Facturation",
      "services.s2_desc": "Pipelines de paiement, facturation automatisée et outils de gestion comptable en conformité avec le CGI marocain (TVA, IS, IR).",
      "services.s3_title": "IA Locale & NLP (RAG)",
      "services.s3_desc": "Agents conversationnels dialectaux (Darija & Amazigh), inférence locale CPU avec Qwen2.5, spaCy et recherche sémantique.",
      "services.s4_title": "Télécoms & Réseaux Optiques",
      "services.s4_desc": "Conception de réseaux GPON FTTH, configuration OLT/ONT, mesures réflectométriques OTDR et cartographie SIG.",

      "skills.eyebrow": "OUTILS & COMPÉTENCES",
      "skills.title": "Technologies & Stack Technique",
      "skills.subtitle": "Langages, frameworks et outils sélectionnés pour bâtir des solutions numériques performantes.",
      "filter.all": "Toute la Stack",
      "filter.languages": "Langages",
      "filter.frameworks": "Frameworks & Web",
      "filter.ai": "IA & Données",
      "filter.networks": "Réseaux & Cloud",
      "filter.tools": "Design & Outils",

      "projects.eyebrow": "PORTFOLIO DE PROJETS",
      "projects.title": "Réalisations & Projets Déployés",
      "projects.subtitle": "Projets réels déployés combinant développement Full-Stack, ingénierie FinTech, IA dialectale et réseaux télécoms.",

      "exp.eyebrow": "PARCOURS PROFESSIONNEL",
      "exp.title": "Expérience Professionnelle & Leadership",
      "exp.subtitle": "Progression chronologique en entreprise, administration publique, entrepreneuriat social et missions freelance.",
      "exp.telintec_desc": "Déploiement et configuration d'infrastructures fibre optique GPON et ADSL sur le terrain : raccordement et jarretièrage OLT/ONT, calcul de bilans optiques de photométrie, réflectométrie OTDR, splitters passifs, tiroirs optiques et modélisation GIS.",
      "exp.ministere_desc": "Conception et développement de la plateforme ServicePub, portail citoyen officiel pour la dématérialisation et le suivi des demandes administratives communales sous Django avec authentification sécurisée.",
      "exp.rawassi_desc": "Conception de supports graphiques professionnels et développement de sites web statiques et responsives : maquettes ergonomiques, intégration HTML/CSS/JS et suivi créatif de bout en bout.",
      "exp.mls_desc": "Direction artistique de l'identité visuelle de l'édition locale, production audiovisuelle complète et gestion stratégique de la communication digitale sur les réseaux sociaux.",
      "exp.enactus_desc": "Présidence et pilotage stratégique de l'équipe étudiante Enactus : incubation des startups UniStay (logement étudiant) et DalilLegal (orientation juridique), gestion de projet agile et pitchs nationaux.",
      "exp.club_desc": "Co-organisation de hackathons d'ingénierie logicielle, bootcamps de développement web moderne et ateliers d'intelligence artificielle appliquée pour les étudiants de l'EST.",
      "exp.freelance_desc": "Conception et déploiement d'applications web complètes, d'APIs REST haute performance (FastAPI, Django), d'interfaces React dynamiques et de dashboards analytiques avec une note de 5.0/5.",

      "certs.eyebrow": "PARCOURS ACADÉMIQUE",
      "certs.title": "Education & Diplômes Universitaires",
      "certs.subtitle": "Formation supérieure d'excellence combinant ingénierie logicielle, gouvernance digitale et comptabilité financière.",
      "certs.verified_eyebrow": "CERTIFICATIONS NUMÉRIQUES OFFICIELLES",
      "certs.verified_title": "Certifications Vérifiées & Licences",
      "certs.verified_subtitle": "Attestations professionnelles officielles délivrées par des plateformes mondiales (LinkedIn, FreeCodeCamp, Credly, Google).",

      "testi.eyebrow": "RECOMMANDATIONS ACADÉMIQUES",
      "testi.title": "Avis des Professeurs & Encadrants",
      "testi.subtitle": "Témoignages du corps professoral de l'École Supérieure de Technologie de Khénifra (ESTK).",

      "faq.eyebrow": "TRANSPARENCE & QUESTIONS",
      "faq.title": "Foire Aux Questions",
      "faq.subtitle": "Réponses directes et transparentes sur mon parcours, mes compétences et mes disponibilités.",
      "faq.q1": "Pourquoi combiner le Génie Logiciel avec un diplôme en Comptabilité, Finance & Fiscalité ?",
      "faq.a1": "L'informatique traduit des processus métiers. Ma formation en comptabilité et fiscalité (DEUG FEG Errachidia) me permet de concevoir des plateformes FinTech, des ERP et des modules de facturation avec une compréhension native de la TVA, de l'IS/IR, des flux de trésorerie et de la conformité CGI marocaine, sans barrière entre code et gestion financière.",
      "faq.q2": "Quelle est la valeur ajoutée d'Awal GPT pour la Darija et l'Amazigh ?",
      "faq.a2": "Les modèles IA génériques échouent souvent face au mélange linguistique darija/amazigh/français. Awal GPT repose sur un corpus IRCAM officiel de plus de 9 000 entrées, associé à une recherche sémantique RapidFuzz, spaCy et un RAG local optimisé avec Qwen2.5 pour offrir des interactions authentiques et culturellement fidèles.",
      "faq.q3": "En quoi votre expérience terrain en Fibre Optique (GPON) enrichit votre profil Full-Stack ?",
      "faq.a3": "L'expérience réseau physique (raccordements OLT/ONT, splitters optiques, bilan photométrique, VLANs) lève le voile sur le transport des paquets. Elle m'apprend à concevoir des APIs ultra-rapides, à minimiser les allers-retours réseau et à sécuriser rigoureusement les architectures distribuées.",
      "faq.q4": "Êtes-vous disponible pour des opportunités de stage PFE, CDI ou missions freelance ?",
      "faq.a4": "Oui ! Actuellement en Licence/Bachelor GIGD à l'EST Kénitra, je suis activement ouvert aux opportunités d'ingénierie logicielle, stages FinTech, projets de startups et contrats freelance à Kénitra, Rabat, Casablanca ou en télétravail.",
      "faq.q5": "Quelles sont vos technologies logicielles de prédilection au quotidien ?",
      "faq.a5": "Mon environnement quotidien s'appuie sur Python (Django, FastAPI, scikit-learn), JavaScript/TypeScript (React, Next.js), Mobile (React Native, Flutter), SQL avancé (PostgreSQL, MySQL), conteneurs Docker et serveurs Linux.",
      "faq.q6": "Quelles langues maîtrisez-vous pour travailler en équipe ?",
      "faq.a6": "Je suis bilingue natif en Arabe et Tamazight, parfaitement à l'aise en Français professionnel et courant en Anglais technique, avec une expérience éprouvée du travail en équipe agile au sein d'Enactus et de projets freelance internationaux.",

      "contact.eyebrow": "TRAVAILLONS ENSEMBLE",
      "contact.title": "Vous avez un projet en tête ?<br>Créons quelque chose de remarquable ensemble.",
      "contact.subtitle": "Disponible pour du leadership technique, du développement FinTech, de l'ingénierie logicielle et du conseil au Maroc et à l'international.",
      "contact.info_title": "Coordonnées Directes",
      "contact.info_desc": "N'hésitez pas à me contacter par WhatsApp, email direct ou via le formulaire ci-dessous.",
      "contact.direct_email": "Email Direct",
      "contact.whatsapp": "WhatsApp & Téléphone",
      "contact.location": "Localisation",
      "contact.loc_val": "Kénitra / Midelt, Maroc",
      "form.name": "Votre Nom",
      "form.email": "Votre Email",
      "form.service": "Type de Projet / Service",
      "form.message": "Votre Message",
      "form.send": "Envoyer le Message",
      "form.name_placeholder": "Votre Nom Complet",
      "form.email_placeholder": "votre.email@exemple.com",
      "form.msg_placeholder": "Décrivez votre projet, vos besoins techniques ou vos échéances...",

      "footer.tagline": "Développeur Full-Stack à la croisée de l'ingénierie logicielle et de la finance. Basé à Kénitra & Midelt, Maroc.",
      "footer.copyright": "© 2026 Mohamed Azelmad. Tous droits réservés. Conçu avec excellence et passion technologique.",
      "about.phil_title": "Philosophie d'Ingénierie",
      "about.phil_p1": "L'architecture logicielle ne se résume pas au code : il s'agit de concevoir des systèmes résilients capables d'évoluer à grande échelle tout en répondant aux besoins humains réels.",
      "about.phil_p2": "La qualité du code, les tests automatisés, la sécurité et la conformité financière sont pour moi des exigences fondamentales non négociables.",
      "about.tab_background": "Parcours & Racines",
      "about.tab_philosophy": "Philosophie Logicielle",
      "about.view_journey": "Découvrir Mon Parcours Complet",
      "banner.otw": "Disponible pour des Postes d'Ingénierie Logicielle & FinTech",
      "blueprints.eyebrow": "ARCHITECTURES SYSTÈMES",
      "blueprints.title": "Spécifications & Schémas d'Architecture",
      "blueprints.subtitle": "Conception détaillée des systèmes distribués, schémas de bases de données et flux cryptographiques.",
      "contact.headline": "Vous avez un projet en tête ?<br>Créons quelque chose de remarquable ensemble.",
      "contact.intro": "Disponible pour du leadership technique, du développement FinTech et du conseil au Maroc et à l'international.",
      "contact.email_label": "Email Direct",
      "contact.phone_label": "WhatsApp & Téléphone",
      "contact.loc_label": "Localisation",
      "hero.collaborations": "Partenaires & Affiliations Académiques",
      "hero.cta.resume": "Télécharger Mon CV",
      "hero.cta.work": "Voir Mes Projets",
      "metrics.eyebrow": "ACTIVITÉ & MÉTRIQUES",
      "metrics.title": "Activité Algorithmique & Développement",
      "metrics.subtitle": "Historique des contributions logicielles continues et résolution de problèmes algorithmiques.",
      "process.eyebrow": "MÉTHODOLOGIE & STANDARDS",
      "process.title": "Mon Processus d'Ingénierie",
      "process.subtitle": "Un cycle de livraison itératif et rigoureux garantissant une haute précision de la conception au déploiement.",
      "process.s1_title": "Cadrage & Modélisation",
      "process.s1_desc": "Diagrammes de classes UML, modélisation métier et spécifications fonctionnelles précises.",
      "process.s2_title": "Architecture & Données",
      "process.s2_desc": "Conception de schémas relationnels normalisés, conformité ACID et politiques de sécurité.",
      "process.s3_title": "Sprints Agiles Itératifs",
      "process.s3_desc": "Rituels Scrum, cycles de sprints de deux semaines et revues de code rigoureuses.",
      "process.s4_title": "Tests & Validation Qualité",
      "process.s4_desc": "Tests unitaires, tests d'intégration, validation des contrats d'API et audits de sécurité.",
      "process.s5_title": "CI/CD & Mise en Production",
      "process.s5_desc": "Pipelines de conteneurs Docker automatisés, déploiement cloud et télémétrie continue.",
      "filter.finance": "Finance & Gestion",
      "lang.eyebrow": "COMMUNICATION & MOBILITÉ INTERNATIONALE",
      "lang.title": "Maîtrise Linguistique & Idiomes",
      "lang.subtitle": "Langues de travail et idiomes maternels permettant une collaboration fluide dans des contextes multiculturels et internationaux.",
      "lang.ar_name": "Arabe (العربية)",
      "lang.ar_level": "Langue Maternelle",
      "lang.ar_desc": "Maîtrise native écrite et orale. Rédaction professionnelle, arabe standard et Darija marocaine.",
      "lang.berber_name": "Tamazight (ⵜⴰⵎⴰⵣⵉⵖⵜ)",
      "lang.berber_level": "Langue Maternelle",
      "lang.berber_desc": "Langue maternelle de l'Atlas. Base linguistique de développement du projet d'IA dialectale Awal GPT.",
      "lang.fr_name": "Français",
      "lang.fr_level": "B2 / Professionnel Courant",
      "lang.fr_desc": "Langue d'enseignement universitaire et de travail. Rédaction de mémoires, soutenances et rapports techniques.",
      "lang.en_name": "Anglais",
      "lang.en_level": "Intermédiaire Technique",
      "lang.en_desc": "Documentation technique, certifications internationales (Cisco, Scrum, CFTE London) et missions freelance."
    },
    ar: {
      "page.title": "محمد أزلماد — مطور برمجيات متكامل ومطور تكنولوجيا مالية (FinTech Developer)",
      "nav.home": "الرئيسية",
      "nav.about": "عني",
      "nav.services": "الخدمات",
      "nav.skills": "المهارات",
      "nav.work": "المشاريع",
      "nav.experience": "الخبرة",
      "nav.certifications": "التكوين",
      "nav.contact": "اتصل بي",
      "nav.letstalk": "تواصل معي",
      "nav.faq": "أسئلة شائعة",

      "hero.status": "متاح لفرص التدريب وعقود العمل — القنيطرة / الرباط / عن بُعد",
      "hero.greeting": "محمد أزلماد",
      "hero.role": "مطور برمجيات متكامل ومطور تكنولوجيا مالية (FinTech Developer) (FinTech)",
      "hero.bio": "مسار أكاديمي متميز يجمع بين هندسة البرمجيات (بكالوريوس GIGD بالقنيطرة، دبلوم ILR) والمحاسبة والمالية والجبايات (DEUG بالرشيدية). مطور نظام Awal GPT للدارجة والأمازيغية، ومحفظة Khlas Wallet، ومنصة الخدمات الجماعية ServicePub.",
      "hero.cv": "تحميل السيرة الذاتية",
      "hero.github": "حساب GitHub",
      "hero.chip_est": "المدرسة العليا للتكنولوجيا بالقنيطرة",
      "hero.chip_feg": "كلية الاقتصاد بالرشيدية",
      "hero.chip_enactus": "إناكتوس المغرب",
      "hero.chip_telintec": "شركة تيلينتك",
      "hero.chip_commune": "جماعة خنيفرة",
      "hero.float_exp": "سنة من الخبرة الميدانية",
      "hero.float_spec_tag": "التخصص",
      "hero.float_spec": "تكنولوجيا مالية · إدارة رقمية · ذكاء اصطناعي محلي",
      "hero.float_loc": "القنيطرة / ميدلت، المغرب 🇲🇦",

      "about.eyebrow": "نبذة عني",
      "about.title": "تصميم برؤية إنسانية، وهندسة بأعلى معايير الدقة",
      "about.subtitle": "ملف هندسي هجين ونادر يجمع بين علوم الأنظمة المعلوماتية والشبكات والمحاسبة المالية لبناء برمجيات تقدم قيمة اقتصادية ملموسة.",
      "about.tab_origins": "التكوين والرؤية",
      "about.tab_leadership": "القيادة والتأثير المجتمعي",
      "about.bg_title": "الأسس الأكاديمية والمسار",
      "about.bg_p1": "نشأت في مدينة ميدلت بالأطلس المتوسط، وبنيت مساري على تميز أكاديمي مزدوج: تكوين رياضي دقيق (بكالوريا علوم رياضية أ) ودراسات عليا في هندسة البرمجيات والشبكات (DUT بالمدرسة العليا للتكنولوجيا بخنيفرة).",
      "about.bg_p2": "أواصل حالياً سلك البكالوريوس المهني في الهندسة المعلوماتية والحكامة الرقمية (EST القنيطرة) بالتوازي مع دبلوم الدراسات الجامعية العامة في المحاسبة والمالية والجبايات (كلية الرشيدية)، لتصميم برمجيات ذات قيمة اقتصادية واقعية.",
      "about.lead_title": "القيادة والتأثير الجماعي",
      "about.lead_p1": "بصفتي رئيساً لمنظمة إناكتوس (Enactus) بالمدرسة العليا للتكنولوجيا بخنيفرة، قدت فرق عمل طلابية لتطوير مشاريع ريادية تقنية (UniStay و DalilLegal) مع تقديم العروض أمام لجان تحكيم وطنية.",
      "about.lead_p2": "عملت منسقاً إعلامياً للمنتدى المغربي للقيادة (MLS) ونائباً لرئيس النادي الرقمي، حيث أحرص دائماً على مشاركة المعرفة وتأطير الطلبة وتنظيم ورشات البرمجة والهاكاثونات.",

      "stats.exp_label": "سنة من الخبرة المهنية",
      "stats.exp_desc": "تدريب ميداني في شركات ومؤسسات كبرى (تيلينتك، جماعة خنيفرة، رواسي) ومشاريع عمل حر دولية.",
      "stats.projects_label": "مشروع منجز ومنشور",
      "stats.projects_desc": "تطبيقات تكنولوجيا مالية، نماذج ذكاء اصطناعي RAG، منصات إدارة عمومية، وشبكات ألياف بصرية.",
      "stats.certs_label": "شهادة دولية معتمدة",
      "stats.certs_desc": "Scrum PSM I، قواعد بيانات SQL، شبكات سيسكو CCNA، الحوسبة السحابية Credly، وشهادات Google.",
      "stats.commit_label": "الالتزام والشغف التقني",
      "stats.commit_desc": "مكرس لتصميم وتطوير معماريات برمجية عالية الأمان وقابلة للتوسع تخلق أثراً اقتصادياً حقيقياً.",

      "services.eyebrow": "الخدمات والحلول",
      "services.title": "ما أقدمه من حلول برمجية",
      "services.subtitle": "تطبيقات بمعايير الإنتاج تجمع بين المتانة البرمجية، الدقة المالية، وتجربة المستخدم السلسة.",
      "services.s1_title": "تطوير تطبيقات الويب المتكاملة",
      "services.s1_desc": "تطبيقات ويب حديثة SPA ومعماريات الخدمات المصغرة السحابية باستخدام React و Next.js و Django و FastAPI وقواعد بيانات PostgreSQL.",
      "services.s2_title": "أنظمة التكنولوجيا المالية والفوترة",
      "services.s2_desc": "منظومات دفع إلكتروني، أنظمة الفوترة الآلية، وحلول المحاسبة المالية المتوافقة تماماً مع القانون الجبائي المغربي (TVA, IS, IR).",
      "services.s3_title": "الذكاء الاصطناعي المحلي ومعالجة اللغات",
      "services.s3_desc": "مساعدات محادثة ذكية متخصصة في الدارجة المغربية والأمازيغية، معالجة لغوية متقدمة ونماذج RAG تعمل محلياً على المعالجات العادية.",
      "services.s4_title": "شبكات الاتصال والألياف البصرية",
      "services.s4_desc": "هندسة شبكات GPON FTTH، إعداد وبرمجة أجهزة OLT/ONT، قياسات الإشارة بالعاكس الضوئي OTDR، ونظم المعلومات الجغرافية GIS.",

      "skills.eyebrow": "المهارات والتقنيات",
      "skills.title": "حزمتي التقنية والأدوات البرمجية",
      "skills.subtitle": "لغات برمجة وأطر عمل مختارة بعناية لبناء حلول رقمية فائقة الأداء.",
      "filter.all": "كل التقنيات",
      "filter.languages": "لغات البرمجة",
      "filter.frameworks": "أطر العمل والويب",
      "filter.ai": "الذكاء الاصطناعي والبيانات",
      "filter.networks": "الشبكات والسحابة",
      "filter.tools": "التصميم والأدوات",

      "projects.eyebrow": "معرض الأعمال والمشاريع",
      "projects.title": "مشاريع برمجية واقعية منشورة",
      "projects.subtitle": "مشاريع عملية تجمع بين التطوير الشامل، التكنولوجيا المالية، الذكاء الاصطناعي المحلي وشبكات الاتصالات.",

      "exp.eyebrow": "المسار المهني",
      "exp.title": "الخبرات العملية والأنشطة القيادية",
      "exp.subtitle": "تدرج زمني موثق عبر الشركات، الإدارات العمومية، ريادة الأعمال المجتمعية، ومشاريع العمل الحر الدولية.",
      "exp.telintec_desc": "نشر وإعداد البنية التحتية لشبكات الألياف البصرية GPON و ADSL ميدانياً: ربط أنظمة OLT/ONT، حساب توازن الإشارة الضوئية، قياسات OTDR، مقسمات الإشارة والربط الجغرافي GIS.",
      "exp.ministere_desc": "تصميم وتطوير منصة ServicePub، البوابة الرقمية الرسمية لجماعة خنيفرة لمعالجة وتتبع الطلبات الإدارية للمواطنين بنظام مصادقة مشفر ولوحات تحكم Django متطورة.",
      "exp.rawassi_desc": "تصميم الهويات البصرية والمواد الدعائية مع تطوير مواقع الويب المتجاوبة: نماذج UI/UX وتكامل الواجهات الأمامية HTML/CSS/JS.",
      "exp.mls_desc": "الإشراف الفني على الهوية البصرية، الإنتاج السمعي البصري، وإدارة الحملات الرقمية على منصات التواصل الاجتماعي للمنتدى الوطني للقيادة.",
      "exp.enactus_desc": "رئاسة وقيادة فريق إناكتوس الطلابي: احتضان وتطوير المشاريع الريادية UniStay (سكن الطلبة) و DalilLegal (التوجيه القانوني)، وإدارة المشاريع بالمنهجية المرنة Agile.",
      "exp.club_desc": "المشاركة في تنظيم هاكاثونات البرمجيات، دورات تطوير الويب وورشات الذكاء الاصطناعي التطبيقي لطلبة المدرسة.",
      "exp.freelance_desc": "برمجة ونشر منصات الويب المتكاملة، واجهات برمجية REST سريعة (FastAPI, Django)، واجهات React ديناميكية مع تقييم عملاء مستمر 5.0/5.",

      "certs.eyebrow": "المسار الأكاديمي",
      "certs.title": "التعليم والشهادات الجامعية",
      "certs.subtitle": "تكوين أكاديمي معمق يجمع بين هندسة البرمجيات، الحكامة الرقمية، والمحاسبة المالية والجبائية.",
      "certs.verified_eyebrow": "الشهادات الرقمية المعتمدة",
      "certs.verified_title": "الشهادات المهنية الموثقة",
      "certs.verified_subtitle": "شهادات رسمية معتمدة من كبرى المنصات العالمية (LinkedIn, FreeCodeCamp, Credly, Google).",

      "testi.eyebrow": "توصيات الأساتذة",
      "testi.title": "شهادات الأساتذة والمشرفين الأكاديميين",
      "testi.subtitle": "توصيات هيئة التدريس بالمدرسة العليا للتكنولوجيا بخنيفرة (ESTK).",

      "faq.eyebrow": "الشفافية والإجابات",
      "faq.title": "الأسئلة الشائعة",
      "faq.subtitle": "إجابات واضحة وصريحة حول التكوين، التوجه المهني والاستعداد للعمل.",
      "faq.q1": "لماذا الجمع بين الهندسة المعلوماتية ودبلوم المحاسبة والمالية والجبايات؟",
      "faq.a1": "البرمجيات في جوهرها تجسيد لمنطق الأعمال. تكويني المعمق في المحاسبة والمالية والجبايات بكلية الاقتصاد والتدبير بالرشيدية يمكنني من بناء تطبيقات التكنولوجيا المالية (FinTech) وأنظمة التسيير بدراية تامة بالضريبة المغربية (TVA, IS, IR) وحسابات التدفق المالي دون الحاجة لوسيط.",
      "faq.q2": "ما الذي يميز مشروع Awal GPT للدارجة المغربية والأمازيغية؟",
      "faq.a2": "نماذج الذكاء الاصطناعي العالمية تواجه صعوبات مع الدارجة والأمازيغية. يعتمد Awal GPT على قاعدة بيانات معجمية موثقة من المعهد الملكي للثقافة الأمازيغية (IRCAM) تضم أكثر من 9000 مدخل مع تقنيات البحث التقريبي ونظام RAG المحلي ونموذج Qwen2.5 لتقديم إجابات متناسقة ودقيقة.",
      "faq.q3": "كيف تفيدك خبرتك الميدانية في شبكات الألياف البصرية (GPON) في تطوير الويب؟",
      "faq.a3": "التعامل الميداني المباشر مع البنية التحتية للألياف البصرية (أنظمة OLT/ONT، المقسمات الضوئية وقياسات الإشارة) يزيل الغموض عن مسار البيانات في السحابة، مما يمكنني من هندسة واجهات برمجية (APIs) سريعة، منخفضة التأخير وفائقة الأمان.",
      "faq.q4": "هل أنت متاح لفرص التدريب، عقود العمل الدائمة أو العمل الحر؟",
      "faq.a4": "نعم! بصفتي طالباً في سلك البكالوريوس المهني (GIGD) بالمدرسة العليا للتكنولوجيا بالقنيطرة، فأنا متاح للفرص المهنية المتميزة في هندسة البرمجيات، مشاريع التكنولوجيا المالية والعمل الحر بالقنيطرة، الرباط، الدار البيضاء، أو عن بُعد.",
      "faq.q5": "ما هي حزمتك التقنية الأساسية في تطوير البرمجيات؟",
      "faq.a5": "أعتمد يومياً على لغة بايثون (Django, FastAPI, scikit-learn)، جافاسكريبت (React, Next.js)، تطوير تطبيقات الهاتف (React Native, Flutter)، قواعد البيانات SQL، والبيئات السحابية مع Docker ونظام لينكس.",
      "faq.q6": "ما هي اللغات التي تتقنها للتواصل والعمل المشترك؟",
      "faq.a6": "أنا ثنائي اللغة أصيل بالعربية والأمازيغية، ومتمكن بالكامل من الفرنسية المهنية والإنجليزية التقنية، مع خبرة عملية في قيادة فرق العمل في منظمة إناكتوس ومشاريع العمل الحر الدولية.",

      "contact.eyebrow": "تواصل معي للعمل معاً",
      "contact.title": "هل لديك مشروع في بالك؟<br>دعنا نصنع شيئاً رائعاً واستثنائياً معاً.",
      "contact.subtitle": "مستعد للقيادة التقنية، تطوير مشاريع التكنولوجيا المالية، هندسة البرمجيات والاستشارات بالمغرب وعالمياً.",
      "contact.info_title": "معلومات الاتصال المباشر",
      "contact.info_desc": "يسعدني تواصلكم المباشر عبر واتساب، البريد الإلكتروني أو ملء النموذج أسفله.",
      "contact.direct_email": "البريد الإلكتروني المباشر",
      "contact.whatsapp": "واتساب والهاتف",
      "contact.location": "الموقع الجغرافي",
      "contact.loc_val": "القنيطرة / ميدلت، المغرب",
      "form.name": "الاسم الكامل",
      "form.email": "البريد الإلكتروني",
      "form.service": "نوع المشروع / الخدمة",
      "form.message": "رسالتك وتفاصيل المشروع",
      "form.send": "إرسال الرسالة الآن",
      "form.name_placeholder": "الاسم الكامل الكريم",
      "form.email_placeholder": "بريدك.الإلكتروني@مثال.com",
      "form.msg_placeholder": "حدثني عن فكرة مشروعك، المتطلبات التقنية أو الجدول الزمني المقترح...",

      "footer.tagline": "مطور برمجيات متكامل عند ملتقى هندسة البرمجيات والعلوم المالية. مستقر بالقنيطرة وميدلت، المغرب.",
      "footer.copyright": "© 2026 محمد أزلماد. جميع الحقوق محفوظة. صُمم بأعلى معايير الإتقان والشغف التكنولوجي.",
      "about.phil_title": "فلسفة الهندسة البرمجية",
      "about.phil_p1": "هندسة البرمجيات لا تقتصر على كتابة الكود فقط، بل تهدف إلى تصميم أنظمة مرنة قادرة على التوسع والاستجابة لاحتياجات المستخدمين الحقيقية بأعلى كفاءة.",
      "about.phil_p2": "أعتبر جودة الكود، الاختبارات الآلية، الأمان السيبراني، والامتثال المالي ركائز أساسية غير قابلة للمساومة في كل مشروع.",
      "about.tab_background": "المسار والنشأة",
      "about.tab_philosophy": "الفلسفة الهندسية",
      "about.view_journey": "استكشف مساري الكامل",
      "banner.otw": "مستعد لفرص متميزة في هندسة البرمجيات والتكنولوجيا المالية",
      "blueprints.eyebrow": "معماريات الأنظمة",
      "blueprints.title": "المخططات الهندسية والمواصفات المعمارية",
      "blueprints.subtitle": "مواصفات دقيقة للأنظمة الموزعة، مخططات قواعد البيانات، ومسارات التشفير الآمنة.",
      "contact.headline": "هل لديك مشروع في بالك؟<br>دعنا نصنع شيئاً رائعاً واستثنائياً معاً.",
      "contact.intro": "مستعد للقيادة التقنية، تطوير مشاريع التكنولوجيا المالية، هندسة البرمجيات والاستشارات بالمغرب وعالمياً.",
      "contact.email_label": "البريد الإلكتروني المباشر",
      "contact.phone_label": "واتساب والهاتف",
      "contact.loc_label": "الموقع الجغرافي",
      "hero.collaborations": "شركاء النجاح والجهات الأكاديمية",
      "hero.cta.resume": "تحميل السيرة الذاتية",
      "hero.cta.work": "معاينة المشاريع",
      "metrics.eyebrow": "المؤشرات والنشاط البرمجي",
      "metrics.title": "النشاط البرمجي والمسائل الخوارزمية",
      "metrics.subtitle": "سجل مستمر للمساهمات البرمجية وحل المشكلات الخوارزمية المعقدة.",
      "process.eyebrow": "المنهجية والمعايير الهندسية",
      "process.title": "منهجية العمل الهندسي المعتمدة",
      "process.subtitle": "دورة عمل تدريجية ومنضبطة تضمن أعلى درجات الدقة من الفكرة الأولية إلى الإطلاق النهائي.",
      "process.s1_title": "تحديد المتطلبات والنمذجة",
      "process.s1_desc": "مخططات UML، نمذجة نطاق الأعمال، والمواصفات التقنية الدقيقة.",
      "process.s2_title": "المعمارية وقواعد البيانات",
      "process.s2_desc": "تصميم مخططات الجداول العلائقية، ضمان معايير ACID وسياسات الأمان الصارمة.",
      "process.s3_title": "دورات تطوير مرنة (Agile Sprints)",
      "process.s3_desc": "طقوس Scrum الأسبوعية، دورات تطوير مكثفة ومراجعة الأقران المستمرة للكود.",
      "process.s4_title": "الاختبار وضمان الجودة",
      "process.s4_desc": "اختبارات الوحدة، اختبارات التكامل، وتدقيق أمان الواجهات البرمجية APIs.",
      "process.s5_title": "النشر والأتمتة السحابية CI/CD",
      "process.s5_desc": "خطوط بناء آمنة عبر حاويات Docker، استضافة سحابية ومراقبة فورية للأداء.",
      "filter.finance": "المالية والتسيير",
      "lang.eyebrow": "التواصل والكفاءة اللغوية",
      "lang.title": "اللغات والكفاءات اللغوية المتقنة",
      "lang.subtitle": "لغات العمل واللهجات الأم التي تتيح التعاون والتواصل السلس في بيئات العمل الهندسية الدولية ومتعددة الثقافات.",
      "lang.ar_name": "العربية (العربية)",
      "lang.ar_level": "اللغة الأم",
      "lang.ar_desc": "إتقان أصيل كتابة ومحادثة. التحرير المهني، اللغة العربية الفصحى والدارجة المغربية.",
      "lang.berber_name": "الأمازيغية (ⵜⴰⵎⴰⵣⵉⵖⵜ)",
      "lang.berber_level": "اللغة الأم",
      "lang.berber_desc": "اللغة الأم بالأطلس المتوسط. الركيزة المعجمية الأساسية لمشروع الذكاء الاصطناعي Awal GPT.",
      "lang.fr_name": "الفرنسية",
      "lang.fr_level": "مستوى B2 / لغة عمل مهنية",
      "lang.fr_desc": "لغة الدراسة الهندسية والجامعية. كتابة التقارير التقنية، عروض التخرج والتواصل المهني المتقدم.",
      "lang.en_name": "الإنجليزية",
      "lang.en_level": "مستوى تقني متوسط",
      "lang.en_desc": "الوثائق التقنية، امتحانات الشهادات الدولية (سيسكو، سكروم، لندن CFTE) ومشاريع العمل الحر الدولية."
    }
};

  // --------------------------------------------------------------------------
  // 3. I18N LANGUAGE SWITCHER
  // --------------------------------------------------------------------------
  let currentLang = localStorage.getItem('azelmad_lang') || 'en';

    function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('azelmad_lang', lang);

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update active class on buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const dict = translations[lang] || translations.fr || translations.en;

    // Translate all elements with data-i18n using innerHTML for rich text
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Translate all input placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Update document title
    if (dict['page.title']) {
      document.title = dict['page.title'];
    }
  }

  applyLanguage(currentLang);

  // --------------------------------------------------------------------------
  // Attach Click Listeners to All Language Selector Buttons (EN, FR, AR)
  // --------------------------------------------------------------------------
  const allLangBtns = document.querySelectorAll('.lang-btn');
  allLangBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      playClickSound();
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang) {
        applyLanguage(targetLang);
      }
    });
  });

  // --------------------------------------------------------------------------
  // 4. THEME TOGGLE (LIGHT / DARK)
  // --------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('azelmad_theme') || 'light';

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('azelmad_theme', theme);
  }

  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      playClickSound();
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
      showToast(next === 'dark' ? 'Dark Obsidian Mode' : 'Light Glass Mode');
    });
  }

  // --------------------------------------------------------------------------
  // 5. TYPEWRITER EFFECT IN HERO
  // --------------------------------------------------------------------------
  const typewriterText = document.getElementById('typewriterText');
  const roles = [
    "Digital Product Architect",
    "Full-Stack Web & SaaS Engineer",
    "AI & NLP Innovator (Awal GPT)",
    "Systems & Networks Architect",
    "FinTech & Business Software Builder"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function typeRole() {
    if (!typewriterText) return;
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      typewriterText.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 45;
    } else {
      typewriterText.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      isDeleting = true;
      typingSpeed = 2200; // Pause at end of word
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 500; // Pause before next word
    }

    setTimeout(typeRole, typingSpeed);
  }

  typeRole();

  // --------------------------------------------------------------------------
  // 6. ANIMATED NUMBER COUNTERS
  // --------------------------------------------------------------------------
  const counterElements = document.querySelectorAll('.counter');
  let countersAnimated = false;

  function animateCounters() {
    counterElements.forEach(el => {
      const target = +el.getAttribute('data-target');
      let count = 0;
      const step = Math.max(1, Math.floor(target / 40));

      const timer = setInterval(() => {
        count += step;
        if (count >= target) {
          el.textContent = target;
          clearInterval(timer);
        } else {
          el.textContent = count;
        }
      }, 35);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        countersAnimated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('about');
  if (statsSection) observer.observe(statsSection);

  // --------------------------------------------------------------------------
  // 7. TOAST NOTIFICATION UTILITY
  // --------------------------------------------------------------------------
  const toast = document.getElementById('toast');
  let toastTimer = null;

  function showToast(message, icon = 'fa-circle-check') {
    if (!toast) return;
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // --------------------------------------------------------------------------
  // 8. SYNTHESIZED SOUND FX (WEB AUDIO API - 100% OFFLINE)
  // --------------------------------------------------------------------------
  let soundEnabled = localStorage.getItem('azelmad_sound') === 'true';
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const soundIcon = document.getElementById('soundIcon');

  function updateSoundUI() {
    if (!soundIcon) return;
    if (soundEnabled) {
      soundIcon.className = 'fa-solid fa-volume-high';
    } else {
      soundIcon.className = 'fa-solid fa-volume-xmark';
    }
  }

  if (soundToggleBtn) {
    updateSoundUI();
    soundToggleBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      localStorage.setItem('azelmad_sound', soundEnabled);
      updateSoundUI();
      showToast(soundEnabled ? 'Audio Feedback Enabled' : 'Audio Feedback Muted');
      if (soundEnabled) playClickSound();
    });
  }

  function playClickSound() {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.06);
    } catch (e) {
      // AudioContext not allowed before user gesture
    }
  }

  // --------------------------------------------------------------------------
  // 9. COPY TO CLIPBOARD BUTTONS
  // --------------------------------------------------------------------------
  document.querySelectorAll('.copy-val-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      playClickSound();
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy && navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied to clipboard: ${textToCopy}`);
        });
      }
    });
  });

  // --------------------------------------------------------------------------
  // 10. PROJECT FILTERING
  // --------------------------------------------------------------------------
  const projectFilterBtns = document.querySelectorAll('[data-project-filter]');
  const projectCards = document.querySelectorAll('.project-card');

  projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      playClickSound();
      projectFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-project-filter');
      projectCards.forEach(card => {
        const cat = card.getAttribute('data-cat') || '';
        if (filter === 'all' || cat.includes(filter)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 11. TECH STACK FILTERING
  // --------------------------------------------------------------------------
  const skillFilterBtns = document.querySelectorAll('[data-skill-filter]');
  const techCards = document.querySelectorAll('.tech-pill-card');

  skillFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      playClickSound();
      skillFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-skill-filter');
      techCards.forEach(card => {
        const cat = card.getAttribute('data-cat') || '';
        if (filter === 'all' || cat.includes(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 12. ABOUT STORY TABS
  // --------------------------------------------------------------------------
  const storyTabBtns = document.querySelectorAll('.story-tab-btn');
  const storyContents = document.querySelectorAll('.story-content');

  storyTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      playClickSound();
      storyTabBtns.forEach(b => b.classList.remove('active'));
      storyContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetId = 'tab-' + btn.getAttribute('data-tab');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // --------------------------------------------------------------------------
  // 13. FAQ ACCORDION
  // --------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        playClickSound();
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // --------------------------------------------------------------------------
  // 14. PROJECT MODAL DEEP-DIVE
  // --------------------------------------------------------------------------
  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBodyContent = document.getElementById('modalBodyContent');

  function openProjectModal(projectId) {
    const proj = projectDatabase[projectId];
    if (!proj || !modalBodyContent || !projectModal) return;

    let archHtml = '';
    if (proj.architecture && proj.architecture.length) {
      archHtml = `
        <div style="margin: 20px 0;">
          <h4 style="font-size: 1rem; margin-bottom: 10px; color: var(--primary);">
            <i class="fa-solid fa-network-wired"></i> Architecture & Engineering Blueprint:
          </h4>
          <ol style="padding-left: 20px; font-size: 0.9rem; color: var(--text-muted); line-height: 1.7;">
            ${proj.architecture.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </div>
      `;
    }

    modalBodyContent.innerHTML = `
      <div style="margin-bottom: 16px;">
        <span style="font-size: 0.75rem; font-weight: 700; padding: 4px 10px; border-radius: 999px; background: rgba(37,99,235,0.15); color: var(--primary);">
          ${proj.badge}
        </span>
        <h2 style="font-size: 1.8rem; margin: 12px 0 6px;">${proj.title}</h2>
        <span style="font-size: 0.85rem; color: var(--text-light); font-weight: 600;">${proj.category} · Status: ${proj.status}</span>
      </div>

      <p style="font-size: 1rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px;">
        ${proj.summary}
      </p>

      <div style="display: grid; grid-template-columns: 1fr; gap: 14px; margin-bottom: 20px;">
        <div style="background: rgba(239, 68, 68, 0.08); padding: 16px; border-radius: 12px; border-left: 4px solid #ef4444;">
          <strong style="color: #ef4444; font-size: 0.9rem;">Problem Statement:</strong>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 4px;">${proj.problem}</p>
        </div>

        <div style="background: rgba(16, 185, 129, 0.08); padding: 16px; border-radius: 12px; border-left: 4px solid #10b981;">
          <strong style="color: #10b981; font-size: 0.9rem;">Engineering Solution:</strong>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 4px;">${proj.solution}</p>
        </div>
      </div>

      ${archHtml}

      <div style="margin: 20px 0;">
        <h4 style="font-size: 0.9rem; margin-bottom: 10px; color: var(--text-main);">Stack & Tools:</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${proj.technologies.map(t => `<span style="font-size: 0.78rem; font-weight: 600; padding: 5px 12px; border-radius: 8px; background: rgba(255,255,255,0.45); border: 1px solid var(--glass-border-subtle);">${t}</span>`).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 14px; margin-top: 26px; border-top: 1px solid var(--glass-border-subtle); padding-top: 20px;">
        <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn-primary-pill">
          <span>GitHub Code</span>
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="#contact" class="btn-glass-pill" onclick="document.getElementById('projectModal').classList.remove('active')">
          <span>Discuss This Project</span>
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    `;

    projectModal.classList.add('active');
  }

  document.querySelectorAll('.open-project-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      playClickSound();
      const id = btn.getAttribute('data-project-id');
      openProjectModal(id);
    });
  });

  if (modalCloseBtn && projectModal) {
    modalCloseBtn.addEventListener('click', () => {
      playClickSound();
      projectModal.classList.remove('active');
    });

    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        projectModal.classList.remove('active');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 15. CV / RESUME MODAL
  // --------------------------------------------------------------------------
  const cvModal = document.getElementById('cvModal');
  const cvModalBtn = document.getElementById('cvModalBtn');
  const cvModalCloseBtn = document.getElementById('cvModalCloseBtn');

  if (cvModalBtn && cvModal) {
    cvModalBtn.addEventListener('click', () => {
      playClickSound();
      cvModal.classList.add('active');
    });
  }

  if (cvModalCloseBtn && cvModal) {
    cvModalCloseBtn.addEventListener('click', () => {
      playClickSound();
      cvModal.classList.remove('active');
    });

    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) cvModal.classList.remove('active');
    });
  }

  // --------------------------------------------------------------------------
  // 16. INTERACTIVE CLI TERMINAL
  // --------------------------------------------------------------------------
  const terminalModal = document.getElementById('terminalModal');
  const terminalToggleBtn = document.getElementById('terminalToggleBtn');
  const termCloseBtn = document.getElementById('termCloseBtn');
  const termCloseDot = document.getElementById('termCloseDot');
  const terminalInput = document.getElementById('terminalInput');
  const terminalBody = document.getElementById('terminalBody');

  function openTerminal() {
    if (terminalModal) {
      playClickSound();
      terminalModal.classList.add('active');
      if (terminalInput) terminalInput.focus();
    }
  }

  function closeTerminal() {
    if (terminalModal) {
      playClickSound();
      terminalModal.classList.remove('active');
    }
  }

  if (terminalToggleBtn) terminalToggleBtn.addEventListener('click', openTerminal);
  if (termCloseBtn) termCloseBtn.addEventListener('click', closeTerminal);
  if (termCloseDot) termCloseDot.addEventListener('click', closeTerminal);

  if (terminalModal) {
    terminalModal.addEventListener('click', (e) => {
      if (e.target === terminalModal) closeTerminal();
    });
  }

  const cliCommands = {
    help: () => `
Available commands:
  <span class="term-highlight">about</span>       - Background and core competence
  <span class="term-highlight">skills</span>      - Engineering tools, languages, and frameworks
  <span class="term-highlight">blueprints</span>  - View architectural specs (FIG. 01, FIG. 02, FIG. 03)
  <span class="term-highlight">projects</span>    - List all 8 featured projects and specs
  <span class="term-highlight">leetcode</span>    - View LeetCode problem solving status
  <span class="term-highlight">cv</span>          - View resume credentials modal
  <span class="term-highlight">contact</span>     - Show verified email, WhatsApp and social links
  <span class="term-highlight">education</span>   - Academic degrees (EST Kénitra GIGD, EST Khénifra, FP Errachidia)
  <span class="term-highlight">certs</span>       - View Bloomberg, FINRA, Cisco, Intel, Meta certs
  <span class="term-highlight">hire</span>        - Open the contact inquiry form
  <span class="term-highlight">whoami</span>      - Guest developer inspecting Mohamed's portfolio
  <span class="term-highlight">clear</span>       - Clear the console screen
  <span class="term-highlight">date</span>        - Display current system date & local timezone
    `,

    about: () => `
Mohamed Azelmad — Full-Stack Engineer, AI Innovator & Networks Architect
Location: Midelt / Khénifra / Kénitra, Morocco.
Profile: Hybrid engineer combining Computer Systems & Networks (EST Khénifra & EST Kénitra GIGD) with Accounting & Finance (FEG Errachidia).
Ex-President of Enactus ESTK · Vice-President Club Digital ESTK · PFE Developer @ Ministère de l'Intérieur.
    `,

    skills: () => `
Core Stack:
  - Languages: Python, JavaScript, TypeScript, PHP, C/C++, Dart, SQL, HTML5/CSS3
  - Web & Mobile: React.js, Next.js, Django, Laravel, Flutter, Node.js, Tailwind CSS
  - AI & NLP: LangChain, FAISS, PyTorch, RAG Pipelines, Moroccan Dialect Tokenization
  - Networks: GPON Fiber, OLT/ONT, Cisco IOS, VLANs, Wireshark, Docker, Linux
    `,

    blueprints: () => {
      closeTerminal();
      window.location.hash = '#blueprints';
      return `<span class="term-success">Navigating to Architectural Blueprints (FIG. 01, 02, 03)...</span>`;
    },

    projects: () => `
Featured Projects (8 total):
  1. Awal GPT (أول جي بي تي) — AI RAG Chatbot for Darija & Amazigh
  2. ServicePub — Citizen-to-Government platform for Ministère de l'Intérieur
  3. MyWallet MW / Khlas Wallet — FinTech double-entry accounting & VAT automation SaaS
  4. UniStay — Student housing & roommate mobile app (Flutter + Laravel)
  5. Telintec GIS & GPON Lab — Optical splitters, OLT/ONT & enterprise VLANs
  6. OSINT & Password Security Lab — Local defense sandbox (FastAPI + scrypt)
  7. Bank Management System — High-performance C/C++ transactional engine
  8. MyPDF Document Suite — Client-side privacy-first PDF tools in JS
    `,

    leetcode: () => {
      closeTerminal();
      window.location.hash = '#stats-section';
      return `<span class="term-success">Navigating to LeetCode & Coding Metrics section...</span>`;
    },

    cv: () => {
      closeTerminal();
      if (cvModal) cvModal.classList.add('active');
      return `<span class="term-success">Opening CV / Resume Preview Modal...</span>`;
    },

    contact: () => `
Direct Contact Details:
  - Email:        mohmadazelmad3@gmail.com
  - WhatsApp:     +212 672-134309
  - LinkedIn:     https://www.linkedin.com/in/mohamed-azelmad-908973281/
  - GitHub:       https://github.com/azelmad2004
  - LeetCode:     https://leetcode.com/u/mohmadazelmad/
  - ResearchGate: https://www.researchgate.net/profile/Mohamed-Kmh?ev=hdr_xprf
  - X / Twitter:  https://x.com/a_z_e_l_m_a_d
  - Location:     Midelt, Kénitra & Khénifra, Morocco (Available Worldwide)
    `,

    education: () => `
Academic Degrees:
  - En cours: Bachelor Génie Informatique & Gouvernance Digitale (GIGD) @ EST Kénitra
  - 2024–2026: DUT Ingénierie Logiciel & Réseaux @ EST Khénifra
  - 2023–2026: Licence / DEUG Comptabilité Finance Fiscalité @ FEG Errachidia
  - Baccalauréat Libre — Sciences Mathématiques A
  - Baccalauréat Professionnel — Maintenance Réseaux Informatiques
    `,

    certs: () => `
Verified Certifications:
  - Bloomberg Market Concepts (BMC)
  - FINRA SIE (Securities Industry Essentials)
  - CoStar Real Estate Analytics
  - Cisco Networking Academy: Networking Essentials / CCNA
  - Intel Digital Readiness: AI & Technology Fundamentals
  - Meta: Front-End Development & Version Control
  - Credly: Cloud & DevOps Fundamentals
  - Scrum & Agile Fundamentals
    `,

    whoami: () => `guest_reviewer@azelmad-portfolio:~$ Access Granted. Feel free to explore all modules!`,

    hire: () => {
      closeTerminal();
      window.location.hash = '#contact';
      return `<span class="term-success">Navigating to Contact Section...</span>`;
    },

    clear: () => {
      if (terminalBody) terminalBody.innerHTML = '';
      return '';
    },

    date: () => `Current local time: ${new Date().toLocaleString()}`
  };

  if (terminalInput && terminalBody) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const raw = terminalInput.value.trim().toLowerCase();
        terminalInput.value = '';

        if (!raw) return;

        playClickSound();

        // Print entered command
        const userLine = document.createElement('div');
        userLine.className = 'term-line';
        userLine.innerHTML = `<span class="term-prompt">azelmad:~$</span> ${raw}`;
        terminalBody.appendChild(userLine);

        // Process command
        const outLine = document.createElement('div');
        outLine.className = 'term-line';

        if (cliCommands[raw]) {
          const res = cliCommands[raw]();
          if (res) outLine.innerHTML = res;
        } else {
          outLine.innerHTML = `<span class="term-warning">Command not recognized: '${raw}'. Type <span class="term-highlight">'help'</span> for list.</span>`;
        }

        terminalBody.appendChild(outLine);
        terminalBody.scrollTop = terminalBody.scrollHeight;
      }
    });
  }

  // --------------------------------------------------------------------------
    // --------------------------------------------------------------------------
  // 17. CONTACT FORM SUBMISSION (DIRECT TO MOHMADAZELMAD3@GMAIL.COM)
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const formSubmitBtn = document.getElementById('formSubmitBtn');

  if (contactForm && formSubmitBtn) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      playClickSound();

      const name = document.getElementById('userName').value.trim();
      const email = document.getElementById('userEmail').value.trim();
      const service = document.getElementById('projectType').value;
      const message = document.getElementById('userMessage').value.trim();

      if (!name || !email || !message) {
        showToast('Veuillez remplir tous les champs obligatoires.', 'fa-triangle-exclamation');
        return;
      }

      // Visual state: Sending
      const originalBtnHtml = formSubmitBtn.innerHTML;
      formSubmitBtn.disabled = true;
      formSubmitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Envoi en cours...</span>';

      try {
        const response = await fetch('https://formsubmit.co/ajax/mohmadazelmad3@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            service: service,
            message: message,
            _subject: `Message Portfolio de ${name} (${service})`
          })
        });

        if (response.ok) {
          formSubmitBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> <span>Message Envoyé !</span>';
          formSubmitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
          showToast('Message envoyé avec succès à Mohamed Azelmad !', 'fa-circle-check');
          contactForm.reset();

          setTimeout(() => {
            formSubmitBtn.disabled = false;
            formSubmitBtn.innerHTML = originalBtnHtml;
            formSubmitBtn.style.background = '';
          }, 4500);
        } else {
          throw new Error('FormSubmit error');
        }
      } catch (err) {
        console.warn('AJAX delivery fallback to mailto:', err);
        // Fallback directly to mailto
        const bodyText = `Nom: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`;
        const mailtoUrl = `mailto:mohmadazelmad3@gmail.com?subject=${encodeURIComponent('Contact Portfolio - ' + service)}&body=${encodeURIComponent(bodyText)}`;
        window.location.href = mailtoUrl;

        showToast('Ouverture de votre messagerie pour envoyer à mohmadazelmad3@gmail.com', 'fa-envelope');
        formSubmitBtn.disabled = false;
        formSubmitBtn.innerHTML = originalBtnHtml;
      }
    });
  }

  // --------------------------------------------------------------------------
  // 18. BACK TO TOP BUTTON & ACTIVE NAV ON SCROLL
  // --------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      playClickSound();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile menu toggle
  
  // --------------------------------------------------------------------------
  // MOBILE MENU CONTROLLER (ROBUST & CLEAN)
  // --------------------------------------------------------------------------
  const mobileToggleBtn = document.getElementById('mobileToggleBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggleBtn && navLinks) {
    mobileToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      playClickSound();
      const isOpen = navLinks.classList.toggle('nav-open');
      mobileToggleBtn.setAttribute('aria-expanded', isOpen);
      const icon = mobileToggleBtn.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }
    });

    // Close on navigation link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('nav-open');
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
        const icon = mobileToggleBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileToggleBtn.contains(e.target)) {
        if (navLinks.classList.contains('nav-open')) {
          navLinks.classList.remove('nav-open');
          mobileToggleBtn.setAttribute('aria-expanded', 'false');
          const icon = mobileToggleBtn.querySelector('i');
          if (icon) icon.className = 'fa-solid fa-bars';
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // FAQ ACCORDION INTERACTIVITY
  // --------------------------------------------------------------------------
  const faqArticles = document.querySelectorAll('.faq-item');
  faqArticles.forEach(article => {
    const header = article.querySelector('.faq-question-header');
    if (header) {
      header.addEventListener('click', () => {
        playClickSound();
        article.classList.toggle('active');
      });
    }
  });


  // Close when clicking any nav link
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav-open');
      toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('nav-open') && !navLinks.contains(e.target) && e.target !== toggleBtn) {
      navLinks.classList.remove('nav-open');
      toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });

  // Close on Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('nav-open')) {
      navLinks.classList.remove('nav-open');
      toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });
})();
