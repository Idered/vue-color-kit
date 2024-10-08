'use strict'
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' },
})
const l = require('vue')
/* empty css          */ const d = require('../_virtual/plugin-vue_export-helper.js'),
  i = l.defineComponent({
    props: {
      name: { type: String, default: '' },
      color: { type: String, default: '' },
    },
    emits: ['inputColor', 'inputFocus', 'inputBlur'],
    setup(o, { emit: e }) {
      return {
        modelColor: l.computed({
          get() {
            return o.color || ''
          },
          set(n) {
            e('inputColor', n)
          },
        }),
        handleFocus: (n) => {
          e('inputFocus', n)
        },
        handleBlur: (n) => {
          e('inputBlur', n)
        },
      }
    },
  }),
  a = { class: 'color-type' },
  p = { class: 'name' }
function c(o, e, r, u, s, n) {
  return (
    l.openBlock(),
    l.createElementBlock('div', a, [
      l.createElementVNode('span', p, l.toDisplayString(o.name), 1),
      l.withDirectives(
        l.createElementVNode(
          'input',
          {
            'onUpdate:modelValue': e[0] || (e[0] = (t) => (o.modelColor = t)),
            class: 'value',
            onFocus:
              e[1] || (e[1] = (...t) => o.handleFocus && o.handleFocus(...t)),
            onBlur:
              e[2] || (e[2] = (...t) => o.handleBlur && o.handleBlur(...t)),
          },
          null,
          544
        ),
        [[l.vModelText, o.modelColor]]
      ),
    ])
  )
}
const m = d.default(i, [['render', c]])
exports.default = m
