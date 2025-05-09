﻿function replaceUrlParametersAndReload() {
    window.location = window.location.href.split("?")[0]
}
if (! function (n, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function (n) {
        if (!n.document) throw new Error("jQuery requires a window with a document");
        return t(n)
    } : t(n)
}("undefined" != typeof window ? window : this, function (n, t) {
    "use strict";

    function gi(n, t) {
        t = t || u;
        var i = t.createElement("script");
        i.text = n;
        t.head.appendChild(i).parentNode.removeChild(i)
    }

    function ui(n) {
        var t = !!n && "length" in n && n.length,
            r = i.type(n);
        return "function" !== r && !i.isWindow(n) && ("array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in n)
    }

    function fi(n, t, r) {
        return i.isFunction(t) ? i.grep(n, function (n, i) {
            return !!t.call(n, i, n) !== r
        }) : t.nodeType ? i.grep(n, function (n) {
            return n === t !== r
        }) : "string" != typeof t ? i.grep(n, function (n) {
            return ot.call(t, n) > -1 !== r
        }) : df.test(t) ? i.filter(t, n, r) : (t = i.filter(t, n), i.grep(n, function (n) {
            return ot.call(t, n) > -1 !== r && 1 === n.nodeType
        }))
    }

    function hr(n, t) {
        while ((n = n[t]) && 1 !== n.nodeType);
        return n
    }

    function gf(n) {
        var t = {};
        return i.each(n.match(h) || [], function (n, i) {
            t[i] = !0
        }), t
    }

    function g(n) {
        return n
    }

    function pt(n) {
        throw n;
    }

    function cr(n, t, r) {
        var u;
        try {
            n && i.isFunction(u = n.promise) ? u.call(n).done(t).fail(r) : n && i.isFunction(u = n.then) ? u.call(n, t, r) : t.call(void 0, n)
        } catch (n) {
            r.call(void 0, n)
        }
    }

    function bt() {
        u.removeEventListener("DOMContentLoaded", bt);
        n.removeEventListener("load", bt);
        i.ready()
    }

    function ht() {
        this.expando = i.expando + ht.uid++
    }

    function ie(n) {
        return "true" === n || "false" !== n && ("null" === n ? null : n === +n + "" ? +n : ne.test(n) ? JSON.parse(n) : n)
    }

    function ar(n, t, i) {
        var r;
        if (void 0 === i && 1 === n.nodeType)
            if (r = "data-" + t.replace(te, "-$&").toLowerCase(), i = n.getAttribute(r), "string" == typeof i) {
                try {
                    i = ie(i)
                } catch (u) { }
                e.set(n, t, i)
            } else i = void 0;
        return i
    }

    function pr(n, t, r, u) {
        var h, e = 1,
            l = 20,
            c = u ? function () {
                return u.cur()
            } : function () {
                return i.css(n, t, "")
            },
            s = c(),
            o = r && r[3] || (i.cssNumber[t] ? "" : "px"),
            f = (i.cssNumber[t] || "px" !== o && +s) && ct.exec(i.css(n, t));
        if (f && f[3] !== o) {
            o = o || f[3];
            r = r || [];
            f = +s || 1;
            do e = e || ".5", f /= e, i.style(n, t, f + o); while (e !== (e = c() / s) && 1 !== e && --l)
        }
        return r && (f = +f || +s || 0, h = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = o, u.start = f, u.end = h)), h
    }

    function re(n) {
        var r, f = n.ownerDocument,
            u = n.nodeName,
            t = ei[u];
        return t ? t : (r = f.body.appendChild(f.createElement(u)), t = i.css(r, "display"), r.parentNode.removeChild(r), "none" === t && (t = "block"), ei[u] = t, t)
    }

    function nt(n, t) {
        for (var e, u, f = [], i = 0, o = n.length; i < o; i++) u = n[i], u.style && (e = u.style.display, t ? ("none" === e && (f[i] = r.get(u, "display") || null, f[i] || (u.style.display = "")), "" === u.style.display && kt(u) && (f[i] = re(u))) : "none" !== e && (f[i] = "none", r.set(u, "display", e)));
        for (i = 0; i < o; i++) null != f[i] && (n[i].style.display = f[i]);
        return n
    }

    function o(n, t) {
        var r;
        return r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : [], void 0 === t || t && i.nodeName(n, t) ? i.merge([n], r) : r
    }

    function oi(n, t) {
        for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
    }

    function gr(n, t, r, u, f) {
        for (var e, s, p, a, w, v, h = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
            if (e = n[l], e || 0 === e)
                if ("object" === i.type(e)) i.merge(y, e.nodeType ? [e] : e);
                else if (dr.test(e)) {
                    for (s = s || h.appendChild(t.createElement("div")), p = (br.exec(e) || ["", ""])[1].toLowerCase(), a = c[p] || c._default, s.innerHTML = a[1] + i.htmlPrefilter(e) + a[2], v = a[0]; v--;) s = s.lastChild;
                    i.merge(y, s.childNodes);
                    s = h.firstChild;
                    s.textContent = ""
                } else y.push(t.createTextNode(e));
        for (h.textContent = "", l = 0; e = y[l++];)
            if (u && i.inArray(e, u) > -1) f && f.push(e);
            else if (w = i.contains(e.ownerDocument, e), s = o(h.appendChild(e), "script"), w && oi(s), r)
                for (v = 0; e = s[v++];) kr.test(e.type || "") && r.push(e);
        return h
    }

    function gt() {
        return !0
    }

    function tt() {
        return !1
    }

    function tu() {
        try {
            return u.activeElement
        } catch (n) { }
    }

    function si(n, t, r, u, f, e) {
        var o, s;
        if ("object" == typeof t) {
            "string" != typeof r && (u = u || r, r = void 0);
            for (s in t) si(n, s, r, u, t[s], e);
            return n
        }
        if (null == u && null == f ? (f = r, u = r = void 0) : null == f && ("string" == typeof r ? (f = u, u = void 0) : (f = u, u = r, r = void 0)), f === !1) f = tt;
        else if (!f) return n;
        return 1 === e && (o = f, f = function (n) {
            return i().off(n), o.apply(this, arguments)
        }, f.guid = o.guid || (o.guid = i.guid++)), n.each(function () {
            i.event.add(this, t, f, u, r)
        })
    }

    function iu(n, t) {
        return i.nodeName(n, "table") && i.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n : n
    }

    function le(n) {
        return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n
    }

    function ae(n) {
        var t = he.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"), n
    }

    function ru(n, t) {
        var u, c, f, s, h, l, a, o;
        if (1 === t.nodeType) {
            if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), o = s.events)) {
                delete h.handle;
                h.events = {};
                for (f in o)
                    for (u = 0, c = o[f].length; u < c; u++) i.event.add(t, f, o[f][u])
            }
            e.hasData(n) && (l = e.access(n), a = i.extend({}, l), e.set(t, a))
        }
    }

    function ve(n, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && wr.test(n.type) ? t.checked = n.checked : "input" !== i && "textarea" !== i || (t.defaultValue = n.defaultValue)
    }

    function it(n, t, u, e) {
        t = bi.apply([], t);
        var l, p, c, a, s, w, h = 0,
            v = n.length,
            k = v - 1,
            y = t[0],
            b = i.isFunction(y);
        if (b || v > 1 && "string" == typeof y && !f.checkClone && se.test(y)) return n.each(function (i) {
            var r = n.eq(i);
            b && (t[0] = y.call(this, i, r.html()));
            it(r, t, u, e)
        });
        if (v && (l = gr(t, n[0].ownerDocument, !1, n, e), p = l.firstChild, 1 === l.childNodes.length && (l = p), p || e)) {
            for (c = i.map(o(l, "script"), le), a = c.length; h < v; h++) s = l, h !== k && (s = i.clone(s, !0, !0), a && i.merge(c, o(s, "script"))), u.call(n[h], s, h);
            if (a)
                for (w = c[c.length - 1].ownerDocument, i.map(c, ae), h = 0; h < a; h++) s = c[h], kr.test(s.type || "") && !r.access(s, "globalEval") && i.contains(w, s) && (s.src ? i._evalUrl && i._evalUrl(s.src) : gi(s.textContent.replace(ce, ""), w))
        }
        return n
    }

    function uu(n, t, r) {
        for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++) r || 1 !== u.nodeType || i.cleanData(o(u)), u.parentNode && (r && i.contains(u.ownerDocument, u) && oi(o(u, "script")), u.parentNode.removeChild(u));
        return n
    }

    function lt(n, t, r) {
        var o, s, h, u, e = n.style;
        return r = r || ni(n), r && (u = r.getPropertyValue(t) || r[t], "" !== u || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), !f.pixelMarginRight() && hi.test(u) && fu.test(t) && (o = e.width, s = e.minWidth, h = e.maxWidth, e.minWidth = e.maxWidth = e.width = u, u = r.width, e.width = o, e.minWidth = s, e.maxWidth = h)), void 0 !== u ? u + "" : u
    }

    function eu(n, t) {
        return {
            get: function () {
                return n() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function cu(n) {
        if (n in hu) return n;
        for (var i = n[0].toUpperCase() + n.slice(1), t = su.length; t--;)
            if (n = su[t] + i, n in hu) return n
    }

    function lu(n, t, i) {
        var r = ct.exec(t);
        return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
    }

    function au(n, t, r, u, f) {
        for (var o = 0, e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0; e < 4; e += 2) "margin" === r && (o += i.css(n, r + w[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + w[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + w[e] + "Width", !0, f))) : (o += i.css(n, "padding" + w[e], !0, f), "padding" !== r && (o += i.css(n, "border" + w[e] + "Width", !0, f)));
        return o
    }

    function vu(n, t, r) {
        var u, o = !0,
            e = ni(n),
            s = "border-box" === i.css(n, "boxSizing", !1, e);
        if (n.getClientRects().length && (u = n.getBoundingClientRect()[t]), u <= 0 || null == u) {
            if (u = lt(n, t, e), (u < 0 || null == u) && (u = n.style[t]), hi.test(u)) return u;
            o = s && (f.boxSizingReliable() || u === n.style[t]);
            u = parseFloat(u) || 0
        }
        return u + au(n, t, r || (s ? "border" : "content"), o, e) + "px"
    }

    function s(n, t, i, r, u) {
        return new s.prototype.init(n, t, i, r, u)
    }

    function wu() {
        ut && (n.requestAnimationFrame(wu), i.fx.tick())
    }

    function bu() {
        return n.setTimeout(function () {
            rt = void 0
        }), rt = i.now()
    }

    function ti(n, t) {
        var r, u = 0,
            i = {
                height: n
            };
        for (t = t ? 1 : 0; u < 4; u += 2 - t) r = w[u], i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n), i
    }

    function ku(n, t, i) {
        for (var u, f = (l.tweeners[t] || []).concat(l.tweeners["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n)) return u
    }

    function we(n, t, u) {
        var f, y, w, c, b, s, o, l, k = "width" in t || "height" in t,
            v = this,
            p = {},
            h = n.style,
            a = n.nodeType && kt(n),
            e = r.get(n, "fxshow");
        u.queue || (c = i._queueHooks(n, "fx"), null == c.unqueued && (c.unqueued = 0, b = c.empty.fire, c.empty.fire = function () {
            c.unqueued || b()
        }), c.unqueued++, v.always(function () {
            v.always(function () {
                c.unqueued--;
                i.queue(n, "fx").length || c.empty.fire()
            })
        }));
        for (f in t)
            if (y = t[f], yu.test(y)) {
                if (delete t[f], w = w || "toggle" === y, y === (a ? "hide" : "show")) {
                    if ("show" !== y || !e || void 0 === e[f]) continue;
                    a = !0
                }
                p[f] = e && e[f] || i.style(n, f)
            } if (s = !i.isEmptyObject(t), s || !i.isEmptyObject(p)) {
                k && 1 === n.nodeType && (u.overflow = [h.overflow, h.overflowX, h.overflowY], o = e && e.display, null == o && (o = r.get(n, "display")), l = i.css(n, "display"), "none" === l && (o ? l = o : (nt([n], !0), o = n.style.display || o, l = i.css(n, "display"), nt([n]))), ("inline" === l || "inline-block" === l && null != o) && "none" === i.css(n, "float") && (s || (v.done(function () {
                    h.display = o
                }), null == o && (l = h.display, o = "none" === l ? "" : l)), h.display = "inline-block"));
                u.overflow && (h.overflow = "hidden", v.always(function () {
                    h.overflow = u.overflow[0];
                    h.overflowX = u.overflow[1];
                    h.overflowY = u.overflow[2]
                }));
                s = !1;
                for (f in p) s || (e ? "hidden" in e && (a = e.hidden) : e = r.access(n, "fxshow", {
                    display: o
                }), w && (e.hidden = !a), a && nt([n], !0), v.done(function () {
                    a || nt([n]);
                    r.remove(n, "fxshow");
                    for (f in p) i.style(n, f, p[f])
                })), s = ku(a ? e[f] : 0, f, v), f in e || (e[f] = s.start, a && (s.end = s.start, s.start = 0))
            }
    }

    function be(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u) r in n || (n[r] = u[r], t[r] = e)
            } else t[f] = e
    }

    function l(n, t, r) {
        var e, o, s = 0,
            a = l.prefilters.length,
            f = i.Deferred().always(function () {
                delete c.elem
            }),
            c = function () {
                if (o) return !1;
                for (var s = rt || bu(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, e = u.tweens.length; r < e; r++) u.tweens[r].run(i);
                return f.notifyWith(n, [u, i, t]), i < 1 && e ? t : (f.resolveWith(n, [u]), !1)
            },
            u = f.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {},
                    easing: i.easing._default
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: rt || bu(),
                duration: r.duration,
                tweens: [],
                createTween: function (t, r) {
                    var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(f), f
                },
                stop: function (t) {
                    var i = 0,
                        r = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i < r; i++) u.tweens[i].run(1);
                    return t ? (f.notifyWith(n, [u, 1, 0]), f.resolveWith(n, [u, t])) : f.rejectWith(n, [u, t]), this
                }
            }),
            h = u.props;
        for (be(h, u.opts.specialEasing); s < a; s++)
            if (e = l.prefilters[s].call(u, n, h, u.opts)) return i.isFunction(e.stop) && (i._queueHooks(u.elem, u.opts.queue).stop = i.proxy(e.stop, e)), e;
        return i.map(h, ku, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function b(n) {
        var t = n.match(h) || [];
        return t.join(" ")
    }

    function k(n) {
        return n.getAttribute && n.getAttribute("class") || ""
    }

    function ai(n, t, r, u) {
        var f;
        if (i.isArray(t)) i.each(t, function (t, i) {
            r || ke.test(n) ? u(n, i) : ai(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u)
        });
        else if (r || "object" !== i.type(t)) u(n, t);
        else
            for (f in t) ai(n + "[" + f + "]", t[f], r, u)
    }

    function of(n) {
        return function (t, r) {
            "string" != typeof t && (r = t, t = "*");
            var u, f = 0,
                e = t.toLowerCase().match(h) || [];
            if (i.isFunction(r))
                while (u = e[f++]) "+" === u[0] ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }

    function sf(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function (n, i) {
                var s = i(t, r, u);
                return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1)
            }), h
        }
        var f = {},
            o = n === vi;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function pi(n, t) {
        var r, u, f = i.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u), n
    }

    function eo(n, t, i) {
        for (var e, u, f, o, s = n.contents, r = n.dataTypes;
            "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e)
            for (u in s)
                if (s[u] && s[u].test(e)) {
                    r.unshift(u);
                    break
                } if (r[0] in i) f = r[0];
        else {
            for (u in i) {
                if (!r[0] || n.converters[u + " " + r[0]]) {
                    f = u;
                    break
                }
                o || (o = u)
            }
            f = f || o
        }
        if (f) return f !== r[0] && r.unshift(f), i[f]
    }

    function oo(n, t, i, r) {
        var h, u, f, s, e, o = {},
            c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u;)
            if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                if ("*" === u) u = e;
                else if ("*" !== e && e !== u) {
                    if (f = o[e + " " + u] || o["* " + u], !f)
                        for (h in o)
                            if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                                f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                                break
                            } if (f !== !0)
                        if (f && n.throws) t = f(t);
                        else try {
                            t = f(t)
                        } catch (l) {
                            return {
                                state: "parsererror",
                                error: f ? l : "No conversion from " + e + " to " + u
                            }
                        }
                }
        return {
            state: "success",
            data: t
        }
    }

    function cf(n) {
        return i.isWindow(n) ? n : 9 === n.nodeType && n.defaultView
    }
    var y = [],
        u = n.document,
        vf = Object.getPrototypeOf,
        p = y.slice,
        bi = y.concat,
        ri = y.push,
        ot = y.indexOf,
        vt = {},
        ki = vt.toString,
        yt = vt.hasOwnProperty,
        di = yt.toString,
        yf = di.call(Object),
        f = {},
        nr = "3.1.1",
        i = function (n, t) {
            return new i.fn.init(n, t)
        },
        pf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        wf = /^-ms-/,
        bf = /-([a-z])/g,
        kf = function (n, t) {
            return t.toUpperCase()
        },
        v, ur, fr, er, or, sr, h, lr, wt, a, st, ei, dr, rt, ut, yu, pu, du, ft, gu, nf, tf, ci, hf, et, wi, ii, lf, af;
    i.fn = i.prototype = {
        jquery: nr,
        constructor: i,
        length: 0,
        toArray: function () {
            return p.call(this)
        },
        get: function (n) {
            return null == n ? p.call(this) : n < 0 ? this[n + this.length] : this[n]
        },
        pushStack: function (n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t
        },
        each: function (n) {
            return i.each(this, n)
        },
        map: function (n) {
            return this.pushStack(i.map(this, function (t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function () {
            return this.pushStack(p.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (n) {
            var i = this.length,
                t = +n + (n < 0 ? i : 0);
            return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: ri,
        sort: y.sort,
        splice: y.splice
    };
    i.extend = i.fn.extend = function () {
        var e, f, r, t, o, s, n = arguments[0] || {},
            u = 1,
            c = arguments.length,
            h = !1;
        for ("boolean" == typeof n && (h = n, n = arguments[u] || {}, u++), "object" == typeof n || i.isFunction(n) || (n = {}), u === c && (n = this, u--); u < c; u++)
            if (null != (e = arguments[u]))
                for (f in e) r = n[f], t = e[f], n !== t && (h && t && (i.isPlainObject(t) || (o = i.isArray(t))) ? (o ? (o = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : void 0 !== t && (n[f] = t));
        return n
    };
    i.extend({
        expando: "jQuery" + (nr + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (n) {
            throw new Error(n);
        },
        noop: function () { },
        isFunction: function (n) {
            return "function" === i.type(n)
        },
        isArray: Array.isArray,
        isWindow: function (n) {
            return null != n && n === n.window
        },
        isNumeric: function (n) {
            var t = i.type(n);
            return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n))
        },
        isPlainObject: function (n) {
            var t, i;
            return !(!n || "[object Object]" !== ki.call(n)) && (!(t = vf(n)) || (i = yt.call(t, "constructor") && t.constructor, "function" == typeof i && di.call(i) === yf))
        },
        isEmptyObject: function (n) {
            for (var t in n) return !1;
            return !0
        },
        type: function (n) {
            return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? vt[ki.call(n)] || "object" : typeof n
        },
        globalEval: function (n) {
            gi(n)
        },
        camelCase: function (n) {
            return n.replace(wf, "ms-").replace(bf, kf)
        },
        nodeName: function (n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (n, t) {
            var r, i = 0;
            if (ui(n)) {
                for (r = n.length; i < r; i++)
                    if (t.call(n[i], i, n[i]) === !1) break
            } else
                for (i in n)
                    if (t.call(n[i], i, n[i]) === !1) break;
            return n
        },
        trim: function (n) {
            return null == n ? "" : (n + "").replace(pf, "")
        },
        makeArray: function (n, t) {
            var r = t || [];
            return null != n && (ui(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ri.call(r, n)), r
        },
        inArray: function (n, t, i) {
            return null == t ? -1 : ot.call(t, n, i)
        },
        merge: function (n, t) {
            for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i];
            return n.length = r, n
        },
        grep: function (n, t, i) {
            for (var u, f = [], r = 0, e = n.length, o = !i; r < e; r++) u = !t(n[r], r), u !== o && f.push(n[r]);
            return f
        },
        map: function (n, t, i) {
            var e, u, r = 0,
                f = [];
            if (ui(n))
                for (e = n.length; r < e; r++) u = t(n[r], r, i), null != u && f.push(u);
            else
                for (r in n) u = t(n[r], r, i), null != u && f.push(u);
            return bi.apply([], f)
        },
        guid: 1,
        proxy: function (n, t) {
            var u, f, r;
            if ("string" == typeof t && (u = n[t], t = n, n = u), i.isFunction(n)) return f = p.call(arguments, 2), r = function () {
                return n.apply(t || this, f.concat(p.call(arguments)))
            }, r.guid = n.guid = n.guid || i.guid++, r
        },
        now: Date.now,
        support: f
    });
    "function" == typeof Symbol && (i.fn[Symbol.iterator] = y[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (n, t) {
        vt["[object " + t + "]"] = t.toLowerCase()
    });
    v = function (n) {
        function u(n, t, r, u) {
            var s, w, l, a, d, y, g, p = t && t.ownerDocument,
                v = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof n || !n || 1 !== v && 9 !== v && 11 !== v) return r;
            if (!u && ((t ? t.ownerDocument || t : c) !== i && b(t), t = t || i, h)) {
                if (11 !== v && (d = cr.exec(n)))
                    if (s = d[1]) {
                        if (9 === v) {
                            if (!(l = t.getElementById(s))) return r;
                            if (l.id === s) return r.push(l), r
                        } else if (p && (l = p.getElementById(s)) && et(t, l) && l.id === s) return r.push(l), r
                    } else {
                        if (d[2]) return k.apply(r, t.getElementsByTagName(n)), r;
                        if ((s = d[3]) && e.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(s)), r
                    } if (e.qsa && !lt[n + " "] && (!o || !o.test(n))) {
                        if (1 !== v) p = t, g = n;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((a = t.getAttribute("id")) ? a = a.replace(vi, yi) : t.setAttribute("id", a = f), y = ft(n), w = y.length; w--;) y[w] = "#" + a + " " + yt(y[w]);
                            g = y.join(",");
                            p = ni.test(n) && ri(t.parentNode) || t
                        }
                        if (g) try {
                            return k.apply(r, p.querySelectorAll(g)), r
                        } catch (nt) { } finally {
                                a === f && t.removeAttribute("id")
                            }
                    }
            }
            return si(n.replace(at, "$1"), t, r, u)
        }

        function ti() {
            function n(r, u) {
                return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
            }
            var i = [];
            return n
        }

        function l(n) {
            return n[f] = !0, n
        }

        function a(n) {
            var t = i.createElement("fieldset");
            try {
                return !!n(t)
            } catch (r) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function ii(n, i) {
            for (var r = n.split("|"), u = r.length; u--;) t.attrHandle[r[u]] = i
        }

        function wi(n, t) {
            var i = t && n,
                r = i && 1 === n.nodeType && 1 === t.nodeType && n.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ? 1 : -1
        }

        function ar(n) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === n
            }
        }

        function vr(n) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === n
            }
        }

        function bi(n) {
            return function (t) {
                return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && lr(t) === n : t.disabled === n : "label" in t && t.disabled === n
            }
        }

        function it(n) {
            return l(function (t) {
                return t = +t, l(function (i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }

        function ri(n) {
            return n && "undefined" != typeof n.getElementsByTagName && n
        }

        function ki() { }

        function yt(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
            return i
        }

        function pt(n, t, i) {
            var r = t.dir,
                u = t.next,
                e = u || r,
                o = i && "parentNode" === e,
                s = di++;
            return t.first ? function (t, i, u) {
                while (t = t[r])
                    if (1 === t.nodeType || o) return n(t, i, u);
                return !1
            } : function (t, i, h) {
                var c, l, a, y = [v, s];
                if (h) {
                    while (t = t[r])
                        if ((1 === t.nodeType || o) && n(t, i, h)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || o)
                            if (a = t[f] || (t[f] = {}), l = a[t.uniqueID] || (a[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((c = l[e]) && c[0] === v && c[1] === s) return y[2] = c[2];
                                if (l[e] = y, y[2] = n(t, i, h)) return !0
                            } return !1
            }
        }

        function ui(n) {
            return n.length > 1 ? function (t, i, r) {
                for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function yr(n, t, i) {
            for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
            return i
        }

        function wt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null != t; f < s; f++)(e = n[f]) && (i && !i(e, r, u) || (o.push(e), h && t.push(f)));
            return o
        }

        function fi(n, t, i, r, u, e) {
            return r && !r[f] && (r = fi(r)), u && !u[f] && (u = fi(u, e)), l(function (f, e, o, s) {
                var l, c, a, p = [],
                    y = [],
                    w = e.length,
                    b = f || yr(t || "*", o.nodeType ? [o] : o, []),
                    v = !n || !f && t ? b : wt(b, p, n, o, s),
                    h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s), r)
                    for (l = wt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--;)(a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else h = wt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : k.apply(e, h)
            })
        }

        function ei(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = pt(function (n) {
                return n === o
            }, c, !0), a = pt(function (n) {
                return nt(o, n) > -1
            }, c, !0), e = [function (n, t, i) {
                var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                return o = null, r
            }]; i < s; i++)
                if (u = t.relative[n[i].type]) e = [pt(ui(e), u)];
                else {
                    if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) {
                        for (r = ++i; r < s; r++)
                            if (t.relative[n[r].type]) break;
                        return fi(i > 1 && ui(e), i > 1 && yt(n.slice(0, i - 1).concat({
                            value: " " === n[i - 2].type ? "*" : ""
                        })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei(n = n.slice(r)), r < s && yt(n))
                    }
                    e.push(u)
                } return ui(e)
        }

        function pr(n, r) {
            var f = r.length > 0,
                e = n.length > 0,
                o = function (o, s, c, l, a) {
                    var y, nt, d, g = 0,
                        p = "0",
                        tt = o && [],
                        w = [],
                        it = ht,
                        rt = o || e && t.find.TAG("*", a),
                        ut = v += null == it ? 1 : Math.random() || .1,
                        ft = rt.length;
                    for (a && (ht = s === i || s || a); p !== ft && null != (y = rt[p]); p++) {
                        if (e && y) {
                            for (nt = 0, s || y.ownerDocument === i || (b(y), c = !h); d = n[nt++];)
                                if (d(y, s || i, c)) {
                                    l.push(y);
                                    break
                                } a && (v = ut)
                        }
                        f && ((y = !d && y) && g--, o && tt.push(y))
                    }
                    if (g += p, f && p !== g) {
                        for (nt = 0; d = r[nt++];) d(tt, w, s, c);
                        if (o) {
                            if (g > 0)
                                while (p--) tt[p] || w[p] || (w[p] = nr.call(l));
                            w = wt(w)
                        }
                        k.apply(l, w);
                        a && !o && w.length > 0 && g + r.length > 1 && u.uniqueSort(l)
                    }
                    return a && (v = ut, ht = it), tt
                };
            return f ? l(o) : o
        }
        var rt, e, t, st, oi, ft, bt, si, ht, w, ut, b, i, s, h, o, d, ct, et, f = "sizzle" + 1 * new Date,
            c = n.document,
            v = 0,
            di = 0,
            hi = ti(),
            ci = ti(),
            lt = ti(),
            kt = function (n, t) {
                return n === t && (ut = !0), 0
            },
            gi = {}.hasOwnProperty,
            g = [],
            nr = g.pop,
            tr = g.push,
            k = g.push,
            li = g.slice,
            nt = function (n, t) {
                for (var i = 0, r = n.length; i < r; i++)
                    if (n[i] === t) return i;
                return -1
            },
            dt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            r = "[\\x20\\t\\r\\n\\f]",
            tt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ai = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]",
            gt = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ai + ")*)|.*)\\)|)",
            ir = new RegExp(r + "+", "g"),
            at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
            rr = new RegExp("^" + r + "*," + r + "*"),
            ur = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
            fr = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]", "g"),
            er = new RegExp(gt),
            or = new RegExp("^" + tt + "$"),
            vt = {
                ID: new RegExp("^#(" + tt + ")"),
                CLASS: new RegExp("^\\.(" + tt + ")"),
                TAG: new RegExp("^(" + tt + "|[*])"),
                ATTR: new RegExp("^" + ai),
                PSEUDO: new RegExp("^" + gt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + dt + ")$", "i"),
                needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i")
            },
            sr = /^(?:input|select|textarea|button)$/i,
            hr = /^h\d$/i,
            ot = /^[^{]+\{\s*\[native \w/,
            cr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ni = /[+~]/,
            y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)", "ig"),
            p = function (n, t, i) {
                var r = "0x" + t - 65536;
                return r !== r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            vi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            yi = function (n, t) {
                return t ? "\0" === n ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
            },
            pi = function () {
                b()
            },
            lr = pt(function (n) {
                return n.disabled === !0 && ("form" in n || "label" in n)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            k.apply(g = li.call(c.childNodes), c.childNodes);
            g[c.childNodes.length].nodeType
        } catch (wr) {
            k = {
                apply: g.length ? function (n, t) {
                    tr.apply(n, li.call(t))
                } : function (n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++];);
                    n.length = i - 1
                }
            }
        }
        e = u.support = {};
        oi = u.isXML = function (n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return !!t && "HTML" !== t.nodeName
        };
        b = u.setDocument = function (n) {
            var v, u, l = n ? n.ownerDocument || n : c;
            return l !== i && 9 === l.nodeType && l.documentElement ? (i = l, s = i.documentElement, h = !oi(i), c !== i && (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", pi, !1) : u.attachEvent && u.attachEvent("onunload", pi)), e.attributes = a(function (n) {
                return n.className = "i", !n.getAttribute("className")
            }), e.getElementsByTagName = a(function (n) {
                return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length
            }), e.getElementsByClassName = ot.test(i.getElementsByClassName), e.getById = a(function (n) {
                return s.appendChild(n).id = f, !i.getElementsByName || !i.getElementsByName(f).length
            }), e.getById ? (t.filter.ID = function (n) {
                var t = n.replace(y, p);
                return function (n) {
                    return n.getAttribute("id") === t
                }
            }, t.find.ID = function (n, t) {
                if ("undefined" != typeof t.getElementById && h) {
                    var i = t.getElementById(n);
                    return i ? [i] : []
                }
            }) : (t.filter.ID = function (n) {
                var t = n.replace(y, p);
                return function (n) {
                    var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }, t.find.ID = function (n, t) {
                if ("undefined" != typeof t.getElementById && h) {
                    var i, u, f, r = t.getElementById(n);
                    if (r) {
                        if (i = r.getAttributeNode("id"), i && i.value === n) return [r];
                        for (f = t.getElementsByName(n), u = 0; r = f[u++];)
                            if (i = r.getAttributeNode("id"), i && i.value === n) return [r]
                    }
                    return []
                }
            }), t.find.TAG = e.getElementsByTagName ? function (n, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : e.qsa ? t.querySelectorAll(n) : void 0
            } : function (n, t) {
                var i, r = [],
                    f = 0,
                    u = t.getElementsByTagName(n);
                if ("*" === n) {
                    while (i = u[f++]) 1 === i.nodeType && r.push(i);
                    return r
                }
                return u
            }, t.find.CLASS = e.getElementsByClassName && function (n, t) {
                if ("undefined" != typeof t.getElementsByClassName && h) return t.getElementsByClassName(n)
            }, d = [], o = [], (e.qsa = ot.test(i.querySelectorAll)) && (a(function (n) {
                s.appendChild(n).innerHTML = "<a id='" + f + "'><\/a><select id='" + f + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + dt + ")");
                n.querySelectorAll("[id~=" + f + "-]").length || o.push("~=");
                n.querySelectorAll(":checked").length || o.push(":checked");
                n.querySelectorAll("a#" + f + "+*").length || o.push(".#.+[+~]")
            }), a(function (n) {
                n.innerHTML = "<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>";
                var t = i.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                2 !== n.querySelectorAll(":enabled").length && o.push(":enabled", ":disabled");
                s.appendChild(n).disabled = !0;
                2 !== n.querySelectorAll(":disabled").length && o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:")
            })), (e.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function (n) {
                e.disconnectedMatch = ct.call(n, "*");
                ct.call(n, "[s!='']:x");
                d.push("!=", gt)
            }), o = o.length && new RegExp(o.join("|")), d = d.length && new RegExp(d.join("|")), v = ot.test(s.compareDocumentPosition), et = v || ot.test(s.contains) ? function (n, t) {
                var r = 9 === n.nodeType ? n.documentElement : n,
                    i = t && t.parentNode;
                return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
            } : function (n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n) return !0;
                return !1
            }, kt = v ? function (n, t) {
                if (n === t) return ut = !0, 0;
                var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, 1 & r || !e.sortDetached && t.compareDocumentPosition(n) === r ? n === i || n.ownerDocument === c && et(c, n) ? -1 : t === i || t.ownerDocument === c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & r ? -1 : 1)
            } : function (n, t) {
                if (n === t) return ut = !0, 0;
                var r, u = 0,
                    o = n.parentNode,
                    s = t.parentNode,
                    f = [n],
                    e = [t];
                if (!o || !s) return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                if (o === s) return wi(n, t);
                for (r = n; r = r.parentNode;) f.unshift(r);
                for (r = t; r = r.parentNode;) e.unshift(r);
                while (f[u] === e[u]) u++;
                return u ? wi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0
            }, i) : i
        };
        u.matches = function (n, t) {
            return u(n, null, null, t)
        };
        u.matchesSelector = function (n, t) {
            if ((n.ownerDocument || n) !== i && b(n), t = t.replace(fr, "='$1']"), e.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t))) try {
                var r = ct.call(n, t);
                if (r || e.disconnectedMatch || n.document && 11 !== n.document.nodeType) return r
            } catch (f) { }
            return u(t, i, null, [n]).length > 0
        };
        u.contains = function (n, t) {
            return (n.ownerDocument || n) !== i && b(n), et(n, t)
        };
        u.attr = function (n, r) {
            (n.ownerDocument || n) !== i && b(n);
            var f = t.attrHandle[r.toLowerCase()],
                u = f && gi.call(t.attrHandle, r.toLowerCase()) ? f(n, r, !h) : void 0;
            return void 0 !== u ? u : e.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
        };
        u.escape = function (n) {
            return (n + "").replace(vi, yi)
        };
        u.error = function (n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        };
        u.uniqueSort = function (n) {
            var r, u = [],
                t = 0,
                i = 0;
            if (ut = !e.detectDuplicates, w = !e.sortStable && n.slice(0), n.sort(kt), ut) {
                while (r = n[i++]) r === n[i] && (t = u.push(i));
                while (t--) n.splice(u[t], 1)
            }
            return w = null, n
        };
        st = u.getText = function (n) {
            var r, i = "",
                u = 0,
                t = n.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof n.textContent) return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                } else if (3 === t || 4 === t) return n.nodeValue
            } else
                while (r = n[u++]) i += st(r);
            return i
        };
        t = u.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: vt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (n) {
                    return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                },
                CHILD: function (n) {
                    return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n
                },
                PSEUDO: function (n) {
                    var i, t = !n[6] && n[2];
                    return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && er.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                }
            },
            filter: {
                TAG: function (n) {
                    var t = n.replace(y, p).toLowerCase();
                    return "*" === n ? function () {
                        return !0
                    } : function (n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (n) {
                    var t = hi[n + " "];
                    return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function (n) {
                        return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
                    })
                },
                ATTR: function (n, t, i) {
                    return function (r) {
                        var f = u.attr(r, n);
                        return null == f ? "!=" === t : !t || (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f.replace(ir, " ") + " ").indexOf(i) > -1 : "|=" === t && (f === i || f.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function (n, t, i, r, u) {
                    var s = "nth" !== n.slice(0, 3),
                        o = "last" !== n.slice(-4),
                        e = "of-type" === t;
                    return 1 === r && 0 === u ? function (n) {
                        return !!n.parentNode
                    } : function (t, i, h) {
                        var p, w, y, c, a, b, k = s !== o ? "nextSibling" : "previousSibling",
                            d = t.parentNode,
                            nt = e && t.nodeName.toLowerCase(),
                            g = !h && !e,
                            l = !1;
                        if (d) {
                            if (s) {
                                while (k) {
                                    for (c = t; c = c[k];)
                                        if (e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) return !1;
                                    b = k = "only" === n && !b && "nextSibling"
                                }
                                return !0
                            }
                            if (b = [o ? d.firstChild : d.lastChild], o && g) {
                                for (c = d, y = c[f] || (c[f] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a && p[2], c = a && d.childNodes[a]; c = ++a && c && c[k] || (l = a = 0) || b.pop();)
                                    if (1 === c.nodeType && ++l && c === t) {
                                        w[n] = [v, a, l];
                                        break
                                    }
                            } else if (g && (c = t, y = c[f] || (c[f] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a), l === !1)
                                while (c = ++a && c && c[k] || (l = a = 0) || b.pop())
                                    if ((e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) && ++l && (g && (y = c[f] || (c[f] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), w[n] = [v, l]), c === t)) break;
                            return l -= u, l === r || l % r == 0 && l / r >= 0
                        }
                    }
                },
                PSEUDO: function (n, i) {
                    var e, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                    return r[f] ? r(i) : r.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function (n, t) {
                        for (var u, f = r(n, i), e = f.length; e--;) u = nt(n, f[e]), n[u] = !(t[u] = f[e])
                    }) : function (n) {
                        return r(n, 0, e)
                    }) : r
                }
            },
            pseudos: {
                not: l(function (n) {
                    var t = [],
                        r = [],
                        i = bt(n.replace(at, "$1"));
                    return i[f] ? l(function (n, t, r, u) {
                        for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e))
                    }) : function (n, u, f) {
                        return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
                    }
                }),
                has: l(function (n) {
                    return function (t) {
                        return u(n, t).length > 0
                    }
                }),
                contains: l(function (n) {
                    return n = n.replace(y, p),
                        function (t) {
                            return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                        }
                }),
                lang: l(function (n) {
                    return or.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                        function (t) {
                            var i;
                            do
                                if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function (n) {
                    return n === s
                },
                focus: function (n) {
                    return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: bi(!1),
                disabled: bi(!0),
                checked: function (n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && !!n.checked || "option" === t && !!n.selected
                },
                selected: function (n) {
                    return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                },
                empty: function (n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6) return !1;
                    return !0
                },
                parent: function (n) {
                    return !t.pseudos.empty(n)
                },
                header: function (n) {
                    return hr.test(n.nodeName)
                },
                input: function (n) {
                    return sr.test(n.nodeName)
                },
                button: function (n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && "button" === n.type || "button" === t
                },
                text: function (n) {
                    var t;
                    return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: it(function () {
                    return [0]
                }),
                last: it(function (n, t) {
                    return [t - 1]
                }),
                eq: it(function (n, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: it(function (n, t) {
                    for (var i = 0; i < t; i += 2) n.push(i);
                    return n
                }),
                odd: it(function (n, t) {
                    for (var i = 1; i < t; i += 2) n.push(i);
                    return n
                }),
                lt: it(function (n, t, i) {
                    for (var r = i < 0 ? i + t : i; --r >= 0;) n.push(r);
                    return n
                }),
                gt: it(function (n, t, i) {
                    for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
                    return n
                })
            }
        };
        t.pseudos.nth = t.pseudos.eq;
        for (rt in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) t.pseudos[rt] = ar(rt);
        for (rt in {
            submit: !0,
            reset: !0
        }) t.pseudos[rt] = vr(rt);
        return ki.prototype = t.filters = t.pseudos, t.setFilters = new ki, ft = u.tokenize = function (n, i) {
            var e, f, s, o, r, h, c, l = ci[n + " "];
            if (l) return i ? 0 : l.slice(0);
            for (r = n, h = [], c = t.preFilter; r;) {
                (!e || (f = rr.exec(r))) && (f && (r = r.slice(f[0].length) || r), h.push(s = []));
                e = !1;
                (f = ur.exec(r)) && (e = f.shift(), s.push({
                    value: e,
                    type: f[0].replace(at, " ")
                }), r = r.slice(e.length));
                for (o in t.filter) (f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                    value: e,
                    type: o,
                    matches: f
                }), r = r.slice(e.length));
                if (!e) break
            }
            return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
        }, bt = u.compile = function (n, t) {
            var r, u = [],
                e = [],
                i = lt[n + " "];
            if (!i) {
                for (t || (t = ft(n)), r = t.length; r--;) i = ei(t[r]), i[f] ? u.push(i) : e.push(i);
                i = lt(n, pr(e, u));
                i.selector = n
            }
            return i
        }, si = u.select = function (n, i, r, u) {
            var o, f, e, l, a, c = "function" == typeof n && n,
                s = !u && ft(n = c.selector || n);
            if (r = r || [], 1 === s.length) {
                if (f = s[0] = s[0].slice(0), f.length > 2 && "ID" === (e = f[0]).type && 9 === i.nodeType && h && t.relative[f[1].type]) {
                    if (i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0], !i) return r;
                    c && (i = i.parentNode);
                    n = n.slice(f.shift().value.length)
                }
                for (o = vt.needsContext.test(n) ? 0 : f.length; o--;) {
                    if (e = f[o], t.relative[l = e.type]) break;
                    if ((a = t.find[l]) && (u = a(e.matches[0].replace(y, p), ni.test(f[0].type) && ri(i.parentNode) || i))) {
                        if (f.splice(o, 1), n = u.length && yt(f), !n) return k.apply(r, u), r;
                        break
                    }
                }
            }
            return (c || bt(n, s))(u, i, !h, r, !i || ni.test(n) && ri(i.parentNode) || i), r
        }, e.sortStable = f.split("").sort(kt).join("") === f, e.detectDuplicates = !!ut, b(), e.sortDetached = a(function (n) {
            return 1 & n.compareDocumentPosition(i.createElement("fieldset"))
        }), a(function (n) {
            return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href")
        }) || ii("type|href|height|width", function (n, t, i) {
            if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), e.attributes && a(function (n) {
            return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value")
        }) || ii("value", function (n, t, i) {
            if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue
        }), a(function (n) {
            return null == n.getAttribute("disabled")
        }) || ii(dt, function (n, t, i) {
            var r;
            if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }), u
    }(n);
    i.find = v;
    i.expr = v.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.uniqueSort = i.unique = v.uniqueSort;
    i.text = v.getText;
    i.isXMLDoc = v.isXML;
    i.contains = v.contains;
    i.escapeSelector = v.escape;
    var d = function (n, t, r) {
        for (var u = [], f = void 0 !== r;
            (n = n[t]) && 9 !== n.nodeType;)
            if (1 === n.nodeType) {
                if (f && i(n).is(r)) break;
                u.push(n)
            } return u
    },
        tr = function (n, t) {
            for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
            return i
        },
        ir = i.expr.match.needsContext,
        rr = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        df = /^.[^:#\[\.,]*$/;
    i.filter = function (n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function (n) {
            return 1 === n.nodeType
        }))
    };
    i.fn.extend({
        find: function (n) {
            var t, r, u = this.length,
                f = this;
            if ("string" != typeof n) return this.pushStack(i(n).filter(function () {
                for (t = 0; t < u; t++)
                    if (i.contains(f[t], this)) return !0
            }));
            for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r);
            return u > 1 ? i.uniqueSort(r) : r
        },
        filter: function (n) {
            return this.pushStack(fi(this, n || [], !1))
        },
        not: function (n) {
            return this.pushStack(fi(this, n || [], !0))
        },
        is: function (n) {
            return !!fi(this, "string" == typeof n && ir.test(n) ? i(n) : n || [], !1).length
        }
    });
    fr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    er = i.fn.init = function (n, t, r) {
        var f, e;
        if (!n) return this;
        if (r = r || ur, "string" == typeof n) {
            if (f = "<" === n[0] && ">" === n[n.length - 1] && n.length >= 3 ? [null, n, null] : fr.exec(n), !f || !f[1] && t) return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
            if (f[1]) {
                if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(f[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), rr.test(f[1]) && i.isPlainObject(t))
                    for (f in t) i.isFunction(this[f]) ? this[f](t[f]) : this.attr(f, t[f]);
                return this
            }
            return e = u.getElementById(f[2]), e && (this[0] = e, this.length = 1), this
        }
        return n.nodeType ? (this[0] = n, this.length = 1, this) : i.isFunction(n) ? void 0 !== r.ready ? r.ready(n) : n(i) : i.makeArray(n, this)
    };
    er.prototype = i.fn;
    ur = i(u);
    or = /^(?:parents|prev(?:Until|All))/;
    sr = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        has: function (n) {
            var t = i(n, this),
                r = t.length;
            return this.filter(function () {
                for (var n = 0; n < r; n++)
                    if (i.contains(this, t[n])) return !0
            })
        },
        closest: function (n, t) {
            var r, f = 0,
                o = this.length,
                u = [],
                e = "string" != typeof n && i(n);
            if (!ir.test(n))
                for (; f < o; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                            u.push(r);
                            break
                        } return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u)
        },
        index: function (n) {
            return n ? "string" == typeof n ? ot.call(i(n), this[0]) : ot.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (n, t) {
            return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
        },
        addBack: function (n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function (n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (n) {
            return d(n, "parentNode")
        },
        parentsUntil: function (n, t, i) {
            return d(n, "parentNode", i)
        },
        next: function (n) {
            return hr(n, "nextSibling")
        },
        prev: function (n) {
            return hr(n, "previousSibling")
        },
        nextAll: function (n) {
            return d(n, "nextSibling")
        },
        prevAll: function (n) {
            return d(n, "previousSibling")
        },
        nextUntil: function (n, t, i) {
            return d(n, "nextSibling", i)
        },
        prevUntil: function (n, t, i) {
            return d(n, "previousSibling", i)
        },
        siblings: function (n) {
            return tr((n.parentNode || {}).firstChild, n)
        },
        children: function (n) {
            return tr(n.firstChild)
        },
        contents: function (n) {
            return n.contentDocument || i.merge([], n.childNodes)
        }
    }, function (n, t) {
        i.fn[n] = function (r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), this.length > 1 && (sr[n] || i.uniqueSort(f), or.test(n) && f.reverse()), this.pushStack(f)
        }
    });
    h = /[^\x20\t\r\n\f]+/g;
    i.Callbacks = function (n) {
        n = "string" == typeof n ? gf(n) : i.extend({}, n);
        var f, r, h, e, t = [],
            o = [],
            u = -1,
            c = function () {
                for (e = n.once, h = f = !0; o.length; u = -1)
                    for (r = o.shift(); ++u < t.length;) t[u].apply(r[0], r[1]) === !1 && n.stopOnFalse && (u = t.length, r = !1);
                n.memory || (r = !1);
                f = !1;
                e && (t = r ? [] : "")
            },
            s = {
                add: function () {
                    return t && (r && !f && (u = t.length - 1, o.push(r)), function e(r) {
                        i.each(r, function (r, u) {
                            i.isFunction(u) ? n.unique && s.has(u) || t.push(u) : u && u.length && "string" !== i.type(u) && e(u)
                        })
                    }(arguments), r && !f && c()), this
                },
                remove: function () {
                    return i.each(arguments, function (n, r) {
                        for (var f;
                            (f = i.inArray(r, t, f)) > -1;) t.splice(f, 1), f <= u && u--
                    }), this
                },
                has: function (n) {
                    return n ? i.inArray(n, t) > -1 : t.length > 0
                },
                empty: function () {
                    return t && (t = []), this
                },
                disable: function () {
                    return e = o = [], t = r = "", this
                },
                disabled: function () {
                    return !t
                },
                lock: function () {
                    return e = o = [], r || f || (t = r = ""), this
                },
                locked: function () {
                    return !!e
                },
                fireWith: function (n, t) {
                    return e || (t = t || [], t = [n, t.slice ? t.slice() : t], o.push(t), f || c()), this
                },
                fire: function () {
                    return s.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!h
                }
            };
        return s
    };
    i.extend({
        Deferred: function (t) {
            var u = [
                ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
                ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
                ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]
            ],
                e = "pending",
                f = {
                    state: function () {
                        return e
                    },
                    always: function () {
                        return r.done(arguments).fail(arguments), this
                    },
                    "catch": function (n) {
                        return f.then(null, n)
                    },
                    pipe: function () {
                        var n = arguments;
                        return i.Deferred(function (t) {
                            i.each(u, function (u, f) {
                                var e = i.isFunction(n[f[4]]) && n[f[4]];
                                r[f[1]](function () {
                                    var n = e && e.apply(this, arguments);
                                    n && i.isFunction(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments)
                                })
                            });
                            n = null
                        }).promise()
                    },
                    then: function (t, r, f) {
                        function o(t, r, u, f) {
                            return function () {
                                var s = this,
                                    h = arguments,
                                    l = function () {
                                        var n, c;
                                        if (!(t < e)) {
                                            if (n = u.apply(s, h), n === r.promise()) throw new TypeError("Thenable self-resolution");
                                            c = n && ("object" == typeof n || "function" == typeof n) && n.then;
                                            i.isFunction(c) ? f ? c.call(n, o(e, r, g, f), o(e, r, pt, f)) : (e++, c.call(n, o(e, r, g, f), o(e, r, pt, f), o(e, r, g, r.notifyWith))) : (u !== g && (s = void 0, h = [n]), (f || r.resolveWith)(s, h))
                                        }
                                    },
                                    c = f ? l : function () {
                                        try {
                                            l()
                                        } catch (n) {
                                            i.Deferred.exceptionHook && i.Deferred.exceptionHook(n, c.stackTrace);
                                            t + 1 >= e && (u !== pt && (s = void 0, h = [n]), r.rejectWith(s, h))
                                        }
                                    };
                                t ? c() : (i.Deferred.getStackHook && (c.stackTrace = i.Deferred.getStackHook()), n.setTimeout(c))
                            }
                        }
                        var e = 0;
                        return i.Deferred(function (n) {
                            u[0][3].add(o(0, n, i.isFunction(f) ? f : g, n.notifyWith));
                            u[1][3].add(o(0, n, i.isFunction(t) ? t : g));
                            u[2][3].add(o(0, n, i.isFunction(r) ? r : pt))
                        }).promise()
                    },
                    promise: function (n) {
                        return null != n ? i.extend(n, f) : f
                    }
                },
                r = {};
            return i.each(u, function (n, t) {
                var i = t[2],
                    o = t[5];
                f[t[1]] = i.add;
                o && i.add(function () {
                    e = o
                }, u[3 - n][2].disable, u[0][2].lock);
                i.add(t[3].fire);
                r[t[0]] = function () {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                };
                r[t[0] + "With"] = i.fireWith
            }), f.promise(r), t && t.call(r, r), r
        },
        when: function (n) {
            var f = arguments.length,
                t = f,
                e = Array(t),
                u = p.call(arguments),
                r = i.Deferred(),
                o = function (n) {
                    return function (t) {
                        e[n] = this;
                        u[n] = arguments.length > 1 ? p.call(arguments) : t;
                        --f || r.resolveWith(e, u)
                    }
                };
            if (f <= 1 && (cr(n, r.done(o(t)).resolve, r.reject), "pending" === r.state() || i.isFunction(u[t] && u[t].then))) return r.then();
            while (t--) cr(u[t], o(t), r.reject);
            return r.promise()
        }
    });
    lr = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function (t, i) {
        n.console && n.console.warn && t && lr.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    };
    i.readyException = function (t) {
        n.setTimeout(function () {
            throw t;
        })
    };
    wt = i.Deferred();
    i.fn.ready = function (n) {
        return wt.then(n)["catch"](function (n) {
            i.readyException(n)
        }), this
    };
    i.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function (n) {
            (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, n !== !0 && --i.readyWait > 0 || wt.resolveWith(u, [i]))
        }
    });
    i.ready.then = wt.then;
    "complete" === u.readyState || "loading" !== u.readyState && !u.documentElement.doScroll ? n.setTimeout(i.ready) : (u.addEventListener("DOMContentLoaded", bt), n.addEventListener("load", bt));
    a = function (n, t, r, u, f, e, o) {
        var s = 0,
            c = n.length,
            h = null == r;
        if ("object" === i.type(r)) {
            f = !0;
            for (s in r) a(n, t, s, r[s], !0, e, o)
        } else if (void 0 !== u && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function (n, t, r) {
            return h.call(i(n), r)
        })), t))
            for (; s < c; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
        return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
    };
    st = function (n) {
        return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType
    };
    ht.uid = 1;
    ht.prototype = {
        cache: function (n) {
            var t = n[this.expando];
            return t || (t = {}, st(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (n, t, r) {
            var u, f = this.cache(n);
            if ("string" == typeof t) f[i.camelCase(t)] = r;
            else
                for (u in t) f[i.camelCase(u)] = t[u];
            return f
        },
        get: function (n, t) {
            return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][i.camelCase(t)]
        },
        access: function (n, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(n, t) : (this.set(n, t, i), void 0 !== i ? i : t)
        },
        remove: function (n, t) {
            var u, r = n[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t)
                    for (i.isArray(t) ? t = t.map(i.camelCase) : (t = i.camelCase(t), t = (t in r) ? [t] : t.match(h) || []), u = t.length; u--;) delete r[t[u]];
                (void 0 === t || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando])
            }
        },
        hasData: function (n) {
            var t = n[this.expando];
            return void 0 !== t && !i.isEmptyObject(t)
        }
    };
    var r = new ht,
        e = new ht,
        ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        te = /[A-Z]/g;
    i.extend({
        hasData: function (n) {
            return e.hasData(n) || r.hasData(n)
        },
        data: function (n, t, i) {
            return e.access(n, t, i)
        },
        removeData: function (n, t) {
            e.remove(n, t)
        },
        _data: function (n, t, i) {
            return r.access(n, t, i)
        },
        _removeData: function (n, t) {
            r.remove(n, t)
        }
    });
    i.fn.extend({
        data: function (n, t) {
            var o, f, s, u = this[0],
                h = u && u.attributes;
            if (void 0 === n) {
                if (this.length && (s = e.get(u), 1 === u.nodeType && !r.get(u, "hasDataAttrs"))) {
                    for (o = h.length; o--;) h[o] && (f = h[o].name, 0 === f.indexOf("data-") && (f = i.camelCase(f.slice(5)), ar(u, f, s[f])));
                    r.set(u, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof n ? this.each(function () {
                e.set(this, n)
            }) : a(this, function (t) {
                var i;
                if (u && void 0 === t) {
                    if ((i = e.get(u, n), void 0 !== i) || (i = ar(u, n), void 0 !== i)) return i
                } else this.each(function () {
                    e.set(this, n, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (n) {
            return this.each(function () {
                e.remove(this, n)
            })
        }
    });
    i.extend({
        queue: function (n, t, u) {
            var f;
            if (n) return t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || i.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || []
        },
        dequeue: function (n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t),
                o = function () {
                    i.dequeue(n, t)
                };
            "inprogress" === u && (u = r.shift(), e--);
            u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function (n, t) {
            var u = t + "queueHooks";
            return r.get(n, u) || r.access(n, u, {
                empty: i.Callbacks("once memory").add(function () {
                    r.remove(n, [t + "queue", u])
                })
            })
        }
    });
    i.fn.extend({
        queue: function (n, t) {
            var r = 2;
            return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function () {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
            })
        },
        dequeue: function (n) {
            return this.each(function () {
                i.dequeue(this, n)
            })
        },
        clearQueue: function (n) {
            return this.queue(n || "fx", [])
        },
        promise: function (n, t) {
            var u, e = 1,
                o = i.Deferred(),
                f = this,
                s = this.length,
                h = function () {
                    --e || o.resolveWith(f, [f])
                };
            for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--;) u = r.get(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
            return h(), o.promise(t)
        }
    });
    var vr = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ct = new RegExp("^(?:([+-])=|)(" + vr + ")([a-z%]*)$", "i"),
        w = ["Top", "Right", "Bottom", "Left"],
        kt = function (n, t) {
            return n = t || n, "none" === n.style.display || "" === n.style.display && i.contains(n.ownerDocument, n) && "none" === i.css(n, "display")
        },
        yr = function (n, t, i, r) {
            var f, u, e = {};
            for (u in t) e[u] = n.style[u], n.style[u] = t[u];
            f = i.apply(n, r || []);
            for (u in t) n.style[u] = e[u];
            return f
        };
    ei = {};
    i.fn.extend({
        show: function () {
            return nt(this, !0)
        },
        hide: function () {
            return nt(this)
        },
        toggle: function (n) {
            return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function () {
                kt(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    var wr = /^(?:checkbox|radio)$/i,
        br = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        kr = /^$|\/(?:java|ecma)script/i,
        c = {
            option: [1, "<select multiple='multiple'>", "<\/select>"],
            thead: [1, "<table>", "<\/table>"],
            col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
            tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
            td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
            _default: [0, "", ""]
        };
    c.optgroup = c.option;
    c.tbody = c.tfoot = c.colgroup = c.caption = c.thead;
    c.th = c.td;
    dr = /<|&#?\w+;/;
    ! function () {
        var i = u.createDocumentFragment(),
            n = i.appendChild(u.createElement("div")),
            t = u.createElement("input");
        t.setAttribute("type", "radio");
        t.setAttribute("checked", "checked");
        t.setAttribute("name", "t");
        n.appendChild(t);
        f.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
        n.innerHTML = "<textarea>x<\/textarea>";
        f.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue
    }();
    var dt = u.documentElement,
        ue = /^key/,
        fe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        nu = /^([^.]*)(?:\.(.+)|)/;
    i.event = {
        global: {},
        add: function (n, t, u, f, e) {
            var v, y, w, p, b, c, s, l, o, k, d, a = r.get(n);
            if (a)
                for (u.handler && (v = u, u = v.handler, e = v.selector), e && i.find.matchesSelector(dt, e), u.guid || (u.guid = i.guid++), (p = a.events) || (p = a.events = {}), (y = a.handle) || (y = a.handle = function (t) {
                    if ("undefined" != typeof i && i.event.triggered !== t.type) return i.event.dispatch.apply(n, arguments)
                }), t = (t || "").match(h) || [""], b = t.length; b--;) w = nu.exec(t[b]) || [], o = d = w[1], k = (w[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, c = i.extend({
                    type: o,
                    origType: d,
                    data: f,
                    handler: u,
                    guid: u.guid,
                    selector: e,
                    needsContext: e && i.expr.match.needsContext.test(e),
                    namespace: k.join(".")
                }, v), (l = p[o]) || (l = p[o] = [], l.delegateCount = 0, s.setup && s.setup.call(n, f, k, y) !== !1 || n.addEventListener && n.addEventListener(o, y)), s.add && (s.add.call(n, c), c.handler.guid || (c.handler.guid = u.guid)), e ? l.splice(l.delegateCount++, 0, c) : l.push(c), i.event.global[o] = !0)
        },
        remove: function (n, t, u, f, e) {
            var y, k, c, v, p, s, l, a, o, b, d, w = r.hasData(n) && r.get(n);
            if (w && (v = w.events)) {
                for (t = (t || "").match(h) || [""], p = t.length; p--;)
                    if (c = nu.exec(t[p]) || [], o = d = c[1], b = (c[2] || "").split(".").sort(), o) {
                        for (l = i.event.special[o] || {}, o = (f ? l.delegateType : l.bindType) || o, a = v[o] || [], c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = y = a.length; y--;) s = a[y], !e && d !== s.origType || u && u.guid !== s.guid || c && !c.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(y, 1), s.selector && a.delegateCount--, l.remove && l.remove.call(n, s));
                        k && !a.length && (l.teardown && l.teardown.call(n, b, w.handle) !== !1 || i.removeEvent(n, o, w.handle), delete v[o])
                    } else
                        for (o in v) i.event.remove(n, o + t[p], u, f, !0);
                i.isEmptyObject(v) && r.remove(n, "handle events")
            }
        },
        dispatch: function (n) {
            var t = i.event.fix(n),
                u, c, s, e, f, l, h = new Array(arguments.length),
                a = (r.get(this, "events") || {})[t.type] || [],
                o = i.event.special[t.type] || {};
            for (h[0] = t, u = 1; u < arguments.length; u++) h[u] = arguments[u];
            if (t.delegateTarget = this, !o.preDispatch || o.preDispatch.call(this, t) !== !1) {
                for (l = i.event.handlers.call(this, t, a), u = 0;
                    (e = l[u++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(f.namespace) || (t.handleObj = f, t.data = f.data, s = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== s && (t.result = s) === !1 && (t.preventDefault(), t.stopPropagation()));
                return o.postDispatch && o.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (n, t) {
            var f, e, u, o, s, c = [],
                h = t.delegateCount,
                r = n.target;
            if (h && r.nodeType && !("click" === n.type && n.button >= 1))
                for (; r !== this; r = r.parentNode || this)
                    if (1 === r.nodeType && ("click" !== n.type || r.disabled !== !0)) {
                        for (o = [], s = {}, f = 0; f < h; f++) e = t[f], u = e.selector + " ", void 0 === s[u] && (s[u] = e.needsContext ? i(u, this).index(r) > -1 : i.find(u, this, null, [r]).length), s[u] && o.push(e);
                        o.length && c.push({
                            elem: r,
                            handlers: o
                        })
                    } return r = this, h < t.length && c.push({
                        elem: r,
                        handlers: t.slice(h)
                    }), c
        },
        addProp: function (n, t) {
            Object.defineProperty(i.Event.prototype, n, {
                enumerable: !0,
                configurable: !0,
                get: i.isFunction(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[n]
                },
                set: function (t) {
                    Object.defineProperty(this, n, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (n) {
            return n[i.expando] ? n : new i.Event(n)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== tu() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === tu() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && i.nodeName(this, "input")) return this.click(), !1
                },
                _default: function (n) {
                    return i.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (n) {
                    void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        }
    };
    i.removeEvent = function (n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i)
    };
    i.Event = function (n, t) {
        return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && n.returnValue === !1 ? gt : tt, this.target = n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), void (this[i.expando] = !0)) : new i.Event(n, t)
    };
    i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: tt,
        isPropagationStopped: tt,
        isImmediatePropagationStopped: tt,
        isSimulated: !1,
        preventDefault: function () {
            var n = this.originalEvent;
            this.isDefaultPrevented = gt;
            n && !this.isSimulated && n.preventDefault()
        },
        stopPropagation: function () {
            var n = this.originalEvent;
            this.isPropagationStopped = gt;
            n && !this.isSimulated && n.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = gt;
            n && !this.isSimulated && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (n) {
            var t = n.button;
            return null == n.which && ue.test(n.type) ? null != n.charCode ? n.charCode : n.keyCode : !n.which && void 0 !== t && fe.test(n.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : n.which
        }
    }, i.event.addProp);
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function (n) {
                var u, f = this,
                    r = n.relatedTarget,
                    e = n.handleObj;
                return r && (r === f || i.contains(f, r)) || (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
            }
        }
    });
    i.fn.extend({
        on: function (n, t, i, r) {
            return si(this, n, t, i, r)
        },
        one: function (n, t, i, r) {
            return si(this, n, t, i, r, 1)
        },
        off: function (n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
            if ("object" == typeof n) {
                for (f in n) this.off(f, t, n[f]);
                return this
            }
            return t !== !1 && "function" != typeof t || (r = t, t = void 0), r === !1 && (r = tt), this.each(function () {
                i.event.remove(this, n, r, t)
            })
        }
    });
    var ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        oe = /<script|<style|<link/i,
        se = /checked\s*(?:[^=]|=\s*.checked.)/i,
        he = /^true\/(.*)/,
        ce = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    i.extend({
        htmlPrefilter: function (n) {
            return n.replace(ee, "<$1><\/$2>")
        },
        clone: function (n, t, r) {
            var u, c, s, e, h = n.cloneNode(!0),
                l = i.contains(n.ownerDocument, n);
            if (!(f.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (e = o(h), s = o(n), u = 0, c = s.length; u < c; u++) ve(s[u], e[u]);
            if (t)
                if (r)
                    for (s = s || o(n), e = e || o(h), u = 0, c = s.length; u < c; u++) ru(s[u], e[u]);
                else ru(n, h);
            return e = o(h, "script"), e.length > 0 && oi(e, !l && o(n, "script")), h
        },
        cleanData: function (n) {
            for (var u, t, f, s = i.event.special, o = 0; void 0 !== (t = n[o]); o++)
                if (st(t)) {
                    if (u = t[r.expando]) {
                        if (u.events)
                            for (f in u.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                        t[r.expando] = void 0
                    }
                    t[e.expando] && (t[e.expando] = void 0)
                }
        }
    });
    i.fn.extend({
        detach: function (n) {
            return uu(this, n, !0)
        },
        remove: function (n) {
            return uu(this, n)
        },
        text: function (n) {
            return a(this, function (n) {
                return void 0 === n ? i.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n)
                })
            }, null, n, arguments.length)
        },
        append: function () {
            return it(this, arguments, function (n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = iu(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function () {
            return it(this, arguments, function (n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = iu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function () {
            return it(this, arguments, function (n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function () {
            return it(this, arguments, function (n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        empty: function () {
            for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (i.cleanData(o(n, !1)), n.textContent = "");
            return this
        },
        clone: function (n, t) {
            return n = null != n && n, t = null == t ? n : t, this.map(function () {
                return i.clone(this, n, t)
            })
        },
        html: function (n) {
            return a(this, function (n) {
                var t = this[0] || {},
                    r = 0,
                    u = this.length;
                if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof n && !oe.test(n) && !c[(br.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = i.htmlPrefilter(n);
                    try {
                        for (; r < u; r++) t = this[r] || {}, 1 === t.nodeType && (i.cleanData(o(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch (f) { }
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function () {
            var n = [];
            return it(this, arguments, function (t) {
                var r = this.parentNode;
                i.inArray(this, n) < 0 && (i.cleanData(o(this)), r && r.replaceChild(t, this))
            }, n)
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (n, t) {
        i.fn[n] = function (n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ri.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    var fu = /^margin/,
        hi = new RegExp("^(" + vr + ")(?!px)[a-z%]+$", "i"),
        ni = function (t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = n), i.getComputedStyle(t)
        };
    ! function () {
        function r() {
            if (t) {
                t.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                t.innerHTML = "";
                dt.appendChild(e);
                var i = n.getComputedStyle(t);
                o = "1%" !== i.top;
                c = "2px" === i.marginLeft;
                s = "4px" === i.width;
                t.style.marginRight = "50%";
                h = "4px" === i.marginRight;
                dt.removeChild(e);
                t = null
            }
        }
        var o, s, h, c, e = u.createElement("div"),
            t = u.createElement("div");
        t.style && (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === t.style.backgroundClip, e.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", e.appendChild(t), i.extend(f, {
            pixelPosition: function () {
                return r(), o
            },
            boxSizingReliable: function () {
                return r(), s
            },
            pixelMarginRight: function () {
                return r(), h
            },
            reliableMarginLeft: function () {
                return r(), c
            }
        }))
    }();
    var ye = /^(none|table(?!-c[ea]).+)/,
        pe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ou = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        su = ["Webkit", "Moz", "ms"],
        hu = u.createElement("div").style;
    i.extend({
        cssHooks: {
            opacity: {
                get: function (n, t) {
                    if (t) {
                        var i = lt(n, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (n, t, r, u) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var e, h, o, s = i.camelCase(t),
                    c = n.style;
                return t = i.cssProps[s] || (i.cssProps[s] = cu(s) || s), o = i.cssHooks[t] || i.cssHooks[s], void 0 === r ? o && "get" in o && void 0 !== (e = o.get(n, !1, u)) ? e : c[t] : (h = typeof r, "string" === h && (e = ct.exec(r)) && e[1] && (r = pr(n, t, e), h = "number"), null != r && r === r && ("number" === h && (r += e && e[3] || (i.cssNumber[s] ? "" : "px")), f.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (c[t] = "inherit"), o && "set" in o && void 0 === (r = o.set(n, r, u)) || (c[t] = r)), void 0)
            }
        },
        css: function (n, t, r, u) {
            var f, s, o, e = i.camelCase(t);
            return t = i.cssProps[e] || (i.cssProps[e] = cu(e) || e), o = i.cssHooks[t] || i.cssHooks[e], o && "get" in o && (f = o.get(n, !0, r)), void 0 === f && (f = lt(n, t, u)), "normal" === f && t in ou && (f = ou[t]), "" === r || r ? (s = parseFloat(f), r === !0 || isFinite(s) ? s || 0 : f) : f
        }
    });
    i.each(["height", "width"], function (n, t) {
        i.cssHooks[t] = {
            get: function (n, r, u) {
                if (r) return !ye.test(i.css(n, "display")) || n.getClientRects().length && n.getBoundingClientRect().width ? vu(n, t, u) : yr(n, pe, function () {
                    return vu(n, t, u)
                })
            },
            set: function (n, r, u) {
                var f, e = u && ni(n),
                    o = u && au(n, t, u, "border-box" === i.css(n, "boxSizing", !1, e), e);
                return o && (f = ct.exec(r)) && "px" !== (f[3] || "px") && (n.style[t] = r, r = i.css(n, t)), lu(n, r, o)
            }
        }
    });
    i.cssHooks.marginLeft = eu(f.reliableMarginLeft, function (n, t) {
        if (t) return (parseFloat(lt(n, "marginLeft")) || n.getBoundingClientRect().left - yr(n, {
            marginLeft: 0
        }, function () {
            return n.getBoundingClientRect().left
        })) + "px"
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (n, t) {
        i.cssHooks[n + t] = {
            expand: function (i) {
                for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; r < 4; r++) f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        fu.test(n) || (i.cssHooks[n + t].set = lu)
    });
    i.fn.extend({
        css: function (n, t) {
            return a(this, function (n, t, r) {
                var f, e, o = {},
                    u = 0;
                if (i.isArray(t)) {
                    for (f = ni(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
            }, n, t, arguments.length > 1)
        }
    });
    i.Tween = s;
    s.prototype = {
        constructor: s,
        init: function (n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function () {
            var n = s.propHooks[this.prop];
            return n && n.get ? n.get(this) : s.propHooks._default.get(this)
        },
        run: function (n) {
            var t, r = s.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : s.propHooks._default.set(this), this
        }
    };
    s.prototype.init.prototype = s.prototype;
    s.propHooks = {
        _default: {
            get: function (n) {
                var t;
                return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function (n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || null == n.elem.style[i.cssProps[n.prop]] && !i.cssHooks[n.prop] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit)
            }
        }
    };
    s.propHooks.scrollTop = s.propHooks.scrollLeft = {
        set: function (n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function (n) {
            return n
        },
        swing: function (n) {
            return .5 - Math.cos(n * Math.PI) / 2
        },
        _default: "swing"
    };
    i.fx = s.prototype.init;
    i.fx.step = {};
    yu = /^(?:toggle|show|hide)$/;
    pu = /queueHooks$/;
    i.Animation = i.extend(l, {
        tweeners: {
            "*": [function (n, t) {
                var i = this.createTween(n, t);
                return pr(i.elem, n, ct.exec(t), i), i
            }]
        },
        tweener: function (n, t) {
            i.isFunction(n) ? (t = n, n = ["*"]) : n = n.match(h);
            for (var r, u = 0, f = n.length; u < f; u++) r = n[u], l.tweeners[r] = l.tweeners[r] || [], l.tweeners[r].unshift(t)
        },
        prefilters: [we],
        prefilter: function (n, t) {
            t ? l.prefilters.unshift(n) : l.prefilters.push(n)
        }
    });
    i.speed = function (n, t, r) {
        var f = n && "object" == typeof n ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return i.fx.off || u.hidden ? f.duration = 0 : "number" != typeof f.duration && (f.duration = f.duration in i.fx.speeds ? i.fx.speeds[f.duration] : i.fx.speeds._default), null != f.queue && f.queue !== !0 || (f.queue = "fx"), f.old = f.complete, f.complete = function () {
            i.isFunction(f.old) && f.old.call(this);
            f.queue && i.dequeue(this, f.queue)
        }, f
    };
    i.fn.extend({
        fadeTo: function (n, t, i, r) {
            return this.filter(kt).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function (n, t, u, f) {
            var s = i.isEmptyObject(n),
                o = i.speed(t, u, f),
                e = function () {
                    var t = l(this, i.extend({}, n), o);
                    (s || r.get(this, "finish")) && t.stop(!0)
                };
            return e.finish = e, s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function (n, t, u) {
            var f = function (n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return "string" != typeof n && (u = t, t = n, n = void 0), t && n !== !1 && this.queue(n || "fx", []), this.each(function () {
                var s = !0,
                    t = null != n && n + "queueHooks",
                    o = i.timers,
                    e = r.get(this);
                if (t) e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e) e[t] && e[t].stop && pu.test(t) && f(e[t]);
                for (t = o.length; t--;) o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                !s && u || i.dequeue(this, n)
            })
        },
        finish: function (n) {
            return n !== !1 && (n = n || "fx"), this.each(function () {
                var t, e = r.get(this),
                    u = e[n + "queue"],
                    o = e[n + "queueHooks"],
                    f = i.timers,
                    s = u ? u.length : 0;
                for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function (n, t) {
        var r = i.fn[t];
        i.fn[t] = function (n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(ti(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: ti("show"),
        slideUp: ti("hide"),
        slideToggle: ti("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (n, t) {
        i.fn[n] = function (n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function () {
        var r, n = 0,
            t = i.timers;
        for (rt = i.now(); n < t.length; n++) r = t[n], r() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        rt = void 0
    };
    i.fx.timer = function (n) {
        i.timers.push(n);
        n() ? i.fx.start() : i.timers.pop()
    };
    i.fx.interval = 13;
    i.fx.start = function () {
        ut || (ut = n.requestAnimationFrame ? n.requestAnimationFrame(wu) : n.setInterval(i.fx.tick, i.fx.interval))
    };
    i.fx.stop = function () {
        n.cancelAnimationFrame ? n.cancelAnimationFrame(ut) : n.clearInterval(ut);
        ut = null
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function (t, r) {
        return t = i.fx ? i.fx.speeds[t] || t : t, r = r || "fx", this.queue(r, function (i, r) {
            var u = n.setTimeout(i, t);
            r.stop = function () {
                n.clearTimeout(u)
            }
        })
    },
        function () {
            var n = u.createElement("input"),
                t = u.createElement("select"),
                i = t.appendChild(u.createElement("option"));
            n.type = "checkbox";
            f.checkOn = "" !== n.value;
            f.optSelected = i.selected;
            n = u.createElement("input");
            n.value = "t";
            n.type = "radio";
            f.radioValue = "t" === n.value
        }();
    ft = i.expr.attrHandle;
    i.fn.extend({
        attr: function (n, t) {
            return a(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function (n) {
            return this.each(function () {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function (n, t, r) {
            var u, f, e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e) return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (f = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? du : void 0)), void 0 !== r ? null === r ? void i.removeAttr(n, t) : f && "set" in f && void 0 !== (u = f.set(n, r, t)) ? u : (n.setAttribute(t, r + ""), r) : f && "get" in f && null !== (u = f.get(n, t)) ? u : (u = i.find.attr(n, t), null == u ? void 0 : u))
        },
        attrHooks: {
            type: {
                set: function (n, t) {
                    if (!f.radioValue && "radio" === t && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t), r && (n.value = r), t
                    }
                }
            }
        },
        removeAttr: function (n, t) {
            var i, u = 0,
                r = t && t.match(h);
            if (r && 1 === n.nodeType)
                while (i = r[u++]) n.removeAttribute(i)
        }
    });
    du = {
        set: function (n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function (n, t) {
        var r = ft[t] || i.find.attr;
        ft[t] = function (n, t, i) {
            var f, e, u = t.toLowerCase();
            return i || (e = ft[u], ft[u] = f, f = null != r(n, t, i) ? u : null, ft[u] = e), f
        }
    });
    gu = /^(?:input|select|textarea|button)$/i;
    nf = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function (n, t) {
            return a(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function (n) {
            return this.each(function () {
                delete this[i.propFix[n] || n]
            })
        }
    });
    i.extend({
        prop: function (n, t, r) {
            var f, u, e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e) return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function (n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : gu.test(n.nodeName) || nf.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    f.optSelected || (i.propHooks.selected = {
        get: function (n) {
            var t = n.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (n) {
            var t = n.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        i.propFix[this.toLowerCase()] = this
    });
    i.fn.extend({
        addClass: function (n) {
            var o, t, r, u, f, s, e, c = 0;
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).addClass(n.call(this, t, k(this)))
            });
            if ("string" == typeof n && n)
                for (o = n.match(h) || []; t = this[c++];)
                    if (u = k(t), r = 1 === t.nodeType && " " + b(u) + " ") {
                        for (s = 0; f = o[s++];) r.indexOf(" " + f + " ") < 0 && (r += f + " ");
                        e = b(r);
                        u !== e && t.setAttribute("class", e)
                    } return this
        },
        removeClass: function (n) {
            var o, r, t, u, f, s, e, c = 0;
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).removeClass(n.call(this, t, k(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof n && n)
                for (o = n.match(h) || []; r = this[c++];)
                    if (u = k(r), t = 1 === r.nodeType && " " + b(u) + " ") {
                        for (s = 0; f = o[s++];)
                            while (t.indexOf(" " + f + " ") > -1) t = t.replace(" " + f + " ", " ");
                        e = b(t);
                        u !== e && r.setAttribute("class", e)
                    } return this
        },
        toggleClass: function (n, t) {
            var u = typeof n;
            return "boolean" == typeof t && "string" === u ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function (r) {
                i(this).toggleClass(n.call(this, r, k(this), t), t)
            }) : this.each(function () {
                var t, e, f, o;
                if ("string" === u)
                    for (e = 0, f = i(this), o = n.match(h) || []; t = o[e++];) f.hasClass(t) ? f.removeClass(t) : f.addClass(t);
                else void 0 !== n && "boolean" !== u || (t = k(this), t && r.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || n === !1 ? "" : r.get(this, "__className__") || ""))
            })
        },
        hasClass: function (n) {
            for (var t, r = 0, i = " " + n + " "; t = this[r++];)
                if (1 === t.nodeType && (" " + b(k(t)) + " ").indexOf(i) > -1) return !0;
            return !1
        }
    });
    tf = /\r/g;
    i.fn.extend({
        val: function (n) {
            var t, r, f, u = this[0];
            return arguments.length ? (f = i.isFunction(n), this.each(function (r) {
                var u;
                1 === this.nodeType && (u = f ? n.call(this, r, i(this).val()) : n, null == u ? u = "" : "number" == typeof u ? u += "" : i.isArray(u) && (u = i.map(u, function (n) {
                    return null == n ? "" : n + ""
                })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
            })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(u, "value")) ? r : (r = u.value, "string" == typeof r ? r.replace(tf, "") : null == r ? "" : r)) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function (n) {
                    var t = i.find.attr(n, "value");
                    return null != t ? t : b(i.text(n))
                }
            },
            select: {
                get: function (n) {
                    for (var e, t, o = n.options, u = n.selectedIndex, f = "select-one" === n.type, s = f ? null : [], h = f ? u + 1 : o.length, r = u < 0 ? h : f ? u : 0; r < h; r++)
                        if (t = o[r], (t.selected || r === u) && !t.disabled && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(), f) return e;
                            s.push(e)
                        } return s
                },
                set: function (n, t) {
                    for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--;) r = f[o], (r.selected = i.inArray(i.valHooks.option.get(r), e) > -1) && (u = !0);
                    return u || (n.selectedIndex = -1), e
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function () {
        i.valHooks[this] = {
            set: function (n, t) {
                if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) > -1
            }
        };
        f.checkOn || (i.valHooks[this].get = function (n) {
            return null === n.getAttribute("value") ? "on" : n.value
        })
    });
    ci = /^(?:focusinfocus|focusoutblur)$/;
    i.extend(i.event, {
        trigger: function (t, f, e, o) {
            var w, s, c, b, a, v, l, p = [e || u],
                h = yt.call(t, "type") ? t.type : t,
                y = yt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = e = e || u, 3 !== e.nodeType && 8 !== e.nodeType && !ci.test(h + i.event.triggered) && (h.indexOf(".") > -1 && (y = h.split("."), h = y.shift(), y.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = e), f = null == f ? [t] : i.makeArray(f, [t]), l = i.event.special[h] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
                if (!o && !l.noBubble && !i.isWindow(e)) {
                    for (b = l.delegateType || h, ci.test(b + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
                    c === (e.ownerDocument || u) && p.push(c.defaultView || c.parentWindow || n)
                }
                for (w = 0;
                    (s = p[w++]) && !t.isPropagationStopped();) t.type = w > 1 ? b : l.bindType || h, v = (r.get(s, "events") || {})[t.type] && r.get(s, "handle"), v && v.apply(s, f), v = a && s[a], v && v.apply && st(s) && (t.result = v.apply(s, f), t.result === !1 && t.preventDefault());
                return t.type = h, o || t.isDefaultPrevented() || l._default && l._default.apply(p.pop(), f) !== !1 || !st(e) || a && i.isFunction(e[h]) && !i.isWindow(e) && (c = e[a], c && (e[a] = null), i.event.triggered = h, e[h](), i.event.triggered = void 0, c && (e[a] = c)), t.result
            }
        },
        simulate: function (n, t, r) {
            var u = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0
            });
            i.event.trigger(u, null, t)
        }
    });
    i.fn.extend({
        trigger: function (n, t) {
            return this.each(function () {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function (n, t) {
            var r = this[0];
            if (r) return i.event.trigger(n, t, r, !0)
        }
    });
    i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (n, t) {
        i.fn[t] = function (n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    });
    i.fn.extend({
        hover: function (n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    });
    f.focusin = "onfocusin" in n;
    f.focusin || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function (n, t) {
        var u = function (n) {
            i.event.simulate(t, n.target, i.event.fix(n))
        };
        i.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
            }
        }
    });
    var at = n.location,
        rf = i.now(),
        li = /\?/;
    i.parseXML = function (t) {
        var r;
        if (!t || "string" != typeof t) return null;
        try {
            r = (new n.DOMParser).parseFromString(t, "text/xml")
        } catch (u) {
            r = void 0
        }
        return r && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r
    };
    var ke = /\[\]$/,
        uf = /\r?\n/g,
        de = /^(?:submit|button|image|reset|file)$/i,
        ge = /^(?:input|select|textarea|keygen)/i;
    i.param = function (n, t) {
        var r, u = [],
            f = function (n, t) {
                var r = i.isFunction(t) ? t() : t;
                u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == r ? "" : r)
            };
        if (i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function () {
            f(this.name, this.value)
        });
        else
            for (r in n) ai(r, n[r], t, f);
        return u.join("&")
    };
    i.fn.extend({
        serialize: function () {
            return i.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function () {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && ge.test(this.nodeName) && !de.test(n) && (this.checked || !wr.test(n))
            }).map(function (n, t) {
                var r = i(this).val();
                return null == r ? null : i.isArray(r) ? i.map(r, function (n) {
                    return {
                        name: t.name,
                        value: n.replace(uf, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(uf, "\r\n")
                }
            }).get()
        }
    });
    var no = /%20/g,
        to = /#.*$/,
        io = /([?&])_=[^&]*/,
        ro = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        uo = /^(?:GET|HEAD)$/,
        fo = /^\/\//,
        ff = {},
        vi = {},
        ef = "*/".concat("*"),
        yi = u.createElement("a");
    return yi.href = at.href, i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: at.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(at.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ef,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (n, t) {
            return t ? pi(pi(n, i.ajaxSettings), t) : pi(i.ajaxSettings, n)
        },
        ajaxPrefilter: of(ff),
        ajaxTransport: of(vi),
        ajax: function (t, r) {
            function b(t, r, u, h) {
                var y, rt, g, p, b, l = r;
                s || (s = !0, d && n.clearTimeout(d), a = void 0, k = h || "", e.readyState = t > 0 ? 4 : 0, y = t >= 200 && t < 300 || 304 === t, u && (p = eo(f, e, u)), p = oo(f, p, e, y), y ? (f.ifModified && (b = e.getResponseHeader("Last-Modified"), b && (i.lastModified[o] = b), b = e.getResponseHeader("etag"), b && (i.etag[o] = b)), 204 === t || "HEAD" === f.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = p.state, rt = p.data, g = p.error, y = !g)) : (g = l, !t && l || (l = "error", t < 0 && (t = 0))), e.status = t, e.statusText = (r || l) + "", y ? tt.resolveWith(c, [rt, l, e]) : tt.rejectWith(c, [e, l, g]), e.statusCode(w), w = void 0, v && nt.trigger(y ? "ajaxSuccess" : "ajaxError", [e, f, y ? rt : g]), it.fireWith(c, [e, l]), v && (nt.trigger("ajaxComplete", [e, f]), --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (r = t, t = void 0);
            r = r || {};
            var a, o, k, y, d, l, s, v, g, p, f = i.ajaxSetup({}, r),
                c = f.context || f,
                nt = f.context && (c.nodeType || c.jquery) ? i(c) : i.event,
                tt = i.Deferred(),
                it = i.Callbacks("once memory"),
                w = f.statusCode || {},
                rt = {},
                ut = {},
                ft = "canceled",
                e = {
                    readyState: 0,
                    getResponseHeader: function (n) {
                        var t;
                        if (s) {
                            if (!y)
                                for (y = {}; t = ro.exec(k);) y[t[1].toLowerCase()] = t[2];
                            t = y[n.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return s ? k : null
                    },
                    setRequestHeader: function (n, t) {
                        return null == s && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n, rt[n] = t), this
                    },
                    overrideMimeType: function (n) {
                        return null == s && (f.mimeType = n), this
                    },
                    statusCode: function (n) {
                        var t;
                        if (n)
                            if (s) e.always(n[e.status]);
                            else
                                for (t in n) w[t] = [w[t], n[t]];
                        return this
                    },
                    abort: function (n) {
                        var t = n || ft;
                        return a && a.abort(t), b(0, t), this
                    }
                };
            if (tt.promise(e), f.url = ((t || f.url || at.href) + "").replace(fo, at.protocol + "//"), f.type = r.method || r.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(h) || [""], null == f.crossDomain) {
                l = u.createElement("a");
                try {
                    l.href = f.url;
                    l.href = l.href;
                    f.crossDomain = yi.protocol + "//" + yi.host != l.protocol + "//" + l.host
                } catch (et) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = i.param(f.data, f.traditional)), sf(ff, f, r, e), s) return e;
            v = i.event && f.global;
            v && 0 == i.active++ && i.event.trigger("ajaxStart");
            f.type = f.type.toUpperCase();
            f.hasContent = !uo.test(f.type);
            o = f.url.replace(to, "");
            f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(no, "+")) : (p = f.url.slice(o.length), f.data && (o += (li.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (o = o.replace(io, "$1"), p = (li.test(o) ? "&" : "?") + "_=" + rf++ + p), f.url = o + p);
            f.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o]));
            (f.data && f.hasContent && f.contentType !== !1 || r.contentType) && e.setRequestHeader("Content-Type", f.contentType);
            e.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + ef + "; q=0.01" : "") : f.accepts["*"]);
            for (g in f.headers) e.setRequestHeader(g, f.headers[g]);
            if (f.beforeSend && (f.beforeSend.call(c, e, f) === !1 || s)) return e.abort();
            if (ft = "abort", it.add(f.complete), e.done(f.success), e.fail(f.error), a = sf(vi, f, r, e)) {
                if (e.readyState = 1, v && nt.trigger("ajaxSend", [e, f]), s) return e;
                f.async && f.timeout > 0 && (d = n.setTimeout(function () {
                    e.abort("timeout")
                }, f.timeout));
                try {
                    s = !1;
                    a.send(rt, b)
                } catch (et) {
                    if (s) throw et;
                    b(-1, et)
                }
            } else b(-1, "No Transport");
            return e
        },
        getJSON: function (n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function (n, t) {
            return i.get(n, void 0, t, "script")
        }
    }), i.each(["get", "post"], function (n, t) {
        i[t] = function (n, r, u, f) {
            return i.isFunction(r) && (f = f || u, u = r, r = void 0), i.ajax(i.extend({
                url: n,
                type: t,
                dataType: f,
                data: r,
                success: u
            }, i.isPlainObject(n) && n))
        }
    }), i._evalUrl = function (n) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, i.fn.extend({
        wrapAll: function (n) {
            var t;
            return this[0] && (i.isFunction(n) && (n = n.call(this[0])), t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                return n
            }).append(this)), this
        },
        wrapInner: function (n) {
            return i.isFunction(n) ? this.each(function (t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function () {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function (n) {
            var t = i.isFunction(n);
            return this.each(function (r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function (n) {
            return this.parent(n).not("body").each(function () {
                i(this).replaceWith(this.childNodes)
            }), this
        }
    }), i.expr.pseudos.hidden = function (n) {
        return !i.expr.pseudos.visible(n)
    }, i.expr.pseudos.visible = function (n) {
        return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length)
    }, i.ajaxSettings.xhr = function () {
        try {
            return new n.XMLHttpRequest
        } catch (t) { }
    }, hf = {
        0: 200,
        1223: 204
    }, et = i.ajaxSettings.xhr(), f.cors = !!et && "withCredentials" in et, f.ajax = et = !!et, i.ajaxTransport(function (t) {
        var i, r;
        if (f.cors || et && !t.crossDomain) return {
            send: function (u, f) {
                var o, e = t.xhr();
                if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) e[o] = t.xhrFields[o];
                t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType);
                t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest");
                for (o in u) e.setRequestHeader(o, u[o]);
                i = function (n) {
                    return function () {
                        i && (i = r = e.onload = e.onerror = e.onabort = e.onreadystatechange = null, "abort" === n ? e.abort() : "error" === n ? "number" != typeof e.status ? f(0, "error") : f(e.status, e.statusText) : f(hf[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? {
                            binary: e.response
                        } : {
                            text: e.responseText
                        }, e.getAllResponseHeaders()))
                    }
                };
                e.onload = i();
                r = e.onerror = i("error");
                void 0 !== e.onabort ? e.onabort = r : e.onreadystatechange = function () {
                    4 === e.readyState && n.setTimeout(function () {
                        i && r()
                    })
                };
                i = i("abort");
                try {
                    e.send(t.hasContent && t.data || null)
                } catch (s) {
                    if (i) throw s;
                }
            },
            abort: function () {
                i && i()
            }
        }
    }), i.ajaxPrefilter(function (n) {
        n.crossDomain && (n.contents.script = !1)
    }), i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (n) {
                return i.globalEval(n), n
            }
        }
    }), i.ajaxPrefilter("script", function (n) {
        void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    }), i.ajaxTransport("script", function (n) {
        if (n.crossDomain) {
            var r, t;
            return {
                send: function (f, e) {
                    r = i("<script>").prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", t = function (n) {
                        r.remove();
                        t = null;
                        n && e("error" === n.type ? 404 : 200, n.type)
                    });
                    u.head.appendChild(r[0])
                },
                abort: function () {
                    t && t()
                }
            }
        }
    }), wi = [], ii = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var n = wi.pop() || i.expando + "_" + rf++;
            return this[n] = !0, n
        }
    }), i.ajaxPrefilter("json jsonp", function (t, r, u) {
        var f, e, o, s = t.jsonp !== !1 && (ii.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && ii.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ii, "$1" + f) : t.jsonp !== !1 && (t.url += (li.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function () {
            return o || i.error(f + " was not called"), o[0]
        }, t.dataTypes[0] = "json", e = n[f], n[f] = function () {
            o = arguments
        }, u.always(function () {
            void 0 === e ? i(n).removeProp(f) : n[f] = e;
            t[f] && (t.jsonpCallback = r.jsonpCallback, wi.push(f));
            o && i.isFunction(e) && e(o[0]);
            o = e = void 0
        }), "script"
    }), f.createHTMLDocument = function () {
        var n = u.implementation.createHTMLDocument("").body;
        return n.innerHTML = "<form><\/form><form><\/form>", 2 === n.childNodes.length
    }(), i.parseHTML = function (n, t, r) {
        if ("string" != typeof n) return [];
        "boolean" == typeof t && (r = t, t = !1);
        var s, e, o;
        return t || (f.createHTMLDocument ? (t = u.implementation.createHTMLDocument(""), s = t.createElement("base"), s.href = u.location.href, t.head.appendChild(s)) : t = u), e = rr.exec(n), o = !r && [], e ? [t.createElement(e[1])] : (e = gr([n], t, o), o && o.length && i(o).remove(), i.merge([], e.childNodes))
    }, i.fn.load = function (n, t, r) {
        var u, o, s, f = this,
            e = n.indexOf(" ");
        return e > -1 && (u = b(n.slice(e)), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (o = "POST"), f.length > 0 && i.ajax({
            url: n,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function (n) {
            s = arguments;
            f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
        }).always(r && function (n, t) {
            f.each(function () {
                r.apply(this, s || [n.responseText, t, n])
            })
        }), this
    }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (n, t) {
        i.fn[t] = function (n) {
            return this.on(t, n)
        }
    }), i.expr.pseudos.animated = function (n) {
        return i.grep(i.timers, function (t) {
            return n === t.elem
        }).length
    }, i.offset = {
        setOffset: function (n, t, r) {
            var e, o, s, h, u, c, v, l = i.css(n, "position"),
                a = i(n),
                f = {};
            "static" === l && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            v = ("absolute" === l || "fixed" === l) && (s + c).indexOf("auto") > -1;
            v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            i.isFunction(t) && (t = t.call(n, r, i.extend({}, u)));
            null != t.top && (f.top = t.top - u.top + h);
            null != t.left && (f.left = t.left - u.left + o);
            "using" in t ? t.using.call(n, f) : a.css(f)
        }
    }, i.fn.extend({
        offset: function (n) {
            if (arguments.length) return void 0 === n ? this : this.each(function (t) {
                i.offset.setOffset(this, n, t)
            });
            var u, f, t, e, r = this[0];
            if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), t.width || t.height ? (e = r.ownerDocument, f = cf(e), u = e.documentElement, {
                top: t.top + f.pageYOffset - u.clientTop,
                left: t.left + f.pageXOffset - u.clientLeft
            }) : t) : {
                top: 0,
                left: 0
            }
        },
        position: function () {
            if (this[0]) {
                var t, r, u = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (t = this.offsetParent(), r = this.offset(), i.nodeName(t[0], "html") || (n = t.offset()), n = {
                    top: n.top + i.css(t[0], "borderTopWidth", !0),
                    left: n.left + i.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: r.top - n.top - i.css(u, "marginTop", !0),
                    left: r.left - n.left - i.css(u, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var n = this.offsetParent; n && "static" === i.css(n, "position");) n = n.offsetParent;
                return n || dt
            })
        }
    }), i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (n, t) {
        var r = "pageYOffset" === t;
        i.fn[n] = function (i) {
            return a(this, function (n, i, u) {
                var f = cf(n);
                return void 0 === u ? f ? f[t] : n[i] : void (f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u)
            }, n, i, arguments.length)
        }
    }), i.each(["top", "left"], function (n, t) {
        i.cssHooks[t] = eu(f.pixelPosition, function (n, r) {
            if (r) return r = lt(n, t), hi.test(r) ? i(n).position()[t] + "px" : r
        })
    }), i.each({
        Height: "height",
        Width: "width"
    }, function (n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function (r, u) {
            i.fn[u] = function (f, e) {
                var o = arguments.length && (r || "boolean" != typeof f),
                    s = r || (f === !0 || e === !0 ? "margin" : "border");
                return a(this, function (t, r, f) {
                    var e;
                    return i.isWindow(t) ? 0 === u.indexOf("outer") ? t["inner" + n] : t.document.documentElement["client" + n] : 9 === t.nodeType ? (e = t.documentElement, Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : void 0 === f ? i.css(t, r, s) : i.style(t, r, f, s)
                }, t, o ? f : void 0, o)
            }
        })
    }), i.fn.extend({
        bind: function (n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function (n, t) {
            return this.off(n, null, t)
        },
        delegate: function (n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function (n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    }), i.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
        return i
    }), lf = n.jQuery, af = n.$, i.noConflict = function (t) {
        return n.$ === i && (n.$ = af), t && n.jQuery === i && (n.jQuery = lf), i
    }, t || (n.jQuery = n.$ = i), i
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (n) {
    "use strict";
    var t = n.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery); + function (n) {
    "use strict";

    function t() {
        var i = document.createElement("bootstrap"),
            n = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var t in n)
            if (void 0 !== i.style[t]) return {
                end: n[t]
            };
        return !1
    }
    n.fn.emulateTransitionEnd = function (t) {
        var i = !1,
            u = this,
            r;
        n(this).one("bsTransitionEnd", function () {
            i = !0
        });
        return r = function () {
            i || n(u).trigger(n.support.transition.end)
        }, setTimeout(r, t), this
    };
    n(function () {
        n.support.transition = t();
        n.support.transition && (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
            handle: function (t) {
                if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery); + function (n) {
    "use strict";

    function u(i) {
        return this.each(function () {
            var r = n(this),
                u = r.data("bs.alert");
            u || r.data("bs.alert", u = new t(this));
            "string" == typeof i && u[i].call(r)
        })
    }
    var i = '[data-dismiss="alert"]',
        t = function (t) {
            n(t).on("click", i, this.close)
        },
        r;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 150;
    t.prototype.close = function (i) {
        function e() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var f = n(this),
            u = f.attr("data-target"),
            r;
        u || (u = f.attr("href"), u = u && u.replace(/.*(?=#[^\s]*$)/, ""));
        r = n("#" === u ? [] : u);
        i && i.preventDefault();
        r.length || (r = f.closest(".alert"));
        r.trigger(i = n.Event("close.bs.alert"));
        i.isDefaultPrevented() || (r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e())
    };
    r = n.fn.alert;
    n.fn.alert = u;
    n.fn.alert.Constructor = t;
    n.fn.alert.noConflict = function () {
        return n.fn.alert = r, this
    };
    n(document).on("click.bs.alert.data-api", i, t.prototype.close)
}(jQuery); + function (n) {
    "use strict";

    function i(i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("bs.button"),
                f = "object" == typeof i && i;
            r || u.data("bs.button", r = new t(this, f));
            "toggle" == i ? r.toggle() : i && r.setState(i)
        })
    }
    var t = function (i, r) {
        this.$element = n(i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.isLoading = !1
    },
        r;
    t.VERSION = "3.3.7";
    t.DEFAULTS = {
        loadingText: "loading..."
    };
    t.prototype.setState = function (t) {
        var i = "disabled",
            r = this.$element,
            f = r.is("input") ? "val" : "html",
            u = r.data();
        t += "Text";
        null == u.resetText && r.data("resetText", r[f]());
        setTimeout(n.proxy(function () {
            r[f](null == u[t] ? this.options[t] : u[t]);
            "loadingText" == t ? (this.isLoading = !0, r.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, r.removeClass(i).removeAttr(i).prop(i, !1))
        }, this), 0)
    };
    t.prototype.toggle = function () {
        var t = !0,
            i = this.$element.closest('[data-toggle="buttons"]'),
            n;
        i.length ? (n = this.$element.find("input"), "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), i.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")) : (this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active"))
    };
    r = n.fn.button;
    n.fn.button = i;
    n.fn.button.Constructor = t;
    n.fn.button.noConflict = function () {
        return n.fn.button = r, this
    };
    n(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
        var r = n(t.target).closest(".btn");
        i.call(r, "toggle");
        n(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
        n(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery); + function (n) {
    "use strict";

    function i(i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("bs.carousel"),
                f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i),
                e = "string" == typeof i ? i : f.slide;
            r || u.data("bs.carousel", r = new t(this, f));
            "number" == typeof i ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
        })
    }
    var t = function (t, i) {
        this.$element = n(t);
        this.$indicators = this.$element.find(".carousel-indicators");
        this.options = i;
        this.paused = null;
        this.sliding = null;
        this.interval = null;
        this.$active = null;
        this.$items = null;
        this.options.keyboard && this.$element.on("keydown.bs.carousel", n.proxy(this.keydown, this));
        "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", n.proxy(this.pause, this)).on("mouseleave.bs.carousel", n.proxy(this.cycle, this))
    },
        u, r;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 600;
    t.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    };
    t.prototype.keydown = function (n) {
        if (!/input|textarea/i.test(n.target.tagName)) {
            switch (n.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            n.preventDefault()
        }
    };
    t.prototype.cycle = function (t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this
    };
    t.prototype.getItemIndex = function (n) {
        return this.$items = n.parent().children(".item"), this.$items.index(n || this.$active)
    };
    t.prototype.getItemForDirection = function (n, t) {
        var i = this.getItemIndex(t),
            f = "prev" == n && 0 === i || "next" == n && i == this.$items.length - 1,
            r, u;
        return f && !this.options.wrap ? t : (r = "prev" == n ? -1 : 1, u = (i + r) % this.$items.length, this.$items.eq(u))
    };
    t.prototype.to = function (n) {
        var i = this,
            t = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(n > this.$items.length - 1 || n < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
            i.to(n)
        }) : t == n ? this.pause().cycle() : this.slide(n > t ? "next" : "prev", this.$items.eq(n))
    };
    t.prototype.pause = function (t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    };
    t.prototype.next = function () {
        if (!this.sliding) return this.slide("next")
    };
    t.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev")
    };
    t.prototype.slide = function (i, r) {
        var e = this.$element.find(".item.active"),
            u = r || this.getItemForDirection(i, e),
            l = this.interval,
            f = "next" == i ? "left" : "right",
            a = this,
            o, s, h, c;
        return u.hasClass("active") ? this.sliding = !1 : (o = u[0], s = n.Event("slide.bs.carousel", {
            relatedTarget: o,
            direction: f
        }), (this.$element.trigger(s), !s.isDefaultPrevented()) ? ((this.sliding = !0, l && this.pause(), this.$indicators.length) && (this.$indicators.find(".active").removeClass("active"), h = n(this.$indicators.children()[this.getItemIndex(u)]), h && h.addClass("active")), c = n.Event("slid.bs.carousel", {
            relatedTarget: o,
            direction: f
        }), n.support.transition && this.$element.hasClass("slide") ? (u.addClass(i), u[0].offsetWidth, e.addClass(f), u.addClass(f), e.one("bsTransitionEnd", function () {
            u.removeClass([i, f].join(" ")).addClass("active");
            e.removeClass(["active", f].join(" "));
            a.sliding = !1;
            setTimeout(function () {
                a.$element.trigger(c)
            }, 0)
        }).emulateTransitionEnd(t.TRANSITION_DURATION)) : (e.removeClass("active"), u.addClass("active"), this.sliding = !1, this.$element.trigger(c)), l && this.cycle(), this) : void 0)
    };
    u = n.fn.carousel;
    n.fn.carousel = i;
    n.fn.carousel.Constructor = t;
    n.fn.carousel.noConflict = function () {
        return n.fn.carousel = u, this
    };
    r = function (t) {
        var o, r = n(this),
            u = n(r.attr("data-target") || (o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")),
            e, f;
        u.hasClass("carousel") && (e = n.extend({}, u.data(), r.data()), f = r.attr("data-slide-to"), f && (e.interval = !1), i.call(u, e), f && u.data("bs.carousel").to(f), t.preventDefault())
    };
    n(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r);
    n(window).on("load", function () {
        n('[data-ride="carousel"]').each(function () {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery); + function (n) {
    "use strict";

    function r(t) {
        var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return n(r)
    }

    function i(i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("bs.collapse"),
                f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i);
            !r && f.toggle && /show|hide/.test(i) && (f.toggle = !1);
            r || u.data("bs.collapse", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    var t = function (i, r) {
        this.$element = n(i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.$trigger = n('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]');
        this.transitioning = null;
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
        this.options.toggle && this.toggle()
    },
        u;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 350;
    t.DEFAULTS = {
        toggle: !0
    };
    t.prototype.dimension = function () {
        var n = this.$element.hasClass("width");
        return n ? "width" : "height"
    };
    t.prototype.show = function () {
        var f, r, e, u, o, s;
        if (!this.transitioning && !this.$element.hasClass("in") && (r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"), !(r && r.length && (f = r.data("bs.collapse"), f && f.transitioning)) && (e = n.Event("show.bs.collapse"), this.$element.trigger(e), !e.isDefaultPrevented()))) {
            if (r && r.length && (i.call(r, "hide"), f || r.data("bs.collapse", null)), u = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1, o = function () {
                this.$element.removeClass("collapsing").addClass("collapse in")[u]("");
                this.transitioning = 0;
                this.$element.trigger("shown.bs.collapse")
            }, !n.support.transition) return o.call(this);
            s = n.camelCase(["scroll", u].join("-"));
            this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])
        }
    };
    t.prototype.hide = function () {
        var r, i, u;
        if (!this.transitioning && this.$element.hasClass("in") && (r = n.Event("hide.bs.collapse"), this.$element.trigger(r), !r.isDefaultPrevented())) return i = this.dimension(), this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1, u = function () {
            this.transitioning = 0;
            this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        }, n.support.transition ? void this.$element[i](0).one("bsTransitionEnd", n.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : u.call(this)
    };
    t.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    t.prototype.getParent = function () {
        return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function (t, i) {
            var u = n(i);
            this.addAriaAndCollapsedClass(r(u), u)
        }, this)).end()
    };
    t.prototype.addAriaAndCollapsedClass = function (n, t) {
        var i = n.hasClass("in");
        n.attr("aria-expanded", i);
        t.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    u = n.fn.collapse;
    n.fn.collapse = i;
    n.fn.collapse.Constructor = t;
    n.fn.collapse.noConflict = function () {
        return n.fn.collapse = u, this
    };
    n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
        var u = n(this);
        u.attr("data-target") || t.preventDefault();
        var f = r(u),
            e = f.data("bs.collapse"),
            o = e ? "toggle" : u.data();
        i.call(f, o)
    })
}(jQuery); + function (n) {
    "use strict";

    function r(t) {
        var i = t.attr("data-target"),
            r;
        return i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent()
    }

    function u(t) {
        t && 3 === t.which || (n(o).remove(), n(i).each(function () {
            var u = n(this),
                i = r(u),
                f = {
                    relatedTarget: this
                };
            i.hasClass("open") && (t && "click" == t.type && /input|textarea/i.test(t.target.tagName) && n.contains(i[0], t.target) || (i.trigger(t = n.Event("hide.bs.dropdown", f)), t.isDefaultPrevented() || (u.attr("aria-expanded", "false"), i.removeClass("open").trigger(n.Event("hidden.bs.dropdown", f)))))
        }))
    }

    function e(i) {
        return this.each(function () {
            var r = n(this),
                u = r.data("bs.dropdown");
            u || r.data("bs.dropdown", u = new t(this));
            "string" == typeof i && u[i].call(r)
        })
    }
    var o = ".dropdown-backdrop",
        i = '[data-toggle="dropdown"]',
        t = function (t) {
            n(t).on("click.bs.dropdown", this.toggle)
        },
        f;
    t.VERSION = "3.3.7";
    t.prototype.toggle = function (t) {
        var f = n(this),
            i, o, e;
        if (!f.is(".disabled, :disabled")) {
            if (i = r(f), o = i.hasClass("open"), u(), !o) {
                if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", u), e = {
                    relatedTarget: this
                }, i.trigger(t = n.Event("show.bs.dropdown", e)), t.isDefaultPrevented()) return;
                f.trigger("focus").attr("aria-expanded", "true");
                i.toggleClass("open").trigger(n.Event("shown.bs.dropdown", e))
            }
            return !1
        }
    };
    t.prototype.keydown = function (t) {
        var e, o, s, h, f, u;
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
            if (o = r(e), s = o.hasClass("open"), !s && 27 != t.which || s && 27 == t.which) return 27 == t.which && o.find(i).trigger("focus"), e.trigger("click");
            h = " li:not(.disabled):visible a";
            f = o.find(".dropdown-menu" + h);
            f.length && (u = f.index(t.target), 38 == t.which && u > 0 && u--, 40 == t.which && u < f.length - 1 && u++, ~u || (u = 0), f.eq(u).trigger("focus"))
        }
    };
    f = n.fn.dropdown;
    n.fn.dropdown = e;
    n.fn.dropdown.Constructor = t;
    n.fn.dropdown.noConflict = function () {
        return n.fn.dropdown = f, this
    };
    n(document).on("click.bs.dropdown.data-api", u).on("click.bs.dropdown.data-api", ".dropdown form", function (n) {
        n.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", t.prototype.keydown)
}(jQuery); + function (n) {
    "use strict";

    function i(i, r) {
        return this.each(function () {
            var f = n(this),
                u = f.data("bs.modal"),
                e = n.extend({}, t.DEFAULTS, f.data(), "object" == typeof i && i);
            u || f.data("bs.modal", u = new t(this, e));
            "string" == typeof i ? u[i](r) : e.show && u.show(r)
        })
    }
    var t = function (t, i) {
        this.options = i;
        this.$body = n(document.body);
        this.$element = n(t);
        this.$dialog = this.$element.find(".modal-dialog");
        this.$backdrop = null;
        this.isShown = null;
        this.originalBodyPad = null;
        this.scrollbarWidth = 0;
        this.ignoreBackdropClick = !1;
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    },
        r;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 300;
    t.BACKDROP_TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    };
    t.prototype.toggle = function (n) {
        return this.isShown ? this.hide() : this.show(n)
    };
    t.prototype.show = function (i) {
        var r = this,
            u = n.Event("show.bs.modal", {
                relatedTarget: i
            });
        this.$element.trigger(u);
        this.isShown || u.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            r.$element.one("mouseup.dismiss.bs.modal", function (t) {
                n(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var f = n.support.transition && r.$element.hasClass("fade"),
                u;
            r.$element.parent().length || r.$element.appendTo(r.$body);
            r.$element.show().scrollTop(0);
            r.adjustDialog();
            f && r.$element[0].offsetWidth;
            r.$element.addClass("in");
            r.enforceFocus();
            u = n.Event("shown.bs.modal", {
                relatedTarget: i
            });
            f ? r.$dialog.one("bsTransitionEnd", function () {
                r.$element.trigger("focus").trigger(u)
            }).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u)
        }))
    };
    t.prototype.hide = function (i) {
        i && i.preventDefault();
        i = n.Event("hide.bs.modal");
        this.$element.trigger(i);
        this.isShown && !i.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
    };
    t.prototype.enforceFocus = function () {
        n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function (n) {
            document === n.target || this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus")
        }, this))
    };
    t.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", n.proxy(function (n) {
            27 == n.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    };
    t.prototype.resize = function () {
        this.isShown ? n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this)) : n(window).off("resize.bs.modal")
    };
    t.prototype.hideModal = function () {
        var n = this;
        this.$element.hide();
        this.backdrop(function () {
            n.$body.removeClass("modal-open");
            n.resetAdjustments();
            n.resetScrollbar();
            n.$element.trigger("hidden.bs.modal")
        })
    };
    t.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    };
    t.prototype.backdrop = function (i) {
        var e = this,
            f = this.$element.hasClass("fade") ? "fade" : "",
            r, u;
        if (this.isShown && this.options.backdrop) {
            if (r = n.support.transition && f, this.$backdrop = n(document.createElement("div")).addClass("modal-backdrop " + f).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", n.proxy(function (n) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (n.target === n.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return;
            r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), u = function () {
            e.removeBackdrop();
            i && i()
        }, n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : u()) : i && i()
    };
    t.prototype.handleUpdate = function () {
        this.adjustDialog()
    };
    t.prototype.adjustDialog = function () {
        var n = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : ""
        })
    };
    t.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    };
    t.prototype.checkScrollbar = function () {
        var n = window.innerWidth,
            t;
        n || (t = document.documentElement.getBoundingClientRect(), n = t.right - Math.abs(t.left));
        this.bodyIsOverflowing = document.body.clientWidth < n;
        this.scrollbarWidth = this.measureScrollbar()
    };
    t.prototype.setScrollbar = function () {
        var n = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        this.bodyIsOverflowing && this.$body.css("padding-right", n + this.scrollbarWidth)
    };
    t.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    };
    t.prototype.measureScrollbar = function () {
        var n = document.createElement("div"),
            t;
        return n.className = "modal-scrollbar-measure", this.$body.append(n), t = n.offsetWidth - n.clientWidth, this.$body[0].removeChild(n), t
    };
    r = n.fn.modal;
    n.fn.modal = i;
    n.fn.modal.Constructor = t;
    n.fn.modal.noConflict = function () {
        return n.fn.modal = r, this
    };
    n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
        var r = n(this),
            f = r.attr("href"),
            u = n(r.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, "")),
            e = u.data("bs.modal") ? "toggle" : n.extend({
                remote: !/#/.test(f) && f
            }, u.data(), r.data());
        r.is("a") && t.preventDefault();
        u.one("show.bs.modal", function (n) {
            n.isDefaultPrevented() || u.one("hidden.bs.modal", function () {
                r.is(":visible") && r.trigger("focus")
            })
        });
        i.call(u, e, this)
    })
}(jQuery); + function (n) {
    "use strict";

    function r(i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("bs.tooltip"),
                f = "object" == typeof i && i;
            !r && /destroy|hide/.test(i) || (r || u.data("bs.tooltip", r = new t(this, f)), "string" == typeof i && r[i]())
        })
    }
    var t = function (n, t) {
        this.type = null;
        this.options = null;
        this.enabled = null;
        this.timeout = null;
        this.hoverState = null;
        this.$element = null;
        this.inState = null;
        this.init("tooltip", n, t)
    },
        i;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    };
    t.prototype.init = function (t, i, r) {
        var f, e, u, o, s;
        if (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), this.$viewport = this.options.viewport && n(n.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (f = this.options.trigger.split(" "), e = f.length; e--;)
            if (u = f[e], "click" == u) this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
            else "manual" != u && (o = "hover" == u ? "mouseenter" : "focusin", s = "hover" == u ? "mouseleave" : "focusout", this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this)));
        this.options.selector ? this._options = n.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    };
    t.prototype.getDefaults = function () {
        return t.DEFAULTS
    };
    t.prototype.getOptions = function (t) {
        return t = n.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    };
    t.prototype.getDelegateOptions = function () {
        var t = {},
            i = this.getDefaults();
        return this._options && n.each(this._options, function (n, r) {
            i[n] != r && (t[n] = r)
        }), t
    };
    t.prototype.enter = function (t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState["focusin" == t.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void (i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void (i.timeout = setTimeout(function () {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    };
    t.prototype.isInStateTrue = function () {
        for (var n in this.inState)
            if (this.inState[n]) return !0;
        return !1
    };
    t.prototype.leave = function (t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState["focusout" == t.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void (i.timeout = setTimeout(function () {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    };
    t.prototype.show = function () {
        var c = n.Event("show.bs." + this.type),
            l, p, e, w, h;
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(c), l = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), c.isDefaultPrevented() || !l) return;
            var u = this,
                r = this.tip(),
                a = this.getUID(this.type);
            this.setContent();
            r.attr("id", a);
            this.$element.attr("aria-describedby", a);
            this.options.animation && r.addClass("fade");
            var i = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                v = /\s?auto?\s?/i,
                y = v.test(i);
            y && (i = i.replace(v, "") || "top");
            r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i).data("bs." + this.type, this);
            this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            this.$element.trigger("inserted.bs." + this.type);
            var f = this.getPosition(),
                o = r[0].offsetWidth,
                s = r[0].offsetHeight;
            y && (p = i, e = this.getPosition(this.$viewport), i = "bottom" == i && f.bottom + s > e.bottom ? "top" : "top" == i && f.top - s < e.top ? "bottom" : "right" == i && f.right + o > e.width ? "left" : "left" == i && f.left - o < e.left ? "right" : i, r.removeClass(p).addClass(i));
            w = this.getCalculatedOffset(i, f, o, s);
            this.applyPlacement(w, i);
            h = function () {
                var n = u.hoverState;
                u.$element.trigger("shown.bs." + u.type);
                u.hoverState = null;
                "out" == n && u.leave(u)
            };
            n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", h).emulateTransitionEnd(t.TRANSITION_DURATION) : h()
        }
    };
    t.prototype.applyPlacement = function (t, i) {
        var r = this.tip(),
            l = r[0].offsetWidth,
            e = r[0].offsetHeight,
            o = parseInt(r.css("margin-top"), 10),
            s = parseInt(r.css("margin-left"), 10),
            h, f, u;
        isNaN(o) && (o = 0);
        isNaN(s) && (s = 0);
        t.top += o;
        t.left += s;
        n.offset.setOffset(r[0], n.extend({
            using: function (n) {
                r.css({
                    top: Math.round(n.top),
                    left: Math.round(n.left)
                })
            }
        }, t), 0);
        r.addClass("in");
        h = r[0].offsetWidth;
        f = r[0].offsetHeight;
        "top" == i && f != e && (t.top = t.top + e - f);
        u = this.getViewportAdjustedDelta(i, t, h, f);
        u.left ? t.left += u.left : t.top += u.top;
        var c = /top|bottom/.test(i),
            a = c ? 2 * u.left - l + h : 2 * u.top - e + f,
            v = c ? "offsetWidth" : "offsetHeight";
        r.offset(t);
        this.replaceArrow(a, r[0][v], c)
    };
    t.prototype.replaceArrow = function (n, t, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - n / t) + "%").css(i ? "top" : "left", "")
    };
    t.prototype.setContent = function () {
        var n = this.tip(),
            t = this.getTitle();
        n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
        n.removeClass("fade in top bottom left right")
    };
    t.prototype.hide = function (i) {
        function f() {
            "in" != r.hoverState && u.detach();
            r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type);
            i && i()
        }
        var r = this,
            u = n(this.$tip),
            e = n.Event("hide.bs." + this.type);
        if (this.$element.trigger(e), !e.isDefaultPrevented()) return u.removeClass("in"), n.support.transition && u.hasClass("fade") ? u.one("bsTransitionEnd", f).emulateTransitionEnd(t.TRANSITION_DURATION) : f(), this.hoverState = null, this
    };
    t.prototype.fixTitle = function () {
        var n = this.$element;
        (n.attr("title") || "string" != typeof n.attr("data-original-title")) && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
    };
    t.prototype.hasContent = function () {
        return this.getTitle()
    };
    t.prototype.getPosition = function (t) {
        t = t || this.$element;
        var r = t[0],
            u = "BODY" == r.tagName,
            i = r.getBoundingClientRect();
        null == i.width && (i = n.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var f = window.SVGElement && r instanceof window.SVGElement,
            e = u ? {
                top: 0,
                left: 0
            } : f ? null : t.offset(),
            o = {
                scroll: u ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            s = u ? {
                width: n(window).width(),
                height: n(window).height()
            } : null;
        return n.extend({}, i, o, s, e)
    };
    t.prototype.getCalculatedOffset = function (n, t, i, r) {
        return "bottom" == n ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - i / 2
        } : "top" == n ? {
            top: t.top - r,
            left: t.left + t.width / 2 - i / 2
        } : "left" == n ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - i
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    };
    t.prototype.getViewportAdjustedDelta = function (n, t, i, r) {
        var f = {
            top: 0,
            left: 0
        },
            e, u, o, s, h, c;
        return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0, u = this.getPosition(this.$viewport), /right|left/.test(n) ? (o = t.top - e - u.scroll, s = t.top + e - u.scroll + r, o < u.top ? f.top = u.top - o : s > u.top + u.height && (f.top = u.top + u.height - s)) : (h = t.left - e, c = t.left + e + i, h < u.left ? f.left = u.left - h : c > u.right && (f.left = u.left + u.width - c)), f) : f
    };
    t.prototype.getTitle = function () {
        var t = this.$element,
            n = this.options;
        return t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    };
    t.prototype.getUID = function (n) {
        do n += ~~(1e6 * Math.random()); while (document.getElementById(n));
        return n
    };
    t.prototype.tip = function () {
        if (!this.$tip && (this.$tip = n(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    };
    t.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    };
    t.prototype.enable = function () {
        this.enabled = !0
    };
    t.prototype.disable = function () {
        this.enabled = !1
    };
    t.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    };
    t.prototype.toggle = function (t) {
        var i = this;
        t && (i = n(t.currentTarget).data("bs." + this.type), i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)));
        t ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    };
    t.prototype.destroy = function () {
        var n = this;
        clearTimeout(this.timeout);
        this.hide(function () {
            n.$element.off("." + n.type).removeData("bs." + n.type);
            n.$tip && n.$tip.detach();
            n.$tip = null;
            n.$arrow = null;
            n.$viewport = null;
            n.$element = null
        })
    };
    i = n.fn.tooltip;
    n.fn.tooltip = r;
    n.fn.tooltip.Constructor = t;
    n.fn.tooltip.noConflict = function () {
        return n.fn.tooltip = i, this
    }
}(jQuery); + function (n) {
    "use strict";

    function r(i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("bs.popover"),
                f = "object" == typeof i && i;
            !r && /destroy|hide/.test(i) || (r || u.data("bs.popover", r = new t(this, f)), "string" == typeof i && r[i]())
        })
    }
    var t = function (n, t) {
        this.init("popover", n, t)
    },
        i;
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.VERSION = "3.3.7";
    t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
    });
    t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype);
    t.prototype.constructor = t;
    t.prototype.getDefaults = function () {
        return t.DEFAULTS
    };
    t.prototype.setContent = function () {
        var n = this.tip(),
            i = this.getTitle(),
            t = this.getContent();
        n.find(".popover-title")[this.options.html ? "html" : "text"](i);
        n.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof t ? "html" : "append" : "text"](t);
        n.removeClass("fade top bottom left right in");
        n.find(".popover-title").html() || n.find(".popover-title").hide()
    };
    t.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    };
    t.prototype.getContent = function () {
        var t = this.$element,
            n = this.options;
        return t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content)
    };
    t.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    i = n.fn.popover;
    n.fn.popover = r;
    n.fn.popover.Constructor = t;
    n.fn.popover.noConflict = function () {
        return n.fn.popover = i, this
    }
}(jQuery); + function (n) {
    "use strict";

    function t(i, r) {
        this.$body = n(document.body);
        this.$scrollElement = n(n(i).is(document.body) ? window : i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this));
        this.refresh();
        this.process()
    }

    function i(i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("bs.scrollspy"),
                f = "object" == typeof i && i;
            r || u.data("bs.scrollspy", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    t.VERSION = "3.3.7";
    t.DEFAULTS = {
        offset: 10
    };
    t.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    };
    t.prototype.refresh = function () {
        var t = this,
            i = "offset",
            r = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        n.isWindow(this.$scrollElement[0]) || (i = "position", r = this.$scrollElement.scrollTop());
        this.$body.find(this.selector).map(function () {
            var f = n(this),
                u = f.data("target") || f.attr("href"),
                t = /^#./.test(u) && n(u);
            return t && t.length && t.is(":visible") && [
                [t[i]().top + r, u]
            ] || null
        }).sort(function (n, t) {
            return n[0] - t[0]
        }).each(function () {
            t.offsets.push(this[0]);
            t.targets.push(this[1])
        })
    };
    t.prototype.process = function () {
        var n, i = this.$scrollElement.scrollTop() + this.options.offset,
            f = this.getScrollHeight(),
            e = this.options.offset + f - this.$scrollElement.height(),
            t = this.offsets,
            r = this.targets,
            u = this.activeTarget;
        if (this.scrollHeight != f && this.refresh(), i >= e) return u != (n = r[r.length - 1]) && this.activate(n);
        if (u && i < t[0]) return this.activeTarget = null, this.clear();
        for (n = t.length; n--;) u != r[n] && i >= t[n] && (void 0 === t[n + 1] || i < t[n + 1]) && this.activate(r[n])
    };
    t.prototype.activate = function (t) {
        this.activeTarget = t;
        this.clear();
        var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = n(r).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active"));
        i.trigger("activate.bs.scrollspy")
    };
    t.prototype.clear = function () {
        n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var r = n.fn.scrollspy;
    n.fn.scrollspy = i;
    n.fn.scrollspy.Constructor = t;
    n.fn.scrollspy.noConflict = function () {
        return n.fn.scrollspy = r, this
    };
    n(window).on("load.bs.scrollspy.data-api", function () {
        n('[data-spy="scroll"]').each(function () {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery); + function (n) {
    "use strict";

    function r(i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("bs.tab");
            r || u.data("bs.tab", r = new t(this));
            "string" == typeof i && r[i]()
        })
    }
    var t = function (t) {
        this.element = n(t)
    },
        u, i;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 150;
    t.prototype.show = function () {
        var t = this.element,
            f = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target"),
            u;
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var r = f.find(".active:last a"),
                e = n.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                o = n.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            (r.trigger(e), t.trigger(o), o.isDefaultPrevented() || e.isDefaultPrevented()) || (u = n(i), this.activate(t.closest("li"), f), this.activate(u, u.parent(), function () {
                r.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: t[0]
                });
                t.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: r[0]
                })
            }))
        }
    };
    t.prototype.activate = function (i, r, u) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
            i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
            o ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade");
            i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
            u && u()
        }
        var f = r.find("> .active"),
            o = u && n.support.transition && (f.length && f.hasClass("fade") || !!r.find("> .fade").length);
        f.length && o ? f.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e();
        f.removeClass("in")
    };
    u = n.fn.tab;
    n.fn.tab = r;
    n.fn.tab.Constructor = t;
    n.fn.tab.noConflict = function () {
        return n.fn.tab = u, this
    };
    i = function (t) {
        t.preventDefault();
        r.call(n(this), "show")
    };
    n(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery); + function (n) {
    "use strict";

    function i(i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("bs.affix"),
                f = "object" == typeof i && i;
            r || u.data("bs.affix", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    var t = function (i, r) {
        this.options = n.extend({}, t.DEFAULTS, r);
        this.$target = n(this.options.target).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this));
        this.$element = n(i);
        this.affixed = null;
        this.unpin = null;
        this.pinnedOffset = null;
        this.checkPosition()
    },
        r;
    t.VERSION = "3.3.7";
    t.RESET = "affix affix-top affix-bottom";
    t.DEFAULTS = {
        offset: 0,
        target: window
    };
    t.prototype.getState = function (n, t, i, r) {
        var u = this.$target.scrollTop(),
            f = this.$element.offset(),
            e = this.$target.height();
        if (null != i && "top" == this.affixed) return u < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(u + this.unpin <= f.top) && "bottom" : !(u + e <= n - r) && "bottom";
        var o = null == this.affixed,
            s = o ? u : f.top,
            h = o ? e : t;
        return null != i && u <= i ? "top" : null != r && s + h >= n - r && "bottom"
    };
    t.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var n = this.$target.scrollTop(),
            i = this.$element.offset();
        return this.pinnedOffset = i.top - n
    };
    t.prototype.checkPositionWithEventLoop = function () {
        setTimeout(n.proxy(this.checkPosition, this), 1)
    };
    t.prototype.checkPosition = function () {
        var i, e, o;
        if (this.$element.is(":visible")) {
            var s = this.$element.height(),
                r = this.options.offset,
                f = r.top,
                u = r.bottom,
                h = Math.max(n(document).height(), n(document.body).height());
            if ("object" != typeof r && (u = f = r), "function" == typeof f && (f = r.top(this.$element)), "function" == typeof u && (u = r.bottom(this.$element)), i = this.getState(h, s, f, u), this.affixed != i) {
                if (null != this.unpin && this.$element.css("top", ""), e = "affix" + (i ? "-" + i : ""), o = n.Event(e + ".bs.affix"), this.$element.trigger(o), o.isDefaultPrevented()) return;
                this.affixed = i;
                this.unpin = "bottom" == i ? this.getPinnedOffset() : null;
                this.$element.removeClass(t.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == i && this.$element.offset({
                top: h - s - u
            })
        }
    };
    r = n.fn.affix;
    n.fn.affix = i;
    n.fn.affix.Constructor = t;
    n.fn.affix.noConflict = function () {
        return n.fn.affix = r, this
    };
    n(window).on("load", function () {
        n('[data-spy="affix"]').each(function () {
            var r = n(this),
                t = r.data();
            t.offset = t.offset || {};
            null != t.offsetBottom && (t.offset.bottom = t.offsetBottom);
            null != t.offsetTop && (t.offset.top = t.offsetTop);
            i.call(r, t)
        })
    })
}(jQuery);
! function (n, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : n.bootbox = t(n.jQuery)
}(this, function a(n, t) {
    "use strict";

    function a(n) {
        var t = o[e.locale];
        return t ? t[n] : o.en[n]
    }

    function f(t, i, r) {
        t.stopPropagation();
        t.preventDefault();
        var u = n.isFunction(r) && r(t) === !1;
        u || i.modal("hide")
    }

    function v(n) {
        var i, t = 0;
        for (i in n) t++;
        return t
    }

    function r(t, i) {
        var r = 0;
        n.each(t, function (n, t) {
            i(n, t, r++)
        })
    }

    function y(t) {
        var i, u;
        if ("object" != typeof t) throw new Error("Please supply an object of options");
        if (!t.message) throw new Error("Please specify a message");
        return t = n.extend({}, e, t), t.buttons || (t.buttons = {}), t.backdrop = t.backdrop ? "static" : !1, i = t.buttons, u = v(i), r(i, function (t, r, f) {
            if (n.isFunction(r) && (r = i[t] = {
                callback: r
            }), "object" !== n.type(r)) throw new Error("button with key " + t + " must be an object");
            r.label || (r.label = t);
            r.className || (r.className = 2 >= u && f === u - 1 ? "btn-primary" : "btn-default")
        }), t
    }

    function p(n, t) {
        var r = n.length,
            i = {};
        if (1 > r || r > 2) throw new Error("Invalid argument length");
        return 2 === r || "string" == typeof n[0] ? (i[t[0]] = n[0], i[t[1]] = n[1]) : i = n[0], i
    }

    function s(t, i, r) {
        return n.extend(!0, {}, t, p(i, r))
    }

    function h(n, t, i, r) {
        var u = {
            className: "bootbox-" + n,
            buttons: c.apply(null, t)
        };
        return l(s(u, r, i), t)
    }

    function c() {
        for (var t = {}, n = 0, r = arguments.length; r > n; n++) {
            var i = arguments[n],
                u = i.toLowerCase(),
                f = i.toUpperCase();
            t[u] = {
                label: a(f)
            }
        }
        return t
    }

    function l(n, i) {
        var u = {};
        return r(i, function (n, t) {
            u[t] = !0
        }), r(n.buttons, function (n) {
            if (u[n] === t) throw new Error("button key " + n + " is not allowed (options are " + i.join("\n") + ")");
        }), n
    }
    var u = {
        dialog: "<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'><\/div><\/div><\/div><\/div><\/div>",
        header: "<div class='modal-header'><h4 class='modal-title'><\/h4><\/div>",
        footer: "<div class='modal-footer'><\/div>",
        closeButton: "<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;<\/button>",
        form: "<form class='bootbox-form'><\/form>",
        inputs: {
            text: "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",
            textarea: "<textarea class='bootbox-input bootbox-input-textarea form-control'><\/textarea>",
            email: "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",
            select: "<select class='bootbox-input bootbox-input-select form-control'><\/select>",
            checkbox: "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /><\/label><\/div>",
            date: "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",
            time: "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",
            number: "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",
            password: "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"
        }
    },
        e = {
            locale: "en",
            backdrop: !0,
            animate: !0,
            className: null,
            closeButton: !0,
            show: !0,
            container: "body"
        },
        i = {},
        o;
    return i.alert = function () {
        var t;
        if (t = h("alert", ["ok"], ["message", "callback"], arguments), t.callback && !n.isFunction(t.callback)) throw new Error("alert requires callback property to be a function when provided");
        return t.buttons.ok.callback = t.onEscape = function () {
            return n.isFunction(t.callback) ? t.callback() : !0
        }, i.dialog(t)
    }, i.confirm = function () {
        var t;
        if (t = h("confirm", ["cancel", "confirm"], ["message", "callback"], arguments), t.buttons.cancel.callback = t.onEscape = function () {
            return t.callback(!1)
        }, t.buttons.confirm.callback = function () {
            return t.callback(!0)
        }, !n.isFunction(t.callback)) throw new Error("confirm requires a callback");
        return i.dialog(t)
    }, i.prompt = function () {
        var f, y, h, v, e, p, o, a, w;
        if (v = n(u.form), y = {
            className: "bootbox-prompt",
            buttons: c("cancel", "confirm"),
            value: "",
            inputType: "text"
        }, f = l(s(y, arguments, ["title", "callback"]), ["cancel", "confirm"]), p = f.show === t ? !0 : f.show, f.message = v, f.buttons.cancel.callback = f.onEscape = function () {
            return f.callback(null)
        }, f.buttons.confirm.callback = function () {
            var t, i;
            switch (f.inputType) {
                case "text":
                case "textarea":
                case "email":
                case "select":
                case "date":
                case "time":
                case "number":
                case "password":
                    t = e.val();
                    break;
                case "checkbox":
                    i = e.find("input:checked");
                    t = [];
                    r(i, function (i, r) {
                        t.push(n(r).val())
                    })
            }
            return f.callback(t)
        }, f.show = !1, !f.title) throw new Error("prompt requires a title");
        if (!n.isFunction(f.callback)) throw new Error("prompt requires a callback");
        if (!u.inputs[f.inputType]) throw new Error("invalid prompt type");
        switch (e = n(u.inputs[f.inputType]), f.inputType) {
            case "text":
            case "textarea":
            case "email":
            case "date":
            case "time":
            case "number":
            case "password":
                e.val(f.value);
                break;
            case "select":
                if (a = {}, o = f.inputOptions || [], !o.length) throw new Error("prompt with select requires options");
                r(o, function (i, r) {
                    var u = e;
                    if (r.value === t || r.text === t) throw new Error("given options in wrong format");
                    r.group && (a[r.group] || (a[r.group] = n("<optgroup/>").attr("label", r.group)), u = a[r.group]);
                    u.append("<option value='" + r.value + "'>" + r.text + "<\/option>")
                });
                r(a, function (n, t) {
                    e.append(t)
                });
                e.val(f.value);
                break;
            case "checkbox":
                if (w = n.isArray(f.value) ? f.value : [f.value], o = f.inputOptions || [], !o.length) throw new Error("prompt with checkbox requires options");
                if (!o[0].value || !o[0].text) throw new Error("given options in wrong format");
                e = n("<div/>");
                r(o, function (t, i) {
                    var o = n(u.inputs[f.inputType]);
                    o.find("input").attr("value", i.value);
                    o.find("label").append(i.text);
                    r(w, function (n, t) {
                        t === i.value && o.find("input").prop("checked", !0)
                    });
                    e.append(o)
                })
        }
        return f.placeholder && e.attr("placeholder", f.placeholder), f.pattern && e.attr("pattern", f.pattern), v.append(e), v.on("submit", function (n) {
            n.preventDefault();
            n.stopPropagation();
            h.find(".btn-primary").click()
        }), h = i.dialog(f), h.off("shown.bs.modal"), h.on("shown.bs.modal", function () {
            e.focus()
        }), p === !0 && h.modal("show"), h
    }, i.dialog = function (t) {
        var h;
        t = y(t);
        var i = n(u.dialog),
            c = i.find(".modal-dialog"),
            o = i.find(".modal-body"),
            l = t.buttons,
            s = "",
            e = {
                onEscape: t.onEscape
            };
        return (r(l, function (n, t) {
            s += "<button data-bb-handler='" + n + "' type='button' class='btn " + t.className + "'>" + t.label + "<\/button>";
            e[n] = t.callback
        }), o.find(".bootbox-body").html(t.message), t.animate === !0 && i.addClass("fade"), t.className && i.addClass(t.className), "large" === t.size && c.addClass("modal-lg"), "small" === t.size && c.addClass("modal-sm"), t.title && o.before(u.header), t.closeButton) && (h = n(u.closeButton), t.title ? i.find(".modal-header").prepend(h) : h.css("margin-top", "-10px").prependTo(o)), t.title && i.find(".modal-title").html(t.title), s.length && (o.after(u.footer), i.find(".modal-footer").html(s)), i.on("hidden.bs.modal", function (n) {
            n.target === this && i.remove()
        }), i.on("shown.bs.modal", function () {
            i.find(".btn-primary:first").focus()
        }), i.on("escape.close.bb", function (n) {
            e.onEscape && f(n, i, e.onEscape)
        }), i.on("click", ".modal-footer button", function (t) {
            var r = n(this).data("bb-handler");
            f(t, i, e[r])
        }), i.on("click", ".bootbox-close-button", function (n) {
            f(n, i, e.onEscape)
        }), i.on("keyup", function (n) {
            27 === n.which && i.trigger("escape.close.bb")
        }), n(t.container).append(i), i.modal({
            backdrop: t.backdrop,
            keyboard: !1,
            show: !1
        }), t.show && i.modal("show"), i
    }, i.setDefaults = function () {
        var t = {};
        2 === arguments.length ? t[arguments[0]] = arguments[1] : t = arguments[0];
        n.extend(e, t)
    }, i.hideAll = function () {
        return n(".bootbox").modal("hide"), i
    }, o = {
        br: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Sim"
        },
        cs: {
            OK: "OK",
            CANCEL: "Zrušit",
            CONFIRM: "Potvrdit"
        },
        da: {
            OK: "OK",
            CANCEL: "Annuller",
            CONFIRM: "Accepter"
        },
        de: {
            OK: "OK",
            CANCEL: "Abbrechen",
            CONFIRM: "Akzeptieren"
        },
        el: {
            OK: "Εντάξει",
            CANCEL: "Ακύρωση",
            CONFIRM: "Επιβεβαίωση"
        },
        en: {
            OK: "OK",
            CANCEL: "Cancel",
            CONFIRM: "OK"
        },
        es: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Aceptar"
        },
        et: {
            OK: "OK",
            CANCEL: "Katkesta",
            CONFIRM: "OK"
        },
        fi: {
            OK: "OK",
            CANCEL: "Peruuta",
            CONFIRM: "OK"
        },
        fr: {
            OK: "OK",
            CANCEL: "Annuler",
            CONFIRM: "D'accord"
        },
        he: {
            OK: "אישור",
            CANCEL: "ביטול",
            CONFIRM: "אישור"
        },
        id: {
            OK: "OK",
            CANCEL: "Batal",
            CONFIRM: "OK"
        },
        it: {
            OK: "OK",
            CANCEL: "Annulla",
            CONFIRM: "Conferma"
        },
        ja: {
            OK: "OK",
            CANCEL: "キャンセル",
            CONFIRM: "確認"
        },
        lt: {
            OK: "Gerai",
            CANCEL: "Atšaukti",
            CONFIRM: "Patvirtinti"
        },
        lv: {
            OK: "Labi",
            CANCEL: "Atcelt",
            CONFIRM: "Apstiprināt"
        },
        nl: {
            OK: "OK",
            CANCEL: "Annuleren",
            CONFIRM: "Accepteren"
        },
        no: {
            OK: "OK",
            CANCEL: "Avbryt",
            CONFIRM: "OK"
        },
        pl: {
            OK: "OK",
            CANCEL: "Anuluj",
            CONFIRM: "Potwierdź"
        },
        pt: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Confirmar"
        },
        ru: {
            OK: "OK",
            CANCEL: "Отмена",
            CONFIRM: "Применить"
        },
        sv: {
            OK: "OK",
            CANCEL: "Avbryt",
            CONFIRM: "OK"
        },
        tr: {
            OK: "Tamam",
            CANCEL: "İptal",
            CONFIRM: "Onayla"
        },
        zh_CN: {
            OK: "OK",
            CANCEL: "取消",
            CONFIRM: "确认"
        },
        zh_TW: {
            OK: "OK",
            CANCEL: "取消",
            CONFIRM: "確認"
        }
    }, i.init = function (t) {
        return a(t || n)
    }, i
}),
    function (n) {
        n.extend({
            tablesorter: new function () {
                function i(n, t) {
                    u(n + "," + ((new Date).getTime() - t.getTime()) + "ms")
                }

                function u(n) {
                    typeof console != "undefined" && typeof console.debug != "undefined" ? console.log(n) : alert(n)
                }

                function h(t, i) {
                    var o, e, r, f;
                    if (t.config.debug && (o = ""), t.tBodies.length != 0) {
                        if (e = t.tBodies[0].rows, e[0]) {
                            var s = [],
                                h = e[0].cells,
                                l = h.length;
                            for (r = 0; r < l; r++) f = !1, n.metadata && n(i[r]).metadata() && n(i[r]).metadata().sorter ? f = c(n(i[r]).metadata().sorter) : t.config.headers[r] && t.config.headers[r].sorter && (f = c(t.config.headers[r].sorter)), f || (f = w(t, e, -1, r)), t.config.debug && (o += "column:" + r + " parser:" + f.id + "\n"), s.push(f)
                        }
                        return t.config.debug && u(o), s
                    }
                }

                function w(n, i, r, f) {
                    for (var c = t.length, o = !1, s = !1, h = !0, e; s == "" && h;) r++, i[r] ? (o = b(i, r, f), s = k(n.config, o), n.config.debug && u("Checking if value was empty on row:" + r)) : h = !1;
                    for (e = 1; e < c; e++)
                        if (t[e].is(s, n, o)) return t[e];
                    return t[0]
                }

                function b(n, t, i) {
                    return n[t].cells[i]
                }

                function k(t, i) {
                    return n.trim(e(t, i))
                }

                function c(n) {
                    for (var r = t.length, i = 0; i < r; i++)
                        if (t[i].id.toLowerCase() == n.toLowerCase()) return t[i];
                    return !1
                }

                function l(t) {
                    var h, s, u, o, f;
                    t.config.debug && (h = new Date);
                    var c = t.tBodies[0] && t.tBodies[0].rows.length || 0,
                        l = t.tBodies[0].rows[0] && t.tBodies[0].rows[0].cells.length || 0,
                        a = t.config.parsers,
                        r = {
                            row: [],
                            normalized: []
                        };
                    for (s = 0; s < c; ++s) {
                        if (u = n(t.tBodies[0].rows[s]), o = [], u.hasClass(t.config.cssChildRow)) {
                            r.row[r.row.length - 1] = r.row[r.row.length - 1].add(u);
                            continue
                        }
                        for (r.row.push(u), f = 0; f < l; ++f) o.push(a[f].format(e(t.config, u[0].cells[f]), t, u[0].cells[f]));
                        o.push(r.normalized.length);
                        r.normalized.push(o);
                        o = null
                    }
                    return t.config.debug && i("Building cache for " + c + " rows:", h), r
                }

                function e(t, i) {
                    return i ? (t.supportsTextContent || (t.supportsTextContent = i.textContent || !1), t.textExtraction == "simple" ? t.supportsTextContent ? i.textContent : i.childNodes[0] && i.childNodes[0].hasChildNodes() ? i.childNodes[0].innerHTML : i.innerHTML : typeof t.textExtraction == "function" ? t.textExtraction(i) : n(i).text()) : ""
                }

                function o(t, r) {
                    var l, u, f, v, e;
                    t.config.debug && (l = new Date);
                    var a = r,
                        o = a.row,
                        h = a.normalized,
                        y = h.length,
                        p = h[0].length - 1,
                        w = n(t.tBodies[0]),
                        c = [];
                    for (u = 0; u < y; u++)
                        if (f = h[u][p], c.push(o[f]), !t.config.appender)
                            for (v = o[f].length, e = 0; e < v; e++) w[0].appendChild(o[f][e]);
                    t.config.appender && t.config.appender(t, c);
                    c = null;
                    t.config.debug && i("Rebuilt table:", l);
                    s(t);
                    setTimeout(function () {
                        n(t).trigger("sortEnd")
                    }, 0)
                }

                function d(t) {
                    var r, e, f;
                    return t.config.debug && (r = new Date), e = n.metadata ? !0 : !1, f = g(t), $tableHeaders = n(t.config.selectorHeaders, t).each(function (i) {
                        if (this.column = f[this.parentNode.rowIndex + "-" + this.cellIndex], this.order = rt(t.config.sortInitialOrder), this.count = this.order, (tt(this) || it(t, i)) && (this.sortDisabled = !0), a(t, i) && (this.order = this.lockedOrder = a(t, i)), !this.sortDisabled) {
                            var r = n(this).addClass(t.config.cssHeader);
                            t.config.onRenderHeader && t.config.onRenderHeader.apply(r)
                        }
                        t.config.headerList[i] = this
                    }), t.config.debug && (i("Built headers:", r), u($tableHeaders)), $tableHeaders
                }

                function g(n) {
                    for (var h, u, t, a, o, i = [], c = {}, v = n.getElementsByTagName("THEAD")[0], l = v.getElementsByTagName("TR"), s = 0; s < l.length; s++)
                        for (h = l[s].cells, u = 0; u < h.length; u++) {
                            var f = h[u],
                                r = f.parentNode.rowIndex,
                                y = r + "-" + f.cellIndex,
                                p = f.rowSpan || 1,
                                w = f.colSpan || 1,
                                e;
                            for (typeof i[r] == "undefined" && (i[r] = []), t = 0; t < i[r].length + 1; t++)
                                if (typeof i[r][t] == "undefined") {
                                    e = t;
                                    break
                                } for (c[y] = e, t = r; t < r + p; t++)
                                for (typeof i[t] == "undefined" && (i[t] = []), a = i[t], o = e; o < e + w; o++) a[o] = "x"
                        }
                    return c
                }

                function tt(t) {
                    return n.metadata && n(t).metadata().sorter === !1 ? !0 : !1
                }

                function it(n, t) {
                    return n.config.headers[t] && n.config.headers[t].sorter === !1 ? !0 : !1
                }

                function a(n, t) {
                    return n.config.headers[t] && n.config.headers[t].lockedOrder ? n.config.headers[t].lockedOrder : !1
                }

                function s(n) {
                    for (var i = n.config.widgets, r = i.length, t = 0; t < r; t++) v(i[t]).format(n)
                }

                function v(n) {
                    for (var i = r.length, t = 0; t < i; t++)
                        if (r[t].id.toLowerCase() == n.toLowerCase()) return r[t]
                }

                function rt(n) {
                    return typeof n != "Number" ? n.toLowerCase() == "desc" ? 1 : 0 : n == 1 ? 1 : 0
                }

                function ut(n, t) {
                    for (var r = t.length, i = 0; i < r; i++)
                        if (t[i][0] == n) return !0;
                    return !1
                }

                function y(t, i, r, u) {
                    var e, o, f;
                    for (i.removeClass(u[0]).removeClass(u[1]), e = [], i.each(function () {
                        this.sortDisabled || (e[this.column] = n(this))
                    }), o = r.length, f = 0; f < o; f++) e[r[f][0]].addClass(u[r[f][1]])
                }

                function ft(t) {
                    var r = t.config,
                        i;
                    r.widthFixed && (i = n("<colgroup>"), n("tr:first td", t.tBodies[0]).each(function () {
                        i.append(n("<col>").css("width", n(this).width()))
                    }), n(t).prepend(i))
                }

                function et(n, t) {
                    for (var r, u, f = n.config, e = t.length, i = 0; i < e; i++) r = t[i], u = f.headerList[r[0]], u.count = r[1], u.count++
                }

                function p(table, sortList, cache) {
                    var sortTime, dynamicExp, l, orgOrderCol, i;
                    for (table.config.debug && (sortTime = new Date), dynamicExp = "var sortWrapper = function(a,b) {", l = sortList.length, i = 0; i < l; i++) {
                        var c = sortList[i][0],
                            order = sortList[i][1],
                            s = table.config.parsers[c].type == "text" ? order == 0 ? f("text", "asc", c) : f("text", "desc", c) : order == 0 ? f("numeric", "asc", c) : f("numeric", "desc", c),
                            e = "e" + i;
                        dynamicExp += "var " + e + " = " + s;
                        dynamicExp += "if(" + e + ") { return " + e + "; } ";
                        dynamicExp += "else { "
                    }
                    for (orgOrderCol = cache.normalized[0].length - 1, dynamicExp += "return a[" + orgOrderCol + "]-b[" + orgOrderCol + "];", i = 0; i < l; i++) dynamicExp += "}; ";
                    return dynamicExp += "return 0; ", dynamicExp += "}; ", table.config.debug && i("Evaling expression:" + dynamicExp, new Date), eval(dynamicExp), cache.normalized.sort(sortWrapper), table.config.debug && i("Sorting on " + sortList.toString() + " and dir " + order + " time:", sortTime), cache
                }

                function f(n, t, i) {
                    var r = "a[" + i + "]",
                        u = "b[" + i + "]";
                    return n == "text" && t == "asc" ? "(" + r + " == " + u + " ? 0 : (" + r + " === null ? Number.POSITIVE_INFINITY : (" + u + " === null ? Number.NEGATIVE_INFINITY : (" + r + " < " + u + ") ? -1 : 1 )));" : n == "text" && t == "desc" ? "(" + r + " == " + u + " ? 0 : (" + r + " === null ? Number.POSITIVE_INFINITY : (" + u + " === null ? Number.NEGATIVE_INFINITY : (" + u + " < " + r + ") ? -1 : 1 )));" : n == "numeric" && t == "asc" ? "(" + r + " === null && " + u + " === null) ? 0 :(" + r + " === null ? Number.POSITIVE_INFINITY : (" + u + " === null ? Number.NEGATIVE_INFINITY : " + r + " - " + u + "));" : n == "numeric" && t == "desc" ? "(" + r + " === null && " + u + " === null) ? 0 :(" + r + " === null ? Number.POSITIVE_INFINITY : (" + u + " === null ? Number.NEGATIVE_INFINITY : " + u + " - " + r + "));" : void 0
                }
                var t = [],
                    r = [];
                this.defaults = {
                    cssHeader: "header",
                    cssAsc: "headerSortUp",
                    cssDesc: "headerSortDown",
                    cssChildRow: "expand-child",
                    sortInitialOrder: "asc",
                    sortMultiSortKey: "shiftKey",
                    sortForce: null,
                    sortAppend: null,
                    sortLocaleCompare: !0,
                    textExtraction: "simple",
                    parsers: {},
                    widgets: [],
                    widgetZebra: {
                        css: ["even", "odd"]
                    },
                    headers: {},
                    widthFixed: !1,
                    cancelSelection: !0,
                    sortList: [],
                    headerList: [],
                    dateFormat: "us",
                    decimal: "/.|,/g",
                    onRenderHeader: null,
                    selectorHeaders: "thead th",
                    debug: !1
                };
                this.benchmark = i;
                this.construct = function (t) {
                    return this.each(function () {
                        var r, u, f, i, a, c;
                        this.tHead && this.tBodies && (a = 0, this.config = {}, i = n.extend(this.config, n.tablesorter.defaults, t), r = n(this), n.data(this, "tablesorter", i), u = d(this), this.config.parsers = h(this, u), f = l(this), c = [i.cssDesc, i.cssAsc], ft(this), u.click(function (t) {
                            var v = r[0].tBodies[0] && r[0].tBodies[0].rows.length || 0,
                                w, s, l, e, h, a;
                            if (!this.sortDisabled && v > 0) {
                                if (r.trigger("sortStart"), w = n(this), s = this.column, this.order = this.count++ % 2, this.lockedOrder && (this.order = this.lockedOrder), t[i.sortMultiSortKey])
                                    if (ut(s, i.sortList))
                                        for (e = 0; e < i.sortList.length; e++) h = i.sortList[e], a = i.headerList[h[0]], h[0] == s && (a.count = h[1], a.count++, h[1] = a.count % 2);
                                    else i.sortList.push([s, this.order]);
                                else {
                                    if (i.sortList = [], i.sortForce != null)
                                        for (l = i.sortForce, e = 0; e < l.length; e++) l[e][0] != s && i.sortList.push(l[e]);
                                    i.sortList.push([s, this.order])
                                }
                                return setTimeout(function () {
                                    y(r[0], u, i.sortList, c);
                                    o(r[0], p(r[0], i.sortList, f))
                                }, 1), !1
                            }
                        }).mousedown(function () {
                            if (i.cancelSelection) return this.onselectstart = function () {
                                return !1
                            }, !1
                        }), r.bind("update", function () {
                            var n = this;
                            setTimeout(function () {
                                n.config.parsers = h(n, u);
                                f = l(n)
                            }, 1)
                        }).bind("updateCell", function (n, t) {
                            var r = this.config,
                                i = [t.parentNode.rowIndex - 1, t.cellIndex];
                            f.normalized[i[0]][i[1]] = r.parsers[i[1]].format(e(r, t), t)
                        }).bind("sorton", function (t, r) {
                            n(this).trigger("sortStart");
                            i.sortList = r;
                            var e = i.sortList;
                            et(this, e);
                            y(this, u, e, c);
                            o(this, p(this, e, f))
                        }).bind("appendCache", function () {
                            o(this, f)
                        }).bind("applyWidgetId", function (n, t) {
                            v(t).format(this)
                        }).bind("applyWidgets", function () {
                            s(this)
                        }), n.metadata && n(this).metadata() && n(this).metadata().sortlist && (i.sortList = n(this).metadata().sortlist), i.sortList.length > 0 && r.trigger("sorton", [i.sortList]), s(this))
                    })
                };
                this.addParser = function (n) {
                    for (var u = t.length, r = !0, i = 0; i < u; i++) t[i].id.toLowerCase() == n.id.toLowerCase() && (r = !1);
                    r && t.push(n)
                };
                this.addWidget = function (n) {
                    r.push(n)
                };
                this.formatFloat = function (n) {
                    var t = parseFloat(n);
                    return isNaN(t) ? 0 : t
                };
                this.formatInt = function (n) {
                    var t = parseInt(n);
                    return isNaN(t) ? 0 : t
                };
                this.isDigit = function (t) {
                    return /^[-+]?\d*$/.test(n.trim(t.replace(/[,.']/g, "")))
                };
                this.clearTableBody = function (t) {
                    if (n.browser.msie) {
                        function i() {
                            while (this.firstChild) this.removeChild(this.firstChild)
                        }
                        i.apply(t.tBodies[0])
                    } else t.tBodies[0].innerHTML = ""
                }
            }
        });
        n.fn.extend({
            tablesorter: n.tablesorter.construct
        });
        var t = n.tablesorter;
        t.addParser({
            id: "text",
            is: function () {
                return !0
            },
            format: function (t) {
                return n.trim(t.toLocaleLowerCase())
            },
            type: "text"
        });
        t.addParser({
            id: "digit",
            is: function (t, i) {
                var r = i.config;
                return n.tablesorter.isDigit(t, r)
            },
            format: function (t) {
                return n.tablesorter.formatFloat(t)
            },
            type: "numeric"
        });
        t.addParser({
            id: "currency",
            is: function (n) {
                return /^[£$€?.]/.test(n)
            },
            format: function (t) {
                return n.tablesorter.formatFloat(t.replace(new RegExp(/[£$€]/g), ""))
            },
            type: "numeric"
        });
        t.addParser({
            id: "ipAddress",
            is: function (n) {
                return /^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(n)
            },
            format: function (t) {
                for (var i, u = t.split("."), f = "", e = u.length, r = 0; r < e; r++) i = u[r], f += i.length == 2 ? "0" + i : i;
                return n.tablesorter.formatFloat(f)
            },
            type: "numeric"
        });
        t.addParser({
            id: "url",
            is: function (n) {
                return /^(https?|ftp|file):\/\/$/.test(n)
            },
            format: function (n) {
                return jQuery.trim(n.replace(new RegExp(/(https?|ftp|file):\/\//), ""))
            },
            type: "text"
        });
        t.addParser({
            id: "isoDate",
            is: function (n) {
                return /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(n)
            },
            format: function (t) {
                return n.tablesorter.formatFloat(t != "" ? new Date(t.replace(new RegExp(/-/g), "/")).getTime() : "0")
            },
            type: "numeric"
        });
        t.addParser({
            id: "percent",
            is: function (t) {
                return /\%$/.test(n.trim(t))
            },
            format: function (t) {
                return n.tablesorter.formatFloat(t.replace(new RegExp(/%/g), ""))
            },
            type: "numeric"
        });
        t.addParser({
            id: "usLongDate",
            is: function (n) {
                return n.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/))
            },
            format: function (t) {
                return n.tablesorter.formatFloat(new Date(t).getTime())
            },
            type: "numeric"
        });
        t.addParser({
            id: "shortDate",
            is: function (n) {
                return /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(n)
            },
            format: function (t, i) {
                var r = i.config;
                return t = t.replace(/\-/g, "/"), r.dateFormat == "us" ? t = t.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$1/$2") : r.dateFormat == "uk" ? t = t.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1") : (r.dateFormat == "dd/mm/yy" || r.dateFormat == "dd-mm-yy") && (t = t.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/, "$1/$2/$3")), n.tablesorter.formatFloat(new Date(t).getTime())
            },
            type: "numeric"
        });
        t.addParser({
            id: "time",
            is: function (n) {
                return /^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(n)
            },
            format: function (t) {
                return n.tablesorter.formatFloat(new Date("2000/01/01 " + t).getTime())
            },
            type: "numeric"
        });
        t.addParser({
            id: "metadata",
            is: function () {
                return !1
            },
            format: function (t, i, r) {
                var u = i.config,
                    f = u.parserMetadataName ? u.parserMetadataName : "sortValue";
                return n(r).metadata()[f]
            },
            type: "numeric"
        });
        t.addWidget({
            id: "zebra",
            format: function (t) {
                var f, i, r, u;
                t.config.debug && (f = new Date);
                r = -1;
                n("tr:visible", t.tBodies[0]).each(function () {
                    i = n(this);
                    i.hasClass(t.config.cssChildRow) || r++;
                    u = r % 2 == 0;
                    i.removeClass(t.config.widgetZebra.css[u ? 0 : 1]).addClass(t.config.widgetZebra.css[u ? 1 : 0])
                });
                t.config.debug && n.tablesorter.benchmark("Applying Zebra widget", f)
            }
        })
    }(jQuery),
    function (n, t) {
        var i = n();
        n.fn.dropdownHover = function (r) {
            return "ontouchstart" in document ? this : (i = i.add(this.parent()), this.each(function () {
                function s() {
                    i.find(":focus").blur();
                    e.instantlyCloseOthers === !0 && i.removeClass("open");
                    t.clearTimeout(o);
                    u.addClass("open");
                    f.trigger(c)
                }
                var f = n(this),
                    u = f.parent(),
                    h = {
                        delay: n(this).data("delay"),
                        instantlyCloseOthers: n(this).data("close-others")
                    },
                    c = "show.bs.dropdown",
                    l = "hide.bs.dropdown",
                    e = n.extend(!0, {}, {
                        delay: 500,
                        instantlyCloseOthers: !0
                    }, r, h),
                    o;
                u.hover(function (n) {
                    if (!u.hasClass("open") && !f.is(n.target)) return !0;
                    s(n)
                }, function () {
                    o = t.setTimeout(function () {
                        u.removeClass("open");
                        f.trigger(l)
                    }, e.delay)
                });
                f.hover(function (n) {
                    if (!u.hasClass("open") && !u.is(n.target)) return !0;
                    s(n)
                });
                u.find(".dropdown-submenu").each(function () {
                    var i = n(this),
                        r;
                    i.hover(function () {
                        t.clearTimeout(r);
                        i.children(".dropdown-menu").show();
                        i.siblings().children(".dropdown-menu").hide()
                    }, function () {
                        var n = i.children(".dropdown-menu");
                        r = t.setTimeout(function () {
                            n.hide()
                        }, e.delay)
                    })
                })
            }))
        };
        n(document).ready(function () {
            n('[data-hover="dropdown"]').dropdownHover()
        })
    }(jQuery, this),
    function (n) {
        typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? n(require("jquery")) : n(jQuery)
    }(function (n) {
        var t = function () {
            var t;
            return n && n.fn && n.fn.select2 && n.fn.select2.amd && (t = n.fn.select2.amd),
                function () {
                    if (!t || !t.requirejs) {
                        t ? i = t : t = {};
                        var n, i, r;
                        (function (t) {
                            function e(n, t) {
                                return k.call(n, t)
                            }

                            function l(n, t) {
                                var o, s, r, u, h, y, c, b, i, l, w, e = t && t.split("/"),
                                    a = f.map,
                                    v = a && a["*"] || {};
                                if (n && n.charAt(0) === ".")
                                    if (t) {
                                        for (n = n.split("/"), h = n.length - 1, f.nodeIdCompat && p.test(n[h]) && (n[h] = n[h].replace(p, "")), n = e.slice(0, e.length - 1).concat(n), i = 0; i < n.length; i += 1)
                                            if (w = n[i], w === ".") n.splice(i, 1), i -= 1;
                                            else if (w === "..")
                                                if (i === 1 && (n[2] === ".." || n[0] === "..")) break;
                                                else i > 0 && (n.splice(i - 1, 2), i -= 2);
                                        n = n.join("/")
                                    } else n.indexOf("./") === 0 && (n = n.substring(2));
                                if ((e || v) && a) {
                                    for (o = n.split("/"), i = o.length; i > 0; i -= 1) {
                                        if (s = o.slice(0, i).join("/"), e)
                                            for (l = e.length; l > 0; l -= 1)
                                                if (r = a[e.slice(0, l).join("/")], r && (r = r[s], r)) {
                                                    u = r;
                                                    y = i;
                                                    break
                                                } if (u) break;
                                        !c && v && v[s] && (c = v[s], b = i)
                                    } !u && c && (u = c, y = b);
                                    u && (o.splice(0, y, u), n = o.join("/"))
                                }
                                return n
                            }

                            function w(n, i) {
                                return function () {
                                    var r = d.call(arguments, 0);
                                    return typeof r[0] != "string" && r.length === 1 && r.push(null), o.apply(t, r.concat([n, i]))
                                }
                            }

                            function g(n) {
                                return function (t) {
                                    return l(t, n)
                                }
                            }

                            function nt(n) {
                                return function (t) {
                                    u[n] = t
                                }
                            }

                            function a(n) {
                                if (e(h, n)) {
                                    var i = h[n];
                                    delete h[n];
                                    y[n] = !0;
                                    c.apply(t, i)
                                }
                                if (!e(u, n) && !e(y, n)) throw new Error("No " + n);
                                return u[n]
                            }

                            function b(n) {
                                var i, t = n ? n.indexOf("!") : -1;
                                return t > -1 && (i = n.substring(0, t), n = n.substring(t + 1, n.length)), [i, n]
                            }

                            function tt(n) {
                                return function () {
                                    return f && f.config && f.config[n] || {}
                                }
                            }
                            var c, o, v, s, u = {},
                                h = {},
                                f = {},
                                y = {},
                                k = Object.prototype.hasOwnProperty,
                                d = [].slice,
                                p = /\.js$/;
                            v = function (n, t) {
                                var r, u = b(n),
                                    i = u[0];
                                return n = u[1], i && (i = l(i, t), r = a(i)), i ? n = r && r.normalize ? r.normalize(n, g(t)) : l(n, t) : (n = l(n, t), u = b(n), i = u[0], n = u[1], i && (r = a(i))), {
                                    f: i ? i + "!" + n : n,
                                    n: n,
                                    pr: i,
                                    p: r
                                }
                            };
                            s = {
                                require: function (n) {
                                    return w(n)
                                },
                                exports: function (n) {
                                    var t = u[n];
                                    return typeof t != "undefined" ? t : u[n] = {}
                                },
                                module: function (n) {
                                    return {
                                        id: n,
                                        uri: "",
                                        exports: u[n],
                                        config: tt(n)
                                    }
                                }
                            };
                            c = function (n, i, r, f) {
                                var p, o, k, b, c, l = [],
                                    d = typeof r,
                                    g;
                                if (f = f || n, d === "undefined" || d === "function") {
                                    for (i = !i.length && r.length ? ["require", "exports", "module"] : i, c = 0; c < i.length; c += 1)
                                        if (b = v(i[c], f), o = b.f, o === "require") l[c] = s.require(n);
                                        else if (o === "exports") l[c] = s.exports(n), g = !0;
                                        else if (o === "module") p = l[c] = s.module(n);
                                        else if (e(u, o) || e(h, o) || e(y, o)) l[c] = a(o);
                                        else if (b.p) b.p.load(b.n, w(f, !0), nt(o), {}), l[c] = u[o];
                                        else throw new Error(n + " missing " + o);
                                    k = r ? r.apply(u[n], l) : undefined;
                                    n && (p && p.exports !== t && p.exports !== u[n] ? u[n] = p.exports : k === t && g || (u[n] = k))
                                } else n && (u[n] = r)
                            };
                            n = i = o = function (n, i, r, u, e) {
                                if (typeof n == "string") return s[n] ? s[n](i) : a(v(n, i).f);
                                if (!n.splice) {
                                    if (f = n, f.deps && o(f.deps, f.callback), !i) return;
                                    i.splice ? (n = i, i = r, r = null) : n = t
                                }
                                return i = i || function () { }, typeof r == "function" && (r = u, u = e), u ? c(t, n, i, r) : setTimeout(function () {
                                    c(t, n, i, r)
                                }, 4), o
                            };
                            o.config = function (n) {
                                return o(n)
                            };
                            n._defined = u;
                            r = function (n, t, i) {
                                if (typeof n != "string") throw new Error("See almond README: incorrect module build, no module name");
                                t.splice || (i = t, t = []);
                                e(u, n) || e(h, n) || (h[n] = [n, t, i])
                            };
                            r.amd = {
                                jQuery: !0
                            }
                        })();
                        t.requirejs = n;
                        t.require = i;
                        t.define = r
                    }
                }(), t.define("almond", function () { }), t.define("jquery", [], function () {
                    var t = n || $;
                    return t == null && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
                }), t.define("select2/utils", ["jquery"], function (n) {
                    function r(n) {
                        var i = n.prototype,
                            r = [],
                            t, u;
                        for (t in i) (u = i[t], typeof u == "function") && t !== "constructor" && r.push(t);
                        return r
                    }
                    var t = {},
                        i;
                    return t.Extend = function (n, t) {
                        function r() {
                            this.constructor = n
                        }
                        var u = {}.hasOwnProperty;
                        for (var i in t) u.call(t, i) && (n[i] = t[i]);
                        return r.prototype = t.prototype, n.prototype = new r, n.__super__ = t.prototype, n
                    }, t.Decorate = function (n, t) {
                        function i() {
                            var r = Array.prototype.unshift,
                                u = t.prototype.constructor.length,
                                i = n.prototype.constructor;
                            u > 0 && (r.call(arguments, n.prototype.constructor), i = t.prototype.constructor);
                            i.apply(this, arguments)
                        }

                        function l() {
                            this.constructor = i
                        }
                        var s = r(t),
                            h = r(n),
                            u, e, c, f, o;
                        for (t.displayName = n.displayName, i.prototype = new l, u = 0; u < h.length; u++) e = h[u], i.prototype[e] = n.prototype[e];
                        for (c = function (n) {
                            var r = function () { },
                                u;
                            return n in i.prototype && (r = i.prototype[n]), u = t.prototype[n],
                                function () {
                                    var n = Array.prototype.unshift;
                                    return n.call(arguments, r), u.apply(this, arguments)
                                }
                        }, f = 0; f < s.length; f++) o = s[f], i.prototype[o] = c(o);
                        return i
                    }, i = function () {
                        this.listeners = {}
                    }, i.prototype.on = function (n, t) {
                        this.listeners = this.listeners || {};
                        n in this.listeners ? this.listeners[n].push(t) : this.listeners[n] = [t]
                    }, i.prototype.trigger = function (n) {
                        var i = Array.prototype.slice,
                            t = i.call(arguments, 1);
                        this.listeners = this.listeners || {};
                        t == null && (t = []);
                        t.length === 0 && t.push({});
                        t[0]._type = n;
                        n in this.listeners && this.invoke(this.listeners[n], i.call(arguments, 1));
                        "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                    }, i.prototype.invoke = function (n, t) {
                        for (var i = 0, r = n.length; i < r; i++) n[i].apply(this, t)
                    }, t.Observable = i, t.generateChars = function (n) {
                        for (var r, t = "", i = 0; i < n; i++) r = Math.floor(Math.random() * 36), t += r.toString(36);
                        return t
                    }, t.bind = function (n, t) {
                        return function () {
                            n.apply(t, arguments)
                        }
                    }, t._convertData = function (n) {
                        var f, r, i, u, t;
                        for (f in n)
                            if (r = f.split("-"), i = n, r.length !== 1) {
                                for (u = 0; u < r.length; u++) t = r[u], t = t.substring(0, 1).toLowerCase() + t.substring(1), t in i || (i[t] = {}), u == r.length - 1 && (i[t] = n[f]), i = i[t];
                                delete n[f]
                            } return n
                    }, t.hasScroll = function (t, i) {
                        var u = n(i),
                            f = i.style.overflowX,
                            r = i.style.overflowY;
                        return f === r && (r === "hidden" || r === "visible") ? !1 : f === "scroll" || r === "scroll" ? !0 : u.innerHeight() < i.scrollHeight || u.innerWidth() < i.scrollWidth
                    }, t.escapeMarkup = function (n) {
                        var t = {
                            "\\": "&#92;",
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;",
                            "/": "&#47;"
                        };
                        return typeof n != "string" ? n : String(n).replace(/[&<>"'\/\\]/g, function (n) {
                            return t[n]
                        })
                    }, t.appendMany = function (t, i) {
                        if (n.fn.jquery.substr(0, 3) === "1.7") {
                            var r = n();
                            n.map(i, function (n) {
                                r = r.add(n)
                            });
                            i = r
                        }
                        t.append(i)
                    }, t
                }), t.define("select2/results", ["jquery", "./utils"], function (n, t) {
                    function i(n, t, r) {
                        this.$element = n;
                        this.data = r;
                        this.options = t;
                        i.__super__.constructor.call(this)
                    }
                    return t.Extend(i, t.Observable), i.prototype.render = function () {
                        var t = n('<ul class="select2-results__options" role="tree"><\/ul>');
                        return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t
                    }, i.prototype.clear = function () {
                        this.$results.empty()
                    }, i.prototype.displayMessage = function (t) {
                        var u = this.options.get("escapeMarkup"),
                            i, r;
                        this.clear();
                        this.hideLoading();
                        i = n('<li role="treeitem" aria-live="assertive" class="select2-results__option"><\/li>');
                        r = this.options.get("translations").get(t.message);
                        i.append(u(r(t.args)));
                        i[0].className += " select2-results__message";
                        this.$results.append(i)
                    }, i.prototype.hideMessages = function () {
                        this.$results.find(".select2-results__message").remove()
                    }, i.prototype.append = function (n) {
                        var i, t, r, u;
                        if (this.hideLoading(), i = [], n.results == null || n.results.length === 0) {
                            this.$results.children().length === 0 && this.trigger("results:message", {
                                message: "noResults"
                            });
                            return
                        }
                        for (n.results = this.sort(n.results), t = 0; t < n.results.length; t++) r = n.results[t], u = this.option(r), i.push(u);
                        this.$results.append(i)
                    }, i.prototype.position = function (n, t) {
                        var i = t.find(".select2-results");
                        i.append(n)
                    }, i.prototype.sort = function (n) {
                        var t = this.options.get("sorter");
                        return t(n)
                    }, i.prototype.highlightFirstItem = function () {
                        var n = this.$results.find(".select2-results__option[aria-selected]"),
                            t = n.filter("[aria-selected=true]");
                        t.length > 0 ? t.first().trigger("mouseenter") : n.first().trigger("mouseenter");
                        this.ensureHighlightVisible()
                    }, i.prototype.setClasses = function () {
                        var t = this;
                        this.data.current(function (i) {
                            var r = n.map(i, function (n) {
                                return n.id.toString()
                            }),
                                u = t.$results.find(".select2-results__option[aria-selected]");
                            u.each(function () {
                                var i = n(this),
                                    t = n.data(this, "data"),
                                    u = "" + t.id;
                                t.element != null && t.element.selected || t.element == null && n.inArray(u, r) > -1 ? i.attr("aria-selected", "true") : i.attr("aria-selected", "false")
                            })
                        })
                    }, i.prototype.showLoading = function (n) {
                        this.hideLoading();
                        var i = this.options.get("translations").get("searching"),
                            r = {
                                disabled: !0,
                                loading: !0,
                                text: i(n)
                            },
                            t = this.option(r);
                        t.className += " loading-results";
                        this.$results.prepend(t)
                    }, i.prototype.hideLoading = function () {
                        this.$results.find(".loading-results").remove()
                    }, i.prototype.option = function (t) {
                        var r = document.createElement("li"),
                            i, e, c, o, u, v, s, f, l, a, h;
                        r.className = "select2-results__option";
                        i = {
                            role: "treeitem",
                            "aria-selected": "false"
                        };
                        t.disabled && (delete i["aria-selected"], i["aria-disabled"] = "true");
                        t.id == null && delete i["aria-selected"];
                        t._resultId != null && (r.id = t._resultId);
                        t.title && (r.title = t.title);
                        t.children && (i.role = "group", i["aria-label"] = t.text, delete i["aria-selected"]);
                        for (e in i) c = i[e], r.setAttribute(e, c);
                        if (t.children) {
                            for (o = n(r), u = document.createElement("strong"), u.className = "select2-results__group", v = n(u), this.template(t, u), s = [], f = 0; f < t.children.length; f++) l = t.children[f], a = this.option(l), s.push(a);
                            h = n("<ul><\/ul>", {
                                "class": "select2-results__options select2-results__options--nested"
                            });
                            h.append(s);
                            o.append(u);
                            o.append(h)
                        } else this.template(t, r);
                        return n.data(r, "data", t), r
                    }, i.prototype.bind = function (t) {
                        var i = this,
                            r = t.id + "-results";
                        this.$results.attr("id", r);
                        t.on("results:all", function (n) {
                            i.clear();
                            i.append(n.data);
                            t.isOpen() && (i.setClasses(), i.highlightFirstItem())
                        });
                        t.on("results:append", function (n) {
                            i.append(n.data);
                            t.isOpen() && i.setClasses()
                        });
                        t.on("query", function (n) {
                            i.hideMessages();
                            i.showLoading(n)
                        });
                        t.on("select", function () {
                            t.isOpen() && (i.setClasses(), i.highlightFirstItem())
                        });
                        t.on("unselect", function () {
                            t.isOpen() && (i.setClasses(), i.highlightFirstItem())
                        });
                        t.on("open", function () {
                            i.$results.attr("aria-expanded", "true");
                            i.$results.attr("aria-hidden", "false");
                            i.setClasses();
                            i.ensureHighlightVisible()
                        });
                        t.on("close", function () {
                            i.$results.attr("aria-expanded", "false");
                            i.$results.attr("aria-hidden", "true");
                            i.$results.removeAttr("aria-activedescendant")
                        });
                        t.on("results:toggle", function () {
                            var n = i.getHighlightedResults();
                            n.length !== 0 && n.trigger("mouseup")
                        });
                        t.on("results:select", function () {
                            var n = i.getHighlightedResults(),
                                t;
                            n.length !== 0 && (t = n.data("data"), n.attr("aria-selected") == "true" ? i.trigger("close", {}) : i.trigger("select", {
                                data: t
                            }))
                        });
                        t.on("results:previous", function () {
                            var r = i.getHighlightedResults(),
                                u = i.$results.find("[aria-selected]"),
                                f = u.index(r),
                                n, t;
                            if (f !== 0) {
                                n = f - 1;
                                r.length === 0 && (n = 0);
                                t = u.eq(n);
                                t.trigger("mouseenter");
                                var e = i.$results.offset().top,
                                    o = t.offset().top,
                                    s = i.$results.scrollTop() + (o - e);
                                n === 0 ? i.$results.scrollTop(0) : o - e < 0 && i.$results.scrollTop(s)
                            }
                        });
                        t.on("results:next", function () {
                            var e = i.getHighlightedResults(),
                                t = i.$results.find("[aria-selected]"),
                                o = t.index(e),
                                r = o + 1,
                                n;
                            if (!(r >= t.length)) {
                                n = t.eq(r);
                                n.trigger("mouseenter");
                                var u = i.$results.offset().top + i.$results.outerHeight(!1),
                                    f = n.offset().top + n.outerHeight(!1),
                                    s = i.$results.scrollTop() + f - u;
                                r === 0 ? i.$results.scrollTop(0) : f > u && i.$results.scrollTop(s)
                            }
                        });
                        t.on("results:focus", function (n) {
                            n.element.addClass("select2-results__option--highlighted")
                        });
                        t.on("results:message", function (n) {
                            i.displayMessage(n)
                        });
                        if (n.fn.mousewheel) this.$results.on("mousewheel", function (n) {
                            var t = i.$results.scrollTop(),
                                r = i.$results.get(0).scrollHeight - t + n.deltaY,
                                u = n.deltaY > 0 && t - n.deltaY <= 0,
                                f = n.deltaY < 0 && r <= i.$results.height();
                            u ? (i.$results.scrollTop(0), n.preventDefault(), n.stopPropagation()) : f && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()), n.preventDefault(), n.stopPropagation())
                        });
                        this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (t) {
                            var r = n(this),
                                u = r.data("data");
                            if (r.attr("aria-selected") === "true") {
                                i.options.get("multiple") ? i.trigger("unselect", {
                                    originalEvent: t,
                                    data: u
                                }) : i.trigger("close", {});
                                return
                            }
                            i.trigger("select", {
                                originalEvent: t,
                                data: u
                            })
                        });
                        this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function () {
                            var t = n(this).data("data");
                            i.getHighlightedResults().removeClass("select2-results__option--highlighted");
                            i.trigger("results:focus", {
                                data: t,
                                element: n(this)
                            })
                        })
                    }, i.prototype.getHighlightedResults = function () {
                        return this.$results.find(".select2-results__option--highlighted")
                    }, i.prototype.destroy = function () {
                        this.$results.remove()
                    }, i.prototype.ensureHighlightVisible = function () {
                        var n = this.getHighlightedResults();
                        if (n.length !== 0) {
                            var f = this.$results.find("[aria-selected]"),
                                e = f.index(n),
                                t = this.$results.offset().top,
                                i = n.offset().top,
                                r = this.$results.scrollTop() + (i - t),
                                u = i - t;
                            r -= n.outerHeight(!1) * 2;
                            e <= 2 ? this.$results.scrollTop(0) : (u > this.$results.outerHeight() || u < 0) && this.$results.scrollTop(r)
                        }
                    }, i.prototype.template = function (t, i) {
                        var u = this.options.get("templateResult"),
                            f = this.options.get("escapeMarkup"),
                            r = u(t, i);
                        r == null ? i.style.display = "none" : typeof r == "string" ? i.innerHTML = f(r) : n(i).append(r)
                    }, i
                }), t.define("select2/keys", [], function () {
                    return {
                        BACKSPACE: 8,
                        TAB: 9,
                        ENTER: 13,
                        SHIFT: 16,
                        CTRL: 17,
                        ALT: 18,
                        ESC: 27,
                        SPACE: 32,
                        PAGE_UP: 33,
                        PAGE_DOWN: 34,
                        END: 35,
                        HOME: 36,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40,
                        DELETE: 46
                    }
                }), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (n, t, i) {
                    function r(n, t) {
                        this.$element = n;
                        this.options = t;
                        r.__super__.constructor.call(this)
                    }
                    return t.Extend(r, t.Observable), r.prototype.render = function () {
                        var t = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"><\/span>');
                        return this._tabindex = 0, this.$element.data("old-tabindex") != null ? this._tabindex = this.$element.data("old-tabindex") : this.$element.attr("tabindex") != null && (this._tabindex = this.$element.attr("tabindex")), t.attr("title", this.$element.attr("title")), t.attr("tabindex", this._tabindex), this.$selection = t, t
                    }, r.prototype.bind = function (n) {
                        var t = this,
                            u = n.id + "-container",
                            r = n.id + "-results";
                        this.container = n;
                        this.$selection.on("focus", function (n) {
                            t.trigger("focus", n)
                        });
                        this.$selection.on("blur", function (n) {
                            t._handleBlur(n)
                        });
                        this.$selection.on("keydown", function (n) {
                            t.trigger("keypress", n);
                            n.which === i.SPACE && n.preventDefault()
                        });
                        n.on("results:focus", function (n) {
                            t.$selection.attr("aria-activedescendant", n.data._resultId)
                        });
                        n.on("selection:update", function (n) {
                            t.update(n.data)
                        });
                        n.on("open", function () {
                            t.$selection.attr("aria-expanded", "true");
                            t.$selection.attr("aria-owns", r);
                            t._attachCloseHandler(n)
                        });
                        n.on("close", function () {
                            t.$selection.attr("aria-expanded", "false");
                            t.$selection.removeAttr("aria-activedescendant");
                            t.$selection.removeAttr("aria-owns");
                            t.$selection.focus();
                            t._detachCloseHandler(n)
                        });
                        n.on("enable", function () {
                            t.$selection.attr("tabindex", t._tabindex)
                        });
                        n.on("disable", function () {
                            t.$selection.attr("tabindex", "-1")
                        })
                    }, r.prototype._handleBlur = function (t) {
                        var i = this;
                        window.setTimeout(function () {
                            document.activeElement == i.$selection[0] || n.contains(i.$selection[0], document.activeElement) || i.trigger("blur", t)
                        }, 1)
                    }, r.prototype._attachCloseHandler = function (t) {
                        var i = this;
                        n(document.body).on("mousedown.select2." + t.id, function (t) {
                            var i = n(t.target),
                                r = i.closest(".select2"),
                                u = n(".select2.select2-container--open");
                            u.each(function () {
                                var i = n(this),
                                    t;
                                this != r[0] && (t = i.data("element"), t.select2("close"))
                            })
                        })
                    }, r.prototype._detachCloseHandler = function (t) {
                        n(document.body).off("mousedown.select2." + t.id)
                    }, r.prototype.position = function (n, t) {
                        var i = t.find(".selection");
                        i.append(n)
                    }, r.prototype.destroy = function () {
                        this._detachCloseHandler(this.container)
                    }, r.prototype.update = function () {
                        throw new Error("The `update` method must be defined in child classes.");
                    }, r
                }), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (n, t, i) {
                    function r() {
                        r.__super__.constructor.apply(this, arguments)
                    }
                    return i.Extend(r, t), r.prototype.render = function () {
                        var n = r.__super__.render.call(this);
                        return n.addClass("select2-selection--single"), n.html('<span class="select2-selection__rendered"><\/span><span class="select2-selection__arrow" role="presentation"><b role="presentation"><\/b><\/span>'), n
                    }, r.prototype.bind = function (n) {
                        var t = this,
                            i;
                        r.__super__.bind.apply(this, arguments);
                        i = n.id + "-container";
                        this.$selection.find(".select2-selection__rendered").attr("id", i);
                        this.$selection.attr("aria-labelledby", i);
                        this.$selection.on("mousedown", function (n) {
                            n.which === 1 && t.trigger("toggle", {
                                originalEvent: n
                            })
                        });
                        this.$selection.on("focus", function () { });
                        this.$selection.on("blur", function () { });
                        n.on("focus", function () {
                            n.isOpen() || t.$selection.focus()
                        });
                        n.on("selection:update", function (n) {
                            t.update(n.data)
                        })
                    }, r.prototype.clear = function () {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, r.prototype.display = function (n, t) {
                        var i = this.options.get("templateSelection"),
                            r = this.options.get("escapeMarkup");
                        return r(i(n, t))
                    }, r.prototype.selectionContainer = function () {
                        return n("<span><\/span>")
                    }, r.prototype.update = function (n) {
                        if (n.length === 0) {
                            this.clear();
                            return
                        }
                        var t = n[0],
                            i = this.$selection.find(".select2-selection__rendered"),
                            r = this.display(t, i);
                        i.empty().append(r);
                        i.prop("title", t.title || t.text)
                    }, r
                }), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (n, t, i) {
                    function r() {
                        r.__super__.constructor.apply(this, arguments)
                    }
                    return i.Extend(r, t), r.prototype.render = function () {
                        var n = r.__super__.render.call(this);
                        return n.addClass("select2-selection--multiple"), n.html('<ul class="select2-selection__rendered"><\/ul>'), n
                    }, r.prototype.bind = function () {
                        var t = this;
                        r.__super__.bind.apply(this, arguments);
                        this.$selection.on("click", function (n) {
                            t.trigger("toggle", {
                                originalEvent: n
                            })
                        });
                        this.$selection.on("click", ".select2-selection__choice__remove", function (i) {
                            if (!t.options.get("disabled")) {
                                var r = n(this),
                                    u = r.parent(),
                                    f = u.data("data");
                                t.trigger("unselect", {
                                    originalEvent: i,
                                    data: f
                                })
                            }
                        })
                    }, r.prototype.clear = function () {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, r.prototype.display = function (n, t) {
                        var i = this.options.get("templateSelection"),
                            r = this.options.get("escapeMarkup");
                        return r(i(n, t))
                    }, r.prototype.selectionContainer = function () {
                        return n('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;<\/span><\/li>')
                    }, r.prototype.update = function (n) {
                        var f, r, e;
                        if (this.clear(), n.length !== 0) {
                            for (f = [], r = 0; r < n.length; r++) {
                                var u = n[r],
                                    t = this.selectionContainer(),
                                    o = this.display(u, t);
                                t.append(o);
                                t.prop("title", u.title || u.text);
                                t.data("data", u);
                                f.push(t)
                            }
                            e = this.$selection.find(".select2-selection__rendered");
                            i.appendMany(e, f)
                        }
                    }, r
                }), t.define("select2/selection/placeholder", ["../utils"], function () {
                    function n(n, t, i) {
                        this.placeholder = this.normalizePlaceholder(i.get("placeholder"));
                        n.call(this, t, i)
                    }
                    return n.prototype.normalizePlaceholder = function (n, t) {
                        return typeof t == "string" && (t = {
                            id: "",
                            text: t
                        }), t
                    }, n.prototype.createPlaceholder = function (n, t) {
                        var i = this.selectionContainer();
                        return i.html(this.display(t)), i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), i
                    }, n.prototype.update = function (n, t) {
                        var r = t.length == 1 && t[0].id != this.placeholder.id,
                            u = t.length > 1,
                            i;
                        if (u || r) return n.call(this, t);
                        this.clear();
                        i = this.createPlaceholder(this.placeholder);
                        this.$selection.find(".select2-selection__rendered").append(i)
                    }, n
                }), t.define("select2/selection/allowClear", ["jquery", "../keys"], function (n, t) {
                    function i() { }
                    return i.prototype.bind = function (n, t, i) {
                        var r = this;
                        n.call(this, t, i);
                        this.placeholder == null && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option.");
                        this.$selection.on("mousedown", ".select2-selection__clear", function (n) {
                            r._handleClear(n)
                        });
                        t.on("keypress", function (n) {
                            r._handleKeyboardClear(n, t)
                        })
                    }, i.prototype._handleClear = function (n, t) {
                        var r, u, i, f;
                        if (!this.options.get("disabled") && (r = this.$selection.find(".select2-selection__clear"), r.length !== 0)) {
                            for (t.stopPropagation(), u = r.data("data"), i = 0; i < u.length; i++)
                                if (f = {
                                    data: u[i]
                                }, this.trigger("unselect", f), f.prevented) return;
                            this.$element.val(this.placeholder.id).trigger("change");
                            this.trigger("toggle", {})
                        }
                    }, i.prototype._handleKeyboardClear = function (n, i, r) {
                        r.isOpen() || (i.which == t.DELETE || i.which == t.BACKSPACE) && this._handleClear(i)
                    }, i.prototype.update = function (t, i) {
                        if (t.call(this, i), !(this.$selection.find(".select2-selection__placeholder").length > 0) && i.length !== 0) {
                            var r = n('<span class="select2-selection__clear">&times;<\/span>');
                            r.data("data", i);
                            this.$selection.find(".select2-selection__rendered").prepend(r)
                        }
                    }, i
                }), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (n, t, i) {
                    function r(n, t, i) {
                        n.call(this, t, i)
                    }
                    return r.prototype.render = function (t) {
                        var i = n('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /><\/li>'),
                            r;
                        return this.$searchContainer = i, this.$search = i.find("input"), r = t.call(this), this._transferTabIndex(), r
                    }, r.prototype.bind = function (n, t, r) {
                        var u = this,
                            f, e;
                        n.call(this, t, r);
                        t.on("open", function () {
                            u.$search.trigger("focus")
                        });
                        t.on("close", function () {
                            u.$search.val("");
                            u.$search.removeAttr("aria-activedescendant");
                            u.$search.trigger("focus")
                        });
                        t.on("enable", function () {
                            u.$search.prop("disabled", !1);
                            u._transferTabIndex()
                        });
                        t.on("disable", function () {
                            u.$search.prop("disabled", !0)
                        });
                        t.on("focus", function () {
                            u.$search.trigger("focus")
                        });
                        t.on("results:focus", function (n) {
                            u.$search.attr("aria-activedescendant", n.id)
                        });
                        this.$selection.on("focusin", ".select2-search--inline", function (n) {
                            u.trigger("focus", n)
                        });
                        this.$selection.on("focusout", ".select2-search--inline", function (n) {
                            u._handleBlur(n)
                        });
                        this.$selection.on("keydown", ".select2-search--inline", function (n) {
                            var r, t, f;
                            n.stopPropagation();
                            u.trigger("keypress", n);
                            u._keyUpPrevented = n.isDefaultPrevented();
                            r = n.which;
                            r === i.BACKSPACE && u.$search.val() === "" && (t = u.$searchContainer.prev(".select2-selection__choice"), t.length > 0 && (f = t.data("data"), u.searchRemoveChoice(f), n.preventDefault()))
                        });
                        f = document.documentMode;
                        e = f && f <= 11;
                        this.$selection.on("input.searchcheck", ".select2-search--inline", function () {
                            if (e) {
                                u.$selection.off("input.search input.searchcheck");
                                return
                            }
                            u.$selection.off("keyup.search")
                        });
                        this.$selection.on("keyup.search input.search", ".select2-search--inline", function (n) {
                            if (e && n.type === "input") {
                                u.$selection.off("input.search input.searchcheck");
                                return
                            }
                            var t = n.which;
                            t != i.SHIFT && t != i.CTRL && t != i.ALT && t != i.TAB && u.handleSearch(n)
                        })
                    }, r.prototype._transferTabIndex = function () {
                        this.$search.attr("tabindex", this.$selection.attr("tabindex"));
                        this.$selection.attr("tabindex", "-1")
                    }, r.prototype.createPlaceholder = function (n, t) {
                        this.$search.attr("placeholder", t.text)
                    }, r.prototype.update = function (n, t) {
                        var i = this.$search[0] == document.activeElement;
                        this.$search.attr("placeholder", "");
                        n.call(this, t);
                        this.$selection.find(".select2-selection__rendered").append(this.$searchContainer);
                        this.resizeSearch();
                        i && this.$search.focus()
                    }, r.prototype.handleSearch = function () {
                        if (this.resizeSearch(), !this._keyUpPrevented) {
                            var n = this.$search.val();
                            this.trigger("query", {
                                term: n
                            })
                        }
                        this._keyUpPrevented = !1
                    }, r.prototype.searchRemoveChoice = function (n, t) {
                        this.trigger("unselect", {
                            data: t
                        });
                        this.$search.val(t.text);
                        this.handleSearch()
                    }, r.prototype.resizeSearch = function () {
                        var n, t;
                        this.$search.css("width", "25px");
                        n = "";
                        this.$search.attr("placeholder") !== "" ? n = this.$selection.find(".select2-selection__rendered").innerWidth() : (t = this.$search.val().length + 1, n = t * .75 + "em");
                        this.$search.css("width", n)
                    }, r
                }), t.define("select2/selection/eventRelay", ["jquery"], function (n) {
                    function t() { }
                    return t.prototype.bind = function (t, i, r) {
                        var u = this,
                            f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                            e = ["opening", "closing", "selecting", "unselecting"];
                        t.call(this, i, r);
                        i.on("*", function (t, i) {
                            if (n.inArray(t, f) !== -1) {
                                i = i || {};
                                var r = n.Event("select2:" + t, {
                                    params: i
                                });
                                (u.$element.trigger(r), n.inArray(t, e) !== -1) && (i.prevented = r.isDefaultPrevented())
                            }
                        })
                    }, t
                }), t.define("select2/translation", ["jquery", "require"], function (n, t) {
                    function i(n) {
                        this.dict = n || {}
                    }
                    return i.prototype.all = function () {
                        return this.dict
                    }, i.prototype.get = function (n) {
                        return this.dict[n]
                    }, i.prototype.extend = function (t) {
                        this.dict = n.extend({}, t.all(), this.dict)
                    }, i._cache = {}, i.loadPath = function (n) {
                        if (!(n in i._cache)) {
                            var r = t(n);
                            i._cache[n] = r
                        }
                        return new i(i._cache[n])
                    }, i
                }), t.define("select2/diacritics", [], function () {
                    return {
                        "Ⓐ": "A",
                        "Ａ": "A",
                        "À": "A",
                        "Á": "A",
                        "Â": "A",
                        "Ầ": "A",
                        "Ấ": "A",
                        "Ẫ": "A",
                        "Ẩ": "A",
                        "Ã": "A",
                        "Ā": "A",
                        "Ă": "A",
                        "Ằ": "A",
                        "Ắ": "A",
                        "Ẵ": "A",
                        "Ẳ": "A",
                        "Ȧ": "A",
                        "Ǡ": "A",
                        "Ä": "A",
                        "Ǟ": "A",
                        "Ả": "A",
                        "Å": "A",
                        "Ǻ": "A",
                        "Ǎ": "A",
                        "Ȁ": "A",
                        "Ȃ": "A",
                        "Ạ": "A",
                        "Ậ": "A",
                        "Ặ": "A",
                        "Ḁ": "A",
                        "Ą": "A",
                        "Ⱥ": "A",
                        "Ɐ": "A",
                        "Ꜳ": "AA",
                        "Æ": "AE",
                        "Ǽ": "AE",
                        "Ǣ": "AE",
                        "Ꜵ": "AO",
                        "Ꜷ": "AU",
                        "Ꜹ": "AV",
                        "Ꜻ": "AV",
                        "Ꜽ": "AY",
                        "Ⓑ": "B",
                        "Ｂ": "B",
                        "Ḃ": "B",
                        "Ḅ": "B",
                        "Ḇ": "B",
                        "Ƀ": "B",
                        "Ƃ": "B",
                        "Ɓ": "B",
                        "Ⓒ": "C",
                        "Ｃ": "C",
                        "Ć": "C",
                        "Ĉ": "C",
                        "Ċ": "C",
                        "Č": "C",
                        "Ç": "C",
                        "Ḉ": "C",
                        "Ƈ": "C",
                        "Ȼ": "C",
                        "Ꜿ": "C",
                        "Ⓓ": "D",
                        "Ｄ": "D",
                        "Ḋ": "D",
                        "Ď": "D",
                        "Ḍ": "D",
                        "Ḑ": "D",
                        "Ḓ": "D",
                        "Ḏ": "D",
                        "Đ": "D",
                        "Ƌ": "D",
                        "Ɗ": "D",
                        "Ɖ": "D",
                        "Ꝺ": "D",
                        "Ǳ": "DZ",
                        "Ǆ": "DZ",
                        "ǲ": "Dz",
                        "ǅ": "Dz",
                        "Ⓔ": "E",
                        "Ｅ": "E",
                        "È": "E",
                        "É": "E",
                        "Ê": "E",
                        "Ề": "E",
                        "Ế": "E",
                        "Ễ": "E",
                        "Ể": "E",
                        "Ẽ": "E",
                        "Ē": "E",
                        "Ḕ": "E",
                        "Ḗ": "E",
                        "Ĕ": "E",
                        "Ė": "E",
                        "Ë": "E",
                        "Ẻ": "E",
                        "Ě": "E",
                        "Ȅ": "E",
                        "Ȇ": "E",
                        "Ẹ": "E",
                        "Ệ": "E",
                        "Ȩ": "E",
                        "Ḝ": "E",
                        "Ę": "E",
                        "Ḙ": "E",
                        "Ḛ": "E",
                        "Ɛ": "E",
                        "Ǝ": "E",
                        "Ⓕ": "F",
                        "Ｆ": "F",
                        "Ḟ": "F",
                        "Ƒ": "F",
                        "Ꝼ": "F",
                        "Ⓖ": "G",
                        "Ｇ": "G",
                        "Ǵ": "G",
                        "Ĝ": "G",
                        "Ḡ": "G",
                        "Ğ": "G",
                        "Ġ": "G",
                        "Ǧ": "G",
                        "Ģ": "G",
                        "Ǥ": "G",
                        "Ɠ": "G",
                        "Ꞡ": "G",
                        "Ᵹ": "G",
                        "Ꝿ": "G",
                        "Ⓗ": "H",
                        "Ｈ": "H",
                        "Ĥ": "H",
                        "Ḣ": "H",
                        "Ḧ": "H",
                        "Ȟ": "H",
                        "Ḥ": "H",
                        "Ḩ": "H",
                        "Ḫ": "H",
                        "Ħ": "H",
                        "Ⱨ": "H",
                        "Ⱶ": "H",
                        "Ɥ": "H",
                        "Ⓘ": "I",
                        "Ｉ": "I",
                        "Ì": "I",
                        "Í": "I",
                        "Î": "I",
                        "Ĩ": "I",
                        "Ī": "I",
                        "Ĭ": "I",
                        "İ": "I",
                        "Ï": "I",
                        "Ḯ": "I",
                        "Ỉ": "I",
                        "Ǐ": "I",
                        "Ȉ": "I",
                        "Ȋ": "I",
                        "Ị": "I",
                        "Į": "I",
                        "Ḭ": "I",
                        "Ɨ": "I",
                        "Ⓙ": "J",
                        "Ｊ": "J",
                        "Ĵ": "J",
                        "Ɉ": "J",
                        "Ⓚ": "K",
                        "Ｋ": "K",
                        "Ḱ": "K",
                        "Ǩ": "K",
                        "Ḳ": "K",
                        "Ķ": "K",
                        "Ḵ": "K",
                        "Ƙ": "K",
                        "Ⱪ": "K",
                        "Ꝁ": "K",
                        "Ꝃ": "K",
                        "Ꝅ": "K",
                        "Ꞣ": "K",
                        "Ⓛ": "L",
                        "Ｌ": "L",
                        "Ŀ": "L",
                        "Ĺ": "L",
                        "Ľ": "L",
                        "Ḷ": "L",
                        "Ḹ": "L",
                        "Ļ": "L",
                        "Ḽ": "L",
                        "Ḻ": "L",
                        "Ł": "L",
                        "Ƚ": "L",
                        "Ɫ": "L",
                        "Ⱡ": "L",
                        "Ꝉ": "L",
                        "Ꝇ": "L",
                        "Ꞁ": "L",
                        "Ǉ": "LJ",
                        "ǈ": "Lj",
                        "Ⓜ": "M",
                        "Ｍ": "M",
                        "Ḿ": "M",
                        "Ṁ": "M",
                        "Ṃ": "M",
                        "Ɱ": "M",
                        "Ɯ": "M",
                        "Ⓝ": "N",
                        "Ｎ": "N",
                        "Ǹ": "N",
                        "Ń": "N",
                        "Ñ": "N",
                        "Ṅ": "N",
                        "Ň": "N",
                        "Ṇ": "N",
                        "Ņ": "N",
                        "Ṋ": "N",
                        "Ṉ": "N",
                        "Ƞ": "N",
                        "Ɲ": "N",
                        "Ꞑ": "N",
                        "Ꞥ": "N",
                        "Ǌ": "NJ",
                        "ǋ": "Nj",
                        "Ⓞ": "O",
                        "Ｏ": "O",
                        "Ò": "O",
                        "Ó": "O",
                        "Ô": "O",
                        "Ồ": "O",
                        "Ố": "O",
                        "Ỗ": "O",
                        "Ổ": "O",
                        "Õ": "O",
                        "Ṍ": "O",
                        "Ȭ": "O",
                        "Ṏ": "O",
                        "Ō": "O",
                        "Ṑ": "O",
                        "Ṓ": "O",
                        "Ŏ": "O",
                        "Ȯ": "O",
                        "Ȱ": "O",
                        "Ö": "O",
                        "Ȫ": "O",
                        "Ỏ": "O",
                        "Ő": "O",
                        "Ǒ": "O",
                        "Ȍ": "O",
                        "Ȏ": "O",
                        "Ơ": "O",
                        "Ờ": "O",
                        "Ớ": "O",
                        "Ỡ": "O",
                        "Ở": "O",
                        "Ợ": "O",
                        "Ọ": "O",
                        "Ộ": "O",
                        "Ǫ": "O",
                        "Ǭ": "O",
                        "Ø": "O",
                        "Ǿ": "O",
                        "Ɔ": "O",
                        "Ɵ": "O",
                        "Ꝋ": "O",
                        "Ꝍ": "O",
                        "Ƣ": "OI",
                        "Ꝏ": "OO",
                        "Ȣ": "OU",
                        "Ⓟ": "P",
                        "Ｐ": "P",
                        "Ṕ": "P",
                        "Ṗ": "P",
                        "Ƥ": "P",
                        "Ᵽ": "P",
                        "Ꝑ": "P",
                        "Ꝓ": "P",
                        "Ꝕ": "P",
                        "Ⓠ": "Q",
                        "Ｑ": "Q",
                        "Ꝗ": "Q",
                        "Ꝙ": "Q",
                        "Ɋ": "Q",
                        "Ⓡ": "R",
                        "Ｒ": "R",
                        "Ŕ": "R",
                        "Ṙ": "R",
                        "Ř": "R",
                        "Ȑ": "R",
                        "Ȓ": "R",
                        "Ṛ": "R",
                        "Ṝ": "R",
                        "Ŗ": "R",
                        "Ṟ": "R",
                        "Ɍ": "R",
                        "Ɽ": "R",
                        "Ꝛ": "R",
                        "Ꞧ": "R",
                        "Ꞃ": "R",
                        "Ⓢ": "S",
                        "Ｓ": "S",
                        "ẞ": "S",
                        "Ś": "S",
                        "Ṥ": "S",
                        "Ŝ": "S",
                        "Ṡ": "S",
                        "Š": "S",
                        "Ṧ": "S",
                        "Ṣ": "S",
                        "Ṩ": "S",
                        "Ș": "S",
                        "Ş": "S",
                        "Ȿ": "S",
                        "Ꞩ": "S",
                        "Ꞅ": "S",
                        "Ⓣ": "T",
                        "Ｔ": "T",
                        "Ṫ": "T",
                        "Ť": "T",
                        "Ṭ": "T",
                        "Ț": "T",
                        "Ţ": "T",
                        "Ṱ": "T",
                        "Ṯ": "T",
                        "Ŧ": "T",
                        "Ƭ": "T",
                        "Ʈ": "T",
                        "Ⱦ": "T",
                        "Ꞇ": "T",
                        "Ꜩ": "TZ",
                        "Ⓤ": "U",
                        "Ｕ": "U",
                        "Ù": "U",
                        "Ú": "U",
                        "Û": "U",
                        "Ũ": "U",
                        "Ṹ": "U",
                        "Ū": "U",
                        "Ṻ": "U",
                        "Ŭ": "U",
                        "Ü": "U",
                        "Ǜ": "U",
                        "Ǘ": "U",
                        "Ǖ": "U",
                        "Ǚ": "U",
                        "Ủ": "U",
                        "Ů": "U",
                        "Ű": "U",
                        "Ǔ": "U",
                        "Ȕ": "U",
                        "Ȗ": "U",
                        "Ư": "U",
                        "Ừ": "U",
                        "Ứ": "U",
                        "Ữ": "U",
                        "Ử": "U",
                        "Ự": "U",
                        "Ụ": "U",
                        "Ṳ": "U",
                        "Ų": "U",
                        "Ṷ": "U",
                        "Ṵ": "U",
                        "Ʉ": "U",
                        "Ⓥ": "V",
                        "Ｖ": "V",
                        "Ṽ": "V",
                        "Ṿ": "V",
                        "Ʋ": "V",
                        "Ꝟ": "V",
                        "Ʌ": "V",
                        "Ꝡ": "VY",
                        "Ⓦ": "W",
                        "Ｗ": "W",
                        "Ẁ": "W",
                        "Ẃ": "W",
                        "Ŵ": "W",
                        "Ẇ": "W",
                        "Ẅ": "W",
                        "Ẉ": "W",
                        "Ⱳ": "W",
                        "Ⓧ": "X",
                        "Ｘ": "X",
                        "Ẋ": "X",
                        "Ẍ": "X",
                        "Ⓨ": "Y",
                        "Ｙ": "Y",
                        "Ỳ": "Y",
                        "Ý": "Y",
                        "Ŷ": "Y",
                        "Ỹ": "Y",
                        "Ȳ": "Y",
                        "Ẏ": "Y",
                        "Ÿ": "Y",
                        "Ỷ": "Y",
                        "Ỵ": "Y",
                        "Ƴ": "Y",
                        "Ɏ": "Y",
                        "Ỿ": "Y",
                        "Ⓩ": "Z",
                        "Ｚ": "Z",
                        "Ź": "Z",
                        "Ẑ": "Z",
                        "Ż": "Z",
                        "Ž": "Z",
                        "Ẓ": "Z",
                        "Ẕ": "Z",
                        "Ƶ": "Z",
                        "Ȥ": "Z",
                        "Ɀ": "Z",
                        "Ⱬ": "Z",
                        "Ꝣ": "Z",
                        "ⓐ": "a",
                        "ａ": "a",
                        "ẚ": "a",
                        "à": "a",
                        "á": "a",
                        "â": "a",
                        "ầ": "a",
                        "ấ": "a",
                        "ẫ": "a",
                        "ẩ": "a",
                        "ã": "a",
                        "ā": "a",
                        "ă": "a",
                        "ằ": "a",
                        "ắ": "a",
                        "ẵ": "a",
                        "ẳ": "a",
                        "ȧ": "a",
                        "ǡ": "a",
                        "ä": "a",
                        "ǟ": "a",
                        "ả": "a",
                        "å": "a",
                        "ǻ": "a",
                        "ǎ": "a",
                        "ȁ": "a",
                        "ȃ": "a",
                        "ạ": "a",
                        "ậ": "a",
                        "ặ": "a",
                        "ḁ": "a",
                        "ą": "a",
                        "ⱥ": "a",
                        "ɐ": "a",
                        "ꜳ": "aa",
                        "æ": "ae",
                        "ǽ": "ae",
                        "ǣ": "ae",
                        "ꜵ": "ao",
                        "ꜷ": "au",
                        "ꜹ": "av",
                        "ꜻ": "av",
                        "ꜽ": "ay",
                        "ⓑ": "b",
                        "ｂ": "b",
                        "ḃ": "b",
                        "ḅ": "b",
                        "ḇ": "b",
                        "ƀ": "b",
                        "ƃ": "b",
                        "ɓ": "b",
                        "ⓒ": "c",
                        "ｃ": "c",
                        "ć": "c",
                        "ĉ": "c",
                        "ċ": "c",
                        "č": "c",
                        "ç": "c",
                        "ḉ": "c",
                        "ƈ": "c",
                        "ȼ": "c",
                        "ꜿ": "c",
                        "ↄ": "c",
                        "ⓓ": "d",
                        "ｄ": "d",
                        "ḋ": "d",
                        "ď": "d",
                        "ḍ": "d",
                        "ḑ": "d",
                        "ḓ": "d",
                        "ḏ": "d",
                        "đ": "d",
                        "ƌ": "d",
                        "ɖ": "d",
                        "ɗ": "d",
                        "ꝺ": "d",
                        "ǳ": "dz",
                        "ǆ": "dz",
                        "ⓔ": "e",
                        "ｅ": "e",
                        "è": "e",
                        "é": "e",
                        "ê": "e",
                        "ề": "e",
                        "ế": "e",
                        "ễ": "e",
                        "ể": "e",
                        "ẽ": "e",
                        "ē": "e",
                        "ḕ": "e",
                        "ḗ": "e",
                        "ĕ": "e",
                        "ė": "e",
                        "ë": "e",
                        "ẻ": "e",
                        "ě": "e",
                        "ȅ": "e",
                        "ȇ": "e",
                        "ẹ": "e",
                        "ệ": "e",
                        "ȩ": "e",
                        "ḝ": "e",
                        "ę": "e",
                        "ḙ": "e",
                        "ḛ": "e",
                        "ɇ": "e",
                        "ɛ": "e",
                        "ǝ": "e",
                        "ⓕ": "f",
                        "ｆ": "f",
                        "ḟ": "f",
                        "ƒ": "f",
                        "ꝼ": "f",
                        "ⓖ": "g",
                        "ｇ": "g",
                        "ǵ": "g",
                        "ĝ": "g",
                        "ḡ": "g",
                        "ğ": "g",
                        "ġ": "g",
                        "ǧ": "g",
                        "ģ": "g",
                        "ǥ": "g",
                        "ɠ": "g",
                        "ꞡ": "g",
                        "ᵹ": "g",
                        "ꝿ": "g",
                        "ⓗ": "h",
                        "ｈ": "h",
                        "ĥ": "h",
                        "ḣ": "h",
                        "ḧ": "h",
                        "ȟ": "h",
                        "ḥ": "h",
                        "ḩ": "h",
                        "ḫ": "h",
                        "ẖ": "h",
                        "ħ": "h",
                        "ⱨ": "h",
                        "ⱶ": "h",
                        "ɥ": "h",
                        "ƕ": "hv",
                        "ⓘ": "i",
                        "ｉ": "i",
                        "ì": "i",
                        "í": "i",
                        "î": "i",
                        "ĩ": "i",
                        "ī": "i",
                        "ĭ": "i",
                        "ï": "i",
                        "ḯ": "i",
                        "ỉ": "i",
                        "ǐ": "i",
                        "ȉ": "i",
                        "ȋ": "i",
                        "ị": "i",
                        "į": "i",
                        "ḭ": "i",
                        "ɨ": "i",
                        "ı": "i",
                        "ⓙ": "j",
                        "ｊ": "j",
                        "ĵ": "j",
                        "ǰ": "j",
                        "ɉ": "j",
                        "ⓚ": "k",
                        "ｋ": "k",
                        "ḱ": "k",
                        "ǩ": "k",
                        "ḳ": "k",
                        "ķ": "k",
                        "ḵ": "k",
                        "ƙ": "k",
                        "ⱪ": "k",
                        "ꝁ": "k",
                        "ꝃ": "k",
                        "ꝅ": "k",
                        "ꞣ": "k",
                        "ⓛ": "l",
                        "ｌ": "l",
                        "ŀ": "l",
                        "ĺ": "l",
                        "ľ": "l",
                        "ḷ": "l",
                        "ḹ": "l",
                        "ļ": "l",
                        "ḽ": "l",
                        "ḻ": "l",
                        "ſ": "l",
                        "ł": "l",
                        "ƚ": "l",
                        "ɫ": "l",
                        "ⱡ": "l",
                        "ꝉ": "l",
                        "ꞁ": "l",
                        "ꝇ": "l",
                        "ǉ": "lj",
                        "ⓜ": "m",
                        "ｍ": "m",
                        "ḿ": "m",
                        "ṁ": "m",
                        "ṃ": "m",
                        "ɱ": "m",
                        "ɯ": "m",
                        "ⓝ": "n",
                        "ｎ": "n",
                        "ǹ": "n",
                        "ń": "n",
                        "ñ": "n",
                        "ṅ": "n",
                        "ň": "n",
                        "ṇ": "n",
                        "ņ": "n",
                        "ṋ": "n",
                        "ṉ": "n",
                        "ƞ": "n",
                        "ɲ": "n",
                        "ŉ": "n",
                        "ꞑ": "n",
                        "ꞥ": "n",
                        "ǌ": "nj",
                        "ⓞ": "o",
                        "ｏ": "o",
                        "ò": "o",
                        "ó": "o",
                        "ô": "o",
                        "ồ": "o",
                        "ố": "o",
                        "ỗ": "o",
                        "ổ": "o",
                        "õ": "o",
                        "ṍ": "o",
                        "ȭ": "o",
                        "ṏ": "o",
                        "ō": "o",
                        "ṑ": "o",
                        "ṓ": "o",
                        "ŏ": "o",
                        "ȯ": "o",
                        "ȱ": "o",
                        "ö": "o",
                        "ȫ": "o",
                        "ỏ": "o",
                        "ő": "o",
                        "ǒ": "o",
                        "ȍ": "o",
                        "ȏ": "o",
                        "ơ": "o",
                        "ờ": "o",
                        "ớ": "o",
                        "ỡ": "o",
                        "ở": "o",
                        "ợ": "o",
                        "ọ": "o",
                        "ộ": "o",
                        "ǫ": "o",
                        "ǭ": "o",
                        "ø": "o",
                        "ǿ": "o",
                        "ɔ": "o",
                        "ꝋ": "o",
                        "ꝍ": "o",
                        "ɵ": "o",
                        "ƣ": "oi",
                        "ȣ": "ou",
                        "ꝏ": "oo",
                        "ⓟ": "p",
                        "ｐ": "p",
                        "ṕ": "p",
                        "ṗ": "p",
                        "ƥ": "p",
                        "ᵽ": "p",
                        "ꝑ": "p",
                        "ꝓ": "p",
                        "ꝕ": "p",
                        "ⓠ": "q",
                        "ｑ": "q",
                        "ɋ": "q",
                        "ꝗ": "q",
                        "ꝙ": "q",
                        "ⓡ": "r",
                        "ｒ": "r",
                        "ŕ": "r",
                        "ṙ": "r",
                        "ř": "r",
                        "ȑ": "r",
                        "ȓ": "r",
                        "ṛ": "r",
                        "ṝ": "r",
                        "ŗ": "r",
                        "ṟ": "r",
                        "ɍ": "r",
                        "ɽ": "r",
                        "ꝛ": "r",
                        "ꞧ": "r",
                        "ꞃ": "r",
                        "ⓢ": "s",
                        "ｓ": "s",
                        "ß": "s",
                        "ś": "s",
                        "ṥ": "s",
                        "ŝ": "s",
                        "ṡ": "s",
                        "š": "s",
                        "ṧ": "s",
                        "ṣ": "s",
                        "ṩ": "s",
                        "ș": "s",
                        "ş": "s",
                        "ȿ": "s",
                        "ꞩ": "s",
                        "ꞅ": "s",
                        "ẛ": "s",
                        "ⓣ": "t",
                        "ｔ": "t",
                        "ṫ": "t",
                        "ẗ": "t",
                        "ť": "t",
                        "ṭ": "t",
                        "ț": "t",
                        "ţ": "t",
                        "ṱ": "t",
                        "ṯ": "t",
                        "ŧ": "t",
                        "ƭ": "t",
                        "ʈ": "t",
                        "ⱦ": "t",
                        "ꞇ": "t",
                        "ꜩ": "tz",
                        "ⓤ": "u",
                        "ｕ": "u",
                        "ù": "u",
                        "ú": "u",
                        "û": "u",
                        "ũ": "u",
                        "ṹ": "u",
                        "ū": "u",
                        "ṻ": "u",
                        "ŭ": "u",
                        "ü": "u",
                        "ǜ": "u",
                        "ǘ": "u",
                        "ǖ": "u",
                        "ǚ": "u",
                        "ủ": "u",
                        "ů": "u",
                        "ű": "u",
                        "ǔ": "u",
                        "ȕ": "u",
                        "ȗ": "u",
                        "ư": "u",
                        "ừ": "u",
                        "ứ": "u",
                        "ữ": "u",
                        "ử": "u",
                        "ự": "u",
                        "ụ": "u",
                        "ṳ": "u",
                        "ų": "u",
                        "ṷ": "u",
                        "ṵ": "u",
                        "ʉ": "u",
                        "ⓥ": "v",
                        "ｖ": "v",
                        "ṽ": "v",
                        "ṿ": "v",
                        "ʋ": "v",
                        "ꝟ": "v",
                        "ʌ": "v",
                        "ꝡ": "vy",
                        "ⓦ": "w",
                        "ｗ": "w",
                        "ẁ": "w",
                        "ẃ": "w",
                        "ŵ": "w",
                        "ẇ": "w",
                        "ẅ": "w",
                        "ẘ": "w",
                        "ẉ": "w",
                        "ⱳ": "w",
                        "ⓧ": "x",
                        "ｘ": "x",
                        "ẋ": "x",
                        "ẍ": "x",
                        "ⓨ": "y",
                        "ｙ": "y",
                        "ỳ": "y",
                        "ý": "y",
                        "ŷ": "y",
                        "ỹ": "y",
                        "ȳ": "y",
                        "ẏ": "y",
                        "ÿ": "y",
                        "ỷ": "y",
                        "ẙ": "y",
                        "ỵ": "y",
                        "ƴ": "y",
                        "ɏ": "y",
                        "ỿ": "y",
                        "ⓩ": "z",
                        "ｚ": "z",
                        "ź": "z",
                        "ẑ": "z",
                        "ż": "z",
                        "ž": "z",
                        "ẓ": "z",
                        "ẕ": "z",
                        "ƶ": "z",
                        "ȥ": "z",
                        "ɀ": "z",
                        "ⱬ": "z",
                        "ꝣ": "z",
                        "Ά": "Α",
                        "Έ": "Ε",
                        "Ή": "Η",
                        "Ί": "Ι",
                        "Ϊ": "Ι",
                        "Ό": "Ο",
                        "Ύ": "Υ",
                        "Ϋ": "Υ",
                        "Ώ": "Ω",
                        "ά": "α",
                        "έ": "ε",
                        "ή": "η",
                        "ί": "ι",
                        "ϊ": "ι",
                        "ΐ": "ι",
                        "ό": "ο",
                        "ύ": "υ",
                        "ϋ": "υ",
                        "ΰ": "υ",
                        "ω": "ω",
                        "ς": "σ"
                    }
                }), t.define("select2/data/base", ["../utils"], function (n) {
                    function t() {
                        t.__super__.constructor.call(this)
                    }
                    return n.Extend(t, n.Observable), t.prototype.current = function () {
                        throw new Error("The `current` method must be defined in child classes.");
                    }, t.prototype.query = function () {
                        throw new Error("The `query` method must be defined in child classes.");
                    }, t.prototype.bind = function () { }, t.prototype.destroy = function () { }, t.prototype.generateResultId = function (t, i) {
                        var r = t.id + "-result-";
                        return r += n.generateChars(4), r + (i.id != null ? "-" + i.id.toString() : "-" + n.generateChars(4))
                    }, t
                }), t.define("select2/data/select", ["./base", "../utils", "jquery"], function (n, t, i) {
                    function r(n, t) {
                        this.$element = n;
                        this.options = t;
                        r.__super__.constructor.call(this)
                    }
                    return t.Extend(r, n), r.prototype.current = function (n) {
                        var t = [],
                            r = this;
                        this.$element.find(":selected").each(function () {
                            var n = i(this),
                                u = r.item(n);
                            t.push(u)
                        });
                        n(t)
                    }, r.prototype.select = function (n) {
                        var t = this,
                            r;
                        if (n.selected = !0, i(n.element).is("option")) {
                            n.element.selected = !0;
                            this.$element.trigger("change");
                            return
                        }
                        this.$element.prop("multiple") ? this.current(function (r) {
                            var f = [],
                                u, e;
                            for (n = [n], n.push.apply(n, r), u = 0; u < n.length; u++) e = n[u].id, i.inArray(e, f) === -1 && f.push(e);
                            t.$element.val(f);
                            t.$element.trigger("change")
                        }) : (r = n.id, this.$element.val(r), this.$element.trigger("change"))
                    }, r.prototype.unselect = function (n) {
                        var t = this;
                        if (this.$element.prop("multiple")) {
                            if (n.selected = !1, i(n.element).is("option")) {
                                n.element.selected = !1;
                                this.$element.trigger("change");
                                return
                            }
                            this.current(function (r) {
                                for (var u, f = [], e = 0; e < r.length; e++) u = r[e].id, u !== n.id && i.inArray(u, f) === -1 && f.push(u);
                                t.$element.val(f);
                                t.$element.trigger("change")
                            })
                        }
                    }, r.prototype.bind = function (n) {
                        var t = this;
                        this.container = n;
                        n.on("select", function (n) {
                            t.select(n.data)
                        });
                        n.on("unselect", function (n) {
                            t.unselect(n.data)
                        })
                    }, r.prototype.destroy = function () {
                        this.$element.find("*").each(function () {
                            i.removeData(this, "data")
                        })
                    }, r.prototype.query = function (n, t) {
                        var r = [],
                            u = this,
                            f = this.$element.children();
                        f.each(function () {
                            var t = i(this),
                                e, f;
                            (t.is("option") || t.is("optgroup")) && (e = u.item(t), f = u.matches(n, e), f !== null && r.push(f))
                        });
                        t({
                            results: r
                        })
                    }, r.prototype.addOptions = function (n) {
                        t.appendMany(this.$element, n)
                    }, r.prototype.option = function (n) {
                        var t, u, r;
                        return n.children ? (t = document.createElement("optgroup"), t.label = n.text) : (t = document.createElement("option"), t.textContent !== undefined ? t.textContent = n.text : t.innerText = n.text), n.id && (t.value = n.id), n.disabled && (t.disabled = !0), n.selected && (t.selected = !0), n.title && (t.title = n.title), u = i(t), r = this._normalizeItem(n), r.element = t, i.data(t, "data", r), u
                    }, r.prototype.item = function (n) {
                        var t = {},
                            u, f, r, e, o;
                        if (t = i.data(n[0], "data"), t != null) return t;
                        if (n.is("option")) t = {
                            id: n.val(),
                            text: n.text(),
                            disabled: n.prop("disabled"),
                            selected: n.prop("selected"),
                            title: n.prop("title")
                        };
                        else if (n.is("optgroup")) {
                            for (t = {
                                text: n.prop("label"),
                                children: [],
                                title: n.prop("title")
                            }, u = n.children("option"), f = [], r = 0; r < u.length; r++) e = i(u[r]), o = this.item(e), f.push(o);
                            t.children = f
                        }
                        return t = this._normalizeItem(t), t.element = n[0], i.data(n[0], "data", t), t
                    }, r.prototype._normalizeItem = function (n) {
                        i.isPlainObject(n) || (n = {
                            id: n,
                            text: n
                        });
                        n = i.extend({}, {
                            text: ""
                        }, n);
                        return n.id != null && (n.id = n.id.toString()), n.text != null && (n.text = n.text.toString()), n._resultId == null && n.id && this.container != null && (n._resultId = this.generateResultId(this.container, n)), i.extend({}, {
                            selected: !1,
                            disabled: !1
                        }, n)
                    }, r.prototype.matches = function (n, t) {
                        var i = this.options.get("matcher");
                        return i(n, t)
                    }, r
                }), t.define("select2/data/array", ["./select", "../utils", "jquery"], function (n, t, i) {
                    function r(n, t) {
                        var i = t.get("data") || [];
                        r.__super__.constructor.call(this, n, t);
                        this.addOptions(this.convertToOptions(i))
                    }
                    return t.Extend(r, n), r.prototype.select = function (n) {
                        var t = this.$element.find("option").filter(function (t, i) {
                            return i.value == n.id.toString()
                        });
                        t.length === 0 && (t = this.option(n), this.addOptions(t));
                        r.__super__.select.call(this, n)
                    }, r.prototype.convertToOptions = function (n) {
                        function a(n) {
                            return function () {
                                return i(this).val() == n.id
                            }
                        }
                        for (var r, f, h, c = this, e = this.$element.find("option"), l = e.map(function () {
                            return c.item(i(this)).id
                        }).get(), o = [], u = 0; u < n.length; u++) {
                            if (r = this._normalizeItem(n[u]), i.inArray(r.id, l) >= 0) {
                                var s = e.filter(a(r)),
                                    v = this.item(s),
                                    y = i.extend(!0, {}, r, v),
                                    p = this.option(y);
                                s.replaceWith(p);
                                continue
                            }
                            f = this.option(r);
                            r.children && (h = this.convertToOptions(r.children), t.appendMany(f, h));
                            o.push(f)
                        }
                        return o
                    }, r
                }), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (n, t, i) {
                    function r(n, t) {
                        this.ajaxOptions = this._applyDefaults(t.get("ajax"));
                        this.ajaxOptions.processResults != null && (this.processResults = this.ajaxOptions.processResults);
                        r.__super__.constructor.call(this, n, t)
                    }
                    return t.Extend(r, n), r.prototype._applyDefaults = function (n) {
                        var t = {
                            data: function (n) {
                                return i.extend({}, n, {
                                    q: n.term
                                })
                            },
                            transport: function (n, t, r) {
                                var u = i.ajax(n);
                                return u.then(t), u.fail(r), u
                            }
                        };
                        return i.extend({}, t, n, !0)
                    }, r.prototype.processResults = function (n) {
                        return n
                    }, r.prototype.query = function (n, t) {
                        function f() {
                            var f = r.transport(r, function (r) {
                                var f = u.processResults(r, n);
                                u.options.get("debug") && window.console && console.error && (f && f.results && i.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response."));
                                t(f)
                            }, function () {
                                f.status && f.status === "0" || u.trigger("results:message", {
                                    message: "errorLoading"
                                })
                            });
                            u._request = f
                        }
                        var u = this,
                            r;
                        this._request != null && (i.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                        r = i.extend({
                            type: "GET"
                        }, this.ajaxOptions);
                        typeof r.url == "function" && (r.url = r.url.call(this.$element, n));
                        typeof r.data == "function" && (r.data = r.data.call(this.$element, n));
                        this.ajaxOptions.delay && n.term != null ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(f, this.ajaxOptions.delay)) : f()
                    }, r
                }), t.define("select2/data/tags", ["jquery"], function (n) {
                    function t(t, i, r) {
                        var f = r.get("tags"),
                            o = r.get("createTag"),
                            e, u;
                        if (o !== undefined && (this.createTag = o), e = r.get("insertTag"), e !== undefined && (this.insertTag = e), t.call(this, i, r), n.isArray(f))
                            for (u = 0; u < f.length; u++) {
                                var s = f[u],
                                    h = this._normalizeItem(s),
                                    c = this.option(h);
                                this.$element.append(c)
                            }
                    }
                    return t.prototype.query = function (n, t, i) {
                        function u(n, f) {
                            for (var o, c, e = n.results, s = 0; s < e.length; s++) {
                                var h = e[s],
                                    l = h.children != null && !u({
                                        results: h.children
                                    }, !0),
                                    a = h.text === t.term;
                                if (a || l) {
                                    if (f) return !1;
                                    n.data = e;
                                    i(n);
                                    return
                                }
                            }
                            if (f) return !0;
                            o = r.createTag(t);
                            o != null && (c = r.option(o), c.attr("data-select2-tag", !0), r.addOptions([c]), r.insertTag(e, o));
                            n.results = e;
                            i(n)
                        }
                        var r = this;
                        if (this._removeOldTags(), t.term == null || t.page != null) {
                            n.call(this, t, i);
                            return
                        }
                        n.call(this, t, u)
                    }, t.prototype.createTag = function (t, i) {
                        var r = n.trim(i.term);
                        return r === "" ? null : {
                            id: r,
                            text: r
                        }
                    }, t.prototype.insertTag = function (n, t, i) {
                        t.unshift(i)
                    }, t.prototype._removeOldTags = function () {
                        var i = this._lastTag,
                            t = this.$element.find("option[data-select2-tag]");
                        t.each(function () {
                            this.selected || n(this).remove()
                        })
                    }, t
                }), t.define("select2/data/tokenizer", ["jquery"], function (n) {
                    function t(n, t, i) {
                        var r = i.get("tokenizer");
                        r !== undefined && (this.tokenizer = r);
                        n.call(this, t, i)
                    }
                    return t.prototype.bind = function (n, t, i) {
                        n.call(this, t, i);
                        this.$search = t.dropdown.$search || t.selection.$search || i.find(".select2-search__field")
                    }, t.prototype.query = function (t, i, r) {
                        function e(t) {
                            var i = u._normalizeItem(t),
                                f = u.$element.find("option").filter(function () {
                                    return n(this).val() === i.id
                                }),
                                r;
                            f.length || (r = u.option(i), r.attr("data-select2-tag", !0), u._removeOldTags(), u.addOptions([r]));
                            o(i)
                        }

                        function o(n) {
                            u.trigger("select", {
                                data: n
                            })
                        }
                        var u = this,
                            f;
                        i.term = i.term || "";
                        f = this.tokenizer(i, this.options, e);
                        f.term !== i.term && (this.$search.length && (this.$search.val(f.term), this.$search.focus()), i.term = f.term);
                        t.call(this, i, r)
                    }, t.prototype.tokenizer = function (t, i, r, u) {
                        for (var h = r.get("tokenSeparators") || [], e = i.term, f = 0, c = this.createTag || function (n) {
                            return {
                                id: n.term,
                                text: n.term
                            }
                        }, o; f < e.length;) {
                            if (o = e[f], n.inArray(o, h) === -1) {
                                f++;
                                continue
                            }
                            var l = e.substr(0, f),
                                a = n.extend({}, i, {
                                    term: l
                                }),
                                s = c(a);
                            if (s == null) {
                                f++;
                                continue
                            }
                            u(s);
                            e = e.substr(f + 1) || "";
                            f = 0
                        }
                        return {
                            term: e
                        }
                    }, t
                }), t.define("select2/data/minimumInputLength", [], function () {
                    function n(n, t, i) {
                        this.minimumInputLength = i.get("minimumInputLength");
                        n.call(this, t, i)
                    }
                    return n.prototype.query = function (n, t, i) {
                        if (t.term = t.term || "", t.term.length < this.minimumInputLength) {
                            this.trigger("results:message", {
                                message: "inputTooShort",
                                args: {
                                    minimum: this.minimumInputLength,
                                    input: t.term,
                                    params: t
                                }
                            });
                            return
                        }
                        n.call(this, t, i)
                    }, n
                }), t.define("select2/data/maximumInputLength", [], function () {
                    function n(n, t, i) {
                        this.maximumInputLength = i.get("maximumInputLength");
                        n.call(this, t, i)
                    }
                    return n.prototype.query = function (n, t, i) {
                        if (t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength) {
                            this.trigger("results:message", {
                                message: "inputTooLong",
                                args: {
                                    maximum: this.maximumInputLength,
                                    input: t.term,
                                    params: t
                                }
                            });
                            return
                        }
                        n.call(this, t, i)
                    }, n
                }), t.define("select2/data/maximumSelectionLength", [], function () {
                    function n(n, t, i) {
                        this.maximumSelectionLength = i.get("maximumSelectionLength");
                        n.call(this, t, i)
                    }
                    return n.prototype.query = function (n, t, i) {
                        var r = this;
                        this.current(function (u) {
                            var f = u != null ? u.length : 0;
                            if (r.maximumSelectionLength > 0 && f >= r.maximumSelectionLength) {
                                r.trigger("results:message", {
                                    message: "maximumSelected",
                                    args: {
                                        maximum: r.maximumSelectionLength
                                    }
                                });
                                return
                            }
                            n.call(r, t, i)
                        })
                    }, n
                }), t.define("select2/dropdown", ["jquery", "./utils"], function (n, t) {
                    function i(n, t) {
                        this.$element = n;
                        this.options = t;
                        i.__super__.constructor.call(this)
                    }
                    return t.Extend(i, t.Observable), i.prototype.render = function () {
                        var t = n('<span class="select2-dropdown"><span class="select2-results"><\/span><\/span>');
                        return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t
                    }, i.prototype.bind = function () { }, i.prototype.position = function () { }, i.prototype.destroy = function () {
                        this.$dropdown.remove()
                    }, i
                }), t.define("select2/dropdown/search", ["jquery", "../utils"], function (n) {
                    function t() { }
                    return t.prototype.render = function (t) {
                        var r = t.call(this),
                            i = n('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /><\/span>');
                        return this.$searchContainer = i, this.$search = i.find("input"), r.prepend(i), r
                    }, t.prototype.bind = function (t, i, r) {
                        var u = this;
                        t.call(this, i, r);
                        this.$search.on("keydown", function (n) {
                            u.trigger("keypress", n);
                            u._keyUpPrevented = n.isDefaultPrevented()
                        });
                        this.$search.on("input", function () {
                            n(this).off("keyup")
                        });
                        this.$search.on("keyup input", function (n) {
                            u.handleSearch(n)
                        });
                        i.on("open", function () {
                            u.$search.attr("tabindex", 0);
                            u.$search.focus();
                            window.setTimeout(function () {
                                u.$search.focus()
                            }, 0)
                        });
                        i.on("close", function () {
                            u.$search.attr("tabindex", -1);
                            u.$search.val("")
                        });
                        i.on("focus", function () {
                            i.isOpen() && u.$search.focus()
                        });
                        i.on("results:all", function (n) {
                            if (n.query.term == null || n.query.term === "") {
                                var t = u.showSearch(n);
                                t ? u.$searchContainer.removeClass("select2-search--hide") : u.$searchContainer.addClass("select2-search--hide")
                            }
                        })
                    }, t.prototype.handleSearch = function () {
                        if (!this._keyUpPrevented) {
                            var n = this.$search.val();
                            this.trigger("query", {
                                term: n
                            })
                        }
                        this._keyUpPrevented = !1
                    }, t.prototype.showSearch = function () {
                        return !0
                    }, t
                }), t.define("select2/dropdown/hidePlaceholder", [], function () {
                    function n(n, t, i, r) {
                        this.placeholder = this.normalizePlaceholder(i.get("placeholder"));
                        n.call(this, t, i, r)
                    }
                    return n.prototype.append = function (n, t) {
                        t.results = this.removePlaceholder(t.results);
                        n.call(this, t)
                    }, n.prototype.normalizePlaceholder = function (n, t) {
                        return typeof t == "string" && (t = {
                            id: "",
                            text: t
                        }), t
                    }, n.prototype.removePlaceholder = function (n, t) {
                        for (var u, r = t.slice(0), i = t.length - 1; i >= 0; i--) u = t[i], this.placeholder.id === u.id && r.splice(i, 1);
                        return r
                    }, n
                }), t.define("select2/dropdown/infiniteScroll", ["jquery"], function (n) {
                    function t(n, t, i, r) {
                        this.lastParams = {};
                        n.call(this, t, i, r);
                        this.$loadingMore = this.createLoadingMore();
                        this.loading = !1
                    }
                    return t.prototype.append = function (n, t) {
                        this.$loadingMore.remove();
                        this.loading = !1;
                        n.call(this, t);
                        this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
                    }, t.prototype.bind = function (t, i, r) {
                        var u = this;
                        t.call(this, i, r);
                        i.on("query", function (n) {
                            u.lastParams = n;
                            u.loading = !0
                        });
                        i.on("query:append", function (n) {
                            u.lastParams = n;
                            u.loading = !0
                        });
                        this.$results.on("scroll", function () {
                            var r = n.contains(document.documentElement, u.$loadingMore[0]),
                                t, i;
                            !u.loading && r && (t = u.$results.offset().top + u.$results.outerHeight(!1), i = u.$loadingMore.offset().top + u.$loadingMore.outerHeight(!1), t + 50 >= i && u.loadMore())
                        })
                    }, t.prototype.loadMore = function () {
                        this.loading = !0;
                        var t = n.extend({}, {
                            page: 1
                        }, this.lastParams);
                        t.page++;
                        this.trigger("query:append", t)
                    }, t.prototype.showLoadingMore = function (n, t) {
                        return t.pagination && t.pagination.more
                    }, t.prototype.createLoadingMore = function () {
                        var t = n('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"><\/li>'),
                            i = this.options.get("translations").get("loadingMore");
                        return t.html(i(this.lastParams)), t
                    }, t
                }), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (n, t) {
                    function i(t, i, r) {
                        this.$dropdownParent = r.get("dropdownParent") || n(document.body);
                        t.call(this, i, r)
                    }
                    return i.prototype.bind = function (n, t, i) {
                        var r = this,
                            u = !1;
                        n.call(this, t, i);
                        t.on("open", function () {
                            if (r._showDropdown(), r._attachPositioningHandler(t), !u) {
                                u = !0;
                                t.on("results:all", function () {
                                    r._positionDropdown();
                                    r._resizeDropdown()
                                });
                                t.on("results:append", function () {
                                    r._positionDropdown();
                                    r._resizeDropdown()
                                })
                            }
                        });
                        t.on("close", function () {
                            r._hideDropdown();
                            r._detachPositioningHandler(t)
                        });
                        this.$dropdownContainer.on("mousedown", function (n) {
                            n.stopPropagation()
                        })
                    }, i.prototype.destroy = function (n) {
                        n.call(this);
                        this.$dropdownContainer.remove()
                    }, i.prototype.position = function (n, t, i) {
                        t.attr("class", i.attr("class"));
                        t.removeClass("select2");
                        t.addClass("select2-container--open");
                        t.css({
                            position: "absolute",
                            top: -999999
                        });
                        this.$container = i
                    }, i.prototype.render = function (t) {
                        var i = n("<span><\/span>"),
                            r = t.call(this);
                        return i.append(r), this.$dropdownContainer = i, i
                    }, i.prototype._hideDropdown = function () {
                        this.$dropdownContainer.detach()
                    }, i.prototype._attachPositioningHandler = function (i, r) {
                        var u = this,
                            f = "scroll.select2." + r.id,
                            o = "resize.select2." + r.id,
                            s = "orientationchange.select2." + r.id,
                            e = this.$container.parents().filter(t.hasScroll);
                        e.each(function () {
                            n(this).data("select2-scroll-position", {
                                x: n(this).scrollLeft(),
                                y: n(this).scrollTop()
                            })
                        });
                        e.on(f, function () {
                            var t = n(this).data("select2-scroll-position");
                            n(this).scrollTop(t.y)
                        });
                        n(window).on(f + " " + o + " " + s, function () {
                            u._positionDropdown();
                            u._resizeDropdown()
                        })
                    }, i.prototype._detachPositioningHandler = function (i, r) {
                        var u = "scroll.select2." + r.id,
                            f = "resize.select2." + r.id,
                            e = "orientationchange.select2." + r.id,
                            o = this.$container.parents().filter(t.hasScroll);
                        o.off(u);
                        n(window).off(u + " " + f + " " + e)
                    }, i.prototype._positionDropdown = function () {
                        var s = n(window),
                            u = this.$dropdown.hasClass("select2-dropdown--above"),
                            v = this.$dropdown.hasClass("select2-dropdown--below"),
                            t = null,
                            i = this.$container.offset(),
                            r, o;
                        i.bottom = i.top + this.$container.outerHeight(!1);
                        r = {
                            height: this.$container.outerHeight(!1)
                        };
                        r.top = i.top;
                        r.bottom = i.top + r.height;
                        var h = {
                            height: this.$dropdown.outerHeight(!1)
                        },
                            c = {
                                top: s.scrollTop(),
                                bottom: s.scrollTop() + s.height()
                            },
                            l = c.top < i.top - h.height,
                            a = c.bottom > i.bottom + h.height,
                            f = {
                                left: i.left,
                                top: r.bottom
                            },
                            e = this.$dropdownParent;
                        e.css("position") === "static" && (e = e.offsetParent());
                        o = e.offset();
                        f.top -= o.top;
                        f.left -= o.left;
                        u || v || (t = "below");
                        a || !l || u ? !l && a && u && (t = "below") : t = "above";
                        (t == "above" || u && t !== "below") && (f.top = r.top - o.top - h.height);
                        t != null && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + t), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + t));
                        this.$dropdownContainer.css(f)
                    }, i.prototype._resizeDropdown = function () {
                        var n = {
                            width: this.$container.outerWidth(!1) + "px"
                        };
                        this.options.get("dropdownAutoWidth") && (n.minWidth = n.width, n.position = "relative", n.width = "auto");
                        this.$dropdown.css(n)
                    }, i.prototype._showDropdown = function () {
                        this.$dropdownContainer.appendTo(this.$dropdownParent);
                        this._positionDropdown();
                        this._resizeDropdown()
                    }, i
                }), t.define("select2/dropdown/minimumResultsForSearch", [], function () {
                    function n(t) {
                        for (var u, i = 0, r = 0; r < t.length; r++) u = t[r], u.children ? i += n(u.children) : i++;
                        return i
                    }

                    function t(n, t, i, r) {
                        this.minimumResultsForSearch = i.get("minimumResultsForSearch");
                        this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = Infinity);
                        n.call(this, t, i, r)
                    }
                    return t.prototype.showSearch = function (t, i) {
                        return n(i.data.results) < this.minimumResultsForSearch ? !1 : t.call(this, i)
                    }, t
                }), t.define("select2/dropdown/selectOnClose", [], function () {
                    function n() { }
                    return n.prototype.bind = function (n, t, i) {
                        var r = this;
                        n.call(this, t, i);
                        t.on("close", function (n) {
                            r._handleSelectOnClose(n)
                        })
                    }, n.prototype._handleSelectOnClose = function (n, t) {
                        var r, u, i;
                        t && t.originalSelect2Event != null && (r = t.originalSelect2Event, r._type === "select" || r._type === "unselect") || (u = this.getHighlightedResults(), u.length < 1) || (i = u.data("data"), i.element != null && i.element.selected || i.element == null && i.selected) || this.trigger("select", {
                            data: i
                        })
                    }, n
                }), t.define("select2/dropdown/closeOnSelect", [], function () {
                    function n() { }
                    return n.prototype.bind = function (n, t, i) {
                        var r = this;
                        n.call(this, t, i);
                        t.on("select", function (n) {
                            r._selectTriggered(n)
                        });
                        t.on("unselect", function (n) {
                            r._selectTriggered(n)
                        })
                    }, n.prototype._selectTriggered = function (n, t) {
                        var i = t.originalEvent;
                        i && i.ctrlKey || this.trigger("close", {
                            originalEvent: i,
                            originalSelect2Event: t
                        })
                    }, n
                }), t.define("select2/i18n/en", [], function () {
                    return {
                        errorLoading: function () {
                            return "The results could not be loaded."
                        },
                        inputTooLong: function (n) {
                            var t = n.input.length - n.maximum,
                                i = "Please delete " + t + " character";
                            return t != 1 && (i += "s"), i
                        },
                        inputTooShort: function (n) {
                            var t = n.minimum - n.input.length;
                            return "Please enter " + t + " or more characters"
                        },
                        loadingMore: function () {
                            return "Loading more results…"
                        },
                        maximumSelected: function (n) {
                            var t = "You can only select " + n.maximum + " item";
                            return n.maximum != 1 && (t += "s"), t
                        },
                        noResults: function () {
                            return "No results found"
                        },
                        searching: function () {
                            return "Searching…"
                        }
                    }
                }), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot) {
                    function st() {
                        this.reset()
                    }
                    st.prototype.apply = function (l) {
                        var vt, yt, pt, wt, bt, kt, dt, ct, lt, st, ot, ht, gt, at;
                        if (l = n.extend(!0, {}, this.defaults, l), l.dataAdapter == null && (l.dataAdapter = l.ajax != null ? y : l.data != null ? v : a, l.minimumInputLength > 0 && (l.dataAdapter = h.Decorate(l.dataAdapter, b)), l.maximumInputLength > 0 && (l.dataAdapter = h.Decorate(l.dataAdapter, k)), l.maximumSelectionLength > 0 && (l.dataAdapter = h.Decorate(l.dataAdapter, d)), l.tags && (l.dataAdapter = h.Decorate(l.dataAdapter, p)), (l.tokenSeparators != null || l.tokenizer != null) && (l.dataAdapter = h.Decorate(l.dataAdapter, w)), l.query != null && (vt = t(l.amdBase + "compat/query"), l.dataAdapter = h.Decorate(l.dataAdapter, vt)), l.initSelection != null && (yt = t(l.amdBase + "compat/initSelection"), l.dataAdapter = h.Decorate(l.dataAdapter, yt))), l.resultsAdapter == null && (l.resultsAdapter = i, l.ajax != null && (l.resultsAdapter = h.Decorate(l.resultsAdapter, it)), l.placeholder != null && (l.resultsAdapter = h.Decorate(l.resultsAdapter, tt)), l.selectOnClose && (l.resultsAdapter = h.Decorate(l.resultsAdapter, ft))), l.dropdownAdapter == null && (l.multiple ? l.dropdownAdapter = g : (pt = h.Decorate(g, nt), l.dropdownAdapter = pt), l.minimumResultsForSearch !== 0 && (l.dropdownAdapter = h.Decorate(l.dropdownAdapter, ut)), l.closeOnSelect && (l.dropdownAdapter = h.Decorate(l.dropdownAdapter, et)), (l.dropdownCssClass != null || l.dropdownCss != null || l.adaptDropdownCssClass != null) && (wt = t(l.amdBase + "compat/dropdownCss"), l.dropdownAdapter = h.Decorate(l.dropdownAdapter, wt)), l.dropdownAdapter = h.Decorate(l.dropdownAdapter, rt)), l.selectionAdapter == null && (l.selectionAdapter = l.multiple ? u : r, l.placeholder != null && (l.selectionAdapter = h.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = h.Decorate(l.selectionAdapter, e)), l.multiple && (l.selectionAdapter = h.Decorate(l.selectionAdapter, o)), (l.containerCssClass != null || l.containerCss != null || l.adaptContainerCssClass != null) && (bt = t(l.amdBase + "compat/containerCss"), l.selectionAdapter = h.Decorate(l.selectionAdapter, bt)), l.selectionAdapter = h.Decorate(l.selectionAdapter, s)), typeof l.language == "string" && (l.language.indexOf("-") > 0 ? (kt = l.language.split("-"), dt = kt[0], l.language = [l.language, dt]) : l.language = [l.language]), n.isArray(l.language)) {
                            for (ct = new c, l.language.push("en"), lt = l.language, st = 0; st < lt.length; st++) {
                                ot = lt[st];
                                ht = {};
                                try {
                                    ht = c.loadPath(ot)
                                } catch (ni) {
                                    try {
                                        ot = this.defaults.amdLanguageBase + ot;
                                        ht = c.loadPath(ot)
                                    } catch (ti) {
                                        l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + ot + '" could not be automatically loaded. A fallback will be used instead.');
                                        continue
                                    }
                                }
                                ct.extend(ht)
                            }
                            l.translations = ct
                        } else gt = c.loadPath(this.defaults.amdLanguageBase + "en"), at = new c(l.language), at.extend(gt), l.translations = at;
                        return l
                    };
                    st.prototype.reset = function () {
                        function i(n) {
                            function t(n) {
                                return l[n] || n
                            }
                            return n.replace(/[^\u0000-\u007E]/g, t)
                        }

                        function t(r, u) {
                            var f, e, o, s, h, c;
                            if (n.trim(r.term) === "") return u;
                            if (u.children && u.children.length > 0) {
                                for (f = n.extend(!0, {}, u), e = u.children.length - 1; e >= 0; e--) o = u.children[e], s = t(r, o), s == null && f.children.splice(e, 1);
                                return f.children.length > 0 ? f : t(r, f)
                            }
                            return (h = i(u.text).toUpperCase(), c = i(r.term).toUpperCase(), h.indexOf(c) > -1) ? u : null
                        }
                        this.defaults = {
                            amdBase: "./",
                            amdLanguageBase: "./i18n/",
                            closeOnSelect: !0,
                            debug: !1,
                            dropdownAutoWidth: !1,
                            escapeMarkup: h.escapeMarkup,
                            language: ot,
                            matcher: t,
                            minimumInputLength: 0,
                            maximumInputLength: 0,
                            maximumSelectionLength: 0,
                            minimumResultsForSearch: 0,
                            selectOnClose: !1,
                            sorter: function (n) {
                                return n
                            },
                            templateResult: function (n) {
                                return n.text
                            },
                            templateSelection: function (n) {
                                return n.text
                            },
                            theme: "default",
                            width: "resolve"
                        }
                    };
                    st.prototype.set = function (t, i) {
                        var f = n.camelCase(t),
                            r = {},
                            u;
                        r[f] = i;
                        u = h._convertData(r);
                        n.extend(this.defaults, u)
                    };
                    return new st
                }), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (n, t, i, r) {
                    function u(t, u) {
                        if (this.options = t, u != null && this.fromElement(u), this.options = i.apply(this.options), u && u.is("input")) {
                            var f = n(this.get("amdBase") + "compat/inputData");
                            this.options.dataAdapter = r.Decorate(this.options.dataAdapter, f)
                        }
                    }
                    return u.prototype.fromElement = function (n) {
                        var e = ["select2"],
                            f, u, i;
                        this.options.multiple == null && (this.options.multiple = n.prop("multiple"));
                        this.options.disabled == null && (this.options.disabled = n.prop("disabled"));
                        this.options.language == null && (n.prop("lang") ? this.options.language = n.prop("lang").toLowerCase() : n.closest("[lang]").prop("lang") && (this.options.language = n.closest("[lang]").prop("lang")));
                        this.options.dir == null && (this.options.dir = n.prop("dir") ? n.prop("dir") : n.closest("[dir]").prop("dir") ? n.closest("[dir]").prop("dir") : "ltr");
                        n.prop("disabled", this.options.disabled);
                        n.prop("multiple", this.options.multiple);
                        n.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), n.data("data", n.data("select2Tags")), n.data("tags", !0));
                        n.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), n.attr("ajax--url", n.data("ajaxUrl")), n.data("ajax--url", n.data("ajaxUrl")));
                        f = {};
                        f = t.fn.jquery && t.fn.jquery.substr(0, 2) == "1." && n[0].dataset ? t.extend(!0, {}, n[0].dataset, n.data()) : n.data();
                        u = t.extend(!0, {}, f);
                        u = r._convertData(u);
                        for (i in u) t.inArray(i, e) > -1 || (t.isPlainObject(this.options[i]) ? t.extend(this.options[i], u[i]) : this.options[i] = u[i]);
                        return this
                    }, u.prototype.get = function (n) {
                        return this.options[n]
                    }, u.prototype.set = function (n, t) {
                        this.options[n] = t
                    }, u
                }), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (n, t, i, r) {
                    var u = function (n, i) {
                        var f, e, r, o, s, h, c;
                        n.data("select2") != null && n.data("select2").destroy();
                        this.$element = n;
                        this.id = this._generateId(n);
                        i = i || {};
                        this.options = new t(i, n);
                        u.__super__.constructor.call(this);
                        f = n.attr("tabindex") || 0;
                        n.data("old-tabindex", f);
                        n.attr("tabindex", "-1");
                        e = this.options.get("dataAdapter");
                        this.dataAdapter = new e(n, this.options);
                        r = this.render();
                        this._placeContainer(r);
                        o = this.options.get("selectionAdapter");
                        this.selection = new o(n, this.options);
                        this.$selection = this.selection.render();
                        this.selection.position(this.$selection, r);
                        s = this.options.get("dropdownAdapter");
                        this.dropdown = new s(n, this.options);
                        this.$dropdown = this.dropdown.render();
                        this.dropdown.position(this.$dropdown, r);
                        h = this.options.get("resultsAdapter");
                        this.results = new h(n, this.options, this.dataAdapter);
                        this.$results = this.results.render();
                        this.results.position(this.$results, this.$dropdown);
                        c = this;
                        this._bindAdapters();
                        this._registerDomEvents();
                        this._registerDataEvents();
                        this._registerSelectionEvents();
                        this._registerDropdownEvents();
                        this._registerResultsEvents();
                        this._registerEvents();
                        this.dataAdapter.current(function (n) {
                            c.trigger("selection:update", {
                                data: n
                            })
                        });
                        n.addClass("select2-hidden-accessible");
                        n.attr("aria-hidden", "true");
                        this._syncAttributes();
                        n.data("select2", this)
                    };
                    return i.Extend(u, i.Observable), u.prototype._generateId = function (n) {
                        var t = "";
                        return t = n.attr("id") != null ? n.attr("id") : n.attr("name") != null ? n.attr("name") + "-" + i.generateChars(2) : i.generateChars(4), t = t.replace(/(:|\.|\[|\]|,)/g, ""), "select2-" + t
                    }, u.prototype._placeContainer = function (n) {
                        n.insertAfter(this.$element);
                        var t = this._resolveWidth(this.$element, this.options.get("width"));
                        t != null && n.css("width", t)
                    }, u.prototype._resolveWidth = function (n, t) {
                        var u, f, e, o, i, s, h, r;
                        if (t == "resolve") return (u = this._resolveWidth(n, "style"), u != null) ? u : this._resolveWidth(n, "element");
                        if (t == "element") return (f = n.outerWidth(!1), f <= 0) ? "auto" : f + "px";
                        if (t == "style") {
                            if (e = n.attr("style"), typeof e != "string") return null;
                            for (o = e.split(";"), i = 0, s = o.length; i < s; i = i + 1)
                                if (h = o[i].replace(/\s/g, ""), r = h.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), r !== null && r.length >= 1) return r[1];
                            return null
                        }
                        return t
                    }, u.prototype._bindAdapters = function () {
                        this.dataAdapter.bind(this, this.$container);
                        this.selection.bind(this, this.$container);
                        this.dropdown.bind(this, this.$container);
                        this.results.bind(this, this.$container)
                    }, u.prototype._registerDomEvents = function () {
                        var t = this,
                            r;
                        this.$element.on("change.select2", function () {
                            t.dataAdapter.current(function (n) {
                                t.trigger("selection:update", {
                                    data: n
                                })
                            })
                        });
                        this.$element.on("focus.select2", function (n) {
                            t.trigger("focus", n)
                        });
                        this._syncA = i.bind(this._syncAttributes, this);
                        this._syncS = i.bind(this._syncSubtree, this);
                        this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                        r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        r != null ? (this._observer = new r(function (i) {
                            n.each(i, t._syncA);
                            n.each(i, t._syncS)
                        }), this._observer.observe(this.$element[0], {
                            attributes: !0,
                            childList: !0,
                            subtree: !1
                        })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
                    }, u.prototype._registerDataEvents = function () {
                        var n = this;
                        this.dataAdapter.on("*", function (t, i) {
                            n.trigger(t, i)
                        })
                    }, u.prototype._registerSelectionEvents = function () {
                        var t = this,
                            i = ["toggle", "focus"];
                        this.selection.on("toggle", function () {
                            t.toggleDropdown()
                        });
                        this.selection.on("focus", function (n) {
                            t.focus(n)
                        });
                        this.selection.on("*", function (r, u) {
                            n.inArray(r, i) === -1 && t.trigger(r, u)
                        })
                    }, u.prototype._registerDropdownEvents = function () {
                        var n = this;
                        this.dropdown.on("*", function (t, i) {
                            n.trigger(t, i)
                        })
                    }, u.prototype._registerResultsEvents = function () {
                        var n = this;
                        this.results.on("*", function (t, i) {
                            n.trigger(t, i)
                        })
                    }, u.prototype._registerEvents = function () {
                        var n = this;
                        this.on("open", function () {
                            n.$container.addClass("select2-container--open")
                        });
                        this.on("close", function () {
                            n.$container.removeClass("select2-container--open")
                        });
                        this.on("enable", function () {
                            n.$container.removeClass("select2-container--disabled")
                        });
                        this.on("disable", function () {
                            n.$container.addClass("select2-container--disabled")
                        });
                        this.on("blur", function () {
                            n.$container.removeClass("select2-container--focus")
                        });
                        this.on("query", function (t) {
                            n.isOpen() || n.trigger("open", {});
                            this.dataAdapter.query(t, function (i) {
                                n.trigger("results:all", {
                                    data: i,
                                    query: t
                                })
                            })
                        });
                        this.on("query:append", function (t) {
                            this.dataAdapter.query(t, function (i) {
                                n.trigger("results:append", {
                                    data: i,
                                    query: t
                                })
                            })
                        });
                        this.on("keypress", function (t) {
                            var i = t.which;
                            n.isOpen() ? i === r.ESC || i === r.TAB || i === r.UP && t.altKey ? (n.close(), t.preventDefault()) : i === r.ENTER ? (n.trigger("results:select", {}), t.preventDefault()) : i === r.SPACE && t.ctrlKey ? (n.trigger("results:toggle", {}), t.preventDefault()) : i === r.UP ? (n.trigger("results:previous", {}), t.preventDefault()) : i === r.DOWN && (n.trigger("results:next", {}), t.preventDefault()) : (i === r.ENTER || i === r.SPACE || i === r.DOWN && t.altKey) && (n.open(), t.preventDefault())
                        })
                    }, u.prototype._syncAttributes = function () {
                        this.options.set("disabled", this.$element.prop("disabled"));
                        this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                    }, u.prototype._syncSubtree = function (n, t) {
                        var i = !1,
                            f = this,
                            r, u;
                        if (!n || !n.target || n.target.nodeName === "OPTION" || n.target.nodeName === "OPTGROUP") {
                            if (t)
                                if (t.addedNodes && t.addedNodes.length > 0)
                                    for (r = 0; r < t.addedNodes.length; r++) u = t.addedNodes[r], u.selected && (i = !0);
                                else t.removedNodes && t.removedNodes.length > 0 && (i = !0);
                            else i = !0;
                            i && this.dataAdapter.current(function (n) {
                                f.trigger("selection:update", {
                                    data: n
                                })
                            })
                        }
                    }, u.prototype.trigger = function (n, t) {
                        var r = u.__super__.trigger,
                            f = {
                                open: "opening",
                                close: "closing",
                                select: "selecting",
                                unselect: "unselecting"
                            },
                            e, i;
                        if (t === undefined && (t = {}), n in f && (e = f[n], i = {
                            prevented: !1,
                            name: n,
                            args: t
                        }, r.call(this, e, i), i.prevented)) {
                            t.prevented = !0;
                            return
                        }
                        r.call(this, n, t)
                    }, u.prototype.toggleDropdown = function () {
                        this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                    }, u.prototype.open = function () {
                        this.isOpen() || this.trigger("query", {})
                    }, u.prototype.close = function () {
                        this.isOpen() && this.trigger("close", {})
                    }, u.prototype.isOpen = function () {
                        return this.$container.hasClass("select2-container--open")
                    }, u.prototype.hasFocus = function () {
                        return this.$container.hasClass("select2-container--focus")
                    }, u.prototype.focus = function () {
                        this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                    }, u.prototype.enable = function (n) {
                        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.');
                        (n == null || n.length === 0) && (n = [!0]);
                        var t = !n[0];
                        this.$element.prop("disabled", t)
                    }, u.prototype.data = function () {
                        this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                        var n = [];
                        return this.dataAdapter.current(function (t) {
                            n = t
                        }), n
                    }, u.prototype.val = function (t) {
                        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), t == null || t.length === 0) return this.$element.val();
                        var i = t[0];
                        n.isArray(i) && (i = n.map(i, function (n) {
                            return n.toString()
                        }));
                        this.$element.val(i).trigger("change")
                    }, u.prototype.destroy = function () {
                        this.$container.remove();
                        this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA);
                        this._observer != null ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1));
                        this._syncA = null;
                        this._syncS = null;
                        this.$element.off(".select2");
                        this.$element.attr("tabindex", this.$element.data("old-tabindex"));
                        this.$element.removeClass("select2-hidden-accessible");
                        this.$element.attr("aria-hidden", "false");
                        this.$element.removeData("select2");
                        this.dataAdapter.destroy();
                        this.selection.destroy();
                        this.dropdown.destroy();
                        this.results.destroy();
                        this.dataAdapter = null;
                        this.selection = null;
                        this.dropdown = null;
                        this.results = null
                    }, u.prototype.render = function () {
                        var t = n('<span class="select2 select2-container"><span class="selection"><\/span><span class="dropdown-wrapper" aria-hidden="true"><\/span><\/span>');
                        return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), t.data("element", this.$element), t
                    }, u
                }), t.define("select2/compat/utils", ["jquery"], function (n) {
                    function t(t, i, r) {
                        var u, f = [],
                            e;
                        u = n.trim(t.attr("class"));
                        u && (u = "" + u, n(u.split(/\s+/)).each(function () {
                            this.indexOf("select2-") === 0 && f.push(this)
                        }));
                        u = n.trim(i.attr("class"));
                        u && (u = "" + u, n(u.split(/\s+/)).each(function () {
                            this.indexOf("select2-") !== 0 && (e = r(this), e != null && f.push(e))
                        }));
                        t.attr("class", f.join(" "))
                    }
                    return {
                        syncCssClasses: t
                    }
                }), t.define("select2/compat/containerCss", ["jquery", "./utils"], function (n, t) {
                    function r() {
                        return null
                    }

                    function i() { }
                    return i.prototype.render = function (i) {
                        var o = i.call(this),
                            u = this.options.get("containerCssClass") || "",
                            f, s, e;
                        return n.isFunction(u) && (u = u(this.$element)), f = this.options.get("adaptContainerCssClass"), f = f || r, u.indexOf(":all:") !== -1 && (u = u.replace(":all:", ""), s = f, f = function (n) {
                            var t = s(n);
                            return t != null ? t + " " + n : n
                        }), e = this.options.get("containerCss") || {}, n.isFunction(e) && (e = e(this.$element)), t.syncCssClasses(o, this.$element, f), o.css(e), o.addClass(u), o
                    }, i
                }), t.define("select2/compat/dropdownCss", ["jquery", "./utils"], function (n, t) {
                    function r() {
                        return null
                    }

                    function i() { }
                    return i.prototype.render = function (i) {
                        var o = i.call(this),
                            u = this.options.get("dropdownCssClass") || "",
                            f, s, e;
                        return n.isFunction(u) && (u = u(this.$element)), f = this.options.get("adaptDropdownCssClass"), f = f || r, u.indexOf(":all:") !== -1 && (u = u.replace(":all:", ""), s = f, f = function (n) {
                            var t = s(n);
                            return t != null ? t + " " + n : n
                        }), e = this.options.get("dropdownCss") || {}, n.isFunction(e) && (e = e(this.$element)), t.syncCssClasses(o, this.$element, f), o.css(e), o.addClass(u), o
                    }, i
                }), t.define("select2/compat/initSelection", ["jquery"], function (n) {
                    function t(n, t, i) {
                        i.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2");
                        this.initSelection = i.get("initSelection");
                        this._isInitialized = !1;
                        n.call(this, t, i)
                    }
                    return t.prototype.current = function (t, i) {
                        var r = this;
                        if (this._isInitialized) {
                            t.call(this, i);
                            return
                        }
                        this.initSelection.call(null, this.$element, function (t) {
                            r._isInitialized = !0;
                            n.isArray(t) || (t = [t]);
                            i(t)
                        })
                    }, t
                }), t.define("select2/compat/inputData", ["jquery"], function (n) {
                    function t(n, t, i) {
                        this._currentData = [];
                        this._valueSeparator = i.get("valueSeparator") || ",";
                        t.prop("type") === "hidden" && i.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead.");
                        n.call(this, t, i)
                    }
                    return t.prototype.current = function (t, i) {
                        function f(t, i) {
                            var r = [];
                            return t.selected || n.inArray(t.id, i) !== -1 ? (t.selected = !0, r.push(t)) : t.selected = !1, t.children && r.push.apply(r, f(t.children, i)), r
                        }
                        for (var e, r = [], u = 0; u < this._currentData.length; u++) e = this._currentData[u], r.push.apply(r, f(e, this.$element.val().split(this._valueSeparator)));
                        i(r)
                    }, t.prototype.select = function (t, i) {
                        if (this.options.get("multiple")) {
                            var r = this.$element.val();
                            r += this._valueSeparator + i.id;
                            this.$element.val(r);
                            this.$element.trigger("change")
                        } else this.current(function (t) {
                            n.map(t, function (n) {
                                n.selected = !1
                            })
                        }), this.$element.val(i.id), this.$element.trigger("change")
                    }, t.prototype.unselect = function (n, t) {
                        var i = this;
                        t.selected = !1;
                        this.current(function (n) {
                            for (var u, f = [], r = 0; r < n.length; r++)(u = n[r], t.id != u.id) && f.push(u.id);
                            i.$element.val(f.join(i._valueSeparator));
                            i.$element.trigger("change")
                        })
                    }, t.prototype.query = function (n, t, i) {
                        for (var e, u, f = [], r = 0; r < this._currentData.length; r++) e = this._currentData[r], u = this.matches(t, e), u !== null && f.push(u);
                        i({
                            results: f
                        })
                    }, t.prototype.addOptions = function (t, i) {
                        var r = n.map(i, function (t) {
                            return n.data(t[0], "data")
                        });
                        this._currentData.push.apply(this._currentData, r)
                    }, t
                }), t.define("select2/compat/matcher", ["jquery"], function (n) {
                    function t(t) {
                        function i(i, r) {
                            var u = n.extend(!0, {}, r),
                                f, e, o;
                            if (i.term == null || n.trim(i.term) === "") return u;
                            if (r.children) {
                                for (f = r.children.length - 1; f >= 0; f--) e = r.children[f], o = t(i.term, e.text, e), o || u.children.splice(f, 1);
                                if (u.children.length > 0) return u
                            }
                            return t(i.term, r.text, r) ? u : null
                        }
                        return i
                    }
                    return t
                }), t.define("select2/compat/query", [], function () {
                    function n(n, t, i) {
                        i.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2.");
                        n.call(this, t, i)
                    }
                    return n.prototype.query = function (n, t, i) {
                        t.callback = i;
                        var r = this.options.get("query");
                        r.call(null, t)
                    }, n
                }), t.define("select2/dropdown/attachContainer", [], function () {
                    function n(n, t, i) {
                        n.call(this, t, i)
                    }
                    return n.prototype.position = function (n, t, i) {
                        var r = i.find(".dropdown-wrapper");
                        r.append(t);
                        t.addClass("select2-dropdown--below");
                        i.addClass("select2-container--below")
                    }, n
                }), t.define("select2/dropdown/stopPropagation", [], function () {
                    function n() { }
                    return n.prototype.bind = function (n, t, i) {
                        n.call(this, t, i);
                        this.$dropdown.on("blur change click dblclick focus focusin focusout input keydown keyup keypress mousedown mouseenter mouseleave mousemove mouseover mouseup search touchend touchstart", function (n) {
                            n.stopPropagation()
                        })
                    }, n
                }), t.define("select2/selection/stopPropagation", [], function () {
                    function n() { }
                    return n.prototype.bind = function (n, t, i) {
                        n.call(this, t, i);
                        this.$selection.on("blur change click dblclick focus focusin focusout input keydown keyup keypress mousedown mouseenter mouseleave mousemove mouseover mouseup search touchend touchstart", function (n) {
                            n.stopPropagation()
                        })
                    }, n
                }),
                function (i) {
                    typeof t.define == "function" && t.define.amd ? t.define("jquery-mousewheel", ["jquery"], i) : typeof exports == "object" ? module.exports = i : i(n)
                }(function (n) {
                    function e(r) {
                        var f = r || window.event,
                            w = h.call(arguments, 1),
                            l = 0,
                            o = 0,
                            e = 0,
                            a = 0,
                            b = 0,
                            k = 0,
                            v, y, p;
                        if (r = n.event.fix(f), r.type = "mousewheel", "detail" in f && (e = f.detail * -1), "wheelDelta" in f && (e = f.wheelDelta), "wheelDeltaY" in f && (e = f.wheelDeltaY), "wheelDeltaX" in f && (o = f.wheelDeltaX * -1), "axis" in f && f.axis === f.HORIZONTAL_AXIS && (o = e * -1, e = 0), l = e === 0 ? o : e, "deltaY" in f && (e = f.deltaY * -1, l = e), "deltaX" in f && (o = f.deltaX, e === 0 && (l = o * -1)), e !== 0 || o !== 0) return f.deltaMode === 1 ? (v = n.data(this, "mousewheel-line-height"), l *= v, e *= v, o *= v) : f.deltaMode === 2 && (y = n.data(this, "mousewheel-page-height"), l *= y, e *= y, o *= y), a = Math.max(Math.abs(e), Math.abs(o)), (!t || a < t) && (t = a, s(f, a) && (t /= 40)), s(f, a) && (l /= 40, o /= 40, e /= 40), l = Math[l >= 1 ? "floor" : "ceil"](l / t), o = Math[o >= 1 ? "floor" : "ceil"](o / t), e = Math[e >= 1 ? "floor" : "ceil"](e / t), i.settings.normalizeOffset && this.getBoundingClientRect && (p = this.getBoundingClientRect(), b = r.clientX - p.left, k = r.clientY - p.top), r.deltaX = o, r.deltaY = e, r.deltaFactor = t, r.offsetX = b, r.offsetY = k, r.deltaMode = 0, w.unshift(r, l, o, e), u && clearTimeout(u), u = setTimeout(c, 200), (n.event.dispatch || n.event.handle).apply(this, w)
                    }

                    function c() {
                        t = null
                    }

                    function s(n, t) {
                        return i.settings.adjustOldDeltas && n.type === "mousewheel" && t % 120 == 0
                    }
                    var o = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                        r = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                        h = Array.prototype.slice,
                        u, t, f, i;
                    if (n.event.fixHooks)
                        for (f = o.length; f;) n.event.fixHooks[o[--f]] = n.event.mouseHooks;
                    i = n.event.special.mousewheel = {
                        version: "3.1.12",
                        setup: function () {
                            if (this.addEventListener)
                                for (var t = r.length; t;) this.addEventListener(r[--t], e, !1);
                            else this.onmousewheel = e;
                            n.data(this, "mousewheel-line-height", i.getLineHeight(this));
                            n.data(this, "mousewheel-page-height", i.getPageHeight(this))
                        },
                        teardown: function () {
                            if (this.removeEventListener)
                                for (var t = r.length; t;) this.removeEventListener(r[--t], e, !1);
                            else this.onmousewheel = null;
                            n.removeData(this, "mousewheel-line-height");
                            n.removeData(this, "mousewheel-page-height")
                        },
                        getLineHeight: function (t) {
                            var r = n(t),
                                i = r["offsetParent" in n.fn ? "offsetParent" : "parent"]();
                            return i.length || (i = n("body")), parseInt(i.css("fontSize"), 10) || parseInt(r.css("fontSize"), 10) || 16
                        },
                        getPageHeight: function (t) {
                            return n(t).height()
                        },
                        settings: {
                            adjustOldDeltas: !0,
                            normalizeOffset: !0
                        }
                    };
                    n.fn.extend({
                        mousewheel: function (n) {
                            return n ? this.bind("mousewheel", n) : this.trigger("mousewheel")
                        },
                        unmousewheel: function (n) {
                            return this.unbind("mousewheel", n)
                        }
                    })
                }), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function (n, t, i, r) {
                    if (n.fn.select2 == null) {
                        var u = ["open", "close", "destroy"];
                        n.fn.select2 = function (t) {
                            if (t = t || {}, typeof t == "object") return this.each(function () {
                                var r = n.extend(!0, {}, t),
                                    u = new i(n(this), r)
                            }), this;
                            if (typeof t == "string") {
                                var r, f = Array.prototype.slice.call(arguments, 1);
                                return (this.each(function () {
                                    var i = n(this).data("select2");
                                    i == null && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2.");
                                    r = i[t].apply(i, f)
                                }), n.inArray(t, u) > -1) ? this : r
                            }
                            throw new Error("Invalid arguments for Select2: " + t);
                        }
                    }
                    return n.fn.select2.defaults == null && (n.fn.select2.defaults = r), i
                }), {
                define: t.define,
                require: t.require
            }
        }(),
            i = t.require("jquery.select2");
        return n.fn.select2.amd = t, i
    });
