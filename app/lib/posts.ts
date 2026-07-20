export type Artwork = "ochre";

export type Post = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  publishedAt: string;
  readMinutes: number;
  artwork: Artwork;
  socialImage: string;
  featured?: boolean;
  paragraphs: string[];
};

export const posts: Post[] = [
  {
    slug: "feel-human-again",
    category: "Essay",
    title: "I Want to Feel Human Again",
    excerpt: "On development, AI, loneliness, and life beyond the laptop screen.",
    date: "Jul 18, 2026",
    publishedAt: "2026-07-18",
    readMinutes: 5,
    artwork: "ochre",
    socialImage: "/social/feel-human-again.png",
    featured: true,
    paragraphs: [
      "I have been feeling stuck for a while now. Not stuck in the simple sense of being lazy or confused for a day or two. It feels deeper than that. It feels like I am sitting in front of my laptop for hours, trying to build something, trying to make something meaningful, but somewhere along the way I have stopped feeling alive while doing it.",
      "I have been interested in LLMs, and the deeper technical side of AI. I was learning things like how LLMs work, trying to understand the “Attention Is All You Need” paper, and implementing parts of it myself. That kind of work once felt meaningful to me because I was actually learning the core. I was trying to understand what was happening underneath.",
      "But recently, my life has shifted heavily toward building products. I have been working on a startup based in Hyderabad that focuses on AI workforce training and software automation solutions.",
      "On paper, that sounds exciting. In reality, it has been exhausting.",
      "I have set up domains, Google authentication, redirects, Vercel environment variables, analytics, signups, backend flows, and so many things that I did with the help of AI tools. I have been vibe-coding, prompting Claude, ChatGPT, and other models again and again, trying to get the product working and trying to make it look good.",
      "And that is where I feel trapped.",
      "The app works. The product exists. But the UI does not feel good enough to me. The homepage is one thing I actually feel proud of, but the internal screens do not feel polished. The main website also does not feel good enough. Every time I look at well-designed products like X, ChatGPT, Anthropic, Discord, or even a clean browser like Helium, I feel how powerful beautiful design can be. A good UI can pull you toward a product. It can make something feel calm, simple, trustworthy, and alive.",
      "I care about that a lot.",
      "I do not just want something that technically works. I want something that feels beautiful. I want it to be minimal, clean, smooth, and easy on the eyes. I want the user to feel drawn to it. I want the product to feel like it deserves attention.",
      "But the problem is that UI is not deterministic. It is not like solving a programming problem where there is a clear correct answer. With UI, there are infinite possibilities. Today something may look good. Tomorrow it may feel wrong. Someone else may look at it and say it is not good enough. Then I go back to AI, ask it to improve things, and the result still does not feel right. So I keep prompting again and again, trapped in a loop of subjective iteration.",
      "That loop has drained me.",
      "I am just sitting in front of my laptop, typing prompts into AI models, waiting for them to produce something, then judging it, rejecting it, and trying again. I do not understand enough of the core web technologies like TypeScript, JavaScript, CSS, and HTML to feel fully in control. So even when something works, it feels like a black box.",
      "That makes me feel like I am the liability.",
      "At the same time, I feel invisible online.",
      "I post on Twitter about what I am working on, about projects, about ideas, about UI, about things I genuinely care about. But there is almost no reach. No comments. No replies. No meaningful engagement. It feels like shouting into a dark void where nothing echoes back.",
      "I do not even necessarily want fame. I just want some sign that someone noticed. A reply. A piece of feedback. A follow back. A small conversation.",
      "I deleted Instagram because I felt reels were rotting my brain. I deleted Snapchat because it felt useless. Twitter is the main online place I still use, partly because I believe in it and partly because I like its interface and culture. But even there, it often feels empty. I pay for verification, I post, I try to share things, and still it feels like no one is listening.",
      "Offline, things do not feel much better.",
      "I do not really have a friend circle. I do not have people I deeply trust to go out with, eat with, or talk to. I spend a lot of time alone. I walk on the terrace at evening and night, looking at the cloudy sky and the city view, but even that feels empty. The world is there. The lights are there. The clouds are there. But inside, something feels missing.",
      "At night, the emptiness gets stronger. Sometimes I fall into wishful thinking. I imagine scenarios that did not happen.",
      "Good design feels calm. It feels controlled. A clean browser, a polished app, a beautiful page, a minimal layout. These things feel satisfying because they are ordered and intentional. They make me feel something, even if only for a moment.",
      "My life feels lonely. I am trying to build products, trying to learn AI, trying to get noticed online, trying to make things that feel good enough. But somewhere inside all of that, I feel empty.",
      "I do not think my problem is only UI. I do not think it is only Twitter. I do not think it is only startup pressure. I think all of these things are sitting on top of something deeper: I want to feel alive again. I want to feel connected. I want to understand what I am doing instead of just prompting machines. I want people to notice me online. I want to build something beautiful, but I also want my life to feel like it has meaning beyond a laptop screen.",
      "Maybe I need to rebuild my relationship with learning, with people, and with myself. Maybe I need to return to the things that made me curious before: LLMs, real understanding, and building from the core.",
      "I still care about beautiful interfaces. I still care about AI. I still care about building. I still care about being seen.",
      "I do not want to keep living like a dead piece of meat in front of a laptop. I want to feel human again.",
    ],
  },
  // Future post placeholders. Keep these until their full articles are ready.
  // {
  //   slug: "neighbourhood-bookstore",
  //   category: "Culture",
  //   title: "What a neighbourhood bookstore remembers",
  //   excerpt: "The quiet infrastructure of a city: familiar spines, hand-written cards, and the people who return.",
  // }
  // {
  //   slug: "unfinished-thoughts",
  //   category: "Notes",
  //   title: "On making room for unfinished thoughts",
  //   excerpt: "Some ideas need to live in the margins before they learn how to speak.",
  // }
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
