function d(t) {
  let e = { r: 0, g: 0, b: 0, a: 1 };
  /#/.test(t) ? e = f(t) : /rgb/.test(t) ? e = o(t) : typeof t == "string" ? e = o(`rgba(${t})`) : Object.prototype.toString.call(t) === "[object Object]" && (e = t);
  const { r: n, g: l, b: c, a: i } = e, { h: r, s: a, v: s } = u(e);
  return { r: n, g: l, b: c, a: i === void 0 ? 1 : i, h: r, s: a, v: s };
}
function p(t) {
  const e = document.createElement("canvas"), n = e.getContext("2d", { willReadFrequently: !0 }), l = t * 2;
  return e.width = l, e.height = l, n.fillStyle = "#ffffff", n.fillRect(0, 0, l, l), n.fillStyle = "#ccd5db", n.fillRect(0, 0, t, t), n.fillRect(t, t, t, t), e;
}
function m(t, e, n, l, c, i) {
  const r = t === "l", a = e.createLinearGradient(
    0,
    0,
    r ? n : 0,
    r ? 0 : l
  );
  a.addColorStop(0.01, c), a.addColorStop(0.99, i), e.fillStyle = a, e.fillRect(0, 0, n, l);
}
function h({ r: t, g: e, b: n }, l) {
  const c = (r) => ("0" + Number(r).toString(16)).slice(-2), i = `#${c(t)}${c(e)}${c(n)}`;
  return l ? i.toUpperCase() : i;
}
function f(t) {
  t = t.slice(1);
  const e = (n) => parseInt(n, 16) || 0;
  return {
    r: e(t.slice(0, 2)),
    g: e(t.slice(2, 4)),
    b: e(t.slice(4, 6))
  };
}
function o(t) {
  return typeof t == "string" ? (t = (/rgba?\((.*?)\)/.exec(t) || ["", "0,0,0,1"])[1].split(","), {
    r: Number(t[0]) || 0,
    g: Number(t[1]) || 0,
    b: Number(t[2]) || 0,
    a: Number(t[3] ? t[3] : 1)
    // Avoid the case of 0
  }) : t;
}
function u({ r: t, g: e, b: n }) {
  t = t / 255, e = e / 255, n = n / 255;
  const l = Math.max(t, e, n), c = Math.min(t, e, n), i = l - c;
  let r = 0;
  l === c ? r = 0 : l === t ? e >= n ? r = 60 * (e - n) / i : r = 60 * (e - n) / i + 360 : l === e ? r = 60 * (n - t) / i + 120 : l === n && (r = 60 * (t - e) / i + 240), r = Math.floor(r);
  let a = parseFloat((l === 0 ? 0 : 1 - c / l).toFixed(2)), s = parseFloat(l.toFixed(2));
  return { h: r, s: a, v: s };
}
function b({ h: t, s: e, v: n }) {
  let l = (c, i = (c + t / 60) % 6) => n - n * e * Math.max(Math.min(i, 4 - i, 1), 0);
  return {
    r: l(5) * 255,
    g: l(3) * 255,
    b: l(1) * 255
  };
}
export {
  p as createAlphaSquare,
  m as createLinearGradient,
  f as hex2rgb,
  b as hsv2rgb,
  h as rgb2hex,
  u as rgb2hsv,
  o as rgb2rgba,
  d as setColorValue
};
