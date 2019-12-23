import { version, name, author, description } from '../package.json'
import { Plugin, plugin, event } from '@plugin'

@plugin({ version, author, description, title: name, id: author + '@' + name })
export default class MyPlugin extends Plugin {
  @event()
  loaded () {
    console.log('Hello World!')
  }
}
