export const experience = [
  {
    period: 'Apr 2024 — now',
    company: 'Swappie',
    logo: '/logos/swappie.jpg',
    role: 'Software engineer',
    place: 'Tallinn, Estonia',
    description:
      'On the Factory team, I work closely with operations on software that follows a device through diagnostics, repair and automated handling. That takes me from the screens operators use to Python services, infrastructure and tools at their workstations.',
    work: [
      {
        label: 'Factory systems',
        detail: 'I work on the Django backend that follows devices through the factory, along with Python services for diagnostics, repair and robot coordination. On the frontend, I build React and Svelte tools for repair workflows and for monitoring robot capacity and slot status. I also put the robot lines’ configuration under version control, with scheduled syncing and drift detection.',
      },
      {
        label: 'AI grading',
        detail: 'I helped bring image-based device grading into the factory workflow, which now goes through hundreds of thousands of images a month. Images move from the line through a coordination service to Linux GPU workers, with results sent back to each device’s record. I moved the workers from Windows PCs to Linux services and improved their recovery and monitoring. After that, gradings that used to get stuck for hours mostly stopped happening.',
      },
      {
        label: 'The Mactivator',
        detail: 'For the MacBook launch, I built a small USB controller that acts as a keyboard and mouse, navigates the first macOS setup screens and starts the factory activation workflow, so plugging it in is the only thing an operator has to do. Somewhere along the way it became the Mactivator, and a bit of an internal meme.',
      },
      {
        label: 'Workstation tools',
        detail: 'I also built an AirPods serial-number scanner and label-printing software, reducing manual input at factory workstations.',
      },
    ],
    tags: ['Python', 'Django', 'React', 'Svelte', 'Docker', 'Datadog', 'Distributed systems'],
  },
  {
    period: 'Jan — Apr 2024',
    company: 'Ridango',
    logo: '/logos/ridango.jpg',
    role: 'Software engineer',
    place: 'Tallinn, Estonia',
    description:
      'Worked on backend systems for public transport, writing Java services with Spring and Hibernate.',
    tags: ['Java', 'Spring', 'Hibernate'],
  },
  {
    period: 'Oct 2021 — Jan 2024',
    company: 'Codeborne',
    logo: '/logos/codeborne.png',
    role: 'Software developer',
    place: 'Tallinn, Estonia',
    description:
      'I built client products in energy, finance and education, moving between Kotlin and Java services, Postgres data models and Svelte interfaces. Pair programming, clean code and focused tests were part of how we worked every day.',
    work: [
      {
        label: 'Spotty',
        detail: 'For an Austrian energy provider, I worked on the customer journey from onboarding to contracts and billing, along with parts of the grid-operator integration. I also worked on smart EV charging and built Android and iOS wrappers for the web app.',
        url: 'https://spottyenergie.at/',
      },
      {
        label: 'Eesti Energia / Enefit',
        detail: 'I contributed to the electricity package calculator on Enefit’s site. It helps households compare plans and estimated monthly costs based on their electricity use, tariff and preferred energy source.',
        url: 'https://www.enefit.ee/et/era/elekter/elektrileping-ja-paketid',
      },
      {
        label: 'Tenor',
        detail: 'Merchants could offer this financing product during checkout. My work covered the journey from offer to signed contract, the loan pricing and repayment calculations behind it, and the payment and accounting flows needed afterward.',
        url: 'https://tenor.ee/',
      },
      {
        label: 'Ettevõtluskeskus LXP',
        detail: 'On this learning platform for courses, enrolment, attendance, certificates and trainer workflows, much of my work involved browser automation that kept training listings and registrations aligned with Estonia’s employment service, saving staff from entering the same information twice.',
        url: 'https://www.ettevotluskeskus.ee/',
      },
      {
        label: 'Coop Pank',
        detail: 'Businesses use this integration to exchange payment files with Coop Pank. Moving it from EBICS 2 to 3 meant adapting to changes in the exchange protocol and carefully checking that the existing payment flow still worked.',
        url: 'https://www.cooppank.ee/',
      },
      {
        label: 'Wine Experience Club',
        detail: 'I helped build a service that lets winery visitors save the wines they tasted and order them after the visit.',
        url: 'https://wineexperience.club/',
      },
      {
        label: 'Grenpay',
        detail: 'I worked on a service that lets customers offset the carbon footprint of purchases and see which climate projects their contributions support.',
        url: 'https://grenpay.com/',
      },
      {
        label: 'Luminor Pension',
        detail: 'I worked on a pension planner that turns current savings into an estimate of future retirement income, giving people a more concrete starting point for thinking about retirement.',
        url: 'https://pensionifondid.ee/',
      },
    ],
    tags: ['Java & Kotlin', 'Postgres', 'Svelte', 'Pair-programming', 'TDD', 'CI/CD'],
  },
  {
    period: '2020 — 2023',
    company: 'Tallinn University',
    logo: '/logos/tallinn-university.jpg',
    role: 'BSc, Computer Science',
    place: 'Tallinn, Estonia',
    description: 'Studied computer science while starting my career in software engineering.',
    work: [
      {
        label: 'WebAssembly thesis',
        detail: 'For my thesis, I built and ran five algorithm benchmarks across JavaScript, Rust, C++, AssemblyScript and C# in desktop and Android browsers. I compared the results to see which kinds of work actually benefit from WebAssembly and where JavaScript is already competitive.',
      },
    ],
    tags: [],
  },
];

export const projects = [
  {
    number: '01',
    name: 'Ampsu',
    logo: '/logos/ampsu-mark.svg',
    logoText: 'ampsu',
    kind: 'Personal project',
    description: [
      'I build and run Ampsu, a food and nutrition app for tracking meals and seeing how eating habits change over time.',
      'Its food database pulls from over 50 public nutrition databases and retailer sources across Europe and the US, and meals can be estimated from a photo. An adaptive TDEE (total daily energy expenditure) model estimates daily calorie burn from food logs and weight trends, forecasts where they are heading and adjusts calorie targets. I work across its Kotlin backend, Svelte frontend and infrastructure.',
    ],
    tags: ['Kotlin', 'Svelte', 'PostgreSQL', 'Docker', 'Ansible', 'Capacitor (Android)'],
    url: 'https://ampsu.eu',
    linkLabel: 'Visit ampsu.eu',
  },
  {
    number: '02',
    name: 'Translate tool',
    logo: '/logos/translate-tool.svg',
    kind: 'Built at Codeborne',
    description: [
      'I built this free alternative to Phrase at Codeborne so translators could work directly with JSON language files. It fully replaced Phrase and was used across other client projects.',
      'It flags missing keys and placeholders, previews formatting and can translate individual strings with Google Translate for free. Projects can be shared by link, and changes go back to GitHub or Bitbucket as commits or pull requests.',
    ],
    tags: ['Svelte', 'TypeScript', 'Express', 'GitHub / Bitbucket', 'Google Translate'],
    url: 'https://github.com/Uptaker/translate-tool',
    linkLabel: 'View on GitHub',
  },
];
