<template>
  <div id="mySidebar" class="sidebar">
    <ul class="side-navbar">
      <li><a class="url-link"><span><i class="fa fa-cog"></i> Section 1</span></a></li>
      
      <li><a class="accordion-link url-link" id="link-item01" @click="teste('item01')"><span><i class="fa fa-cog"></i> Section 1</span></a></li>
      <div class="painel-navbar sub-navbar item01">
        <ul class="sub-nav">
          <li><a>asdfadsf</a></li>
          <li><a>asdfadsf</a></li>
          <li><a>asdfadsf</a></li>
          <li><a>asdfadsf</a></li>
          <li><a>asdfadsf</a></li>
        </ul>
      </div>
      <li><a class="accordion-link url-link" id="link-item02" @click="teste('item02')"><span><i class="fa fa-cog"></i> Section 1</span></a></li>
      <div class="painel-navbar sub-navbar item02">
        <ul class="sub-nav">
          <li><a>asdfadsf</a></li>
          <li><a>asdfadsf</a></li>
          <li><a>asdfadsf</a></li>
          <li><a>asdfadsf</a></li>
          <li><a>asdfadsf</a></li>
        </ul>
      </div>
      <li><a class="accordion-link url-link" id="link-item03" @click="teste('item03')"><span><i class="fa fa-cog"></i> Section 1</span></a></li>
      <div class="painel-navbar sub-navbar item03">
        <ul class="sub-nav">
          <li><a>asdfadsf</a></li>
          <li><a>asdfadsf</a></li>
          <li><a>asdfadsf</a></li>
          <li><a>asdfadsf</a></li>
          <li><a>asdfadsf</a></li>
        </ul>
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
  var siblingElement = painel.previousElementSibling;
  siblingElement.classList.remove('active');
  painel.style.maxHeight = null;
}

const openDropDown = (painel) => {
  var siblingElement = painel.previousElementSibling;
  siblingElement.classList.add('active');
  painel.style.maxHeight = painel.scrollHeight + "px";
}

</script>

<style scoped sass>

.side-navbar{
  width: 250px;
  margin: 0;
  padding: 0;

  .url-link {
    display: flex;
    border-left: 5px solid #3c8dbc;
    justify-content:space-between;
    color: #b8c7ce;
    cursor: pointer;
    text-decoration: none;
    padding: 12px 15px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
    
    .fa{margin-right: 8px;}
  }

  
  .active {
    .url-link {
      background-color: #1e282c;
      border-left: 5px solid #3c8dbc;
      &:after {
        content: '\2212';
        color: #b8c7ce;
        font-weight: bold;
        float: right;
        margin-left: 5px;
      }
    }
  }

  .url-link {
    &:hover {
      background-color: #1e282c;
    }
  }

  .accordion-link {
    &:hover {
      background-color: #1e282c;
    }

    &:after {
      content: '\002B';
      color: #b8c7ce;
      font-weight: bold;
      float: right;
      margin-left: 5px;
    }
  }

  .painel-navbar {
    background-color: #2c3b41;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
  }
}

.sub-nav{
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.sub-nav  a{
  color: #8aa4af!important;
  padding: 9px 5px 9px 20px;
  width: 100%;
  display: block;
  cursor: pointer;
}
.sub-nav  a:hover{
  color: #fff!important;
}


</style>