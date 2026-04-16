export default {
  hero: {
    available:   "Disponible maintenant",
    title1:      "Développeur",
    title2:      "Full Stack",
    description: "Je conçois vos applications web et mobile, corrige vos bugs et assure la maintenance de vos projets existants.",
    cta: {
      primary: "Démarrer un projet",
      pricing: "Voir mes tarifs",
      email:   "Envoyer un email",
    },
    stats: {
      years:        "d'expérience",
      responseTime: "de délai de réponse",
      satisfaction: "de satisfaction client",
    },
  },

  services: {
    eyebrow:  "Ce que je fais",
    title:    "Je construis ce dont vous avez besoin",
    subtitle: "Du bug urgent au projet complet — missions locales et internationales.",
    list: {
      shop: {
        title:       "Je crée votre boutique en ligne",
        description: "Catalogue, panier, paiement, tableau de bord vendeur — une boutique complète et sur mesure.",
      },
      app: {
        title:       "Je conçois votre application mobile",
        description: "iOS et Android depuis une seule base de code. Interface soignée, expérience native.",
      },
      debug: {
        title:       "Je corrige vos bugs rapidement",
        description: "Erreur 500, formulaire cassé, page lente — diagnostic et correction sous 24h.",
      },
      data: {
        title:       "J'organise vos données",
        description: "Base de données, API, exports automatisés — vos données accessibles et fiables.",
      },
      deploy: {
        title:       "Je déploie et maintiens votre app",
        description: "Mise en ligne, mises à jour de sécurité, monitoring — votre app tourne sans accroc.",
      },
      ai: {
        title:       "J'intègre de l'intelligence dans vos outils",
        description: "Suggestions automatiques, traitement de texte, chatbot — l'IA au service de votre métier.",
      },
    },
  },

  projects: {
    eyebrow:      "Réalisations",
    title:        "Quelques projets",
    challenge:    "Problème",
    solution:     "Réponse",
    year:         "Année",
    duration:     "Durée",
    confidential: "Visuels floutés — confidentialité client.",
    list: {
      cfm: {
        title:       "Plateforme de gestion pour centre de formation",
        description: "Administration complète : élèves, plannings, notes, documents et absences.",
        challenge:   "Tout était géré sur Excel et WhatsApp — impossible à maintenir.",
        solution:    "Un back-office unifié avec gestion des rôles, documents auto-générés et suivi des absences.",
      },
      monument: {
        title:       "Application de découverte des monuments historiques",
        description: "Expérience mobile immersive : anecdotes, quiz, contenus 3D et parcours guidés.",
        challenge:   "Rendre la culture attractive pour les jeunes sans sacrifier les performances.",
        solution:    "Moteur 3D léger (Three.js), système de quiz/XP et CMS pour les récits.",
      },
      hotel: {
        title:       "Plateforme de réservation hôtelière avec négociation",
        description: "Recherche, offres, contre-offres, paiement en ligne — mobile et backoffice.",
        challenge:   "Synchroniser les disponibilités en temps réel tout en permettant la négociation.",
        solution:    "Chat transactionnel, gestion dynamique des tarifs et intégration Stripe.",
      },
      events: {
        title:       "App mobile de gestion d'événements",
        description: "Créer, découvrir, inviter, discuter et payer — tout depuis l'app.",
        challenge:   "Gérer participants, messages et paiements en temps réel dans une seule app.",
        solution:    "Firebase pour le temps réel, Strapi pour les contenus, wallet interne.",
      },
    },
  },

  contact: {
    title:        "Votre projet",
    name:         "Votre nom",
    email:        "Votre email",
    message:      "Décrivez votre besoin…",
    send:         "Envoyer",
    sending:      "Envoi…",
    success:      "Message envoyé !",
    responseTime: "Réponse sous 24h",
  },

  pricing: {
    eyebrow:  "Tarifs",
    title:    "Des prix clairs,",
    subtitle: "Disponible pour missions locales et internationales.",
    currency: { mg: "Ariary (MGA)", eu: "Euro (€)" },
    plans: {
      debug: {
        name:             "Dépannage rapide",
        tagline:          "Bug corrigé sous 24h",
        period:           "/ intervention",
        badge:            "",
        cta:              "Soumettre un bug",
        note:             "Idéal pour une urgence",
        whatsappMessage:  "Bonjour, je souhaite soumettre un bug pour correction rapide.",
        features: [
          "Correction d'un bug ciblé",
          "Erreur 500 / 404 / formulaires",
          "Optimisation lenteur",
          "Livraison sous 24h",
          "1 révision incluse",
          "Support WhatsApp / Email",
        ],
      },
      project: {
        name:             "Développement projet",
        tagline:          "Application sur mesure",
        period:           "/ projet",
        badge:            "Le plus demandé",
        cta:              "Demander un devis gratuit",
        note:             "Réponse sous 24h",
        whatsappMessage:  "Bonjour, je souhaite un devis pour un projet de développement.",
        features: [
          "Analyse des besoins incluse",
          "Laravel, React, Next.js, Ionic",
          "Design responsive moderne",
          "API REST + intégrations",
          "Tests & déploiement",
          "Documentation livrée",
          "Support 30 jours post-livraison",
        ],
      },
      maintenance: {
        name:             "Maintenance mensuelle",
        tagline:          "Votre dev dédié",
        period:           "/ mois",
        badge:            "",
        cta:              "Démarrer la maintenance",
        note:             "Résiliable à tout moment",
        whatsappMessage:  "Bonjour, je suis intéressé par la maintenance mensuelle.",
        features: [
          "10h d'interventions/mois",
          "Corrections bugs en priorité",
          "Mises à jour sécurité",
          "Sauvegardes régulières",
          "Rapport mensuel",
          "Disponibilité WhatsApp",
          "Sans engagement",
        ],
      },
    },
    guarantees: [
      { title: "Réponse rapide",    desc: "Je réponds dans les 24h, souvent bien avant." },
      { title: "Qualité garantie",  desc: "Code propre, testé, documenté." },
      { title: "Sans engagement",   desc: "Résiliez la maintenance quand vous voulez." },
    ],
    faq: [
      {
        q: "Comment se passe le paiement ?",
        a: "50% à la commande, 50% à la livraison. Maintenance : paiement mensuel. Mobile Money (MVola, Orange Money) et virement acceptés.",
      },
      {
        q: "Travaillez-vous à distance ?",
        a: "Oui, 100% à distance depuis Antananarivo, Madagascar. Clients locaux et internationaux via WhatsApp, email et visioconférence.",
      },
      {
        q: "Quels délais pour un projet ?",
        a: "Site vitrine : 1–2 semaines. Application complète : 4–12 semaines. Devis détaillé avec planning fourni.",
      },
      {
        q: "Que faire si je ne suis pas satisfait ?",
        a: "Je fais des révisions jusqu'à votre satisfaction. Pour le dépannage, pas de facturation si le bug n'est pas résolu.",
      },
    ],
    cta: {
      title:    "Vous avez un projet en tête ?",
      subtitle: "Décrivez votre besoin — estimation gratuite sous 24h.",
      btn:      "Discutons sur WhatsApp",
      wp:       "Bonjour, je souhaite discuter d'un projet.",
    },
  },
} as const;