'use strict'
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
function d(e) {
  let t = { r: 0, g: 0, b: 0, a: 1 }
  ;/#/.test(e)
    ? (t = f(e))
    : /rgb/.test(e)
    ? (t = o(e))
    : typeof e == 'string'
    ? (t = o(`rgba(${e})`))
    : Object.prototype.toString.call(e) === '[object Object]' && (t = e)
  const { r: n, g: r, b: a, a: l } = t,
    { h: i, s: c, v: s } = u(t)
  return { r: n, g: r, b: a, a: l === void 0 ? 1 : l, h: i, s: c, v: s }
}
function b(e) {
  const t = document.createElement('canvas'),
    n = t.getContext('2d', { willReadFrequently: !0 }),
    r = e * 2
  return (
    (t.width = r),
    (t.height = r),
    (n.fillStyle = '#ffffff'),
    n.fillRect(0, 0, r, r),
    (n.fillStyle = '#ccd5db'),
    n.fillRect(0, 0, e, e),
    n.fillRect(e, e, e, e),
    t
  )
}
function g(e, t, n, r, a, l) {
  const i = e === 'l',
    c = t.createLinearGradient(0, 0, i ? n : 0, i ? 0 : r)
  c.addColorStop(0.01, a),
    c.addColorStop(0.99, l),
    (t.fillStyle = c),
    t.fillRect(0, 0, n, r)
}
function h({ r: e, g: t, b: n }, r) {
  const a = (i) => ('0' + Number(i).toString(16)).slice(-2),
    l = `#${a(e)}${a(t)}${a(n)}`
  return r ? l.toUpperCase() : l
}
function f(e) {
  e = e.slice(1)
  const t = (n) => parseInt(n, 16) || 0
  return { r: t(e.slice(0, 2)), g: t(e.slice(2, 4)), b: t(e.slice(4, 6)) }
}
function o(e) {
  return typeof e == 'string'
    ? ((e = (/rgba?\((.*?)\)/.exec(e) || ['', '0,0,0,1'])[1].split(',')),
      {
        r: Number(e[0]) || 0,
        g: Number(e[1]) || 0,
        b: Number(e[2]) || 0,
        a: Number(e[3] ? e[3] : 1),
      })
    : e
}
function u({ r: e, g: t, b: n }) {
  ;(e = e / 255), (t = t / 255), (n = n / 255)
  const r = Math.max(e, t, n),
    a = Math.min(e, t, n),
    l = r - a
  let i = 0
  r === a
    ? (i = 0)
    : r === e
    ? t >= n
      ? (i = (60 * (t - n)) / l)
      : (i = (60 * (t - n)) / l + 360)
    : r === t
    ? (i = (60 * (n - e)) / l + 120)
    : r === n && (i = (60 * (e - t)) / l + 240),
    (i = Math.floor(i))
  let c = parseFloat((r === 0 ? 0 : 1 - a / r).toFixed(2)),
    s = parseFloat(r.toFixed(2))
  return { h: i, s: c, v: s }
}
function p({ h: e, s: t, v: n }) {
  let r = (a, l = (a + e / 60) % 6) =>
    n - n * t * Math.max(Math.min(l, 4 - l, 1), 0)
  return { r: r(5) * 255, g: r(3) * 255, b: r(1) * 255 }
}
exports.createAlphaSquare = b
exports.createLinearGradient = g
exports.hex2rgb = f
exports.hsv2rgb = p
exports.rgb2hex = h
exports.rgb2hsv = u
exports.rgb2rgba = o
exports.setColorValue = d
