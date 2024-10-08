'use strict'
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' },
})
const o = require('vue'),
  a = require('./composible.js')
/* empty css            */ const h = require('../_virtual/plugin-vue_export-helper.js'),
  d = o.defineComponent({
    props: {
      color: { type: String, default: '#000000' },
      rgba: { type: Object, default: null },
      width: { type: Number, default: 15 },
      height: { type: Number, default: 152 },
    },
    emits: ['selectAlpha'],
    data() {
      return { slideAlphaStyle: {}, alphaSize: 5 }
    },
    watch: {
      color() {
        this.renderColor()
      },
      'rgba.a'() {
        this.renderSlide()
      },
    },
    mounted() {
      this.renderColor(), this.renderSlide()
    },
    methods: {
      renderColor() {
        const t = this.$refs.canvasAlpha,
          l = this.width,
          s = this.height,
          i = this.alphaSize,
          r = a.createAlphaSquare(i),
          e = t.getContext('2d', { willReadFrequently: !0 })
        ;(t.width = l),
          (t.height = s),
          (e.fillStyle = e.createPattern(r, 'repeat')),
          e.fillRect(0, 0, l, s),
          a.createLinearGradient(
            'p',
            e,
            l,
            s,
            'rgba(255,255,255,0)',
            this.color
          )
      },
      renderSlide() {
        this.slideAlphaStyle = { top: this.rgba.a * this.height - 2 + 'px' }
      },
      selectAlpha(t) {
        const { top: l } = this.$el.getBoundingClientRect(),
          s = (r) => {
            let e = r.clientY - l
            e < 0 && (e = 0), e > this.height && (e = this.height)
            let n = parseFloat((e / this.height).toFixed(2))
            this.$emit('selectAlpha', n)
          }
        s(t)
        const i = () => {
          document.removeEventListener('mousemove', s),
            document.removeEventListener('mouseup', i)
        }
        document.addEventListener('mousemove', s),
          document.addEventListener('mouseup', i)
      },
    },
  }),
  c = { ref: 'canvasAlpha' }
function u(t, l, s, i, r, e) {
  return (
    o.openBlock(),
    o.createElementBlock(
      'div',
      {
        class: 'color-alpha',
        onMousedown:
          l[0] ||
          (l[0] = o.withModifiers(
            (...n) => t.selectAlpha && t.selectAlpha(...n),
            ['prevent', 'stop']
          )),
      },
      [
        o.createElementVNode('canvas', c, null, 512),
        o.createElementVNode(
          'div',
          { style: o.normalizeStyle(t.slideAlphaStyle), class: 'slide' },
          null,
          4
        ),
      ],
      32
    )
  )
}
const p = h.default(d, [['render', u]])
exports.default = p
