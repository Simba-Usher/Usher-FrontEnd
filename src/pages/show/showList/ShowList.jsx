import React from 'react'
import * as S from "./style";
import { Nav } from '../../../components/layouts/nav/Nav';
import { SelectedList } from '../../../components/show/SelectedList';

export const ShowList=()=> {
  return (
    <>
      <Nav />
      <SelectedList />
    </>
  )
}
