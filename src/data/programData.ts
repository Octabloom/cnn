export interface Workshop {
  id: number;
  number: string;
  title: string;
  description: string;
  highlight?: string;
  image: string;
}

export interface MotivationOption {
  id: string;
  num: string;
  title: string;
  subtitle: string;
}

export const PROGRAM_INFO = {
  institution: "CSNN Toronto — Canadian School of Natural Nutrition",
  foundedYear: 1994,
  motto: "Teaching the Medicine of the Future™ since 1994",
  programName: "Healthy Eating & Lifestyle Certificate",
  programShortName: "HELC",
  tagline: "What if your wellness started in your kitchen?",
  subTagline: "Every meal is a choice that energises, nourishes and transforms your life. Learn practical nutrition live online with Rasha Abu Rabi, BSc., MSc., R.H.N. No experience needed.",
  startDate: "October 28, 2026",
  scheduleTime: "Evenings 6:00–8:30 pm EST",
  totalWorkshops: 10,
  totalHours: 21,
  deliveryFormat: "Live Online (Interactive via Zoom)",
  cecs: "4 canfitpro CECs (with Certificate of Achievement)",
  phone: "647-224-3772",
  phoneRaw: "6472243772",
  email: "torontoinfo@csnn.ca",
  location: "Toronto, Ontario, Canada (Accessible Worldwide)",
};

export const MOTIVATION_OPTIONS: MotivationOption[] = [
  {
    id: "health-energy",
    num: "01",
    title: "Improve my own health & energy",
    subtitle: "Feel better day to day with simple food choices.",
  },
  {
    id: "family-meals",
    num: "02",
    title: "Feed my family better",
    subtitle: "Plan whole-food meals everyone enjoys.",
  },
  {
    id: "career-step",
    num: "03",
    title: "Explore a career in holistic nutrition",
    subtitle: "A first step toward CSNN’s full diploma.",
  },
  {
    id: "fitness-cecs",
    num: "04",
    title: "Earn CECs as a fitness / wellness pro",
    subtitle: "Achievement certificate = 4 canfitpro CECs.",
  },
  {
    id: "digestion-stress",
    num: "05",
    title: "Manage digestion, immunity or stress",
    subtitle: "Practical support for a specific concern.",
  },
];

export const WORKSHOPS: Workshop[] = [
  {
    id: 1,
    number: "01",
    title: "Proper Digestion & Gut Health",
    description: "Understand the GI tract, gut bacteria, microbiome diversity, and the power of fermented foods.",
    highlight: "Microbiome & Fermented Foods",
    image: "/images/ws-01-gut.jpg",
  },
  {
    id: 2,
    number: "02",
    title: "Good Carbs vs. Bad Carbs",
    description: "Uncover the truth about sugars, grains, fiber, and how to identify hidden carbs.",
    highlight: "Fiber & Hidden Sugars",
    image: "/images/ws-02-carbs.jpg",
  },
  {
    id: 3,
    number: "03",
    title: "All About Protein",
    description: "Learn about plant vs. animal proteins, protein needs, and quality sources.",
    highlight: "Plant vs Animal Quality",
    image: "/images/ws-03-protein.jpg",
  },
  {
    id: 4,
    number: "04",
    title: "Demystifying Fats",
    description: "Decode the good, the bad, and the essential role of fats in your health.",
    highlight: "Essential Fatty Acids",
    image: "/images/ws-04-fats.jpg",
  },
  {
    id: 5,
    number: "05",
    title: "Vitamins & Minerals Essentials",
    description: "Discover the functions of key nutrients and where to find them in whole foods.",
    highlight: "Micronutrient Sources",
    image: "/images/ws-05-vitamins.jpg",
  },
  {
    id: 6,
    number: "06",
    title: "Detox What?",
    description: "Explore natural detoxification methods, liver supporting foods, and gentle cleansing tips.",
    highlight: "Liver Support & Cleansing",
    image: "/images/ws-06-detox.jpg",
  },
  {
    id: 7,
    number: "07",
    title: "Phytonutrients & Eating the Rainbow",
    description: "Learn why different colours on your plate matter, and how they protect your body.",
    highlight: "Color Diversity & Defense",
    image: "/images/ws-07-rainbow.jpg",
  },
  {
    id: 8,
    number: "08",
    title: "Immunity with Whole Foods",
    description: "Support your immune system through anti-inflammatory foods and nutrient-rich choices.",
    highlight: "Anti-Inflammatory Choices",
    image: "/images/ws-08-immunity.jpg",
  },
  {
    id: 9,
    number: "09",
    title: "Whole Foods Kitchen 101",
    description: "From pantry prep to budget meals, cookware tips, and clean eating. Simplify your kitchen.",
    highlight: "Pantry Prep & Budget Cooking",
    image: "/images/ws-09-kitchen.jpg",
  },
  {
    id: 10,
    number: "10",
    title: "Stress & Mindset",
    description: "Understand how stress impacts the body and how positive mindset habits improve wellness.",
    highlight: "Mindset & Body Balance",
    image: "/images/ws-10-mindset.jpg",
  },
];

