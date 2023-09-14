import { MMessage } from "../../models/message.model";
import { MProduct } from "../../models/product.model";

export interface State {
  products:MProduct[],
  messages:MMessage[],
  authenticated:boolean
}
