'use strict'
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' },
})
const l = require('vue'),
  c = require('./composible.js'),
  a = require('../_virtual/plugin-vue_export-helper.js'),
  s = l.defineComponent({
    props: {
      color: { type: String, default: '#000000' },
      width: { type: Number, default: 100 },
      height: { type: Number, default: 30 },
    },
    data() {
      return { alphaSize: 5 }
    },
    watch: {
      color() {
        this.renderColor()
      },
    },
    mounted() {
      this.renderColor()
    },
    methods: {
      renderColor() {
        const t = this.$el,
          r = this.width,
          o = this.height,
          i = this.alphaSize,
          n = c.createAlphaSquare(i),
          e = t.getContext('2d', { willReadFrequently: !0 })
        ;(t.width = r),
          (t.height = o),
          (e.fillStyle = e.createPattern(n, 'repeat')),
          e.fillRect(0, 0, r, o),
          (e.fillStyle = this.color),
          e.fillRect(0, 0, r, o)
      },
    },
  })
function u(t, r, o, i, n, e) {
  return l.openBlock(), l.createElementBlock('canvas')
}
const h = a.default(s, [['render', u]])
exports.default = h