export const INSTRUCTOR = {
  name: "Rasha Abu Rabi",
  title: "BSc., MSc., R.H.N.",
  role: "Lead Instructor & Registered Holistic Nutritionist",
  credentials: [
    "BSc, Nutrition & Food Technology",
    "Master's in Public Health",
    "CSNN Natural Nutrition Diploma",
    "Registered Holistic Nutritionist",
  ],
  principles: [
    { title: "Variety", desc: "Nourish the body with diverse whole foods and nutrients across every meal." },
    { title: "Frequency", desc: "Build consistent, sustainable eating rhythms that support natural vitality." },
    { title: "Moderation", desc: "Foster balance and joy without extreme deprivation or unsustainable rules." },
  ],
  bioParagraphs: [
    "Rasha has always been a foodie. Growing up, she developed a passion for medicine and nutrition. Rasha says she owes that to her father who is an amazing medical doctor.",
    "She does not believe in good and bad food but believes in unhealthy vs. healthy weight control practices. Her expertise helps her clients build a strong solid base, and she guides them and sticks by their side until they build a healthier lifestyle and become their own nutrition coach.",
    "Rasha has a BSc in Nutrition and Food Technology and a Master’s in Public Health. She went on to pursue her passion for nutrition and completed the Natural Nutrition Diploma Program at CSNN to become a Registered Holistic Nutritionist to incorporate into her dietetic practice.",
    "Rasha started her career in the field of research and as a dietitian in different hospitals, weight loss centres, and pharmacies. This all created an enriched professional experience in Nutrition and Dietetics, with a focus in digestive health, women’s health and the body, mind, and soul connection.",
    "Rasha lives by three key words: variety, frequency, and moderation. She takes great care about her clients and wants to be there to celebrate their success.",
  ],
  focusAreas: [
    { label: "Digestive health", desc: "Microbiome optimization and gut comfort" },
    { label: "Women's health", desc: "Hormonal balance and stage-of-life nutrition" },
    { label: "Body, mind & soul", desc: "Holistic well-being beyond strict food rules" },
  ],
};

export const STUDENT_TESTIMONIAL = {
  quoteParagraph1: "I found the course of healthy eating in CSNN extremely valuable. It could connect existing knowledge to more holistic and practical understanding about everyday healthy choices.",
  quoteParagraph2: '"I have more than ten years experience of healthy food… I am inspired, and I highly recommend it" to anyone who wants to deepen their understanding about healthy living.',
  studentName: "Shiva",
  studentRole: "HELC student · 10+ years in healthy food",
  rating: 5,
  videoSrc: "/assets/videos/client-testimonials.mp4",
  posterSrc: "/assets/frames/test-5.5.jpg",
  duration: "0:46",
};

export const HOW_YOU_LEARN_CARDS = [
  {
    title: "Live Instructor Classes",
    description: "Ask your instructor questions in real time, every session. Live engagement fosters deep comprehension.",
    image: "/assets/frames/crop-v657-36.1.jpg",
    alt: "Live instructor class discussion",
  },
  {
    title: "Learn with fellow students",
    description: "Discuss, share, and build healthy habits together as an inspiring, supportive community.",
    image: "/assets/frames/crop-v657-3.jpg",
    alt: "Collaborative learning and habit building with students",
  },
  {
    title: "Join from anywhere",
    description: "Toronto, across Canada, or anywhere around the world. All sessions are delivered seamlessly online.",
    image: "/assets/frames/crop-v636-35.9.jpg",
    alt: "Online learning accessible from any location worldwide",
  },
  {
    title: "Use it in your kitchen",
    description: "Make simple, smarter whole-food choices that immediately benefit you and your loved ones.",
    image: "/assets/frames/crop-v636-0.4.jpg",
    alt: "Applying whole-food nutrition practical kitchen skills",
  },
];
