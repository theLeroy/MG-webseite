<template>
  <div class="Btn">
    <svg viewBox="0 0 405 144" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <radialGradient cx="0%" cy="0%" fx="0%" fy="0%" r="373.260264%" gradientTransform="translate(0.000000,0.000000),scale(0.278075,1.000000),rotate(15.539912),scale(1.000000,1.932447),translate(-0.000000,-0.000000)" id="radialGradient-1">
                <stop stop-color="#FF9A56" offset="0%"></stop>
                <stop stop-color="#21FFFF" offset="100%"></stop>
            </radialGradient>
            <linearGradient x1="0%" y1="0%" x2="76.214776%" y2="76.214776%" id="linearGradient-2">
                <stop stop-color="#FF9A56" offset="0%"></stop>
                <stop stop-color="#EEA263" offset="26.5557262%"></stop>
                <stop stop-color="#21FFFF" offset="100%"></stop>
            </linearGradient>
        </defs>
        <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Group-Copy-5" transform="translate(3.000000, 7.000000)" fill-rule="nonzero" stroke-width="8">
                <rect id="nonGradient Rectangle-2" stroke="url(#radialGradient-1)" x="4" y="30" width="366" height="96"></rect>
                <path d="M28,4 L28,29.9809719 L370.030864,29.9809719 L370.030864,100 L394,100 L394,4 L28,4 Z" id="Rectangle-2-Copy" stroke="url(#linearGradient-2)"></path>
            </g>
            <g ref="Gradient" class="RGradient" id="Gradient Group-Copy-5" transform="translate(3.000000, 7.000000)" fill-rule="nonzero" stroke-width="8">
                <path d="M28,4 L28,29.9809719 L370.030864,29.9809719 L370.030864,100 L394,100 L394,4 L28,4 Z" id="Rectangle-2-Copy" stroke="#21FFFF"></path>
                <rect id="Rectangle-2" stroke="#FF9A56" x="4" y="30" width="366" height="96"></rect>
            </g>
        </g>
    </svg>

  </div>
</template>

<script>
export default {
  name: 'Btn'
}
</script>

<style scoped lang="scss">
.Btn {
  width: 200px;
  transition: 0.5s;
}
.btnHover {
  .RGradient {
    opacity: 0 !important;
    transition: 0.5s;
  }
}
.RGradient {
  transition: 0.5s;
}
.btnHover > .RGradient {
  transition: 0.5s;
  opacity: 0 !important;
}
</style>
