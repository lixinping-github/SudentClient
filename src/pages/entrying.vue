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
    background-color:black;
    animation-name: animate;
    animation-iteration-count: infinite;
    animation-duration: 1s;
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