'use strict'
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' },
})
const l = require('vue')
/* empty css          */ const r = require('../_virtual/plugin-vue_export-helper.js'),
  u = l.defineComponent({
    props: {
      hsv: { type: Object, default: null },
      width: { type: Number, default: 15 },
      height: { type: Number, default: 152 },
    },
    emits: ['selectHue'],
    data() {
      return { slideHueStyle: {} }
    },
    mounted() {
      this.renderColor(), this.renderSlide()
    },
    methods: {
      renderColor() {
        const t = this.$refs.canvasHue,
          s = this.width,
          o = this.height,
          n = t.getContext('2d', { willReadFrequently: !0 })
        ;(t.width = s), (t.height = o)
        const e = n.createLinearGradient(0, 0, 0, o)
        e.addColorStop(0, '#FF0000'),
          e.addColorStop(0.17 * 1, '#FF00FF'),
          e.addColorStop(0.17 * 2, '#0000FF'),
          e.addColorStop(0.17 * 3, '#00FFFF'),
          e.addColorStop(0.17 * 4, '#00FF00'),
          e.addColorStop(0.17 * 5, '#FFFF00'),
          e.addColorStop(1, '#FF0000'),
          (n.fillStyle = e),
          n.fillRect(0, 0, s, o)
      },
      renderSlide() {
        this.slideHueStyle = {
          top: (1 - this.hsv.h / 360) * this.height - 2 + 'px',
        }
      },
      selectHue(t) {
        const { top: s } = this.$el.getBoundingClientRect()
        t.target.getContext('2d', { willReadFrequently: !0 })
        const o = (e) => {
          let i = e.clientY - s
          i < 0 && (i = 0),
            i > this.height && (i = this.height),
            (this.slideHueStyle = { top: i - 2 + 'px' })
          const d = 360 - (i / this.height) * 360
          this.$emit('selectHue', d)
        }
        o(t)
        const n = () => {
          document.removeEventListener('mousemove', o),
            document.removeEventListener('mouseup', n)
        }
        document.addEventListener('mousemove', o),
          document.addEventListener('mouseup', n)
      },
    },
  }),
  a = { ref: 'canvasHue' }
function h(t, s, o, n, e, i) {
  return (
    l.openBlock(),
    l.createElementBlock(
      'div',
      {
        class: 'hue',
        onMousedown:
          s[0] ||
          (s[0] = l.withModifiers(
            (...d) => t.selectHue && t.selectHue(...d),
            ['prevent', 'stop']
          )),
      },
      [
        l.createElementVNode('canvas', a, null, 512),
        l.createElementVNode(
          'div',
          { style: l.normalizeStyle(t.slideHueStyle), class: 'slide' },
          null,
          4
        ),
      ],
      32
    )
  )
}
const c = r.default(u, [['render', h]])
exports.default = c
