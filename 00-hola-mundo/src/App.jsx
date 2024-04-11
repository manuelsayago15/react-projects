import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App () {
    const [name, setName] = useState('msayago15')

    console.log('render with name: ', name);

    const users = [
        {
          userName: 'midudev',
          name: 'Miguel Ángel Durán',
          isFollowing: true
        },
        {
          userName: 'pheralb',
          name: 'Pablo H.',
          isFollowing: false
        },
        {
          userName: 'PacoT',
          name: 'Paco test',
          isFollowing: true
        },
        {
          userName: 'TMChein',
          name: 'Tomas',
          isFollowing: false
        }
      ]

    return (
        <section className='App'>
            <TwitterFollowCard userName={name}> 
                Manuel Sayago
            </TwitterFollowCard>
            
            <TwitterFollowCard userName="test">
                Manuel Sayago
            </TwitterFollowCard>
            {
                //<TwitterFollowCard isFollowing userName="msayago15" name="Manuel Sayago" />
            }

            {
                users.map(({ userName, name, isFollowing }) => (
                <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                >
                    {name}
                </TwitterFollowCard>
                ))
            }

            <button onClick={() => setName('saya')}>
                Cambio nombre
            </button>
        </section>
    )
}