"use client"
import React,{useEffect,useState} from 'react';
import {useTransition, useSpring, animated } from '@react-spring/web'

interface Props{
    direction: "left"|"right";
    children:JSX.Element,
}

export default function RevealAnimation({direction,children}:Props) {
const [props,setProps]=useState();
const options = useSpring({
    from: { transform: direction==="left"?'translateX(100px)':'translateX(-100px)' },
    to: { transform: 'translateX(0px)' },
    config:{duration: 300},
  });
  useEffect(() => {
   setProps(options);
  }, []);
//   const transitions = useTransition([],{
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 1 },
//   })
  return <animated.div style={props}>{children}</animated.div>
}