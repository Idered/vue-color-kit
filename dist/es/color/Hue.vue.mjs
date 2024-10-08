import { defineComponent as r, openBlock as u, createElementBlock as h, withModifiers as a, createElementVNode as l, normalizeStyle as c } from "vue";
/* empty css          */
import p from "../_virtual/plugin-vue_export-helper.mjs";
const m = r({
  props: {
    hsv: {
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
  emits: ["selectHue"],
  data() {
    return {
      slideHueStyle: {}
    };
  },
  mounted() {
    this.renderColor(), this.renderSlide();
  },
  methods: {
    renderColor() {
      const t = this.$refs.canvasHue, s = this.width, o = this.height, i = t.getContext("2d", { willReadFrequently: !0 });
      t.width = s, t.height = o;
      const e = i.createLinearGradient(0, 0, 0, o);
      e.addColorStop(0, "#FF0000"), e.addColorStop(0.17 * 1, "#FF00FF"), e.addColorStop(0.17 * 2, "#0000FF"), e.addColorStop(0.17 * 3, "#00FFFF"), e.addColorStop(0.17 * 4, "#00FF00"), e.addColorStop(0.17 * 5, "#FFFF00"), e.addColorStop(1, "#FF0000"), i.fillStyle = e, i.fillRect(0, 0, s, o);
    },
    renderSlide() {
      this.slideHueStyle = {
        top: (1 - this.hsv.h / 360) * this.height - 2 + "px"
      };
    },
    selectHue(t) {
      const { top: s } = this.$el.getBoundingClientRect();
      t.target.getContext("2d", { willReadFrequently: !0 });
      const o = (e) => {
        let n = e.clientY - s;
        n < 0 && (n = 0), n > this.height && (n = this.height), this.slideHueStyle = {
          top: n - 2 + "px"
        };
        const d = 360 - n / this.height * 360;
        this.$emit("selectHue", d);
      };
      o(t);
      const i = () => {
        document.removeEventListener("mousemove", o), document.removeEventListener("mouseup", i);
      };
      document.addEventListener("mousemove", o), document.addEventListener("mouseup", i);
    }
  }
}), F = { ref: "canvasHue" };
function f(t, s, o, i, e, n) {
  return u(), h("div", {
    class: "hue",
    onMousedown: s[0] || (s[0] = a((...d) => t.selectHue && t.selectHue(...d), ["prevent", "stop"]))
  }, [
    l("canvas", F, null, 512),
    l("div", {
      style: c(t.slideHueStyle),
      class: "slide"
    }, null, 4)
  ], 32);
}
const y = /* @__PURE__ */ p(m, [["render", f]]);
export {
  y as default
};
