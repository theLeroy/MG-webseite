<template lang="html">
  <div :class="{ oh: isPageLoading}">
    <div v-if="isPageLoading" class="loader">
      <div class="LoadingSpinning">
        <img id="L-Svg" src="@/assets/Logo.svg">
      </div>
      <h1 class="L-Text" v-html="loadingText"></h1>
    </div>
    <router-view @isLoaded="isPageLoading = false"/>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'App',
  data () {
    return {
      isPageLoading: true,
      loadingText: 'Loading'
    }
  },
  methods: {
    animateLoadingOnce () {
      this.loadingText = 'Laden&nbsp;&nbsp;&nbsp;'
      setTimeout(() => {
        this.loadingText = 'Laden.&nbsp;&nbsp;'
      }, 800)
      setTimeout(() => {
        this.loadingText = 'Laden..&nbsp;'
      }, 1600)
      setTimeout(() => {
        this.loadingText = 'Laden...'
      }, 2400)
    }
  },
  watch: {
    '$route': function () {
      this.isPageLoading = true
      this.fetchData().then(function () {
        this.isPageLoading = true
      })
    }
  },
  mounted () {
    this.animateLoadingOnce()
    setInterval(this.animateLoadingOnce, 3200)

    document.getElementsByTagName('html')[0].style.overflowY = 'hidden'
    document.getElementsByTagName('html')[0].style.overflowX = 'hidden'

    window.addEventListener('load', () => {
      setTimeout(() => {
        document.getElementsByTagName('html')[0].style.overflowY = 'unset'
        document.getElementsByTagName('html')[0].style.overflowX = 'hidden'
        this.isPageLoading = false
      }, 750)
    })
  }
}
</script>

<style lang="scss">
// loader
.oh {
  overflow: hidden !important;
}
.L-Text {
  margin-top: 50px;
  font-size: 30px;
}
.loader {
  top: 0;
  z-index: 1000;
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(-30.606407031509484deg, #FF9A56 15%, #21FCFE 85%);
}

.LoadingSpinning {
   width: 300px;
   height: 300px;
   margin-top: calc(50vh - 150px);
   margin-left: calc(50vw - 150px);
   animation: load 10s infinite;
}
.L-Text {
  color: #fff;
  text-align: center;
}
#L-Svg {
  width: 100%;
  height: 100%;
  transform: translateY(-16px);
}
@keyframes load {
   0% {
      transform: rotate(0deg);
   }
   10% {
      transform: rotate(-500deg);
   }
   60% {
      transform: rotate(700deg);
   }
   100% {
      transform: rotate(0deg);
   }
}

// Scrollbar
::-webkit-scrollbar-thumb {
  border-radius: 0px;
  background-color: #3cfcfe;
}
::-webkit-scrollbar {
  width: 5px;
  background-color: none;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: none;
  border-radius: 0px;
  margin-left: 20px;
  background-color: #fb9a57;
  display: none;
}
::-webkit-scrollbar-track-piece:start {
  background: transparent url('assets/background.png') repeat-y !important;
}

::-webkit-scrollbar-track-piece:end {
  background: transparent url('assets/background.png') repeat-y !important;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-image: url('./assets/background.png');
  background-color: #000;
  overflow: hidden;
}
.section {
  width: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700');
body {
  font-family: 'Helvetica Neue','Helvetica','Roboto','Arial',sans-serif !important;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

html {
  display: block;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}

//Reset template Boilertemplate -->
//
//
//
/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */
button,hr,input{overflow:visible}progress,sub,sup{vertical-align:baseline}[type=checkbox],[type=radio],legend{box-sizing:border-box;padding:0}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{padding:.35em .75em .625em}legend{color:inherit;display:table;max-width:100%;white-space:normal}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}

//Reset css
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}

</style>
