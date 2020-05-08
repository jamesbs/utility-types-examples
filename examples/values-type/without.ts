export enum Program {
  FreeDelivery = 'FreeDelivery',
  InternationalShipping = 'InternationalShipping',
  SameDayShipping = 'SameDayShipping',
  WhiteGlove = 'WhiteGlove',
}

export type AvailableForOnlineSignups = 
    Program.FreeDelivery 
  | Program.SameDayShipping

export const availableForOnlineSignups: Readonly<AvailableForOnlineSignups[]> = [
  Program.FreeDelivery,
  Program.SameDayShipping,
] as const


// What we want:
// - ability to define a subset of something for use in a specific part of the application
//   - in this case it's total programs available to sellers that are provided through online signup
// - have compile time guarantees that the app only allows that subset to be used in that part of the application

// What the code is doing:
// - define a type that identifies all members of the subset
// - define a value that identifies all members of a subset
// - Problems:
// - duplication of code to ensure types and values are consistent
// - multiple sources of truth, I can't derive a type based on actual values, so  I always need to use the AvailableForOnlineSignups type whenever I want to usage to values in availableForOnlineSignups