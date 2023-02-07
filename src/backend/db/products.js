import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "5000",
    stock: 0,
    categoryName: "Book",
    subCategory: "non-fiction",
    images:
      "https://img.freepik.com/free-psd/mockup-half-open-book-standing-light-background_125540-1471.jpg?w=1060&t=st=1675757661~exp=1675758261~hmac=8cd6e61743e3b09d9dd15b23ceb72bcb171fe5955bc601fa1e8bea2ad4dcbd37",
  },
  {
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: "3000",
    stock: 0,
    categoryName: "Book",
    subCategory: "horror",
    images:
      "https://img.freepik.com/free-psd/mockup-half-open-book-standing-light-background_125540-1471.jpg?w=1060&t=st=1675757661~exp=1675758261~hmac=8cd6e61743e3b09d9dd15b23ceb72bcb171fe5955bc601fa1e8bea2ad4dcbd37",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    stock: 94,
    price: "1000",
    categoryName: "Book",
    subCategory: "fiction",
    images:
      "https://img.freepik.com/free-psd/mockup-half-open-book-standing-light-background_125540-1471.jpg?w=1060&t=st=1675757661~exp=1675758261~hmac=8cd6e61743e3b09d9dd15b23ceb72bcb171fe5955bc601fa1e8bea2ad4dcbd37",
  },

  {
    _id: uuid(),
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: "549",

    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/1/1.jpg",
  },
  {
    _id: uuid(),
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: "899",

    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/2/1.jpg",
  },
  {
    _id: uuid(),
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: "1249",

    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/3/1.jpg",
  },
  {
    _id: uuid(),
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: "280",

    stock: 123,
    brand: "OPPO",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/4/1.jpg",
  },
  {
    _id: uuid(),
    title: "Huawei P30",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: "499",

    stock: 32,
    brand: "Huawei",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/5/1.jpg",
  },
  {
    _id: uuid(),
    title: "MacBook Pro",
    description:
      "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: "1749",

    stock: 83,
    brand: "Apple",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
    images: "https://i.dummyjson.com/data/products/6/1.png",
  },
  {
    _id: uuid(),
    title: "Samsung Galaxy Book",
    description:
      "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    price: "1499",

    stock: 50,
    brand: "Samsung",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/7/1.jpg",
  },
  {
    _id: uuid(),
    title: "Microsoft Surface Laptop 4",
    description:
      "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: "1499",

    stock: 68,
    brand: "Microsoft Surface",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/8/1.jpg",
  },
  {
    _id: uuid(),
    title: "Infinix INBOOK",
    description:
      "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: "1099",

    stock: 96,
    brand: "Infinix",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/9/1.jpg",
  },
  {
    _id: uuid(),
    title: "HP Pavilion 15-DK1056WM",
    description:
      "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: "1099",

    stock: 89,
    brand: "HP Pavilion",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
    images: "https://i.dummyjson.com/data/products/10/1.jpg",
  },
  {
    _id: uuid(),
    title: "perfume Oil",
    description:
      "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
    price: "13",

    stock: 65,
    brand: "Impression of Acqua Di Gio",
    category: "fragrances",
    thumbnail: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/11/1.jpg",
  },
  {
    _id: uuid(),
    title: "Brown Perfume",
    description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
    price: "40",

    stock: 52,
    brand: "Royal_Mirage",
    category: "fragrances",
    thumbnail: "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/12/1.jpg",
  },
  {
    _id: uuid(),
    title: "Fog Scent Xpressio Perfume",
    description:
      "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
    price: "13",

    stock: 61,
    brand: "Fog Scent Xpressio",
    category: "fragrances",
    thumbnail: "https://i.dummyjson.com/data/products/13/thumbnail.webp",
    images: "https://i.dummyjson.com/data/products/13/1.jpg",
  },
  {
    _id: uuid(),
    title: "Non-Alcoholic Concentrated Perfume Oil",
    description:
      "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
    price: "120",

    stock: 114,
    brand: "Al Munakh",
    category: "fragrances",
    thumbnail: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/14/1.jpg",
  },
  {
    _id: uuid(),
    title: "Eau De Perfume Spray",
    description:
      "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
    price: "30",

    stock: 105,
    brand: "Lord - Al-Rehab",
    category: "fragrances",
    thumbnail: "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/15/1.jpg",
  },
  {
    _id: uuid(),
    title: "Hyaluronic Acid Serum",
    description:
      "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
    price: "19",

    stock: 110,
    brand: "L'Oreal Paris",
    category: "skincare",
    thumbnail: "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/16/1.png",
  },
  {
    _id: uuid(),
    title: "Tree Oil 30ml",
    description:
      "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
    price: "12",

    stock: 78,
    brand: "Hemani Tea",
    category: "skincare",
    thumbnail: "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/17/1.jpg",
  },
  {
    _id: uuid(),
    title: "Oil Free Moisturizer 100ml",
    description:
      "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
    price: "40",

    stock: 88,
    brand: "Dermive",
    category: "skincare",
    thumbnail: "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/18/1.jpg",
  },
  {
    _id: uuid(),
    title: "Skin Beauty Serum.",
    description:
      "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
    price: "46",

    stock: 54,
    brand: "ROREC White Rice",
    category: "skincare",
    thumbnail: "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/19/1.jpg",
  },
  {
    _id: uuid(),
    title: "Freckle Treatment Cream- 15gm",
    description:
      "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
    price: "70",

    stock: 140,
    brand: "Fair & Clear",
    category: "skincare",
    thumbnail: "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/20/1.jpg",
  },
  {
    _id: uuid(),
    title: "- Daal Masoor 500 grams",
    description: "Fine quality Branded Product Keep in a cool and dry place",
    price: "20",

    stock: 133,
    brand: "Saaf & Khaas",
    category: "groceries",
    thumbnail: "https://i.dummyjson.com/data/products/21/thumbnail.png",
    images: "https://i.dummyjson.com/data/products/21/1.png",
  },
  {
    _id: uuid(),
    title: "Elbow Macaroni - 400 gm",
    description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
    price: "14",

    stock: 146,
    brand: "Bake Parlor Big",
    category: "groceries",
    thumbnail: "https://i.dummyjson.com/data/products/22/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/22/1.jpg",
  },
  {
    _id: uuid(),
    title: "Orange Essence Food Flavou",
    description:
      "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
    price: "14",

    stock: 26,
    brand: "Baking Food Items",
    category: "groceries",
    thumbnail: "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/23/1.jpg",
  },
  {
    _id: uuid(),
    title: "cereals muesli fruit nuts",
    description:
      "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
    price: "46",

    stock: 113,
    brand: "fauji",
    category: "groceries",
    thumbnail: "https://i.dummyjson.com/data/products/24/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/24/1.jpg",
  },
  {
    _id: uuid(),
    title: "Gulab Powder 50 Gram",
    description: "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
    price: "70",

    stock: 47,
    brand: "Dry Rose",
    category: "groceries",
    thumbnail: "https://i.dummyjson.com/data/products/25/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/25/1.png",
  },
  {
    _id: uuid(),
    title: "Plant Hanger For Home",
    description:
      "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
    price: "41",

    stock: 131,
    brand: "Boho Decor",
    category: "home-decoration",
    thumbnail: "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/26/1.jpg",
  },
  {
    _id: uuid(),
    title: "Flying Wooden Bird",
    description:
      "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
    price: "51",

    stock: 17,
    brand: "Flying Wooden",
    category: "home-decoration",
    thumbnail: "https://i.dummyjson.com/data/products/27/thumbnail.webp",
    images: "https://i.dummyjson.com/data/products/27/1.jpg",
  },
  {
    _id: uuid(),
    title: "3D Embellishment Art Lamp",
    description:
      "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
    price: "20",

    stock: 54,
    brand: "LED Lights",
    category: "home-decoration",
    thumbnail: "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/28/1.jpg",
  },
  {
    _id: uuid(),
    title: "Handcraft Chinese style",
    description:
      "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
    price: "60",

    stock: 7,
    brand: "luxury palace",
    category: "home-decoration",
    thumbnail: "https://i.dummyjson.com/data/products/29/thumbnail.webp",
    images: "https://i.dummyjson.com/data/products/29/1.jpg",
  },
  {
    _id: uuid(),
    title: "Key Holder",
    description:
      "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    price: "30",

    stock: 54,
    brand: "Golden",
    category: "home-decoration",
    thumbnail: "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/30/1.jpg",
  },
];
