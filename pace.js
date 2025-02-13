/*! pace 0.5.3 */
(function() {
	var a,
		b,
		c,
		d,
		e,
		f,
		g,
		h,
		i,
		j,
		k,
		l,
		m,
		n,
		o,
		p,
		q,
		r,
		s,
		t,
		u,
		v,
		w,
		x,
		y,
		z,
		A,
		B,
		C,
		D,
		E,
		F,
		G,
		H,
		I,
		J,
		K,
		L,
		M,
		N,
		O,
		P,
		Q,
		R,
		S,
		T,
		U,
		V,
		W = [].slice,
		X = {}.hasOwnProperty,
		Y = function(a, b) {
			function c() {
				this.constructor = a;
			}
			for (var d in b) X.call(b, d) && (a[d] = b[d]);
			return (c.prototype = b.prototype), (a.prototype = new c()), (a.__super__ = b.prototype), a;
		},
		Z =
			[].indexOf ||
			function(a) {
				for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
				return -1;
			};
	for (
		t = { catchupTime: 500, initialRate: 0.03, minTime: 500, ghostTime: 500, maxProgressPerFrame: 10, easeFactor: 1.25, startOnPageLoad: !0, restartOnPushState: !0, restartOnRequestAfter: 500, target: "body", elements: { checkInterval: 100, selectors: ["body"] }, eventLag: { minSamples: 10, sampleCount: 3, lagThreshold: 3 }, ajax: { trackMethods: ["GET"], trackWebSockets: !0, ignoreURLs: [] } },
			B = function() {
				var a;
				return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date();
			},
			D = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
			s = window.cancelAnimationFrame || window.mozCancelAnimationFrame,
			null == D &&
				((D = function(a) {
					return setTimeout(a, 50);
				}),
				(s = function(a) {
					return clearTimeout(a);
				})),
			F = function(a) {
				var b, c;
				return (
					(b = B()),
					(c = function() {
						var d;
						return (
							(d = B() - b),
							d >= 33
								? ((b = B()),
								  a(d, function() {
										return D(c);
								  }))
								: setTimeout(c, 33 - d)
						);
					})()
				);
			},
			E = function() {
				var a, b, c;
				return (c = arguments[0]), (b = arguments[1]), (a = 3 <= arguments.length ? W.call(arguments, 2) : []), "function" == typeof c[b] ? c[b].apply(c, a) : c[b];
			},
			u = function() {
				var a, b, c, d, e, f, g;
				for (b = arguments[0], d = 2 <= arguments.length ? W.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++) if ((c = d[f])) for (a in c) X.call(c, a) && ((e = c[a]), null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? u(b[a], e) : (b[a] = e));
				return b;
			},
			p = function(a) {
				var b, c, d, e, f;
				for (c = b = 0, e = 0, f = a.length; f > e; e++) (d = a[e]), (c += Math.abs(d)), b++;
				return c / b;
			},
			w = function(a, b) {
				var c, d, e;
				if ((null == a && (a = "options"), null == b && (b = !0), (e = document.querySelector("[data-pace-" + a + "]")))) {
					if (((c = e.getAttribute("data-pace-" + a)), !b)) return c;
					try {
						return JSON.parse(c);
					} catch (f) {
						return (d = f), "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0;
					}
				}
			},
			g = (function() {
				function a() {}
				return (
					(a.prototype.on = function(a, b, c, d) {
						var e;
						return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({ handler: b, ctx: c, once: d });
					}),
					(a.prototype.once = function(a, b, c) {
						return this.on(a, b, c, !0);
					}),
					(a.prototype.off = function(a, b) {
						var c, d, e;
						if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
							if (null == b) return delete this.bindings[a];
							for (c = 0, e = []; c < this.bindings[a].length; ) e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++);
							return e;
						}
					}),
					(a.prototype.trigger = function() {
						var a, b, c, d, e, f, g, h, i;
						if (((c = arguments[0]), (a = 2 <= arguments.length ? W.call(arguments, 1) : []), null != (g = this.bindings) ? g[c] : void 0)) {
							for (e = 0, i = []; e < this.bindings[c].length; ) (h = this.bindings[c][e]), (d = h.handler), (b = h.ctx), (f = h.once), d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++);
							return i;
						}
					}),
					a
				);
			})(),
			null == window.Pace && (window.Pace = {}),
			u(Pace, g.prototype),
			C = Pace.options = u({}, t, window.paceOptions, w()),
			T = ["ajax", "document", "eventLag", "elements"],
			P = 0,
			R = T.length;
		R > P;
		P++
	)
		(J = T[P]), C[J] === !0 && (C[J] = t[J]);
	(i = (function(a) {
		function b() {
			return (U = b.__super__.constructor.apply(this, arguments));
		}
		return Y(b, a), b;
	})(Error)),
		(b = (function() {
			function a() {
				this.progress = 0;
			}
			return (
				(a.prototype.getElement = function() {
					var a;
					if (null == this.el) {
						if (((a = document.querySelector(C.target)), !a)) throw new i();
						(this.el = document.createElement("div")), (this.el.className = "pace pace-active"), (document.body.className = document.body.className.replace(/pace-done/g, "")), (document.body.className += " pace-running"), (this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>'), null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el);
					}
					return this.el;
				}),
				(a.prototype.finish = function() {
					var a;

					//My own added styles------------------------
					document.querySelector(".loader-overlay").style.backgroundColor = "rgba(0, 0, 0, 0)";
					document.querySelector(".temp-disable").style.overflowY = "visible";

					setTimeout(() => {
						document.querySelector(".loader-overlay").style.display = "none";
					}, 1100);

					//--------------------------------------------

					return (a = this.getElement()), (a.className = a.className.replace("pace-active", "")), (a.className += " pace-inactive"), (document.body.className = document.body.className.replace("pace-running", "")), (document.body.className += " pace-done");
				}),
				(a.prototype.update = function(a) {
					return (this.progress = a), this.render();
				}),
				(a.prototype.destroy = function() {
					try {
						this.getElement().parentNode.removeChild(this.getElement());
					} catch (a) {
						i = a;
					}
					return (this.el = void 0);
				}),
				(a.prototype.render = function() {
					var a, b;
					return null == document.querySelector(C.target) ? !1 : ((a = this.getElement()), (a.children[0].style.width = "" + this.progress + "%"), (!this.lastRenderedProgress || this.lastRenderedProgress | (0 !== this.progress) | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? (b = "99") : ((b = this.progress < 10 ? "0" : ""), (b += 0 | this.progress)), a.children[0].setAttribute("data-progress", "" + b)), (this.lastRenderedProgress = this.progress));
				}),
				(a.prototype.done = function() {
					return this.progress >= 100;
				}),
				a
			);
		})()),
		(h = (function() {
			function a() {
				this.bindings = {};
			}
			return (
				(a.prototype.trigger = function(a, b) {
					var c, d, e, f, g;
					if (null != this.bindings[a]) {
						for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) (c = f[d]), g.push(c.call(this, b));
						return g;
					}
				}),
				(a.prototype.on = function(a, b) {
					var c;
					return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b);
				}),
				a
			);
		})()),
		(O = window.XMLHttpRequest),
		(N = window.XDomainRequest),
		(M = window.WebSocket),
		(v = function(a, b) {
			var c, d, e, f;
			f = [];
			for (d in b.prototype)
				try {
					(e = b.prototype[d]), f.push(null == a[d] && "function" != typeof e ? (a[d] = e) : void 0);
				} catch (g) {
					c = g;
				}
			return f;
		}),
		(z = []),
		(Pace.ignore = function() {
			var a, b, c;
			return (b = arguments[0]), (a = 2 <= arguments.length ? W.call(arguments, 1) : []), z.unshift("ignore"), (c = b.apply(null, a)), z.shift(), c;
		}),
		(Pace.track = function() {
			var a, b, c;
			return (b = arguments[0]), (a = 2 <= arguments.length ? W.call(arguments, 1) : []), z.unshift("track"), (c = b.apply(null, a)), z.shift(), c;
		}),
		(I = function(a) {
			var b;
			if ((null == a && (a = "GET"), "track" === z[0])) return "force";
			if (!z.length && C.ajax) {
				if ("socket" === a && C.ajax.trackWebSockets) return !0;
				if (((b = a.toUpperCase()), Z.call(C.ajax.trackMethods, b) >= 0)) return !0;
			}
			return !1;
		}),
		(j = (function(a) {
			function b() {
				var a,
					c = this;
				b.__super__.constructor.apply(this, arguments),
					(a = function(a) {
						var b;
						return (
							(b = a.open),
							(a.open = function(d, e) {
								return I(d) && c.trigger("request", { type: d, url: e, request: a }), b.apply(a, arguments);
							})
						);
					}),
					(window.XMLHttpRequest = function(b) {
						var c;
						return (c = new O(b)), a(c), c;
					}),
					v(window.XMLHttpRequest, O),
					null != N &&
						((window.XDomainRequest = function() {
							var b;
							return (b = new N()), a(b), b;
						}),
						v(window.XDomainRequest, N)),
					null != M &&
						C.ajax.trackWebSockets &&
						((window.WebSocket = function(a, b) {
							var d;
							return (d = null != b ? new M(a, b) : new M(a)), I("socket") && c.trigger("request", { type: "socket", url: a, protocols: b, request: d }), d;
						}),
						v(window.WebSocket, M));
			}
			return Y(b, a), b;
		})(h)),
		(Q = null),
		(x = function() {
			return null == Q && (Q = new j()), Q;
		}),
		(H = function(a) {
			var b, c, d, e;
			for (e = C.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++)
				if (((b = e[c]), "string" == typeof b)) {
					if (-1 !== a.indexOf(b)) return !0;
				} else if (b.test(a)) return !0;
			return !1;
		}),
		x().on("request", function(b) {
			var c, d, e, f, g;
			return (
				(f = b.type),
				(e = b.request),
				(g = b.url),
				H(g)
					? void 0
					: Pace.running || (C.restartOnRequestAfter === !1 && "force" !== I(f))
					? void 0
					: ((d = arguments),
					  (c = C.restartOnRequestAfter || 0),
					  "boolean" == typeof c && (c = 0),
					  setTimeout(function() {
							var b, c, g, h, i, j;
							if ((b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h)) {
								for (Pace.restart(), i = Pace.sources, j = [], c = 0, g = i.length; g > c; c++) {
									if (((J = i[c]), J instanceof a)) {
										J.watch.apply(J, d);
										break;
									}
									j.push(void 0);
								}
								return j;
							}
					  }, c))
			);
		}),
		(a = (function() {
			function a() {
				var a = this;
				(this.elements = []),
					x().on("request", function() {
						return a.watch.apply(a, arguments);
					});
			}
			return (
				(a.prototype.watch = function(a) {
					var b, c, d, e;
					return (d = a.type), (b = a.request), (e = a.url), H(e) ? void 0 : ((c = "socket" === d ? new m(b) : new n(b)), this.elements.push(c));
				}),
				a
			);
		})()),
		(n = (function() {
			function a(a) {
				var b,
					c,
					d,
					e,
					f,
					g,
					h = this;
				if (((this.progress = 0), null != window.ProgressEvent))
					for (
						c = null,
							a.addEventListener("progress", function(a) {
								return (h.progress = a.lengthComputable ? (100 * a.loaded) / a.total : h.progress + (100 - h.progress) / 2);
							}),
							g = ["load", "abort", "timeout", "error"],
							d = 0,
							e = g.length;
						e > d;
						d++
					)
						(b = g[d]),
							a.addEventListener(b, function() {
								return (h.progress = 100);
							});
				else
					(f = a.onreadystatechange),
						(a.onreadystatechange = function() {
							var b;
							return 0 === (b = a.readyState) || 4 === b ? (h.progress = 100) : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0;
						});
			}
			return a;
		})()),
		(m = (function() {
			function a(a) {
				var b,
					c,
					d,
					e,
					f = this;
				for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++)
					(b = e[c]),
						a.addEventListener(b, function() {
							return (f.progress = 100);
						});
			}
			return a;
		})()),
		(d = (function() {
			function a(a) {
				var b, c, d, f;
				for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) (b = f[c]), this.elements.push(new e(b));
			}
			return a;
		})()),
		(e = (function() {
			function a(a) {
				(this.selector = a), (this.progress = 0), this.check();
			}
			return (
				(a.prototype.check = function() {
					var a = this;
					return document.querySelector(this.selector)
						? this.done()
						: setTimeout(function() {
								return a.check();
						  }, C.elements.checkInterval);
				}),
				(a.prototype.done = function() {
					return (this.progress = 100);
				}),
				a
			);
		})()),
		(c = (function() {
			function a() {
				var a,
					b,
					c = this;
				(this.progress = null != (b = this.states[document.readyState]) ? b : 100),
					(a = document.onreadystatechange),
					(document.onreadystatechange = function() {
						return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0;
					});
			}
			return (a.prototype.states = { loading: 0, interactive: 50, complete: 100 }), a;
		})()),
		(f = (function() {
			function a() {
				var a,
					b,
					c,
					d,
					e,
					f = this;
				(this.progress = 0),
					(a = 0),
					(e = []),
					(d = 0),
					(c = B()),
					(b = setInterval(function() {
						var g;
						return (g = B() - c - 50), (c = B()), e.push(g), e.length > C.eventLag.sampleCount && e.shift(), (a = p(e)), ++d >= C.eventLag.minSamples && a < C.eventLag.lagThreshold ? ((f.progress = 100), clearInterval(b)) : (f.progress = 100 * (3 / (a + 3)));
					}, 50));
			}
			return a;
		})()),
		(l = (function() {
			function a(a) {
				(this.source = a), (this.last = this.sinceLastUpdate = 0), (this.rate = C.initialRate), (this.catchup = 0), (this.progress = this.lastProgress = 0), null != this.source && (this.progress = E(this.source, "progress"));
			}
			return (
				(a.prototype.tick = function(a, b) {
					var c;
					return null == b && (b = E(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? (this.sinceLastUpdate += a) : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), (this.catchup = (b - this.progress) / C.catchupTime), (this.sinceLastUpdate = 0), (this.last = b)), b > this.progress && (this.progress += this.catchup * a), (c = 1 - Math.pow(this.progress / 100, C.easeFactor)), (this.progress += c * this.rate * a), (this.progress = Math.min(this.lastProgress + C.maxProgressPerFrame, this.progress)), (this.progress = Math.max(0, this.progress)), (this.progress = Math.min(100, this.progress)), (this.lastProgress = this.progress), this.progress;
				}),
				a
			);
		})()),
		(K = null),
		(G = null),
		(q = null),
		(L = null),
		(o = null),
		(r = null),
		(Pace.running = !1),
		(y = function() {
			return C.restartOnPushState ? Pace.restart() : void 0;
		}),
		null != window.history.pushState &&
			((S = window.history.pushState),
			(window.history.pushState = function() {
				return y(), S.apply(window.history, arguments);
			})),
		null != window.history.replaceState &&
			((V = window.history.replaceState),
			(window.history.replaceState = function() {
				return y(), V.apply(window.history, arguments);
			})),
		(k = { ajax: a, elements: d, document: c, eventLag: f }),
		(A = function() {
			var a, c, d, e, f, g, h, i;
			for (Pace.sources = K = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) (a = g[c]), C[a] !== !1 && K.push(new k[a](C[a]));
			for (i = null != (h = C.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) (J = i[d]), K.push(new J(C));
			return (Pace.bar = q = new b()), (G = []), (L = new l());
		})(),
		(Pace.stop = function() {
			return Pace.trigger("stop"), (Pace.running = !1), q.destroy(), (r = !0), null != o && ("function" == typeof s && s(o), (o = null)), A();
		}),
		(Pace.restart = function() {
			return Pace.trigger("restart"), Pace.stop(), Pace.start();
		}),
		(Pace.go = function() {
			var a;
			return (
				(Pace.running = !0),
				q.render(),
				(a = B()),
				(r = !1),
				(o = F(function(b, c) {
					var d, e, f, g, h, i, j, k, m, n, o, p, s, t, u, v;
					for (k = 100 - q.progress, e = o = 0, f = !0, i = p = 0, t = K.length; t > p; i = ++p) for (J = K[i], n = null != G[i] ? G[i] : (G[i] = []), h = null != (v = J.elements) ? v : [J], j = s = 0, u = h.length; u > s; j = ++s) (g = h[j]), (m = null != n[j] ? n[j] : (n[j] = new l(g))), (f &= m.done), m.done || (e++, (o += m.tick(b)));
					return (
						(d = o / e),
						q.update(L.tick(b, d)),
						q.done() || f || r
							? (q.update(100),
							  Pace.trigger("done"),
							  setTimeout(function() {
									return q.finish(), (Pace.running = !1), Pace.trigger("hide");
							  }, Math.max(C.ghostTime, Math.max(C.minTime - (B() - a), 0))))
							: c()
					);
				}))
			);
		}),
		(Pace.start = function(a) {
			u(C, a), (Pace.running = !0);
			try {
				q.render();
			} catch (b) {
				i = b;
			}
			return document.querySelector(".pace") ? (Pace.trigger("start"), Pace.go()) : setTimeout(Pace.start, 50);
		}),
		"function" == typeof define && define.amd
			? define(function() {
					return Pace;
			  })
			: "object" == typeof exports
			? (module.exports = Pace)
			: C.startOnPageLoad && Pace.start();
}.call(this));
