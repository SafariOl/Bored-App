import { FC } from 'react'
import { useAppSelector } from '../hook'
import social from '../img/social.jpg'
import busywork from '../img/busywork.jpg'
import charity from '../img/charity.jpg'
import cooking from '../img/cooking.jpg'
import diy from '../img/diy.jpg'
import music from '../img/music.jpg'
import education from '../img/education.jpg'
import relaxation from '../img/relaxation.jpg'
import recreation from '../img/recreation.jpg'

export const Activity:FC = () => {
    const boreds = useAppSelector(state => state.card.card[0])
    const images = [
    {
        type: 'busywork',
        url: busywork
      },
      {
        type: 'social',
        url: social
      },
      {
        type: 'charity',
        url: charity
      },
      {
        type: 'cooking',
        url: cooking
      },
      {
        type: 'music',
        url: music
      },
      {
        type: 'education',
        url: education
      },
      {
        type: 'relaxation',
        url: relaxation
      },
      {
        type: 'recreation',
        url: recreation
      },
      {
        type: 'diy',
        url: diy
      },
    ]
    
    let imageRef = ''
    
    if(boreds !== undefined){
      for(let i in images){
        if(images[i].type === boreds.type){
          imageRef = images[i].url
        }
      }
    }

  return (

    <div>
       {boreds ? 
        <div className='activity-block' key={boreds.key}>
            <div className="info-block">
              <h2>{boreds.activity}</h2>
              <div className='info'>
                <div className="paragraph">
                  <p><span>Type:</span></p>
                  <p>{boreds.type}</p>
                </div>
                <div className="paragraph">
                  <p><span>Participants:</span></p>
                  <p>{boreds.participants}</p>
                </div>
                <div className="paragraph">
                  <p><span>Accessibility:</span></p>
                  <p>{boreds.accessibility * 10}/10</p>
                </div>
              </div>
              
            </div>

            <div className="activitiy-image">
              <img src={imageRef} alt="" />
            </div>
        </div>

       : null}
    </div>
  )
}
