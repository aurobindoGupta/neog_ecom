import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Book",
    subCategory: "non-fiction",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "Book",
    subCategory: "horror",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "Book",
    subCategory: "fiction",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
  {
    _id: uuid(),
    categoryName: "smartphones",
  },
  {
    _id: uuid(),
    categoryName: "laptops",
  },
  {
    _id: uuid(),
    categoryName: "fragrances",
  },
  {
    _id: uuid(),
    categoryName: "skincare",
  },
  {
    _id: uuid(),
    categoryName: "groceries",
  },
  {
    _id: uuid(),
    categoryName: "home-decoration",
  },
  {
    _id: uuid(),
    categoryName: "furniture",
  },
  {
    _id: uuid(),
    categoryName: "tops",
  },
  {
    _id: uuid(),
    categoryName: "womens-dresses",
  },
  {
    _id: uuid(),
    categoryName: "womens-shoes",
  },
  {
    _id: uuid(),
    categoryName: "mens-shirts",
  },
  {
    _id: uuid(),
    categoryName: "mens-shoes",
  },
  {
    _id: uuid(),
    categoryName: "mens-watches",
  },
  {
    _id: uuid(),
    categoryName: "womens-watches",
  },
  { _id: uuid(), categoryName: "womens-bags" },
  { _id: uuid(), categoryName: "womens-jewellery" },
  { _id: uuid(), categoryName: "sunglasses" },
  { _id: uuid(), categoryName: "automotive" },
  { _id: uuid(), categoryName: "motorcycle" },
  { _id: uuid(), categoryName: "lighting" },
];
