'use strict'
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' },
})
const s = require('vue'),
  d = require('./composible.js')
/* empty css                 */ const v = require('../_virtual/plugin-vue_export-helper.js'),
  f = s.defineComponent({
    props: {
      color: { type: String, default: '#000000' },
      hsv: { type: Object, default: null },
      size: { type: Number, default: 152 },
    },
    emits: ['selectSaturation'],
    data() {
      return { slideSaturationStyle: {} }
    },
    mounted() {
      this.renderColor(), this.renderSlide()
    },
    methods: {
      renderColor() {
        const t = this.$refs.canvasSaturation,
          e = this.size,
          i = t.getContext('2d', { willReadFrequently: !0 })
        ;(t.width = e),
          (t.height = e),
          (i.fillStyle = `hsl(${this.hsv.h}deg 100% 50%)`),
          i.fillRect(0, 0, e, e),
          d.createLinearGradient(
            'l',
            i,
            e,
            e,
            '#FFFFFF',
            'rgba(255,255,255,0)'
          ),
          d.createLinearGradient('p', i, e, e, 'rgba(0,0,0,0)', '#000000')
      },
      renderSlide() {
        this.slideSaturationStyle = {
          left: this.hsv.s * this.size - 5 + 'px',
          top: (1 - this.hsv.v) * this.size - 5 + 'px',
        }
      },
      selectSaturation(t) {
        const { top: e, left: i } = this.$el.getBoundingClientRect(),
          u = t.target.getContext('2d', { willReadFrequently: !0 }),
          r = (a) => {
            let n = a.clientX - i,
              o = a.clientY - e
            n < 0 && (n = 0),
              o < 0 && (o = 0),
              n > this.size && (n = this.size),
              o > this.size && (o = this.size),
              (this.slideSaturationStyle = {
                left: n - 5 + 'px',
                top: o - 5 + 'px',
              })
            const c = u.getImageData(
                Math.min(n, this.size - 1),
                Math.min(o, this.size - 1),
                1,
                1
              ),
              [h, m, p] = c.data
            this.$emit('selectSaturation', { r: h, g: m, b: p })
          }
        r(t)
        const l = () => {
          document.removeEventListener('mousemove', r),
            document.removeEventListener('mouseup', l)
        }
        document.addEventListener('mousemove', r),
          document.addEventListener('mouseup', l)
      },
    },
  }),
  S = { ref: 'canvasSaturation' }
function g(t, e, i, u, r, l) {
  return (
    s.openBlock(),
    s.createElementBlock(
      'div',
      {
        class: 'saturation',
        onMousedown:
          e[0] ||
          (e[0] = s.withModifiers(
            (...a) => t.selectSaturation && t.selectSaturation(...a),
            ['prevent', 'stop']
          )),
      },
      [
        s.createElementVNode('canvas', S, null, 512),
        s.createElementVNode(
          'div',
          { style: s.normalizeStyle(t.slideSaturationStyle), class: 'slide' },
          null,
          4
        ),
      ],
      32
    )
  )
}
const y = v.default(f, [['render', g]])
exports.default = y
