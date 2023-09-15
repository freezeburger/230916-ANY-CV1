import { MMessage } from "../../models/message.model";
import { MNotification } from "../../models/notification.model";
import { MProduct } from "../../models/product.model";

export interface State {
  products:MProduct[],
  messages:MMessage[],
  notification:MNotification | null
  authenticated:boolean,
  online:boolean
}
