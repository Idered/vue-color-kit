import { defineComponent as p, computed as d, openBlock as a, createElementBlock as i, createElementVNode as t, toDisplayString as m, withDirectives as c, vModelText as f } from "vue";
/* empty css          */
import B from "../_virtual/plugin-vue_export-helper.mjs";
const C = p({
  props: {
    name: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    }
  },
  emits: ["inputColor", "inputFocus", "inputBlur"],
  setup(e, { emit: o }) {
    return {
      modelColor: d({
        get() {
          return e.color || "";
        },
        set(n) {
          o("inputColor", n);
        }
      }),
      handleFocus: (n) => {
        o("inputFocus", n);
      },
      handleBlur: (n) => {
        o("inputBlur", n);
      }
    };
  }
}), F = { class: "color-type" }, h = { class: "name" };
function g(e, o, r, s, u, n) {
  return a(), i("div", F, [
    t("span", h, m(e.name), 1),
    c(t("input", {
      "onUpdate:modelValue": o[0] || (o[0] = (l) => e.modelColor = l),
      class: "value",
      onFocus: o[1] || (o[1] = (...l) => e.handleFocus && e.handleFocus(...l)),
      onBlur: o[2] || (o[2] = (...l) => e.handleBlur && e.handleBlur(...l))
    }, null, 544), [
      [f, e.modelColor]
    ])
  ]);
}
const S = /* @__PURE__ */ B(C, [["render", g]]);
export {
  S as default
};
