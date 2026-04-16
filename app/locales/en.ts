export default {
  hero: {
    available:   "Available now",
    title1:      "Full Stack",
    title2:      "Developer",
    description: "I build your web and mobile apps, fix your bugs and maintain your existing projects.",
    cta: {
      primary: "Start a project",
      pricing: "See my pricing",
      email:   "Send an email",
    },
    stats: {
      years:        "of experience",
      responseTime: "response time",
      satisfaction: "client satisfaction",
    },
  },

  services: {
    eyebrow:  "What I do",
    title:    "I build what you need",
    subtitle: "From urgent bugs to full projects — local and international clients.",
    list: {
      shop: {
        title:       "I build your online shop",
        description: "Catalogue, cart, payment, seller dashboard — a complete, tailored store.",
      },
      app: {
        title:       "I design your mobile app",
        description: "iOS and Android from a single codebase. Polished UI, native feel.",
      },
      debug: {
        title:       "I fix your bugs fast",
        description: "Error 500, broken form, slow page — diagnosis and fix within 24h.",
      },
      data: {
        title:       "I organise your data",
        description: "Database, API, automated exports — your data reliable and accessible.",
      },
      deploy: {
        title:       "I deploy and maintain your app",
        description: "Launch, security updates, monitoring — your app runs without a hitch.",
      },
      ai: {
        title:       "I add intelligence to your tools",
        description: "Auto-suggestions, text processing, chatbot — AI working for your business.",
      },
    },
  },

  projects: {
    eyebrow:      "Work",
    title:        "Recent projects",
    challenge:    "Problem",
    solution:     "Solution",
    year:         "Year",
    duration:     "Duration",
    confidential: "Visuals blurred for client confidentiality.",
    list: {
      cfm: {
        title:       "Management platform for a training centre",
        description: "Full administration: students, schedules, grades, documents and attendance.",
        challenge:   "Everything was managed on Excel and WhatsApp — impossible to maintain.",
        solution:    "A unified back-office with role management, auto-generated documents and attendance tracking.",
      },
      monument: {
        title:       "Historic monument discovery app",
        description: "Immersive mobile experience: stories, quizzes, 3D content and guided tours.",
        challenge:   "Make culture engaging for young users without sacrificing performance.",
        solution:    "Lightweight 3D engine (Three.js), quiz/XP system and CMS for stories.",
      },
      hotel: {
        title:       "Hotel booking platform with negotiation",
        description: "Search, offers, counter-offers, online payment — mobile and back-office.",
        challenge:   "Sync availability in real time while enabling price negotiation.",
        solution:    "Transactional chat, dynamic pricing management and Stripe integration.",
      },
      events: {
        title:       "Event management mobile app",
        description: "Create, discover, invite, chat and pay — all from the app.",
        challenge:   "Manage participants, messages and payments in real time in one app.",
        solution:    "Firebase for real-time, Strapi for content, internal wallet.",
      },
    },
  },

  contact: {
    title:        "Your project",
    name:         "Your name",
    email:        "Your email",
    message:      "Describe your need…",
    send:         "Send",
    sending:      "Sending…",
    success:      "Message sent!",
    responseTime: "Reply within 24h",
  },

  pricing: {
    eyebrow:  "Pricing",
    title:    "Clear prices,",
    subtitle: "Available for local and international projects.",
    currency: { mg: "Ariary (MGA)", eu: "Euro (€)" },
    plans: {
      debug: {
        name:             "Quick fix",
        tagline:          "Bug fixed within 24h",
        period:           "/ fix",
        badge:            "",
        cta:              "Submit a bug",
        note:             "Perfect for emergencies",
        whatsappMessage:  "Hello, I'd like to submit a bug for a quick fix.",
        features: [
          "Targeted bug fix",
          "Error 500 / 404 / forms",
          "Performance optimisation",
          "Delivered within 24h",
          "1 revision included",
          "WhatsApp / Email support",
        ],
      },
      project: {
        name:             "Project development",
        tagline:          "Custom application",
        period:           "/ project",
        badge:            "Most requested",
        cta:              "Request a free quote",
        note:             "Reply within 24h",
        whatsappMessage:  "Hello, I'd like a quote for a development project.",
        features: [
          "Requirements analysis included",
          "Laravel, React, Next.js, Ionic",
          "Modern responsive design",
          "REST API + integrations",
          "Testing & deployment",
          "Documentation delivered",
          "30-day post-delivery support",
        ],
      },
      maintenance: {
        name:             "Monthly maintenance",
        tagline:          "Your dedicated developer",
        period:           "/ month",
        badge:            "",
        cta:              "Start maintenance",
        note:             "Cancel anytime",
        whatsappMessage:  "Hello, I'm interested in the monthly maintenance plan.",
        features: [
          "10h of work/month",
          "Bug fixes priority",
          "Security updates",
          "Regular backups",
          "Monthly report",
          "WhatsApp availability",
          "No commitment",
        ],
      },
    },
    guarantees: [
      { title: "Fast reply",           desc: "I reply within 24h, usually much sooner." },
      { title: "Quality guaranteed",   desc: "Clean, tested, documented code." },
      { title: "No commitment",        desc: "Cancel maintenance anytime." },
    ],
    faq: [
      {
        q: "How does payment work?",
        a: "50% upfront, 50% on delivery. Maintenance: monthly payment. Mobile Money and bank transfer accepted.",
      },
      {
        q: "Do you work remotely?",
        a: "Yes, 100% remote from Antananarivo, Madagascar. Local and international clients via WhatsApp, email and video calls.",
      },
      {
        q: "What are the delivery timelines?",
        a: "Showcase site: 1–2 weeks. Full application: 4–12 weeks. Detailed quote with schedule provided.",
      },
      {
        q: "What if I'm not satisfied?",
        a: "I'll revise until you're happy. For bug fixes, no charge if the issue isn't resolved.",
      },
    ],
    cta: {
      title:    "Have a project in mind?",
      subtitle: "Describe your need — free estimate within 24h.",
      btn:      "Chat on WhatsApp",
      wp:       "Hello, I'd like to discuss a project.",
    },
  },
} as const;