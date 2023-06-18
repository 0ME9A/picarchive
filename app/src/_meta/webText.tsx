import { social_routes_face, web_source_routes_face } from "../_types/webTextFace";
import { FaGithub, FaLinkedin, FaTwitter, FaUnsplash } from "react-icons/fa";
import { randomSelection } from "../_functions";
import { TbWorldWww } from "react-icons/tb";


export const picarchiveDescriptions: string[] = [
  "Immerse yourself in a vast collection of original, high-quality photographs sourced from talented photographers around the globe.",
  "Dive into a treasure trove of genuine, breathtaking photos captured by skilled photographers worldwide, igniting your imagination.",
  "Embark on a visual journey with an expansive selection of authentic, top-tier photographs created by talented photographers across the globe.",
  "Immerse yourself in a diverse collection of genuine, high-resolution photos, handcrafted by talented photographers worldwide.",
  "Tap into a vast reservoir of original, high-quality photos sourced from skilled photographers globally, fueling your creative endeavors.",
  "Delve into a curated assortment of genuine, awe-inspiring photos, capturing the essence of talented photographers worldwide.",
  "Discover a rich assortment of authentic, top-tier photographs sourced from skilled photographers globally, empowering your creative pursuits.",
  "Immerse yourself in a captivating collection of original, high-resolution photos, showcasing the artistry of talented photographers worldwide.",
  "Uncover a treasure trove of genuine, high-quality photographs created by skilled photographers from every corner of the globe.",
  "Immerse yourself in an extensive array of authentic, captivating photos captured by talented photographers worldwide, inspiring your artistic vision."
];

export const photos_routes: string[] = [
  "collections",
  "topics",
]

export const web_routes: string[] = [
  "about",
]

export const web_source_routes: web_source_routes_face[] = [
  { route: { title: "about", url: "https://unsplash.com/about" } },
  { route: { title: "blog", url: "https://unsplash.com/blog/" } },
  { route: { title: "community", url: "https://unsplash.com/community/" } },
  { route: { title: "Join the team", url: "https://unsplash.com/hiring" } },
  { route: { title: "Developers/API", url: "https://unsplash.com/developers?utm_source=unsplash&utm_medium=referral" } },
  { route: { title: "press", url: "https://unsplash.com/press" } },
  { route: { title: "Help Center", url: "https://help.unsplash.com/en?utm_source=unsplash&utm_medium=referral" } },
]

export const popular_routes: string[] = [
  "wallpapers",
  "free Images",
  "free stock photos",
  "happy birthday images",
  "cool photos",
  "nature pictures",
  "black background",
  "white background",
  "textures",
  "desktop backgrounds",
]

export const wallpaper_routes: string[] = [
  "hd wallpapers",
  "4k wallpapers",
  "iPhone wallpapers",
  "cool wallpapers",
  "cute wallpapers",
  "live wallpapers",
  "pc wallpapers",
  "black wallpapers",
  "iPad wallpapers",
  "desktop wallpapers",
]

export const social_routes: social_routes_face[] = [
  { route: { title: "github", url: "https:/github.com/0me9a", icon: <FaGithub /> } },
  { route: { title: "twitter", url: "https://twitter.com/omega86735940", icon: <FaTwitter /> } },
  { route: { title: "linked in", url: "https://www.linkedin.com/in/baliram-singh-0a9a0a214/", icon: <FaLinkedin /> } },
  { route: { title: "Website", url: "https://ome9a.com", icon: <TbWorldWww /> } },
  { route: { title: "unsplash", url: "https://unsplash.com", icon: <FaUnsplash /> } },
]

const desc = randomSelection(picarchiveDescriptions);

export const metadataObj = {
  home: {
    title: "Picarchive | Discover a World of Captivating Photography",
    desc
  },
  photos: {
    title: "Photos | Explore Stunning Photographs on PicArchive: Unleash Your Visual Imagination",
    desc: `Experience the magic of photography on PicArchive's Photo page. 
    From striking compositions to compelling narratives, each image tells a unique story. 
    Discover the power of visual communication and embark on a visual journey that will leave a lasting impression.`,
  },
  about: {
    title: "About | Explore Stunning Photographs on PicArchive: Unleash Your Visual Imagination",
    desc: `About Us: Discover the story behind PicArchive. 
    Learn how our passion for photography and commitment to showcasing exceptional visuals led to the creation of this platform.
    Join us on our mission to celebrate the beauty of images and support talented photographers worldwide.`,
  },
  collections: {
    title: "Collections | Explore Curated Collections on PicArchive",
    desc: `Unlock a world of inspiration with our handpicked collections on PicArchive. 
    From abstract art to documentary photography, our collections showcase the best of visual storytelling, ready to ignite your imagination.`,
  },
  topics: {
    title: "Topics | Discover Engaging Topics on PicArchive",
    desc: `Delve into a curated selection of captivating collections on PicArchive. 
    Uncover hidden gems and explore the rich diversity of photography styles and themes, carefully curated to spark your creativity.`,
  },
  search: {
    title: "Search | Search million of high qualit photos on picarchive.",
    desc: `Search for photos in the PicArchive collection. Explore a wide range of high-quality images on various topics and categories.`,
  },
}

interface openGraphFace {
  title?: string,
  description?: string,
  url?: string,
  image?: string,
}

export const keywords = (keywords: string[]) => {
  const keywordsMeta = ['PicArchive', 'photos', 'gallery', ...keywords]
  return keywordsMeta;
}

export const openGraph = ({ title, description, url, image }: openGraphFace) => {
  const openGraphMeta = {
    title: title || 'PicArchive',
    description: description || 'Explore and discover stunning photography',
    url: url || 'https://www.picarchive.vercel.app',
    siteName: 'PicArchive',
    images: [
      {
        url: image || '/img/socialMedia/twitter.png',
        width: 1200,
        height: 630,
      },
      {
        url: image || '/img/socialMedia/twitter.png',
        width: 800,
        height: 800,
        alt: 'PicArchive Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
  return openGraphMeta
}

export const twitter = (title?: string, description?: string, creatorId?: string, img?: string) => {
  const twitterCard = {
    card: 'summary_large_image',
    title: title || 'PicArchive',
    description: description || 'Browse and discover a collection of amazing photos',
    siteId: 'omega86735940',
    creator: creatorId ? `@${creatorId}` : '@omega86735940',
    creatorId: creatorId || 'omega86735940',
    images: [img || '/img/shareMedia/twitter.png'],
  }
  return twitterCard;
}
