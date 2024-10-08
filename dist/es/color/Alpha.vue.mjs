import { defineComponent as a, openBlock as h, createElementBlock as d, withModifiers as c, createElementVNode as n, normalizeStyle as p } from "vue";
import { createAlphaSquare as u, createLinearGradient as m } from "./composible.mjs";
/* empty css            */
import f from "../_virtual/plugin-vue_export-helper.mjs";
const v = a({
  props: {
    color: {
      type: String,
      default: "#000000"
    },
    rgba: {
      type: Object,
      default: null
    },
    width: {
      type: Number,
      default: 15
    },
    height: {
      type: Number,
      default: 152
    }
  },
  emits: ["selectAlpha"],
  data() {
    return {
      slideAlphaStyle: {},
      alphaSize: 5
    };
  },
  watch: {
    color() {
      this.renderColor();
    },
    "rgba.a"() {
      this.renderSlide();
    }
  },
  mounted() {
    this.renderColor(), this.renderSlide();
  },
  methods: {
    renderColor() {
      const t = this.$refs.canvasAlpha, o = this.width, s = this.height, i = this.alphaSize, l = u(i), e = t.getContext("2d", { willReadFrequently: !0 });
      t.width = o, t.height = s, e.fillStyle = e.createPattern(l, "repeat"), e.fillRect(0, 0, o, s), m(
        "p",
        e,
        o,
        s,
        "rgba(255,255,255,0)",
        this.color
      );
    },
    renderSlide() {
      this.slideAlphaStyle = {
        top: this.rgba.a * this.height - 2 + "px"
      };
    },
    selectAlpha(t) {
      const { top: o } = this.$el.getBoundingClientRect(), s = (l) => {
        let e = l.clientY - o;
        e < 0 && (e = 0), e > this.height && (e = this.height);
        let r = parseFloat((e / this.height).toFixed(2));
        this.$emit("selectAlpha", r);
      };
      s(t);
      const i = () => {
        document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", i);
      };
      document.addEventListener("mousemove", s), document.addEventListener("mouseup", i);
    }
  }
}), g = { ref: "canvasAlpha" };
function S(t, o, s, i, l, e) {
  return h(), d("div", {
    class: "color-alpha",
    onMousedown: o[0] || (o[0] = c((...r) => t.selectAlpha && t.selectAlpha(...r), ["prevent", "stop"]))
  }, [
    n("canvas", g, null, 512),
    n("div", {
      style: p(t.slideAlphaStyle),
      class: "slide"
    }, null, 4)
  ], 32);
}
const $ = /* @__PURE__ */ f(v, [["render", S]]);
export {
  $ as default
};
