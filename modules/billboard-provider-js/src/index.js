// 1) import billboard.js
// as named import with desired shapes and interaction modules
// https://github.com/naver/billboard.js/wiki/CHANGELOG-v2#modularization-by-its-functionality
//import {bb, area, bar, zoom} from "billboard.js";

// or as importing default
import bb, {area, bar, zoom} from "billboard.js";

// 2) import css if your dev-env supports. If don't, include them via <link>
import "billboard.js/dist/billboard.css";

// or theme style. Find more themes from 'theme' folder
import "billboard.js/dist/theme/insight.css"

const dinamycValues = (chartAttributes) => {
  return bb.generate({
    bindto: chartAttributes.id,
    data: {
      // for ESM import usage, import 'line' module and execute it as
      // type: line(),
      type: chartAttributes.type,
      columns: [
          ["data1", 30, 200, 100, 400, 150, 250]
      ]
    },
    zoom: {
      // for ESM import usage, import 'zoom' module and execute it as
      // enabled: zoom()
      enabled: true
    }
});
}

export {dinamycValues};