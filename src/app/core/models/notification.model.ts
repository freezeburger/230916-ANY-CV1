import { ShortText, TimeStamp, WithNumericId } from "./types";

export interface MNotification extends WithNumericId{
  text:ShortText,
  time:TimeStamp
}
