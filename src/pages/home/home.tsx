import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import routes from '@/navigator/routes.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {
  return (
    <div className='main__page'>
      <Link 
        to={routes.catalog}
        className='link'
      >
        <span>Перейти в каталог</span>
        <FontAwesomeIcon icon={faChevronRight} size='sm' />
      </Link>
    </div>
  )
}

export default Home
