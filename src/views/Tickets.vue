<template>
  <div>
    <div class="section" id="section1">
      <logo/>
    </div>
    <div class="section" id="section2">
      <h1>Tickets Kaufen:</h1>
      <div class="TicketsOverview">
        <svg viewBox="0 0 1197 995" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <radialGradient cx="0%" cy="0%" fx="0%" fy="0%" r="157.42828%" gradientTransform="translate(0.000000,0.000000),scale(0.822449,1.000000),rotate(39.435553),scale(1.000000,1.932447),translate(-0.000000,-0.000000)" id="radialGradient-1">
                    <stop stop-color="#FF9A56" offset="0%"></stop>
                    <stop stop-color="#21FFFF" offset="100%"></stop>
                </radialGradient>
                <radialGradient cx="0%" cy="0%" fx="0%" fy="0%" r="262.934695%" gradientTransform="translate(0.000000,0.000000),scale(0.411224,1.000000),rotate(22.353665),scale(1.000000,1.932447),translate(-0.000000,-0.000000)" id="radialGradient-2">
                    <stop stop-color="#FF9A56" offset="0%"></stop>
                    <stop stop-color="#21FFFF" offset="100%"></stop>
                </radialGradient>
                <linearGradient x1="0%" y1="0%" x2="76.214776%" y2="76.214776%" id="linearGradient-3">
                    <stop stop-color="#FF9A56" offset="0%"></stop>
                    <stop stop-color="#EEA263" offset="26.5557262%"></stop>
                    <stop stop-color="#21FFFF" offset="100%"></stop>
                </linearGradient>
            </defs>
            <g id="Btn-Copy" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect id="Rectangle-2-Copy-3" stroke="url(#radialGradient-1)" stroke-width="8" fill-rule="nonzero" x="55" y="132" width="972" height="798"></rect>
                <path d="M701.5,527 L701.5,922" id="Line" stroke="#61E3CF" stroke-width="8" stroke-linecap="square" fill-rule="nonzero"></path>
                <path d="M380.5,527 L380.5,922" id="Line-Copy" stroke="#9CC7A1" stroke-width="8" stroke-linecap="square" fill-rule="nonzero"></path>
                <rect id="Rectangle-2-Copy-3" stroke="url(#radialGradient-2)" stroke-width="8" fill-rule="nonzero" x="55" y="132" width="972" height="395"></rect>
                <path d="M155,52 L155,132.171622 L1027.22747,132.171622 L1027.22747,892 L1109,892 L1109,52 L155,52 Z" id="Rectangle-2-Copy-4" stroke="url(#linearGradient-3)" stroke-width="8" fill-rule="nonzero"></path>
                <text id="3-TAGESPASS" font-family="RobotoMono-Bold, Roboto Mono" font-size="70" font-weight="bold" fill="#21FCFE">
                    <tspan x="94" y="227">3 TAGESPASS</tspan>
                </text>
                <text id="20.09.2019" font-family="RobotoMono-Bold, Roboto Mono" font-size="40" font-weight="bold" fill="#21FCFE">
                    <tspan x="97.4804688" y="595">20.09.2019</tspan>
                </text>
                <text id="21.09.2019" font-family="RobotoMono-Bold, Roboto Mono" font-size="40" font-weight="bold" fill="#21FCFE">
                    <tspan x="419.480469" y="595">21.09.2019</tspan>
                </text>
                <text id="22.09.2019" font-family="RobotoMono-Bold, Roboto Mono" font-size="40" font-weight="bold" fill="#21FCFE">
                    <tspan x="744.480469" y="595">22.09.2019</tspan>
                </text>
                <text id="Gib-dir-die-volle-La" font-family="Roboto-Regular, Roboto" font-size="38" font-weight="normal" fill="#FFFFFF">
                    <tspan x="94" y="328">Gib dir die volle Ladung und hole dir den 3 </tspan>
                    <tspan x="94" y="378">Tagespass. </tspan>
                </text>
                <text id="Donnerstag" font-family="Roboto-Regular, Roboto" font-size="33" font-weight="normal" fill="#FFFFFF">
                    <tspan x="94" y="666">Donnerstag</tspan>
                </text>
                <text id="Freitag" font-family="Roboto-Regular, Roboto" font-size="33" font-weight="normal" fill="#FFFFFF">
                    <tspan x="418" y="666">Freitag</tspan>
                </text>
                <text id="Samstag" font-family="Roboto-Regular, Roboto" font-size="33" font-weight="normal" fill="#FFFFFF">
                    <tspan x="742" y="666">Samstag</tspan>
                </text>
                <text id="120.-" font-family="Roboto-Regular, Roboto" font-size="38" font-weight="normal" fill="#FFFFFF">
                    <tspan x="876.501953" y="482">120.-</tspan>
                </text>
                <text id="45.-" font-family="Roboto-Regular, Roboto" font-size="38" font-weight="normal" fill="#FFFFFF">
                    <tspan x="276.839844" y="888">45.-</tspan>
                </text>
                <text id="45.-" font-family="Roboto-Regular, Roboto" font-size="38" font-weight="normal" fill="#FFFFFF">
                    <tspan x="600.839844" y="888">45.-</tspan>
                </text>
                <text id="50.--copy-2" font-family="Roboto-Regular, Roboto" font-size="38" font-weight="normal" fill="#FFFFFF">
                    <tspan x="911.839844" y="888">50.-</tspan>
                </text>
            </g>
        </svg>
      </div>
      <a ref="btnHover2" class="btnLinkL btnLink" href="https://www.ticketcorner.ch/tickets.html?affiliate=TCS&doc=artistPages%2Ftickets&fun=artist&action=tickets&erid=2331356&kuid=447001&includeOnlybookable=false&sort_by_ytix=evid" target="_blank">
        <div class="btnText">
          Kaufen
        </div>
        <Btn/>
      </a>
    </div>
  </div>
</template>

<script>

import Logo from '@/components/Logo.vue'
import Dots from '@/components/Dots.vue'
import Btn from '@/components/Btn.vue'

export default {
  name: 'Frontpage',
  components: {
    Logo,
    Dots,
    Btn
  },
  mounted: function () {
    this.$refs.btnHover2.addEventListener('mouseover', () => {
      this.$refs.btnHover2.classList.add('btnHover')
    })
    this.$refs.btnHover2.addEventListener('mouseout', () => {
      this.$refs.btnHover2.classList.remove('btnHover')
    })
  }
}

</script>

<style scoped lang="scss">
$o: #FF9A56;
h1 {
  font-size: 35px;
  font-weight: 900;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  margin-top: 20px;

}
svg {
  width: 50vw;
  margin-left: 25vw;
  margin-top: 100px;
}
.btnHover {
  transition: 0.5s;
}
.btnText {
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  position: absolute;
  vertical-align: middle;
  margin-top: 32px;
  text-align: center;
  width: 93%;
}
.btnLink {
  position: absolute;
  margin-left: calc(50% - 100px);
  margin-top: 90px;
  margin-bottom: 100px;
}

@media only screen and (max-width: 850px) {
}
@media only screen and (max-width: 600px) {
}

</style>
