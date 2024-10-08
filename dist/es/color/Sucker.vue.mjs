import { defineComponent as w, openBlock as h, createElementBlock as p, normalizeClass as y, createElementVNode as C, createCommentVNode as f, createStaticVNode as x } from "vue";
/* empty css             */
import S from "../_virtual/plugin-vue_export-helper.mjs";
const b = w({
  props: {
    suckerCanvas: {
      type: Object,
      // HTMLCanvasElement
      default: null
    },
    suckerArea: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isOpenSucker: !1,
      // Whether it is in the straw state
      suckerPreview: null,
      // Preview color dom next to the straw
      isSucking: !1
      // Is it in a straw waiting state
    };
  },
  watch: {
    suckerCanvas(e) {
      this.isSucking = !1, this.suckColor(e);
    }
  },
  methods: {
    openSucker() {
      this.isOpenSucker ? this.keydownHandler({ keyCode: 27 }) : (this.isOpenSucker = !0, this.isSucking = !0, this.$emit("openSucker", !0), document.addEventListener("keydown", this.keydownHandler));
    },
    keydownHandler(e) {
      e.keyCode === 27 && (this.isOpenSucker = !1, this.isSucking = !1, this.$emit("openSucker", !1), document.removeEventListener("keydown", this.keydownHandler), document.removeEventListener("mousemove", this.mousemoveHandler), document.removeEventListener("mouseup", this.mousemoveHandler), this.suckerPreview && (document.body.removeChild(this.suckerPreview), this.suckerPreview = null));
    },
    mousemoveHandler(e) {
      const { clientX: t, clientY: s } = e, {
        top: o,
        left: a,
        width: c,
        height: r
      } = this.suckerCanvas.getBoundingClientRect(), u = t - a, l = s - o, g = this.suckerCanvas.getContext("2d").getImageData(
        Math.min(u, c - 1),
        Math.min(l, r - 1),
        1,
        1
      );
      let [d, m, k, i] = g.data;
      i = parseFloat((i / 255).toFixed(2));
      const n = this.suckerPreview.style;
      Object.assign(n, {
        position: "absolute",
        left: t + 20 + "px",
        top: s - 36 + "px",
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        border: "2px solid #fff",
        boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.16)",
        background: `rgba(${d}, ${m}, ${k}, ${i})`,
        zIndex: 95
        // The level of the preview color of the small circle of the eyedropper cannot exceed the color selector
      }), this.suckerArea.length && // @ts-ignore
      t >= this.suckerArea[0] && // @ts-ignore
      s >= this.suckerArea[1] && // @ts-ignore
      t <= this.suckerArea[2] && // @ts-ignore
      s <= this.suckerArea[3] ? n.display = "" : n.display = "none";
    },
    suckColor(e) {
      e && e.tagName !== "CANVAS" || (this.suckerPreview = document.createElement("div"), this.suckerPreview && document.body.appendChild(this.suckerPreview), document.addEventListener("mousemove", this.mousemoveHandler), document.addEventListener("mouseup", this.mousemoveHandler), e.addEventListener("click", (t) => {
        const { clientX: s, clientY: o } = t, { top: a, left: c, width: r, height: u } = e.getBoundingClientRect(), l = s - c, v = o - a, d = e.getContext("2d").getImageData(
          Math.min(l, r - 1),
          Math.min(v, u - 1),
          1,
          1
        );
        let [m, k, i, n] = d.data;
        n = parseFloat((n / 255).toFixed(2)), this.$emit("selectSucker", { r: m, g: k, b: i, a: n });
      }));
    }
  }
}), $ = {
  key: 1,
  class: "sucker",
  viewBox: "-16 -16 68 68",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "#9099a4"
};
function E(e, t, s, o, a, c) {
  return h(), p("div", null, [
    e.isSucking ? f("", !0) : (h(), p("svg", {
      key: 0,
      class: y([{ active: e.isOpenSucker }, "sucker"]),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "-12 -12 48 48",
      onClick: t[0] || (t[0] = (...r) => e.openSucker && e.openSucker(...r))
    }, t[1] || (t[1] = [
      C("path", { d: "M13.1,8.2l5.6,5.6c0.4,0.4,0.5,1.1,0.1,1.5s-1.1,0.5-1.5,0.1c0,0-0.1,0-0.1-0.1l-1.4-1.4l-7.7,7.7C7.9,21.9,7.6,22,7.3,22H3.1C2.5,22,2,21.5,2,20.9l0,0v-4.2c0-0.3,0.1-0.6,0.3-0.8l5.8-5.8C8.5,9.7,9.2,9.6,9.7,10s0.5,1.1,0.1,1.5c0,0,0,0.1-0.1,0.1l-5.5,5.5v2.7h2.7l7.4-7.4L8.7,6.8c-0.5-0.4-0.5-1-0.1-1.5s1.1-0.5,1.5-0.1c0,0,0.1,0,0.1,0.1l1.4,1.4l3.5-3.5c1.6-1.6,4.1-1.6,5.8-0.1c1.6,1.6,1.6,4.1,0.1,5.8L20.9,9l-3.6,3.6c-0.4,0.4-1.1,0.5-1.5,0.1" }, null, -1)
    ]), 2)),
    e.isSucking ? (h(), p("svg", $, t[2] || (t[2] = [
      x('<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="4"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g>', 1)
    ]))) : f("", !0)
  ]);
}
const P = /* @__PURE__ */ S(b, [["render", E]]);
export {
  P as default
};
