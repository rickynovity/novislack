import { useMutation, useQuery, useSubscription } from "@apollo/client";
import {
  addChannelMutation,
  addMessageMutation,
  channelAddedSubscription,
  channelsQuery,
  messageAddedSubscription,
  messagesQuery,
  setActiveChannelMutation,
} from "./queries";

export function useAddMessage() {
  const [mutate] = useMutation(addMessageMutation);

  const addMessage = async (text) => {
    const {
      data: { message },
    } = await mutate({
      variables: { text },
    });
    return message;
  };
  return { addMessage };
}

export function useMessages() {
  const { data } = useQuery(messagesQuery);
  useSubscription(messageAddedSubscription, {
    onData: ({ client, data }) => {
      const newMessage = data.data.message;
      client.cache.updateQuery({ query: messagesQuery }, ({ messages }) => {
        return { messages: [...messages, newMessage] };
      });
    },
  });
  return {
    messages: data?.messages ?? [],
  };
}

export function useChannels() {
  const { data, loading, error } = useQuery(channelsQuery);
  useSubscription(channelAddedSubscription, {
    onData: ({ client, data }) => {
      const newChannel = data.data.channel;
      client.cache.updateQuery({ query: channelsQuery }, ({ channels }) => {
        return { channels: [...channels, newChannel] };
      });
    },
  });
  return {
    channels: data?.channels ?? [],
    loading,
    error,
  };
}

export function useAddChannel() {
  const [mutate] = useMutation(addChannelMutation);
  const addChannel = async (name) => {
    await mutate({ variables: { name } });
  };
  return { addChannel };
}

export function useSetActiveChannel() {
  const [mutate] = useMutation(setActiveChannelMutation);
  const setActiveChannel = async (channelId) => {
    await mutate({ variables: { channelId } });
  };
  return { setActiveChannel };
}
