<template>
    <div class="zhuanquan"></div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  .zhuanquan{
      width: 70px;
      height: 70px;
      position: absolute;
      top:0px;
      bottom:0px;
      left:0px;
      right:0px;
      margin: auto;
      background: linear-gradient(to bottom right, #FF416C, #FF4B2B);
      animation-name: animate;
      animation-iteration-count: infinite;
      animation-duration: 1s;
      border-radius: 10px;
      transform-style: preserve - 3d;
      
  }
  .zhuanquan:before{
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.8);
      position: absolute;
      left: - 20px;
      top: - 20px;
      animation: particle - animate 3s infinite;
  }
  @keyframes particle-animate{
      0%{
          transform: translateX(0px) translateY(0px);
      }
      100%{
          transform: translateX(50px) translateY(50px);
      }
  }
  @keyframes animate{
      0%{
          transform: rotateX(0deg);
      }
      25%{
          transform: rotateX(180deg);
      }
      50%{
          transform: rotateY(180deg);
      }
      75%{
          transform: rotateX(360deg);
      }
      100%{
          transform: rotateY(360deg);
      }
  
  }
  
  </style>