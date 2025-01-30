export interface Milestone {
    id: string
    year: number
    title: string
    description: string
    profitModel: string
    impact: string
    categories: string[]
  }
  
  export const milestones: Milestone[] = [
    {
      id: "arpanet",
      year: 1969,
      title: "ARPANET",
      description: "The first wide-area computer network with distributed control nodes.",
      profitModel: "Government funded research project",
      impact: "Laid the groundwork for the modern internet",
      categories: ["Infrastructure", "Research", "Government Funded"],
    },
    {
      id: "email",
      year: 1971,
      title: "First Email",
      description: "Ray Tomlinson sends the first email using the @ symbol.",
      profitModel: "Communication tool, later commercialized",
      impact: "Revolutionized digital communication",
      categories: ["Communication", "Software", "Advertising"],
    },
    {
      id: "tcp-ip",
      year: 1983,
      title: "TCP/IP",
      description: "The communication protocol that became the standard for internet data transmission.",
      profitModel: "Open standard, no direct profit model",
      impact: "Enabled global interconnectivity of networks",
      categories: ["Infrastructure", "Protocol", "Open Source"],
    },
    {
      id: "dns",
      year: 1984,
      title: "Domain Name System (DNS)",
      description: "Introduction of the Domain Name System, allowing the use of domain names instead of IP addresses.",
      profitModel: "Domain registration and management services",
      impact: "Made the internet more user-friendly and navigable",
      categories: ["Infrastructure", "Protocol", "Service Fees"],
    },
    {
      id: "aol",
      year: 1985,
      title: "America Online (AOL)",
      description:
        "Quantum Computer Services (later renamed AOL) launches an online service for Commodore 64 and 128 computers.",
      profitModel: "Subscription-based online services, later advertising and web services",
      impact: "Popularized internet access and online communities for mainstream users",
      categories: ["Digital Platforms", "Commercial", "Communication", "Subscription", "Advertising"],
    },
    {
      id: "nsfnet",
      year: 1986,
      title: "NSFNET",
      description: "The National Science Foundation Network, which became a major backbone of the internet.",
      profitModel: "Government funded research network",
      impact: "Expanded internet access to research and educational institutions",
      categories: ["Infrastructure", "Research", "Government Funded"],
    },
    {
      id: "irc",
      year: 1988,
      title: "Internet Relay Chat (IRC)",
      description: "Jarkko Oikarinen develops IRC, one of the first real-time internet chat systems.",
      profitModel: "Open protocol, various clients (some commercial)",
      impact: "Pioneered real-time text communication and laid groundwork for modern chat applications",
      categories: ["Communication", "Protocol", "Software", "Open Source", "Advertising"],
    },
    {
      id: "www",
      year: 1989,
      title: "World Wide Web",
      description: "Tim Berners-Lee proposes the World Wide Web, a system of interlinked hypertext documents.",
      profitModel: "Open standard, led to numerous commercial applications",
      impact: "Made the internet accessible to the general public",
      categories: ["Infrastructure", "Web", "Open Source"],
    },
    {
      id: "linux",
      year: 1991,
      title: "Linux",
      description: "Linus Torvalds releases the Linux kernel, the core of the Linux operating system.",
      profitModel: "Open-source development, later commercialized through support and services",
      impact: "Became the foundation for numerous operating systems and powered much of the internet's infrastructure",
      categories: ["Software", "Open Source", "Infrastructure"],
    },
    {
      id: "first-website",
      year: 1991,
      title: "First Website",
      description: "The first website is published by Tim Berners-Lee at CERN.",
      profitModel: "No direct profit model, but sparked the web industry",
      impact: "Demonstrated the potential of the World Wide Web",
      categories: ["Web", "Software", "Donations"],
    },
    {
      id: "mosaic",
      year: 1993,
      title: "Mosaic Web Browser",
      description: "The first popular graphical web browser, making the web more accessible to the public.",
      profitModel: "Free software, led to commercial browsers",
      impact: "Brought the web to a mainstream audience",
      categories: ["Web", "Software", "Donations"],
    },
    {
      id: "yahoo",
      year: 1994,
      title: "Yahoo!",
      description: "Jerry Yang and David Filo create Yahoo! as a directory of websites.",
      profitModel: "Initially advertising, later expanded to various internet services",
      impact: "One of the first major web portals, helping users navigate the early web",
      categories: ["Web", "Search", "Commercial", "Advertising"],
    },
    {
      id: "netscape",
      year: 1994,
      title: "Netscape Navigator",
      description: "The first commercial web browser, which played a crucial role in the rapid growth of the early web.",
      profitModel: "Commercial software sales",
      impact: "Accelerated the adoption of the World Wide Web",
      categories: ["Web", "Commercial", "Software", "Hardware Sales"],
    },
    {
      id: "amazon",
      year: 1994,
      title: "Amazon.com",
      description: "Jeff Bezos founds Amazon as an online bookstore.",
      profitModel: "E-commerce, later expanded to cloud services and more",
      impact: "Pioneered e-commerce and revolutionized retail",
      categories: ["Commercial", "E-commerce", "Cloud", "Hardware Sales"],
    },
    {
      id: "craigslist",
      year: 1995,
      title: "Craigslist",
      description:
        "Craig Newmark launches Craigslist as an email distribution list to friends, featuring local events in the San Francisco Bay Area.",
      profitModel: "Paid job listings and apartment listings in select cities",
      impact: "Revolutionized classified ads and local community engagement online",
      categories: ["Commercial", "Web", "Social", "Service Fees"],
    },
    {
      id: "apache",
      year: 1995,
      title: "Apache HTTP Server",
      description: "The Apache HTTP Server is released, becoming the world's most popular web server software.",
      profitModel: "Open-source, community-driven development",
      impact: "Powered a significant portion of websites, promoting open-source in web infrastructure",
      categories: ["Infrastructure", "Software", "Open Source", "Community-Driven"],
    },
    {
      id: "php",
      year: 1995,
      title: "PHP",
      description: "Rasmus Lerdorf releases the first version of PHP, a server-side scripting language.",
      profitModel: "Open-source, led to commercial web development",
      impact: "Enabled dynamic web content and web applications",
      categories: ["Web", "Software", "Open Source", "Advertising"],
    },
    {
      id: "javascript",
      year: 1995,
      title: "JavaScript",
      description: "Brendan Eich creates JavaScript, a programming language for the web.",
      profitModel: "Open standard, led to numerous commercial applications",
      impact: "Enabled interactive and dynamic web pages",
      categories: ["Web", "Software", "Open Source"],
    },
    {
      id: "ebay",
      year: 1995,
      title: "eBay",
      description: "Pierre Omidyar launches AuctionWeb, which later becomes eBay.",
      profitModel: "Online marketplace with transaction fees",
      impact: "Pioneered online auctions and peer-to-peer e-commerce",
      categories: ["Commercial", "E-commerce", "Service Fees"],
    },
    {
      id: "mapquest",
      year: 1996,
      title: "MapQuest",
      description: "MapQuest launches its online mapping service, providing directions and maps to internet users.",
      profitModel: "Advertising and licensing of mapping data",
      impact: "Pioneered online mapping and navigation services, changing how people plan travel",
      categories: ["Web", "Commercial", "Navigation", "Advertising", "Licensing"],
    },
    {
      id: "internet-archive",
      year: 1996,
      title: "Internet Archive",
      description:
        "Brewster Kahle founds the Internet Archive, a digital library of Internet sites and other cultural artifacts.",
      profitModel: "Non-profit, relies on donations and grants",
      impact: "Preserved digital history and provided free access to cultural resources",
      categories: ["Nonprofit", "Digital", "Donations"],
    },
    {
      id: "ultima-online",
      year: 1997,
      title: "Ultima Online",
      description:
        "One of the first massively multiplayer online role-playing games (MMORPGs) to achieve widespread success.",
      profitModel: "Subscription-based gaming",
      impact: "Pioneered the MMORPG genre and demonstrated the potential of persistent online worlds",
      categories: ["Commercial", "Gaming", "Software", "Subscription"],
    },
    {
      id: "aim",
      year: 1997,
      title: "AOL Instant Messenger (AIM)",
      description: "AOL launches AIM, one of the first popular instant messaging services.",
      profitModel: "Free service bundled with AOL subscriptions, later ad-supported",
      impact: "Popularized real-time online communication and influenced future messaging platforms",
      categories: ["Communication", "Software", "Social", "Subscription", "Advertising"],
    },
    {
      id: "google",
      year: 1998,
      title: "Google",
      description: "Larry Page and Sergey Brin found Google, revolutionizing web search.",
      profitModel: "Advertising, later expanded to various internet services",
      impact: "Transformed how people find and access information online",
      categories: ["Commercial", "Search", "Advertising"],
    },
    {
      id: "napster",
      year: 1999,
      title: "Napster",
      description: "The first widely-used peer-to-peer file sharing service, focusing on music.",
      profitModel: "Initially free, later subscription-based",
      impact: "Disrupted the music industry and sparked debates on digital rights",
      categories: ["Commercial", "Software", "P2P", "Music", "Subscription"],
    },
    {
      id: "wifi",
      year: 1999,
      title: "Wi-Fi",
      description: "The Wi-Fi Alliance is formed, standardizing wireless networking technology.",
      profitModel: "Hardware sales and licensing",
      impact: "Enabled widespread mobile internet access",
      categories: ["Infrastructure", "Wireless", "Hardware Sales", "Licensing"],
    },
    {
      id: "bittorrent",
      year: 2001,
      title: "BitTorrent",
      description: "Bram Cohen creates BitTorrent, a peer-to-peer file sharing protocol.",
      profitModel: "Open protocol, later commercialized through various applications",
      impact: "Revolutionized file sharing and content distribution",
      categories: ["Software", "P2P", "Protocol", "Open Source", "Advertising"],
    },
    {
      id: "wikipedia",
      year: 2001,
      title: "Wikipedia",
      description: "Jimmy Wales and Larry Sanger launch Wikipedia, a free online encyclopedia.",
      profitModel: "Non-profit, donation-based",
      impact: "Democratized knowledge creation and access",
      categories: ["Nonprofit", "Digital", "Donations"],
    },
    {
      id: "creative-commons",
      year: 2001,
      title: "Creative Commons",
      description: "Lawrence Lessig founds Creative Commons, providing free, easy-to-use copyright licenses.",
      profitModel: "Non-profit, relies on donations and grants",
      impact: "Facilitated sharing and reuse of creative works online",
      categories: ["Nonprofit", "Legal", "Donations"],
    },
    {
      id: "skype",
      year: 2003,
      title: "Skype",
      description: "Niklas Zennström and Janus Friis launch Skype, offering voice and video calls over the internet.",
      profitModel: "Freemium model with paid calls to landlines and additional features",
      impact: "Popularized VoIP and video calling for personal and business use",
      categories: ["Communication", "Software", "Commercial", "Freemium"],
    },
    {
      id: "4chan",
      year: 2003,
      title: "4chan",
      description: "Christopher Poole launches 4chan, an anonymous imageboard website.",
      profitModel: "Advertising and user donations",
      impact: "Influenced internet culture, memes, and online anonymity",
      categories: ["Social", "Web", "Content", "Advertising", "Donations"],
    },
    {
      id: "linkedin",
      year: 2003,
      title: "LinkedIn",
      description: "Reid Hoffman launches LinkedIn, a professional networking site.",
      profitModel: "Freemium model, job postings, and premium subscriptions",
      impact: "Transformed professional networking and job hunting",
      categories: ["Commercial", "Social", "Freemium", "Service Fees"],
    },
    {
      id: "myspace",
      year: 2003,
      title: "MySpace",
      description:
        "Tom Anderson and Chris DeWolfe launch MySpace, one of the first social networking websites to gain widespread popularity.",
      profitModel: "Advertising and partnerships with music labels and artists",
      impact:
        "Popularized social networking and personal profile customization, became a significant platform for music discovery",
      categories: ["Social", "Web", "Commercial", "Music", "Advertising", "Partnerships"],
    },
    {
      id: "digg",
      year: 2004,
      title: "Digg",
      description: "Kevin Rose, Owen Byrne, Ron Gorodetzky, and Jay Adelson found Digg, a social news website.",
      profitModel: "Advertising and sponsored content",
      impact: "Pioneered social news aggregation and influenced the concept of 'viral' content",
      categories: ["Social", "Web", "Content", "Advertising", "Sponsored Content"],
    },
    {
      id: "facebook",
      year: 2004,
      title: "Facebook",
      description: "Mark Zuckerberg launches Facebook from his college dorm room.",
      profitModel: "Advertising and data monetization",
      impact: "Revolutionized social networking and online communication",
      categories: ["Commercial", "Social", "Advertising", "Data Monetization"],
    },
    {
      id: "world-of-warcraft",
      year: 2004,
      title: "World of Warcraft",
      description: "Blizzard Entertainment launches World of Warcraft, which becomes the world's most popular MMORPG.",
      profitModel: "Subscription-based gaming with later microtransactions",
      impact: "Set new standards for MMORPGs and online gaming communities",
      categories: ["Commercial", "Gaming", "Software", "Subscription", "Data Monetization"],
    },
    {
      id: "mozilla-firefox",
      year: 2004,
      title: "Mozilla Firefox",
      description: "The Mozilla Foundation releases Firefox 1.0, a free and open-source web browser.",
      profitModel: "Non-profit, funded by donations and search engine royalties",
      impact: "Promoted open-source software and web standards",
      categories: ["Nonprofit", "Software", "Open Source", "Donations"],
    },
    {
      id: "reddit",
      year: 2005,
      title: "Reddit",
      description:
        "Steve Huffman and Alexis Ohanian launch Reddit, a social news aggregation, web content rating, and discussion platform.",
      profitModel: "Advertising, premium memberships, and awards system",
      impact:
        "Became one of the most visited websites globally, known for its diverse communities and user-generated content",
      categories: ["Social", "Web", "Content", "Advertising", "Subscription"],
    },
    {
      id: "youtube",
      year: 2005,
      title: "YouTube",
      description: "Chad Hurley, Steve Chen, and Jawed Karim create YouTube, a video-sharing website.",
      profitModel: "Advertising and premium subscriptions",
      impact: "Democratized video content creation and distribution",
      categories: ["Commercial", "Video", "Advertising", "Subscription"],
    },
    {
      id: "aws",
      year: 2006,
      title: "Amazon Web Services (AWS)",
      description: "Amazon launches AWS, offering cloud computing services.",
      profitModel: "Pay-as-you-go cloud services",
      impact: "Revolutionized web hosting and enabled the growth of cloud-based startups",
      categories: ["Commercial", "Cloud", "Service Fees"],
    },
    {
      id: "iphone",
      year: 2007,
      title: "iPhone",
      description: "Apple introduces the iPhone, ushering in the smartphone era.",
      profitModel: "Hardware sales and app ecosystem",
      impact: "Transformed mobile computing and internet access",
      categories: ["Commercial", "Hardware", "Hardware Sales", "Service Fees"],
    },
    {
      id: "bandcamp",
      year: 2008,
      title: "Bandcamp",
      description: "Ethan Diamond and Shawn Grunberger launch Bandcamp, a music platform for independent artists.",
      profitModel: "Revenue share from digital and physical sales, plus optional fan subscriptions",
      impact: "Empowered independent musicians to distribute and sell their music directly to fans",
      categories: ["Music", "E-commerce", "Web", "Service Fees", "Subscription"],
    },
    {
      id: "github",
      year: 2008,
      title: "GitHub",
      description:
        "Tom Preston-Werner, Chris Wanstrath, and PJ Hyett launch GitHub, a web-based hosting service for version control using Git.",
      profitModel: "Freemium model with paid plans for private repositories and advanced features",
      impact: "Revolutionized collaborative software development and became the largest host of source code in the world",
      categories: ["Commercial", "Software", "Collaboration", "Freemium"],
    },
    {
      id: "app-store",
      year: 2008,
      title: "App Store",
      description: "Apple launches the App Store for iOS devices, creating a new ecosystem for mobile applications.",
      profitModel: "Revenue sharing with app developers",
      impact: "Revolutionized software distribution and created the mobile app economy",
      categories: ["Commercial", "Software", "Mobile", "Service Fees"],
    },
    {
      id: "whatsapp",
      year: 2009,
      title: "WhatsApp",
      description: "Jan Koum and Brian Acton found WhatsApp, a cross-platform mobile messaging app.",
      profitModel: "Initially subscription-based, later acquired by Facebook",
      impact: "Became one of the most popular messaging apps worldwide, particularly in developing countries",
      categories: ["Communication", "Mobile", "Social", "Subscription", "Acquisition"],
    },
    {
      id: "bitcoin",
      year: 2009,
      title: "Bitcoin",
      description: "Satoshi Nakamoto creates Bitcoin, the first decentralized cryptocurrency.",
      profitModel: "Decentralized digital currency",
      impact: "Sparked the cryptocurrency revolution and blockchain technology",
      categories: ["Decentralized", "Cryptocurrency"],
    },
    {
      id: "instagram",
      year: 2010,
      title: "Instagram",
      description: "Kevin Systrom and Mike Krieger launch Instagram, a photo-sharing app.",
      profitModel: "Advertising and influencer marketing",
      impact: "Changed how people share and consume visual content",
      categories: ["Commercial", "Social", "Photo", "Advertising", "Data Monetization"],
    },
    {
      id: "twitch",
      year: 2011,
      title: "Twitch",
      description: "Twitch.tv is launched as a spin-off of Justin.tv, focusing on video game live streaming.",
      profitModel: "Advertising, subscriptions, and donations",
      impact: "Popularized live streaming of video games and esports",
      categories: ["Commercial", "Gaming", "Video", "Advertising", "Subscription", "Donations"],
    },
    {
      id: "uber",
      year: 2011,
      title: "Uber",
      description: "Uber launches its ride-hailing service, disrupting the taxi industry.",
      profitModel: "Commission on rides and delivery services",
      impact: "Pioneered the gig economy and transformed urban transportation",
      categories: ["Commercial", "Transportation", "Service Fees"],
    },
    {
      id: "moocs",
      year: 2012,
      title: "Massive Open Online Courses (MOOCs)",
      description:
        "Platforms like Coursera, edX, and Udacity launch, offering free online courses from top universities to a global audience.",
      profitModel: "Freemium model, offering free courses with paid certifications and specializations",
      impact:
        "Democratized access to higher education and professional development, allowing millions to learn from top institutions regardless of location or background",
      categories: ["Education", "Digital", "Commercial", "Freemium"],
    },
    {
      id: "slack",
      year: 2013,
      title: "Slack",
      description: "Stewart Butterfield launches Slack, a team collaboration and communication platform.",
      profitModel: "Freemium model with paid plans for businesses",
      impact: "Transformed workplace communication and became essential for remote teams",
      categories: ["Communication", "Software", "Commercial", "Freemium"],
    },
    {
      id: "alexa",
      year: 2014,
      title: "Amazon Alexa",
      description: "Amazon introduces Alexa, a virtual assistant AI technology.",
      profitModel: "Hardware sales and ecosystem lock-in",
      impact: "Popularized voice-controlled smart home devices",
      categories: ["Commercial", "AI", "Hardware Sales", "Data Monetization"],
    },
    {
      id: "ethereum",
      year: 2015,
      title: "Ethereum",
      description: "Vitalik Buterin launches Ethereum, introducing smart contracts to blockchain.",
      profitModel: "Cryptocurrency and decentralized applications",
      impact: "Enabled complex decentralized applications and DeFi",
      categories: ["Decentralized", "Cryptocurrency"],
    },
    {
      id: "pokemon-go",
      year: 2016,
      title: "Pokémon Go",
      description: "Niantic releases Pokémon Go, a hugely popular augmented reality mobile game.",
      profitModel: "In-app purchases and sponsored locations",
      impact: "Mainstreamed augmented reality technology",
      categories: ["Commercial", "Gaming", "AR", "Data Monetization"],
    },
    {
      id: "tiktok",
      year: 2016,
      title: "TikTok",
      description: "ByteDance launches TikTok (known as Douyin in China), a short-form video hosting service.",
      profitModel: "Advertising and in-app purchases",
      impact: "Revolutionized short-form video content and influenced global pop culture",
      categories: ["Commercial", "Social", "Video", "Advertising", "Data Monetization"],
    },
    {
      id: "fortnite",
      year: 2017,
      title: "Fortnite",
      description:
        "Epic Games releases Fortnite, which becomes a cultural phenomenon and pioneer in cross-platform play.",
      profitModel: "Free-to-play with in-game purchases",
      impact: "Popularized the battle royale genre and revolutionized the free-to-play model",
      categories: ["Commercial", "Gaming", "Software", "Data Monetization"],
    },
    {
      id: "gdpr",
      year: 2018,
      title: "GDPR",
      description: "The General Data Protection Regulation comes into effect in the EU.",
      profitModel: "Regulatory framework",
      impact: "Set new standards for online privacy and data protection globally",
      categories: ["Regulatory", "Legal"],
    },
    {
      id: "zoom",
      year: 2019,
      title: "Zoom's Rise",
      description: "Zoom, founded by Eric Yuan in 2011, becomes a household name for video conferencing.",
      profitModel: "Freemium model with paid plans for businesses and additional features",
      impact: "Became essential for remote work and education, especially during the COVID-19 pandemic",
      categories: ["Communication", "Software", "Commercial", "Freemium"],
    },
    {
      id: "5g",
      year: 2019,
      title: "5G Networks",
      description: "The first 5G networks are deployed, promising faster mobile internet speeds.",
      profitModel: "Telecommunications services and hardware",
      impact: "Enables new technologies like autonomous vehicles and smart cities",
      categories: ["Infrastructure", "Wireless", "Hardware Sales"],
    },
    {
      id: "covid-digital",
      year: 2020,
      title: "COVID-19 Digital Transformation",
      description: "The COVID-19 pandemic accelerates digital transformation across industries.",
      profitModel: "Various, including e-commerce, remote work tools, and telemedicine",
      impact: "Rapidly shifted many aspects of daily life online",
      categories: ["Societal", "Digital", "E-commerce", "Remote Work", "Telemedicine"],
    },
    {
      id: "signal-growth",
      year: 2021,
      title: "Signal's Rapid Growth",
      description: "The Signal messaging app sees a surge in users due to privacy concerns with other platforms.",
      profitModel: "Non-profit, relies on donations and grants",
      impact: "Increased awareness and adoption of end-to-end encrypted messaging",
      categories: ["Nonprofit", "Software", "Donations"],
    },
    {
      id: "metaverse",
      year: 2021,
      title: "Metaverse Concept",
      description: "Facebook rebrands as Meta, pushing the concept of the metaverse into mainstream discussion.",
      profitModel: "Virtual goods, services, and advertising",
      impact: "Sparked investment and interest in virtual and augmented reality",
      categories: ["Commercial", "Virtual", "Data Monetization", "Advertising"],
    },
    {
      id: "mastodon-growth",
      year: 2022,
      title: "Mastodon's Growth",
      description:
        "Mastodon, a decentralized social network, sees significant growth following Elon Musk's Twitter acquisition.",
      profitModel: "Decentralized, community-funded instances",
      impact: "Increased interest in decentralized social media platforms",
      categories: ["Decentralized", "Social", "Donations"],
    },
    {
      id: "chatgpt",
      year: 2022,
      title: "ChatGPT",
      description: "OpenAI releases ChatGPT, a large language model capable of human-like text generation.",
      profitModel: "API access and premium subscriptions",
      impact: "Demonstrated the potential of AI in natural language processing and various applications",
      categories: ["Commercial", "AI", "Subscription", "Service Fees"],
    },
    {
      id: "ai-revolution",
      year: 2023,
      title: "AI Revolution",
      description: "Rapid advancements in AI lead to widespread adoption across industries.",
      profitModel: "AI-as-a-service, specialized AI applications",
      impact: "Transforming numerous fields including healthcare, finance, and creative industries",
      categories: ["Technological", "Commercial", "Research", "Service Fees"],
    },
    {
        id: "deepseek",
        year: 2023,
        title: "DeepSeek AI",
        description:
          "DeepSeek, a Chinese AI company, releases a series of large language models, including DeepSeek-7B and DeepSeek-67B, demonstrating significant advancements in AI capabilities.",
        profitModel: "AI research and development, potential commercial applications",
        impact: "Advanced the field of large language models and contributed to the ongoing AI revolution",
        categories: ["AI", "Research", "Commercial", "Technological", "Open Source"],
      },
      {
        id: "mit-license",
        year: 1988,
        title: "MIT License",
        description:
          "The Massachusetts Institute of Technology releases the MIT License, a permissive free software license.",
        profitModel: "Open-source software development and distribution",
        impact: "Promoted open-source software development and collaboration in the tech industry",
        categories: ["Open Source", "Legal", "Software"],
      },
  ]
  
  export interface CategoryGroup {
    name: string
    categories: string[]
  }
  
  export const categoryGroups: CategoryGroup[] = [
    {
        name: "Technology",
        categories: ["Infrastructure", "Hardware", "Software", "AI", "Wireless", "Cloud", "Open-source", "Decentralized", "Cryptocurrency", "Protocol"],
      },
      {
        name: "Platform",
        categories: ["Search", "E-commerce", "Social", "Video", "Communication", "Gaming", "Music"],
      },
      {
        name: "Impact",
        categories: ["Society", "Research", "Education", "Legal"],
      },
      {
      name: "Profit Model",
      categories: [
        "Advertising",
        "Subscription",
        "Freemium",
        "E-commerce",
        "Open Source",
        "Licensing",
        "Donations",
        "Government Funded",
        "Nonprofit",
        "Hardware Sales",
        "Service Fees",
        "Data Monetization",
        "Cryptocurrency",
      ],
    },
  ]
  
  export const categories = Array.from(new Set(categoryGroups.flatMap((group) => group.categories))).sort()
  
  