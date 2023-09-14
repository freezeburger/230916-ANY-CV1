import { LongText, Percentage, Price, Quantity, Rating, ShortText, Url, WithNumericId } from "./types";

export interface MProduct extends WithNumericId{
  title: ShortText;
  description: LongText;
  price: Price;
  discountPercentage: Percentage;
  rating: Rating;
  stock: Quantity;
  brand: ShortText;
  category: ShortText;
  thumbnail: Url;
  images: Url[]
}
