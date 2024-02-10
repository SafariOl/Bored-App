import { FC } from 'react'
import { Form } from './Form'
import { Activity } from './Activity'
import { useAppSelector } from '../hook'

export const App:FC = () => {
  const loading = useAppSelector(state => state.card.loading)

  return (
    <div className='wrapper'>
      {loading ? 
      <div className="loading">
        <div>
          <div className="lds-hourglass"></div>
          <h3>Loading...</h3>
        </div>
      </div>
      :null 
      }
      <h1>Are you bored?</h1>
      <Form />
      <Activity />
    </div>
  )
}
