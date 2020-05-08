import { AvailableForOnlineSignups, availableForOnlineSignups } from './without'
import { Program } from '../../models/program'
import { isEqual } from 'lodash/fp'

export const isAvailableForOnlineSignups = (program: Program): program is AvailableForOnlineSignups =>
  availableForOnlineSignups.some(isEqual(program))