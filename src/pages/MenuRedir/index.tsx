import React, {useLayoutEffect} from 'react'

export const Menu = () => {
  useLayoutEffect(()=>{
    redirectMainPage();
  }, [])

  const redirectMainPage = ()=>{
    window.location.assign('/cardapio')
  }

  return (
    <div>Menu</div>
  )
}
