'use strict'
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' },
})
const t = require('vue'),
  u = require('./composible.js'),
  S = require('./Saturation.vue.js'),
  b = require('./Hue.vue.js'),
  m = require('./Alpha.vue.js'),
  v = require('./Preview.vue.js'),
  C = require('./Sucker.vue.js'),
  f = require('./Box.vue.js'),
  k = require('./Colors.vue.js')
/* empty css                  */ const $ = require('../_virtual/plugin-vue_export-helper.js'),
  F = t.defineComponent({
    components: {
      Saturation: S.default,
      Hue: b.default,
      Alpha: m.default,
      Preview: v.default,
      Sucker: C.default,
      Box: f.default,
      Colors: k.default,
    },
    emits: ['changeColor', 'openSucker', 'inputFocus', 'inputBlur'],
    props: {
      color: { type: String, default: '#000000' },
      theme: { type: String, default: 'dark' },
      suckerHide: { type: Boolean, default: !0 },
      suckerCanvas: { type: null, default: null },
      suckerArea: { type: Array, default: () => [] },
      colorsDefault: {
        type: Array,
        default: () => [
          '#000000',
          '#FFFFFF',
          '#FF1900',
          '#F47365',
          '#FFB243',
          '#FFE623',
          '#6EFF2A',
          '#1BC7B1',
          '#00BEFF',
          '#2E81FF',
          '#5D61FF',
          '#FF89CF',
          '#FC3CAD',
          '#BF3DCE',
          '#8E00A7',
          'rgba(0,0,0,0)',
        ],
      },
      colorsHistoryKey: { type: String, default: 'vue-colorpicker-history' },
    },
    data() {
      return {
        hueWidth: 15,
        hueHeight: 152,
        previewHeight: 30,
        modelRgba: '',
        modelHex: '',
        r: 0,
        g: 0,
        b: 0,
        a: 1,
        h: 0,
        s: 0,
        v: 0,
      }
    },
    computed: {
      isLightTheme() {
        return this.theme === 'light'
      },
      totalWidth() {
        return this.hueHeight + (this.hueWidth + 8) * 2
      },
      previewWidth() {
        return this.totalWidth - (this.suckerHide ? 0 : this.previewHeight)
      },
      rgba() {
        return { r: this.r, g: this.g, b: this.b, a: this.a }
      },
      hsv() {
        return { h: this.h, s: this.s, v: this.v }
      },
      rgbString() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`
      },
      rgbaStringShort() {
        return `${this.r}, ${this.g}, ${this.b}, ${this.a}`
      },
      rgbaString() {
        return `rgba(${this.rgbaStringShort})`
      },
      hexString() {
        return u.rgb2hex(this.rgba, !0)
      },
    },
    created() {
      Object.assign(this, u.setColorValue(this.color)),
        this.setText(),
        this.$watch('rgba', () => {
          this.$emit('changeColor', {
            rgba: this.rgba,
            hsv: this.hsv,
            hex: this.modelHex,
          })
        })
    },
    methods: {
      selectSaturation(e) {
        const { r, g: o, b: i, h: n, s: l, v: s } = u.setColorValue(e)
        Object.assign(this, { r, g: o, b: i, h: n, s: l, v: s }), this.setText()
      },
      handleFocus(e) {
        this.$emit('inputFocus', e)
      },
      handleBlur(e) {
        this.$emit('inputBlur', e)
      },
      selectHue(e) {
        const r = this.hsv.s,
          o = this.hsv.v,
          i = u.hsv2rgb({ h: e, s: r, v: o }),
          { r: n, g: l, b: s } = u.setColorValue(i)
        Object.assign(this, { r: n, g: l, b: s, h: e, s: r, v: o }),
          this.setText(),
          this.$nextTick(() => {
            this.$refs.saturation.renderColor(),
              this.$refs.saturation.renderSlide()
          })
      },
      selectAlpha(e) {
        ;(this.a = e), this.setText()
      },
      inputHex(e) {
        const { r, g: o, b: i, a: n, h: l, s, v: h } = u.setColorValue(e)
        Object.assign(this, { r, g: o, b: i, a: n, h: l, s, v: h }),
          (this.modelHex = e),
          (this.modelRgba = this.rgbaStringShort),
          this.$nextTick(() => {
            this.$refs.saturation.renderColor(),
              this.$refs.saturation.renderSlide(),
              this.$refs.hue.renderSlide()
          })
      },
      inputRgba(e) {
        const { r, g: o, b: i, a: n, h: l, s, v: h } = u.setColorValue(e)
        Object.assign(this, { r, g: o, b: i, a: n, h: l, s, v: h }),
          (this.modelHex = this.hexString),
          (this.modelRgba = e),
          this.$nextTick(() => {
            this.$refs.saturation.renderColor(),
              this.$refs.saturation.renderSlide(),
              this.$refs.hue.renderSlide()
          })
      },
      setText() {
        ;(this.modelHex = this.hexString),
          (this.modelRgba = this.rgbaStringShort)
      },
      openSucker(e) {
        this.$emit('openSucker', e)
      },
      selectSucker(e) {
        const { r, g: o, b: i, a: n, h: l, s, v: h } = u.setColorValue(e)
        Object.assign(this, { r, g: o, b: i, a: n, h: l, s, v: h }),
          this.setText(),
          this.$nextTick(() => {
            this.$refs.saturation.renderColor(),
              this.$refs.saturation.renderSlide(),
              this.$refs.hue.renderSlide()
          })
      },
      selectColor(e) {
        const { r, g: o, b: i, a: n, h: l, s, v: h } = u.setColorValue(e)
        Object.assign(this, { r, g: o, b: i, a: n, h: l, s, v: h }),
          this.setText(),
          this.$nextTick(() => {
            this.$refs.saturation.renderColor(),
              this.$refs.saturation.renderSlide(),
              this.$refs.hue.renderSlide()
          })
      },
    },
  }),
  H = { class: 'color-set' }
function y(e, r, o, i, n, l) {
  const s = t.resolveComponent('Saturation'),
    h = t.resolveComponent('Hue'),
    c = t.resolveComponent('Alpha'),
    d = t.resolveComponent('Preview'),
    g = t.resolveComponent('Sucker'),
    a = t.resolveComponent('Box'),
    p = t.resolveComponent('Colors')
  return (
    t.openBlock(),
    t.createElementBlock(
      'div',
      {
        class: t.normalizeClass(['hu-color-picker', { light: e.isLightTheme }]),
        style: t.normalizeStyle({ width: e.totalWidth + 'px' }),
      },
      [
        t.createElementVNode('div', H, [
          t.createVNode(
            s,
            {
              ref: 'saturation',
              color: e.rgbString,
              hsv: e.hsv,
              size: e.hueHeight,
              onSelectSaturation: e.selectSaturation,
            },
            null,
            8,
            ['color', 'hsv', 'size', 'onSelectSaturation']
          ),
          t.createVNode(
            h,
            {
              ref: 'hue',
              hsv: e.hsv,
              width: e.hueWidth,
              height: e.hueHeight,
              onSelectHue: e.selectHue,
            },
            null,
            8,
            ['hsv', 'width', 'height', 'onSelectHue']
          ),
          t.createVNode(
            c,
            {
              ref: 'alpha',
              color: e.rgbString,
              rgba: e.rgba,
              width: e.hueWidth,
              height: e.hueHeight,
              onSelectAlpha: e.selectAlpha,
            },
            null,
            8,
            ['color', 'rgba', 'width', 'height', 'onSelectAlpha']
          ),
        ]),
        t.createElementVNode(
          'div',
          {
            style: t.normalizeStyle({ height: e.previewHeight + 'px' }),
            class: 'color-show',
          },
          [
            t.createVNode(
              d,
              {
                color: e.rgbaString,
                width: e.previewWidth,
                height: e.previewHeight,
              },
              null,
              8,
              ['color', 'width', 'height']
            ),
            e.suckerHide
              ? t.createCommentVNode('', !0)
              : (t.openBlock(),
                t.createBlock(
                  g,
                  {
                    key: 0,
                    'sucker-canvas': e.suckerCanvas,
                    'sucker-area': e.suckerArea,
                    onOpenSucker: e.openSucker,
                    onSelectSucker: e.selectSucker,
                  },
                  null,
                  8,
                  [
                    'sucker-canvas',
                    'sucker-area',
                    'onOpenSucker',
                    'onSelectSucker',
                  ]
                )),
          ],
          4
        ),
        t.createVNode(
          a,
          {
            name: 'HEX',
            color: e.modelHex,
            onInputColor: e.inputHex,
            onInputFocus: e.handleFocus,
            onInputBlur: e.handleBlur,
          },
          null,
          8,
          ['color', 'onInputColor', 'onInputFocus', 'onInputBlur']
        ),
        t.createVNode(
          a,
          {
            name: 'RGBA',
            color: e.modelRgba,
            onInputColor: e.inputRgba,
            onInputFocus: e.handleFocus,
            onInputBlur: e.handleBlur,
          },
          null,
          8,
          ['color', 'onInputColor', 'onInputFocus', 'onInputBlur']
        ),
        t.createVNode(
          p,
          {
            color: e.rgbaString,
            'colors-default': e.colorsDefault,
            'colors-history-key': e.colorsHistoryKey,
            onSelectColor: e.selectColor,
          },
          null,
          8,
          ['color', 'colors-default', 'colors-history-key', 'onSelectColor']
        ),
        t.renderSlot(e.$slots, 'default'),
      ],
      6
    )
  )
}
const B = $.default(F, [['render', y]])
exports.default = B
