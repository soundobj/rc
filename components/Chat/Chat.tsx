import react, { useState } from 'react'

import { useMutation } from 'react-query';

const Chat = (props: Chat) => {
  const { owner } = props;

  const [test, setTest] = useState(owner);

  const mutation = useMutation(test => {
    return fetch('http://localhost:3000/api/hello', {
      method: 'PATCH',
      body: JSON.stringify({ payload: test }),  
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setTest(data.owner)
      });
  })
  return (
    <>
    <span>{test}</span>
    {/* @ts-ignore */}
    <button type="button" onClick={() => mutation.mutate('bro')}>do it</button>
    </>
  )
}

type Chat = {
  owner: string
};

export default Chat;