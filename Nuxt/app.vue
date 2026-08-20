<!--
  @license
  Copyright Equivalent Design All Rights Reserved.

  Use of this source code is governed by an MIT-style license that can be found
  in the LICENSE file at
  https://github.com/equivalent-design/smart-svg-samples/License
-->
<script setup lang="ts">
import SmartIcon from '~/assets/smart.svg?component'
</script>

<template>
  <main>
    <h1>SmartSVG&#8482; Nuxt Sample</h1>
    <SmartIcon />
  </main>
</template>

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
