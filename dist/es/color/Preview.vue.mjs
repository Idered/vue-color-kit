import { defineComponent as a, openBlock as c, createElementBlock as l } from "vue";
import { createAlphaSquare as s } from "./composible.mjs";
import h from "../_virtual/plugin-vue_export-helper.mjs";
const d = a({
  props: {
    color: {
      type: String,
      default: "#000000"
    },
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      alphaSize: 5
    };
  },
  watch: {
    color() {
      this.renderColor();
    }
  },
  mounted() {
    this.renderColor();
  },
  methods: {
    renderColor() {
      const e = this.$el, r = this.width, o = this.height, i = this.alphaSize, n = s(i), t = e.getContext("2d", { willReadFrequently: !0 });
      e.width = r, e.height = o, t.fillStyle = t.createPattern(n, "repeat"), t.fillRect(0, 0, r, o), t.fillStyle = this.color, t.fillRect(0, 0, r, o);
    }
  }
});
function p(e, r, o, i, n, t) {
  return c(), l("canvas");
}
const _ = /* @__PURE__ */ h(d, [["render", p]]);
export {
  _ as default
};
