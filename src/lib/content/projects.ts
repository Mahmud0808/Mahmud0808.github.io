import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

// https://icon-sets.iconify.design/vscode-icons/

export const projectsSection: ProjectsSectionType = {
  title: 'Other Projects',
  projects: [
    {
      id: getId(),
      name: 'TeleDrive',
      subtitle:
        'Turns a private Telegram channel on your own account into a drive, with no server in between. Files are sealed with AES-256-GCM before they leave the device, and a wiped phone rebuilds the whole tree from the message captions.',
      repo: 'https://github.com/Mahmud0808/TeleDrive',
      img: '/images/projects/teledrive.webp',
      year: 2026,
      projectSkills: [
        { name: 'Kotlin', icon: 'vscode-icons:file-type-kotlin' },
        { name: 'Jetpack Compose', icon: 'devicon:jetpackcompose' },
        { name: 'TDLib', icon: 'logos:telegram' },
        { name: 'Room', icon: 'vscode-icons:file-type-sqlite' },
        { name: 'WorkManager', icon: 'logos:android-icon' },
        { name: 'AES-256-GCM', icon: 'material-symbols:encrypted' },
      ],
    },
    {
      id: getId(),
      name: 'Depthly',
      subtitle:
        'Live wallpaper that puts the depth effect on Android. The subject is cut out of your photo on the device itself, then the clock is composited behind it, so the person overlaps the numbers.',
      playstore:
        'https://play.google.com/store/apps/details?id=com.drdisagree.depthly',
      img: '/images/projects/depthly.webp',
      year: 2026,
      projectSkills: [
        { name: 'Kotlin', icon: 'vscode-icons:file-type-kotlin' },
        { name: 'Jetpack Compose', icon: 'devicon:jetpackcompose' },
        { name: 'ONNX Runtime', icon: 'simple-icons:onnx' },
        { name: 'Room', icon: 'vscode-icons:file-type-sqlite' },
      ],
    },
    {
      id: getId(),
      name: 'Thestral Vault',
      subtitle:
        'Royalty ledger for a figure studio. Artists and character owners type a four-digit ID to see what they are owed, admins log prints and settle balances, and every payment can be reversed without losing the trail behind it.',
      url: 'https://thestral-vault.vercel.app',
      img: '/images/projects/thestral-vault.webp',
      year: 2026,
      projectSkills: [
        { name: 'React', icon: 'vscode-icons:file-type-reactjs' },
        { name: 'Vite', icon: 'vscode-icons:file-type-vite' },
        { name: 'Tailwind CSS', icon: 'vscode-icons:file-type-tailwind' },
        { name: 'Supabase', icon: 'logos:supabase-icon' },
        { name: 'Vercel', icon: 'logos:vercel-icon' },
      ],
    },
    {
      id: getId(),
      name: 'Dev Cleaner',
      subtitle:
        'Desktop app that clears build output, caches and dependency folders off your disk. A folder is only ever listed when a project marker file sits above it, so nothing outside a real project is a candidate, and nothing is deleted until you check it.',
      repo: 'https://github.com/Mahmud0808/DevCleaner',
      img: '/images/projects/devcleaner.webp',
      year: 2026,
      projectSkills: [
        { name: 'Electron', icon: 'file-icons:electron' },
        { name: 'React', icon: 'vscode-icons:file-type-reactjs' },
        {
          name: 'TypeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'Tailwind CSS', icon: 'vscode-icons:file-type-tailwind' },
        { name: 'Vite', icon: 'vscode-icons:file-type-vite' },
      ],
    },
    {
      id: getId(),
      name: 'Fuel Me',
      subtitle:
        'A one-page donation site built like a street poster: wood-type headlines, taxi-yellow bands, wheat-pasted payment strips. Every payment method comes from one typed config file and gets a copy button and a QR code generated in the browser.',
      url: 'https://mahmud0808.github.io/FuelMe/',
      repo: 'https://github.com/Mahmud0808/FuelMe',
      img: '/images/projects/fuelme.webp',
      year: 2026,
      projectSkills: [
        { name: 'React', icon: 'vscode-icons:file-type-reactjs' },
        {
          name: 'TypeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'Tailwind CSS', icon: 'vscode-icons:file-type-tailwind' },
        { name: 'Framer Motion', icon: 'cib:framer' },
        { name: 'Vite', icon: 'vscode-icons:file-type-vite' },
      ],
    },
    {
      id: getId(),
      name: 'Nova Store Launch',
      subtitle:
        'Multi-tenant SaaS for building storefronts: sign up, lay out a shop in a drag-and-drop editor, and take payments locally or internationally. Free sites live on a subpath, paid plans get a domain of their own.',
      img: '/images/projects/nova-store-launch.webp',
      year: 2026,
      projectSkills: [
        { name: 'Next.js', icon: 'file-icons:nextjs' },
        {
          name: 'TypeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'Supabase', icon: 'logos:supabase-icon' },
        { name: 'Tailwind CSS', icon: 'vscode-icons:file-type-tailwind' },
        { name: 'Stripe', icon: 'logos:stripe' },
        { name: 'Vitest', icon: 'logos:vitest' },
      ],
    },
    {
      id: getId(),
      name: 'ColorBlendr Themes',
      subtitle:
        "Community theme registry for ColorBlendr. Themes are plain JSON validated by CI and served to the app over a CDN, with a Cloudflare Worker handling votes and holding in-app submissions in a review queue until they're approved.",
      url: 'https://mahmud0808.github.io/ColorBlendr-Themes/',
      repo: 'https://github.com/Mahmud0808/ColorBlendr-Themes',
      img: '/images/projects/colorblendr-themes.webp',
      year: 2026,
      projectSkills: [
        { name: 'JavaScript', icon: 'vscode-icons:file-type-js' },
        { name: 'HTML', icon: 'vscode-icons:file-type-html' },
        {
          name: 'Cloudflare Workers',
          icon: 'logos:cloudflare-workers-icon',
        },
        { name: 'GitHub Actions', icon: 'fa-brands:github' },
      ],
    },
    {
      id: getId(),
      name: 'Mahmud Homoeo Hall',
      subtitle:
        'Clinic management app for a homoeopathy practice: the daily book, expenses, suppliers, employees, and the stats built on top of them. Runs offline against a Room database, syncs when there is signal, and backs up to Google Drive.',
      img: '/images/projects/mahmud-homoeo-hall.webp',
      year: 2026,
      projectSkills: [
        { name: 'Kotlin', icon: 'vscode-icons:file-type-kotlin' },
        { name: 'Jetpack Compose', icon: 'devicon:jetpackcompose' },
        { name: 'Room', icon: 'vscode-icons:file-type-sqlite' },
        { name: 'Google Drive', icon: 'logos:google-drive' },
        { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
      ],
    },
    {
      id: getId(),
      name: 'Appwise',
      subtitle:
        "Shows how much you actually use each installed app, so you can tell what's worth keeping from what's quietly costing you storage and subscription money. Usage data stays on the device.",
      playstore:
        'https://play.google.com/store/apps/details?id=com.drdisagree.appwise',
      img: '/images/projects/appwise.webp',
      year: 2026,
      projectSkills: [
        { name: 'Kotlin', icon: 'vscode-icons:file-type-kotlin' },
        { name: 'Jetpack Compose', icon: 'devicon:jetpackcompose' },
      ],
    },
    {
      id: getId(),
      name: 'Lammah',
      subtitle:
        'Browse events happening nearby, host your own, and see who else is going. Friend suggestions, notifications and profiles keep the people you meet after the event ends.',
      repo: 'https://github.com/Mahmud0808/Lammah',
      img: '/images/projects/lammah.webp',
      year: 2025,
      projectSkills: [
        { name: 'Flutter', icon: 'vscode-icons:file-type-flutter' },
        { name: 'Dart', icon: 'vscode-icons:file-type-dartlang' },
        { name: 'Rest API', icon: 'vscode-icons:file-type-rest' },
        { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
      ],
    },
    {
      id: getId(),
      name: 'Family Arbore',
      subtitle:
        'A social platform scoped to one family: an interactive family tree, one-to-one and group chat, and controls over who gets added to which branch.',
      repo: 'https://github.com/Mahmud0808/FamilyArbore',
      img: '/images/projects/family-arbore.webp',
      year: 2025,
      projectSkills: [
        { name: 'Flutter', icon: 'vscode-icons:file-type-flutter' },
        { name: 'Dart', icon: 'vscode-icons:file-type-dartlang' },
        { name: 'Rest API', icon: 'vscode-icons:file-type-rest' },
        { name: 'WebSocket', icon: 'icon-park:round-socket' },
      ],
    },
    {
      id: getId(),
      name: 'Mind Track',
      subtitle:
        'Task tracker with categories, priorities, nested subtasks and reminder notifications. Kotlin on the front, MySQL behind it.',
      repo: 'https://github.com/Mahmud0808/MindTrack',
      img: '/images/projects/mind-track.webp',
      year: 2025,
      projectSkills: [
        { name: 'Kotlin', icon: 'vscode-icons:file-type-kotlin' },
        { name: 'MySQL', icon: 'tabler:brand-mysql' },
      ],
    },
    {
      id: getId(),
      name: 'LED Display',
      subtitle:
        "Digital signage controller for LED screens. Holds a WebSocket connection to a Node.js server, pulls down video URLs as they're pushed, and plays them on cue.",
      repo: 'https://github.com/Mahmud0808/LEDDisplayController',
      img: '/images/projects/digital-signage.webp',
      year: 2025,
      projectSkills: [
        { name: 'Java', icon: 'hugeicons:java' },
        { name: 'Rest API', icon: 'vscode-icons:file-type-rest' },
        { name: 'OkHttp', icon: 'material-symbols:http' },
        { name: 'JavaScript', icon: 'vscode-icons:file-type-js' },
        { name: 'Node.js', icon: 'vscode-icons:file-type-node' },
      ],
    },
    {
      id: getId(),
      name: 'CareerPath+',
      subtitle:
        'A job portal in two halves: a Spring Boot API over PostgreSQL, and a Java Android client for searching listings, applying, and reaching employers.',
      repo: 'https://github.com/Mahmud0808/CareerPathPlus',
      img: '/images/projects/career-path-plus.webp',
      year: 2025,
      projectSkills: [
        { name: 'Java', icon: 'hugeicons:java' },
        { name: 'Spring Boot', icon: 'logos:spring-icon' },
        { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
        { name: 'Neon Tech', icon: 'logos:neon-icon' },
        { name: 'PostgreSQL', icon: 'logos:postgresql' },
      ],
    },
    {
      id: getId(),
      name: 'Ryda',
      subtitle:
        'Ride-hailing app built in React Native. Clerk handles sign-in, Google Maps handles live routing, Stripe handles the fare.',
      repo: 'https://github.com/Mahmud0808/Ryda',
      img: '/images/projects/ryda.webp',
      year: 2025,
      projectSkills: [
        { name: 'React Native', icon: 'vscode-icons:file-type-reactjs' },
        { name: 'Expo', icon: 'vscode-icons:file-type-expo' },
        { name: 'Maps API', icon: 'logos:google-maps' },
        { name: 'Clerk', icon: 'simple-icons:clerk' },
        { name: 'NativeWind', icon: 'vscode-icons:file-type-tailwind' },
        { name: 'Stripe', icon: 'vscode-icons:file-type-silverstripe' },
      ],
    },
    {
      id: getId(),
      name: 'PixelLauncher Enhanced',
      subtitle:
        "Xposed module that patches the Pixel Launcher at runtime to add customisation the stock app doesn't offer.",
      repo: 'https://github.com/Mahmud0808/PixelLauncherEnhanced',
      img: '/images/projects/plenhanced.webp',
      year: 2025,
      projectSkills: [
        { name: 'Kotlin', icon: 'vscode-icons:file-type-kotlin' },
        { name: 'XML', icon: 'vscode-icons:file-type-xml' },
        { name: 'Xposed Framework', icon: 'arcticons:xposed' },
      ],
    },
    {
      id: getId(),
      name: 'Truck Orbit',
      subtitle:
        'Fleet tracker for owners running more than one truck. Live GPS position for every vehicle, plus driver accounts you create and manage from the same app.',
      repo: 'https://github.com/Mahmud0808/TruckOrbit',
      img: '/images/projects/truck-orbit.webp',
      year: 2025,
      projectSkills: [
        { name: 'Kotlin', icon: 'vscode-icons:file-type-kotlin' },
        { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
        { name: 'Maps API', icon: 'logos:google-maps' },
      ],
    },
    {
      id: getId(),
      name: 'Exam Timer',
      subtitle:
        "Exam timer for the browser. It keeps counting through a refresh or a closed tab, so an interruption mid-exam doesn't cost anyone their time.",
      url: 'https://quiktimer.vercel.app',
      repo: 'https://github.com/Mahmud0808/ExamTimer',
      img: '/images/projects/exam-timer.webp',
      year: 2024,
      projectSkills: [
        { name: 'Next.js', icon: 'file-icons:nextjs' },
        { name: 'Tailwind CSS', icon: 'vscode-icons:file-type-tailwind' },
      ],
    },
    {
      id: getId(),
      name: 'Breakdown Assistance',
      subtitle:
        'Roadside help for drivers: request vehicle servicing, share your location with whoever is coming out, and read the whole app in either of two languages.',
      repo: 'https://github.com/Mahmud0808/BreakdownAssistance',
      img: '/images/projects/breakdown-assistance.webp',
      year: 2024,
      projectSkills: [
        { name: 'Java', icon: 'hugeicons:java' },
        { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
        { name: 'Maps API', icon: 'logos:google-maps' },
      ],
    },
    {
      id: getId(),
      name: 'NexuTalk',
      subtitle:
        'Real-time chat with one-to-one and group conversations, image sharing, online presence and a light/dark theme. Pusher carries the live updates.',
      url: 'https://nexutalk.vercel.app/',
      repo: 'https://github.com/Mahmud0808/NexuTalk',
      img: '/images/projects/nexutalk.webp',
      year: 2024,
      projectSkills: [
        { name: 'Next.js', icon: 'file-icons:nextjs' },
        { name: 'NextAuth.js', icon: 'noto-v1:shield' },
        { name: 'MongoDB', icon: 'vscode-icons:file-type-mongo' },
        { name: 'Tailwind CSS', icon: 'vscode-icons:file-type-tailwind' },
        { name: 'Prisma', icon: 'simple-icons:prisma' },
        { name: 'Pusher', icon: 'simple-icons:pusher' },
      ],
    },
    {
      id: getId(),
      name: 'MernAuth',
      subtitle:
        'Starter template for MERN auth: JWT issued into cookies, Redux Toolkit holding the session, and the sign-up and login flows already wired up.',
      url: 'https://mernauth-mwjp.onrender.com/',
      repo: 'https://github.com/Mahmud0808/MernAuth',
      img: '/images/projects/mern-auth.webp',
      year: 2024,
      projectSkills: [
        { name: 'MongoDB', icon: 'vscode-icons:file-type-mongo' },
        { name: 'Express', icon: 'griddy-icons:expressjs' },
        { name: 'React', icon: 'vscode-icons:file-type-reactjs' },
        { name: 'Node.js', icon: 'vscode-icons:file-type-node' },
        { name: 'Tailwind CSS', icon: 'vscode-icons:file-type-tailwind' },
        { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
      ],
    },
    {
      id: getId(),
      name: 'Melodify',
      subtitle:
        'Music player in Flutter, pared back to the parts you touch: browse the library, queue a track, control playback.',
      repo: 'https://github.com/Mahmud0808/Melodify',
      img: '/images/projects/melodify.webp',
      year: 2024,
      projectSkills: [
        { name: 'Flutter', icon: 'vscode-icons:file-type-flutter' },
        { name: 'Dart', icon: 'vscode-icons:file-type-dartlang' },
        { name: 'Music Player', icon: 'emojione-v1:music-descend' },
      ],
    },
    {
      id: getId(),
      name: 'ResumeAI',
      subtitle:
        'Write, edit and share a resume with Gemini drafting the parts nobody enjoys writing. Every section stays editable by hand, and each resume gets its own link.',
      url: 'https://resume-ai-app.vercel.app/',
      repo: 'https://github.com/Mahmud0808/ResumeAI',
      img: '/images/projects/resume-ai.webp',
      year: 2024,
      projectSkills: [
        { name: 'Next.js', icon: 'file-icons:nextjs' },
        { name: 'Tailwind CSS', icon: 'vscode-icons:file-type-tailwind' },
        { name: 'MongoDB', icon: 'vscode-icons:file-type-mongo' },
        { name: 'Clerk', icon: 'simple-icons:clerk' },
        { name: 'Gemini API', icon: 'ri:gemini-fill' },
      ],
    },
    {
      id: getId(),
      name: 'Quanta Bank',
      subtitle:
        'Banking dashboard for viewing linked accounts, watching balances update in real time, and moving funds between them. Appwrite for data, Sentry for the crashes.',
      repo: 'https://github.com/Mahmud0808/QuantaBank',
      img: '/images/projects/quanta-bank.webp',
      year: 2024,
      projectSkills: [
        { name: 'Next.js', icon: 'file-icons:nextjs' },
        { name: 'Tailwind CSS', icon: 'vscode-icons:file-type-tailwind' },
        { name: 'Clerk', icon: 'simple-icons:clerk' },
        { name: 'Appwrite', icon: 'logos:appwrite-icon' },
        { name: 'Sentry', icon: 'vscode-icons:file-type-sentry' },
      ],
    },
    {
      id: getId(),
      name: 'Quirklr',
      subtitle:
        'Threads-style social app: post, reply, join communities and keep a profile. Clerk handles identity, MongoDB holds the conversation.',
      url: 'https://quirklrapp.vercel.app/',
      repo: 'https://github.com/Mahmud0808/Quirklr',
      img: '/images/projects/quirklr.webp',
      year: 2024,
      projectSkills: [
        { name: 'Next.js', icon: 'file-icons:nextjs' },
        { name: 'Tailwind CSS', icon: 'vscode-icons:file-type-tailwind' },
        { name: 'MongoDB', icon: 'vscode-icons:file-type-mongo' },
        { name: 'Clerk', icon: 'simple-icons:clerk' },
      ],
    },
    {
      id: getId(),
      name: 'Nexara Cart',
      subtitle:
        'Full-stack storefront: a Flutter shopping app on a Node.js backend, with an admin panel for products, stock and orders.',
      repo: 'https://github.com/Mahmud0808/NexaraCart',
      img: '/images/projects/nexara-cart.webp',
      year: 2024,
      projectSkills: [
        { name: 'Flutter', icon: 'vscode-icons:file-type-flutter' },
        { name: 'Dart', icon: 'vscode-icons:file-type-dartlang' },
        { name: 'Node.js', icon: 'vscode-icons:file-type-node' },
      ],
    },
    {
      id: getId(),
      name: 'Lumi Weather',
      subtitle:
        'Weather app pared down to the one thing you open it for: the conditions right now, on a single screen.',
      repo: 'https://github.com/Mahmud0808/LumiWeather',
      img: '/images/projects/lumi-weather.webp',
      year: 2024,
      projectSkills: [
        { name: 'Flutter', icon: 'vscode-icons:file-type-flutter' },
        { name: 'Dart', icon: 'vscode-icons:file-type-dartlang' },
      ],
    },
    {
      id: getId(),
      name: 'TG Join Bot',
      subtitle:
        'Telegram bot that screens join requests by the device model a user reports, approving or rejecting them before they reach the group.',
      repo: 'https://github.com/Mahmud0808/TelegramJoinRequestVerifier',
      img: '/images/projects/tg-join-bot.webp',
      year: 2024,
      projectSkills: [
        { name: 'Kotlin', icon: 'vscode-icons:file-type-kotlin' },
        { name: 'Telegram', icon: 'logos:telegram' },
        { name: 'Bot', icon: 'bxs:bot' },
      ],
    },
    {
      id: getId(),
      name: 'UniRide',
      subtitle:
        'Campus transport app for students and drivers: bus schedules, route maps, live vehicle tracking, and a line of communication between the two.',
      repo: 'https://github.com/Mahmud0808/UniRide',
      img: '/images/projects/uniride.webp',
      year: 2024,
      projectSkills: [
        { name: 'Kotlin', icon: 'vscode-icons:file-type-kotlin' },
        { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
        { name: 'Maps API', icon: 'logos:google-maps' },
        { name: 'Gemini API', icon: 'ri:gemini-fill' },
      ],
    },
    {
      id: getId(),
      name: 'Conversa',
      subtitle:
        'Chat app with Gemini on the other end. Ask it something, keep the thread, all inside a native Android client.',
      repo: 'https://github.com/Mahmud0808/Conversa',
      img: '/images/projects/conversa.webp',
      year: 2024,
      projectSkills: [
        { name: 'Kotlin', icon: 'vscode-icons:file-type-kotlin' },
        { name: 'Gemini API', icon: 'ri:gemini-fill' },
      ],
    },
    {
      id: getId(),
      name: 'Rushly',
      subtitle:
        'Shopping app for Android: browse the catalogue, fill a cart, check out. Kotlin front end on Firebase.',
      repo: 'https://github.com/Mahmud0808/Rushly',
      img: '/images/projects/rushly.webp',
      year: 2024,
      projectSkills: [
        { name: 'Kotlin', icon: 'vscode-icons:file-type-kotlin' },
        { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
      ],
    },
    {
      id: getId(),
      name: 'ThunderDex',
      subtitle:
        'Reference app for War Thunder players. Vehicle stats and game data, looked up without leaving for a wiki tab mid-match.',
      playstore: 'https://play.google.com/store/apps/details?id=io.hifii.wiki',
      img: '/images/projects/war-thunder-wiki.webp',
      year: 2024,
      projectSkills: [
        { name: 'Java', icon: 'hugeicons:java' },
        { name: 'HTML', icon: 'vscode-icons:file-type-html' },
        { name: 'War Thunder', icon: 'healthicons:war' },
      ],
    },
    {
      id: getId(),
      name: 'RemiLab',
      subtitle:
        "System preference manager for custom ROM developers, for wiring up and toggling settings the platform doesn't expose on its own.",
      repo: 'https://github.com/Mahmud0808/RemiLab',
      img: '/images/projects/remilab.webp',
      year: 2024,
      projectSkills: [
        { name: 'Java', icon: 'hugeicons:java' },
        { name: 'Shell Script', icon: 'vscode-icons:file-type-shell' },
        {
          name: 'Preference Manager',
          icon: 'material-symbols:room-preferences-rounded',
        },
      ],
    },
    {
      id: getId(),
      name: 'Sonix Spectrum',
      subtitle:
        'Kernel tuning tool for custom kernel developers: switch performance profiles and apply tweaks through shell scripts, without flashing anything.',
      repo: 'https://github.com/Mahmud0808/Sonix-Spectrum',
      img: '/images/projects/sonix-spectrum.webp',
      year: 2024,
      projectSkills: [
        { name: 'Java', icon: 'hugeicons:java' },
        { name: 'Shell Script', icon: 'vscode-icons:file-type-shell' },
        { name: 'Kernel Manager', icon: 'ph:cpu-bold' },
      ],
    },
    {
      id: getId(),
      name: 'SheGuard',
      subtitle:
        'Personal safety app for women. One press sends your location to the contacts you chose in advance and puts emergency services one tap away.',
      repo: 'https://github.com/Mahmud0808/SheGuard',
      img: '/images/projects/sheguard.webp',
      year: 2023,
      projectSkills: [
        { name: 'Java', icon: 'hugeicons:java' },
        { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
      ],
    },
    {
      id: getId(),
      name: 'MusicPlayer',
      subtitle:
        'Web music player that holds its layout from phone to desktop. Plain HTML, CSS and JavaScript, no framework.',
      url: 'https://mahmud0808.github.io/MusicPlayer',
      repo: 'https://github.com/Mahmud0808/MusicPlayer',
      img: '/images/projects/music-player.webp',
      year: 2023,
      projectSkills: [
        { name: 'HTML', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS', icon: 'vscode-icons:file-type-css' },
        { name: 'JavaScript', icon: 'vscode-icons:file-type-js' },
        { name: 'Music Player', icon: 'emojione-v1:music-descend' },
      ],
    },
    {
      id: getId(),
      name: 'QuizMania',
      subtitle:
        'Quiz game in the browser: multiple-choice rounds, a running score, and a result at the end. HTML, CSS and JavaScript only.',
      url: 'https://mahmud0808.github.io/QuizMania',
      repo: 'https://github.com/Mahmud0808/QuizMania',
      img: '/images/projects/quiz-mania.webp',
      year: 2023,
      projectSkills: [
        { name: 'HTML', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS', icon: 'vscode-icons:file-type-css' },
        { name: 'JavaScript', icon: 'vscode-icons:file-type-js' },
      ],
    },
    {
      id: getId(),
      name: 'FRAS',
      subtitle:
        'Attendance system that marks people present from a camera feed. Python and Flask, with an admin panel for enrolling faces and pulling records.',
      repo: 'https://github.com/Mahmud0808/FRAS',
      img: '/images/projects/fras.webp',
      year: 2022,
      projectSkills: [
        { name: 'Python', icon: 'vscode-icons:file-type-python' },
        { name: 'Flask', icon: 'simple-icons:flask' },
        { name: 'Image Processing', icon: 'ic:baseline-face' },
      ],
    },
    {
      id: getId(),
      name: 'Gadgets',
      subtitle:
        'Static product showcase page for gadgets. An early exercise in layout and CSS, kept here as it was built.',
      url: 'https://mahmud0808.github.io/Gadgets',
      repo: 'https://github.com/Mahmud0808/Gadgets',
      img: '/images/projects/gadgets.webp',
      year: 2022,
      projectSkills: [
        { name: 'HTML', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS', icon: 'vscode-icons:file-type-css' },
      ],
    },
    {
      id: getId(),
      name: 'Another Theme',
      subtitle:
        'Substratum theme for Android, bundling several icon sets to restyle system UI and the apps around it.',
      url: 'https://www.pling.com/p/1732643',
      repo: 'https://github.com/Mahmud0808/AnotherTheme',
      img: '/images/projects/another-theme.webp',
      year: 2022,
      projectSkills: [
        { name: 'Kotlin', icon: 'vscode-icons:file-type-kotlin' },
        { name: 'XML', icon: 'vscode-icons:file-type-xml' },
        { name: 'Substratum', icon: 'arcticons:substratum' },
      ],
    },
    {
      id: getId(),
      name: 'Pink Bean (Monet)',
      subtitle:
        "Notification icon theme for Android that takes its colours from the system's Monet palette.",
      url: 'https://www.pling.com/p/1732643',
      repo: 'https://github.com/Mahmud0808/PinkBeanMonet',
      img: '/images/projects/pink-bean-monet.webp',
      year: 2022,
      projectSkills: [
        { name: 'Kotlin', icon: 'vscode-icons:file-type-kotlin' },
        { name: 'XML', icon: 'vscode-icons:file-type-xml' },
        { name: 'Substratum', icon: 'arcticons:substratum' },
      ],
    },
    {
      id: getId(),
      name: 'Pink Bean',
      subtitle:
        "Substratum theme that swaps Android's status bar notification icons for a custom set.",
      url: 'https://www.pling.com/p/1732643',
      repo: 'https://github.com/Mahmud0808/PinkBean',
      img: '/images/projects/pink-bean.webp',
      year: 2022,
      projectSkills: [
        { name: 'Kotlin', icon: 'vscode-icons:file-type-kotlin' },
        { name: 'XML', icon: 'vscode-icons:file-type-xml' },
        { name: 'Substratum', icon: 'arcticons:substratum' },
      ],
    },
    {
      id: getId(),
      name: 'Overlay Builder',
      subtitle:
        'GitHub Actions pipeline that compiles Android theme overlays on push, so building them stops being a manual shell session.',
      repo: 'https://github.com/Mahmud0808/OverlayBuilder',
      img: '/images/projects/overlay-builder.webp',
      year: 2021,
      projectSkills: [
        { name: 'GitHub Actions', icon: 'fa-brands:github' },
        { name: 'Shell Script', icon: 'vscode-icons:file-type-shell' },
      ],
    },
    {
      id: getId(),
      name: 'To-Do List',
      subtitle:
        'To-do list with accounts behind it. PHP and MySQL, so the list outlives the browser tab it was written in.',
      repo: 'https://github.com/Mahmud0808/ToDoList',
      img: '/images/projects/todo-list.webp',
      year: 2021,
      projectSkills: [
        { name: 'HTML', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS', icon: 'vscode-icons:file-type-css' },
        { name: 'PHP', icon: 'ri:php-fill' },
        { name: 'MySQL', icon: 'tabler:brand-mysql' },
      ],
    },
  ],
};
