<template>
  <div class="login">
    <div class="main">
      <div class="container a-container" id="a-container">
        <form class="form" id="a-form" method="" action="">
          <h2 class="form_title title">登陆</h2>
          <input
            class="form__input"
            type="text"
            placeholder="学号"
          />
          <input
            class="form__input"
            type="password"
            placeholder="密码"

          />
          <!-- <a class="form__link">Forgot your password?</a> -->
          <button
            class="form__button button submit switch__button"
          >
            登录
          </button>
        </form>
      </div>
      <div class="container b-container" id="b-container">
        <form class="form" id="b-form" method="" action="">
          <h2 class="form_title title">注册</h2>
          <p class="warning" v-if="warning1">有未填项！</p>
          <input
            class="form__input"
            type="text"
            placeholder="工号"
        
          />
          <input
            class="form__input"
            type="text"
            placeholder="用户名"
           
          />
          <input
            class="form__input"
            type="text"
            placeholder="邮箱"
         
          />
          <input
            class="form__input"
            type="password"
            placeholder="密码"
          
          />
          <input
            class="form__input"
            type="password"
            placeholder="确认密码"
      
          />
          <button
            class="form__button button submit switch__button"
          >
            注册
          </button>
        </form>
      </div>
      <div class="switch" id="switch-cnt">
        <div class="switch__circle"></div>
        <div class="switch__circle switch__circle--t"></div>
        <div class="switch__container" id="switch-c1">
          <h2 class="switch__title title">Welcome Back !</h2>
          <p class="switch__description description"></p>
          <button class="switch__button button switch-btn" @click="changereg">
            注册
          </button>
        </div>
        <div class="switch__container is-hidden" id="switch-c2">
          <h2 class="switch__title title">Hello Friend !</h2>
          <p class="switch__description description"></p>
          <button class="switch__button button switch-btn" @click="changelogin">
            登录
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, ref } from "vue";
let switchCtn:any = null;
let switchC1:any = null;
let switchC2:any = null;
let switchCircle:any = null;
let aContainer:any = null;
let bContainer:any = null;
let allButtons = null;


onMounted(() => {
  init();
});
function init() {
  switchCtn = document.querySelector("#switch-cnt");
  switchC1 = document.querySelector("#switch-c1");
  switchC2 = document.querySelector("#switch-c2");
  switchCircle = document.querySelectorAll(".switch__circle");
  aContainer = document.querySelector("#a-container");
  bContainer = document.querySelector("#b-container");
  allButtons = document.querySelectorAll(".submit");
  // 监听防止跳转
  let getButtons = (e) => e.preventDefault();
  for (var i = 0; i < allButtons.length; i++)
    allButtons[i].addEventListener("click", getButtons);
}
function changereg() {
  switchCtn.classList.add("is-gx");
  setTimeout(function () {
    switchCtn.classList.remove("is-gx");
  }, 1500);
  switchCtn.classList.toggle("is-txr");
  switchCircle[0].classList.toggle("is-txr");
  switchCircle[1].classList.toggle("is-txr");

  switchC1.classList.toggle("is-hidden");
  switchC2.classList.toggle("is-hidden");
  aContainer.classList.toggle("is-txl");
  bContainer.classList.toggle("is-txl");
  bContainer.classList.toggle("is-z200");
}
function changelogin() {
  switchCtn.classList.add("is-gx");
  setTimeout(function () {
    switchCtn.classList.remove("is-gx");
  }, 1500);
  switchCtn.classList.toggle("is-txr");
  switchCircle[0].classList.toggle("is-txr");
  switchCircle[1].classList.toggle("is-txr");

  switchC1.classList.toggle("is-hidden");
  switchC2.classList.toggle("is-hidden");
  aContainer.classList.toggle("is-txl");
  bContainer.classList.toggle("is-txl");
  bContainer.classList.toggle("is-z200");
}

</script>

<style scoped lang="scss">
$bg: #edf2f0;

$neu-1: #ecf0f3;
$neu-2: #d1d9e6;

$white: #f9f9f9;
$gray: #a0a5a8;
$black: #181818;

$purple: #4b70e2;

