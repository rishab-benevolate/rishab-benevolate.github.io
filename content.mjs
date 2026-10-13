// content.mjs — everything on the site. Edit, then run: node build.mjs

export const site = {
  name: "Rishab Kattimani",
  url: "https://rishab.kattimani.net", // canonical URLs + sitemap
  description:
    "Rishab Kattimani builds software and companies, including Benevolate, and studies finance at UT Austin.",
  tagline: "Founder of Benevolate. Studying finance at UT Austin.",
  portrait: "portrait.jpg",
};

// Top-right links. Order is the display order.
export const socials = [
  { label: "Email", href: "mailto:rishabkattimani@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rishabkattimani/" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UC6OrQk8WsnCOR1OezlUU9zQ" },
  { label: "X", href: "https://x.com/rishabtweets" },
  { label: "Instagram", href: "https://www.instagram.com/rishabkattimani/" },
];

// Home page. Intro paragraph, then interests. Use [text](url) for links.
export const lede =
  "I think technology is one of the greatest forms of leverage humanity has ever created, and I’ve spent most of my life trying to figure out what I can do with it. I have a bad habit of biting off significantly more than I can chew. So far, I think that’s been a good thing.";

// Each interest is a label plus bullets. A bullet can be a string or { text, sub: [...] } for nested bullets.
export const interests = [
  {
    title: "Entrepreneurship",
    items: [
      {
        text: "I cofounded [Benevolate](https://benevolate.com) and currently run it as CEO, building the operating system I wish nonprofits already had.",
        sub: [
          "200,000+ donors reached",
          "~$800,000 in payments processed",
          "1M+ automated emails sent",
          "1,000+ hours spent building it, and probably an unhealthy number thinking about it",
        ],
      },
      "I’ve always been attracted to problems where the obvious response is, “There has to be a better way to do this.”",
      "I started CertificatesVault in 2024 to make creating and verifying digital certificates simpler.",
    ],
  },
  {
    title: "Philanthropy",
    items: [
      "I served as a Board Director and Digital Literacy Director at Briidge the Gap from 2023–2024, which gave me my first real look at how technology can either help a mission or get in its way.",
      "I built and taught Coding Carnival, a six-week coding course in McKinney ISD.",
      "I taught coding at the McKinney Public Library because I think learning to build technology changes the way you look at what’s possible.",
    ],
  },
  {
    title: "Artificial Intelligence",
    items: [
      "I started working with AI in 2021, before generative AI took over the conversation, building projects with decision trees and random forests.",
      "I moved into computer vision, building face recognition, object detection, and image captioning projects.",
      "I eventually got the opportunity to speak about AI at PyCon India.",
      "Now I’m experimenting heavily with generative AI, including building it directly into Benevolate and figuring out where it can actually be useful rather than just slapped onto a product.",
    ],
  },
  {
    title: "Technology",
    items: [
      "I’ve been coding for roughly eight years, which means a weirdly large percentage of my childhood was spent staring at an IDE because I wanted to be an inventor.",
      "I’ve built 90+ projects along the way, from things that became actual companies to things I built simply because I wanted to know if I could.",
      "I grew my [YouTube channel](https://www.youtube.com/channel/UC6OrQk8WsnCOR1OezlUU9zQ) past 11,000 subscribers teaching people about coding and the things I was building. It taught me pretty early that building something is only half the job. You also have to understand it well enough to explain why anyone else should care.",
      "I built a LEGO tank that I brought to Scratch Day at MIT and won first place in a district robotics competition.",
      "I’ve spoken at [TEDxYouth@ArchesPoint](https://www.ted.com/talks/rishab_kattimani_a_blank_slated_past_to_a_goal_oriented_future), Geekle, BelPy, and PyCon India. I care less about having been on the stages than making sure I eventually have something worth saying on them.",
    ],
  },
];

// Closing section on the home page.
export const closing = {
  title: "What ties all of this together",
  text: "I’m 18, so I’m under no illusion that I have everything figured out. I probably understand a microscopic percentage of what there is to understand about business, technology, people, or the world. But one thing I’ve become increasingly convinced of is that most people dramatically underestimate what they can actually build. We inherit systems, institutions, companies, and ways of doing things and subconsciously assume somebody smarter than us designed them that way for a reason. Then you look closely and realize that half of them are held together with duct tape. I want to spend my life looking closely, finding things that are unnecessarily complicated, inefficient, inaccessible, or simply wrong, understanding why they became that way, and seeing whether I can build something better. I have no idea how much of that I’ll actually accomplish. My current strategy is essentially to aim irresponsibly high, build constantly, change my mind when the evidence says I’m wrong, and see how far that gets me.",
};

// One testimonial, shown on the timeline page. Wording preserved; […] marks an omission.
export const quote = {
  text: "Rishab provided exceptional service during our events, and his instructional skills were incomparable. We received excellent feedback from participants regarding Rishab’s ability to convey complex coding concepts in an accessible manner. […] He was very personable and professional throughout his time at the library, and we appreciate his dedication to teaching coding.",
  name: "Jason Giang",
  role: "Director, McKinney Public Library System",
  context: "On coding instruction I delivered at library events.",
};

export const timelineNext = "Next, I’m building skills in finance, sales, and AI around that foundation.";

// Essays. Newest first. `body` paragraphs; [text](url) links allowed.
export const notes = [
  {
    slug: "why-start-a-company-for-nonprofits-instead-of-an-ai-company",
    title: "Why Start a Company for Nonprofits instead of an AI company",
    date: "2026-10-09",
    body: [
      "People start nonprofits because they care deeply about a cause, not because they want to run a business.",
      "It’s kind of like baseball. Nobody grows up wanting to manage the stadium lights, organize ticket sales, update the scoreboard, and make sure the concession stand’s accounting works. They want to play baseball. But all of those things still have to happen for the game to work.",
      "Nonprofits have the same problem.",
      "Behind every mission is still an organization that has to manage money, people, events, communication, and a hundred other things. And somehow, the solution the software industry came up with was to give them a different system for practically every one of those things.",
      "[Benevolate](https://benevolate.com) really started because I ran into this problem myself.",
      "I was serving on the board of a large nonprofit, and we were using so many softwares: Mailchimp for emails, Donorbox and Fundraise Up for fundraising, Eventbrite for events, and then other information sitting in spreadsheets and different places. Each tool worked fine on its own, but none of them really knew what was happening in the others.",
      "That became a much bigger problem when we actually wanted to use our data. We had really valuable information about our donors, events, fundraising, and engagement, but putting everything together was almost impossible. Once in a while we would export everything and try to piece it together in Excel, but that obviously wasn't something we could realistically do every time we wanted to answer a question.",
      "So I initially started building something that could bring the main parts together.",
      "Then some of our friends at other nonprofits saw what we were doing and asked if they could have access.",
      "That was when we realized this wasn't just our problem.",
      "Today, Benevolate brings fundraising, payments, CRM, events, memberships, forms, volunteers, email and SMS, accounting, reporting, and other operations into one system. Then we go deeper depending on who is using it. Synagogues can run schools, preschools, household billing, and cemeteries. Museums can manage admissions, ticketing, visitors, programs, events, and donations.",
      "But a huge part of our product isn’t what Benevolate can do, it’s how it feels to actually use it.",
      "We've spent a ridiculous amount of time engineering each page, choosing what information actually needs to be there, how many clicks something should take, and how someone who is completely nontechnical will understand what to do next.",
      "Because the point isn't to give nonprofits more technology.",
      "The point is to make the technology disappear.",
      "And now that all of this information actually lives together, the next step gets even more interesting. With Benevolate Intelligence, an executive could ask, “Who attended three events but hasn’t donated?” Benevolate can understand their data, find the answer, and eventually help them act on it.",
      "We've already served 15+ organizations, processed roughly $800,000 through the platform, reached more than 200,000 donors, and sent well over one million automated emails. But we're still incredibly early.",
      "There are roughly 1.5 million nonprofits in the United States, and almost all of them have some version of this problem.",
      "They shouldn't have to become software experts to do good.",
      "Just like the baseball player shouldn't have to worry about running the stadium, nonprofits should be able to focus on why they showed up in the first place.",
      "They focus on the mission.",
      "We make everything behind it work.",
    ],
  },
];

// Timeline page, chronological.
export const timeline = [
  { when: "2013–2018", text: "Early projects. Presented a LEGO tank, programmed with motors and block-based code, at Scratch Day at MIT." },
  { when: "2020 onwards", text: "Middle school. Started programming and kept building: software, automation, hardware, APIs, robotics, and AI." },
  { when: "2020–2023", text: "Ran a coding and technology channel on YouTube, and taught coding in schools and libraries." },
  { when: "2023–2024", text: "Joined Briidge the Gap, a nonprofit, as a board director and digital-literacy leader: curriculum, school and library programs, and technology initiatives." },
  { when: "2024", text: "Built CertificatesVault, a digital certificate storage and verification service. My first attempt at a business around software." },
  { when: "September 2024", text: "Co-founded [Benevolate](https://benevolate.com). I’m CEO." },
  { when: "August 2026", text: "Moved to Austin to study finance at the McCombs School of Business, UT Austin." },
];
