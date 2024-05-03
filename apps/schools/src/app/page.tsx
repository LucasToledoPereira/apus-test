/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Breadcrumb, Button, Card, Column, DataGrid, Row, Skeleton, useGet } from '@apus/ui';
import styles from './page.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { School } from '../interfaces/school';

export default function Index() {
  const [params, setParams] = useState<any>({});
  const router = useRouter();
  
  const { loading, response, get } = useGet<{data: [number, School[]]}>(
    'api/search',
    {
      eager: false
    }
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, schools] = response?.data || [];
  const filter = (_f: 'cozinha' | 'areaVerde' | 'biblioteca') => {
    const current = params[_f];
    if(current === 'on') {
      delete params[_f];
    } else {
      params[_f] = 'on';
    }

    setParams(params);
    get(params);
  }

  return (
   <div className='flex flex-col pt-9 gap-y-7'>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item text='Pesquisa' active/>
        </Breadcrumb>
      </div>
      <div className='flex flex-col md:flex-row gap-3.5'>
        <Button text='Cozinha' click={() => filter('cozinha')} active={params['cozinha'] === 'on'} disabled={loading}/>
        <Button text='Área Verde' click={() => filter('areaVerde')} active={params['areaVerde'] === 'on'} disabled={loading}/>
        <Button text='Biblioteca' click={() => filter('biblioteca')} active={params['biblioteca'] === 'on'} disabled={loading}/>
      </div>
      <Card>
        {loading ? 
          <div className='flex flex-col gap-1'>
            <Skeleton width='100%' height='75px'/> 
            <Skeleton width='100%' height='75px'/> 
            <Skeleton width='100%' height='75px'/> 
            <Skeleton width='100%' height='75px'/> 
            <Skeleton width='100%' height='75px'/> 
          </div>
        :<DataGrid
          template={{
            sm: "'name name' 'city state' 'grade grade' 'action action'",
            md: "'name name' 'city state' 'grade grade' 'action action'",
            lg: "'name city state grade action'",
            xl: "'name city state grade action'",
          }}
        >
          <Row className={styles['schools-list__header']}>
            <Column name="name">Nome da Escola</Column>
            <Column name="city">Cidade</Column>
            <Column name="state">Estado</Column>
            <Column name="grade">Notas Ideb (IdebAi - IdebAF)</Column>
            <Column name="action">Ações</Column>
          </Row>
          {(schools || []).map((s: any) => 
            <Row className={styles['schools-list__rows']} key={s.cod}>
              <Column name="name">{s.nome}</Column>
              <Column name="city">{s.cidade}</Column>
              <Column name="state">{s.estado}</Column>
              <Column name="grade">{s.idebAI.toFixed(1)} - {s.idebAF.toFixed(1)}</Column>
              <Column name="action"><Button text='Consultar' click={() => router.push(`/detail/${s.cod}`)}/></Column>
            </Row>
          )}
          {!schools ? <Row>Nenhum registro encontrado!</Row> : null} 
        </DataGrid>}
      </Card>
   </div>
  );
}
