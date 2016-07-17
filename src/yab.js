'use strict'

import Client from './yab/Client'
import config from './config'

const cli = new Client(config)

cli.init()
