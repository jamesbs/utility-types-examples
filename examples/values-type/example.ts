import { Program } from '../../models/program'
import { isAvailableForOnlineSignups } from './is-available'
import { AvailableForOnlineSignups } from './with'

console.log(isAvailableForOnlineSignups(Program.FreeDelivery)) // true
console.log(isAvailableForOnlineSignups(Program.WhiteGlove)) // false

const onlineSignupOnlyProgram = (program: AvailableForOnlineSignups) => {
  switch (program) {
    case Program.FreeDelivery:
      return 'delivering things for free'
    case Program.SameDayShipping:
      return 'delivering things in the same day'
  }
}
// don't need a default handler to avoid warning: not all code paths return a value
// can't use case with other programs


const doSomethingWithProgram = (program: Program) => 
  isAvailableForOnlineSignups(program)
    ? console.log(onlineSignupOnlyProgram(program))
    : null

doSomethingWithProgram(Program.FreeDelivery) // do stuff