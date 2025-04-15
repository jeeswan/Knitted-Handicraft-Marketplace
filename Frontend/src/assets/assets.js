import SunLogo from './SunLogo.png'
import CatEarsBeanieBlack from './CatEarsBeanie-Black.jpg'
import CheckerHoodei from './CheckerHoodie.jpg'
import CheckerOnePeaceDress from './Checker One-Peace Dress.jpg'
import CropSweater from './Crop Sweater.jpg'
import Gloves1 from './Gloves1.jpg'
import Gloves2 from './Gloves2.jpg'
import Gloves3 from './Gloves3.jpg'
import Handwarmer1 from './Handwarmer1.jpg'
import Handwarmer2 from './Handwarmer2.jpg'
import Headband_ScarfGreen from './Headband-Headscarf-Green.jpg'
import Headband_Scarf from './Headband-Headscarf.jpg'
import LegWarmerG from './Leg Warmer-G.jpg'
import LegWarmerGrey from './Leg Warmer-Grey.jpg'
import LongMeshSkirt from './Long Mesh Skirt.jpg'
import MensCardigen from './Mens Cardigen.jpg'
import MensChunkeyCardigen from './Mens Chunkey Cardigen.jpg'
import MeshSweaterGreen from './Mesh Sweater-Green.jpg'
import MeshCropBlack from './Mesh Crop Top-B.jpg'
import MeshCropWhite from './Mesh Crop Top-W.jpg'
import MeshSweater from './Mesh Sweater.jpg'
import Mitten1 from './Mitten1.jpg'
import Mitten2 from './Mitten2.jpg'
import Mitten3 from './Mitten3.jpg'
import SockG from './Sock-G.jpg'
import SockP from './Sock-P.jpg'
import SockW from './Sock-W.jpg'
import Vest from './Vest.jpg'
import WomensGardigen from './Womens Cardigen.jpg'
import HeroImg from './hero_img.jpg'
import HeroImg1 from './hero_img_1.jpg'
import HeroImg2 from './hero_img_2.jpg'
import StripeLogo from './Stripe_logo.png'
import AboutUs from './about_us.jpg'
import Contact from './contact_img.jpg'


const assets = {
  SunLogo,
  CatEarsBeanieBlack,
  CheckerHoodei,
  CheckerOnePeaceDress,
  CropSweater,
  Gloves1,
  Gloves2,
  Gloves3,
  Handwarmer1,
  Handwarmer2,
  Headband_ScarfGreen,
  Headband_Scarf,
  LegWarmerG,
  LegWarmerGrey,
  LongMeshSkirt,
  MensCardigen,
  MensChunkeyCardigen,
  MeshSweaterGreen,
  MeshSweater,
  MeshCropBlack,
  MeshCropWhite,
  Mitten1,
  Mitten2,
  Mitten3,
  SockG,
  SockP,
  SockW,
  Vest,
  WomensGardigen,
  HeroImg,
  HeroImg1,
  HeroImg2,
  StripeLogo,
  AboutUs,
  Contact,
};

export default assets;

export const products = [
  {
    _id: "aaaaa",
    name: "Women Mesh Green Sweater",
    description: "A lightweight, knitted pullover shirt, ideal for layering or wearing on its own.",
    price: 500,
    image: [MeshSweaterGreen],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    bestseller: true
  },
  {
    _id: "bbbbb",
    name: "Cat Ears Beanie - Black",
    description: "A stylish and cozy beanie featuring adorable cat ears, perfect for winter.",
    price: 300,
    image: [CatEarsBeanieBlack],
    category: "Accessories",
    subCategory: "Headwear",
    sizes: ["One Size"],
    date: 1717634345448,
    bestseller: false
  },
  {
    _id: "ccccc",
    name: "Checker Hoodie",
    description: "A casual and comfortable hoodie with a modern checker pattern.",
    price: 700,
    image: [CheckerHoodei],
    category: "Unisex",
    subCategory: "Outerwear",
    sizes: ["M", "L", "XL"],
    date: 1715634345448,
    bestseller: true
  },
  {
    _id: "ddddd",
    name: "Checker One-Piece Dress",
    description: "A chic one-piece dress with a checker design, perfect for all occasions.",
    price: 1200,
    image: [CheckerOnePeaceDress],
    category: "Women",
    subCategory: "Dresses",
    sizes: ["S", "M"],
    date: 1714634345448,
    bestseller: false
  },
  {
    _id: "eeeee",
    name: "Mesh Crop Top - Black",
    description: "A bold and trendy mesh crop top in black, perfect for layering or wearing alone.",
    price: 450,
    image: [MeshCropBlack],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M"],
    date: 1713634345448,
    bestseller: true
  },
  {
    _id: "fffff",
    name: "Gloves - Style 1",
    description: "Elegant gloves designed to keep your hands warm and stylish.",
    price: 250,
    image: [Gloves1],
    category: "Accessories",
    subCategory: "Winterwear",
    sizes: ["One Size"],
    date: 1712634345448,
    bestseller: false
  },
  {
    _id: "ggggg",
    name: "Long Mesh Skirt",
    description: "A fashionable long skirt made of mesh fabric, perfect for special occasions.",
    price: 900,
    image: [LongMeshSkirt],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L"],
    date: 1711634345448,
    bestseller: true
  },
  {
    _id: "hhhhh",
    name: "Men's Chunky Cardigan",
    description: "A cozy and stylish chunky cardigan for men, perfect for colder days.",
    price: 1300,
    image: [MensChunkeyCardigen],
    category: "Men",
    subCategory: "Outerwear",
    sizes: ["M", "L", "XL"],
    date: 1710634345448,
    bestseller: false
  },
  {
    _id: "iiiii",
    name: "Women's Cardigan",
    description: "A classic and versatile cardigan for women, designed for both comfort and style.",
    price: 800,
    image: [WomensGardigen],
    category: "Women",
    subCategory: "Outerwear",
    sizes: ["S", "M", "L"],
    date: 1709634345448,
    bestseller: true
  },
  {
    _id: "jjjjj",
    name: "Leg Warmer - Grey",
    description: "Comfortable and stylish leg warmers in grey, ideal for winter.",
    price: 350,
    image: [LegWarmerGrey],
    category: "Accessories",
    subCategory: "Winterwear",
    sizes: ["One Size"],
    date: 1708634345448,
    bestseller: false
  }
];


