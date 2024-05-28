import { connection } from "./connection.js";
import { generateId } from "./ids.js";

const getChannelTable = () => connection.table("channel");

export async function getChannels() {
  return await getChannelTable().select().orderBy("name", "asc");
}

export async function createChannel(user, name) {
  const channel = {
    id: generateId(),
    user,
    name,
    createdAt: new Date().toISOString(),
  };
  await getChannelTable().insert(channel);
  return channel;
}

export async function setActiveChannel(user, channelId) {
  const channel = await getChannelTable().where({ id: channelId }).first();
  if (!channel) throw new Error("Channel not found");
  await getChannelTable().where({ id: channelId }).update({ active: true });
  return channel;
}

export async function deleteChannel(user, channelId) {
  const channel = await getChannelTable().where({ id: channelId }).first();
  if (!channel) throw new Error("Channel not found");
  if (channel.user !== user)
    throw new Error(
      "Unauthorized: You do not have permission to delete this channel"
    );
  await getChannelTable().where({ id: channelId }).delete();
  return channel;
}
