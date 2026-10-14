export interface TestimonialItem {
  id: string;
  category: "diploma" | "helc";
  name: string;
  role: string;
  program: string;
  headline?: string;
  quote: string;
  highlightChip?: string;
}

// Category 1: Testimonials Diploma Program
export const DIPLOMA_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "dip-1",
    category: "diploma",
    name: "Ciara M., R.H.N.",
    role: "CSNN Graduate · Live Online",
    program: "Natural Nutrition Diploma Program",
    headline: "Truly blown away by how nicely it all came together",
    quote:
      "My experience was fantastic…I wasn’t sure what to expect from a virtual experience, but I was truly blown away by how nicely it all came together. Even with young toddlers at home, I was able to balance my schedule. The instructors were so incredibly understanding and accommodating and worked hard to help me thrive…I always felt really well supported on this adventure. I had the most amazing classmates. I never felt so closely connected to people online. We just had so much in common and had a general sense of excitement to learn.",
    highlightChip: "Live Online Virtual Experience",
  },
  {
    id: "dip-2",
    category: "diploma",
    name: "Alexandria M., CSNN Toronto Graduate",
    role: "CSNN Toronto Graduate",
    program: "Natural Nutrition Diploma Program",
    headline: "You’ll get empowering knowledge, not just information thrown at you",
    quote:
      "I chose CSNN Toronto because I wanted more than just information — I sought an education that would empower me to honor the body’s innate wisdom and nurture the mind and body through food. CSNN’s comprehensive and compassionate program gave me the tools and confidence to guide others in rebuilding their relationship with food and themselves. It opened a meaningful pathway to blend nutrition and wellbeing into a holistic practice that truly resonates with who I am and the impact I want to make.",
    highlightChip: "Empowering Knowledge & Practice",
  },
  {
    id: "dip-3",
    category: "diploma",
    name: "CSNN Toronto Graduate",
    role: "CSNN Toronto Graduate",
    program: "Natural Nutrition Diploma Program",
    headline: "Equipped with the expertise to give back and help others",
    quote:
      "After reviewing the curriculum for CSNN, I knew this was the program for me. They include such an in-depth and diverse range of modules that will challenge how you think and give appreciation on how the body functions. The education and support I received has been the best I have seen with very knowledgeable instructors. They are with you every step of the way. And now I am equipped with the expertise to give back and help others in their journey.",
    highlightChip: "In-Depth Curriculum & Faculty",
  },
  {
    id: "dip-4",
    category: "diploma",
    name: "Vida N., CSNN Toronto Graduate",
    role: "CSNN Toronto Graduate",
    program: "Natural Nutrition Diploma Program",
    headline: "My journey with CSNN Toronto was truly transformative",
    quote:
      "I was drawn to CSNN Toronto because I was seeking evidence-based dietary and lifestyle changes that would help me understand the root of my symptoms and discover natural ways to support my body. My journey with CSNN Toronto was truly transformative, equipping me with the expertise, clarity, and confidence to make a meaningful impact for my health and now the health of others. The consistent and genuine support from the faculty, Alumni Association, and entire CSNN Toronto team empowered me to grow both personally and professionally. I am incredibly grateful for this education and community.",
    highlightChip: "Evidence-Based & Transformative",
  },
  {
    id: "dip-5",
    category: "diploma",
    name: "Caroline C., CSNN Toronto Graduate",
    role: "Nutrition Practice Owner · Graduate",
    program: "Natural Nutrition Diploma Program",
    headline: "All the tools I needed to now run my own nutrition practice",
    quote:
      "I’m so glad that I chose CSNN Toronto . I did a lot of research and I liked how well-established the school was as well as the flexibility that it offered especially while balancing a full-time job during my studies. I also loved that the CSNN Toronto curriculum included courses like anatomy, symptomatology, biochemistry, pathology and understanding nutrition research as these were areas that I wanted to learn more about given that my background was in economics and finance. CSNN Toronto gave me all of the tools that I needed to now run my own nutrition practice and I couldn’t be happier with my choice!",
    highlightChip: "Balancing Full-Time Work",
  },
  {
    id: "dip-6",
    category: "diploma",
    name: "Melissa M., CSNN Toronto Graduate",
    role: "Certified Mindfulness Practitioner · Graduate",
    program: "Natural Nutrition Diploma Program",
    headline: "Well-rounded approach to holistic nutrition & mindfulness",
    quote:
      "I chose CSNN Toronto because of its well rounded approach to holistic nutrition, taking into consideration the mind and body, as factors that affect our everyday wellbeing along with our nutrition. As a certified mindfulness practitioner, the holistic approach was extremely important to me. CSNN Toronto content was extremely insightful, alongside the practical learning I drew from my peers and instructors. The ability to do the course online was also incredible, as it enabled me to keep up with my work and family, while completing the course and I could do it from almost anywhere.",
    highlightChip: "Mind & Body Connection",
  },
  {
    id: "dip-7",
    category: "diploma",
    name: "Paige P., CSNN Toronto Graduate",
    role: "B.A.Sc. Applied Human Nutrition · CSNN Graduate",
    program: "Natural Nutrition Diploma Program",
    headline: "A full scope of what the power of nutrition can offer to clients",
    quote:
      "After I completed a B.A.Sc. in Applied Human Nutrition, I wondered if there was still more to learn about nutrition from a non-clinical perspective. I then found CSNN Toronto and discovered that my academic journey was only beginning. CSNN Toronto built onto the knowledge that I had gained during my undergraduate program and incorporated different ways of thinking and approaching the needs of clients. One of the greatest experiences I had during the natural nutrition program was the connections you create with the instructors. As professionals, they truly want to see their students succeed and apply what we learn to real life experiences that they have had. I now feel that I have a full scope of what the power of nutrition can offer to clients and to my own health.",
    highlightChip: "Applied Clinical Science",
  },
  {
    id: "dip-8",
    category: "diploma",
    name: "Clare H., CSNN Toronto Graduate",
    role: "Founder, Clarity Wellness · CSNN Graduate",
    program: "Natural Nutrition Diploma Program",
    headline: "Graduated with the confidence to start my own consulting business",
    quote:
      "My experience at CSNN Toronto was nothing short of transformative! I felt like a sponge while I was in class – soaking up all the information I could. I loved the perspectives of all my teachers who had unique backgrounds and interests in various fields of nutrition. While I enrolled mainly for the nutrition and food component of the program, I found myself absolutely loving the lifestyle component and the emphasis on mind-body-spirit connection. I truly feel that I gained so much during my time at CSNN Toronto. I graduated with the confidence to start my own nutritional consulting business, Clarity Wellness, and have regularly implemented my learnings from class to consultations with my clients. I recommend CSNN Toronto to anyone who is looking to deepen their connection to themselves and to their health and wellness through holistic living and nutrition!",
    highlightChip: "Clarity Wellness Business Founder",
  },
];

