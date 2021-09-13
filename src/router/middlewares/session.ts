import transitionPath from 'router5-transition-path'
import { State } from 'router5/dist/types/base'
import { Router } from 'router5/dist/types/router'

import routes from '../routes'

// async function _checkAuth () {
//   //
// }

export const session = (router: Router) => (toState: State, fromState: State) => {
  const { toActivate } = transitionPath(toState, fromState)
  const onActivateHandlers =
    toActivate
      .map(segment => (routes as any).find((r: State) => r.name === segment).onActivate)
      .filter(Boolean)

  return Promise
    .all(onActivateHandlers.map(callback => callback()))
    // actions before app mounting
    .then(async data => {
      // await _checkAuth()
      return data
    })
    .then(data => {
      const routeData = data.reduce((accData: any, rData: any) => Object.assign(accData, rData), {})
      return { ...toState, data: routeData }
    })
}

export default session
