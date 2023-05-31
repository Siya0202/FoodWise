import Cookie from "js-cookie";
import React from 'react';
const setCookie=(cookiename,usrin)=>
{
    Cookie.set(cookiename,usrin,{
        expires:1,
        secure:true,
        sameSite:"strict",
        path:'/'
    });
};
export default setCookie;