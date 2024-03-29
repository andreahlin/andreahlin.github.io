import React, {useEffect} from 'react'
import './Global.css'
import './SingleAnimationPage.css'
import { useParams } from 'react-router-dom'
import { FLYING_HOME_URL, GOODBYE_URL, SHADOWS_URL, PROPOGATE_URL } from '../MediaUtil'

export default function SingleAnimationPage() {
    const id = useParams().id;
    var video;
    var title = ''

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    switch (id) {
        case 'shadows':
            video = <video controls className='video'> <source src={SHADOWS_URL} type='video/mp4'></source> </video>
            title = 'shadows catching up to each other';
            break;
        case 'goodbye':
            video = <video controls className='video'> <source src={GOODBYE_URL} type='video/mp4'></source> </video>
            title = 'good bye';
            break;
        case 'propogate':
            video = <video controls className='video'> <source src={PROPOGATE_URL} type='video/mp4'></source> </video>
            title = 'propagate';
            break;
        case 'flyinghome':
            video = <video controls className='video'> <source src={FLYING_HOME_URL} type='video/mp4'></source> </video>
            title = 'flying home';
            break;
        default:
            title = 'N/A'
    }

    return (
        <div className='desktop'>
            <div className='layout'>
                {video}
                <p className='video-title'> {title} </p>
            </div>
        </div>
    );
}