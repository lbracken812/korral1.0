import executions from './utils/executions'
import log from './utils/log'
import store from './utils/store'

export default function (ctx, inject) {
  const util = {
    ...executions(ctx),
    ...log(ctx),
    ...store(ctx)
  }

  inject('util', util)
}
