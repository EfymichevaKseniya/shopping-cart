import React from 'react';
import './catalogList.css'
import { CatalogListP } from './catalogList.options';
import CatalogCard from '../catalogCard/catalogCard';

const CatalogList: React.FC<CatalogListP> = ({ data }) => {
  return (
    <div className='catalog__list-wrapper'>
      {data && data.map(CatalogCard)}
    </div>
  )
}

export default CatalogList
