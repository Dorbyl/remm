import champagne from "@/assets/IMG_5809.jpeg";
import nude from "@/assets/IMG_5811.jpeg";
import silver from "@/assets/silver-corset.jpg.asset.json";
import blackDramatic from "@/assets/black-dramatic.jpg.asset.json";
import blue from "@/assets/blue-sequin.jpg.asset.json";
import mermaid from "@/assets/black-mermaid.jpg.asset.json";
import clientLook from "@/assets/client-look.jpg.asset.json";
import pink from "@/assets/pink-maternity.jpg.asset.json";
import matric from "@/assets/matric.jpg.asset.json";

// Central, editable content for the whole site.
export const images = {
  champagne: champagne,
  nude: nude.
  silver: silver.url,
  blackDramatic: blackDramatic.url,
  blue: blue.url,
  mermaid: mermaid.url,
  clientLook: clientLook.url,
  pink: pink.url,
  matric: matric.url,
};

export const business = {
  name: "Remm Boutique",
  tagline: "Luxury Dress Hire",
  phoneDisplay: "069 294 3181",
  whatsappNumber: "27692943181",
  country: "South Africa",
};

export const whatsappLink = (text = "Hello Remm Boutique, I'd like to enquire about a dress.") =>
  `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const social = {
  instagram: { label: "Instagram", handle: "@remm_boutique", href: "https://instagram.com/remm_boutique" },
  tiktok: { label: "TikTok", handle: "@remm_boutique", href: "https://www.tiktok.com/@remm_boutique" },
  facebook: { label: "Facebook", handle: "shopremm", href: "https://facebook.com/shopremm" },
};

export const navigation = [
  { label: "Collections", href: "#collections" },
  { label: "Pieces", href: "#pieces" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export type Product = {
  name: string;
  price: string;
  wasPrice?: string;
  note: string;
  image: string;
  alt: string;
};

export const products: Product[] = [
  { name: "Champagne Off-Shoulder Tassel Corset Slit Dress", price: "R 1 800", note: "R300 refund · Hire or purchase", image: images.champagne, alt: "Model in a champagne off-shoulder tassel corset gown with a thigh slit" },
  { name: "Nude Diamanté Silver Tassel Corset", price: "R 2 500", note: "R500 refund · Hire or purchase", image: images.nude, alt: "Model in a nude diamanté embellished corset gown inside the boutique" },
  { name: "Silver Tube Corset Slit, Loose Hands", price: "R 3 500", note: "R500 refund · Hire or purchase", image: images.silver, alt: "Model in a silver sequinned tube corset gown with loose sleeves" },
  { name: "Black Dramatic One-Shoulder Side Slit", price: "R 2 500", note: "R500 refund · Hire or purchase", image: images.blackDramatic, alt: "Model in a black one-shoulder gown with a dramatic side slit" },
  { name: "Blue Sequin Off-Shoulder Dress", price: "R 900", note: "R200 refund · Royal blue · M–XL", image: images.blue, alt: "Model in a royal blue sequin off-shoulder mermaid dress" },
  { name: "Black One-Shoulder Mermaid Dress", price: "R 900", note: "R200 refund · Hire or purchase", image: images.mermaid, alt: "Model in a black sequinned one-shoulder mermaid dress" },
  { name: "Baby Pink Mesh Maternity Ruffle Dress", price: "R 600", wasPrice: "R 1 200", note: "One size · Baby pink", image: images.pink, alt: "Baby pink mesh maternity dress with voluminous ruffles" },
];

export const collections = [
  {
    index: "I",
    name: "Matric Farewell 2026",
    description:
      "All-in-one packages for your night: a dress, heels and a clutch bag. From R2 000, R3 000 and R3 700 — each with a refund on return.",
    image: images.matric,
    alt: "Model in a silver embellished off-shoulder mermaid gown",
    cta: "Book your moment",
  },
  {
    index: "II",
    name: "Evening & Gala",
    description: "Corsets, slits, sequins and diamanté — gowns made for the room to turn when you enter.",
    image: images.blackDramatic,
    alt: "Black one-shoulder evening gown against stone",
    cta: "Explore gowns",
  },
  {
    index: "III",
    name: "Maternity",
    description: "Soft mesh, generous ruffles and flowing trains for shoots and celebrations.",
    image: images.pink,
    alt: "Pink ruffle maternity gown",
    cta: "Explore maternity",
  },
];

export const packages = [
  { n: "1", price: "R2 000", refund: "R200 refund", items: ["High standard dress hire", "Heels", "Clutch bag"] },
  { n: "2", price: "R3 000", refund: "R300 refund", items: ["Premium dress hire", "Heels", "Clutch bag"] },
  { n: "3", price: "R3 700", refund: "R500 refund", items: ["Luxury dress hire", "Heels", "Clutch bag"] },
];

export const gallery = [
  { image: images.clientLook, alt: "Client wearing a black gown in a modern stairwell" },
  { image: images.nude, alt: "Nude diamanté corset gown in the boutique" },
  { image: images.blue, alt: "Royal blue sequin dress outdoors" },
  { image: images.mermaid, alt: "Black mermaid dress at a bar" },
  { image: images.champagne, alt: "Champagne gown with clutch" },
  { image: images.silver, alt: "Silver gown beside a pool" },
];
