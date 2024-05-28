import { GraphQLError } from "graphql";
import { PubSub } from "graphql-subscriptions";
import { createMessage, getMessages } from "./db/messages.js";
import { createChannel, getChannels, setActiveChannel } from "./db/channels.js";

const pubSub = new PubSub();

export const resolvers = {
  Query: {
    messages: (_root, _args, { user }) => {
      if (!user) throw unauthorizedError();
      return getMessages();
    },
    channels: (_root, _args, { user }) => {
      if (!user) throw unauthorizedError();
      return getChannels();
    },
  },

  Mutation: {
    addMessage: async (_root, { text }, { user }) => {
      if (!user) throw unauthorizedError();
      const message = await createMessage(user, text);
      pubSub.publish("MESSAGE_ADDED", { messageAdded: message });
      return message;
    },
    addChannel: async (_root, { name }, { user }) => {
      if (!user) throw unauthorizedError();
      const channel = await createChannel(user, name);
      pubSub.publish("CHANNEL_ADDED", { channelAdded: channel });
      return channel;
    },
    setActiveChannel: async (_root, { channelId }, { user }) => {
      if (!user) throw unauthorizedError();
      const channel = await setActiveChannel(user, channelId);
      pubSub.publish("CHANNEL_ACTIVATED", { channelActivated: channel });
      return channel;
    },
    deleteChannel: async (_root, { id }, { user }) => {
      if (!user) throw unauthorizedError();
      console.log("IDDDDDDDDDDD : ", id);
      const channel = await deleteChannel(user, id);
      pubSub.publish("CHANNEL_DELETED", { channelDeleted: channel });
      return channel;
    },
  },

  Subscription: {
    messageAdded: {
      subscribe: (_root, _args, { user }) => {
        if (!user) throw unauthorizedError();
        return pubSub.asyncIterator("MESSAGE_ADDED");
      },
    },
    channelAdded: {
      subscribe: (_root, _args, { user }) => {
        if (!user) throw unauthorizedError();
        return pubSub.asyncIterator("CHANNEL_ADDED");
      },
    },
    channelActivated: {
      subscribe: (_root, _args, { user }) => {
        if (!user) throw unauthorizedError();
        return pubSub.asyncIterator("CHANNEL_ACTIVATED");
      },
    },
  },
};
function unauthorizedError() {
  return new GraphQLError("Not authenticated", {
    extensions: { code: "UNAUTHORIZED" },
  });
}
