import { gql } from "@apollo/client";

export const messagesQuery = gql`
  query MessagesQuery {
    messages {
      id
      user
      text
    }
  }
`;

export const addMessageMutation = gql`
  mutation AddMessageMutation($text: String!) {
    message: addMessage(text: $text) {
      id
      user
      text
    }
  }
`;

export const messageAddedSubscription = gql`
  subscription MessageAddedSubscription {
    message: messageAdded {
      id
      user
      text
    }
  }
`;

export const channelsQuery = gql`
  query ChannelsQuery {
    channels {
      id
      user
      name
    }
  }
`;

export const addChannelMutation = gql`
  mutation AddChannelMutation($name: String!) {
    channel: addChannel(name: $name) {
      id
      user
      name
    }
  }
`;

export const setActiveChannelMutation = gql`
  mutation SetActiveChannelMutation($channelId: ID!) {
    setActiveChannel(channelId: $channelId) {
      id
      user
      name
    }
  }
`;

export const channelAddedSubscription = gql`
  subscription ChannelAddedSubscription {
    channel: channelAdded {
      id
      user
      name
    }
  }
`;

export const channelActivatedSubscription = gql`
  subscription ChannelActivatedSubscription {
    channel: channelActivated {
      id
      user
      name
    }
  }
`;