// Category 2: Healthy Eating & Certificate Testimonials
export const HELC_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "helc-1",
    category: "helc",
    name: "HELC Student",
    role: "Healthy Eating & Lifestyle Certificate Student",
    program: "10 Holistic Nutrition Workshops",
    headline: "Completely satisfied with theoretical and practical knowledge",
    quote:
      "Thank you for the comprehensive workshop you have presented and which I am completely satisfied with all the theoretical and practical knowledge I have acquired and revisited. We are very lucky to have teacher providing us with many excellent information from her own client-based practice and educational background. We appreciate highly qualified instructor and all the time and patience they have provided.",
    highlightChip: "Comprehensive Workshop Series",
  },
  {
    id: "helc-2",
    category: "helc",
    name: "HELC Student",
    role: "Healthy Eating & Lifestyle Certificate Student",
    program: "10 Holistic Nutrition Workshops",
    headline: "Instructor was so passionate and engaging",
    quote:
      "I enjoyed the class. The instructor was so passionate and engaging. The content and slides were detailed and informative.",
    highlightChip: "Passionate & Engaging Facilitation",
  },
  {
    id: "helc-3",
    category: "helc",
    name: "HELC Student",
    role: "Healthy Eating & Lifestyle Certificate Student",
    program: "10 Holistic Nutrition Workshops",
    headline: "Practical recipes we can easily implement in our health journey",
    quote:
      "Instructor is very knowledgeable as a facilitator, positive and upbeat. The content itself is excellent as I have learned so much. Group work has been positive to allow for getting to know other participants and sharing ideas. Practical exercises of developing meal ideas incorporating the week's learnings has been very helpful as we can easily implement these recipes to help our health journey",
    highlightChip: "Practical Weekly Meal Exercises",
  },
  {
    id: "helc-4",
    category: "helc",
    name: "HELC Student",
    role: "Healthy Eating & Lifestyle Certificate Student",
    program: "10 Holistic Nutrition Workshops",
    headline: "Strengthened my understanding & opened new windows for deeper study",
    quote:
      "I wanted to express my sincere appreciation for the wonderful Healthy Eating & Lifestyle course we shared. I am truly grateful for the opportunity to participate and learn from CSNN Toronto. This course not only strengthened my understanding of nutrition but also opened new windows for deeper study and exploration. Each session inspired me to continue learning and improving my lifestyle. Thank you again for your guidance, support, and the positive learning environment you created.",
    highlightChip: "Inspiring Positive Learning Environment",
  },
];

export const ALL_TESTIMONIALS: TestimonialItem[] = [
  ...DIPLOMA_TESTIMONIALS,
  ...HELC_TESTIMONIALS,
];
