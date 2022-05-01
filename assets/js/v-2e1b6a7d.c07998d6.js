"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[60044],{41341:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-2e1b6a7d",path:"/devices/TS0111_valve.html",title:"TuYa TS0111_valve control via MQTT",lang:"en-US",frontmatter:{title:"TuYa TS0111_valve control via MQTT",description:"Integrate your TuYa TS0111_valve via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-10-30T12:58:50.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TS0111_valve.md",git:{updatedTime:1651428605e3}}},11421:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});const i=(0,a(66252).uE)('<h1 id="tuya-ts0111-valve" tabindex="-1"><a class="header-anchor" href="#tuya-ts0111-valve" aria-hidden="true">#</a> TuYa TS0111_valve</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TS0111_valve</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Smart water/gas valve</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/TS0111_valve.jpg" alt="TuYa TS0111_valve"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),d={},o=(0,a(83744).Z)(d,[["render",function(e,t){return i}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);