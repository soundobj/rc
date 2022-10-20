import react from 'react'

const Chat = (props: Chat) => {
  const { name } = props;
  return (
    <span>{name}</span>
  )
}

type Chat = {
  name: string
};

export default Chat;