$transition: 1.25s;
.login{
    width: 100%;
    background-image: linear-gradient(to bottom right, #ee0707, #0000ff);
    min-height: 50rem;
}
.main {
  position: relative;
  transform: translateY(10%); /* 垂直居中 */
  width: 1000px;
  min-width: 1000px;
  min-height: 600px;
  height: 600px;
  padding: 25px;
  background-color: $neu-1;
  border-radius: 12px;
  overflow: hidden;
  @media (max-width: 1200px) {
    transform: scale(0.7);
  }
  @media (max-width: 1000px) {
    transform: scale(0.6);
  }
  @media (max-width: 800px) {
    transform: scale(0.5);
  }
  @media (max-width: 600px) {
    transform: scale(0.4);
  }
  margin: auto;
  
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  top: 0;
  width: 600px;
  height: 100%;
  padding: 25px;

  background-color: $neu-1;
  transition: $transition;
}
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  &__icon {
    object-fit: contain;
    width: 30px;
    margin: 0 5px;
    opacity: 0.5;
    transition: 0.15s;

    &:hover {
      opacity: 1;
      transition: 0.15s;
      cursor: pointer;
    }
  }
  &__input {
    width: 350px;
    height: 40px;
    margin: 4px 0;

    padding-left: 25px;
    font-size: 13px;
    letter-spacing: 0.15px;
    border: none;
    outline: none;

    font-family: "Montserrat", sans-serif;
    background-color: $neu-1;
    transition: 0.25s ease;
    border-radius: 8px;

    box-shadow: inset 2px 2px 4px $neu-2, inset -2px -2px 4px $white;

    &:focus {
      box-shadow: inset 4px 4px 4px $neu-2, inset -4px -4px 4px $white;
    }
  }
  &__span {
    margin-top: 30px;
    margin-bottom: 12px;
  }
  &__link {
    color: $black;
    font-size: 15px;
    margin-top: 25px;
    border-bottom: 1px solid $gray;
    line-height: 2;
  }
}
.title {
  font-size: 34px;
  font-weight: 700;
  line-height: 3;
  color: $black;
}
.description {
  font-size: 14px;
  letter-spacing: 0.25px;
  text-align: center;
  line-height: 1.6;
}
.button {
  width: 180px;
  height: 50px;
  border-radius: 25px;
  margin-top: 50px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1.15px;

  background-color: $purple;
  color: $white;
  box-shadow: 8px 8px 16px $neu-2, -8px -8px 16px $white;

  border: none;
  outline: none;
}
/**/

.a-container {
  z-index: 100;
  left: calc(100% - 600px);
}
.b-container {
  left: calc(100% - 600px);
  z-index: 0;
}

.switch {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 400px;

  padding: 50px;
  z-index: 200;
  transition: $transition;

  background-color: $neu-1;
  overflow: hidden;

  box-shadow: 4px 4px 10px $neu-2, -4px -4px 10px $white;

  &__circle {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: $neu-1;
    box-shadow: inset 8px 8px 12px $neu-2, inset -8px -8px 12px $white;

    bottom: -60%;
    left: -60%;
    transition: $transition;

    &--t {
      top: -30%;
      left: 60%;
      width: 300px;
      height: 300px;
    }
  }

  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    width: 400px;
    padding: 50px 55px;

    transition: $transition;
  }

  &__button {
    cursor: pointer;
    &:hover {
      box-shadow: 6px 6px 10px $neu-2, -6px -6px 10px $white;
      transform: scale(0.985);
      transition: 0.25s;
    }
    &:active,
    &:focus {
      box-shadow: 2px 2px 6px $neu-2, -2px -2px 6px $white;
      transform: scale(0.97);
      transition: 0.25s;
    }
  }
}
/**/
.is-txr {
  left: calc(100% - 400px);
  transition: $transition;
  transform-origin: left;
}
.is-txl {
  left: 0;
  transition: $transition;
  transform-origin: right;
}
.is-z200 {
  z-index: 200;
  transition: $transition;
}
.is-hidden {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: $transition;
}
.is-gx {
  animation: is-gx $transition;
}
@keyframes is-gx {
  0%,
  10%,
  100% {
    width: 400px;
  }
  30%,
  50% {
    width: 500px;
  }
}
</style>
