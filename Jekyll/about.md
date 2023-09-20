---
layout: default
title: In-line in Markdoown
---
# SVG as Include in HTRML.

{::nomarkdown}
<svg id="DemoSVG" role="img" lang="en" aria-labelledby="#DemoSVG_title" xmlns="http://www.w3.org/2000/svg" display="block" preserveAspectRatio="xMinYMin slice" viewBox="0 0 3652 2260">
<title id="DemoSVG_title">Vector illustration of a device with colorful arrows..</title>
<style>
  #DemoSVG {
  color-scheme: light dark;
  width: 100%;
  background: transparent;
  --DemoSVG-cls-1: #000;
  --DemoSVG-cls-2: #06c;
  }
  @media (prefers-color-scheme: dark) {
    #DemoSVG {
      --DemoSVG-cls-1: #fff;
      --DemoSVG-cls-2: #cf3;
    }
  }
  @media (forced-colors: active) {
    #DemSVG_pth_gr {
      filter: saturate(0);
    }
    #DemoSVG-CTO {
      display: initial;
    }
  }
  @media (forced-colors: active) and (prefers-color-scheme: light) {
    #DemoSVG {
      --DemoSVG-cls-1: #fff;
    }
  }
  @supports (aspect-ratio: auto) {
    @media (max-width: 768px) {
      #DemoSVG {
        aspect-ratio: 1342 / 2260;
      }
      #DemoSVG_device .Dem_1 {
        display: none;
      }
      #DemoSVG_device .Dem_2 {
        display: initial;
      }
      #DemSVG_pth_gr > * {
        transform: scale(calc(var(--w2, 1) / var(--w1, 1))) translate(calc((var(--x2, 0px) / (var(--w2, 1) / var(--w1, 1))) - var(--x1, 0px)), calc((var(--y2, 0px) / (var(--w2, 1) / var(--w1, 1))) - var(--y1, 0px)));
      }
      #DemoSVG_arrows {
        --x1: 1826px;
        --x2: 656px;
        --y1: 1052px;
        --y2: 1110px;
        --w1: 1451;
        --w2: 957;
      }
    }
  }
</style>
<defs>
  <mask id="DemoSVG_mask_CTO">
    <use href="#DemSVG_pth_gr"/>
  </mask>
</defs>
<g id="DemSVG_pth_gr">
  <g id="DemoSVG_arrows">
    <path fill="#0cf" d="M1636 1012h295c14 0 26 5 36 15 10 10 14 23 14 36v295c0 28-23 51-51 51h0c-28 0-51-23-51-51l1-178-272 272c-17 17-45 17-62 0s-17-45 0-62l276-277h-186c-28 0-51-23-51-51 0-28 23-50 51-50h0Zm0-60c-61 0-111 49-111 110s52 110 111 110h42l-175 175c-41 41-41 107 0 148s106 40 147-1l170-169v33c0 61 49 111 110 111 61 0 111-50 111-111v-295c0-30-10-57-31-78-21-21-48-33-78-33h-296Z"/>
    <path fill="var(--DemoSVG-cls-2, #06c)" d="M1818 487h191c9 0 17 4 23 10 6 6 9 14 9 23v188c0 18-14 35-32 35s-32-17-32-35c0 0 0-115 0-115l-177 178c-8 8-28 12-40 0s-8-32 0-40c0 0 178-178 178-178h-120c-43 0-43-66 0-66Zm0-60c-111 0-127 155-21 183 0 0-80 78-80 78-37 36-30 94 1 125s87 37 124 0l77-76c31 101 180 81 182-26 0 0 0-191 0-191 0-25-10-47-27-65-17-18-40-28-65-28 0 0-191 0-191 0Z"/>
    <g stroke-width="60" stroke-linejoin="round" stroke-linecap="round" fill="none">
      <path stroke="#f6cd3a" d="M2326 1198l121-121m-69-110h173v174"/>
      <path stroke="#ff00f5" d="M2208 814l188-188m-69-111h173v174"/>
      <path stroke="var(--DemoSVG-cls-1, #000)" d="M1100 1343l125-124m-69-110h173v174"/>
    </g>
    <g fill="#f6cd3a">
      <circle cx="2256" cy="1275" r="34"/>
      <circle cx="2184" cy="1357" r="34"/>
    </g>
    <circle fill="#ff00f5" cx="2131" cy="895" r="34"/>
    <g fill="#0cf">
      <circle cx="1432" cy="1569" r="34"/>
      <circle cx="1355" cy="1644" r="34"/>
    </g>
  </g>
  <g id="DemoSVG_device" stroke="var(--DemoSVG-cls-1, #000)" stroke-width="60" stroke-linejoin="round" stroke-linecap="round" fill="none" >
    <path class="Dem_2" display="none" d="M144 31h1054c63 0 113 50 113 113v1972c0 63-50 113-113 113H144c-63 0-113-50-113-113V144C31 81 81 31 144 31Zm328 1v35c0 31 21 56 47 56h304c26-1 47-25 47-56 0-1 0-34 0-35Z"/>
    <path class="Dem_1" d="M202 2044V123c0-51 41-92 92-92h3064c51 0 92 41 92 92v1921m-1888 4c0 34 28 62 62 62h398c34 0 62-28 62-62v-4l1445 0c51 0 92 39 92 90v5c0 51-41 90-92 90H121c-50 0-90-40-90-90v-5c0-50 40-90 90-90l1441 0v4Z"/>
  </g>
</g>
<g id="DemoSVG-CTO" display="none" role="none">
  <rect x="0" y="0" width="100%" height="100%" fill="Canvas" />
  <rect x="0" y="0" width="100%" height="100%" fill="canvasText" mask="url(#DemoSVG_mask_CTO)" />
</g>
</svg>

{:/}
