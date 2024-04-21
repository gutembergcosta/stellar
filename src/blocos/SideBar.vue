<template>
  <div id="mySidebar" class="sidebar">
    <ul class="side-navbar">
      <li><a class="accordion-link" id="link-item01" @click="teste('item01')">Section 1</a></li>
      <div class="painel-navbar sub-navbar item01">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.</p>
      </div>
      <li><a class="accordion-link" id="link-item02" @click="teste('item02')">Section 2</a></li>
      <div class="painel-navbar sub-navbar item02">
        <ul>
          <li><a>asdfadsf</a></li>
          <li><a>asdfadsf</a></li>
          <li><a>asdfadsf</a></li>
          <li><a>asdfadsf</a></li>
          <li><a>asdfadsf</a></li>
        </ul>
      </div>
      <li><a class="accordion-link" id="link-item03" @click="teste('item03')">Section 3</a></li>
      <div class="painel-navbar sub-navbar item03">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.</p>
      </div>
    </ul>
  </div>
</template>


<script setup>

import {ref} from 'vue';

const linkBase = ref("");

const teste = (subNav) => {
  
  linkBase.value = 'link-'+subNav;

  var targetDivs = document.querySelectorAll('.sub-navbar');
  targetDivs.forEach(function (painel) {
    if (painel.classList.contains(subNav)) {
      if (painel.style.maxHeight) {
        closeDropDown(painel);
      } else {
        openDropDown(painel);
      }
    } else {
      closeDropDown(painel);
    }
  });
}

const closeDropDown = (painel) => {
  let elements = document.querySelectorAll('.accordion-link');
  elements.forEach(function(element) {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    }
  });

  painel.style.maxHeight = null;
}

const openDropDown = (painel) => {
  alert(linkBase.value);
  let element = document.getElementById(linkBase.value);
  element.classList.add('active');
  
  painel.classList.add('active');
  painel.style.maxHeight = painel.scrollHeight + "px";
}

</script>


<style scoped sass>

.side-navbar{
  width: 100%;
  background: red;
  margin: 0;
  padding: 0;

  .accordion-link {
    background-color: blue;
    display: flex;
    justify-content:space-between;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
  }

  .active {
    background-color: #0d816e;
  }

  .accordion-link {
    &:hover {
      background-color: #831279;
    }

    &:after {
      content: '\002B';
      color: #bbb01f;
      font-weight: bold;
      float: right;
      margin-left: 5px;
    }
  }

  .active:after {
    content: "\2212";
  }

  .painel-navbar {
    padding: 0 18px;
    background-color: white;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
  }
}

</style>