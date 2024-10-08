'use strict'
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' },
})
const e = require('vue'),
  d = require('./composible.js')
/* empty css             */ const y = require('../_virtual/plugin-vue_export-helper.js'),
  m = e.defineComponent({
    name: 'ColorPicker',
    props: {
      color: { type: String, default: '#000000' },
      colorsDefault: { type: Array, default: () => [] },
      colorsHistoryKey: { type: String, default: '' },
    },
    emits: ['selectColor'],
    setup(o, { emit: i }) {
      const s = e.ref(),
        n = e.ref([]),
        c = e.ref()
      o.colorsHistoryKey &&
        localStorage &&
        (n.value = JSON.parse(localStorage.getItem(o.colorsHistoryKey)) || []),
        (c.value = d.createAlphaSquare(4).toDataURL()),
        e.onUnmounted(() => {
          a(s.value)
        })
      function a(t) {
        if (!t) return
        const r = n.value || [],
          u = r.indexOf(t)
        u >= 0 && r.splice(u, 1),
          r.length >= 8 && (r.length = 7),
          r.unshift(t),
          (n.value = r || []),
          localStorage &&
            o.colorsHistoryKey &&
            localStorage.setItem(o.colorsHistoryKey, JSON.stringify(r))
      }
      function l(t) {
        i('selectColor', t)
      }
      return {
        setColorsHistory: a,
        colorsHistory: n,
        color: s,
        imgAlphaBase64: c,
        selectColor: l,
      }
    },
  }),
  f = { class: 'colors' },
  k = ['onClick'],
  p = { key: 0, class: 'colors history' },
  g = ['onClick']
function h(o, i, s, n, c, a) {
  return (
    e.openBlock(),
    e.createElementBlock('div', null, [
      e.createElementVNode('ul', f, [
        (e.openBlock(!0),
        e.createElementBlock(
          e.Fragment,
          null,
          e.renderList(
            o.colorsDefault,
            (l) => (
              e.openBlock(),
              e.createElementBlock(
                'li',
                { key: l, class: 'item', onClick: (t) => o.selectColor(l) },
                [
                  e.createElementVNode(
                    'div',
                    {
                      style: e.normalizeStyle({
                        background: `url(${o.imgAlphaBase64})`,
                      }),
                      class: 'alpha',
                    },
                    null,
                    4
                  ),
                  e.createElementVNode(
                    'div',
                    {
                      style: e.normalizeStyle({ background: l }),
                      class: 'color',
                    },
                    null,
                    4
                  ),
                ],
                8,
                k
              )
            )
          ),
          128
        )),
      ]),
      o.colorsHistory.length
        ? (e.openBlock(),
          e.createElementBlock('ul', p, [
            (e.openBlock(!0),
            e.createElementBlock(
              e.Fragment,
              null,
              e.renderList(
                o.colorsHistory,
                (l) => (
                  e.openBlock(),
                  e.createElementBlock(
                    'li',
                    { key: l, class: 'item', onClick: (t) => o.selectColor(l) },
                    [
                      e.createElementVNode(
                        'div',
                        {
                          style: e.normalizeStyle({
                            background: `url(${o.imgAlphaBase64})`,
                          }),
                          class: 'alpha',
                        },
                        null,
                        4
                      ),
                      e.createElementVNode(
                        'div',
                        {
                          style: e.normalizeStyle({ background: l }),
                          class: 'color',
                        },
                        null,
                        4
                      ),
                    ],
                    8,
                    g
                  )
                )
              ),
              128
            )),
          ]))
        : e.createCommentVNode('', !0),
    ])
  )
}
const v = y.default(m, [['render', h]])
exports.default = v
