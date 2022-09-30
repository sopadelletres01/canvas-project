export default class GameStartEvent extends Event {
    constructor() {
        super("gameStart",{ cancelable: true })
    }
}