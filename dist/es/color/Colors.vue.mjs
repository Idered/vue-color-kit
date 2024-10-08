import { defineComponent as h, ref as d, onUnmounted as k, openBlock as r, createElementBlock as s, createElementVNode as c, Fragment as p, renderList as g, normalizeStyle as a, createCommentVNode as C } from "vue";
import { createAlphaSquare as v } from "./composible.mjs";
/* empty css             */
import S from "../_virtual/plugin-vue_export-helper.mjs";
const H = h({
  name: "ColorPicker",
  props: {
    color: {
      type: String,
      default: "#000000"
    },
    colorsDefault: {
      type: Array,
      default: () => []
    },
    colorsHistoryKey: {
      type: String,
      default: ""
    }
  },
  emits: ["selectColor"],
  setup(o, { emit: f }) {
    const i = d(), n = d([]), u = d();
    o.colorsHistoryKey && localStorage && (n.value = JSON.parse(localStorage.getItem(o.colorsHistoryKey)) || []), u.value = v(4).toDataURL(), k(() => {
      y(i.value);
    });
    function y(l) {
      if (!l)
        return;
      const t = n.value || [], m = t.indexOf(l);
      m >= 0 && t.splice(m, 1), t.length >= 8 && (t.length = 7), t.unshift(l), n.value = t || [], localStorage && o.colorsHistoryKey && localStorage.setItem(o.colorsHistoryKey, JSON.stringify(t));
    }
    function e(l) {
      f("selectColor", l);
    }
    return {
      setColorsHistory: y,
      colorsHistory: n,
      color: i,
      imgAlphaBase64: u,
      selectColor: e
    };
  }
}), _ = { class: "colors" }, $ = ["onClick"], A = {
  key: 0,
  class: "colors history"
}, B = ["onClick"];
function K(o, f, i, n, u, y) {
  return r(), s("div", null, [
    c("ul", _, [
      (r(!0), s(p, null, g(o.colorsDefault, (e) => (r(), s("li", {
        key: e,
        class: "item",
        onClick: (l) => o.selectColor(e)
      }, [
        c("div", {
          style: a({ background: `url(${o.imgAlphaBase64})` }),
          class: "alpha"
        }, null, 4),
        c("div", {
          style: a({ background: e }),
          class: "color"
        }, null, 4)
      ], 8, $))), 128))
    ]),
    o.colorsHistory.length ? (r(), s("ul", A, [
      (r(!0), s(p, null, g(o.colorsHistory, (e) => (r(), s("li", {
        key: e,
        class: "item",
        onClick: (l) => o.selectColor(e)
      }, [
        c("div", {
          style: a({ background: `url(${o.imgAlphaBase64})` }),
          class: "alpha"
        }, null, 4),
        c("div", {
          style: a({ background: e }),
          class: "color"
        }, null, 4)
      ], 8, B))), 128))
    ])) : C("", !0)
  ]);
}
const E = /* @__PURE__ */ S(H, [["render", K]]);
export {
  E as default
};
