'use client';
import { Breadcrumb, Button, Card, UIColumn, UIDataGrid, UIRow, UISkeleton, useGet } from '@apus/ui';
import styles from './page.module.scss';
import { useEffect, useState } from 'react';

export default function Index() {
  const [params, setParams] = useState<any>({});
  const { loading, response, get, error } = useGet<{data: [number, any]}>(
    'api/search',
    {
      cache: false,
      eager: false
    }
  );
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
          <Breadcrumb.Item text='Pesquisa' />
          <Breadcrumb.Item text='Escola' active/>
        </Breadcrumb>
      </div>
      <div className='flex flex-row gap-x-3.5'>
        <Button text='Cozinha' click={() => filter('cozinha')} active={params['cozinha'] === 'on'} disabled={loading}/>
        <Button text='Área Verde' click={() => filter('areaVerde')} active={params['areaVerde'] === 'on'} disabled={loading}/>
        <Button text='Biblioteca' click={() => filter('biblioteca')} active={params['biblioteca'] === 'on'} disabled={loading}/>
      </div>
      <Card>
        {loading ? 
          <div className='flex flex-col gap-1'>
            <UISkeleton width='100%' height='75px'/> 
            <UISkeleton width='100%' height='75px'/> 
            <UISkeleton width='100%' height='75px'/> 
            <UISkeleton width='100%' height='75px'/> 
            <UISkeleton width='100%' height='75px'/> 
          </div>
        :<UIDataGrid
          template={{
            sm: "'name name' 'city state' 'grade grade' 'action action'",
            md: "'name name' 'city state' 'grade grade' 'action action'",
            lg: "'name city state grade action'",
            xl: "'name city state grade action'",
          }}
        >
          <UIRow className={styles['schools-list__header']}>
            <UIColumn name="name">Nome da Escola</UIColumn>
            <UIColumn name="city">Cidade</UIColumn>
            <UIColumn name="state">Estado</UIColumn>
            <UIColumn name="grade">Notas Ideb (IdebAi - IdebAF)</UIColumn>
            <UIColumn name="action">Ações</UIColumn>
          </UIRow>
          {(schools || []).map((s: any) => 
            <UIRow key={s.cod}>
              <UIColumn name="name">{s.nome}</UIColumn>
              <UIColumn name="city">{s.cidade}</UIColumn>
              <UIColumn name="state">{s.estado}</UIColumn>
              <UIColumn name="grade">{s.idebAI.toFixed(1)} - {s.idebAF.toFixed(1)}</UIColumn>
              <UIColumn name="action"><Button text='Consultar'/></UIColumn>
            </UIRow>
          )}
          {!schools ? <UIRow>Nenhum registro encontrado!</UIRow> : null} 
        </UIDataGrid>}
      </Card>
   </div>
  );
}
