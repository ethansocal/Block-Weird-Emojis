/**
 * @name BlockWeirdEmoijs
 * @author Ethan Henry
 * @description Removes unwanted emojis
 * @version 0.0.1
 * @authorId 710657087100944476
 * @source https://github.com/ethansocal/Block-Weird-Emojis/blob/main/BlockWeirdEmojis.plugin.js
 */

module.exports = class BlockWeirdEmoijs {
    load() {} // Optional function. Called when the plugin is loaded in to memory

    start() {} // Required function. Called when the plugin is activated (including after reloads)
    stop() {} // Required function. Called when the plugin is deactivated

    observer(changes) {} // Optional function. Observer for the `document`. Better documentation than I can provide is found here: <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>
}
