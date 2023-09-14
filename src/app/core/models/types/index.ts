/**
 * List of Generics Types
 */


/**
 * Aboslute URL containing scheme (http)
 */
export type Url = string;


/**
 * Email must be @cdc.fr
 */
export type UserEmail = string;

export type TimeStamp = number;

/**
 * Maximum 20 characters
 */
export type ShortText = string;

/**
 *  Unbounded number of charaters
 */
export type LongText = number;


export interface WithNumericId{
  id:number;
}

/**
 * Must include  two decimals (00.00)
 */
export type Price = number;

/**
 * Int in range 0-5
 */
export type Rating = number;


/**
 * Decimal in range 0-100
 */
export type Percentage = number;


/**
 * Must be a positive integer
 */
export type Quantity = number;
