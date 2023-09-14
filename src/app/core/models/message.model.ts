import { LongText, ShortText, TimeStamp, WithNumericId } from "./types";

export interface MMessage extends WithNumericId{
  title:ShortText,
  content:LongText,
  time:TimeStamp
}
