import React from 'react';
import { useState } from 'react';
const { Header, Footer, Content } = Layout;
import { Input, Space, Layout,Card } from 'antd';
import '../style/home.css'
const { Meta } = Card;

export default function Recipe(props) {
  const isLoggedIn = props.data.length;
  console.log(isLoggedIn);
  return (
    <>
   <Card className='dishes' hoverable style={{ width: 300}}
    href={props.data[0]["recipeUrl"]} target="_blank"
    cover={<a  href={props.data[0]["recipeUrl"]} target="_blank"><img src={props.data[0]["recipeImgUrl"]}/></a>}>
    <Meta title={props.data[0]["recipeName"]}
     description={props.data[0]["recipeSubtitle"]} />
     <h3 style={{ marginLeft:'20px'}}>No Of Ingredients Matched: {props.data.length}</h3>
     
  </Card>
  </>
  )
}
