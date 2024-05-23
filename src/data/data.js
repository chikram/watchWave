// watch categories
const watchCategories = [
  {
    id: 1,
    brand: "Rolex",
    logo: "https://th.bing.com/th?id=OIP.iL4SSmHns8CscSncC5pepAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    id: 2,
    brand: "Omega",
    logo: "https://th.bing.com/th?id=OIP.MASzB2Wgct-zR2W9Y7p2MgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    id: 3,
    brand: "Tag Heuer",
    logo: "https://th.bing.com/th?id=OIP.HTpWe-_vCmmuWzjmKVNqPAHaGa&w=268&h=232&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    id: 4,
    brand: "Seiko",
    logo: "https://th.bing.com/th?id=OIP.7bqf6YN5UPA-hQtMJmCQWwHaCF&w=350&h=98&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    id: 5,
    brand: "Casio",
    logo: "https://th.bing.com/th?id=OIP.ka5H6LEiQEqtdnxiy58QQwHaBe&w=350&h=70&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    id: 6,
    brand: "Breitling",
    logo: "https://th.bing.com/th?id=OIP.N5qTprIb0yaiAR8CBwbTuAHaC4&w=350&h=136&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    id: 7,
    brand: "Patek Philippe",
    logo: "https://th.bing.com/th?id=OIP.2gUMUoEkslaYtHg-yGwFbQHaFt&w=284&h=219&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    id: 8,
    brand: "Audemars Piguet",
    logo: "https://th.bing.com/th?id=OIP.k-SZNV506PpYzGRDnGkFLwHaFP&w=297&h=210&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
];

//detail of watches
const watches = [
  {
    id: 1,
    brand: "Rolex",
    model: "Submariner",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Rolex-Submariner.jpg/175px-Rolex-Submariner.jpg",
    description:
      "The Rolex Submariner is a classic diving watch with a sleek, timeless design.",
    features: {
      feature1: "Water-resistant up to 300 meters",
      feature2: "Ceramic bezel",
      feature3: "Self-winding automatic movement",
    },
    price: 7500,
  },
  {
    id: 2,
    brand: "Omega",
    model: "Seamaster",
    image:
      "https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-chronometer-41-5-mm-23110422101002-b99c6d.png?w=230",
    description:
      "Omega Seamaster combines elegance and functionality, making it perfect for any occasion.",
    features: {
      feature1: "Co-Axial escapement",
      feature2: "Water-resistant up to 600 meters",
      feature3: "Helium escape valve",
    },
    price: 5200,
  },
  {
    id: 3,
    brand: "Tag Heuer",
    model: "Carrera",
    image:
      "https://www.bing.com/th?id=OIP.lZ_09aSL-Xw4zMFrOSz_EgHaLW&w=150&h=231&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    description:
      "Tag Heuer Carrera is known for its precision and sporty aesthetic, ideal for racing enthusiasts.",
    features: {
      feature1: "Chronograph function",
      feature2: "Tachymeter scale",
      feature3: "Automatic movement",
    },
    price: 3500,
  },
  {
    id: 4,
    brand: "Seiko",
    model: "Prospex",
    image:
      "https://th.bing.com/th?id=OIP.jxxreo4QgEfDy4hCBks1xwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    description:
      "Seiko Prospex is a robust and reliable dive watch, suitable for professionals and enthusiasts alike.",
    features: {
      feature1: "Solar powered",
      feature2: "Water-resistant up to 200 meters",
      feature3: "Lumibrite hands and markers",
    },
    price: 450,
  },
  {
    id: 5,
    brand: "Casio",
    model: "G-Shock",
    image:
      "https://gshock.casio.com/content/dam/casio/product-info/locales/intl/en/timepiece/product/watch/G/GM/GMA/gma-s110vw-4a/assets/GMA-S110VW-4A.png.transform/product-panel/image.png",
    description:
      "Casio G-Shock is renowned for its durability and toughness, designed to withstand harsh conditions.",
    features: {
      feature1: "Shock resistant",
      feature2: "200 meters water-resistant",
      feature3: "World time function",
    },
    price: 100,
  },
  {
    id: 6,
    brand: "Breitling",
    model: "Navitimer",
    image:
      "https://www.breitling.com/media/image/4/cfg_site_hd/asset-version-75d2fc3c64/a17329171c1a1-navitimer-automatic-41-soldier.webp",
    description:
      "Breitling Navitimer is a sophisticated pilot's watch with advanced chronograph features.",
    features: {
      feature1: "Slide rule bezel",
      feature2: "Chronograph function",
      feature3: "Automatic movement",
    },
    price: 6500,
  },
  {
    id: 7,
    brand: "Patek Philippe",
    model: "Nautilus",
    image:
      "https://static.patek.com/images/articles/face_white/220/7118_1200A_011_1.jpg",
    description:
      "Patek Philippe Nautilus is an iconic luxury watch with a distinctive porthole design.",
    features: {
      feature1: "Stainless steel case",
      feature2: "Water-resistant up to 120 meters",
      feature3: "Self-winding mechanical movement",
    },
    price: 30000,
  },
  {
    id: 8,
    brand: "Audemars Piguet",
    model: "Royal Oak",
    image:
      "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009891.00/importer/standup.png.transform.approductmain.png",
    description:
      "Audemars Piguet Royal Oak is a luxury sports watch with an octagonal bezel and integrated bracelet.",
    features: {
      feature1: "Stainless steel case and bracelet",
      feature2: "Automatic movement",
      feature3: "Water-resistant up to 50 meters",
    },
    price: 25000,
  },
];

export default watches;
