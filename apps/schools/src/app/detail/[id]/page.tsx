/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Breadcrumb, Button, Card, Skeleton, useGet } from "@apus/ui";
import style from './detail.module.scss';
import { SchoolDetails } from "../../../interfaces/school";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const cards = [
  {
    field: 'videoCassetes',
    name: 'Video Cassetes',
    color: '#1764E3',
    background: '#D0E5F8',
    darker: '#B1D7F9'
  },
  {
    field: 'aparelhosSom',
    name: 'Aparelhos de Som',
    color: '#E35417',
    background: '#F8E3D0',
    darker: '#F9D4B2'
  },
  {
    field: 'retroprojetores',
    name: 'Retro Projetores',
    color: '#12C619',
    background: '#E0ECD1',
    darker: '#CFE4B4'
  },
  {
    field: 'copiadoras',
    name: 'Copiadoras',
    color: '#E38517',
    background: '#F8EBC5',
    darker: '#F9E6AB'
  },
  {
    field: 'datashows',
    name: 'Data Shows',
    color: '#1764E3',
    background: '#D0E5F8',
    darker: '#B1D7F9'
  },
  {
    field: 'salasExistentes',
    name: 'Salas de Aula',
    color: '#12C619',
    background: '#E0ECD1',
    darker: '#CFE4B4'
  },
  {
    field: 'computadores',
    name: 'Computadores',
    color: '#1764E3',
    background: '#D0E5F8',
    darker: '#B1D7F9'
  },
  {
    field: 'funcionarios',
    name: 'Funcionários',
    color: '#E35417',
    background: '#F8E3D0',
    darker: '#F9D4B2'
  },
  {
    field: 'televisores',
    name: 'Televisores',
    color: '#12C619',
    background: '#E0ECD1',
    darker: '#CFE4B4'
  },
  {
    field: 'impressoras',
    name: 'Impressoras',
    color: '#E38517',
    background: '#F8EBC5',
    darker: '#F9E6AB'
  }
]

const Page = ({ params: { id } }: any) => {
  const router = useRouter();
  const {loading, response, error} = useGet<{data: SchoolDetails}>(`/api/find/${id}`, {eager: true}); 
  const school = response?.data;

  useEffect(() => {
    if(error) {
      console.log(error);
      //In case of error, redirect to home page
      router.replace('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <div className='flex flex-col pt-9 gap-y-14'>
      {loading ? <>
        <Skeleton width="100%" height="75px"/>
        <Skeleton width="100%" height="150px"/>
        <Skeleton width="100%" height="250px"/>
        </> : 
        <>
          <div className="flex justify-between items-center flex-col-reverse md:flex-row gap-y-4 md:gap-y-0 ">
            <Breadcrumb>
              <Breadcrumb.Item text='Pesquisa' click={() => router.replace('/')}/>
              <Breadcrumb.Item text='Escola' active/>
            </Breadcrumb>
            <Button text="Voltar" click={() => router.back()} icon='/images/icons/back.png'/>
          </div>
          <div className="flex flex-col gap-4">
          <div className={style['detail__title']}>{school?.nome}</div>
          <div className={style['detail__city']}>Cidade: {school?.nomeMunicipio} - {school?.siglaUf}</div>
          </div>
          <div className="flex flex-row gap-x-8 gap-y-14 flex-wrap">
          {cards.map(c => <Card key={c.field} className={style['detail__card']}>
            <div className={style['detail__number_container']} style={{'--number-container': c.background} as React.CSSProperties}>
              <div className={style['detail__number_content']} style={{'--number-content': c.darker, '--number-color': c.color} as React.CSSProperties}>{(school as any)?.[c.field]}</div>
            </div>
            <div className={style['detail__card_name']}>{c.name}</div>
          </Card>)}
          </div>
        </>}
       
    </div>
  );
};

export default Page;
 