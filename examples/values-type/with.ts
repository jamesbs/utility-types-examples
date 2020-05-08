import { ValuesType } from 'utility-types'
import { Program } from '../../models/program'

export const availableForOnlineSignups = [
  Program.FreeDelivery,
  Program.SameDayShipping,
] as const

export type AvailableForOnlineSignups = ValuesType<typeof availableForOnlineSignups>


// What we want:
// - ability to define a subset of something for use in a specific part of the application
//   - in this case it's total programs available to sellers that are provided through online signup
// - have compile time guarantees that the app only allows that subset to be used in that part of the application

// What the code is doing:
// - define a subset of all programs that are available for online signup
// - derive a type based on available programs
// - ie. follows business rules/requirements
// Benefits:
//   - no duplication, only define values in availableForOnlineSignups and AvailableForOnlineSignups type will update
//   - single source of truth, in this case AvailableForOnlineSignups is a vanity/helper type. Not required