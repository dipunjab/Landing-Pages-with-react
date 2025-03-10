import m51 from "./assets/images/m51.png";
import m52 from "./assets/images/m52.png";
import m53 from "./assets/images/m53.png";

import m5_competition from "./assets/images/m5_competition.jpg";
import m5_cs from "./assets/images/m5_cs.jfif";
import m5_al from "./assets/images/m5_al.jpg";

import p1 from "./assets/images/p_!.jfif";
import p2 from "./assets/images/p_2.jfif";
import p3 from "./assets/images/p_3.jfif";

import t1 from "./assets/images/t1.jpg";
import t2 from "./assets/images/t2.jfif";
import t3 from "./assets/images/t3.jfif";



export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#service", label: "Service" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact-us", label: "Contact Us" },
];

export const cars = [
    {
        thumbnail: m51,
        carImg: m51,
    },
    {
        thumbnail: m52,
        carImg: m52,
    },
    {
        thumbnail: m53,
        carImg: m53,
    },
];

export const featuredCars = [
    {
        name: "BMW M5 Competition",
        img: m5_competition,
        description: "A high-performance sedan with 617 HP and track-ready precision.",
        power: "617 HP",
        speed: "0-60 mph in 3.1s",
    },
    {
        name: "BMW M5 CS",
        img: m5_cs,
        description: "The ultimate M5 – lightweight, exclusive, and incredibly fast.",
        power: "627 HP",
        speed: "0-60 mph in 2.9s",
    },
    {
        name: "BMW M5 E39",
        img: m5_al,
        description: "A legendary sports sedan with a naturally aspirated V8 and timeless design.",
        power: "394 HP",
        speed: "0-60 mph in 4.8s",
    }
];

export const reviews = [
    {
        name: "Jeremy Clarkson",
        profession: "Automotive Journalist & TV Host",
        img: p1,
        experience: "The E39 M5 is the greatest sports sedan ever made. A perfect blend of power, luxury, and raw driving feel.",
        model: "BMW M5 E39",
    },
    {
        name: "Chris Harris",
        profession: "Car Journalist & Racing Driver",
        img: p2,
        experience: "The F90 M5 redefines what an M car can be. AWD gives it insane grip, yet it still feels like a proper M machine.",
        model: "BMW M5 F90",
    },
    {
        name: "James May",
        profession: "TV Presenter & Author",
        img: p3,
        experience: "The E60 M5’s V10 is a masterpiece. It’s like a supercar disguised as a business sedan.",
        model: "BMW M5 E60",
    },
];

export const services = [
    { name: "Scheduled Maintenance", description: "Regular checkups to ensure peak performance.", icon: "🛠️" },
    { name: "Performance Upgrades", description: "Enhance power and handling with M Performance parts.", icon: "🚀" },
    { name: "Certified Repairs", description: "BMW-certified technicians using genuine BMW parts.", icon: "🔧" },
    { name: "Roadside Assistance", description: "24/7 emergency help, towing, and battery support.", icon: "🚗" },
];

export const testimonials = [
  {
    id: 1,
    name: "James Anderson",
    profession: "Automotive Journalist",
    review:
      "The BMW M5 delivers an unmatched driving experience. The power, luxury, and precision make it the best sports sedan ever.",
    image: t1,
  },
  {
    id: 2,
    name: "Martinez",
    profession: "Luxury Car Enthusiast",
    review:
      "Owning the BMW M5 Limited Edition has been a dream. It’s a perfect blend of speed, style, and innovation.",
    image: t2,
  },
  {
    id: 3,
    name: "Michael Lee",
    profession: "Professional Racer",
    review:
      "This car is a masterpiece! The acceleration and handling on the track feel absolutely phenomenal.",
    image: t3,
  },
];