import { defineComponent as f, openBlock as v, createElementBlock as S, withModifiers as g, createElementVNode as u, normalizeStyle as y } from "vue";
import { createLinearGradient as d } from "./composible.mjs";
/* empty css                 */
import z from "../_virtual/plugin-vue_export-helper.mjs";
const x = f({
  props: {
    color: {
      type: String,
      default: "#000000"
    },
    hsv: {
      type: Object,
      default: null
    },
    size: {
      type: Number,
      default: 152
    }
  },
  emits: ["selectSaturation"],
  data() {
    return {
      slideSaturationStyle: {}
    };
  },
  // Can’t monitor, otherwise the color will change when you change yourself
  // watch: {
  //     color() {
  //         this.renderColor()
  //     }
  // },
  mounted() {
    this.renderColor(), this.renderSlide();
  },
  methods: {
    renderColor() {
      const e = this.$refs.canvasSaturation, t = this.size, s = e.getContext("2d", { willReadFrequently: !0 });
      e.width = t, e.height = t, s.fillStyle = `hsl(${this.hsv.h}deg 100% 50%)`, s.fillRect(0, 0, t, t), d(
        "l",
        s,
        t,
        t,
        "#FFFFFF",
        "rgba(255,255,255,0)"
      ), d("p", s, t, t, "rgba(0,0,0,0)", "#000000");
    },
    renderSlide() {
      this.slideSaturationStyle = {
        left: this.hsv.s * this.size - 5 + "px",
        top: (1 - this.hsv.v) * this.size - 5 + "px"
      };
    },
    selectSaturation(e) {
      const { top: t, left: s } = this.$el.getBoundingClientRect(), l = e.target.getContext("2d", { willReadFrequently: !0 }), n = (a) => {
        let i = a.clientX - s, o = a.clientY - t;
        i < 0 && (i = 0), o < 0 && (o = 0), i > this.size && (i = this.size), o > this.size && (o = this.size), this.slideSaturationStyle = {
          left: i - 5 + "px",
          top: o - 5 + "px"
        };
        const c = l.getImageData(
          Math.min(i, this.size - 1),
          Math.min(o, this.size - 1),
          1,
          1
        ), [m, h, p] = c.data;
        this.$emit("selectSaturation", { r: m, g: h, b: p });
      };
      n(e);
      const r = () => {
        document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", r);
      };
      document.addEventListener("mousemove", n), document.addEventListener("mouseup", r);
    }
  }
}), F = { ref: "canvasSaturation" };
function $(e, t, s, l, n, r) {
  return v(), S("div", {
    class: "saturation",
    onMousedown: t[0] || (t[0] = g((...a) => e.selectSaturation && e.selectSaturation(...a), ["prevent", "stop"]))
  }, [
    u("canvas", F, null, 512),
    u("div", {
      style: y(e.slideSaturationStyle),
      class: "slide"
    }, null, 4)
  ], 32);
}
const w = /* @__PURE__ */ z(x, [["render", $]]);
export {
  w as default
};
