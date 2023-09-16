import CatalogList from '@/entities/catalogList/catalogList';
import { Layout } from '@/shared/layout/layout';
import Preloader from '@/shared/preloader/preloader';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { productsFetch } from '@/store/reducers/productsSlice';
import { LoadingStatus } from '@/store/store.options';
import React, { useEffect } from 'react';

const Catalog: React.FC = () => {
  const { data, status } = useAppSelector(
    (state) => state.products
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(productsFetch());
  }, []);

  if (status === LoadingStatus.PENDING) return <Preloader />

  if (status === LoadingStatus.FAILED) return <div>error on server</div>

  return (
    <Layout>
      <CatalogList data={data.items} />
    </Layout>
  )
}

export default Catalog

