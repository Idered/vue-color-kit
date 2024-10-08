import { defineComponent as v, resolveComponent as l, openBlock as d, createElementBlock as k, normalizeClass as $, normalizeStyle as g, createElementVNode as p, createVNode as a, createBlock as F, createCommentVNode as C, renderSlot as H } from "vue";
import { rgb2hex as y, setColorValue as u, hsv2rgb as B } from "./composible.mjs";
import w from "./Saturation.vue.mjs";
import A from "./Hue.vue.mjs";
import T from "./Alpha.vue.mjs";
import I from "./Preview.vue.mjs";
import E from "./Sucker.vue.mjs";
import O from "./Box.vue.mjs";
import W from "./Colors.vue.mjs";
/* empty css                  */
import R from "../_virtual/plugin-vue_export-helper.mjs";
const j = v({
  components: {
    Saturation: w,
    Hue: A,
    Alpha: T,
    Preview: I,
    Sucker: E,
    Box: O,
    Colors: W
  },
  emits: ["changeColor", "openSucker", "inputFocus", "inputBlur"],
  props: {
    color: {
      type: String,
      default: "#000000"
    },
    theme: {
      type: String,
      default: "dark"
    },
    suckerHide: {
      type: Boolean,
      default: !0
    },
    suckerCanvas: {
      type: null,
      // HTMLCanvasElement
      default: null
    },
    suckerArea: {
      type: Array,
      default: () => []
    },
    colorsDefault: {
      type: Array,
      default: () => [
        "#000000",
        "#FFFFFF",
        "#FF1900",
        "#F47365",
        "#FFB243",
        "#FFE623",
        "#6EFF2A",
        "#1BC7B1",
        "#00BEFF",
        "#2E81FF",
        "#5D61FF",
        "#FF89CF",
        "#FC3CAD",
        "#BF3DCE",
        "#8E00A7",
        "rgba(0,0,0,0)"
      ]
    },
    colorsHistoryKey: {
      type: String,
      default: "vue-colorpicker-history"
    }
  },
  data() {
    return {
      hueWidth: 15,
      hueHeight: 152,
      previewHeight: 30,
      modelRgba: "",
      modelHex: "",
      r: 0,
      g: 0,
      b: 0,
      a: 1,
      h: 0,
      s: 0,
      v: 0
    };
  },
  computed: {
    isLightTheme() {
      return this.theme === "light";
    },
    totalWidth() {
      return this.hueHeight + (this.hueWidth + 8) * 2;
    },
    previewWidth() {
      return this.totalWidth - (this.suckerHide ? 0 : this.previewHeight);
    },
    rgba() {
      return {
        r: this.r,
        g: this.g,
        b: this.b,
        a: this.a
      };
    },
    hsv() {
      return {
        h: this.h,
        s: this.s,
        v: this.v
      };
    },
    rgbString() {
      return `rgb(${this.r}, ${this.g}, ${this.b})`;
    },
    rgbaStringShort() {
      return `${this.r}, ${this.g}, ${this.b}, ${this.a}`;
    },
    rgbaString() {
      return `rgba(${this.rgbaStringShort})`;
    },
    hexString() {
      return y(this.rgba, !0);
    }
  },
  created() {
    Object.assign(this, u(this.color)), this.setText(), this.$watch("rgba", () => {
      this.$emit("changeColor", {
        rgba: this.rgba,
        hsv: this.hsv,
        hex: this.modelHex
      });
    });
  },
  methods: {
    selectSaturation(e) {
      const { r: t, g: r, b: s, h: i, s: n, v: o } = u(e);
      Object.assign(this, { r: t, g: r, b: s, h: i, s: n, v: o }), this.setText();
    },
    handleFocus(e) {
      this.$emit("inputFocus", e);
    },
    handleBlur(e) {
      this.$emit("inputBlur", e);
    },
    selectHue(e) {
      const t = this.hsv.s, r = this.hsv.v, s = B({ h: e, s: t, v: r }), { r: i, g: n, b: o } = u(s);
      Object.assign(this, { r: i, g: n, b: o, h: e, s: t, v: r }), this.setText(), this.$nextTick(() => {
        this.$refs.saturation.renderColor(), this.$refs.saturation.renderSlide();
      });
    },
    selectAlpha(e) {
      this.a = e, this.setText();
    },
    inputHex(e) {
      const { r: t, g: r, b: s, a: i, h: n, s: o, v: h } = u(e);
      Object.assign(this, { r: t, g: r, b: s, a: i, h: n, s: o, v: h }), this.modelHex = e, this.modelRgba = this.rgbaStringShort, this.$nextTick(() => {
        this.$refs.saturation.renderColor(), this.$refs.saturation.renderSlide(), this.$refs.hue.renderSlide();
      });
    },
    inputRgba(e) {
      const { r: t, g: r, b: s, a: i, h: n, s: o, v: h } = u(e);
      Object.assign(this, { r: t, g: r, b: s, a: i, h: n, s: o, v: h }), this.modelHex = this.hexString, this.modelRgba = e, this.$nextTick(() => {
        this.$refs.saturation.renderColor(), this.$refs.saturation.renderSlide(), this.$refs.hue.renderSlide();
      });
    },
    setText() {
      this.modelHex = this.hexString, this.modelRgba = this.rgbaStringShort;
    },
    openSucker(e) {
      this.$emit("openSucker", e);
    },
    selectSucker(e) {
      const { r: t, g: r, b: s, a: i, h: n, s: o, v: h } = u(e);
      Object.assign(this, { r: t, g: r, b: s, a: i, h: n, s: o, v: h }), this.setText(), this.$nextTick(() => {
        this.$refs.saturation.renderColor(), this.$refs.saturation.renderSlide(), this.$refs.hue.renderSlide();
      });
    },
    selectColor(e) {
      const { r: t, g: r, b: s, a: i, h: n, s: o, v: h } = u(e);
      Object.assign(this, { r: t, g: r, b: s, a: i, h: n, s: o, v: h }), this.setText(), this.$nextTick(() => {
        this.$refs.saturation.renderColor(), this.$refs.saturation.renderSlide(), this.$refs.hue.renderSlide();
      });
    }
  }
}), D = { class: "color-set" };
function V(e, t, r, s, i, n) {
  const o = l("Saturation"), h = l("Hue"), m = l("Alpha"), S = l("Preview"), b = l("Sucker"), c = l("Box"), f = l("Colors");
  return d(), k("div", {
    class: $(["hu-color-picker", { light: e.isLightTheme }]),
    style: g({ width: e.totalWidth + "px" })
  }, [
    p("div", D, [
      a(o, {
        ref: "saturation",
        color: e.rgbString,
        hsv: e.hsv,
        size: e.hueHeight,
        onSelectSaturation: e.selectSaturation
      }, null, 8, ["color", "hsv", "size", "onSelectSaturation"]),
      a(h, {
        ref: "hue",
        hsv: e.hsv,
        width: e.hueWidth,
        height: e.hueHeight,
        onSelectHue: e.selectHue
      }, null, 8, ["hsv", "width", "height", "onSelectHue"]),
      a(m, {
        ref: "alpha",
        color: e.rgbString,
        rgba: e.rgba,
        width: e.hueWidth,
        height: e.hueHeight,
        onSelectAlpha: e.selectAlpha
      }, null, 8, ["color", "rgba", "width", "height", "onSelectAlpha"])
    ]),
    p("div", {
      style: g({ height: e.previewHeight + "px" }),
      class: "color-show"
    }, [
      a(S, {
        color: e.rgbaString,
        width: e.previewWidth,
        height: e.previewHeight
      }, null, 8, ["color", "width", "height"]),
      e.suckerHide ? C("", !0) : (d(), F(b, {
        key: 0,
        "sucker-canvas": e.suckerCanvas,
        "sucker-area": e.suckerArea,
        onOpenSucker: e.openSucker,
        onSelectSucker: e.selectSucker
      }, null, 8, ["sucker-canvas", "sucker-area", "onOpenSucker", "onSelectSucker"]))
    ], 4),
    a(c, {
      name: "HEX",
      color: e.modelHex,
      onInputColor: e.inputHex,
      onInputFocus: e.handleFocus,
      onInputBlur: e.handleBlur
    }, null, 8, ["color", "onInputColor", "onInputFocus", "onInputBlur"]),
    a(c, {
      name: "RGBA",
      color: e.modelRgba,
      onInputColor: e.inputRgba,
      onInputFocus: e.handleFocus,
      onInputBlur: e.handleBlur
    }, null, 8, ["color", "onInputColor", "onInputFocus", "onInputBlur"]),
    a(f, {
      color: e.rgbaString,
      "colors-default": e.colorsDefault,
      "colors-history-key": e.colorsHistoryKey,
      onSelectColor: e.selectColor
    }, null, 8, ["color", "colors-default", "colors-history-key", "onSelectColor"]),
    H(e.$slots, "default")
  ], 6);
}
const U = /* @__PURE__ */ R(j, [["render", V]]);
export {
  U as default
};
