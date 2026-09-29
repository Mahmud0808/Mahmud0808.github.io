import { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    id: 'teledrive',
    name: 'TeleDrive',
    description:
      'Turns a private Telegram channel on your own account into a drive, with no server in between. Files are sealed with AES-256-GCM before they leave the device, and a wiped phone rebuilds the whole tree from the message captions. Runs on Android, Windows, Linux and macOS.',
    year: 2026,
    img: '/images/projects/teledrive.webp',
    platform: 'mobile',
    stack: ['Kotlin', 'Compose Multiplatform', 'TDLib', 'AES-256-GCM'],
    links: [
      { kind: 'github', href: 'https://github.com/Mahmud0808/TeleDrive' },
    ],
  },
  {
    id: 'depthly',
    name: 'Depthly',
    description:
      'Live wallpaper that puts the depth effect on Android. The subject is cut out of your photo on the device itself, then the clock is composited behind it, so the person overlaps the numbers.',
    year: 2026,
    img: '/images/projects/depthly.webp',
    platform: 'mobile',
    stack: ['Kotlin', 'Jetpack Compose', 'ONNX Runtime', 'Room'],
    links: [
      {
        kind: 'playstore',
        href: 'https://play.google.com/store/apps/details?id=com.drdisagree.depthly',
      },
    ],
  },
  {
    id: 'thestral-vault',
    name: 'Thestral Vault',
    description:
      'Royalty ledger for a figure studio. Artists and character owners type a four-digit ID to see what they are owed, admins log prints and settle balances, and every payment can be reversed without losing the trail behind it.',
    year: 2026,
    img: '/images/projects/thestral-vault.webp',
    platform: 'web',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'Vercel'],
    links: [{ kind: 'live', href: 'https://thestral-vault.vercel.app' }],
  },
  {
    id: 'dev-cleaner',
    name: 'Dev Cleaner',
    description:
      'Desktop app that clears build output, caches and dependency folders off your disk. A folder is only ever listed when a project marker file sits above it, so nothing outside a real project is a candidate, and nothing is deleted until you check it.',
    year: 2026,
    img: '/images/projects/devcleaner.webp',
    platform: 'other',
    stack: ['Electron', 'React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    links: [
      { kind: 'github', href: 'https://github.com/Mahmud0808/DevCleaner' },
    ],
  },
  {
    id: 'fuel-me',
    name: 'Fuel Me',
    description:
      'A one-page donation site built like a street poster: wood-type headlines, taxi-yellow bands, wheat-pasted payment strips. Every payment method comes from one typed config file and gets a copy button and a QR code generated in the browser.',
    year: 2026,
    img: '/images/projects/fuelme.webp',
    platform: 'web',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    links: [
      { kind: 'github', href: 'https://github.com/Mahmud0808/FuelMe' },
      { kind: 'live', href: 'https://mahmud0808.github.io/FuelMe/' },
    ],
  },
  {
    id: 'nova-store-launch',
    name: 'Nova Store Launch',
    description:
      'Multi-tenant SaaS for building storefronts: sign up, lay out a shop in a drag-and-drop editor, and take payments locally or internationally. Free sites live on a subpath, paid plans get a domain of their own.',
    year: 2026,
    img: '/images/projects/nova-store-launch.webp',
    platform: 'web',
    stack: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'Tailwind CSS',
      'Stripe',
      'Vitest',
    ],
    links: [],
  },
  {
    id: 'colorblendr-themes',
    name: 'ColorBlendr Themes',
    description:
      "Community theme registry for ColorBlendr. Themes are plain JSON validated by CI and served to the app over a CDN, with a Cloudflare Worker handling votes and holding in-app submissions in a review queue until they're approved.",
    year: 2026,
    img: '/images/projects/colorblendr-themes.webp',
    platform: 'web',
    stack: ['JavaScript', 'HTML', 'Cloudflare Workers', 'GitHub Actions'],
    links: [
      {
        kind: 'github',
        href: 'https://github.com/Mahmud0808/ColorBlendr-Themes',
      },
      {
        kind: 'live',
        href: 'https://mahmud0808.github.io/ColorBlendr-Themes/',
      },
    ],
  },
  {
    id: 'mahmud-homoeo-hall',
    name: 'Mahmud Homoeo Hall',
    description:
      'Clinic management app for a homoeopathy practice: the daily book, expenses, suppliers, employees, and the stats built on top of them. Runs offline against a Room database, syncs when there is signal, and backs up to Google Drive.',
    year: 2026,
    img: '/images/projects/mahmud-homoeo-hall.webp',
    platform: 'mobile',
    stack: ['Kotlin', 'Jetpack Compose', 'Room', 'Google Drive', 'Firebase'],
    links: [],
  },
  {
    id: 'appwise',
    name: 'Appwise',
    description:
      "Shows how much you actually use each installed app, so you can tell what's worth keeping from what's quietly costing you storage and subscription money. Usage data stays on the device.",
    year: 2026,
    img: '/images/projects/appwise.webp',
    platform: 'mobile',
    stack: ['Kotlin', 'Jetpack Compose'],
    links: [
      {
        kind: 'playstore',
        href: 'https://play.google.com/store/apps/details?id=com.drdisagree.appwise',
      },
    ],
  },
  {
    id: 'lammah',
    name: 'Lammah',
    description:
      'Browse events happening nearby, host your own, and see who else is going. Friend suggestions, notifications and profiles keep the people you meet after the event ends.',
    year: 2025,
    img: '/images/projects/lammah.webp',
    platform: 'mobile',
    stack: ['Flutter', 'Dart', 'Rest API', 'Firebase'],
    links: [{ kind: 'github', href: 'https://github.com/Mahmud0808/Lammah' }],
  },
  {
    id: 'family-arbore',
    name: 'Family Arbore',
    description:
      'A social platform scoped to one family: an interactive family tree, one-to-one and group chat, and controls over who gets added to which branch.',
    year: 2025,
    img: '/images/projects/family-arbore.webp',
    platform: 'mobile',
    stack: ['Flutter', 'Dart', 'Rest API', 'WebSocket'],
    links: [
      { kind: 'github', href: 'https://github.com/Mahmud0808/FamilyArbore' },
    ],
  },
  {
    id: 'mind-track',
    name: 'Mind Track',
    description:
      'Task tracker with categories, priorities, nested subtasks and reminder notifications. Kotlin on the front, MySQL behind it.',
    year: 2025,
    img: '/images/projects/mind-track.webp',
    platform: 'mobile',
    stack: ['Kotlin', 'MySQL'],
    links: [
      { kind: 'github', href: 'https://github.com/Mahmud0808/MindTrack' },
    ],
  },
  {
    id: 'led-display',
    name: 'LED Display',
    description:
      "Digital signage controller for LED screens. Holds a WebSocket connection to a Node.js server, pulls down video URLs as they're pushed, and plays them on cue.",
    year: 2025,
    img: '/images/projects/digital-signage.webp',
    platform: 'mobile',
    stack: ['Java', 'Rest API', 'OkHttp', 'JavaScript', 'Node.js'],
    links: [
      {
        kind: 'github',
        href: 'https://github.com/Mahmud0808/LEDDisplayController',
      },
    ],
  },
  {
    id: 'careerpath-plus',
    name: 'CareerPath+',
    description:
      'A job portal in two halves: a Spring Boot API over PostgreSQL, and a Java Android client for searching listings, applying, and reaching employers.',
    year: 2025,
    img: '/images/projects/career-path-plus.webp',
    platform: 'mobile',
    stack: ['Java', 'Spring Boot', 'Firebase', 'Neon Tech', 'PostgreSQL'],
    links: [
      { kind: 'github', href: 'https://github.com/Mahmud0808/CareerPathPlus' },
    ],
  },
  {
    id: 'ryda',
    name: 'Ryda',
    description:
      'Ride-hailing app built in React Native. Clerk handles sign-in, Google Maps handles live routing, Stripe handles the fare.',
    year: 2025,
    img: '/images/projects/ryda.webp',
    platform: 'mobile',
    stack: [
      'React Native',
      'Expo',
      'Maps API',
      'Clerk',
      'NativeWind',
      'Stripe',
    ],
    links: [{ kind: 'github', href: 'https://github.com/Mahmud0808/Ryda' }],
  },
  {
    id: 'pixellauncher-enhanced',
    name: 'PixelLauncher Enhanced',
    description:
      "Xposed module that patches the Pixel Launcher at runtime to add customisation the stock app doesn't offer.",
    year: 2025,
    img: '/images/projects/plenhanced.webp',
    platform: 'mobile',
    stack: ['Kotlin', 'XML', 'Xposed Framework'],
    links: [
      {
        kind: 'github',
        href: 'https://github.com/Mahmud0808/PixelLauncherEnhanced',
      },
    ],
  },
  {
    id: 'truck-orbit',
    name: 'Truck Orbit',
    description:
      'Fleet tracker for owners running more than one truck. Live GPS position for every vehicle, plus driver accounts you create and manage from the same app.',
    year: 2025,
    img: '/images/projects/truck-orbit.webp',
    platform: 'mobile',
    stack: ['Kotlin', 'Firebase', 'Maps API'],
    links: [
      { kind: 'github', href: 'https://github.com/Mahmud0808/TruckOrbit' },
    ],
  },
  {
    id: 'exam-timer',
    name: 'Exam Timer',
    description:
      "Exam timer for the browser. It keeps counting through a refresh or a closed tab, so an interruption mid-exam doesn't cost anyone their time.",
    year: 2024,
    img: '/images/projects/exam-timer.webp',
    platform: 'web',
    stack: ['Next.js', 'Tailwind CSS'],
    links: [
      { kind: 'github', href: 'https://github.com/Mahmud0808/ExamTimer' },
      { kind: 'live', href: 'https://quiktimer.vercel.app' },
    ],
  },
  {
    id: 'breakdown-assistance',
    name: 'Breakdown Assistance',
    description:
      'Roadside help for drivers: request vehicle servicing, share your location with whoever is coming out, and read the whole app in either of two languages.',
    year: 2024,
    img: '/images/projects/breakdown-assistance.webp',
    platform: 'mobile',
    stack: ['Java', 'Firebase', 'Maps API'],
    links: [
      {
        kind: 'github',
        href: 'https://github.com/Mahmud0808/BreakdownAssistance',
      },
    ],
  },
  {
    id: 'nexutalk',
    name: 'NexuTalk',
    description:
      'Real-time chat with one-to-one and group conversations, image sharing, online presence and a light/dark theme. Pusher carries the live updates.',
    year: 2024,
    img: '/images/projects/nexutalk.webp',
    platform: 'web',
    stack: [
      'Next.js',
      'NextAuth.js',
      'MongoDB',
      'Tailwind CSS',
      'Prisma',
      'Pusher',
    ],
    links: [
      { kind: 'github', href: 'https://github.com/Mahmud0808/NexuTalk' },
      { kind: 'live', href: 'https://nexutalk.vercel.app/' },
    ],
  },
  {
    id: 'mernauth',
    name: 'MernAuth',
    description:
      'Starter template for MERN auth: JWT issued into cookies, Redux Toolkit holding the session, and the sign-up and login flows already wired up.',
    year: 2024,
    img: '/images/projects/mern-auth.webp',
    platform: 'web',
    stack: [
      'MongoDB',
      'Express',
      'React',
      'Node.js',
      'Tailwind CSS',
      'Firebase',
    ],
    links: [
      { kind: 'github', href: 'https://github.com/Mahmud0808/MernAuth' },
      { kind: 'live', href: 'https://mernauth-mwjp.onrender.com/' },
    ],
  },
  {
    id: 'melodify',
    name: 'Melodify',
    description:
      'Music player in Flutter, pared back to the parts you touch: browse the library, queue a track, control playback.',
    year: 2024,
    img: '/images/projects/melodify.webp',
    platform: 'mobile',
    stack: ['Flutter', 'Dart', 'Music Player'],
    links: [{ kind: 'github', href: 'https://github.com/Mahmud0808/Melodify' }],
  },
  {
    id: 'resumeai',
    name: 'ResumeAI',
    description:
      'Write, edit and share a resume with Gemini drafting the parts nobody enjoys writing. Every section stays editable by hand, and each resume gets its own link.',
    year: 2024,
    img: '/images/projects/resume-ai.webp',
    platform: 'web',
    stack: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Clerk', 'Gemini API'],
    links: [
      { kind: 'github', href: 'https://github.com/Mahmud0808/ResumeAI' },
      { kind: 'live', href: 'https://resume-ai-app.vercel.app/' },
    ],
  },
  {
    id: 'quanta-bank',
    name: 'Quanta Bank',
    description:
      'Banking dashboard for viewing linked accounts, watching balances update in real time, and moving funds between them. Appwrite for data, Sentry for the crashes.',
    year: 2024,
    img: '/images/projects/quanta-bank.webp',
    platform: 'web',
    stack: ['Next.js', 'Tailwind CSS', 'Clerk', 'Appwrite', 'Sentry'],
    links: [
      { kind: 'github', href: 'https://github.com/Mahmud0808/QuantaBank' },
    ],
  },
  {
    id: 'quirklr',
    name: 'Quirklr',
    description:
      'Threads-style social app: post, reply, join communities and keep a profile. Clerk handles identity, MongoDB holds the conversation.',
    year: 2024,
    img: '/images/projects/quirklr.webp',
    platform: 'web',
    stack: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Clerk'],
    links: [
      { kind: 'github', href: 'https://github.com/Mahmud0808/Quirklr' },
      { kind: 'live', href: 'https://quirklrapp.vercel.app/' },
    ],
  },
  {
    id: 'nexara-cart',
    name: 'Nexara Cart',
    description:
      'Full-stack storefront: a Flutter shopping app on a Node.js backend, with an admin panel for products, stock and orders.',
    year: 2024,
    img: '/images/projects/nexara-cart.webp',
    platform: 'mobile',
    stack: ['Flutter', 'Dart', 'Node.js'],
    links: [
      { kind: 'github', href: 'https://github.com/Mahmud0808/NexaraCart' },
    ],
  },
  {
    id: 'lumi-weather',
    name: 'Lumi Weather',
    description:
      'Weather app pared down to the one thing you open it for: the conditions right now, on a single screen.',
    year: 2024,
    img: '/images/projects/lumi-weather.webp',
    platform: 'mobile',
    stack: ['Flutter', 'Dart'],
    links: [
      { kind: 'github', href: 'https://github.com/Mahmud0808/LumiWeather' },
    ],
  },
  {
    id: 'tg-join-bot',
    name: 'TG Join Bot',
    description:
      'Telegram bot that screens join requests by the device model a user reports, approving or rejecting them before they reach the group.',
    year: 2024,
    img: '/images/projects/tg-join-bot.webp',
    platform: 'other',
    stack: ['Kotlin', 'Telegram', 'Bot'],
    links: [
      {
        kind: 'github',
        href: 'https://github.com/Mahmud0808/TelegramJoinRequestVerifier',
      },
    ],
  },
  {
    id: 'uniride',
    name: 'UniRide',
    description:
      'Campus transport app for students and drivers: bus schedules, route maps, live vehicle tracking, and a line of communication between the two.',
    year: 2024,
    img: '/images/projects/uniride.webp',
    platform: 'mobile',
    stack: ['Kotlin', 'Firebase', 'Maps API', 'Gemini API'],
    links: [{ kind: 'github', href: 'https://github.com/Mahmud0808/UniRide' }],
  },
  {
    id: 'conversa',
    name: 'Conversa',
    description:
      'Chat app with Gemini on the other end. Ask it something, keep the thread, all inside a native Android client.',
    year: 2024,
    img: '/images/projects/conversa.webp',
    platform: 'mobile',
    stack: ['Kotlin', 'Gemini API'],
    links: [{ kind: 'github', href: 'https://github.com/Mahmud0808/Conversa' }],
  },
  {
    id: 'rushly',
    name: 'Rushly',
    description:
      'Shopping app for Android: browse the catalogue, fill a cart, check out. Kotlin front end on Firebase.',
    year: 2024,
    img: '/images/projects/rushly.webp',
    platform: 'mobile',
    stack: ['Kotlin', 'Firebase'],
    links: [{ kind: 'github', href: 'https://github.com/Mahmud0808/Rushly' }],
  },
  {
    id: 'thunderdex',
    name: 'ThunderDex',
    description:
      'Reference app for War Thunder players. Vehicle stats and game data, looked up without leaving for a wiki tab mid-match.',
    year: 2024,
    img: '/images/projects/war-thunder-wiki.webp',
    platform: 'mobile',
    stack: ['Java', 'HTML', 'War Thunder'],
    links: [
      {
        kind: 'playstore',
        href: 'https://play.google.com/store/apps/details?id=io.hifii.wiki',
      },
    ],
  },
  {
    id: 'remilab',
    name: 'RemiLab',
    description:
      "System preference manager for custom ROM developers, for wiring up and toggling settings the platform doesn't expose on its own.",
    year: 2024,
    img: '/images/projects/remilab.webp',
    platform: 'mobile',
    stack: ['Java', 'Shell Script', 'Preference Manager'],
    links: [{ kind: 'github', href: 'https://github.com/Mahmud0808/RemiLab' }],
  },
  {
    id: 'sonix-spectrum',
    name: 'Sonix Spectrum',
    description:
      'Kernel tuning tool for custom kernel developers: switch performance profiles and apply tweaks through shell scripts, without flashing anything.',
    year: 2024,
    img: '/images/projects/sonix-spectrum.webp',
    platform: 'mobile',
    stack: ['Java', 'Shell Script', 'Kernel Manager'],
    links: [
      { kind: 'github', href: 'https://github.com/Mahmud0808/Sonix-Spectrum' },
    ],
  },
  {
    id: 'sheguard',
    name: 'SheGuard',
    description:
      'Personal safety app for women. One press sends your location to the contacts you chose in advance and puts emergency services one tap away.',
    year: 2023,
    img: '/images/projects/sheguard.webp',
    platform: 'mobile',
    stack: ['Java', 'Firebase'],
    links: [{ kind: 'github', href: 'https://github.com/Mahmud0808/SheGuard' }],
  },
  {
    id: 'musicplayer',
    name: 'MusicPlayer',
    description:
      'Web music player that holds its layout from phone to desktop. Plain HTML, CSS and JavaScript, no framework.',
    year: 2023,
    img: '/images/projects/music-player.webp',
    platform: 'web',
    stack: ['HTML', 'CSS', 'JavaScript', 'Music Player'],
    links: [
      { kind: 'github', href: 'https://github.com/Mahmud0808/MusicPlayer' },
      { kind: 'live', href: 'https://mahmud0808.github.io/MusicPlayer' },
    ],
  },
  {
    id: 'quizmania',
    name: 'QuizMania',
    description:
      'Quiz game in the browser: multiple-choice rounds, a running score, and a result at the end. HTML, CSS and JavaScript only.',
    year: 2023,
    img: '/images/projects/quiz-mania.webp',
    platform: 'web',
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: [
      { kind: 'github', href: 'https://github.com/Mahmud0808/QuizMania' },
      { kind: 'live', href: 'https://mahmud0808.github.io/QuizMania' },
    ],
  },
  {
    id: 'fras',
    name: 'FRAS',
    description:
      'Attendance system that marks people present from a camera feed. Python and Flask, with an admin panel for enrolling faces and pulling records.',
    year: 2022,
    img: '/images/projects/fras.webp',
    platform: 'web',
    stack: ['Python', 'Flask', 'Image Processing'],
    links: [{ kind: 'github', href: 'https://github.com/Mahmud0808/FRAS' }],
  },
  {
    id: 'gadgets',
    name: 'Gadgets',
    description:
      'Static product showcase page for gadgets. An early exercise in layout and CSS, kept here as it was built.',
    year: 2022,
    img: '/images/projects/gadgets.webp',
    platform: 'web',
    stack: ['HTML', 'CSS'],
    links: [
      { kind: 'github', href: 'https://github.com/Mahmud0808/Gadgets' },
      { kind: 'live', href: 'https://mahmud0808.github.io/Gadgets' },
    ],
  },
  {
    id: 'another-theme',
    name: 'Another Theme',
    description:
      'Substratum theme for Android, bundling several icon sets to restyle system UI and the apps around it.',
    year: 2022,
    img: '/images/projects/another-theme.webp',
    platform: 'mobile',
    stack: ['Kotlin', 'XML', 'Substratum'],
    links: [
      { kind: 'github', href: 'https://github.com/Mahmud0808/AnotherTheme' },
      { kind: 'live', href: 'https://www.pling.com/p/1732643' },
    ],
  },
  {
    id: 'pink-bean-monet',
    name: 'Pink Bean (Monet)',
    description:
      "Notification icon theme for Android that takes its colours from the system's Monet palette.",
    year: 2022,
    img: '/images/projects/pink-bean-monet.webp',
    platform: 'mobile',
    stack: ['Kotlin', 'XML', 'Substratum'],
    links: [
      { kind: 'github', href: 'https://github.com/Mahmud0808/PinkBeanMonet' },
      { kind: 'live', href: 'https://www.pling.com/p/1732643' },
    ],
  },
  {
    id: 'pink-bean',
    name: 'Pink Bean',
    description:
      "Substratum theme that swaps Android's status bar notification icons for a custom set.",
    year: 2022,
    img: '/images/projects/pink-bean.webp',
    platform: 'mobile',
    stack: ['Kotlin', 'XML', 'Substratum'],
    links: [
      { kind: 'github', href: 'https://github.com/Mahmud0808/PinkBean' },
      { kind: 'live', href: 'https://www.pling.com/p/1732643' },
    ],
  },
  {
    id: 'overlay-builder',
    name: 'Overlay Builder',
    description:
      'GitHub Actions pipeline that compiles Android theme overlays on push, so building them stops being a manual shell session.',
    year: 2021,
    img: '/images/projects/overlay-builder.webp',
    platform: 'mobile',
    stack: ['GitHub Actions', 'Shell Script'],
    links: [
      { kind: 'github', href: 'https://github.com/Mahmud0808/OverlayBuilder' },
    ],
  },
  {
    id: 'to-do-list',
    name: 'To-Do List',
    description:
      'To-do list with accounts behind it. PHP and MySQL, so the list outlives the browser tab it was written in.',
    year: 2021,
    img: '/images/projects/todo-list.webp',
    platform: 'web',
    stack: ['HTML', 'CSS', 'PHP', 'MySQL'],
    links: [{ kind: 'github', href: 'https://github.com/Mahmud0808/ToDoList' }],
  },
];
