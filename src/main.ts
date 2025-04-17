import { Message, MessageType } from "./pdk";

/**
 * Called when a message is sent to this plugin.
 *
 * @param {Message} input - The message without the slash command
 * @returns {Message} The message you will reply with as the bot
 */
// main.ts
export function handleMessageImpl(input: Message): Message {
  return {
    type: MessageType.Text,
    body: input.body?.toUpperCase()
  }
}