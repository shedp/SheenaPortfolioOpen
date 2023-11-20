const projectData = [
  {
    title: "Guest Access",
    subtitle: "My first enterprise product! ",
    description: "This project aims to improve the process for employees to request for 3rd party guests to access the enterprise network. More information coming soon!",
    image: "GuestAccessRequest.png",
    icons: [
      { icon: "open-book.png", link: 'project/guestaccess_about.html', alt: "read more" }
    ]
  },
  {
    title: "Rain Check",
    subtitle: "Have you had a rain check? ",
    description: "This is a solo front end web application build with ReactJS and Tailwind CSS. It uses the OpenWeatherApp API, WeatherAPI, Google Times Zone API and Unsplash API. It is deployed on Netlify.",
    image: "rain_check.png",
    icons: [
      { icon: "web.png", link: "https://unique-palmier-9835d9.netlify.app/", alt: "netlify app" },
      { icon: "github.png", link: "https://github.com/shedp/rain_check", alt: "github" }
    ]
  },
  {
    title: "Upper Hand Poker",
    subtitle: "A poker game with a twist! - you can see a player's hand! ",
    description: "It is built with Vite, tailwind CSS with a Flask server and a postgreSQL database. We use Flask-Sockets and Redux in building the game flow. Assets were a mixture of DALL-E and Photoshop.",
    image: "upperhand.png",
    icons: [
      { icon: "github.png", link: "https://github.com/liambrockpy/upper-hand-vite-client", alt: "client github" },
      { icon: "github.png", link: "https://github.com/liambrockpy/upper-hand-server", alt: "server github" }
    ]
  },
  {
    title: "URL Shortener",
    subtitle: "A URL shortener for lovers of pink! ",
    description: "This is a URL shorten created with Python (Flask) and Jinga for the frontend. It uses an SQL database (SQLAlchemy).",
    image: "urlshorten.png",
    icons: [
      { icon: "github.png", link: "https://github.com/shedp/pythonURLShortener", alt: "github" },
    ]
  },
  {
    title: "Ye Olde Quiz",
    subtitle: "Ye Old Quiz brings the pub quiz to your homes. ",
    description: "This retro-style multiplayer quiz game uses Socket.io and a React.js frontend with a Node.js for the backend.",
    image: "yeoldequiz.png",
    icons: [
      { icon: "github.png", link: "https://github.com/PollyFenne/Ye_olde_quiz_frontend", alt: "client github" },
      { icon: "github.png", link: "https://github.com/shedp/YeOldeQuizBackend", alt: "server github" }
    ]
  },
  {
    title: "Git Tracker",
    subtitle: "Octodog > Octocat. ",
    description: "With Git Tracker, you can search for Github users and view their stats such as repos and languages. It utilises the Github API and React for the frontend. It uses CharJS to visualize the language usage by the user. (Dogs are better trackers!)",
    image: "gittracker.png",
    icons: [
      { icon: "github.png", link: "https://github.com/shedp/GithubTrackerReact", alt: "github" },
    ]
  },
  {
    title: "Habitual",
    subtitle: "Turn your rituals into good habits. ",
    description: "Habitual is a habit tracker created using NodeJS, ExpressJS, authentication, and a postgreSQL database",
    image: "habitual.png",
    icons: [
      { icon: "web.png", link: "https://relaxed-speculoos-a7d774.netlify.app/client/login.html", alt: "netlify app" },
      { icon: "github.png", link: "https://github.com/JLP2000/habitual-client", alt: "client github" },
      { icon: "github.png", link: "https://github.com/JLP2000/habitual-server", alt: "server github" }
    ]
  },
  {
    title: "Liberty",
    subtitle: "Free your unconventional ideas with Liberty ",
    description: " - an anonymous blogging app created with a mongoDB and Mongoose. It was created with vanilla CSS and Javascript.",
    image: "liberty.png",
    icons: [
      { icon: "github.png", link: "https://github.com/shedp/liberty-blog", alt: "github" },
    ]
  },
  {
    title: "preVent",
    subtitle: "Vent to Prevent! ",
    description: "This is an anonymous blogging app that encourages you to vent out your frustrations. It utilises a GIF api and was created with vanilla CSS and Javascript.",
    image: "prevent.png",
    icons: [
      { icon: "web.png", link: "https://dreamy-jalebi-cb99ed.netlify.app/client/index.html", alt: "netlify app" },
      { icon: "github.png", link: "https://github.com/shedp/preVent", alt: "github" },
    ]
  }
];

export default projectData;