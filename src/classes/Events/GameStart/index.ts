export default class GameStartEvent extends Event {
    constructor() {
        super("gameStarted",{ cancelable: true })
    }
}