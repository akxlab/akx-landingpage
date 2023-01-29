import {
  __commonJS,
  __toESM
} from "./chunk-LFBQMW2U.js";

// node_modules/joi/dist/joi-browser.min.js
var require_joi_browser_min = __commonJS({
  "node_modules/joi/dist/joi-browser.min.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.joi = t() : e.joi = t();
    }(self, () => {
      return e = { 7629: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(8571), a = r(9474), i = r(1687), o = r(8652), l = r(8160), c = r(3292), u = r(6354), f = r(8901), h = r(9708), d = r(6914), m = r(2294), p = r(6133), g = r(1152), y = r(8863), b = r(2036), v = { Base: class {
          constructor(e3) {
            this.type = e3, this.$_root = null, this._definition = {}, this._reset();
          }
          _reset() {
            this._ids = new m.Ids(), this._preferences = null, this._refs = new p.Manager(), this._cache = null, this._valids = null, this._invalids = null, this._flags = {}, this._rules = [], this._singleRules = /* @__PURE__ */ new Map(), this.$_terms = {}, this.$_temp = { ruleset: null, whens: {} };
          }
          describe() {
            return s("function" == typeof h.describe, "Manifest functionality disabled"), h.describe(this);
          }
          allow() {
            for (var e3 = arguments.length, t3 = new Array(e3), r2 = 0; r2 < e3; r2++)
              t3[r2] = arguments[r2];
            return l.verifyFlat(t3, "allow"), this._values(t3, "_valids");
          }
          alter(e3) {
            s(e3 && "object" == typeof e3 && !Array.isArray(e3), "Invalid targets argument"), s(!this._inRuleset(), "Cannot set alterations inside a ruleset");
            const t3 = this.clone();
            t3.$_terms.alterations = t3.$_terms.alterations || [];
            for (const r2 in e3) {
              const n2 = e3[r2];
              s("function" == typeof n2, "Alteration adjuster for", r2, "must be a function"), t3.$_terms.alterations.push({ target: r2, adjuster: n2 });
            }
            return t3.$_temp.ruleset = false, t3;
          }
          artifact(e3) {
            return s(void 0 !== e3, "Artifact cannot be undefined"), s(!this._cache, "Cannot set an artifact with a rule cache"), this.$_setFlag("artifact", e3);
          }
          cast(e3) {
            return s(false === e3 || "string" == typeof e3, "Invalid to value"), s(false === e3 || this._definition.cast[e3], "Type", this.type, "does not support casting to", e3), this.$_setFlag("cast", false === e3 ? void 0 : e3);
          }
          default(e3, t3) {
            return this._default("default", e3, t3);
          }
          description(e3) {
            return s(e3 && "string" == typeof e3, "Description must be a non-empty string"), this.$_setFlag("description", e3);
          }
          empty(e3) {
            const t3 = this.clone();
            return void 0 !== e3 && (e3 = t3.$_compile(e3, { override: false })), t3.$_setFlag("empty", e3, { clone: false });
          }
          error(e3) {
            return s(e3, "Missing error"), s(e3 instanceof Error || "function" == typeof e3, "Must provide a valid Error object or a function"), this.$_setFlag("error", e3);
          }
          example(e3) {
            let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return s(void 0 !== e3, "Missing example"), l.assertOptions(t3, ["override"]), this._inner("examples", e3, { single: true, override: t3.override });
          }
          external(e3, t3) {
            return "object" == typeof e3 && (s(!t3, "Cannot combine options with description"), t3 = e3.description, e3 = e3.method), s("function" == typeof e3, "Method must be a function"), s(void 0 === t3 || t3 && "string" == typeof t3, "Description must be a non-empty string"), this._inner("externals", { method: e3, description: t3 }, { single: true });
          }
          failover(e3, t3) {
            return this._default("failover", e3, t3);
          }
          forbidden() {
            return this.presence("forbidden");
          }
          id(e3) {
            return e3 ? (s("string" == typeof e3, "id must be a non-empty string"), s(/^[^\.]+$/.test(e3), "id cannot contain period character"), this.$_setFlag("id", e3)) : this.$_setFlag("id", void 0);
          }
          invalid() {
            for (var e3 = arguments.length, t3 = new Array(e3), r2 = 0; r2 < e3; r2++)
              t3[r2] = arguments[r2];
            return this._values(t3, "_invalids");
          }
          label(e3) {
            return s(e3 && "string" == typeof e3, "Label name must be a non-empty string"), this.$_setFlag("label", e3);
          }
          meta(e3) {
            return s(void 0 !== e3, "Meta cannot be undefined"), this._inner("metas", e3, { single: true });
          }
          note() {
            for (var e3 = arguments.length, t3 = new Array(e3), r2 = 0; r2 < e3; r2++)
              t3[r2] = arguments[r2];
            s(t3.length, "Missing notes");
            for (const e4 of t3)
              s(e4 && "string" == typeof e4, "Notes must be non-empty strings");
            return this._inner("notes", t3);
          }
          only() {
            let e3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return s("boolean" == typeof e3, "Invalid mode:", e3), this.$_setFlag("only", e3);
          }
          optional() {
            return this.presence("optional");
          }
          prefs(e3) {
            s(e3, "Missing preferences"), s(void 0 === e3.context, "Cannot override context"), s(void 0 === e3.externals, "Cannot override externals"), s(void 0 === e3.warnings, "Cannot override warnings"), s(void 0 === e3.debug, "Cannot override debug"), l.checkPreferences(e3);
            const t3 = this.clone();
            return t3._preferences = l.preferences(t3._preferences, e3), t3;
          }
          presence(e3) {
            return s(["optional", "required", "forbidden"].includes(e3), "Unknown presence mode", e3), this.$_setFlag("presence", e3);
          }
          raw() {
            let e3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return this.$_setFlag("result", e3 ? "raw" : void 0);
          }
          result(e3) {
            return s(["raw", "strip"].includes(e3), "Unknown result mode", e3), this.$_setFlag("result", e3);
          }
          required() {
            return this.presence("required");
          }
          strict(e3) {
            const t3 = this.clone(), r2 = void 0 !== e3 && !e3;
            return t3._preferences = l.preferences(t3._preferences, { convert: r2 }), t3;
          }
          strip() {
            let e3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return this.$_setFlag("result", e3 ? "strip" : void 0);
          }
          tag() {
            for (var e3 = arguments.length, t3 = new Array(e3), r2 = 0; r2 < e3; r2++)
              t3[r2] = arguments[r2];
            s(t3.length, "Missing tags");
            for (const e4 of t3)
              s(e4 && "string" == typeof e4, "Tags must be non-empty strings");
            return this._inner("tags", t3);
          }
          unit(e3) {
            return s(e3 && "string" == typeof e3, "Unit name must be a non-empty string"), this.$_setFlag("unit", e3);
          }
          valid() {
            for (var e3 = arguments.length, t3 = new Array(e3), r2 = 0; r2 < e3; r2++)
              t3[r2] = arguments[r2];
            l.verifyFlat(t3, "valid");
            const s2 = this.allow(...t3);
            return s2.$_setFlag("only", !!s2._valids, { clone: false }), s2;
          }
          when(e3, t3) {
            const r2 = this.clone();
            r2.$_terms.whens || (r2.$_terms.whens = []);
            const n2 = c.when(r2, e3, t3);
            if (!["any", "link"].includes(r2.type)) {
              const e4 = n2.is ? [n2] : n2.switch;
              for (const t4 of e4)
                s(!t4.then || "any" === t4.then.type || t4.then.type === r2.type, "Cannot combine", r2.type, "with", t4.then && t4.then.type), s(!t4.otherwise || "any" === t4.otherwise.type || t4.otherwise.type === r2.type, "Cannot combine", r2.type, "with", t4.otherwise && t4.otherwise.type);
            }
            return r2.$_terms.whens.push(n2), r2.$_mutateRebuild();
          }
          cache(e3) {
            s(!this._inRuleset(), "Cannot set caching inside a ruleset"), s(!this._cache, "Cannot override schema cache"), s(void 0 === this._flags.artifact, "Cannot cache a rule with an artifact");
            const t3 = this.clone();
            return t3._cache = e3 || o.provider.provision(), t3.$_temp.ruleset = false, t3;
          }
          clone() {
            const e3 = Object.create(Object.getPrototypeOf(this));
            return this._assign(e3);
          }
          concat(e3) {
            s(l.isSchema(e3), "Invalid schema object"), s("any" === this.type || "any" === e3.type || e3.type === this.type, "Cannot merge type", this.type, "with another type:", e3.type), s(!this._inRuleset(), "Cannot concatenate onto a schema with open ruleset"), s(!e3._inRuleset(), "Cannot concatenate a schema with open ruleset");
            let t3 = this.clone();
            if ("any" === this.type && "any" !== e3.type) {
              const r2 = e3.clone();
              for (const e4 of Object.keys(t3))
                "type" !== e4 && (r2[e4] = t3[e4]);
              t3 = r2;
            }
            t3._ids.concat(e3._ids), t3._refs.register(e3, p.toSibling), t3._preferences = t3._preferences ? l.preferences(t3._preferences, e3._preferences) : e3._preferences, t3._valids = b.merge(t3._valids, e3._valids, e3._invalids), t3._invalids = b.merge(t3._invalids, e3._invalids, e3._valids);
            for (const r2 of e3._singleRules.keys())
              t3._singleRules.has(r2) && (t3._rules = t3._rules.filter((e4) => e4.keep || e4.name !== r2), t3._singleRules.delete(r2));
            for (const r2 of e3._rules)
              e3._definition.rules[r2.method].multi || t3._singleRules.set(r2.name, r2), t3._rules.push(r2);
            if (t3._flags.empty && e3._flags.empty) {
              t3._flags.empty = t3._flags.empty.concat(e3._flags.empty);
              const r2 = Object.assign({}, e3._flags);
              delete r2.empty, i(t3._flags, r2);
            } else if (e3._flags.empty) {
              t3._flags.empty = e3._flags.empty;
              const r2 = Object.assign({}, e3._flags);
              delete r2.empty, i(t3._flags, r2);
            } else
              i(t3._flags, e3._flags);
            for (const r2 in e3.$_terms) {
              const s2 = e3.$_terms[r2];
              s2 ? t3.$_terms[r2] ? t3.$_terms[r2] = t3.$_terms[r2].concat(s2) : t3.$_terms[r2] = s2.slice() : t3.$_terms[r2] || (t3.$_terms[r2] = s2);
            }
            return this.$_root._tracer && this.$_root._tracer._combine(t3, [this, e3]), t3.$_mutateRebuild();
          }
          extend(e3) {
            return s(!e3.base, "Cannot extend type with another base"), f.type(this, e3);
          }
          extract(e3) {
            return e3 = Array.isArray(e3) ? e3 : e3.split("."), this._ids.reach(e3);
          }
          fork(e3, t3) {
            s(!this._inRuleset(), "Cannot fork inside a ruleset");
            let r2 = this;
            for (let s2 of [].concat(e3))
              s2 = Array.isArray(s2) ? s2 : s2.split("."), r2 = r2._ids.fork(s2, t3, r2);
            return r2.$_temp.ruleset = false, r2;
          }
          rule(e3) {
            const t3 = this._definition;
            l.assertOptions(e3, Object.keys(t3.modifiers)), s(false !== this.$_temp.ruleset, "Cannot apply rules to empty ruleset or the last rule added does not support rule properties");
            const r2 = null === this.$_temp.ruleset ? this._rules.length - 1 : this.$_temp.ruleset;
            s(r2 >= 0 && r2 < this._rules.length, "Cannot apply rules to empty ruleset");
            const a2 = this.clone();
            for (let i2 = r2; i2 < a2._rules.length; ++i2) {
              const r3 = a2._rules[i2], o2 = n(r3);
              for (const n2 in e3)
                t3.modifiers[n2](o2, e3[n2]), s(o2.name === r3.name, "Cannot change rule name");
              a2._rules[i2] = o2, a2._singleRules.get(o2.name) === r3 && a2._singleRules.set(o2.name, o2);
            }
            return a2.$_temp.ruleset = false, a2.$_mutateRebuild();
          }
          get ruleset() {
            s(!this._inRuleset(), "Cannot start a new ruleset without closing the previous one");
            const e3 = this.clone();
            return e3.$_temp.ruleset = e3._rules.length, e3;
          }
          get $() {
            return this.ruleset;
          }
          tailor(e3) {
            e3 = [].concat(e3), s(!this._inRuleset(), "Cannot tailor inside a ruleset");
            let t3 = this;
            if (this.$_terms.alterations)
              for (const { target: r2, adjuster: n2 } of this.$_terms.alterations)
                e3.includes(r2) && (t3 = n2(t3), s(l.isSchema(t3), "Alteration adjuster for", r2, "failed to return a schema object"));
            return t3 = t3.$_modify({ each: (t4) => t4.tailor(e3), ref: false }), t3.$_temp.ruleset = false, t3.$_mutateRebuild();
          }
          tracer() {
            return g.location ? g.location(this) : this;
          }
          validate(e3, t3) {
            return y.entry(e3, this, t3);
          }
          validateAsync(e3, t3) {
            return y.entryAsync(e3, this, t3);
          }
          $_addRule(e3) {
            "string" == typeof e3 && (e3 = { name: e3 }), s(e3 && "object" == typeof e3, "Invalid options"), s(e3.name && "string" == typeof e3.name, "Invalid rule name");
            for (const t4 in e3)
              s("_" !== t4[0], "Cannot set private rule properties");
            const t3 = Object.assign({}, e3);
            t3._resolve = [], t3.method = t3.method || t3.name;
            const r2 = this._definition.rules[t3.method], n2 = t3.args;
            s(r2, "Unknown rule", t3.method);
            const a2 = this.clone();
            if (n2) {
              s(1 === Object.keys(n2).length || Object.keys(n2).length === this._definition.rules[t3.name].args.length, "Invalid rule definition for", this.type, t3.name);
              for (const e4 in n2) {
                let i2 = n2[e4];
                if (r2.argsByName) {
                  const o2 = r2.argsByName.get(e4);
                  if (o2.ref && l.isResolvable(i2))
                    t3._resolve.push(e4), a2.$_mutateRegister(i2);
                  else if (o2.normalize && (i2 = o2.normalize(i2), n2[e4] = i2), o2.assert) {
                    const t4 = l.validateArg(i2, e4, o2);
                    s(!t4, t4, "or reference");
                  }
                }
                void 0 !== i2 ? n2[e4] = i2 : delete n2[e4];
              }
            }
            return r2.multi || (a2._ruleRemove(t3.name, { clone: false }), a2._singleRules.set(t3.name, t3)), false === a2.$_temp.ruleset && (a2.$_temp.ruleset = null), r2.priority ? a2._rules.unshift(t3) : a2._rules.push(t3), a2;
          }
          $_compile(e3, t3) {
            return c.schema(this.$_root, e3, t3);
          }
          $_createError(e3, t3, r2, s2, n2) {
            let a2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
            const i2 = false !== a2.flags ? this._flags : {}, o2 = a2.messages ? d.merge(this._definition.messages, a2.messages) : this._definition.messages;
            return new u.Report(e3, t3, r2, i2, o2, s2, n2);
          }
          $_getFlag(e3) {
            return this._flags[e3];
          }
          $_getRule(e3) {
            return this._singleRules.get(e3);
          }
          $_mapLabels(e3) {
            return e3 = Array.isArray(e3) ? e3 : e3.split("."), this._ids.labels(e3);
          }
          $_match(e3, t3, r2, s2) {
            (r2 = Object.assign({}, r2)).abortEarly = true, r2._externals = false, t3.snapshot();
            const n2 = !y.validate(e3, this, t3, r2, s2).errors;
            return t3.restore(), n2;
          }
          $_modify(e3) {
            return l.assertOptions(e3, ["each", "once", "ref", "schema"]), m.schema(this, e3) || this;
          }
          $_mutateRebuild() {
            return s(!this._inRuleset(), "Cannot add this rule inside a ruleset"), this._refs.reset(), this._ids.reset(), this.$_modify({ each: (e3, t3) => {
              let { source: r2, name: s2, path: n2, key: a2 } = t3;
              const i2 = this._definition[r2][s2] && this._definition[r2][s2].register;
              false !== i2 && this.$_mutateRegister(e3, { family: i2, key: a2 });
            } }), this._definition.rebuild && this._definition.rebuild(this), this.$_temp.ruleset = false, this;
          }
          $_mutateRegister(e3) {
            let { family: t3, key: r2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this._refs.register(e3, t3), this._ids.register(e3, { key: r2 });
          }
          $_property(e3) {
            return this._definition.properties[e3];
          }
          $_reach(e3) {
            return this._ids.reach(e3);
          }
          $_rootReferences() {
            return this._refs.roots();
          }
          $_setFlag(e3, t3) {
            let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            s("_" === e3[0] || !this._inRuleset(), "Cannot set flag inside a ruleset");
            const n2 = this._definition.flags[e3] || {};
            if (a(t3, n2.default) && (t3 = void 0), a(t3, this._flags[e3]))
              return this;
            const i2 = false !== r2.clone ? this.clone() : this;
            return void 0 !== t3 ? (i2._flags[e3] = t3, i2.$_mutateRegister(t3)) : delete i2._flags[e3], "_" !== e3[0] && (i2.$_temp.ruleset = false), i2;
          }
          $_parent(e3) {
            for (var t3 = arguments.length, r2 = new Array(t3 > 1 ? t3 - 1 : 0), s2 = 1; s2 < t3; s2++)
              r2[s2 - 1] = arguments[s2];
            return this[e3][l.symbols.parent].call(this, ...r2);
          }
          $_validate(e3, t3, r2) {
            return y.validate(e3, this, t3, r2);
          }
          _assign(e3) {
            e3.type = this.type, e3.$_root = this.$_root, e3.$_temp = Object.assign({}, this.$_temp), e3.$_temp.whens = {}, e3._ids = this._ids.clone(), e3._preferences = this._preferences, e3._valids = this._valids && this._valids.clone(), e3._invalids = this._invalids && this._invalids.clone(), e3._rules = this._rules.slice(), e3._singleRules = n(this._singleRules, { shallow: true }), e3._refs = this._refs.clone(), e3._flags = Object.assign({}, this._flags), e3._cache = null, e3.$_terms = {};
            for (const t3 in this.$_terms)
              e3.$_terms[t3] = this.$_terms[t3] ? this.$_terms[t3].slice() : null;
            e3.$_super = {};
            for (const t3 in this.$_super)
              e3.$_super[t3] = this._super[t3].bind(e3);
            return e3;
          }
          _bare() {
            const e3 = this.clone();
            e3._reset();
            const t3 = e3._definition.terms;
            for (const r2 in t3) {
              const s2 = t3[r2];
              e3.$_terms[r2] = s2.init;
            }
            return e3.$_mutateRebuild();
          }
          _default(e3, t3) {
            let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return l.assertOptions(r2, "literal"), s(void 0 !== t3, "Missing", e3, "value"), s("function" == typeof t3 || !r2.literal, "Only function value supports literal option"), "function" == typeof t3 && r2.literal && (t3 = { [l.symbols.literal]: true, literal: t3 }), this.$_setFlag(e3, t3);
          }
          _generate(e3, t3, r2) {
            if (!this.$_terms.whens)
              return { schema: this };
            const s2 = [], n2 = [];
            for (let a3 = 0; a3 < this.$_terms.whens.length; ++a3) {
              const i3 = this.$_terms.whens[a3];
              if (i3.concat) {
                s2.push(i3.concat), n2.push(`${a3}.concat`);
                continue;
              }
              const o2 = i3.ref ? i3.ref.resolve(e3, t3, r2) : e3, l2 = i3.is ? [i3] : i3.switch, c2 = n2.length;
              for (let c3 = 0; c3 < l2.length; ++c3) {
                const { is: u2, then: f2, otherwise: h2 } = l2[c3], d2 = `${a3}${i3.switch ? "." + c3 : ""}`;
                if (u2.$_match(o2, t3.nest(u2, `${d2}.is`), r2)) {
                  if (f2) {
                    const a4 = t3.localize([...t3.path, `${d2}.then`], t3.ancestors, t3.schemas), { schema: i4, id: o3 } = f2._generate(e3, a4, r2);
                    s2.push(i4), n2.push(`${d2}.then${o3 ? `(${o3})` : ""}`);
                    break;
                  }
                } else if (h2) {
                  const a4 = t3.localize([...t3.path, `${d2}.otherwise`], t3.ancestors, t3.schemas), { schema: i4, id: o3 } = h2._generate(e3, a4, r2);
                  s2.push(i4), n2.push(`${d2}.otherwise${o3 ? `(${o3})` : ""}`);
                  break;
                }
              }
              if (i3.break && n2.length > c2)
                break;
            }
            const a2 = n2.join(", ");
            if (t3.mainstay.tracer.debug(t3, "rule", "when", a2), !a2)
              return { schema: this };
            if (!t3.mainstay.tracer.active && this.$_temp.whens[a2])
              return { schema: this.$_temp.whens[a2], id: a2 };
            let i2 = this;
            this._definition.generate && (i2 = this._definition.generate(this, e3, t3, r2));
            for (const e4 of s2)
              i2 = i2.concat(e4);
            return this.$_root._tracer && this.$_root._tracer._combine(i2, [this, ...s2]), this.$_temp.whens[a2] = i2, { schema: i2, id: a2 };
          }
          _inner(e3, t3) {
            let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            s(!this._inRuleset(), `Cannot set ${e3} inside a ruleset`);
            const n2 = this.clone();
            return n2.$_terms[e3] && !r2.override || (n2.$_terms[e3] = []), r2.single ? n2.$_terms[e3].push(t3) : n2.$_terms[e3].push(...t3), n2.$_temp.ruleset = false, n2;
          }
          _inRuleset() {
            return null !== this.$_temp.ruleset && false !== this.$_temp.ruleset;
          }
          _ruleRemove(e3) {
            let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!this._singleRules.has(e3))
              return this;
            const r2 = false !== t3.clone ? this.clone() : this;
            r2._singleRules.delete(e3);
            const s2 = [];
            for (let t4 = 0; t4 < r2._rules.length; ++t4) {
              const n2 = r2._rules[t4];
              n2.name !== e3 || n2.keep ? s2.push(n2) : r2._inRuleset() && t4 < r2.$_temp.ruleset && --r2.$_temp.ruleset;
            }
            return r2._rules = s2, r2;
          }
          _values(e3, t3) {
            l.verifyFlat(e3, t3.slice(1, -1));
            const r2 = this.clone(), n2 = e3[0] === l.symbols.override;
            if (n2 && (e3 = e3.slice(1)), !r2[t3] && e3.length ? r2[t3] = new b() : n2 && (r2[t3] = e3.length ? new b() : null, r2.$_mutateRebuild()), !r2[t3])
              return r2;
            n2 && r2[t3].override();
            for (const n3 of e3) {
              s(void 0 !== n3, "Cannot call allow/valid/invalid with undefined"), s(n3 !== l.symbols.override, "Override must be the first value");
              const e4 = "_invalids" === t3 ? "_valids" : "_invalids";
              r2[e4] && (r2[e4].remove(n3), r2[e4].length || (s("_valids" === t3 || !r2._flags.only, "Setting invalid value", n3, "leaves schema rejecting all values due to previous valid rule"), r2[e4] = null)), r2[t3].add(n3, r2._refs);
            }
            return r2;
          }
        } };
        v.Base.prototype[l.symbols.any] = { version: l.version, compile: c.compile, root: "$_root" }, v.Base.prototype.isImmutable = true, v.Base.prototype.deny = v.Base.prototype.invalid, v.Base.prototype.disallow = v.Base.prototype.invalid, v.Base.prototype.equal = v.Base.prototype.valid, v.Base.prototype.exist = v.Base.prototype.required, v.Base.prototype.not = v.Base.prototype.invalid, v.Base.prototype.options = v.Base.prototype.prefs, v.Base.prototype.preferences = v.Base.prototype.prefs, e2.exports = new v.Base();
      }, 8652: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(8571), a = r(8160), i = { max: 1e3, supported: /* @__PURE__ */ new Set(["undefined", "boolean", "number", "string"]) };
        t2.provider = { provision: (e3) => new i.Cache(e3) }, i.Cache = class {
          constructor() {
            let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            a.assertOptions(e3, ["max"]), s(void 0 === e3.max || e3.max && e3.max > 0 && isFinite(e3.max), "Invalid max cache size"), this._max = e3.max || i.max, this._map = /* @__PURE__ */ new Map(), this._list = new i.List();
          }
          get length() {
            return this._map.size;
          }
          set(e3, t3) {
            if (null !== e3 && !i.supported.has(typeof e3))
              return;
            let r2 = this._map.get(e3);
            if (r2)
              return r2.value = t3, void this._list.first(r2);
            r2 = this._list.unshift({ key: e3, value: t3 }), this._map.set(e3, r2), this._compact();
          }
          get(e3) {
            const t3 = this._map.get(e3);
            if (t3)
              return this._list.first(t3), n(t3.value);
          }
          _compact() {
            if (this._map.size > this._max) {
              const e3 = this._list.pop();
              this._map.delete(e3.key);
            }
          }
        }, i.List = class {
          constructor() {
            this.tail = null, this.head = null;
          }
          unshift(e3) {
            return e3.next = null, e3.prev = this.head, this.head && (this.head.next = e3), this.head = e3, this.tail || (this.tail = e3), e3;
          }
          first(e3) {
            e3 !== this.head && (this._remove(e3), this.unshift(e3));
          }
          pop() {
            return this._remove(this.tail);
          }
          _remove(e3) {
            const { next: t3, prev: r2 } = e3;
            return t3.prev = r2, r2 && (r2.next = t3), e3 === this.tail && (this.tail = t3), e3.prev = null, e3.next = null, e3;
          }
        };
      }, 8160: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(7916), a = r(5934);
        let i, o;
        const l = { isoDate: /^(?:[-+]\d{2})?(?:\d{4}(?!\d{2}\b))(?:(-?)(?:(?:0[1-9]|1[0-2])(?:\1(?:[12]\d|0[1-9]|3[01]))?|W(?:[0-4]\d|5[0-2])(?:-?[1-7])?|(?:00[1-9]|0[1-9]\d|[12]\d{2}|3(?:[0-5]\d|6[1-6])))(?![T]$|[T][\d]+Z$)(?:[T\s](?:(?:(?:[01]\d|2[0-3])(?:(:?)[0-5]\d)?|24\:?00)(?:[.,]\d+(?!:))?)(?:\2[0-5]\d(?:[.,]\d+)?)?(?:[Z]|(?:[+-])(?:[01]\d|2[0-3])(?::?[0-5]\d)?)?)?)?$/ };
        t2.version = a.version, t2.defaults = { abortEarly: true, allowUnknown: false, artifacts: false, cache: true, context: null, convert: true, dateFormat: "iso", errors: { escapeHtml: false, label: "path", language: null, render: true, stack: false, wrap: { label: '"', array: "[]" } }, externals: true, messages: {}, nonEnumerables: false, noDefaults: false, presence: "optional", skipFunctions: false, stripUnknown: false, warnings: false }, t2.symbols = { any: Symbol.for("@hapi/joi/schema"), arraySingle: Symbol("arraySingle"), deepDefault: Symbol("deepDefault"), errors: Symbol("errors"), literal: Symbol("literal"), override: Symbol("override"), parent: Symbol("parent"), prefs: Symbol("prefs"), ref: Symbol("ref"), template: Symbol("template"), values: Symbol("values") }, t2.assertOptions = function(e3, t3) {
          let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Options";
          s(e3 && "object" == typeof e3 && !Array.isArray(e3), "Options must be of type object");
          const n2 = Object.keys(e3).filter((e4) => !t3.includes(e4));
          s(0 === n2.length, `${r2} contain unknown keys: ${n2}`);
        }, t2.checkPreferences = function(e3) {
          o = o || r(3378);
          const t3 = o.preferences.validate(e3);
          if (t3.error)
            throw new n([t3.error.details[0].message]);
        }, t2.compare = function(e3, t3, r2) {
          switch (r2) {
            case "=":
              return e3 === t3;
            case ">":
              return e3 > t3;
            case "<":
              return e3 < t3;
            case ">=":
              return e3 >= t3;
            case "<=":
              return e3 <= t3;
          }
        }, t2.default = function(e3, t3) {
          return void 0 === e3 ? t3 : e3;
        }, t2.isIsoDate = function(e3) {
          return l.isoDate.test(e3);
        }, t2.isNumber = function(e3) {
          return "number" == typeof e3 && !isNaN(e3);
        }, t2.isResolvable = function(e3) {
          return !!e3 && (e3[t2.symbols.ref] || e3[t2.symbols.template]);
        }, t2.isSchema = function(e3) {
          let r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const n2 = e3 && e3[t2.symbols.any];
          return !!n2 && (s(r2.legacy || n2.version === t2.version, "Cannot mix different versions of joi schemas"), true);
        }, t2.isValues = function(e3) {
          return e3[t2.symbols.values];
        }, t2.limit = function(e3) {
          return Number.isSafeInteger(e3) && e3 >= 0;
        }, t2.preferences = function(e3, s2) {
          i = i || r(6914), e3 = e3 || {}, s2 = s2 || {};
          const n2 = Object.assign({}, e3, s2);
          return s2.errors && e3.errors && (n2.errors = Object.assign({}, e3.errors, s2.errors), n2.errors.wrap = Object.assign({}, e3.errors.wrap, s2.errors.wrap)), s2.messages && (n2.messages = i.compile(s2.messages, e3.messages)), delete n2[t2.symbols.prefs], n2;
        }, t2.tryWithPath = function(e3, t3) {
          let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          try {
            return e3();
          } catch (e4) {
            throw void 0 !== e4.path ? e4.path = t3 + "." + e4.path : e4.path = t3, r2.append && (e4.message = `${e4.message} (${e4.path})`), e4;
          }
        }, t2.validateArg = function(e3, r2, s2) {
          let { assert: n2, message: a2 } = s2;
          if (t2.isSchema(n2)) {
            const t3 = n2.validate(e3);
            if (!t3.error)
              return;
            return t3.error.message;
          }
          if (!n2(e3))
            return r2 ? `${r2} ${a2}` : a2;
        }, t2.verifyFlat = function(e3, t3) {
          for (const r2 of e3)
            s(!Array.isArray(r2), "Method no longer accepts array arguments:", t3);
        };
      }, 3292: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(8160), a = r(6133), i = {};
        t2.schema = function(e3, t3) {
          let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          n.assertOptions(r2, ["appendPath", "override"]);
          try {
            return i.schema(e3, t3, r2);
          } catch (e4) {
            throw r2.appendPath && void 0 !== e4.path && (e4.message = `${e4.message} (${e4.path})`), e4;
          }
        }, i.schema = function(e3, t3, r2) {
          s(void 0 !== t3, "Invalid undefined schema"), Array.isArray(t3) && (s(t3.length, "Invalid empty array schema"), 1 === t3.length && (t3 = t3[0]));
          const a2 = function(t4) {
            for (var s2 = arguments.length, n2 = new Array(s2 > 1 ? s2 - 1 : 0), a3 = 1; a3 < s2; a3++)
              n2[a3 - 1] = arguments[a3];
            return false !== r2.override ? t4.valid(e3.override, ...n2) : t4.valid(...n2);
          };
          if (i.simple(t3))
            return a2(e3, t3);
          if ("function" == typeof t3)
            return e3.custom(t3);
          if (s("object" == typeof t3, "Invalid schema content:", typeof t3), n.isResolvable(t3))
            return a2(e3, t3);
          if (n.isSchema(t3))
            return t3;
          if (Array.isArray(t3)) {
            for (const r3 of t3)
              if (!i.simple(r3))
                return e3.alternatives().try(...t3);
            return a2(e3, ...t3);
          }
          return t3 instanceof RegExp ? e3.string().regex(t3) : t3 instanceof Date ? a2(e3.date(), t3) : (s(Object.getPrototypeOf(t3) === Object.getPrototypeOf({}), "Schema can only contain plain objects"), e3.object().keys(t3));
        }, t2.ref = function(e3, t3) {
          return a.isRef(e3) ? e3 : a.create(e3, t3);
        }, t2.compile = function(e3, r2) {
          let a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          n.assertOptions(a2, ["legacy"]);
          const o = r2 && r2[n.symbols.any];
          if (o)
            return s(a2.legacy || o.version === n.version, "Cannot mix different versions of joi schemas:", o.version, n.version), r2;
          if ("object" != typeof r2 || !a2.legacy)
            return t2.schema(e3, r2, { appendPath: true });
          const l = i.walk(r2);
          return l ? l.compile(l.root, r2) : t2.schema(e3, r2, { appendPath: true });
        }, i.walk = function(e3) {
          if ("object" != typeof e3)
            return null;
          if (Array.isArray(e3)) {
            for (const t4 of e3) {
              const e4 = i.walk(t4);
              if (e4)
                return e4;
            }
            return null;
          }
          const t3 = e3[n.symbols.any];
          if (t3)
            return { root: e3[t3.root], compile: t3.compile };
          s(Object.getPrototypeOf(e3) === Object.getPrototypeOf({}), "Schema can only contain plain objects");
          for (const t4 in e3) {
            const r2 = i.walk(e3[t4]);
            if (r2)
              return r2;
          }
          return null;
        }, i.simple = function(e3) {
          return null === e3 || ["boolean", "string", "number"].includes(typeof e3);
        }, t2.when = function(e3, r2, o) {
          if (void 0 === o && (s(r2 && "object" == typeof r2, "Missing options"), o = r2, r2 = a.create(".")), Array.isArray(o) && (o = { switch: o }), n.assertOptions(o, ["is", "not", "then", "otherwise", "switch", "break"]), n.isSchema(r2))
            return s(void 0 === o.is, '"is" can not be used with a schema condition'), s(void 0 === o.not, '"not" can not be used with a schema condition'), s(void 0 === o.switch, '"switch" can not be used with a schema condition'), i.condition(e3, { is: r2, then: o.then, otherwise: o.otherwise, break: o.break });
          if (s(a.isRef(r2) || "string" == typeof r2, "Invalid condition:", r2), s(void 0 === o.not || void 0 === o.is, 'Cannot combine "is" with "not"'), void 0 === o.switch) {
            let l2 = o;
            void 0 !== o.not && (l2 = { is: o.not, then: o.otherwise, otherwise: o.then, break: o.break });
            let c = void 0 !== l2.is ? e3.$_compile(l2.is) : e3.$_root.invalid(null, false, 0, "").required();
            return s(void 0 !== l2.then || void 0 !== l2.otherwise, 'options must have at least one of "then", "otherwise", or "switch"'), s(void 0 === l2.break || void 0 === l2.then || void 0 === l2.otherwise, "Cannot specify then, otherwise, and break all together"), void 0 === o.is || a.isRef(o.is) || n.isSchema(o.is) || (c = c.required()), i.condition(e3, { ref: t2.ref(r2), is: c, then: l2.then, otherwise: l2.otherwise, break: l2.break });
          }
          s(Array.isArray(o.switch), '"switch" must be an array'), s(void 0 === o.is, 'Cannot combine "switch" with "is"'), s(void 0 === o.not, 'Cannot combine "switch" with "not"'), s(void 0 === o.then, 'Cannot combine "switch" with "then"');
          const l = { ref: t2.ref(r2), switch: [], break: o.break };
          for (let t3 = 0; t3 < o.switch.length; ++t3) {
            const r3 = o.switch[t3], i2 = t3 === o.switch.length - 1;
            n.assertOptions(r3, i2 ? ["is", "then", "otherwise"] : ["is", "then"]), s(void 0 !== r3.is, 'Switch statement missing "is"'), s(void 0 !== r3.then, 'Switch statement missing "then"');
            const c = { is: e3.$_compile(r3.is), then: e3.$_compile(r3.then) };
            if (a.isRef(r3.is) || n.isSchema(r3.is) || (c.is = c.is.required()), i2) {
              s(void 0 === o.otherwise || void 0 === r3.otherwise, 'Cannot specify "otherwise" inside and outside a "switch"');
              const t4 = void 0 !== o.otherwise ? o.otherwise : r3.otherwise;
              void 0 !== t4 && (s(void 0 === l.break, "Cannot specify both otherwise and break"), c.otherwise = e3.$_compile(t4));
            }
            l.switch.push(c);
          }
          return l;
        }, i.condition = function(e3, t3) {
          for (const r2 of ["then", "otherwise"])
            void 0 === t3[r2] ? delete t3[r2] : t3[r2] = e3.$_compile(t3[r2]);
          return t3;
        };
      }, 6354: (e2, t2, r) => {
        "use strict";
        const s = r(5688), n = r(8160), a = r(3328);
        t2.Report = class {
          constructor(e3, r2, s2, n2, a2, i, o) {
            if (this.code = e3, this.flags = n2, this.messages = a2, this.path = i.path, this.prefs = o, this.state = i, this.value = r2, this.message = null, this.template = null, this.local = s2 || {}, this.local.label = t2.label(this.flags, this.state, this.prefs, this.messages), void 0 === this.value || this.local.hasOwnProperty("value") || (this.local.value = this.value), this.path.length) {
              const e4 = this.path[this.path.length - 1];
              "object" != typeof e4 && (this.local.key = e4);
            }
          }
          _setTemplate(e3) {
            if (this.template = e3, !this.flags.label && 0 === this.path.length) {
              const e4 = this._template(this.template, "root");
              e4 && (this.local.label = e4);
            }
          }
          toString() {
            if (this.message)
              return this.message;
            const e3 = this.code;
            if (!this.prefs.errors.render)
              return this.code;
            const t3 = this._template(this.template) || this._template(this.prefs.messages) || this._template(this.messages);
            return void 0 === t3 ? `Error code "${e3}" is not defined, your custom type is missing the correct messages definition` : (this.message = t3.render(this.value, this.state, this.prefs, this.local, { errors: this.prefs.errors, messages: [this.prefs.messages, this.messages] }), this.prefs.errors.label || (this.message = this.message.replace(/^"" /, "").trim()), this.message);
          }
          _template(e3, r2) {
            return t2.template(this.value, e3, r2 || this.code, this.state, this.prefs);
          }
        }, t2.path = function(e3) {
          let t3 = "";
          for (const r2 of e3)
            "object" != typeof r2 && ("string" == typeof r2 ? (t3 && (t3 += "."), t3 += r2) : t3 += `[${r2}]`);
          return t3;
        }, t2.template = function(e3, t3, r2, s2, i) {
          if (!t3)
            return;
          if (a.isTemplate(t3))
            return "root" !== r2 ? t3 : null;
          let o = i.errors.language;
          if (n.isResolvable(o) && (o = o.resolve(e3, s2, i)), o && t3[o]) {
            if (void 0 !== t3[o][r2])
              return t3[o][r2];
            if (void 0 !== t3[o]["*"])
              return t3[o]["*"];
          }
          return t3[r2] ? t3[r2] : t3["*"];
        }, t2.label = function(e3, r2, s2, n2) {
          if (e3.label)
            return e3.label;
          if (!s2.errors.label)
            return "";
          let a2 = r2.path;
          "key" === s2.errors.label && r2.path.length > 1 && (a2 = r2.path.slice(-1));
          return t2.path(a2) || t2.template(null, s2.messages, "root", r2, s2) || n2 && t2.template(null, n2, "root", r2, s2) || "value";
        }, t2.process = function(e3, r2, s2) {
          if (!e3)
            return null;
          const { override: n2, message: a2, details: i } = t2.details(e3);
          if (n2)
            return n2;
          if (s2.errors.stack)
            return new t2.ValidationError(a2, i, r2);
          const o = Error.stackTraceLimit;
          Error.stackTraceLimit = 0;
          const l = new t2.ValidationError(a2, i, r2);
          return Error.stackTraceLimit = o, l;
        }, t2.details = function(e3) {
          let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = [];
          const s2 = [];
          for (const n2 of e3) {
            if (n2 instanceof Error) {
              if (false !== t3.override)
                return { override: n2 };
              const e5 = n2.toString();
              r2.push(e5), s2.push({ message: e5, type: "override", context: { error: n2 } });
              continue;
            }
            const e4 = n2.toString();
            r2.push(e4), s2.push({ message: e4, path: n2.path.filter((e5) => "object" != typeof e5), type: n2.code, context: n2.local });
          }
          return r2.length > 1 && (r2 = [...new Set(r2)]), { message: r2.join(". "), details: s2 };
        }, t2.ValidationError = class extends Error {
          constructor(e3, t3, r2) {
            super(e3), this._original = r2, this.details = t3;
          }
          static isError(e3) {
            return e3 instanceof t2.ValidationError;
          }
        }, t2.ValidationError.prototype.isJoi = true, t2.ValidationError.prototype.name = "ValidationError", t2.ValidationError.prototype.annotate = s.error;
      }, 8901: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(8571), a = r(8160), i = r(6914), o = {};
        t2.type = function(e3, t3) {
          const r2 = Object.getPrototypeOf(e3), l = n(r2), c = e3._assign(Object.create(l)), u = Object.assign({}, t3);
          delete u.base, l._definition = u;
          const f = r2._definition || {};
          u.messages = i.merge(f.messages, u.messages), u.properties = Object.assign({}, f.properties, u.properties), c.type = u.type, u.flags = Object.assign({}, f.flags, u.flags);
          const h = Object.assign({}, f.terms);
          if (u.terms)
            for (const e4 in u.terms) {
              const t4 = u.terms[e4];
              s(void 0 === c.$_terms[e4], "Invalid term override for", u.type, e4), c.$_terms[e4] = t4.init, h[e4] = t4;
            }
          u.terms = h, u.args || (u.args = f.args), u.prepare = o.prepare(u.prepare, f.prepare), u.coerce && ("function" == typeof u.coerce && (u.coerce = { method: u.coerce }), u.coerce.from && !Array.isArray(u.coerce.from) && (u.coerce = { method: u.coerce.method, from: [].concat(u.coerce.from) })), u.coerce = o.coerce(u.coerce, f.coerce), u.validate = o.validate(u.validate, f.validate);
          const d = Object.assign({}, f.rules);
          if (u.rules)
            for (const e4 in u.rules) {
              const t4 = u.rules[e4];
              s("object" == typeof t4, "Invalid rule definition for", u.type, e4);
              let r3 = t4.method;
              if (void 0 === r3 && (r3 = function() {
                return this.$_addRule(e4);
              }), r3 && (s(!l[e4], "Rule conflict in", u.type, e4), l[e4] = r3), s(!d[e4], "Rule conflict in", u.type, e4), d[e4] = t4, t4.alias) {
                const e5 = [].concat(t4.alias);
                for (const r4 of e5)
                  l[r4] = t4.method;
              }
              t4.args && (t4.argsByName = /* @__PURE__ */ new Map(), t4.args = t4.args.map((e5) => ("string" == typeof e5 && (e5 = { name: e5 }), s(!t4.argsByName.has(e5.name), "Duplicated argument name", e5.name), a.isSchema(e5.assert) && (e5.assert = e5.assert.strict().label(e5.name)), t4.argsByName.set(e5.name, e5), e5)));
            }
          u.rules = d;
          const m = Object.assign({}, f.modifiers);
          if (u.modifiers)
            for (const e4 in u.modifiers) {
              s(!l[e4], "Rule conflict in", u.type, e4);
              const t4 = u.modifiers[e4];
              s("function" == typeof t4, "Invalid modifier definition for", u.type, e4);
              const r3 = function(t5) {
                return this.rule({ [e4]: t5 });
              };
              l[e4] = r3, m[e4] = t4;
            }
          if (u.modifiers = m, u.overrides) {
            l._super = r2, c.$_super = {};
            for (const e4 in u.overrides)
              s(r2[e4], "Cannot override missing", e4), u.overrides[e4][a.symbols.parent] = r2[e4], c.$_super[e4] = r2[e4].bind(c);
            Object.assign(l, u.overrides);
          }
          u.cast = Object.assign({}, f.cast, u.cast);
          const p = Object.assign({}, f.manifest, u.manifest);
          return p.build = o.build(u.manifest && u.manifest.build, f.manifest && f.manifest.build), u.manifest = p, u.rebuild = o.rebuild(u.rebuild, f.rebuild), c;
        }, o.build = function(e3, t3) {
          return e3 && t3 ? function(r2, s2) {
            return t3(e3(r2, s2), s2);
          } : e3 || t3;
        }, o.coerce = function(e3, t3) {
          return e3 && t3 ? { from: e3.from && t3.from ? [.../* @__PURE__ */ new Set([...e3.from, ...t3.from])] : null, method(r2, s2) {
            let n2;
            if ((!t3.from || t3.from.includes(typeof r2)) && (n2 = t3.method(r2, s2), n2)) {
              if (n2.errors || void 0 === n2.value)
                return n2;
              r2 = n2.value;
            }
            if (!e3.from || e3.from.includes(typeof r2)) {
              const t4 = e3.method(r2, s2);
              if (t4)
                return t4;
            }
            return n2;
          } } : e3 || t3;
        }, o.prepare = function(e3, t3) {
          return e3 && t3 ? function(r2, s2) {
            const n2 = e3(r2, s2);
            if (n2) {
              if (n2.errors || void 0 === n2.value)
                return n2;
              r2 = n2.value;
            }
            return t3(r2, s2) || n2;
          } : e3 || t3;
        }, o.rebuild = function(e3, t3) {
          return e3 && t3 ? function(r2) {
            t3(r2), e3(r2);
          } : e3 || t3;
        }, o.validate = function(e3, t3) {
          return e3 && t3 ? function(r2, s2) {
            const n2 = t3(r2, s2);
            if (n2) {
              if (n2.errors && (!Array.isArray(n2.errors) || n2.errors.length))
                return n2;
              r2 = n2.value;
            }
            return e3(r2, s2) || n2;
          } : e3 || t3;
        };
      }, 5107: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(8571), a = r(8652), i = r(8160), o = r(3292), l = r(6354), c = r(8901), u = r(9708), f = r(6133), h = r(3328), d = r(1152);
        let m;
        const p = { types: { alternatives: r(4946), any: r(8068), array: r(546), boolean: r(4937), date: r(7500), function: r(390), link: r(8785), number: r(3832), object: r(8966), string: r(7417), symbol: r(8826) }, aliases: { alt: "alternatives", bool: "boolean", func: "function" }, root: function() {
          const e3 = { _types: new Set(Object.keys(p.types)) };
          for (const t3 of e3._types)
            e3[t3] = function() {
              for (var e4 = arguments.length, r2 = new Array(e4), n2 = 0; n2 < e4; n2++)
                r2[n2] = arguments[n2];
              return s(!r2.length || ["alternatives", "link", "object"].includes(t3), "The", t3, "type does not allow arguments"), p.generate(this, p.types[t3], r2);
            };
          for (const t3 of ["allow", "custom", "disallow", "equal", "exist", "forbidden", "invalid", "not", "only", "optional", "options", "prefs", "preferences", "required", "strip", "valid", "when"])
            e3[t3] = function() {
              return this.any()[t3](...arguments);
            };
          Object.assign(e3, p.methods);
          for (const t3 in p.aliases) {
            const r2 = p.aliases[t3];
            e3[t3] = e3[r2];
          }
          return e3.x = e3.expression, d.setup && d.setup(e3), e3;
        } };
        p.methods = { ValidationError: l.ValidationError, version: i.version, cache: a.provider, assert(e3, t3) {
          for (var r2 = arguments.length, s2 = new Array(r2 > 2 ? r2 - 2 : 0), n2 = 2; n2 < r2; n2++)
            s2[n2 - 2] = arguments[n2];
          p.assert(e3, t3, true, s2);
        }, attempt(e3, t3) {
          for (var r2 = arguments.length, s2 = new Array(r2 > 2 ? r2 - 2 : 0), n2 = 2; n2 < r2; n2++)
            s2[n2 - 2] = arguments[n2];
          return p.assert(e3, t3, false, s2);
        }, build(e3) {
          return s("function" == typeof u.build, "Manifest functionality disabled"), u.build(this, e3);
        }, checkPreferences(e3) {
          i.checkPreferences(e3);
        }, compile(e3, t3) {
          return o.compile(this, e3, t3);
        }, defaults(e3) {
          s("function" == typeof e3, "modifier must be a function");
          const t3 = Object.assign({}, this);
          for (const r2 of t3._types) {
            const n2 = e3(t3[r2]());
            s(i.isSchema(n2), "modifier must return a valid schema object"), t3[r2] = function() {
              for (var e4 = arguments.length, t4 = new Array(e4), r3 = 0; r3 < e4; r3++)
                t4[r3] = arguments[r3];
              return p.generate(this, n2, t4);
            };
          }
          return t3;
        }, expression() {
          for (var e3 = arguments.length, t3 = new Array(e3), r2 = 0; r2 < e3; r2++)
            t3[r2] = arguments[r2];
          return new h(...t3);
        }, extend() {
          for (var e3 = arguments.length, t3 = new Array(e3), n2 = 0; n2 < e3; n2++)
            t3[n2] = arguments[n2];
          i.verifyFlat(t3, "extend"), m = m || r(3378), s(t3.length, "You need to provide at least one extension"), this.assert(t3, m.extensions);
          const a2 = Object.assign({}, this);
          a2._types = new Set(a2._types);
          for (let e4 of t3) {
            "function" == typeof e4 && (e4 = e4(a2)), this.assert(e4, m.extension);
            const t4 = p.expandExtension(e4, a2);
            for (const e5 of t4) {
              s(void 0 === a2[e5.type] || a2._types.has(e5.type), "Cannot override name", e5.type);
              const t5 = e5.base || this.any(), r2 = c.type(t5, e5);
              a2._types.add(e5.type), a2[e5.type] = function() {
                for (var e6 = arguments.length, t6 = new Array(e6), s2 = 0; s2 < e6; s2++)
                  t6[s2] = arguments[s2];
                return p.generate(this, r2, t6);
              };
            }
          }
          return a2;
        }, isError: l.ValidationError.isError, isExpression: h.isTemplate, isRef: f.isRef, isSchema: i.isSchema, in() {
          return f.in(...arguments);
        }, override: i.symbols.override, ref() {
          return f.create(...arguments);
        }, types() {
          const e3 = {};
          for (const t3 of this._types)
            e3[t3] = this[t3]();
          for (const t3 in p.aliases)
            e3[t3] = this[t3]();
          return e3;
        } }, p.assert = function(e3, t3, r2, s2) {
          const a2 = s2[0] instanceof Error || "string" == typeof s2[0] ? s2[0] : null, o2 = null !== a2 ? s2[1] : s2[0], c2 = t3.validate(e3, i.preferences({ errors: { stack: true } }, o2 || {}));
          let u2 = c2.error;
          if (!u2)
            return c2.value;
          if (a2 instanceof Error)
            throw a2;
          const f2 = r2 && "function" == typeof u2.annotate ? u2.annotate() : u2.message;
          throw u2 instanceof l.ValidationError == 0 && (u2 = n(u2)), u2.message = a2 ? `${a2} ${f2}` : f2, u2;
        }, p.generate = function(e3, t3, r2) {
          return s(e3, "Must be invoked on a Joi instance."), t3.$_root = e3, t3._definition.args && r2.length ? t3._definition.args(t3, ...r2) : t3;
        }, p.expandExtension = function(e3, t3) {
          if ("string" == typeof e3.type)
            return [e3];
          const r2 = [];
          for (const s2 of t3._types)
            if (e3.type.test(s2)) {
              const n2 = Object.assign({}, e3);
              n2.type = s2, n2.base = t3[s2](), r2.push(n2);
            }
          return r2;
        }, e2.exports = p.root();
      }, 6914: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(8571), a = r(3328);
        t2.compile = function(e3, t3) {
          if ("string" == typeof e3)
            return s(!t3, "Cannot set single message string"), new a(e3);
          if (a.isTemplate(e3))
            return s(!t3, "Cannot set single message template"), e3;
          s("object" == typeof e3 && !Array.isArray(e3), "Invalid message options"), t3 = t3 ? n(t3) : {};
          for (let r2 in e3) {
            const n2 = e3[r2];
            if ("root" === r2 || a.isTemplate(n2)) {
              t3[r2] = n2;
              continue;
            }
            if ("string" == typeof n2) {
              t3[r2] = new a(n2);
              continue;
            }
            s("object" == typeof n2 && !Array.isArray(n2), "Invalid message for", r2);
            const i = r2;
            for (r2 in t3[i] = t3[i] || {}, n2) {
              const e4 = n2[r2];
              "root" === r2 || a.isTemplate(e4) ? t3[i][r2] = e4 : (s("string" == typeof e4, "Invalid message for", r2, "in", i), t3[i][r2] = new a(e4));
            }
          }
          return t3;
        }, t2.decompile = function(e3) {
          const t3 = {};
          for (let r2 in e3) {
            const s2 = e3[r2];
            if ("root" === r2) {
              t3.root = s2;
              continue;
            }
            if (a.isTemplate(s2)) {
              t3[r2] = s2.describe({ compact: true });
              continue;
            }
            const n2 = r2;
            for (r2 in t3[n2] = {}, s2) {
              const e4 = s2[r2];
              "root" !== r2 ? t3[n2][r2] = e4.describe({ compact: true }) : t3[n2].root = e4;
            }
          }
          return t3;
        }, t2.merge = function(e3, r2) {
          if (!e3)
            return t2.compile(r2);
          if (!r2)
            return e3;
          if ("string" == typeof r2)
            return new a(r2);
          if (a.isTemplate(r2))
            return r2;
          const i = n(e3);
          for (let e4 in r2) {
            const t3 = r2[e4];
            if ("root" === e4 || a.isTemplate(t3)) {
              i[e4] = t3;
              continue;
            }
            if ("string" == typeof t3) {
              i[e4] = new a(t3);
              continue;
            }
            s("object" == typeof t3 && !Array.isArray(t3), "Invalid message for", e4);
            const n2 = e4;
            for (e4 in i[n2] = i[n2] || {}, t3) {
              const r3 = t3[e4];
              "root" === e4 || a.isTemplate(r3) ? i[n2][e4] = r3 : (s("string" == typeof r3, "Invalid message for", e4, "in", n2), i[n2][e4] = new a(r3));
            }
          }
          return i;
        };
      }, 2294: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(8160), a = r(6133), i = {};
        t2.Ids = i.Ids = class {
          constructor() {
            this._byId = /* @__PURE__ */ new Map(), this._byKey = /* @__PURE__ */ new Map(), this._schemaChain = false;
          }
          clone() {
            const e3 = new i.Ids();
            return e3._byId = new Map(this._byId), e3._byKey = new Map(this._byKey), e3._schemaChain = this._schemaChain, e3;
          }
          concat(e3) {
            e3._schemaChain && (this._schemaChain = true);
            for (const [t3, r2] of e3._byId.entries())
              s(!this._byKey.has(t3), "Schema id conflicts with existing key:", t3), this._byId.set(t3, r2);
            for (const [t3, r2] of e3._byKey.entries())
              s(!this._byId.has(t3), "Schema key conflicts with existing id:", t3), this._byKey.set(t3, r2);
          }
          fork(e3, t3, r2) {
            const a2 = this._collect(e3);
            a2.push({ schema: r2 });
            const o = a2.shift();
            let l = { id: o.id, schema: t3(o.schema) };
            s(n.isSchema(l.schema), "adjuster function failed to return a joi schema type");
            for (const e4 of a2)
              l = { id: e4.id, schema: i.fork(e4.schema, l.id, l.schema) };
            return l.schema;
          }
          labels(e3) {
            let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            const r2 = e3[0], s2 = this._get(r2);
            if (!s2)
              return [...t3, ...e3].join(".");
            const n2 = e3.slice(1);
            return t3 = [...t3, s2.schema._flags.label || r2], n2.length ? s2.schema._ids.labels(n2, t3) : t3.join(".");
          }
          reach(e3) {
            let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            const r2 = e3[0], n2 = this._get(r2);
            s(n2, "Schema does not contain path", [...t3, ...e3].join("."));
            const a2 = e3.slice(1);
            return a2.length ? n2.schema._ids.reach(a2, [...t3, r2]) : n2.schema;
          }
          register(e3) {
            let { key: t3 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!e3 || !n.isSchema(e3))
              return;
            (e3.$_property("schemaChain") || e3._ids._schemaChain) && (this._schemaChain = true);
            const r2 = e3._flags.id;
            if (r2) {
              const t4 = this._byId.get(r2);
              s(!t4 || t4.schema === e3, "Cannot add different schemas with the same id:", r2), s(!this._byKey.has(r2), "Schema id conflicts with existing key:", r2), this._byId.set(r2, { schema: e3, id: r2 });
            }
            t3 && (s(!this._byKey.has(t3), "Schema already contains key:", t3), s(!this._byId.has(t3), "Schema key conflicts with existing id:", t3), this._byKey.set(t3, { schema: e3, id: t3 }));
          }
          reset() {
            this._byId = /* @__PURE__ */ new Map(), this._byKey = /* @__PURE__ */ new Map(), this._schemaChain = false;
          }
          _collect(e3) {
            let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
            const n2 = e3[0], a2 = this._get(n2);
            s(a2, "Schema does not contain path", [...t3, ...e3].join(".")), r2 = [a2, ...r2];
            const i2 = e3.slice(1);
            return i2.length ? a2.schema._ids._collect(i2, [...t3, n2], r2) : r2;
          }
          _get(e3) {
            return this._byId.get(e3) || this._byKey.get(e3);
          }
        }, i.fork = function(e3, r2, s2) {
          const n2 = t2.schema(e3, { each: (e4, t3) => {
            let { key: n3 } = t3;
            if (r2 === (e4._flags.id || n3))
              return s2;
          }, ref: false });
          return n2 ? n2.$_mutateRebuild() : e3;
        }, t2.schema = function(e3, t3) {
          let r2;
          for (const s2 in e3._flags) {
            if ("_" === s2[0])
              continue;
            const n2 = i.scan(e3._flags[s2], { source: "flags", name: s2 }, t3);
            void 0 !== n2 && (r2 = r2 || e3.clone(), r2._flags[s2] = n2);
          }
          for (let s2 = 0; s2 < e3._rules.length; ++s2) {
            const n2 = e3._rules[s2], a2 = i.scan(n2.args, { source: "rules", name: n2.name }, t3);
            if (void 0 !== a2) {
              r2 = r2 || e3.clone();
              const t4 = Object.assign({}, n2);
              t4.args = a2, r2._rules[s2] = t4, r2._singleRules.get(n2.name) === n2 && r2._singleRules.set(n2.name, t4);
            }
          }
          for (const s2 in e3.$_terms) {
            if ("_" === s2[0])
              continue;
            const n2 = i.scan(e3.$_terms[s2], { source: "terms", name: s2 }, t3);
            void 0 !== n2 && (r2 = r2 || e3.clone(), r2.$_terms[s2] = n2);
          }
          return r2;
        }, i.scan = function(e3, t3, r2, s2, o) {
          const l = s2 || [];
          if (null === e3 || "object" != typeof e3)
            return;
          let c;
          if (Array.isArray(e3)) {
            for (let s3 = 0; s3 < e3.length; ++s3) {
              const n2 = "terms" === t3.source && "keys" === t3.name && e3[s3].key, a2 = i.scan(e3[s3], t3, r2, [s3, ...l], n2);
              void 0 !== a2 && (c = c || e3.slice(), c[s3] = a2);
            }
            return c;
          }
          if (false !== r2.schema && n.isSchema(e3) || false !== r2.ref && a.isRef(e3)) {
            const s3 = r2.each(e3, { ...t3, path: l, key: o });
            if (s3 === e3)
              return;
            return s3;
          }
          for (const s3 in e3) {
            if ("_" === s3[0])
              continue;
            const n2 = i.scan(e3[s3], t3, r2, [s3, ...l], o);
            void 0 !== n2 && (c = c || Object.assign({}, e3), c[s3] = n2);
          }
          return c;
        };
      }, 6133: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(8571), a = r(9621), i = r(8160);
        let o;
        const l = { symbol: Symbol("ref"), defaults: { adjust: null, in: false, iterables: null, map: null, separator: ".", type: "value" } };
        t2.create = function(e3) {
          let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          s("string" == typeof e3, "Invalid reference key:", e3), i.assertOptions(t3, ["adjust", "ancestor", "in", "iterables", "map", "prefix", "render", "separator"]), s(!t3.prefix || "object" == typeof t3.prefix, "options.prefix must be of type object");
          const r2 = Object.assign({}, l.defaults, t3);
          delete r2.prefix;
          const n2 = r2.separator, a2 = l.context(e3, n2, t3.prefix);
          if (r2.type = a2.type, e3 = a2.key, "value" === r2.type)
            if (a2.root && (s(!n2 || e3[0] !== n2, "Cannot specify relative path with root prefix"), r2.ancestor = "root", e3 || (e3 = null)), n2 && n2 === e3)
              e3 = null, r2.ancestor = 0;
            else if (void 0 !== r2.ancestor)
              s(!n2 || !e3 || e3[0] !== n2, "Cannot combine prefix with ancestor option");
            else {
              const [t4, s2] = l.ancestor(e3, n2);
              s2 && "" === (e3 = e3.slice(s2)) && (e3 = null), r2.ancestor = t4;
            }
          return r2.path = n2 ? null === e3 ? [] : e3.split(n2) : [e3], new l.Ref(r2);
        }, t2.in = function(e3) {
          let r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return t2.create(e3, { ...r2, in: true });
        }, t2.isRef = function(e3) {
          return !!e3 && !!e3[i.symbols.ref];
        }, l.Ref = class {
          constructor(e3) {
            s("object" == typeof e3, "Invalid reference construction"), i.assertOptions(e3, ["adjust", "ancestor", "in", "iterables", "map", "path", "render", "separator", "type", "depth", "key", "root", "display"]), s([false, void 0].includes(e3.separator) || "string" == typeof e3.separator && 1 === e3.separator.length, "Invalid separator"), s(!e3.adjust || "function" == typeof e3.adjust, "options.adjust must be a function"), s(!e3.map || Array.isArray(e3.map), "options.map must be an array"), s(!e3.map || !e3.adjust, "Cannot set both map and adjust options"), Object.assign(this, l.defaults, e3), s("value" === this.type || void 0 === this.ancestor, "Non-value references cannot reference ancestors"), Array.isArray(this.map) && (this.map = new Map(this.map)), this.depth = this.path.length, this.key = this.path.length ? this.path.join(this.separator) : null, this.root = this.path[0], this.updateDisplay();
          }
          resolve(e3, t3, r2, n2) {
            let a2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
            return s(!this.in || a2.in, "Invalid in() reference usage"), "global" === this.type ? this._resolve(r2.context, t3, a2) : "local" === this.type ? this._resolve(n2, t3, a2) : this.ancestor ? "root" === this.ancestor ? this._resolve(t3.ancestors[t3.ancestors.length - 1], t3, a2) : (s(this.ancestor <= t3.ancestors.length, "Invalid reference exceeds the schema root:", this.display), this._resolve(t3.ancestors[this.ancestor - 1], t3, a2)) : this._resolve(e3, t3, a2);
          }
          _resolve(e3, t3, r2) {
            let s2;
            if ("value" === this.type && t3.mainstay.shadow && false !== r2.shadow && (s2 = t3.mainstay.shadow.get(this.absolute(t3))), void 0 === s2 && (s2 = a(e3, this.path, { iterables: this.iterables, functions: true })), this.adjust && (s2 = this.adjust(s2)), this.map) {
              const e4 = this.map.get(s2);
              void 0 !== e4 && (s2 = e4);
            }
            return t3.mainstay && t3.mainstay.tracer.resolve(t3, this, s2), s2;
          }
          toString() {
            return this.display;
          }
          absolute(e3) {
            return [...e3.path.slice(0, -this.ancestor), ...this.path];
          }
          clone() {
            return new l.Ref(this);
          }
          describe() {
            const e3 = { path: this.path };
            "value" !== this.type && (e3.type = this.type), "." !== this.separator && (e3.separator = this.separator), "value" === this.type && 1 !== this.ancestor && (e3.ancestor = this.ancestor), this.map && (e3.map = [...this.map]);
            for (const t3 of ["adjust", "iterables", "render"])
              null !== this[t3] && void 0 !== this[t3] && (e3[t3] = this[t3]);
            return false !== this.in && (e3.in = true), { ref: e3 };
          }
          updateDisplay() {
            const e3 = null !== this.key ? this.key : "";
            if ("value" !== this.type)
              return void (this.display = `ref:${this.type}:${e3}`);
            if (!this.separator)
              return void (this.display = `ref:${e3}`);
            if (!this.ancestor)
              return void (this.display = `ref:${this.separator}${e3}`);
            if ("root" === this.ancestor)
              return void (this.display = `ref:root:${e3}`);
            if (1 === this.ancestor)
              return void (this.display = `ref:${e3 || ".."}`);
            const t3 = new Array(this.ancestor + 1).fill(this.separator).join("");
            this.display = `ref:${t3}${e3 || ""}`;
          }
        }, l.Ref.prototype[i.symbols.ref] = true, t2.build = function(e3) {
          return "value" === (e3 = Object.assign({}, l.defaults, e3)).type && void 0 === e3.ancestor && (e3.ancestor = 1), new l.Ref(e3);
        }, l.context = function(e3, t3) {
          let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if (e3 = e3.trim(), r2) {
            const s2 = void 0 === r2.global ? "$" : r2.global;
            if (s2 !== t3 && e3.startsWith(s2))
              return { key: e3.slice(s2.length), type: "global" };
            const n2 = void 0 === r2.local ? "#" : r2.local;
            if (n2 !== t3 && e3.startsWith(n2))
              return { key: e3.slice(n2.length), type: "local" };
            const a2 = void 0 === r2.root ? "/" : r2.root;
            if (a2 !== t3 && e3.startsWith(a2))
              return { key: e3.slice(a2.length), type: "value", root: true };
          }
          return { key: e3, type: "value" };
        }, l.ancestor = function(e3, t3) {
          if (!t3)
            return [1, 0];
          if (e3[0] !== t3)
            return [1, 0];
          if (e3[1] !== t3)
            return [0, 1];
          let r2 = 2;
          for (; e3[r2] === t3; )
            ++r2;
          return [r2 - 1, r2];
        }, t2.toSibling = 0, t2.toParent = 1, t2.Manager = class {
          constructor() {
            this.refs = [];
          }
          register(e3, s2) {
            if (e3)
              if (s2 = void 0 === s2 ? t2.toParent : s2, Array.isArray(e3))
                for (const t3 of e3)
                  this.register(t3, s2);
              else if (i.isSchema(e3))
                for (const t3 of e3._refs.refs)
                  t3.ancestor - s2 >= 0 && this.refs.push({ ancestor: t3.ancestor - s2, root: t3.root });
              else
                t2.isRef(e3) && "value" === e3.type && e3.ancestor - s2 >= 0 && this.refs.push({ ancestor: e3.ancestor - s2, root: e3.root }), o = o || r(3328), o.isTemplate(e3) && this.register(e3.refs(), s2);
          }
          get length() {
            return this.refs.length;
          }
          clone() {
            const e3 = new t2.Manager();
            return e3.refs = n(this.refs), e3;
          }
          reset() {
            this.refs = [];
          }
          roots() {
            return this.refs.filter((e3) => !e3.ancestor).map((e3) => e3.root);
          }
        };
      }, 3378: (e2, t2, r) => {
        "use strict";
        const s = r(5107), n = {};
        n.wrap = s.string().min(1).max(2).allow(false), t2.preferences = s.object({ allowUnknown: s.boolean(), abortEarly: s.boolean(), artifacts: s.boolean(), cache: s.boolean(), context: s.object(), convert: s.boolean(), dateFormat: s.valid("date", "iso", "string", "time", "utc"), debug: s.boolean(), errors: { escapeHtml: s.boolean(), label: s.valid("path", "key", false), language: [s.string(), s.object().ref()], render: s.boolean(), stack: s.boolean(), wrap: { label: n.wrap, array: n.wrap, string: n.wrap } }, externals: s.boolean(), messages: s.object(), noDefaults: s.boolean(), nonEnumerables: s.boolean(), presence: s.valid("required", "optional", "forbidden"), skipFunctions: s.boolean(), stripUnknown: s.object({ arrays: s.boolean(), objects: s.boolean() }).or("arrays", "objects").allow(true, false), warnings: s.boolean() }).strict(), n.nameRx = /^[a-zA-Z0-9]\w*$/, n.rule = s.object({ alias: s.array().items(s.string().pattern(n.nameRx)).single(), args: s.array().items(s.string(), s.object({ name: s.string().pattern(n.nameRx).required(), ref: s.boolean(), assert: s.alternatives([s.function(), s.object().schema()]).conditional("ref", { is: true, then: s.required() }), normalize: s.function(), message: s.string().when("assert", { is: s.function(), then: s.required() }) })), convert: s.boolean(), manifest: s.boolean(), method: s.function().allow(false), multi: s.boolean(), validate: s.function() }), t2.extension = s.object({ type: s.alternatives([s.string(), s.object().regex()]).required(), args: s.function(), cast: s.object().pattern(n.nameRx, s.object({ from: s.function().maxArity(1).required(), to: s.function().minArity(1).maxArity(2).required() })), base: s.object().schema().when("type", { is: s.object().regex(), then: s.forbidden() }), coerce: [s.function().maxArity(3), s.object({ method: s.function().maxArity(3).required(), from: s.array().items(s.string()).single() })], flags: s.object().pattern(n.nameRx, s.object({ setter: s.string(), default: s.any() })), manifest: { build: s.function().arity(2) }, messages: [s.object(), s.string()], modifiers: s.object().pattern(n.nameRx, s.function().minArity(1).maxArity(2)), overrides: s.object().pattern(n.nameRx, s.function()), prepare: s.function().maxArity(3), rebuild: s.function().arity(1), rules: s.object().pattern(n.nameRx, n.rule), terms: s.object().pattern(n.nameRx, s.object({ init: s.array().allow(null).required(), manifest: s.object().pattern(/.+/, [s.valid("schema", "single"), s.object({ mapped: s.object({ from: s.string().required(), to: s.string().required() }).required() })]) })), validate: s.function().maxArity(3) }).strict(), t2.extensions = s.array().items(s.object(), s.function().arity(1)).strict(), n.desc = { buffer: s.object({ buffer: s.string() }), func: s.object({ function: s.function().required(), options: { literal: true } }), override: s.object({ override: true }), ref: s.object({ ref: s.object({ type: s.valid("value", "global", "local"), path: s.array().required(), separator: s.string().length(1).allow(false), ancestor: s.number().min(0).integer().allow("root"), map: s.array().items(s.array().length(2)).min(1), adjust: s.function(), iterables: s.boolean(), in: s.boolean(), render: s.boolean() }).required() }), regex: s.object({ regex: s.string().min(3) }), special: s.object({ special: s.valid("deep").required() }), template: s.object({ template: s.string().required(), options: s.object() }), value: s.object({ value: s.alternatives([s.object(), s.array()]).required() }) }, n.desc.entity = s.alternatives([s.array().items(s.link("...")), s.boolean(), s.function(), s.number(), s.string(), n.desc.buffer, n.desc.func, n.desc.ref, n.desc.regex, n.desc.special, n.desc.template, n.desc.value, s.link("/")]), n.desc.values = s.array().items(null, s.boolean(), s.function(), s.number().allow(1 / 0, -1 / 0), s.string().allow(""), s.symbol(), n.desc.buffer, n.desc.func, n.desc.override, n.desc.ref, n.desc.regex, n.desc.template, n.desc.value), n.desc.messages = s.object().pattern(/.+/, [s.string(), n.desc.template, s.object().pattern(/.+/, [s.string(), n.desc.template])]), t2.description = s.object({ type: s.string().required(), flags: s.object({ cast: s.string(), default: s.any(), description: s.string(), empty: s.link("/"), failover: n.desc.entity, id: s.string(), label: s.string(), only: true, presence: ["optional", "required", "forbidden"], result: ["raw", "strip"], strip: s.boolean(), unit: s.string() }).unknown(), preferences: { allowUnknown: s.boolean(), abortEarly: s.boolean(), artifacts: s.boolean(), cache: s.boolean(), convert: s.boolean(), dateFormat: ["date", "iso", "string", "time", "utc"], errors: { escapeHtml: s.boolean(), label: ["path", "key"], language: [s.string(), n.desc.ref], wrap: { label: n.wrap, array: n.wrap } }, externals: s.boolean(), messages: n.desc.messages, noDefaults: s.boolean(), nonEnumerables: s.boolean(), presence: ["required", "optional", "forbidden"], skipFunctions: s.boolean(), stripUnknown: s.object({ arrays: s.boolean(), objects: s.boolean() }).or("arrays", "objects").allow(true, false), warnings: s.boolean() }, allow: n.desc.values, invalid: n.desc.values, rules: s.array().min(1).items({ name: s.string().required(), args: s.object().min(1), keep: s.boolean(), message: [s.string(), n.desc.messages], warn: s.boolean() }), keys: s.object().pattern(/.*/, s.link("/")), link: n.desc.ref }).pattern(/^[a-z]\w*$/, s.any());
      }, 493: (e2, t2, r) => {
        "use strict";
        const s = r(8571), n = r(9621), a = r(8160), i = { value: Symbol("value") };
        e2.exports = i.State = class {
          constructor(e3, t3, r2) {
            this.path = e3, this.ancestors = t3, this.mainstay = r2.mainstay, this.schemas = r2.schemas, this.debug = null;
          }
          localize(e3) {
            let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            const s2 = new i.State(e3, t3, this);
            return r2 && s2.schemas && (s2.schemas = [i.schemas(r2), ...s2.schemas]), s2;
          }
          nest(e3, t3) {
            const r2 = new i.State(this.path, this.ancestors, this);
            return r2.schemas = r2.schemas && [i.schemas(e3), ...r2.schemas], r2.debug = t3, r2;
          }
          shadow(e3, t3) {
            this.mainstay.shadow = this.mainstay.shadow || new i.Shadow(), this.mainstay.shadow.set(this.path, e3, t3);
          }
          snapshot() {
            this.mainstay.shadow && (this._snapshot = s(this.mainstay.shadow.node(this.path)));
          }
          restore() {
            this.mainstay.shadow && (this.mainstay.shadow.override(this.path, this._snapshot), this._snapshot = void 0);
          }
        }, i.schemas = function(e3) {
          return a.isSchema(e3) ? { schema: e3 } : e3;
        }, i.Shadow = class {
          constructor() {
            this._values = null;
          }
          set(e3, t3, r2) {
            if (!e3.length)
              return;
            if ("strip" === r2 && "number" == typeof e3[e3.length - 1])
              return;
            this._values = this._values || /* @__PURE__ */ new Map();
            let s2 = this._values;
            for (let t4 = 0; t4 < e3.length; ++t4) {
              const r3 = e3[t4];
              let n2 = s2.get(r3);
              n2 || (n2 = /* @__PURE__ */ new Map(), s2.set(r3, n2)), s2 = n2;
            }
            s2[i.value] = t3;
          }
          get(e3) {
            const t3 = this.node(e3);
            if (t3)
              return t3[i.value];
          }
          node(e3) {
            if (this._values)
              return n(this._values, e3, { iterables: true });
          }
          override(e3, t3) {
            if (!this._values)
              return;
            const r2 = e3.slice(0, -1), s2 = e3[e3.length - 1], a2 = n(this._values, r2, { iterables: true });
            t3 ? a2.set(s2, t3) : a2 && a2.delete(s2);
          }
        };
      }, 3328: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(8571), a = r(5277), i = r(1447), o = r(8160), l = r(6354), c = r(6133), u = { symbol: Symbol("template"), opens: new Array(1e3).join("\0"), closes: new Array(1e3).join(""), dateFormat: { date: Date.prototype.toDateString, iso: Date.prototype.toISOString, string: Date.prototype.toString, time: Date.prototype.toTimeString, utc: Date.prototype.toUTCString } };
        e2.exports = u.Template = class {
          constructor(e3, t3) {
            s("string" == typeof e3, "Template source must be a string"), s(!e3.includes("\0") && !e3.includes(""), "Template source cannot contain reserved control characters"), this.source = e3, this.rendered = e3, this._template = null, this._settings = n(t3), this._parse();
          }
          _parse() {
            if (!this.source.includes("{"))
              return;
            const e3 = u.encode(this.source), t3 = u.split(e3);
            let r2 = false;
            const s2 = [], n2 = t3.shift();
            n2 && s2.push(n2);
            for (const e4 of t3) {
              const t4 = "{" !== e4[0], n3 = t4 ? "}" : "}}", a2 = e4.indexOf(n3);
              if (-1 === a2 || "{" === e4[1]) {
                s2.push(`{${u.decode(e4)}`);
                continue;
              }
              let i2 = e4.slice(t4 ? 0 : 1, a2);
              const o2 = ":" === i2[0];
              o2 && (i2 = i2.slice(1));
              const l2 = this._ref(u.decode(i2), { raw: t4, wrapped: o2 });
              s2.push(l2), "string" != typeof l2 && (r2 = true);
              const c2 = e4.slice(a2 + n3.length);
              c2 && s2.push(u.decode(c2));
            }
            r2 ? this._template = s2 : this.rendered = s2.join("");
          }
          static date(e3, t3) {
            return u.dateFormat[t3.dateFormat].call(e3);
          }
          describe() {
            let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (!this._settings && e3.compact)
              return this.source;
            const t3 = { template: this.source };
            return this._settings && (t3.options = this._settings), t3;
          }
          static build(e3) {
            return new u.Template(e3.template, e3.options);
          }
          isDynamic() {
            return !!this._template;
          }
          static isTemplate(e3) {
            return !!e3 && !!e3[o.symbols.template];
          }
          refs() {
            if (!this._template)
              return;
            const e3 = [];
            for (const t3 of this._template)
              "string" != typeof t3 && e3.push(...t3.refs);
            return e3;
          }
          resolve(e3, t3, r2, s2) {
            return this._template && 1 === this._template.length ? this._part(this._template[0], e3, t3, r2, s2, {}) : this.render(e3, t3, r2, s2);
          }
          _part(e3) {
            for (var t3 = arguments.length, r2 = new Array(t3 > 1 ? t3 - 1 : 0), s2 = 1; s2 < t3; s2++)
              r2[s2 - 1] = arguments[s2];
            return e3.ref ? e3.ref.resolve(...r2) : e3.formula.evaluate(r2);
          }
          render(e3, t3, r2, s2) {
            let n2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
            if (!this.isDynamic())
              return this.rendered;
            const i2 = [];
            for (const o2 of this._template)
              if ("string" == typeof o2)
                i2.push(o2);
              else {
                const l2 = this._part(o2, e3, t3, r2, s2, n2), c2 = u.stringify(l2, e3, t3, r2, s2, n2);
                if (void 0 !== c2) {
                  const e4 = o2.raw || false === (n2.errors && n2.errors.escapeHtml) ? c2 : a(c2);
                  i2.push(u.wrap(e4, o2.wrapped && r2.errors.wrap.label));
                }
              }
            return i2.join("");
          }
          _ref(e3, t3) {
            let { raw: r2, wrapped: s2 } = t3;
            const n2 = [], a2 = (e4) => {
              const t4 = c.create(e4, this._settings);
              return n2.push(t4), (e5) => t4.resolve(...e5);
            };
            try {
              var o2 = new i.Parser(e3, { reference: a2, functions: u.functions, constants: u.constants });
            } catch (t4) {
              throw t4.message = `Invalid template variable "${e3}" fails due to: ${t4.message}`, t4;
            }
            if (o2.single) {
              if ("reference" === o2.single.type) {
                const e4 = n2[0];
                return { ref: e4, raw: r2, refs: n2, wrapped: s2 || "local" === e4.type && "label" === e4.key };
              }
              return u.stringify(o2.single.value);
            }
            return { formula: o2, raw: r2, refs: n2 };
          }
          toString() {
            return this.source;
          }
        }, u.Template.prototype[o.symbols.template] = true, u.Template.prototype.isImmutable = true, u.encode = function(e3) {
          return e3.replace(/\\(\{+)/g, (e4, t3) => u.opens.slice(0, t3.length)).replace(/\\(\}+)/g, (e4, t3) => u.closes.slice(0, t3.length));
        }, u.decode = function(e3) {
          return e3.replace(/\u0000/g, "{").replace(/\u0001/g, "}");
        }, u.split = function(e3) {
          const t3 = [];
          let r2 = "";
          for (let s2 = 0; s2 < e3.length; ++s2) {
            const n2 = e3[s2];
            if ("{" === n2) {
              let n3 = "";
              for (; s2 + 1 < e3.length && "{" === e3[s2 + 1]; )
                n3 += "{", ++s2;
              t3.push(r2), r2 = n3;
            } else
              r2 += n2;
          }
          return t3.push(r2), t3;
        }, u.wrap = function(e3, t3) {
          return t3 ? 1 === t3.length ? `${t3}${e3}${t3}` : `${t3[0]}${e3}${t3[1]}` : e3;
        }, u.stringify = function(e3, t3, r2, s2, n2) {
          let a2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
          const i2 = typeof e3, o2 = s2 && s2.errors && s2.errors.wrap || {};
          let l2 = false;
          if (c.isRef(e3) && e3.render && (l2 = e3.in, e3 = e3.resolve(t3, r2, s2, n2, { in: e3.in, ...a2 })), null === e3)
            return "null";
          if ("string" === i2)
            return u.wrap(e3, a2.arrayItems && o2.string);
          if ("number" === i2 || "function" === i2 || "symbol" === i2)
            return e3.toString();
          if ("object" !== i2)
            return JSON.stringify(e3);
          if (e3 instanceof Date)
            return u.Template.date(e3, s2);
          if (e3 instanceof Map) {
            const t4 = [];
            for (const [r3, s3] of e3.entries())
              t4.push(`${r3.toString()} -> ${s3.toString()}`);
            e3 = t4;
          }
          if (!Array.isArray(e3))
            return e3.toString();
          const f = [];
          for (const i3 of e3)
            f.push(u.stringify(i3, t3, r2, s2, n2, { arrayItems: true, ...a2 }));
          return u.wrap(f.join(", "), !l2 && o2.array);
        }, u.constants = { true: true, false: false, null: null, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5 }, u.functions = { if: (e3, t3, r2) => e3 ? t3 : r2, length: (e3) => "string" == typeof e3 ? e3.length : e3 && "object" == typeof e3 ? Array.isArray(e3) ? e3.length : Object.keys(e3).length : null, msg(e3) {
          const [t3, r2, s2, n2, a2] = this, i2 = a2.messages;
          if (!i2)
            return "";
          const o2 = l.template(t3, i2[0], e3, r2, s2) || l.template(t3, i2[1], e3, r2, s2);
          return o2 ? o2.render(t3, r2, s2, n2, a2) : "";
        }, number: (e3) => "number" == typeof e3 ? e3 : "string" == typeof e3 ? parseFloat(e3) : "boolean" == typeof e3 ? e3 ? 1 : 0 : e3 instanceof Date ? e3.getTime() : null };
      }, 4946: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(1687), a = r(8068), i = r(8160), o = r(3292), l = r(6354), c = r(6133), u = {};
        e2.exports = a.extend({ type: "alternatives", flags: { match: { default: "any" } }, terms: { matches: { init: [], register: c.toSibling } }, args(e3) {
          for (var t3 = arguments.length, r2 = new Array(t3 > 1 ? t3 - 1 : 0), s2 = 1; s2 < t3; s2++)
            r2[s2 - 1] = arguments[s2];
          return 1 === r2.length && Array.isArray(r2[0]) ? e3.try(...r2[0]) : e3.try(...r2);
        }, validate(e3, t3) {
          const { schema: r2, error: s2, state: a2, prefs: i2 } = t3;
          if (r2._flags.match) {
            const t4 = [], o3 = [];
            for (let s3 = 0; s3 < r2.$_terms.matches.length; ++s3) {
              const n2 = r2.$_terms.matches[s3], l2 = a2.nest(n2.schema, `match.${s3}`);
              l2.snapshot();
              const c3 = n2.schema.$_validate(e3, l2, i2);
              c3.errors ? (o3.push(c3.errors), l2.restore()) : t4.push(c3.value);
            }
            if (0 === t4.length)
              return { errors: s2("alternatives.any", { details: o3.map((e4) => l.details(e4, { override: false })) }) };
            if ("one" === r2._flags.match)
              return 1 === t4.length ? { value: t4[0] } : { errors: s2("alternatives.one") };
            if (t4.length !== r2.$_terms.matches.length)
              return { errors: s2("alternatives.all", { details: o3.map((e4) => l.details(e4, { override: false })) }) };
            const c2 = (e4) => e4.$_terms.matches.some((e5) => "object" === e5.schema.type || "alternatives" === e5.schema.type && c2(e5.schema));
            return c2(r2) ? { value: t4.reduce((e4, t5) => n(e4, t5, { mergeArrays: false })) } : { value: t4[t4.length - 1] };
          }
          const o2 = [];
          for (let t4 = 0; t4 < r2.$_terms.matches.length; ++t4) {
            const s3 = r2.$_terms.matches[t4];
            if (s3.schema) {
              const r3 = a2.nest(s3.schema, `match.${t4}`);
              r3.snapshot();
              const n3 = s3.schema.$_validate(e3, r3, i2);
              if (!n3.errors)
                return n3;
              r3.restore(), o2.push({ schema: s3.schema, reports: n3.errors });
              continue;
            }
            const n2 = s3.ref ? s3.ref.resolve(e3, a2, i2) : e3, l2 = s3.is ? [s3] : s3.switch;
            for (let r3 = 0; r3 < l2.length; ++r3) {
              const o3 = l2[r3], { is: c2, then: u2, otherwise: f } = o3, h = `match.${t4}${s3.switch ? "." + r3 : ""}`;
              if (c2.$_match(n2, a2.nest(c2, `${h}.is`), i2)) {
                if (u2)
                  return u2.$_validate(e3, a2.nest(u2, `${h}.then`), i2);
              } else if (f)
                return f.$_validate(e3, a2.nest(f, `${h}.otherwise`), i2);
            }
          }
          return u.errors(o2, t3);
        }, rules: { conditional: { method(e3, t3) {
          s(!this._flags._endedSwitch, "Unreachable condition"), s(!this._flags.match, "Cannot combine match mode", this._flags.match, "with conditional rule"), s(void 0 === t3.break, "Cannot use break option with alternatives conditional");
          const r2 = this.clone(), n2 = o.when(r2, e3, t3), a2 = n2.is ? [n2] : n2.switch;
          for (const e4 of a2)
            if (e4.then && e4.otherwise) {
              r2.$_setFlag("_endedSwitch", true, { clone: false });
              break;
            }
          return r2.$_terms.matches.push(n2), r2.$_mutateRebuild();
        } }, match: { method(e3) {
          if (s(["any", "one", "all"].includes(e3), "Invalid alternatives match mode", e3), "any" !== e3)
            for (const t3 of this.$_terms.matches)
              s(t3.schema, "Cannot combine match mode", e3, "with conditional rules");
          return this.$_setFlag("match", e3);
        } }, try: { method() {
          for (var e3 = arguments.length, t3 = new Array(e3), r2 = 0; r2 < e3; r2++)
            t3[r2] = arguments[r2];
          s(t3.length, "Missing alternative schemas"), i.verifyFlat(t3, "try"), s(!this._flags._endedSwitch, "Unreachable condition");
          const n2 = this.clone();
          for (const e4 of t3)
            n2.$_terms.matches.push({ schema: n2.$_compile(e4) });
          return n2.$_mutateRebuild();
        } } }, overrides: { label(e3) {
          return this.$_parent("label", e3).$_modify({ each: (t3, r2) => "is" !== r2.path[0] ? t3.label(e3) : void 0, ref: false });
        } }, rebuild(e3) {
          e3.$_modify({ each: (t3) => {
            i.isSchema(t3) && "array" === t3.type && e3.$_setFlag("_arrayItems", true, { clone: false });
          } });
        }, manifest: { build(e3, t3) {
          if (t3.matches)
            for (const r2 of t3.matches) {
              const { schema: t4, ref: s2, is: n2, not: a2, then: i2, otherwise: o2 } = r2;
              e3 = t4 ? e3.try(t4) : s2 ? e3.conditional(s2, { is: n2, then: i2, not: a2, otherwise: o2, switch: r2.switch }) : e3.conditional(n2, { then: i2, otherwise: o2 });
            }
          return e3;
        } }, messages: { "alternatives.all": "{{#label}} does not match all of the required types", "alternatives.any": "{{#label}} does not match any of the allowed types", "alternatives.match": "{{#label}} does not match any of the allowed types", "alternatives.one": "{{#label}} matches more than one allowed type", "alternatives.types": "{{#label}} must be one of {{#types}}" } }), u.errors = function(e3, t3) {
          let { error: r2, state: s2 } = t3;
          if (!e3.length)
            return { errors: r2("alternatives.any") };
          if (1 === e3.length)
            return { errors: e3[0].reports };
          const n2 = /* @__PURE__ */ new Set(), a2 = [];
          for (const { reports: t4, schema: i2 } of e3) {
            if (t4.length > 1)
              return u.unmatched(e3, r2);
            const o2 = t4[0];
            if (o2 instanceof l.Report == 0)
              return u.unmatched(e3, r2);
            if (o2.state.path.length !== s2.path.length) {
              a2.push({ type: i2.type, report: o2 });
              continue;
            }
            if ("any.only" === o2.code) {
              for (const e4 of o2.local.valids)
                n2.add(e4);
              continue;
            }
            const [c2, f] = o2.code.split(".");
            "base" === f ? n2.add(c2) : a2.push({ type: i2.type, report: o2 });
          }
          return a2.length ? 1 === a2.length ? { errors: a2[0].report } : u.unmatched(e3, r2) : { errors: r2("alternatives.types", { types: [...n2] }) };
        }, u.unmatched = function(e3, t3) {
          const r2 = [];
          for (const t4 of e3)
            r2.push(...t4.reports);
          return { errors: t3("alternatives.match", l.details(r2, { override: false })) };
        };
      }, 8068: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(7629), a = r(8160), i = r(6914);
        e2.exports = n.extend({ type: "any", flags: { only: { default: false } }, terms: { alterations: { init: null }, examples: { init: null }, externals: { init: null }, metas: { init: [] }, notes: { init: [] }, shared: { init: null }, tags: { init: [] }, whens: { init: null } }, rules: { custom: { method(e3, t3) {
          return s("function" == typeof e3, "Method must be a function"), s(void 0 === t3 || t3 && "string" == typeof t3, "Description must be a non-empty string"), this.$_addRule({ name: "custom", args: { method: e3, description: t3 } });
        }, validate(e3, t3, r2) {
          let { method: s2 } = r2;
          try {
            return s2(e3, t3);
          } catch (e4) {
            return t3.error("any.custom", { error: e4 });
          }
        }, args: ["method", "description"], multi: true }, messages: { method(e3) {
          return this.prefs({ messages: e3 });
        } }, shared: { method(e3) {
          s(a.isSchema(e3) && e3._flags.id, "Schema must be a schema with an id");
          const t3 = this.clone();
          return t3.$_terms.shared = t3.$_terms.shared || [], t3.$_terms.shared.push(e3), t3.$_mutateRegister(e3), t3;
        } }, warning: { method(e3, t3) {
          return s(e3 && "string" == typeof e3, "Invalid warning code"), this.$_addRule({ name: "warning", args: { code: e3, local: t3 }, warn: true });
        }, validate(e3, t3, r2) {
          let { code: s2, local: n2 } = r2;
          return t3.error(s2, n2);
        }, args: ["code", "local"], multi: true } }, modifiers: { keep(e3) {
          let t3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          e3.keep = t3;
        }, message(e3, t3) {
          e3.message = i.compile(t3);
        }, warn(e3) {
          let t3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          e3.warn = t3;
        } }, manifest: { build(e3, t3) {
          for (const r2 in t3) {
            const s2 = t3[r2];
            if (["examples", "externals", "metas", "notes", "tags"].includes(r2))
              for (const t4 of s2)
                e3 = e3[r2.slice(0, -1)](t4);
            else if ("alterations" !== r2)
              if ("whens" !== r2) {
                if ("shared" === r2)
                  for (const t4 of s2)
                    e3 = e3.shared(t4);
              } else
                for (const t4 of s2) {
                  const { ref: r3, is: s3, not: n2, then: a2, otherwise: i2, concat: o } = t4;
                  e3 = o ? e3.concat(o) : r3 ? e3.when(r3, { is: s3, not: n2, then: a2, otherwise: i2, switch: t4.switch, break: t4.break }) : e3.when(s3, { then: a2, otherwise: i2, break: t4.break });
                }
            else {
              const t4 = {};
              for (const { target: e4, adjuster: r3 } of s2)
                t4[e4] = r3;
              e3 = e3.alter(t4);
            }
          }
          return e3;
        } }, messages: { "any.custom": "{{#label}} failed custom validation because {{#error.message}}", "any.default": "{{#label}} threw an error when running default method", "any.failover": "{{#label}} threw an error when running failover method", "any.invalid": "{{#label}} contains an invalid value", "any.only": '{{#label}} must be {if(#valids.length == 1, "", "one of ")}{{#valids}}', "any.ref": "{{#label}} {{#arg}} references {{:#ref}} which {{#reason}}", "any.required": "{{#label}} is required", "any.unknown": "{{#label}} is not allowed" } });
      }, 546: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(9474), a = r(9621), i = r(8068), o = r(8160), l = r(3292), c = {};
        e2.exports = i.extend({ type: "array", flags: { single: { default: false }, sparse: { default: false } }, terms: { items: { init: [], manifest: "schema" }, ordered: { init: [], manifest: "schema" }, _exclusions: { init: [] }, _inclusions: { init: [] }, _requireds: { init: [] } }, coerce: { from: "object", method(e3, t3) {
          let { schema: r2, state: s2, prefs: n2 } = t3;
          if (!Array.isArray(e3))
            return;
          const a2 = r2.$_getRule("sort");
          return a2 ? c.sort(r2, e3, a2.args.options, s2, n2) : void 0;
        } }, validate(e3, t3) {
          let { schema: r2, error: s2 } = t3;
          if (!Array.isArray(e3)) {
            if (r2._flags.single) {
              const t4 = [e3];
              return t4[o.symbols.arraySingle] = true, { value: t4 };
            }
            return { errors: s2("array.base") };
          }
          if (r2.$_getRule("items") || r2.$_terms.externals)
            return { value: e3.slice() };
        }, rules: { has: { method(e3) {
          e3 = this.$_compile(e3, { appendPath: true });
          const t3 = this.$_addRule({ name: "has", args: { schema: e3 } });
          return t3.$_mutateRegister(e3), t3;
        }, validate(e3, t3, r2) {
          let { state: s2, prefs: n2, error: a2 } = t3, { schema: i2 } = r2;
          const o2 = [e3, ...s2.ancestors];
          for (let t4 = 0; t4 < e3.length; ++t4) {
            const r3 = s2.localize([...s2.path, t4], o2, i2);
            if (i2.$_match(e3[t4], r3, n2))
              return e3;
          }
          const l2 = i2._flags.label;
          return l2 ? a2("array.hasKnown", { patternLabel: l2 }) : a2("array.hasUnknown", null);
        }, multi: true }, items: { method() {
          for (var e3 = arguments.length, t3 = new Array(e3), r2 = 0; r2 < e3; r2++)
            t3[r2] = arguments[r2];
          o.verifyFlat(t3, "items");
          const s2 = this.$_addRule("items");
          for (let e4 = 0; e4 < t3.length; ++e4) {
            const r3 = o.tryWithPath(() => this.$_compile(t3[e4]), e4, { append: true });
            s2.$_terms.items.push(r3);
          }
          return s2.$_mutateRebuild();
        }, validate(e3, t3) {
          let { schema: r2, error: s2, state: n2, prefs: a2, errorsArray: i2 } = t3;
          const l2 = r2.$_terms._requireds.slice(), u = r2.$_terms.ordered.slice(), f = [...r2.$_terms._inclusions, ...l2], h = !e3[o.symbols.arraySingle];
          delete e3[o.symbols.arraySingle];
          const d = i2();
          let m = e3.length;
          for (let t4 = 0; t4 < m; ++t4) {
            const i3 = e3[t4];
            let o2 = false, p = false;
            const g = h ? t4 : new Number(t4), y = [...n2.path, g];
            if (!r2._flags.sparse && void 0 === i3) {
              if (d.push(s2("array.sparse", { key: g, path: y, pos: t4, value: void 0 }, n2.localize(y))), a2.abortEarly)
                return d;
              u.shift();
              continue;
            }
            const b = [e3, ...n2.ancestors];
            for (const e4 of r2.$_terms._exclusions)
              if (e4.$_match(i3, n2.localize(y, b, e4), a2, { presence: "ignore" })) {
                if (d.push(s2("array.excludes", { pos: t4, value: i3 }, n2.localize(y))), a2.abortEarly)
                  return d;
                o2 = true, u.shift();
                break;
              }
            if (o2)
              continue;
            if (r2.$_terms.ordered.length) {
              if (u.length) {
                const o3 = u.shift(), l3 = o3.$_validate(i3, n2.localize(y, b, o3), a2);
                if (l3.errors) {
                  if (d.push(...l3.errors), a2.abortEarly)
                    return d;
                } else if ("strip" === o3._flags.result)
                  c.fastSplice(e3, t4), --t4, --m;
                else {
                  if (!r2._flags.sparse && void 0 === l3.value) {
                    if (d.push(s2("array.sparse", { key: g, path: y, pos: t4, value: void 0 }, n2.localize(y))), a2.abortEarly)
                      return d;
                    continue;
                  }
                  e3[t4] = l3.value;
                }
                continue;
              }
              if (!r2.$_terms.items.length) {
                if (d.push(s2("array.orderedLength", { pos: t4, limit: r2.$_terms.ordered.length })), a2.abortEarly)
                  return d;
                break;
              }
            }
            const v = [];
            let _ = l2.length;
            for (let o3 = 0; o3 < _; ++o3) {
              const u2 = n2.localize(y, b, l2[o3]);
              u2.snapshot();
              const f2 = l2[o3].$_validate(i3, u2, a2);
              if (v[o3] = f2, !f2.errors) {
                if (e3[t4] = f2.value, p = true, c.fastSplice(l2, o3), --o3, --_, !r2._flags.sparse && void 0 === f2.value && (d.push(s2("array.sparse", { key: g, path: y, pos: t4, value: void 0 }, n2.localize(y))), a2.abortEarly))
                  return d;
                break;
              }
              u2.restore();
            }
            if (p)
              continue;
            const w = a2.stripUnknown && !!a2.stripUnknown.arrays || false;
            _ = f.length;
            for (const u2 of f) {
              let f2;
              const h2 = l2.indexOf(u2);
              if (-1 !== h2)
                f2 = v[h2];
              else {
                const l3 = n2.localize(y, b, u2);
                if (l3.snapshot(), f2 = u2.$_validate(i3, l3, a2), !f2.errors) {
                  "strip" === u2._flags.result ? (c.fastSplice(e3, t4), --t4, --m) : r2._flags.sparse || void 0 !== f2.value ? e3[t4] = f2.value : (d.push(s2("array.sparse", { key: g, path: y, pos: t4, value: void 0 }, n2.localize(y))), o2 = true), p = true;
                  break;
                }
                l3.restore();
              }
              if (1 === _) {
                if (w) {
                  c.fastSplice(e3, t4), --t4, --m, p = true;
                  break;
                }
                if (d.push(...f2.errors), a2.abortEarly)
                  return d;
                o2 = true;
                break;
              }
            }
            if (!o2 && (r2.$_terms._inclusions.length || r2.$_terms._requireds.length) && !p) {
              if (w) {
                c.fastSplice(e3, t4), --t4, --m;
                continue;
              }
              if (d.push(s2("array.includes", { pos: t4, value: i3 }, n2.localize(y))), a2.abortEarly)
                return d;
            }
          }
          return l2.length && c.fillMissedErrors(r2, d, l2, e3, n2, a2), u.length && (c.fillOrderedErrors(r2, d, u, e3, n2, a2), d.length || c.fillDefault(u, e3, n2, a2)), d.length ? d : e3;
        }, priority: true, manifest: false }, length: { method(e3) {
          return this.$_addRule({ name: "length", args: { limit: e3 }, operator: "=" });
        }, validate(e3, t3, r2, s2) {
          let { limit: n2 } = r2, { name: a2, operator: i2, args: l2 } = s2;
          return o.compare(e3.length, n2, i2) ? e3 : t3.error("array." + a2, { limit: l2.limit, value: e3 });
        }, args: [{ name: "limit", ref: true, assert: o.limit, message: "must be a positive integer" }] }, max: { method(e3) {
          return this.$_addRule({ name: "max", method: "length", args: { limit: e3 }, operator: "<=" });
        } }, min: { method(e3) {
          return this.$_addRule({ name: "min", method: "length", args: { limit: e3 }, operator: ">=" });
        } }, ordered: { method() {
          for (var e3 = arguments.length, t3 = new Array(e3), r2 = 0; r2 < e3; r2++)
            t3[r2] = arguments[r2];
          o.verifyFlat(t3, "ordered");
          const s2 = this.$_addRule("items");
          for (let e4 = 0; e4 < t3.length; ++e4) {
            const r3 = o.tryWithPath(() => this.$_compile(t3[e4]), e4, { append: true });
            c.validateSingle(r3, s2), s2.$_mutateRegister(r3), s2.$_terms.ordered.push(r3);
          }
          return s2.$_mutateRebuild();
        } }, single: { method(e3) {
          const t3 = void 0 === e3 || !!e3;
          return s(!t3 || !this._flags._arrayItems, "Cannot specify single rule when array has array items"), this.$_setFlag("single", t3);
        } }, sort: { method() {
          let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          o.assertOptions(e3, ["by", "order"]);
          const t3 = { order: e3.order || "ascending" };
          return e3.by && (t3.by = l.ref(e3.by, { ancestor: 0 }), s(!t3.by.ancestor, "Cannot sort by ancestor")), this.$_addRule({ name: "sort", args: { options: t3 } });
        }, validate(e3, t3, r2) {
          let { error: s2, state: n2, prefs: a2, schema: i2 } = t3, { options: o2 } = r2;
          const { value: l2, errors: u } = c.sort(i2, e3, o2, n2, a2);
          if (u)
            return u;
          for (let t4 = 0; t4 < e3.length; ++t4)
            if (e3[t4] !== l2[t4])
              return s2("array.sort", { order: o2.order, by: o2.by ? o2.by.key : "value" });
          return e3;
        }, convert: true }, sparse: { method(e3) {
          const t3 = void 0 === e3 || !!e3;
          return this._flags.sparse === t3 ? this : (t3 ? this.clone() : this.$_addRule("items")).$_setFlag("sparse", t3, { clone: false });
        } }, unique: { method(e3) {
          let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          s(!e3 || "function" == typeof e3 || "string" == typeof e3, "comparator must be a function or a string"), o.assertOptions(t3, ["ignoreUndefined", "separator"]);
          const r2 = { name: "unique", args: { options: t3, comparator: e3 } };
          if (e3)
            if ("string" == typeof e3) {
              const s2 = o.default(t3.separator, ".");
              r2.path = s2 ? e3.split(s2) : [e3];
            } else
              r2.comparator = e3;
          return this.$_addRule(r2);
        }, validate(e3, t3, r2, i2) {
          let { state: o2, error: l2, schema: c2 } = t3, { comparator: u, options: f } = r2, { comparator: h, path: d } = i2;
          const m = { string: /* @__PURE__ */ Object.create(null), number: /* @__PURE__ */ Object.create(null), undefined: /* @__PURE__ */ Object.create(null), boolean: /* @__PURE__ */ Object.create(null), object: /* @__PURE__ */ new Map(), function: /* @__PURE__ */ new Map(), custom: /* @__PURE__ */ new Map() }, p = h || n, g = f.ignoreUndefined;
          for (let t4 = 0; t4 < e3.length; ++t4) {
            const r3 = d ? a(e3[t4], d) : e3[t4], n2 = h ? m.custom : m[typeof r3];
            if (s(n2, "Failed to find unique map container for type", typeof r3), n2 instanceof Map) {
              const s2 = n2.entries();
              let a2;
              for (; !(a2 = s2.next()).done; )
                if (p(a2.value[0], r3)) {
                  const r4 = o2.localize([...o2.path, t4], [e3, ...o2.ancestors]), s3 = { pos: t4, value: e3[t4], dupePos: a2.value[1], dupeValue: e3[a2.value[1]] };
                  return d && (s3.path = u), l2("array.unique", s3, r4);
                }
              n2.set(r3, t4);
            } else {
              if ((!g || void 0 !== r3) && void 0 !== n2[r3]) {
                const s2 = { pos: t4, value: e3[t4], dupePos: n2[r3], dupeValue: e3[n2[r3]] };
                return d && (s2.path = u), l2("array.unique", s2, o2.localize([...o2.path, t4], [e3, ...o2.ancestors]));
              }
              n2[r3] = t4;
            }
          }
          return e3;
        }, args: ["comparator", "options"], multi: true } }, cast: { set: { from: Array.isArray, to: (e3, t3) => new Set(e3) } }, rebuild(e3) {
          e3.$_terms._inclusions = [], e3.$_terms._exclusions = [], e3.$_terms._requireds = [];
          for (const t3 of e3.$_terms.items)
            c.validateSingle(t3, e3), "required" === t3._flags.presence ? e3.$_terms._requireds.push(t3) : "forbidden" === t3._flags.presence ? e3.$_terms._exclusions.push(t3) : e3.$_terms._inclusions.push(t3);
          for (const t3 of e3.$_terms.ordered)
            c.validateSingle(t3, e3);
        }, manifest: { build: (e3, t3) => (t3.items && (e3 = e3.items(...t3.items)), t3.ordered && (e3 = e3.ordered(...t3.ordered)), e3) }, messages: { "array.base": "{{#label}} must be an array", "array.excludes": "{{#label}} contains an excluded value", "array.hasKnown": "{{#label}} does not contain at least one required match for type {:#patternLabel}", "array.hasUnknown": "{{#label}} does not contain at least one required match", "array.includes": "{{#label}} does not match any of the allowed types", "array.includesRequiredBoth": "{{#label}} does not contain {{#knownMisses}} and {{#unknownMisses}} other required value(s)", "array.includesRequiredKnowns": "{{#label}} does not contain {{#knownMisses}}", "array.includesRequiredUnknowns": "{{#label}} does not contain {{#unknownMisses}} required value(s)", "array.length": "{{#label}} must contain {{#limit}} items", "array.max": "{{#label}} must contain less than or equal to {{#limit}} items", "array.min": "{{#label}} must contain at least {{#limit}} items", "array.orderedLength": "{{#label}} must contain at most {{#limit}} items", "array.sort": "{{#label}} must be sorted in {#order} order by {{#by}}", "array.sort.mismatching": "{{#label}} cannot be sorted due to mismatching types", "array.sort.unsupported": "{{#label}} cannot be sorted due to unsupported type {#type}", "array.sparse": "{{#label}} must not be a sparse array item", "array.unique": "{{#label}} contains a duplicate value" } }), c.fillMissedErrors = function(e3, t3, r2, s2, n2, a2) {
          const i2 = [];
          let o2 = 0;
          for (const e4 of r2) {
            const t4 = e4._flags.label;
            t4 ? i2.push(t4) : ++o2;
          }
          i2.length ? o2 ? t3.push(e3.$_createError("array.includesRequiredBoth", s2, { knownMisses: i2, unknownMisses: o2 }, n2, a2)) : t3.push(e3.$_createError("array.includesRequiredKnowns", s2, { knownMisses: i2 }, n2, a2)) : t3.push(e3.$_createError("array.includesRequiredUnknowns", s2, { unknownMisses: o2 }, n2, a2));
        }, c.fillOrderedErrors = function(e3, t3, r2, s2, n2, a2) {
          const i2 = [];
          for (const e4 of r2)
            "required" === e4._flags.presence && i2.push(e4);
          i2.length && c.fillMissedErrors(e3, t3, i2, s2, n2, a2);
        }, c.fillDefault = function(e3, t3, r2, s2) {
          const n2 = [];
          let a2 = true;
          for (let i2 = e3.length - 1; i2 >= 0; --i2) {
            const o2 = e3[i2], l2 = [t3, ...r2.ancestors], c2 = o2.$_validate(void 0, r2.localize(r2.path, l2, o2), s2).value;
            if (a2) {
              if (void 0 === c2)
                continue;
              a2 = false;
            }
            n2.unshift(c2);
          }
          n2.length && t3.push(...n2);
        }, c.fastSplice = function(e3, t3) {
          let r2 = t3;
          for (; r2 < e3.length; )
            e3[r2++] = e3[r2];
          --e3.length;
        }, c.validateSingle = function(e3, t3) {
          ("array" === e3.type || e3._flags._arrayItems) && (s(!t3._flags.single, "Cannot specify array item with single rule enabled"), t3.$_setFlag("_arrayItems", true, { clone: false }));
        }, c.sort = function(e3, t3, r2, s2, n2) {
          const a2 = "ascending" === r2.order ? 1 : -1, i2 = -1 * a2, o2 = a2, l2 = (l3, u) => {
            let f = c.compare(l3, u, i2, o2);
            if (null !== f)
              return f;
            if (r2.by && (l3 = r2.by.resolve(l3, s2, n2), u = r2.by.resolve(u, s2, n2)), f = c.compare(l3, u, i2, o2), null !== f)
              return f;
            const h = typeof l3;
            if (h !== typeof u)
              throw e3.$_createError("array.sort.mismatching", t3, null, s2, n2);
            if ("number" !== h && "string" !== h)
              throw e3.$_createError("array.sort.unsupported", t3, { type: h }, s2, n2);
            return "number" === h ? (l3 - u) * a2 : l3 < u ? i2 : o2;
          };
          try {
            return { value: t3.slice().sort(l2) };
          } catch (e4) {
            return { errors: e4 };
          }
        }, c.compare = function(e3, t3, r2, s2) {
          return e3 === t3 ? 0 : void 0 === e3 ? 1 : void 0 === t3 ? -1 : null === e3 ? s2 : null === t3 ? r2 : null;
        };
      }, 4937: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(8068), a = r(8160), i = r(2036), o = { isBool: function(e3) {
          return "boolean" == typeof e3;
        } };
        e2.exports = n.extend({ type: "boolean", flags: { sensitive: { default: false } }, terms: { falsy: { init: null, manifest: "values" }, truthy: { init: null, manifest: "values" } }, coerce(e3, t3) {
          let { schema: r2 } = t3;
          if ("boolean" != typeof e3) {
            if ("string" == typeof e3) {
              const t4 = r2._flags.sensitive ? e3 : e3.toLowerCase();
              e3 = "true" === t4 || "false" !== t4 && e3;
            }
            return "boolean" != typeof e3 && (e3 = r2.$_terms.truthy && r2.$_terms.truthy.has(e3, null, null, !r2._flags.sensitive) || (!r2.$_terms.falsy || !r2.$_terms.falsy.has(e3, null, null, !r2._flags.sensitive)) && e3), { value: e3 };
          }
        }, validate(e3, t3) {
          let { error: r2 } = t3;
          if ("boolean" != typeof e3)
            return { value: e3, errors: r2("boolean.base") };
        }, rules: { truthy: { method() {
          for (var e3 = arguments.length, t3 = new Array(e3), r2 = 0; r2 < e3; r2++)
            t3[r2] = arguments[r2];
          a.verifyFlat(t3, "truthy");
          const n2 = this.clone();
          n2.$_terms.truthy = n2.$_terms.truthy || new i();
          for (let e4 = 0; e4 < t3.length; ++e4) {
            const r3 = t3[e4];
            s(void 0 !== r3, "Cannot call truthy with undefined"), n2.$_terms.truthy.add(r3);
          }
          return n2;
        } }, falsy: { method() {
          for (var e3 = arguments.length, t3 = new Array(e3), r2 = 0; r2 < e3; r2++)
            t3[r2] = arguments[r2];
          a.verifyFlat(t3, "falsy");
          const n2 = this.clone();
          n2.$_terms.falsy = n2.$_terms.falsy || new i();
          for (let e4 = 0; e4 < t3.length; ++e4) {
            const r3 = t3[e4];
            s(void 0 !== r3, "Cannot call falsy with undefined"), n2.$_terms.falsy.add(r3);
          }
          return n2;
        } }, sensitive: { method() {
          let e3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return this.$_setFlag("sensitive", e3);
        } } }, cast: { number: { from: o.isBool, to: (e3, t3) => e3 ? 1 : 0 }, string: { from: o.isBool, to: (e3, t3) => e3 ? "true" : "false" } }, manifest: { build: (e3, t3) => (t3.truthy && (e3 = e3.truthy(...t3.truthy)), t3.falsy && (e3 = e3.falsy(...t3.falsy)), e3) }, messages: { "boolean.base": "{{#label}} must be a boolean" } });
      }, 7500: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(8068), a = r(8160), i = r(3328), o = { isDate: function(e3) {
          return e3 instanceof Date;
        } };
        e2.exports = n.extend({ type: "date", coerce: { from: ["number", "string"], method(e3, t3) {
          let { schema: r2 } = t3;
          return { value: o.parse(e3, r2._flags.format) || e3 };
        } }, validate(e3, t3) {
          let { schema: r2, error: s2, prefs: n2 } = t3;
          if (e3 instanceof Date && !isNaN(e3.getTime()))
            return;
          const a2 = r2._flags.format;
          return n2.convert && a2 && "string" == typeof e3 ? { value: e3, errors: s2("date.format", { format: a2 }) } : { value: e3, errors: s2("date.base") };
        }, rules: { compare: { method: false, validate(e3, t3, r2, s2) {
          let { date: n2 } = r2, { name: i2, operator: o2, args: l } = s2;
          const c = "now" === n2 ? Date.now() : n2.getTime();
          return a.compare(e3.getTime(), c, o2) ? e3 : t3.error("date." + i2, { limit: l.date, value: e3 });
        }, args: [{ name: "date", ref: true, normalize: (e3) => "now" === e3 ? e3 : o.parse(e3), assert: (e3) => null !== e3, message: "must have a valid date format" }] }, format: { method(e3) {
          return s(["iso", "javascript", "unix"].includes(e3), "Unknown date format", e3), this.$_setFlag("format", e3);
        } }, greater: { method(e3) {
          return this.$_addRule({ name: "greater", method: "compare", args: { date: e3 }, operator: ">" });
        } }, iso: { method() {
          return this.format("iso");
        } }, less: { method(e3) {
          return this.$_addRule({ name: "less", method: "compare", args: { date: e3 }, operator: "<" });
        } }, max: { method(e3) {
          return this.$_addRule({ name: "max", method: "compare", args: { date: e3 }, operator: "<=" });
        } }, min: { method(e3) {
          return this.$_addRule({ name: "min", method: "compare", args: { date: e3 }, operator: ">=" });
        } }, timestamp: { method() {
          let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "javascript";
          return s(["javascript", "unix"].includes(e3), '"type" must be one of "javascript, unix"'), this.format(e3);
        } } }, cast: { number: { from: o.isDate, to: (e3, t3) => e3.getTime() }, string: { from: o.isDate, to(e3, t3) {
          let { prefs: r2 } = t3;
          return i.date(e3, r2);
        } } }, messages: { "date.base": "{{#label}} must be a valid date", "date.format": '{{#label}} must be in {msg("date.format." + #format) || #format} format', "date.greater": "{{#label}} must be greater than {{:#limit}}", "date.less": "{{#label}} must be less than {{:#limit}}", "date.max": "{{#label}} must be less than or equal to {{:#limit}}", "date.min": "{{#label}} must be greater than or equal to {{:#limit}}", "date.format.iso": "ISO 8601 date", "date.format.javascript": "timestamp or number of milliseconds", "date.format.unix": "timestamp or number of seconds" } }), o.parse = function(e3, t3) {
          if (e3 instanceof Date)
            return e3;
          if ("string" != typeof e3 && (isNaN(e3) || !isFinite(e3)))
            return null;
          if (/^\s*$/.test(e3))
            return null;
          if ("iso" === t3)
            return a.isIsoDate(e3) ? o.date(e3.toString()) : null;
          const r2 = e3;
          if ("string" == typeof e3 && /^[+-]?\d+(\.\d+)?$/.test(e3) && (e3 = parseFloat(e3)), t3) {
            if ("javascript" === t3)
              return o.date(1 * e3);
            if ("unix" === t3)
              return o.date(1e3 * e3);
            if ("string" == typeof r2)
              return null;
          }
          return o.date(e3);
        }, o.date = function(e3) {
          const t3 = new Date(e3);
          return isNaN(t3.getTime()) ? null : t3;
        };
      }, 390: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(7824);
        e2.exports = n.extend({ type: "function", properties: { typeof: "function" }, rules: { arity: { method(e3) {
          return s(Number.isSafeInteger(e3) && e3 >= 0, "n must be a positive integer"), this.$_addRule({ name: "arity", args: { n: e3 } });
        }, validate(e3, t3, r2) {
          let { n: s2 } = r2;
          return e3.length === s2 ? e3 : t3.error("function.arity", { n: s2 });
        } }, class: { method() {
          return this.$_addRule("class");
        }, validate: (e3, t3) => /^\s*class\s/.test(e3.toString()) ? e3 : t3.error("function.class", { value: e3 }) }, minArity: { method(e3) {
          return s(Number.isSafeInteger(e3) && e3 > 0, "n must be a strict positive integer"), this.$_addRule({ name: "minArity", args: { n: e3 } });
        }, validate(e3, t3, r2) {
          let { n: s2 } = r2;
          return e3.length >= s2 ? e3 : t3.error("function.minArity", { n: s2 });
        } }, maxArity: { method(e3) {
          return s(Number.isSafeInteger(e3) && e3 >= 0, "n must be a positive integer"), this.$_addRule({ name: "maxArity", args: { n: e3 } });
        }, validate(e3, t3, r2) {
          let { n: s2 } = r2;
          return e3.length <= s2 ? e3 : t3.error("function.maxArity", { n: s2 });
        } } }, messages: { "function.arity": "{{#label}} must have an arity of {{#n}}", "function.class": "{{#label}} must be a class", "function.maxArity": "{{#label}} must have an arity lesser or equal to {{#n}}", "function.minArity": "{{#label}} must have an arity greater or equal to {{#n}}" } });
      }, 7824: (e2, t2, r) => {
        "use strict";
        const s = r(978), n = r(375), a = r(8571), i = r(3652), o = r(8068), l = r(8160), c = r(3292), u = r(6354), f = r(6133), h = r(3328), d = { renameDefaults: { alias: false, multiple: false, override: false } };
        e2.exports = o.extend({ type: "_keys", properties: { typeof: "object" }, flags: { unknown: { default: false } }, terms: { dependencies: { init: null }, keys: { init: null, manifest: { mapped: { from: "schema", to: "key" } } }, patterns: { init: null }, renames: { init: null } }, args: (e3, t3) => e3.keys(t3), validate(e3, t3) {
          let { schema: r2, error: s2, state: n2, prefs: a2 } = t3;
          if (!e3 || typeof e3 !== r2.$_property("typeof") || Array.isArray(e3))
            return { value: e3, errors: s2("object.base", { type: r2.$_property("typeof") }) };
          if (!(r2.$_terms.renames || r2.$_terms.dependencies || r2.$_terms.keys || r2.$_terms.patterns || r2.$_terms.externals))
            return;
          e3 = d.clone(e3, a2);
          const i2 = [];
          if (r2.$_terms.renames && !d.rename(r2, e3, n2, a2, i2))
            return { value: e3, errors: i2 };
          if (!r2.$_terms.keys && !r2.$_terms.patterns && !r2.$_terms.dependencies)
            return { value: e3, errors: i2 };
          const o2 = new Set(Object.keys(e3));
          if (r2.$_terms.keys) {
            const t4 = [e3, ...n2.ancestors];
            for (const s3 of r2.$_terms.keys) {
              const r3 = s3.key, l2 = e3[r3];
              o2.delete(r3);
              const c2 = n2.localize([...n2.path, r3], t4, s3), u2 = s3.schema.$_validate(l2, c2, a2);
              if (u2.errors) {
                if (a2.abortEarly)
                  return { value: e3, errors: u2.errors };
                void 0 !== u2.value && (e3[r3] = u2.value), i2.push(...u2.errors);
              } else
                "strip" === s3.schema._flags.result || void 0 === u2.value && void 0 !== l2 ? delete e3[r3] : void 0 !== u2.value && (e3[r3] = u2.value);
            }
          }
          if (o2.size || r2._flags._hasPatternMatch) {
            const t4 = d.unknown(r2, e3, o2, i2, n2, a2);
            if (t4)
              return t4;
          }
          if (r2.$_terms.dependencies)
            for (const t4 of r2.$_terms.dependencies) {
              if (null !== t4.key && false === d.isPresent(t4.options)(t4.key.resolve(e3, n2, a2, null, { shadow: false })))
                continue;
              const s3 = d.dependencies[t4.rel](r2, t4, e3, n2, a2);
              if (s3) {
                const t5 = r2.$_createError(s3.code, e3, s3.context, n2, a2);
                if (a2.abortEarly)
                  return { value: e3, errors: t5 };
                i2.push(t5);
              }
            }
          return { value: e3, errors: i2 };
        }, rules: { and: { method() {
          for (var e3 = arguments.length, t3 = new Array(e3), r2 = 0; r2 < e3; r2++)
            t3[r2] = arguments[r2];
          return l.verifyFlat(t3, "and"), d.dependency(this, "and", null, t3);
        } }, append: { method(e3) {
          return null == e3 || 0 === Object.keys(e3).length ? this : this.keys(e3);
        } }, assert: { method(e3, t3, r2) {
          h.isTemplate(e3) || (e3 = c.ref(e3)), n(void 0 === r2 || "string" == typeof r2, "Message must be a string"), t3 = this.$_compile(t3, { appendPath: true });
          const s2 = this.$_addRule({ name: "assert", args: { subject: e3, schema: t3, message: r2 } });
          return s2.$_mutateRegister(e3), s2.$_mutateRegister(t3), s2;
        }, validate(e3, t3, r2) {
          let { error: s2, prefs: n2, state: a2 } = t3, { subject: i2, schema: o2, message: l2 } = r2;
          const c2 = i2.resolve(e3, a2, n2), u2 = f.isRef(i2) ? i2.absolute(a2) : [];
          return o2.$_match(c2, a2.localize(u2, [e3, ...a2.ancestors], o2), n2) ? e3 : s2("object.assert", { subject: i2, message: l2 });
        }, args: ["subject", "schema", "message"], multi: true }, instance: { method(e3, t3) {
          return n("function" == typeof e3, "constructor must be a function"), t3 = t3 || e3.name, this.$_addRule({ name: "instance", args: { constructor: e3, name: t3 } });
        }, validate(e3, t3, r2) {
          let { constructor: s2, name: n2 } = r2;
          return e3 instanceof s2 ? e3 : t3.error("object.instance", { type: n2, value: e3 });
        }, args: ["constructor", "name"] }, keys: { method(e3) {
          n(void 0 === e3 || "object" == typeof e3, "Object schema must be a valid object"), n(!l.isSchema(e3), "Object schema cannot be a joi schema");
          const t3 = this.clone();
          if (e3)
            if (Object.keys(e3).length) {
              t3.$_terms.keys = t3.$_terms.keys ? t3.$_terms.keys.filter((t4) => !e3.hasOwnProperty(t4.key)) : new d.Keys();
              for (const r2 in e3)
                l.tryWithPath(() => t3.$_terms.keys.push({ key: r2, schema: this.$_compile(e3[r2]) }), r2);
            } else
              t3.$_terms.keys = new d.Keys();
          else
            t3.$_terms.keys = null;
          return t3.$_mutateRebuild();
        } }, length: { method(e3) {
          return this.$_addRule({ name: "length", args: { limit: e3 }, operator: "=" });
        }, validate(e3, t3, r2, s2) {
          let { limit: n2 } = r2, { name: a2, operator: i2, args: o2 } = s2;
          return l.compare(Object.keys(e3).length, n2, i2) ? e3 : t3.error("object." + a2, { limit: o2.limit, value: e3 });
        }, args: [{ name: "limit", ref: true, assert: l.limit, message: "must be a positive integer" }] }, max: { method(e3) {
          return this.$_addRule({ name: "max", method: "length", args: { limit: e3 }, operator: "<=" });
        } }, min: { method(e3) {
          return this.$_addRule({ name: "min", method: "length", args: { limit: e3 }, operator: ">=" });
        } }, nand: { method() {
          for (var e3 = arguments.length, t3 = new Array(e3), r2 = 0; r2 < e3; r2++)
            t3[r2] = arguments[r2];
          return l.verifyFlat(t3, "nand"), d.dependency(this, "nand", null, t3);
        } }, or: { method() {
          for (var e3 = arguments.length, t3 = new Array(e3), r2 = 0; r2 < e3; r2++)
            t3[r2] = arguments[r2];
          return l.verifyFlat(t3, "or"), d.dependency(this, "or", null, t3);
        } }, oxor: { method() {
          for (var e3 = arguments.length, t3 = new Array(e3), r2 = 0; r2 < e3; r2++)
            t3[r2] = arguments[r2];
          return d.dependency(this, "oxor", null, t3);
        } }, pattern: { method(e3, t3) {
          let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const s2 = e3 instanceof RegExp;
          s2 || (e3 = this.$_compile(e3, { appendPath: true })), n(void 0 !== t3, "Invalid rule"), l.assertOptions(r2, ["fallthrough", "matches"]), s2 && n(!e3.flags.includes("g") && !e3.flags.includes("y"), "pattern should not use global or sticky mode"), t3 = this.$_compile(t3, { appendPath: true });
          const a2 = this.clone();
          a2.$_terms.patterns = a2.$_terms.patterns || [];
          const i2 = { [s2 ? "regex" : "schema"]: e3, rule: t3 };
          return r2.matches && (i2.matches = this.$_compile(r2.matches), "array" !== i2.matches.type && (i2.matches = i2.matches.$_root.array().items(i2.matches)), a2.$_mutateRegister(i2.matches), a2.$_setFlag("_hasPatternMatch", true, { clone: false })), r2.fallthrough && (i2.fallthrough = true), a2.$_terms.patterns.push(i2), a2.$_mutateRegister(t3), a2;
        } }, ref: { method() {
          return this.$_addRule("ref");
        }, validate: (e3, t3) => f.isRef(e3) ? e3 : t3.error("object.refType", { value: e3 }) }, regex: { method() {
          return this.$_addRule("regex");
        }, validate: (e3, t3) => e3 instanceof RegExp ? e3 : t3.error("object.regex", { value: e3 }) }, rename: { method(e3, t3) {
          let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          n("string" == typeof e3 || e3 instanceof RegExp, "Rename missing the from argument"), n("string" == typeof t3 || t3 instanceof h, "Invalid rename to argument"), n(t3 !== e3, "Cannot rename key to same name:", e3), l.assertOptions(r2, ["alias", "ignoreUndefined", "override", "multiple"]);
          const a2 = this.clone();
          a2.$_terms.renames = a2.$_terms.renames || [];
          for (const t4 of a2.$_terms.renames)
            n(t4.from !== e3, "Cannot rename the same key multiple times");
          return t3 instanceof h && a2.$_mutateRegister(t3), a2.$_terms.renames.push({ from: e3, to: t3, options: s(d.renameDefaults, r2) }), a2;
        } }, schema: { method() {
          let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "any";
          return this.$_addRule({ name: "schema", args: { type: e3 } });
        }, validate(e3, t3, r2) {
          let { type: s2 } = r2;
          return !l.isSchema(e3) || "any" !== s2 && e3.type !== s2 ? t3.error("object.schema", { type: s2 }) : e3;
        } }, unknown: { method(e3) {
          return this.$_setFlag("unknown", false !== e3);
        } }, with: { method(e3, t3) {
          let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return d.dependency(this, "with", e3, t3, r2);
        } }, without: { method(e3, t3) {
          let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return d.dependency(this, "without", e3, t3, r2);
        } }, xor: { method() {
          for (var e3 = arguments.length, t3 = new Array(e3), r2 = 0; r2 < e3; r2++)
            t3[r2] = arguments[r2];
          return l.verifyFlat(t3, "xor"), d.dependency(this, "xor", null, t3);
        } } }, overrides: { default(e3, t3) {
          return void 0 === e3 && (e3 = l.symbols.deepDefault), this.$_parent("default", e3, t3);
        } }, rebuild(e3) {
          if (e3.$_terms.keys) {
            const t3 = new i.Sorter();
            for (const r2 of e3.$_terms.keys)
              l.tryWithPath(() => t3.add(r2, { after: r2.schema.$_rootReferences(), group: r2.key }), r2.key);
            e3.$_terms.keys = new d.Keys(...t3.nodes);
          }
        }, manifest: { build(e3, t3) {
          if (t3.keys && (e3 = e3.keys(t3.keys)), t3.dependencies)
            for (const { rel: r2, key: s2 = null, peers: n2, options: a2 } of t3.dependencies)
              e3 = d.dependency(e3, r2, s2, n2, a2);
          if (t3.patterns)
            for (const { regex: r2, schema: s2, rule: n2, fallthrough: a2, matches: i2 } of t3.patterns)
              e3 = e3.pattern(r2 || s2, n2, { fallthrough: a2, matches: i2 });
          if (t3.renames)
            for (const { from: r2, to: s2, options: n2 } of t3.renames)
              e3 = e3.rename(r2, s2, n2);
          return e3;
        } }, messages: { "object.and": "{{#label}} contains {{#presentWithLabels}} without its required peers {{#missingWithLabels}}", "object.assert": '{{#label}} is invalid because {if(#subject.key, `"` + #subject.key + `" failed to ` + (#message || "pass the assertion test"), #message || "the assertion failed")}', "object.base": "{{#label}} must be of type {{#type}}", "object.instance": "{{#label}} must be an instance of {{:#type}}", "object.length": '{{#label}} must have {{#limit}} key{if(#limit == 1, "", "s")}', "object.max": '{{#label}} must have less than or equal to {{#limit}} key{if(#limit == 1, "", "s")}', "object.min": '{{#label}} must have at least {{#limit}} key{if(#limit == 1, "", "s")}', "object.missing": "{{#label}} must contain at least one of {{#peersWithLabels}}", "object.nand": "{{:#mainWithLabel}} must not exist simultaneously with {{#peersWithLabels}}", "object.oxor": "{{#label}} contains a conflict between optional exclusive peers {{#peersWithLabels}}", "object.pattern.match": "{{#label}} keys failed to match pattern requirements", "object.refType": "{{#label}} must be a Joi reference", "object.regex": "{{#label}} must be a RegExp object", "object.rename.multiple": "{{#label}} cannot rename {{:#from}} because multiple renames are disabled and another key was already renamed to {{:#to}}", "object.rename.override": "{{#label}} cannot rename {{:#from}} because override is disabled and target {{:#to}} exists", "object.schema": "{{#label}} must be a Joi schema of {{#type}} type", "object.unknown": "{{#label}} is not allowed", "object.with": "{{:#mainWithLabel}} missing required peer {{:#peerWithLabel}}", "object.without": "{{:#mainWithLabel}} conflict with forbidden peer {{:#peerWithLabel}}", "object.xor": "{{#label}} contains a conflict between exclusive peers {{#peersWithLabels}}" } }), d.clone = function(e3, t3) {
          if ("object" == typeof e3) {
            if (t3.nonEnumerables)
              return a(e3, { shallow: true });
            const r3 = Object.create(Object.getPrototypeOf(e3));
            return Object.assign(r3, e3), r3;
          }
          const r2 = function() {
            for (var t4 = arguments.length, r3 = new Array(t4), s2 = 0; s2 < t4; s2++)
              r3[s2] = arguments[s2];
            return e3.apply(this, r3);
          };
          return r2.prototype = a(e3.prototype), Object.defineProperty(r2, "name", { value: e3.name, writable: false }), Object.defineProperty(r2, "length", { value: e3.length, writable: false }), Object.assign(r2, e3), r2;
        }, d.dependency = function(e3, t3, r2, s2, a2) {
          n(null === r2 || "string" == typeof r2, t3, "key must be a strings"), a2 || (a2 = s2.length > 1 && "object" == typeof s2[s2.length - 1] ? s2.pop() : {}), l.assertOptions(a2, ["separator", "isPresent"]), s2 = [].concat(s2);
          const i2 = l.default(a2.separator, "."), o2 = [];
          for (const e4 of s2)
            n("string" == typeof e4, t3, "peers must be strings"), o2.push(c.ref(e4, { separator: i2, ancestor: 0, prefix: false }));
          null !== r2 && (r2 = c.ref(r2, { separator: i2, ancestor: 0, prefix: false }));
          const u2 = e3.clone();
          return u2.$_terms.dependencies = u2.$_terms.dependencies || [], u2.$_terms.dependencies.push(new d.Dependency(t3, r2, o2, s2, a2)), u2;
        }, d.dependencies = { and(e3, t3, r2, s2, n2) {
          const a2 = [], i2 = [], o2 = t3.peers.length, l2 = d.isPresent(t3.options);
          for (const e4 of t3.peers)
            false === l2(e4.resolve(r2, s2, n2, null, { shadow: false })) ? a2.push(e4.key) : i2.push(e4.key);
          if (a2.length !== o2 && i2.length !== o2)
            return { code: "object.and", context: { present: i2, presentWithLabels: d.keysToLabels(e3, i2), missing: a2, missingWithLabels: d.keysToLabels(e3, a2) } };
        }, nand(e3, t3, r2, s2, n2) {
          const a2 = [], i2 = d.isPresent(t3.options);
          for (const e4 of t3.peers)
            i2(e4.resolve(r2, s2, n2, null, { shadow: false })) && a2.push(e4.key);
          if (a2.length !== t3.peers.length)
            return;
          const o2 = t3.paths[0], l2 = t3.paths.slice(1);
          return { code: "object.nand", context: { main: o2, mainWithLabel: d.keysToLabels(e3, o2), peers: l2, peersWithLabels: d.keysToLabels(e3, l2) } };
        }, or(e3, t3, r2, s2, n2) {
          const a2 = d.isPresent(t3.options);
          for (const e4 of t3.peers)
            if (a2(e4.resolve(r2, s2, n2, null, { shadow: false })))
              return;
          return { code: "object.missing", context: { peers: t3.paths, peersWithLabels: d.keysToLabels(e3, t3.paths) } };
        }, oxor(e3, t3, r2, s2, n2) {
          const a2 = [], i2 = d.isPresent(t3.options);
          for (const e4 of t3.peers)
            i2(e4.resolve(r2, s2, n2, null, { shadow: false })) && a2.push(e4.key);
          if (!a2.length || 1 === a2.length)
            return;
          const o2 = { peers: t3.paths, peersWithLabels: d.keysToLabels(e3, t3.paths) };
          return o2.present = a2, o2.presentWithLabels = d.keysToLabels(e3, a2), { code: "object.oxor", context: o2 };
        }, with(e3, t3, r2, s2, n2) {
          const a2 = d.isPresent(t3.options);
          for (const i2 of t3.peers)
            if (false === a2(i2.resolve(r2, s2, n2, null, { shadow: false })))
              return { code: "object.with", context: { main: t3.key.key, mainWithLabel: d.keysToLabels(e3, t3.key.key), peer: i2.key, peerWithLabel: d.keysToLabels(e3, i2.key) } };
        }, without(e3, t3, r2, s2, n2) {
          const a2 = d.isPresent(t3.options);
          for (const i2 of t3.peers)
            if (a2(i2.resolve(r2, s2, n2, null, { shadow: false })))
              return { code: "object.without", context: { main: t3.key.key, mainWithLabel: d.keysToLabels(e3, t3.key.key), peer: i2.key, peerWithLabel: d.keysToLabels(e3, i2.key) } };
        }, xor(e3, t3, r2, s2, n2) {
          const a2 = [], i2 = d.isPresent(t3.options);
          for (const e4 of t3.peers)
            i2(e4.resolve(r2, s2, n2, null, { shadow: false })) && a2.push(e4.key);
          if (1 === a2.length)
            return;
          const o2 = { peers: t3.paths, peersWithLabels: d.keysToLabels(e3, t3.paths) };
          return 0 === a2.length ? { code: "object.missing", context: o2 } : (o2.present = a2, o2.presentWithLabels = d.keysToLabels(e3, a2), { code: "object.xor", context: o2 });
        } }, d.keysToLabels = function(e3, t3) {
          return Array.isArray(t3) ? t3.map((t4) => e3.$_mapLabels(t4)) : e3.$_mapLabels(t3);
        }, d.isPresent = function(e3) {
          return "function" == typeof e3.isPresent ? e3.isPresent : (e4) => void 0 !== e4;
        }, d.rename = function(e3, t3, r2, s2, n2) {
          const a2 = {};
          for (const i2 of e3.$_terms.renames) {
            const o2 = [], l2 = "string" != typeof i2.from;
            if (l2)
              for (const e4 in t3) {
                if (void 0 === t3[e4] && i2.options.ignoreUndefined)
                  continue;
                if (e4 === i2.to)
                  continue;
                const r3 = i2.from.exec(e4);
                r3 && o2.push({ from: e4, to: i2.to, match: r3 });
              }
            else
              !Object.prototype.hasOwnProperty.call(t3, i2.from) || void 0 === t3[i2.from] && i2.options.ignoreUndefined || o2.push(i2);
            for (const c2 of o2) {
              const o3 = c2.from;
              let u2 = c2.to;
              if (u2 instanceof h && (u2 = u2.render(t3, r2, s2, c2.match)), o3 !== u2) {
                if (!i2.options.multiple && a2[u2] && (n2.push(e3.$_createError("object.rename.multiple", t3, { from: o3, to: u2, pattern: l2 }, r2, s2)), s2.abortEarly))
                  return false;
                if (Object.prototype.hasOwnProperty.call(t3, u2) && !i2.options.override && !a2[u2] && (n2.push(e3.$_createError("object.rename.override", t3, { from: o3, to: u2, pattern: l2 }, r2, s2)), s2.abortEarly))
                  return false;
                void 0 === t3[o3] ? delete t3[u2] : t3[u2] = t3[o3], a2[u2] = true, i2.options.alias || delete t3[o3];
              }
            }
          }
          return true;
        }, d.unknown = function(e3, t3, r2, s2, n2, a2) {
          if (e3.$_terms.patterns) {
            let i2 = false;
            const o2 = e3.$_terms.patterns.map((e4) => {
              if (e4.matches)
                return i2 = true, [];
            }), l2 = [t3, ...n2.ancestors];
            for (const i3 of r2) {
              const c2 = t3[i3], u2 = [...n2.path, i3];
              for (let f2 = 0; f2 < e3.$_terms.patterns.length; ++f2) {
                const h2 = e3.$_terms.patterns[f2];
                if (h2.regex) {
                  const e4 = h2.regex.test(i3);
                  if (n2.mainstay.tracer.debug(n2, "rule", `pattern.${f2}`, e4 ? "pass" : "error"), !e4)
                    continue;
                } else if (!h2.schema.$_match(i3, n2.nest(h2.schema, `pattern.${f2}`), a2))
                  continue;
                r2.delete(i3);
                const d2 = n2.localize(u2, l2, { schema: h2.rule, key: i3 }), m = h2.rule.$_validate(c2, d2, a2);
                if (m.errors) {
                  if (a2.abortEarly)
                    return { value: t3, errors: m.errors };
                  s2.push(...m.errors);
                }
                if (h2.matches && o2[f2].push(i3), t3[i3] = m.value, !h2.fallthrough)
                  break;
              }
            }
            if (i2)
              for (let r3 = 0; r3 < o2.length; ++r3) {
                const i3 = o2[r3];
                if (!i3)
                  continue;
                const c2 = e3.$_terms.patterns[r3].matches, f2 = n2.localize(n2.path, l2, c2), h2 = c2.$_validate(i3, f2, a2);
                if (h2.errors) {
                  const r4 = u.details(h2.errors, { override: false });
                  r4.matches = i3;
                  const o3 = e3.$_createError("object.pattern.match", t3, r4, n2, a2);
                  if (a2.abortEarly)
                    return { value: t3, errors: o3 };
                  s2.push(o3);
                }
              }
          }
          if (r2.size && (e3.$_terms.keys || e3.$_terms.patterns)) {
            if (a2.stripUnknown && !e3._flags.unknown || a2.skipFunctions) {
              const e4 = !(!a2.stripUnknown || true !== a2.stripUnknown && !a2.stripUnknown.objects);
              for (const s3 of r2)
                e4 ? (delete t3[s3], r2.delete(s3)) : "function" == typeof t3[s3] && r2.delete(s3);
            }
            if (!l.default(e3._flags.unknown, a2.allowUnknown))
              for (const i2 of r2) {
                const r3 = n2.localize([...n2.path, i2], []), o2 = e3.$_createError("object.unknown", t3[i2], { child: i2 }, r3, a2, { flags: false });
                if (a2.abortEarly)
                  return { value: t3, errors: o2 };
                s2.push(o2);
              }
          }
        }, d.Dependency = class {
          constructor(e3, t3, r2, s2, n2) {
            this.rel = e3, this.key = t3, this.peers = r2, this.paths = s2, this.options = n2;
          }
          describe() {
            const e3 = { rel: this.rel, peers: this.paths };
            return null !== this.key && (e3.key = this.key.key), "." !== this.peers[0].separator && (e3.options = { ...e3.options, separator: this.peers[0].separator }), this.options.isPresent && (e3.options = { ...e3.options, isPresent: this.options.isPresent }), e3;
          }
        }, d.Keys = class extends Array {
          concat(e3) {
            const t3 = this.slice(), r2 = /* @__PURE__ */ new Map();
            for (let e4 = 0; e4 < t3.length; ++e4)
              r2.set(t3[e4].key, e4);
            for (const s2 of e3) {
              const e4 = s2.key, n2 = r2.get(e4);
              void 0 !== n2 ? t3[n2] = { key: e4, schema: t3[n2].schema.concat(s2.schema) } : t3.push(s2);
            }
            return t3;
          }
        };
      }, 8785: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(8068), a = r(8160), i = r(3292), o = r(6354), l = {};
        e2.exports = n.extend({ type: "link", properties: { schemaChain: true }, terms: { link: { init: null, manifest: "single", register: false } }, args: (e3, t3) => e3.ref(t3), validate(e3, t3) {
          let { schema: r2, state: n2, prefs: a2 } = t3;
          s(r2.$_terms.link, "Uninitialized link schema");
          const i2 = l.generate(r2, e3, n2, a2), o2 = r2.$_terms.link[0].ref;
          return i2.$_validate(e3, n2.nest(i2, `link:${o2.display}:${i2.type}`), a2);
        }, generate: (e3, t3, r2, s2) => l.generate(e3, t3, r2, s2), rules: { ref: { method(e3) {
          s(!this.$_terms.link, "Cannot reinitialize schema"), e3 = i.ref(e3), s("value" === e3.type || "local" === e3.type, "Invalid reference type:", e3.type), s("local" === e3.type || "root" === e3.ancestor || e3.ancestor > 0, "Link cannot reference itself");
          const t3 = this.clone();
          return t3.$_terms.link = [{ ref: e3 }], t3;
        } }, relative: { method() {
          let e3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return this.$_setFlag("relative", e3);
        } } }, overrides: { concat(e3) {
          s(this.$_terms.link, "Uninitialized link schema"), s(a.isSchema(e3), "Invalid schema object"), s("link" !== e3.type, "Cannot merge type link with another link");
          const t3 = this.clone();
          return t3.$_terms.whens || (t3.$_terms.whens = []), t3.$_terms.whens.push({ concat: e3 }), t3.$_mutateRebuild();
        } }, manifest: { build: (e3, t3) => (s(t3.link, "Invalid link description missing link"), e3.ref(t3.link)) } }), l.generate = function(e3, t3, r2, s2) {
          let n2 = r2.mainstay.links.get(e3);
          if (n2)
            return n2._generate(t3, r2, s2).schema;
          const a2 = e3.$_terms.link[0].ref, { perspective: i2, path: o2 } = l.perspective(a2, r2);
          l.assert(i2, "which is outside of schema boundaries", a2, e3, r2, s2);
          try {
            n2 = o2.length ? i2.$_reach(o2) : i2;
          } catch (t4) {
            l.assert(false, "to non-existing schema", a2, e3, r2, s2);
          }
          return l.assert("link" !== n2.type, "which is another link", a2, e3, r2, s2), e3._flags.relative || r2.mainstay.links.set(e3, n2), n2._generate(t3, r2, s2).schema;
        }, l.perspective = function(e3, t3) {
          if ("local" === e3.type) {
            for (const { schema: r2, key: s2 } of t3.schemas) {
              if ((r2._flags.id || s2) === e3.path[0])
                return { perspective: r2, path: e3.path.slice(1) };
              if (r2.$_terms.shared) {
                for (const t4 of r2.$_terms.shared)
                  if (t4._flags.id === e3.path[0])
                    return { perspective: t4, path: e3.path.slice(1) };
              }
            }
            return { perspective: null, path: null };
          }
          return "root" === e3.ancestor ? { perspective: t3.schemas[t3.schemas.length - 1].schema, path: e3.path } : { perspective: t3.schemas[e3.ancestor] && t3.schemas[e3.ancestor].schema, path: e3.path };
        }, l.assert = function(e3, t3, r2, n2, a2, i2) {
          e3 || s(false, `"${o.label(n2._flags, a2, i2)}" contains link reference "${r2.display}" ${t3}`);
        };
      }, 3832: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(8068), a = r(8160), i = { numberRx: /^\s*[+-]?(?:(?:\d+(?:\.\d*)?)|(?:\.\d+))(?:e([+-]?\d+))?\s*$/i, precisionRx: /(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/, exponentialPartRegex: /[eE][+-]?\d+$/, leadingSignAndZerosRegex: /^[+-]?(0*)?/, dotRegex: /\./, trailingZerosRegex: /0+$/ };
        e2.exports = n.extend({ type: "number", flags: { unsafe: { default: false } }, coerce: { from: "string", method(e3, t3) {
          let { schema: r2, error: s2 } = t3;
          if (!e3.match(i.numberRx))
            return;
          e3 = e3.trim();
          const n2 = { value: parseFloat(e3) };
          if (0 === n2.value && (n2.value = 0), !r2._flags.unsafe)
            if (e3.match(/e/i)) {
              if (i.extractSignificantDigits(e3) !== i.extractSignificantDigits(String(n2.value)))
                return n2.errors = s2("number.unsafe"), n2;
            } else {
              const t4 = n2.value.toString();
              if (t4.match(/e/i))
                return n2;
              if (t4 !== i.normalizeDecimal(e3))
                return n2.errors = s2("number.unsafe"), n2;
            }
          return n2;
        } }, validate(e3, t3) {
          let { schema: r2, error: s2, prefs: n2 } = t3;
          if (e3 === 1 / 0 || e3 === -1 / 0)
            return { value: e3, errors: s2("number.infinity") };
          if (!a.isNumber(e3))
            return { value: e3, errors: s2("number.base") };
          const i2 = { value: e3 };
          if (n2.convert) {
            const e4 = r2.$_getRule("precision");
            if (e4) {
              const t4 = Math.pow(10, e4.args.limit);
              i2.value = Math.round(i2.value * t4) / t4;
            }
          }
          return 0 === i2.value && (i2.value = 0), !r2._flags.unsafe && (e3 > Number.MAX_SAFE_INTEGER || e3 < Number.MIN_SAFE_INTEGER) && (i2.errors = s2("number.unsafe")), i2;
        }, rules: { compare: { method: false, validate(e3, t3, r2, s2) {
          let { limit: n2 } = r2, { name: i2, operator: o, args: l } = s2;
          return a.compare(e3, n2, o) ? e3 : t3.error("number." + i2, { limit: l.limit, value: e3 });
        }, args: [{ name: "limit", ref: true, assert: a.isNumber, message: "must be a number" }] }, greater: { method(e3) {
          return this.$_addRule({ name: "greater", method: "compare", args: { limit: e3 }, operator: ">" });
        } }, integer: { method() {
          return this.$_addRule("integer");
        }, validate: (e3, t3) => Math.trunc(e3) - e3 == 0 ? e3 : t3.error("number.integer") }, less: { method(e3) {
          return this.$_addRule({ name: "less", method: "compare", args: { limit: e3 }, operator: "<" });
        } }, max: { method(e3) {
          return this.$_addRule({ name: "max", method: "compare", args: { limit: e3 }, operator: "<=" });
        } }, min: { method(e3) {
          return this.$_addRule({ name: "min", method: "compare", args: { limit: e3 }, operator: ">=" });
        } }, multiple: { method(e3) {
          return this.$_addRule({ name: "multiple", args: { base: e3 } });
        }, validate(e3, t3, r2, s2) {
          let { base: n2 } = r2;
          return e3 * (1 / n2) % 1 == 0 ? e3 : t3.error("number.multiple", { multiple: s2.args.base, value: e3 });
        }, args: [{ name: "base", ref: true, assert: (e3) => "number" == typeof e3 && isFinite(e3) && e3 > 0, message: "must be a positive number" }], multi: true }, negative: { method() {
          return this.sign("negative");
        } }, port: { method() {
          return this.$_addRule("port");
        }, validate: (e3, t3) => Number.isSafeInteger(e3) && e3 >= 0 && e3 <= 65535 ? e3 : t3.error("number.port") }, positive: { method() {
          return this.sign("positive");
        } }, precision: { method(e3) {
          return s(Number.isSafeInteger(e3), "limit must be an integer"), this.$_addRule({ name: "precision", args: { limit: e3 } });
        }, validate(e3, t3, r2) {
          let { limit: s2 } = r2;
          const n2 = e3.toString().match(i.precisionRx);
          return Math.max((n2[1] ? n2[1].length : 0) - (n2[2] ? parseInt(n2[2], 10) : 0), 0) <= s2 ? e3 : t3.error("number.precision", { limit: s2, value: e3 });
        }, convert: true }, sign: { method(e3) {
          return s(["negative", "positive"].includes(e3), "Invalid sign", e3), this.$_addRule({ name: "sign", args: { sign: e3 } });
        }, validate(e3, t3, r2) {
          let { sign: s2 } = r2;
          return "negative" === s2 && e3 < 0 || "positive" === s2 && e3 > 0 ? e3 : t3.error(`number.${s2}`);
        } }, unsafe: { method() {
          let e3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return s("boolean" == typeof e3, "enabled must be a boolean"), this.$_setFlag("unsafe", e3);
        } } }, cast: { string: { from: (e3) => "number" == typeof e3, to: (e3, t3) => e3.toString() } }, messages: { "number.base": "{{#label}} must be a number", "number.greater": "{{#label}} must be greater than {{#limit}}", "number.infinity": "{{#label}} cannot be infinity", "number.integer": "{{#label}} must be an integer", "number.less": "{{#label}} must be less than {{#limit}}", "number.max": "{{#label}} must be less than or equal to {{#limit}}", "number.min": "{{#label}} must be greater than or equal to {{#limit}}", "number.multiple": "{{#label}} must be a multiple of {{#multiple}}", "number.negative": "{{#label}} must be a negative number", "number.port": "{{#label}} must be a valid port", "number.positive": "{{#label}} must be a positive number", "number.precision": "{{#label}} must have no more than {{#limit}} decimal places", "number.unsafe": "{{#label}} must be a safe number" } }), i.extractSignificantDigits = function(e3) {
          return e3.replace(i.exponentialPartRegex, "").replace(i.dotRegex, "").replace(i.trailingZerosRegex, "").replace(i.leadingSignAndZerosRegex, "");
        }, i.normalizeDecimal = function(e3) {
          return (e3 = e3.replace(/^\+/, "").replace(/\.0*$/, "").replace(/^(-?)\.([^\.]*)$/, "$10.$2").replace(/^(-?)0+([0-9])/, "$1$2")).includes(".") && e3.endsWith("0") && (e3 = e3.replace(/0+$/, "")), "-0" === e3 ? "0" : e3;
        };
      }, 8966: (e2, t2, r) => {
        "use strict";
        const s = r(7824);
        e2.exports = s.extend({ type: "object", cast: { map: { from: (e3) => e3 && "object" == typeof e3, to: (e3, t3) => new Map(Object.entries(e3)) } } });
      }, 7417: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(5380), a = r(1745), i = r(9959), o = r(6064), l = r(9926), c = r(5752), u = r(8068), f = r(8160), h = { tlds: l instanceof Set && { tlds: { allow: l, deny: null } }, base64Regex: { true: { true: /^(?:[\w\-]{2}[\w\-]{2})*(?:[\w\-]{2}==|[\w\-]{3}=)?$/, false: /^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/ }, false: { true: /^(?:[\w\-]{2}[\w\-]{2})*(?:[\w\-]{2}(==)?|[\w\-]{3}=?)?$/, false: /^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}(==)?|[A-Za-z0-9+\/]{3}=?)?$/ } }, dataUriRegex: /^data:[\w+.-]+\/[\w+.-]+;((charset=[\w-]+|base64),)?(.*)$/, hexRegex: /^[a-f0-9]+$/i, ipRegex: i.regex({ cidr: "forbidden" }).regex, isoDurationRegex: /^P(?!$)(\d+Y)?(\d+M)?(\d+W)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?$/, guidBrackets: { "{": "}", "[": "]", "(": ")", "": "" }, guidVersions: { uuidv1: "1", uuidv2: "2", uuidv3: "3", uuidv4: "4", uuidv5: "5" }, guidSeparators: /* @__PURE__ */ new Set([void 0, true, false, "-", ":"]), normalizationForms: ["NFC", "NFD", "NFKC", "NFKD"] };
        e2.exports = u.extend({ type: "string", flags: { insensitive: { default: false }, truncate: { default: false } }, terms: { replacements: { init: null } }, coerce: { from: "string", method(e3, t3) {
          let { schema: r2, state: s2, prefs: n2 } = t3;
          const a2 = r2.$_getRule("normalize");
          a2 && (e3 = e3.normalize(a2.args.form));
          const i2 = r2.$_getRule("case");
          i2 && (e3 = "upper" === i2.args.direction ? e3.toLocaleUpperCase() : e3.toLocaleLowerCase());
          const o2 = r2.$_getRule("trim");
          if (o2 && o2.args.enabled && (e3 = e3.trim()), r2.$_terms.replacements)
            for (const t4 of r2.$_terms.replacements)
              e3 = e3.replace(t4.pattern, t4.replacement);
          const l2 = r2.$_getRule("hex");
          if (l2 && l2.args.options.byteAligned && e3.length % 2 != 0 && (e3 = `0${e3}`), r2.$_getRule("isoDate")) {
            const t4 = h.isoDate(e3);
            t4 && (e3 = t4);
          }
          if (r2._flags.truncate) {
            const t4 = r2.$_getRule("max");
            if (t4) {
              let a3 = t4.args.limit;
              if (f.isResolvable(a3) && (a3 = a3.resolve(e3, s2, n2), !f.limit(a3)))
                return { value: e3, errors: r2.$_createError("any.ref", a3, { ref: t4.args.limit, arg: "limit", reason: "must be a positive integer" }, s2, n2) };
              e3 = e3.slice(0, a3);
            }
          }
          return { value: e3 };
        } }, validate(e3, t3) {
          let { schema: r2, error: s2 } = t3;
          if ("string" != typeof e3)
            return { value: e3, errors: s2("string.base") };
          if ("" === e3) {
            const t4 = r2.$_getRule("min");
            if (t4 && 0 === t4.args.limit)
              return;
            return { value: e3, errors: s2("string.empty") };
          }
        }, rules: { alphanum: { method() {
          return this.$_addRule("alphanum");
        }, validate: (e3, t3) => /^[a-zA-Z0-9]+$/.test(e3) ? e3 : t3.error("string.alphanum") }, base64: { method() {
          let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return f.assertOptions(e3, ["paddingRequired", "urlSafe"]), e3 = { urlSafe: false, paddingRequired: true, ...e3 }, s("boolean" == typeof e3.paddingRequired, "paddingRequired must be boolean"), s("boolean" == typeof e3.urlSafe, "urlSafe must be boolean"), this.$_addRule({ name: "base64", args: { options: e3 } });
        }, validate(e3, t3, r2) {
          let { options: s2 } = r2;
          return h.base64Regex[s2.paddingRequired][s2.urlSafe].test(e3) ? e3 : t3.error("string.base64");
        } }, case: { method(e3) {
          return s(["lower", "upper"].includes(e3), "Invalid case:", e3), this.$_addRule({ name: "case", args: { direction: e3 } });
        }, validate(e3, t3, r2) {
          let { direction: s2 } = r2;
          return "lower" === s2 && e3 === e3.toLocaleLowerCase() || "upper" === s2 && e3 === e3.toLocaleUpperCase() ? e3 : t3.error(`string.${s2}case`);
        }, convert: true }, creditCard: { method() {
          return this.$_addRule("creditCard");
        }, validate(e3, t3) {
          let r2 = e3.length, s2 = 0, n2 = 1;
          for (; r2--; ) {
            const t4 = e3.charAt(r2) * n2;
            s2 += t4 - 9 * (t4 > 9), n2 ^= 3;
          }
          return s2 > 0 && s2 % 10 == 0 ? e3 : t3.error("string.creditCard");
        } }, dataUri: { method() {
          let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return f.assertOptions(e3, ["paddingRequired"]), e3 = { paddingRequired: true, ...e3 }, s("boolean" == typeof e3.paddingRequired, "paddingRequired must be boolean"), this.$_addRule({ name: "dataUri", args: { options: e3 } });
        }, validate(e3, t3, r2) {
          let { options: s2 } = r2;
          const n2 = e3.match(h.dataUriRegex);
          if (n2) {
            if (!n2[2])
              return e3;
            if ("base64" !== n2[2])
              return e3;
            if (h.base64Regex[s2.paddingRequired].false.test(n2[3]))
              return e3;
          }
          return t3.error("string.dataUri");
        } }, domain: { method(e3) {
          e3 && f.assertOptions(e3, ["allowFullyQualified", "allowUnicode", "maxDomainSegments", "minDomainSegments", "tlds"]);
          const t3 = h.addressOptions(e3);
          return this.$_addRule({ name: "domain", args: { options: e3 }, address: t3 });
        }, validate(e3, t3, r2, s2) {
          let { address: a2 } = s2;
          return n.isValid(e3, a2) ? e3 : t3.error("string.domain");
        } }, email: { method() {
          let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          f.assertOptions(e3, ["allowFullyQualified", "allowUnicode", "ignoreLength", "maxDomainSegments", "minDomainSegments", "multiple", "separator", "tlds"]), s(void 0 === e3.multiple || "boolean" == typeof e3.multiple, "multiple option must be an boolean");
          const t3 = h.addressOptions(e3), r2 = new RegExp(`\\s*[${e3.separator ? o(e3.separator) : ","}]\\s*`);
          return this.$_addRule({ name: "email", args: { options: e3 }, regex: r2, address: t3 });
        }, validate(e3, t3, r2, s2) {
          let { options: n2 } = r2, { regex: i2, address: o2 } = s2;
          const l2 = n2.multiple ? e3.split(i2) : [e3], c2 = [];
          for (const e4 of l2)
            a.isValid(e4, o2) || c2.push(e4);
          return c2.length ? t3.error("string.email", { value: e3, invalids: c2 }) : e3;
        } }, guid: { alias: "uuid", method() {
          let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          f.assertOptions(e3, ["version", "separator"]);
          let t3 = "";
          if (e3.version) {
            const r3 = [].concat(e3.version);
            s(r3.length >= 1, "version must have at least 1 valid version specified");
            const n3 = /* @__PURE__ */ new Set();
            for (let e4 = 0; e4 < r3.length; ++e4) {
              const a2 = r3[e4];
              s("string" == typeof a2, "version at position " + e4 + " must be a string");
              const i2 = h.guidVersions[a2.toLowerCase()];
              s(i2, "version at position " + e4 + " must be one of " + Object.keys(h.guidVersions).join(", ")), s(!n3.has(i2), "version at position " + e4 + " must not be a duplicate"), t3 += i2, n3.add(i2);
            }
          }
          s(h.guidSeparators.has(e3.separator), 'separator must be one of true, false, "-", or ":"');
          const r2 = void 0 === e3.separator ? "[:-]?" : true === e3.separator ? "[:-]" : false === e3.separator ? "[]?" : `\\${e3.separator}`, n2 = new RegExp(`^([\\[{\\(]?)[0-9A-F]{8}(${r2})[0-9A-F]{4}\\2?[${t3 || "0-9A-F"}][0-9A-F]{3}\\2?[${t3 ? "89AB" : "0-9A-F"}][0-9A-F]{3}\\2?[0-9A-F]{12}([\\]}\\)]?)$`, "i");
          return this.$_addRule({ name: "guid", args: { options: e3 }, regex: n2 });
        }, validate(e3, t3, r2, s2) {
          let { regex: n2 } = s2;
          const a2 = n2.exec(e3);
          return a2 ? h.guidBrackets[a2[1]] !== a2[a2.length - 1] ? t3.error("string.guid") : e3 : t3.error("string.guid");
        } }, hex: { method() {
          let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return f.assertOptions(e3, ["byteAligned"]), e3 = { byteAligned: false, ...e3 }, s("boolean" == typeof e3.byteAligned, "byteAligned must be boolean"), this.$_addRule({ name: "hex", args: { options: e3 } });
        }, validate(e3, t3, r2) {
          let { options: s2 } = r2;
          return h.hexRegex.test(e3) ? s2.byteAligned && e3.length % 2 != 0 ? t3.error("string.hexAlign") : e3 : t3.error("string.hex");
        } }, hostname: { method() {
          return this.$_addRule("hostname");
        }, validate: (e3, t3) => n.isValid(e3, { minDomainSegments: 1 }) || h.ipRegex.test(e3) ? e3 : t3.error("string.hostname") }, insensitive: { method() {
          return this.$_setFlag("insensitive", true);
        } }, ip: { method() {
          let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          f.assertOptions(e3, ["cidr", "version"]);
          const { cidr: t3, versions: r2, regex: s2 } = i.regex(e3), n2 = e3.version ? r2 : void 0;
          return this.$_addRule({ name: "ip", args: { options: { cidr: t3, version: n2 } }, regex: s2 });
        }, validate(e3, t3, r2, s2) {
          let { options: n2 } = r2, { regex: a2 } = s2;
          return a2.test(e3) ? e3 : n2.version ? t3.error("string.ipVersion", { value: e3, cidr: n2.cidr, version: n2.version }) : t3.error("string.ip", { value: e3, cidr: n2.cidr });
        } }, isoDate: { method() {
          return this.$_addRule("isoDate");
        }, validate(e3, t3) {
          let { error: r2 } = t3;
          return h.isoDate(e3) ? e3 : r2("string.isoDate");
        } }, isoDuration: { method() {
          return this.$_addRule("isoDuration");
        }, validate: (e3, t3) => h.isoDurationRegex.test(e3) ? e3 : t3.error("string.isoDuration") }, length: { method(e3, t3) {
          return h.length(this, "length", e3, "=", t3);
        }, validate(e3, t3, r2, s2) {
          let { limit: n2, encoding: a2 } = r2, { name: i2, operator: o2, args: l2 } = s2;
          const c2 = !a2 && e3.length;
          return f.compare(c2, n2, o2) ? e3 : t3.error("string." + i2, { limit: l2.limit, value: e3, encoding: a2 });
        }, args: [{ name: "limit", ref: true, assert: f.limit, message: "must be a positive integer" }, "encoding"] }, lowercase: { method() {
          return this.case("lower");
        } }, max: { method(e3, t3) {
          return h.length(this, "max", e3, "<=", t3);
        }, args: ["limit", "encoding"] }, min: { method(e3, t3) {
          return h.length(this, "min", e3, ">=", t3);
        }, args: ["limit", "encoding"] }, normalize: { method() {
          let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "NFC";
          return s(h.normalizationForms.includes(e3), "normalization form must be one of " + h.normalizationForms.join(", ")), this.$_addRule({ name: "normalize", args: { form: e3 } });
        }, validate(e3, t3, r2) {
          let { error: s2 } = t3, { form: n2 } = r2;
          return e3 === e3.normalize(n2) ? e3 : s2("string.normalize", { value: e3, form: n2 });
        }, convert: true }, pattern: { alias: "regex", method(e3) {
          let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          s(e3 instanceof RegExp, "regex must be a RegExp"), s(!e3.flags.includes("g") && !e3.flags.includes("y"), "regex should not use global or sticky mode"), "string" == typeof t3 && (t3 = { name: t3 }), f.assertOptions(t3, ["invert", "name"]);
          const r2 = ["string.pattern", t3.invert ? ".invert" : "", t3.name ? ".name" : ".base"].join("");
          return this.$_addRule({ name: "pattern", args: { regex: e3, options: t3 }, errorCode: r2 });
        }, validate(e3, t3, r2, s2) {
          let { regex: n2, options: a2 } = r2, { errorCode: i2 } = s2;
          return n2.test(e3) ^ a2.invert ? e3 : t3.error(i2, { name: a2.name, regex: n2, value: e3 });
        }, args: ["regex", "options"], multi: true }, replace: { method(e3, t3) {
          "string" == typeof e3 && (e3 = new RegExp(o(e3), "g")), s(e3 instanceof RegExp, "pattern must be a RegExp"), s("string" == typeof t3, "replacement must be a String");
          const r2 = this.clone();
          return r2.$_terms.replacements || (r2.$_terms.replacements = []), r2.$_terms.replacements.push({ pattern: e3, replacement: t3 }), r2;
        } }, token: { method() {
          return this.$_addRule("token");
        }, validate: (e3, t3) => /^\w+$/.test(e3) ? e3 : t3.error("string.token") }, trim: { method() {
          let e3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return s("boolean" == typeof e3, "enabled must be a boolean"), this.$_addRule({ name: "trim", args: { enabled: e3 } });
        }, validate(e3, t3, r2) {
          let { enabled: s2 } = r2;
          return s2 && e3 !== e3.trim() ? t3.error("string.trim") : e3;
        }, convert: true }, truncate: { method() {
          let e3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return s("boolean" == typeof e3, "enabled must be a boolean"), this.$_setFlag("truncate", e3);
        } }, uppercase: { method() {
          return this.case("upper");
        } }, uri: { method() {
          let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          f.assertOptions(e3, ["allowRelative", "allowQuerySquareBrackets", "domain", "relativeOnly", "scheme"]), e3.domain && f.assertOptions(e3.domain, ["allowFullyQualified", "allowUnicode", "maxDomainSegments", "minDomainSegments", "tlds"]);
          const { regex: t3, scheme: r2 } = c.regex(e3), s2 = e3.domain ? h.addressOptions(e3.domain) : null;
          return this.$_addRule({ name: "uri", args: { options: e3 }, regex: t3, domain: s2, scheme: r2 });
        }, validate(e3, t3, r2, s2) {
          let { options: a2 } = r2, { regex: i2, domain: o2, scheme: l2 } = s2;
          if (["http:/", "https:/"].includes(e3))
            return t3.error("string.uri");
          const c2 = i2.exec(e3);
          if (c2) {
            const r3 = c2[1] || c2[2];
            return !o2 || a2.allowRelative && !r3 || n.isValid(r3, o2) ? e3 : t3.error("string.domain", { value: r3 });
          }
          return a2.relativeOnly ? t3.error("string.uriRelativeOnly") : a2.scheme ? t3.error("string.uriCustomScheme", { scheme: l2, value: e3 }) : t3.error("string.uri");
        } } }, manifest: { build(e3, t3) {
          if (t3.replacements)
            for (const { pattern: r2, replacement: s2 } of t3.replacements)
              e3 = e3.replace(r2, s2);
          return e3;
        } }, messages: { "string.alphanum": "{{#label}} must only contain alpha-numeric characters", "string.base": "{{#label}} must be a string", "string.base64": "{{#label}} must be a valid base64 string", "string.creditCard": "{{#label}} must be a credit card", "string.dataUri": "{{#label}} must be a valid dataUri string", "string.domain": "{{#label}} must contain a valid domain name", "string.email": "{{#label}} must be a valid email", "string.empty": "{{#label}} is not allowed to be empty", "string.guid": "{{#label}} must be a valid GUID", "string.hex": "{{#label}} must only contain hexadecimal characters", "string.hexAlign": "{{#label}} hex decoded representation must be byte aligned", "string.hostname": "{{#label}} must be a valid hostname", "string.ip": "{{#label}} must be a valid ip address with a {{#cidr}} CIDR", "string.ipVersion": "{{#label}} must be a valid ip address of one of the following versions {{#version}} with a {{#cidr}} CIDR", "string.isoDate": "{{#label}} must be in iso format", "string.isoDuration": "{{#label}} must be a valid ISO 8601 duration", "string.length": "{{#label}} length must be {{#limit}} characters long", "string.lowercase": "{{#label}} must only contain lowercase characters", "string.max": "{{#label}} length must be less than or equal to {{#limit}} characters long", "string.min": "{{#label}} length must be at least {{#limit}} characters long", "string.normalize": "{{#label}} must be unicode normalized in the {{#form}} form", "string.token": "{{#label}} must only contain alpha-numeric and underscore characters", "string.pattern.base": "{{#label}} with value {:[.]} fails to match the required pattern: {{#regex}}", "string.pattern.name": "{{#label}} with value {:[.]} fails to match the {{#name}} pattern", "string.pattern.invert.base": "{{#label}} with value {:[.]} matches the inverted pattern: {{#regex}}", "string.pattern.invert.name": "{{#label}} with value {:[.]} matches the inverted {{#name}} pattern", "string.trim": "{{#label}} must not have leading or trailing whitespace", "string.uri": "{{#label}} must be a valid uri", "string.uriCustomScheme": "{{#label}} must be a valid uri with a scheme matching the {{#scheme}} pattern", "string.uriRelativeOnly": "{{#label}} must be a valid relative uri", "string.uppercase": "{{#label}} must only contain uppercase characters" } }), h.addressOptions = function(e3) {
          if (!e3)
            return e3;
          if (s(void 0 === e3.minDomainSegments || Number.isSafeInteger(e3.minDomainSegments) && e3.minDomainSegments > 0, "minDomainSegments must be a positive integer"), s(void 0 === e3.maxDomainSegments || Number.isSafeInteger(e3.maxDomainSegments) && e3.maxDomainSegments > 0, "maxDomainSegments must be a positive integer"), false === e3.tlds)
            return e3;
          if (true === e3.tlds || void 0 === e3.tlds)
            return s(h.tlds, "Built-in TLD list disabled"), Object.assign({}, e3, h.tlds);
          s("object" == typeof e3.tlds, "tlds must be true, false, or an object");
          const t3 = e3.tlds.deny;
          if (t3)
            return Array.isArray(t3) && (e3 = Object.assign({}, e3, { tlds: { deny: new Set(t3) } })), s(e3.tlds.deny instanceof Set, "tlds.deny must be an array, Set, or boolean"), s(!e3.tlds.allow, "Cannot specify both tlds.allow and tlds.deny lists"), h.validateTlds(e3.tlds.deny, "tlds.deny"), e3;
          const r2 = e3.tlds.allow;
          return r2 ? true === r2 ? (s(h.tlds, "Built-in TLD list disabled"), Object.assign({}, e3, h.tlds)) : (Array.isArray(r2) && (e3 = Object.assign({}, e3, { tlds: { allow: new Set(r2) } })), s(e3.tlds.allow instanceof Set, "tlds.allow must be an array, Set, or boolean"), h.validateTlds(e3.tlds.allow, "tlds.allow"), e3) : e3;
        }, h.validateTlds = function(e3, t3) {
          for (const r2 of e3)
            s(n.isValid(r2, { minDomainSegments: 1, maxDomainSegments: 1 }), `${t3} must contain valid top level domain names`);
        }, h.isoDate = function(e3) {
          if (!f.isIsoDate(e3))
            return null;
          /.*T.*[+-]\d\d$/.test(e3) && (e3 += "00");
          const t3 = new Date(e3);
          return isNaN(t3.getTime()) ? null : t3.toISOString();
        }, h.length = function(e3, t3, r2, n2, a2) {
          return s(!a2 || false, "Invalid encoding:", a2), e3.$_addRule({ name: t3, method: "length", args: { limit: r2, encoding: a2 }, operator: n2 });
        };
      }, 8826: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(8068), a = {};
        a.Map = class extends Map {
          slice() {
            return new a.Map(this);
          }
        }, e2.exports = n.extend({ type: "symbol", terms: { map: { init: new a.Map() } }, coerce: { method(e3, t3) {
          let { schema: r2, error: s2 } = t3;
          const n2 = r2.$_terms.map.get(e3);
          return n2 && (e3 = n2), r2._flags.only && "symbol" != typeof e3 ? { value: e3, errors: s2("symbol.map", { map: r2.$_terms.map }) } : { value: e3 };
        } }, validate(e3, t3) {
          let { error: r2 } = t3;
          if ("symbol" != typeof e3)
            return { value: e3, errors: r2("symbol.base") };
        }, rules: { map: { method(e3) {
          e3 && !e3[Symbol.iterator] && "object" == typeof e3 && (e3 = Object.entries(e3)), s(e3 && e3[Symbol.iterator], "Iterable must be an iterable or object");
          const t3 = this.clone(), r2 = [];
          for (const n2 of e3) {
            s(n2 && n2[Symbol.iterator], "Entry must be an iterable");
            const [e4, a2] = n2;
            s("object" != typeof e4 && "function" != typeof e4 && "symbol" != typeof e4, "Key must not be of type object, function, or Symbol"), s("symbol" == typeof a2, "Value must be a Symbol"), t3.$_terms.map.set(e4, a2), r2.push(a2);
          }
          return t3.valid(...r2);
        } } }, manifest: { build: (e3, t3) => (t3.map && (e3 = e3.map(t3.map)), e3) }, messages: { "symbol.base": "{{#label}} must be a symbol", "symbol.map": "{{#label}} must be one of {{#map}}" } });
      }, 8863: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(8571), a = r(738), i = r(9621), o = r(8160), l = r(6354), c = r(493), u = { result: Symbol("result") };
        t2.entry = function(e3, t3, r2) {
          let n2 = o.defaults;
          r2 && (s(void 0 === r2.warnings, "Cannot override warnings preference in synchronous validation"), s(void 0 === r2.artifacts, "Cannot override artifacts preference in synchronous validation"), n2 = o.preferences(o.defaults, r2));
          const a2 = u.entry(e3, t3, n2);
          s(!a2.mainstay.externals.length, "Schema with external rules must use validateAsync()");
          const i2 = { value: a2.value };
          return a2.error && (i2.error = a2.error), a2.mainstay.warnings.length && (i2.warning = l.details(a2.mainstay.warnings)), a2.mainstay.debug && (i2.debug = a2.mainstay.debug), a2.mainstay.artifacts && (i2.artifacts = a2.mainstay.artifacts), i2;
        }, t2.entryAsync = async function(e3, t3, r2) {
          let s2 = o.defaults;
          r2 && (s2 = o.preferences(o.defaults, r2));
          const n2 = u.entry(e3, t3, s2), a2 = n2.mainstay;
          if (n2.error)
            throw a2.debug && (n2.error.debug = a2.debug), n2.error;
          if (a2.externals.length) {
            let e4 = n2.value;
            for (const { method: t4, path: n3, label: o2 } of a2.externals) {
              let a3, l2, c3 = e4;
              n3.length && (a3 = n3[n3.length - 1], l2 = i(e4, n3.slice(0, -1)), c3 = l2[a3]);
              try {
                const s3 = await t4(c3, { prefs: r2 });
                if (void 0 === s3 || s3 === c3)
                  continue;
                l2 ? l2[a3] = s3 : e4 = s3;
              } catch (e5) {
                throw s2.errors.label && (e5.message += ` (${o2})`), e5;
              }
            }
            n2.value = e4;
          }
          if (!s2.warnings && !s2.debug && !s2.artifacts)
            return n2.value;
          const c2 = { value: n2.value };
          return a2.warnings.length && (c2.warning = l.details(a2.warnings)), a2.debug && (c2.debug = a2.debug), a2.artifacts && (c2.artifacts = a2.artifacts), c2;
        }, u.entry = function(e3, r2, s2) {
          const { tracer: n2, cleanup: a2 } = u.tracer(r2, s2), i2 = { externals: [], warnings: [], tracer: n2, debug: s2.debug ? [] : null, links: r2._ids._schemaChain ? /* @__PURE__ */ new Map() : null }, o2 = r2._ids._schemaChain ? [{ schema: r2 }] : null, f = new c([], [], { mainstay: i2, schemas: o2 }), h = t2.validate(e3, r2, f, s2);
          a2 && r2.$_root.untrace();
          const d = l.process(h.errors, e3, s2);
          return { value: h.value, error: d, mainstay: i2 };
        }, u.tracer = function(e3, t3) {
          return e3.$_root._tracer ? { tracer: e3.$_root._tracer._register(e3) } : t3.debug ? (s(e3.$_root.trace, "Debug mode not supported"), { tracer: e3.$_root.trace()._register(e3), cleanup: true }) : { tracer: u.ignore };
        }, t2.validate = function(e3, t3, r2, s2) {
          let n2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          if (t3.$_terms.whens && (t3 = t3._generate(e3, r2, s2).schema), t3._preferences && (s2 = u.prefs(t3, s2)), t3._cache && s2.cache) {
            const s3 = t3._cache.get(e3);
            if (r2.mainstay.tracer.debug(r2, "validate", "cached", !!s3), s3)
              return s3;
          }
          const a2 = (n3, a3, i3) => t3.$_createError(n3, e3, a3, i3 || r2, s2), i2 = { original: e3, prefs: s2, schema: t3, state: r2, error: a2, errorsArray: u.errorsArray, warn: (e4, t4, s3) => r2.mainstay.warnings.push(a2(e4, t4, s3)), message: (n3, a3) => t3.$_createError("custom", e3, a3, r2, s2, { messages: n3 }) };
          r2.mainstay.tracer.entry(t3, r2);
          const l2 = t3._definition;
          if (l2.prepare && void 0 !== e3 && s2.convert) {
            const t4 = l2.prepare(e3, i2);
            if (t4) {
              if (r2.mainstay.tracer.value(r2, "prepare", e3, t4.value), t4.errors)
                return u.finalize(t4.value, [].concat(t4.errors), i2);
              e3 = t4.value;
            }
          }
          if (l2.coerce && void 0 !== e3 && s2.convert && (!l2.coerce.from || l2.coerce.from.includes(typeof e3))) {
            const t4 = l2.coerce.method(e3, i2);
            if (t4) {
              if (r2.mainstay.tracer.value(r2, "coerced", e3, t4.value), t4.errors)
                return u.finalize(t4.value, [].concat(t4.errors), i2);
              e3 = t4.value;
            }
          }
          const c2 = t3._flags.empty;
          c2 && c2.$_match(u.trim(e3, t3), r2.nest(c2), o.defaults) && (r2.mainstay.tracer.value(r2, "empty", e3, void 0), e3 = void 0);
          const f = n2.presence || t3._flags.presence || (t3._flags._endedSwitch ? null : s2.presence);
          if (void 0 === e3) {
            if ("forbidden" === f)
              return u.finalize(e3, null, i2);
            if ("required" === f)
              return u.finalize(e3, [t3.$_createError("any.required", e3, null, r2, s2)], i2);
            if ("optional" === f) {
              if (t3._flags.default !== o.symbols.deepDefault)
                return u.finalize(e3, null, i2);
              r2.mainstay.tracer.value(r2, "default", e3, {}), e3 = {};
            }
          } else if ("forbidden" === f)
            return u.finalize(e3, [t3.$_createError("any.unknown", e3, null, r2, s2)], i2);
          const h = [];
          if (t3._valids) {
            const n3 = t3._valids.get(e3, r2, s2, t3._flags.insensitive);
            if (n3)
              return s2.convert && (r2.mainstay.tracer.value(r2, "valids", e3, n3.value), e3 = n3.value), r2.mainstay.tracer.filter(t3, r2, "valid", n3), u.finalize(e3, null, i2);
            if (t3._flags.only) {
              const n4 = t3.$_createError("any.only", e3, { valids: t3._valids.values({ display: true }) }, r2, s2);
              if (s2.abortEarly)
                return u.finalize(e3, [n4], i2);
              h.push(n4);
            }
          }
          if (t3._invalids) {
            const n3 = t3._invalids.get(e3, r2, s2, t3._flags.insensitive);
            if (n3) {
              r2.mainstay.tracer.filter(t3, r2, "invalid", n3);
              const a3 = t3.$_createError("any.invalid", e3, { invalids: t3._invalids.values({ display: true }) }, r2, s2);
              if (s2.abortEarly)
                return u.finalize(e3, [a3], i2);
              h.push(a3);
            }
          }
          if (l2.validate) {
            const t4 = l2.validate(e3, i2);
            if (t4 && (r2.mainstay.tracer.value(r2, "base", e3, t4.value), e3 = t4.value, t4.errors)) {
              if (!Array.isArray(t4.errors))
                return h.push(t4.errors), u.finalize(e3, h, i2);
              if (t4.errors.length)
                return h.push(...t4.errors), u.finalize(e3, h, i2);
            }
          }
          return t3._rules.length ? u.rules(e3, h, i2) : u.finalize(e3, h, i2);
        }, u.rules = function(e3, t3, r2) {
          const { schema: s2, state: n2, prefs: a2 } = r2;
          for (const i2 of s2._rules) {
            const l2 = s2._definition.rules[i2.method];
            if (l2.convert && a2.convert) {
              n2.mainstay.tracer.log(s2, n2, "rule", i2.name, "full");
              continue;
            }
            let c2, f = i2.args;
            if (i2._resolve.length) {
              f = Object.assign({}, f);
              for (const t4 of i2._resolve) {
                const r3 = l2.argsByName.get(t4), i3 = f[t4].resolve(e3, n2, a2), u2 = r3.normalize ? r3.normalize(i3) : i3, h2 = o.validateArg(u2, null, r3);
                if (h2) {
                  c2 = s2.$_createError("any.ref", i3, { arg: t4, ref: f[t4], reason: h2 }, n2, a2);
                  break;
                }
                f[t4] = u2;
              }
            }
            c2 = c2 || l2.validate(e3, r2, f, i2);
            const h = u.rule(c2, i2);
            if (h.errors) {
              if (n2.mainstay.tracer.log(s2, n2, "rule", i2.name, "error"), i2.warn) {
                n2.mainstay.warnings.push(...h.errors);
                continue;
              }
              if (a2.abortEarly)
                return u.finalize(e3, h.errors, r2);
              t3.push(...h.errors);
            } else
              n2.mainstay.tracer.log(s2, n2, "rule", i2.name, "pass"), n2.mainstay.tracer.value(n2, "rule", e3, h.value, i2.name), e3 = h.value;
          }
          return u.finalize(e3, t3, r2);
        }, u.rule = function(e3, t3) {
          return e3 instanceof l.Report ? (u.error(e3, t3), { errors: [e3], value: null }) : Array.isArray(e3) && e3[o.symbols.errors] ? (e3.forEach((e4) => u.error(e4, t3)), { errors: e3, value: null }) : { errors: null, value: e3 };
        }, u.error = function(e3, t3) {
          return t3.message && e3._setTemplate(t3.message), e3;
        }, u.finalize = function(e3, t3, r2) {
          t3 = t3 || [];
          const { schema: n2, state: a2, prefs: i2 } = r2;
          if (t3.length) {
            const s2 = u.default("failover", void 0, t3, r2);
            void 0 !== s2 && (a2.mainstay.tracer.value(a2, "failover", e3, s2), e3 = s2, t3 = []);
          }
          if (t3.length && n2._flags.error)
            if ("function" == typeof n2._flags.error) {
              t3 = n2._flags.error(t3), Array.isArray(t3) || (t3 = [t3]);
              for (const e4 of t3)
                s(e4 instanceof Error || e4 instanceof l.Report, "error() must return an Error object");
            } else
              t3 = [n2._flags.error];
          if (void 0 === e3) {
            const s2 = u.default("default", e3, t3, r2);
            a2.mainstay.tracer.value(a2, "default", e3, s2), e3 = s2;
          }
          if (n2._flags.cast && void 0 !== e3) {
            const t4 = n2._definition.cast[n2._flags.cast];
            if (t4.from(e3)) {
              const s2 = t4.to(e3, r2);
              a2.mainstay.tracer.value(a2, "cast", e3, s2, n2._flags.cast), e3 = s2;
            }
          }
          if (n2.$_terms.externals && i2.externals && false !== i2._externals)
            for (const { method: e4 } of n2.$_terms.externals)
              a2.mainstay.externals.push({ method: e4, path: a2.path, label: l.label(n2._flags, a2, i2) });
          const o2 = { value: e3, errors: t3.length ? t3 : null };
          return n2._flags.result && (o2.value = "strip" === n2._flags.result ? void 0 : r2.original, a2.mainstay.tracer.value(a2, n2._flags.result, e3, o2.value), a2.shadow(e3, n2._flags.result)), n2._cache && false !== i2.cache && !n2._refs.length && n2._cache.set(r2.original, o2), void 0 === e3 || o2.errors || void 0 === n2._flags.artifact || (a2.mainstay.artifacts = a2.mainstay.artifacts || /* @__PURE__ */ new Map(), a2.mainstay.artifacts.has(n2._flags.artifact) || a2.mainstay.artifacts.set(n2._flags.artifact, []), a2.mainstay.artifacts.get(n2._flags.artifact).push(a2.path)), o2;
        }, u.prefs = function(e3, t3) {
          const r2 = t3 === o.defaults;
          return r2 && e3._preferences[o.symbols.prefs] ? e3._preferences[o.symbols.prefs] : (t3 = o.preferences(t3, e3._preferences), r2 && (e3._preferences[o.symbols.prefs] = t3), t3);
        }, u.default = function(e3, t3, r2, s2) {
          const { schema: a2, state: i2, prefs: l2 } = s2, c2 = a2._flags[e3];
          if (l2.noDefaults || void 0 === c2)
            return t3;
          if (i2.mainstay.tracer.log(a2, i2, "rule", e3, "full"), !c2)
            return c2;
          if ("function" == typeof c2) {
            const t4 = c2.length ? [n(i2.ancestors[0]), s2] : [];
            try {
              return c2(...t4);
            } catch (t5) {
              return void r2.push(a2.$_createError(`any.${e3}`, null, { error: t5 }, i2, l2));
            }
          }
          return "object" != typeof c2 ? c2 : c2[o.symbols.literal] ? c2.literal : o.isResolvable(c2) ? c2.resolve(t3, i2, l2) : n(c2);
        }, u.trim = function(e3, t3) {
          if ("string" != typeof e3)
            return e3;
          const r2 = t3.$_getRule("trim");
          return r2 && r2.args.enabled ? e3.trim() : e3;
        }, u.ignore = { active: false, debug: a, entry: a, filter: a, log: a, resolve: a, value: a }, u.errorsArray = function() {
          const e3 = [];
          return e3[o.symbols.errors] = true, e3;
        };
      }, 2036: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(9474), a = r(8160), i = {};
        e2.exports = i.Values = class {
          constructor(e3, t3) {
            this._values = new Set(e3), this._refs = new Set(t3), this._lowercase = i.lowercases(e3), this._override = false;
          }
          get length() {
            return this._values.size + this._refs.size;
          }
          add(e3, t3) {
            a.isResolvable(e3) ? this._refs.has(e3) || (this._refs.add(e3), t3 && t3.register(e3)) : this.has(e3, null, null, false) || (this._values.add(e3), "string" == typeof e3 && this._lowercase.set(e3.toLowerCase(), e3));
          }
          static merge(e3, t3, r2) {
            if (e3 = e3 || new i.Values(), t3) {
              if (t3._override)
                return t3.clone();
              for (const r3 of [...t3._values, ...t3._refs])
                e3.add(r3);
            }
            if (r2)
              for (const t4 of [...r2._values, ...r2._refs])
                e3.remove(t4);
            return e3.length ? e3 : null;
          }
          remove(e3) {
            a.isResolvable(e3) ? this._refs.delete(e3) : (this._values.delete(e3), "string" == typeof e3 && this._lowercase.delete(e3.toLowerCase()));
          }
          has(e3, t3, r2, s2) {
            return !!this.get(e3, t3, r2, s2);
          }
          get(e3, t3, r2, s2) {
            if (!this.length)
              return false;
            if (this._values.has(e3))
              return { value: e3 };
            if ("string" == typeof e3 && e3 && s2) {
              const t4 = this._lowercase.get(e3.toLowerCase());
              if (t4)
                return { value: t4 };
            }
            if (!this._refs.size && "object" != typeof e3)
              return false;
            if ("object" == typeof e3) {
              for (const t4 of this._values)
                if (n(t4, e3))
                  return { value: t4 };
            }
            if (t3)
              for (const a2 of this._refs) {
                const i2 = a2.resolve(e3, t3, r2, null, { in: true });
                if (void 0 === i2)
                  continue;
                const o = a2.in && "object" == typeof i2 ? Array.isArray(i2) ? i2 : Object.keys(i2) : [i2];
                for (const t4 of o)
                  if (typeof t4 == typeof e3) {
                    if (s2 && e3 && "string" == typeof e3) {
                      if (t4.toLowerCase() === e3.toLowerCase())
                        return { value: t4, ref: a2 };
                    } else if (n(t4, e3))
                      return { value: t4, ref: a2 };
                  }
              }
            return false;
          }
          override() {
            this._override = true;
          }
          values(e3) {
            if (e3 && e3.display) {
              const e4 = [];
              for (const t3 of [...this._values, ...this._refs])
                void 0 !== t3 && e4.push(t3);
              return e4;
            }
            return Array.from([...this._values, ...this._refs]);
          }
          clone() {
            const e3 = new i.Values(this._values, this._refs);
            return e3._override = this._override, e3;
          }
          concat(e3) {
            s(!e3._override, "Cannot concat override set of values");
            const t3 = new i.Values([...this._values, ...e3._values], [...this._refs, ...e3._refs]);
            return t3._override = this._override, t3;
          }
          describe() {
            const e3 = [];
            this._override && e3.push({ override: true });
            for (const t3 of this._values.values())
              e3.push(t3 && "object" == typeof t3 ? { value: t3 } : t3);
            for (const t3 of this._refs.values())
              e3.push(t3.describe());
            return e3;
          }
        }, i.Values.prototype[a.symbols.values] = true, i.Values.prototype.slice = i.Values.prototype.clone, i.lowercases = function(e3) {
          const t3 = /* @__PURE__ */ new Map();
          if (e3)
            for (const r2 of e3)
              "string" == typeof r2 && t3.set(r2.toLowerCase(), r2);
          return t3;
        };
      }, 978: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(8571), a = r(1687), i = r(9621), o = {};
        e2.exports = function(e3, t3) {
          let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if (s(e3 && "object" == typeof e3, "Invalid defaults value: must be an object"), s(!t3 || true === t3 || "object" == typeof t3, "Invalid source value: must be true, falsy or an object"), s("object" == typeof r2, "Invalid options: must be an object"), !t3)
            return null;
          if (r2.shallow)
            return o.applyToDefaultsWithShallow(e3, t3, r2);
          const i2 = n(e3);
          if (true === t3)
            return i2;
          const l = void 0 !== r2.nullOverride && r2.nullOverride;
          return a(i2, t3, { nullOverride: l, mergeArrays: false });
        }, o.applyToDefaultsWithShallow = function(e3, t3, r2) {
          const l = r2.shallow;
          s(Array.isArray(l), "Invalid keys");
          const c = /* @__PURE__ */ new Map(), u = true === t3 ? null : /* @__PURE__ */ new Set();
          for (let r3 of l) {
            r3 = Array.isArray(r3) ? r3 : r3.split(".");
            const s2 = i(e3, r3);
            s2 && "object" == typeof s2 ? c.set(s2, u && i(t3, r3) || s2) : u && u.add(r3);
          }
          const f = n(e3, {}, c);
          if (!u)
            return f;
          for (const e4 of u)
            o.reachCopy(f, t3, e4);
          const h = void 0 !== r2.nullOverride && r2.nullOverride;
          return a(f, t3, { nullOverride: h, mergeArrays: false });
        }, o.reachCopy = function(e3, t3, r2) {
          for (const e4 of r2) {
            if (!(e4 in t3))
              return;
            const r3 = t3[e4];
            if ("object" != typeof r3 || null === r3)
              return;
            t3 = r3;
          }
          const s2 = t3;
          let n2 = e3;
          for (let e4 = 0; e4 < r2.length - 1; ++e4) {
            const t4 = r2[e4];
            "object" != typeof n2[t4] && (n2[t4] = {}), n2 = n2[t4];
          }
          n2[r2[r2.length - 1]] = s2;
        };
      }, 375: (e2, t2, r) => {
        "use strict";
        const s = r(7916);
        e2.exports = function(e3) {
          if (!e3) {
            for (var t3 = arguments.length, r2 = new Array(t3 > 1 ? t3 - 1 : 0), n = 1; n < t3; n++)
              r2[n - 1] = arguments[n];
            if (1 === r2.length && r2[0] instanceof Error)
              throw r2[0];
            throw new s(r2);
          }
        };
      }, 8571: (e2, t2, r) => {
        "use strict";
        const s = r(9621), n = r(4277), a = r(7043), i = { needsProtoHack: /* @__PURE__ */ new Set([n.set, n.map, n.weakSet, n.weakMap]) };
        e2.exports = i.clone = function(e3) {
          let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          if ("object" != typeof e3 || null === e3)
            return e3;
          let s2 = i.clone, o = r2;
          if (t3.shallow) {
            if (true !== t3.shallow)
              return i.cloneWithShallow(e3, t3);
            s2 = (e4) => e4;
          } else if (o) {
            const t4 = o.get(e3);
            if (t4)
              return t4;
          } else
            o = /* @__PURE__ */ new Map();
          const l = n.getInternalProto(e3);
          if (l === n.buffer)
            return false;
          if (l === n.date)
            return new Date(e3.getTime());
          if (l === n.regex)
            return new RegExp(e3);
          const c = i.base(e3, l, t3);
          if (c === e3)
            return e3;
          if (o && o.set(e3, c), l === n.set)
            for (const r3 of e3)
              c.add(s2(r3, t3, o));
          else if (l === n.map)
            for (const [r3, n2] of e3)
              c.set(r3, s2(n2, t3, o));
          const u = a.keys(e3, t3);
          for (const r3 of u) {
            if ("__proto__" === r3)
              continue;
            if (l === n.array && "length" === r3) {
              c.length = e3.length;
              continue;
            }
            const a2 = Object.getOwnPropertyDescriptor(e3, r3);
            a2 ? a2.get || a2.set ? Object.defineProperty(c, r3, a2) : a2.enumerable ? c[r3] = s2(e3[r3], t3, o) : Object.defineProperty(c, r3, { enumerable: false, writable: true, configurable: true, value: s2(e3[r3], t3, o) }) : Object.defineProperty(c, r3, { enumerable: true, writable: true, configurable: true, value: s2(e3[r3], t3, o) });
          }
          return c;
        }, i.cloneWithShallow = function(e3, t3) {
          const r2 = t3.shallow;
          (t3 = Object.assign({}, t3)).shallow = false;
          const n2 = /* @__PURE__ */ new Map();
          for (const t4 of r2) {
            const r3 = s(e3, t4);
            "object" != typeof r3 && "function" != typeof r3 || n2.set(r3, r3);
          }
          return i.clone(e3, t3, n2);
        }, i.base = function(e3, t3, r2) {
          if (false === r2.prototype)
            return i.needsProtoHack.has(t3) ? new t3.constructor() : t3 === n.array ? [] : {};
          const s2 = Object.getPrototypeOf(e3);
          if (s2 && s2.isImmutable)
            return e3;
          if (t3 === n.array) {
            const e4 = [];
            return s2 !== t3 && Object.setPrototypeOf(e4, s2), e4;
          }
          if (i.needsProtoHack.has(t3)) {
            const e4 = new s2.constructor();
            return s2 !== t3 && Object.setPrototypeOf(e4, s2), e4;
          }
          return Object.create(s2);
        };
      }, 9474: (e2, t2, r) => {
        "use strict";
        const s = r(4277), n = { mismatched: null };
        e2.exports = function(e3, t3, r2) {
          return r2 = Object.assign({ prototype: true }, r2), !!n.isDeepEqual(e3, t3, r2, []);
        }, n.isDeepEqual = function(e3, t3, r2, a) {
          if (e3 === t3)
            return 0 !== e3 || 1 / e3 == 1 / t3;
          const i = typeof e3;
          if (i !== typeof t3)
            return false;
          if (null === e3 || null === t3)
            return false;
          if ("function" === i) {
            if (!r2.deepFunction || e3.toString() !== t3.toString())
              return false;
          } else if ("object" !== i)
            return e3 != e3 && t3 != t3;
          const o = n.getSharedType(e3, t3, !!r2.prototype);
          switch (o) {
            case s.buffer:
              return false;
            case s.promise:
              return e3 === t3;
            case s.regex:
              return e3.toString() === t3.toString();
            case n.mismatched:
              return false;
          }
          for (let r3 = a.length - 1; r3 >= 0; --r3)
            if (a[r3].isSame(e3, t3))
              return true;
          a.push(new n.SeenEntry(e3, t3));
          try {
            return !!n.isDeepEqualObj(o, e3, t3, r2, a);
          } finally {
            a.pop();
          }
        }, n.getSharedType = function(e3, t3, r2) {
          if (r2)
            return Object.getPrototypeOf(e3) !== Object.getPrototypeOf(t3) ? n.mismatched : s.getInternalProto(e3);
          const a = s.getInternalProto(e3);
          return a !== s.getInternalProto(t3) ? n.mismatched : a;
        }, n.valueOf = function(e3) {
          const t3 = e3.valueOf;
          if (void 0 === t3)
            return e3;
          try {
            return t3.call(e3);
          } catch (e4) {
            return e4;
          }
        }, n.hasOwnEnumerableProperty = function(e3, t3) {
          return Object.prototype.propertyIsEnumerable.call(e3, t3);
        }, n.isSetSimpleEqual = function(e3, t3) {
          for (const r2 of Set.prototype.values.call(e3))
            if (!Set.prototype.has.call(t3, r2))
              return false;
          return true;
        }, n.isDeepEqualObj = function(e3, t3, r2, a, i) {
          const { isDeepEqual: o, valueOf: l, hasOwnEnumerableProperty: c } = n, { keys: u, getOwnPropertySymbols: f } = Object;
          if (e3 === s.array) {
            if (!a.part) {
              if (t3.length !== r2.length)
                return false;
              for (let e4 = 0; e4 < t3.length; ++e4)
                if (!o(t3[e4], r2[e4], a, i))
                  return false;
              return true;
            }
            for (const e4 of t3)
              for (const t4 of r2)
                if (o(e4, t4, a, i))
                  return true;
          } else if (e3 === s.set) {
            if (t3.size !== r2.size)
              return false;
            if (!n.isSetSimpleEqual(t3, r2)) {
              const e4 = new Set(Set.prototype.values.call(r2));
              for (const r3 of Set.prototype.values.call(t3)) {
                if (e4.delete(r3))
                  continue;
                let t4 = false;
                for (const s2 of e4)
                  if (o(r3, s2, a, i)) {
                    e4.delete(s2), t4 = true;
                    break;
                  }
                if (!t4)
                  return false;
              }
            }
          } else if (e3 === s.map) {
            if (t3.size !== r2.size)
              return false;
            for (const [e4, s2] of Map.prototype.entries.call(t3)) {
              if (void 0 === s2 && !Map.prototype.has.call(r2, e4))
                return false;
              if (!o(s2, Map.prototype.get.call(r2, e4), a, i))
                return false;
            }
          } else if (e3 === s.error && (t3.name !== r2.name || t3.message !== r2.message))
            return false;
          const h = l(t3), d = l(r2);
          if ((t3 !== h || r2 !== d) && !o(h, d, a, i))
            return false;
          const m = u(t3);
          if (!a.part && m.length !== u(r2).length && !a.skip)
            return false;
          let p = 0;
          for (const e4 of m)
            if (a.skip && a.skip.includes(e4))
              void 0 === r2[e4] && ++p;
            else {
              if (!c(r2, e4))
                return false;
              if (!o(t3[e4], r2[e4], a, i))
                return false;
            }
          if (!a.part && m.length - p !== u(r2).length)
            return false;
          if (false !== a.symbols) {
            const e4 = f(t3), s2 = new Set(f(r2));
            for (const n2 of e4) {
              if (!a.skip || !a.skip.includes(n2)) {
                if (c(t3, n2)) {
                  if (!c(r2, n2))
                    return false;
                  if (!o(t3[n2], r2[n2], a, i))
                    return false;
                } else if (c(r2, n2))
                  return false;
              }
              s2.delete(n2);
            }
            for (const e5 of s2)
              if (c(r2, e5))
                return false;
          }
          return true;
        }, n.SeenEntry = class {
          constructor(e3, t3) {
            this.obj = e3, this.ref = t3;
          }
          isSame(e3, t3) {
            return this.obj === e3 && this.ref === t3;
          }
        };
      }, 7916: (e2, t2, r) => {
        "use strict";
        const s = r(8761);
        e2.exports = class extends Error {
          constructor(e3) {
            super(e3.filter((e4) => "" !== e4).map((e4) => "string" == typeof e4 ? e4 : e4 instanceof Error ? e4.message : s(e4)).join(" ") || "Unknown error"), "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, t2.assert);
          }
        };
      }, 5277: (e2) => {
        "use strict";
        const t2 = {};
        e2.exports = function(e3) {
          if (!e3)
            return "";
          let r = "";
          for (let s = 0; s < e3.length; ++s) {
            const n = e3.charCodeAt(s);
            t2.isSafe(n) ? r += e3[s] : r += t2.escapeHtmlChar(n);
          }
          return r;
        }, t2.escapeHtmlChar = function(e3) {
          return t2.namedHtml.get(e3) || (e3 >= 256 ? "&#" + e3 + ";" : `&#x${e3.toString(16).padStart(2, "0")};`);
        }, t2.isSafe = function(e3) {
          return t2.safeCharCodes.has(e3);
        }, t2.namedHtml = /* @__PURE__ */ new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [34, "&quot;"], [160, "&nbsp;"], [162, "&cent;"], [163, "&pound;"], [164, "&curren;"], [169, "&copy;"], [174, "&reg;"]]), t2.safeCharCodes = function() {
          const e3 = /* @__PURE__ */ new Set();
          for (let t3 = 32; t3 < 123; ++t3)
            (t3 >= 97 || t3 >= 65 && t3 <= 90 || t3 >= 48 && t3 <= 57 || 32 === t3 || 46 === t3 || 44 === t3 || 45 === t3 || 58 === t3 || 95 === t3) && e3.add(t3);
          return e3;
        }();
      }, 6064: (e2) => {
        "use strict";
        e2.exports = function(e3) {
          return e3.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, "\\$&");
        };
      }, 738: (e2) => {
        "use strict";
        e2.exports = function() {
        };
      }, 1687: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(8571), a = r(7043), i = {};
        e2.exports = i.merge = function(e3, t3, r2) {
          if (s(e3 && "object" == typeof e3, "Invalid target value: must be an object"), s(null == t3 || "object" == typeof t3, "Invalid source value: must be null, undefined, or an object"), !t3)
            return e3;
          if (r2 = Object.assign({ nullOverride: true, mergeArrays: true }, r2), Array.isArray(t3)) {
            s(Array.isArray(e3), "Cannot merge array onto an object"), r2.mergeArrays || (e3.length = 0);
            for (let s2 = 0; s2 < t3.length; ++s2)
              e3.push(n(t3[s2], { symbols: r2.symbols }));
            return e3;
          }
          const o = a.keys(t3, r2);
          for (let s2 = 0; s2 < o.length; ++s2) {
            const a2 = o[s2];
            if ("__proto__" === a2 || !Object.prototype.propertyIsEnumerable.call(t3, a2))
              continue;
            const l = t3[a2];
            if (l && "object" == typeof l) {
              if (e3[a2] === l)
                continue;
              !e3[a2] || "object" != typeof e3[a2] || Array.isArray(e3[a2]) !== Array.isArray(l) || l instanceof Date || l instanceof RegExp ? e3[a2] = n(l, { symbols: r2.symbols }) : i.merge(e3[a2], l, r2);
            } else
              (null != l || r2.nullOverride) && (e3[a2] = l);
          }
          return e3;
        };
      }, 9621: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = {};
        e2.exports = function(e3, t3, r2) {
          if (false === t3 || null == t3)
            return e3;
          "string" == typeof (r2 = r2 || {}) && (r2 = { separator: r2 });
          const a = Array.isArray(t3);
          s(!a || !r2.separator, "Separator option is not valid for array-based chain");
          const i = a ? t3 : t3.split(r2.separator || ".");
          let o = e3;
          for (let e4 = 0; e4 < i.length; ++e4) {
            let a2 = i[e4];
            const l = r2.iterables && n.iterables(o);
            if (Array.isArray(o) || "set" === l) {
              const e5 = Number(a2);
              Number.isInteger(e5) && (a2 = e5 < 0 ? o.length + e5 : e5);
            }
            if (!o || "function" == typeof o && false === r2.functions || !l && void 0 === o[a2]) {
              s(!r2.strict || e4 + 1 === i.length, "Missing segment", a2, "in reach path ", t3), s("object" == typeof o || true === r2.functions || "function" != typeof o, "Invalid segment", a2, "in reach path ", t3), o = r2.default;
              break;
            }
            o = l ? "set" === l ? [...o][a2] : o.get(a2) : o[a2];
          }
          return o;
        }, n.iterables = function(e3) {
          return e3 instanceof Set ? "set" : e3 instanceof Map ? "map" : void 0;
        };
      }, 8761: (e2) => {
        "use strict";
        e2.exports = function() {
          try {
            return JSON.stringify(...arguments);
          } catch (e3) {
            return "[Cannot display object: " + e3.message + "]";
          }
        };
      }, 4277: (e2, t2) => {
        "use strict";
        const r = {};
        t2 = e2.exports = { array: Array.prototype, buffer: false, date: Date.prototype, error: Error.prototype, generic: Object.prototype, map: Map.prototype, promise: Promise.prototype, regex: RegExp.prototype, set: Set.prototype, weakMap: WeakMap.prototype, weakSet: WeakSet.prototype }, r.typeMap = /* @__PURE__ */ new Map([["[object Error]", t2.error], ["[object Map]", t2.map], ["[object Promise]", t2.promise], ["[object Set]", t2.set], ["[object WeakMap]", t2.weakMap], ["[object WeakSet]", t2.weakSet]]), t2.getInternalProto = function(e3) {
          if (Array.isArray(e3))
            return t2.array;
          if (e3 instanceof Date)
            return t2.date;
          if (e3 instanceof RegExp)
            return t2.regex;
          if (e3 instanceof Error)
            return t2.error;
          const s = Object.prototype.toString.call(e3);
          return r.typeMap.get(s) || t2.generic;
        };
      }, 7043: (e2, t2) => {
        "use strict";
        t2.keys = function(e3) {
          let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return false !== t3.symbols ? Reflect.ownKeys(e3) : Object.getOwnPropertyNames(e3);
        };
      }, 3652: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = {};
        t2.Sorter = class {
          constructor() {
            this._items = [], this.nodes = [];
          }
          add(e3, t3) {
            const r2 = [].concat((t3 = t3 || {}).before || []), n2 = [].concat(t3.after || []), a = t3.group || "?", i = t3.sort || 0;
            s(!r2.includes(a), `Item cannot come before itself: ${a}`), s(!r2.includes("?"), "Item cannot come before unassociated items"), s(!n2.includes(a), `Item cannot come after itself: ${a}`), s(!n2.includes("?"), "Item cannot come after unassociated items"), Array.isArray(e3) || (e3 = [e3]);
            for (const t4 of e3) {
              const e4 = { seq: this._items.length, sort: i, before: r2, after: n2, group: a, node: t4 };
              this._items.push(e4);
            }
            if (!t3.manual) {
              const e4 = this._sort();
              s(e4, "item", "?" !== a ? `added into group ${a}` : "", "created a dependencies error");
            }
            return this.nodes;
          }
          merge(e3) {
            Array.isArray(e3) || (e3 = [e3]);
            for (const t4 of e3)
              if (t4)
                for (const e4 of t4._items)
                  this._items.push(Object.assign({}, e4));
            this._items.sort(n.mergeSort);
            for (let e4 = 0; e4 < this._items.length; ++e4)
              this._items[e4].seq = e4;
            const t3 = this._sort();
            return s(t3, "merge created a dependencies error"), this.nodes;
          }
          sort() {
            const e3 = this._sort();
            return s(e3, "sort created a dependencies error"), this.nodes;
          }
          _sort() {
            const e3 = {}, t3 = /* @__PURE__ */ Object.create(null), r2 = /* @__PURE__ */ Object.create(null);
            for (const s3 of this._items) {
              const n3 = s3.seq, a2 = s3.group;
              r2[a2] = r2[a2] || [], r2[a2].push(n3), e3[n3] = s3.before;
              for (const e4 of s3.after)
                t3[e4] = t3[e4] || [], t3[e4].push(n3);
            }
            for (const t4 in e3) {
              const s3 = [];
              for (const n3 in e3[t4]) {
                const a2 = e3[t4][n3];
                r2[a2] = r2[a2] || [], s3.push(...r2[a2]);
              }
              e3[t4] = s3;
            }
            for (const s3 in t3)
              if (r2[s3])
                for (const n3 of r2[s3])
                  e3[n3].push(...t3[s3]);
            const s2 = {};
            for (const t4 in e3) {
              const r3 = e3[t4];
              for (const e4 of r3)
                s2[e4] = s2[e4] || [], s2[e4].push(t4);
            }
            const n2 = {}, a = [];
            for (let e4 = 0; e4 < this._items.length; ++e4) {
              let t4 = e4;
              if (s2[e4]) {
                t4 = null;
                for (let e5 = 0; e5 < this._items.length; ++e5) {
                  if (true === n2[e5])
                    continue;
                  s2[e5] || (s2[e5] = []);
                  const r3 = s2[e5].length;
                  let a2 = 0;
                  for (let t5 = 0; t5 < r3; ++t5)
                    n2[s2[e5][t5]] && ++a2;
                  if (a2 === r3) {
                    t4 = e5;
                    break;
                  }
                }
              }
              null !== t4 && (n2[t4] = true, a.push(t4));
            }
            if (a.length !== this._items.length)
              return false;
            const i = {};
            for (const e4 of this._items)
              i[e4.seq] = e4;
            this._items = [], this.nodes = [];
            for (const e4 of a) {
              const t4 = i[e4];
              this.nodes.push(t4.node), this._items.push(t4);
            }
            return true;
          }
        }, n.mergeSort = (e3, t3) => e3.sort === t3.sort ? 0 : e3.sort < t3.sort ? -1 : 1;
      }, 5380: (e2, t2, r) => {
        "use strict";
        const s = r(443), n = r(2178), a = { minDomainSegments: 2, nonAsciiRx: /[^\x00-\x7f]/, domainControlRx: /[\x00-\x20@\:\/\\#!\$&\'\(\)\*\+,;=\?]/, tldSegmentRx: /^[a-zA-Z](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/, domainSegmentRx: /^[a-zA-Z0-9](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/, URL: s.URL || URL };
        t2.analyze = function(e3) {
          let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!e3)
            return n.code("DOMAIN_NON_EMPTY_STRING");
          if ("string" != typeof e3)
            throw new Error("Invalid input: domain must be a string");
          if (e3.length > 256)
            return n.code("DOMAIN_TOO_LONG");
          const r2 = !a.nonAsciiRx.test(e3);
          if (!r2) {
            if (false === t3.allowUnicode)
              return n.code("DOMAIN_INVALID_UNICODE_CHARS");
            e3 = e3.normalize("NFC");
          }
          if (a.domainControlRx.test(e3))
            return n.code("DOMAIN_INVALID_CHARS");
          e3 = a.punycode(e3), t3.allowFullyQualified && "." === e3[e3.length - 1] && (e3 = e3.slice(0, -1));
          const s2 = t3.minDomainSegments || a.minDomainSegments, i = e3.split(".");
          if (i.length < s2)
            return n.code("DOMAIN_SEGMENTS_COUNT");
          if (t3.maxDomainSegments && i.length > t3.maxDomainSegments)
            return n.code("DOMAIN_SEGMENTS_COUNT_MAX");
          const o = t3.tlds;
          if (o) {
            const e4 = i[i.length - 1].toLowerCase();
            if (o.deny && o.deny.has(e4) || o.allow && !o.allow.has(e4))
              return n.code("DOMAIN_FORBIDDEN_TLDS");
          }
          for (let e4 = 0; e4 < i.length; ++e4) {
            const t4 = i[e4];
            if (!t4.length)
              return n.code("DOMAIN_EMPTY_SEGMENT");
            if (t4.length > 63)
              return n.code("DOMAIN_LONG_SEGMENT");
            if (e4 < i.length - 1) {
              if (!a.domainSegmentRx.test(t4))
                return n.code("DOMAIN_INVALID_CHARS");
            } else if (!a.tldSegmentRx.test(t4))
              return n.code("DOMAIN_INVALID_TLDS_CHARS");
          }
          return null;
        }, t2.isValid = function(e3, r2) {
          return !t2.analyze(e3, r2);
        }, a.punycode = function(e3) {
          e3.includes("%") && (e3 = e3.replace(/%/g, "%25"));
          try {
            return new a.URL(`http://${e3}`).host;
          } catch (t3) {
            return e3;
          }
        };
      }, 1745: (e2, t2, r) => {
        "use strict";
        const s = r(9848), n = r(5380), a = r(2178), i = { nonAsciiRx: /[^\x00-\x7f]/, encoder: new (s.TextEncoder || TextEncoder)() };
        t2.analyze = function(e3, t3) {
          return i.email(e3, t3);
        }, t2.isValid = function(e3, t3) {
          return !i.email(e3, t3);
        }, i.email = function(e3) {
          let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if ("string" != typeof e3)
            throw new Error("Invalid input: email must be a string");
          if (!e3)
            return a.code("EMPTY_STRING");
          const r2 = !i.nonAsciiRx.test(e3);
          if (!r2) {
            if (false === t3.allowUnicode)
              return a.code("FORBIDDEN_UNICODE");
            e3 = e3.normalize("NFC");
          }
          const s2 = e3.split("@");
          if (2 !== s2.length)
            return s2.length > 2 ? a.code("MULTIPLE_AT_CHAR") : a.code("MISSING_AT_CHAR");
          const [o, l] = s2;
          if (!o)
            return a.code("EMPTY_LOCAL");
          if (!t3.ignoreLength) {
            if (e3.length > 254)
              return a.code("ADDRESS_TOO_LONG");
            if (i.encoder.encode(o).length > 64)
              return a.code("LOCAL_TOO_LONG");
          }
          return i.local(o, r2) || n.analyze(l, t3);
        }, i.local = function(e3, t3) {
          const r2 = e3.split(".");
          for (const e4 of r2) {
            if (!e4.length)
              return a.code("EMPTY_LOCAL_SEGMENT");
            if (t3) {
              if (!i.atextRx.test(e4))
                return a.code("INVALID_LOCAL_CHARS");
            } else
              for (const t4 of e4) {
                if (i.atextRx.test(t4))
                  continue;
                const e5 = i.binary(t4);
                if (!i.atomRx.test(e5))
                  return a.code("INVALID_LOCAL_CHARS");
              }
          }
        }, i.binary = function(e3) {
          return Array.from(i.encoder.encode(e3)).map((e4) => String.fromCharCode(e4)).join("");
        }, i.atextRx = /^[\w!#\$%&'\*\+\-/=\?\^`\{\|\}~]+$/, i.atomRx = new RegExp(["(?:[\\xc2-\\xdf][\\x80-\\xbf])", "(?:\\xe0[\\xa0-\\xbf][\\x80-\\xbf])|(?:[\\xe1-\\xec][\\x80-\\xbf]{2})|(?:\\xed[\\x80-\\x9f][\\x80-\\xbf])|(?:[\\xee-\\xef][\\x80-\\xbf]{2})", "(?:\\xf0[\\x90-\\xbf][\\x80-\\xbf]{2})|(?:[\\xf1-\\xf3][\\x80-\\xbf]{3})|(?:\\xf4[\\x80-\\x8f][\\x80-\\xbf]{2})"].join("|"));
      }, 2178: (e2, t2) => {
        "use strict";
        t2.codes = { EMPTY_STRING: "Address must be a non-empty string", FORBIDDEN_UNICODE: "Address contains forbidden Unicode characters", MULTIPLE_AT_CHAR: "Address cannot contain more than one @ character", MISSING_AT_CHAR: "Address must contain one @ character", EMPTY_LOCAL: "Address local part cannot be empty", ADDRESS_TOO_LONG: "Address too long", LOCAL_TOO_LONG: "Address local part too long", EMPTY_LOCAL_SEGMENT: "Address local part contains empty dot-separated segment", INVALID_LOCAL_CHARS: "Address local part contains invalid character", DOMAIN_NON_EMPTY_STRING: "Domain must be a non-empty string", DOMAIN_TOO_LONG: "Domain too long", DOMAIN_INVALID_UNICODE_CHARS: "Domain contains forbidden Unicode characters", DOMAIN_INVALID_CHARS: "Domain contains invalid character", DOMAIN_INVALID_TLDS_CHARS: "Domain contains invalid tld character", DOMAIN_SEGMENTS_COUNT: "Domain lacks the minimum required number of segments", DOMAIN_SEGMENTS_COUNT_MAX: "Domain contains too many segments", DOMAIN_FORBIDDEN_TLDS: "Domain uses forbidden TLD", DOMAIN_EMPTY_SEGMENT: "Domain contains empty dot-separated segment", DOMAIN_LONG_SEGMENT: "Domain contains dot-separated segment that is too long" }, t2.code = function(e3) {
          return { code: e3, error: t2.codes[e3] };
        };
      }, 9959: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(5752);
        t2.regex = function() {
          let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          s(void 0 === e3.cidr || "string" == typeof e3.cidr, "options.cidr must be a string");
          const t3 = e3.cidr ? e3.cidr.toLowerCase() : "optional";
          s(["required", "optional", "forbidden"].includes(t3), "options.cidr must be one of required, optional, forbidden"), s(void 0 === e3.version || "string" == typeof e3.version || Array.isArray(e3.version), "options.version must be a string or an array of string");
          let r2 = e3.version || ["ipv4", "ipv6", "ipvfuture"];
          Array.isArray(r2) || (r2 = [r2]), s(r2.length >= 1, "options.version must have at least 1 version specified");
          for (let e4 = 0; e4 < r2.length; ++e4)
            s("string" == typeof r2[e4], "options.version must only contain strings"), r2[e4] = r2[e4].toLowerCase(), s(["ipv4", "ipv6", "ipvfuture"].includes(r2[e4]), "options.version contains unknown version " + r2[e4] + " - must be one of ipv4, ipv6, ipvfuture");
          r2 = Array.from(new Set(r2));
          const a = r2.map((e4) => {
            if ("forbidden" === t3)
              return n.ip[e4];
            const r3 = `\\/${"ipv4" === e4 ? n.ip.v4Cidr : n.ip.v6Cidr}`;
            return "required" === t3 ? `${n.ip[e4]}${r3}` : `${n.ip[e4]}(?:${r3})?`;
          }), i = `(?:${a.join("|")})`, o = new RegExp(`^${i}$`);
          return { cidr: t3, versions: r2, regex: o, raw: i };
        };
      }, 5752: (e2, t2, r) => {
        "use strict";
        const s = r(375), n = r(6064), a = { generate: function() {
          const e3 = {}, t3 = "!\\$&'\\(\\)\\*\\+,;=", r2 = "\\w-\\.~%\\dA-Fa-f" + t3 + ":@", s2 = "[" + r2 + "]", n2 = "(?:0{0,2}\\d|0?[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])";
          e3.ipv4address = "(?:" + n2 + "\\.){3}" + n2;
          const a2 = "[\\dA-Fa-f]{1,4}", i = "(?:" + a2 + ":" + a2 + "|" + e3.ipv4address + ")", o = "(?:" + a2 + ":){6}" + i, l = "::(?:" + a2 + ":){5}" + i, c = "(?:" + a2 + ")?::(?:" + a2 + ":){4}" + i, u = "(?:(?:" + a2 + ":){0,1}" + a2 + ")?::(?:" + a2 + ":){3}" + i, f = "(?:(?:" + a2 + ":){0,2}" + a2 + ")?::(?:" + a2 + ":){2}" + i, h = "(?:(?:" + a2 + ":){0,3}" + a2 + ")?::" + a2 + ":" + i, d = "(?:(?:" + a2 + ":){0,4}" + a2 + ")?::" + i;
          e3.ipv4Cidr = "(?:\\d|[1-2]\\d|3[0-2])", e3.ipv6Cidr = "(?:0{0,2}\\d|0?[1-9]\\d|1[01]\\d|12[0-8])", e3.ipv6address = "(?:" + o + "|" + l + "|" + c + "|" + u + "|" + f + "|" + h + "|" + d + "|(?:(?:[\\dA-Fa-f]{1,4}:){0,5}[\\dA-Fa-f]{1,4})?::[\\dA-Fa-f]{1,4}|(?:(?:[\\dA-Fa-f]{1,4}:){0,6}[\\dA-Fa-f]{1,4})?::)", e3.ipvFuture = "v[\\dA-Fa-f]+\\.[\\w-\\.~" + t3 + ":]+", e3.scheme = "[a-zA-Z][a-zA-Z\\d+-\\.]*", e3.schemeRegex = new RegExp(e3.scheme);
          const m = "[\\w-\\.~%\\dA-Fa-f" + t3 + ":]*", p = "(?:\\[(?:" + e3.ipv6address + "|" + e3.ipvFuture + ")\\]|" + e3.ipv4address + "|[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=]{1,255})", g = "(?:" + m + "@)?" + p + "(?::\\d*)?", y = "(?:" + m + "@)?(" + p + ")(?::\\d*)?", b = s2 + "+", v = "(?:\\/[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*)*", _ = "\\/(?:" + b + v + ")?", w = b + v, $ = "[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=@]+" + v;
          return e3.hierPart = "(?:(?:\\/\\/" + g + v + ")|" + _ + "|" + w + "|(?:\\/\\/\\/[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*(?:\\/[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*)*))", e3.hierPartCapture = "(?:(?:\\/\\/" + y + v + ")|" + _ + "|" + w + ")", e3.relativeRef = "(?:(?:\\/\\/" + g + v + ")|" + _ + "|" + $ + "|)", e3.relativeRefCapture = "(?:(?:\\/\\/" + y + v + ")|" + _ + "|" + $ + "|)", e3.query = "[" + r2 + "\\/\\?]*(?=#|$)", e3.queryWithSquareBrackets = "[" + r2 + "\\[\\]\\/\\?]*(?=#|$)", e3.fragment = "[" + r2 + "\\/\\?]*", e3;
        } };
        a.rfc3986 = a.generate(), t2.ip = { v4Cidr: a.rfc3986.ipv4Cidr, v6Cidr: a.rfc3986.ipv6Cidr, ipv4: a.rfc3986.ipv4address, ipv6: a.rfc3986.ipv6address, ipvfuture: a.rfc3986.ipvFuture }, a.createRegex = function(e3) {
          const t3 = a.rfc3986, r2 = "(?:\\?" + (e3.allowQuerySquareBrackets ? t3.queryWithSquareBrackets : t3.query) + ")?(?:#" + t3.fragment + ")?", i = e3.domain ? t3.relativeRefCapture : t3.relativeRef;
          if (e3.relativeOnly)
            return a.wrap(i + r2);
          let o = "";
          if (e3.scheme) {
            s(e3.scheme instanceof RegExp || "string" == typeof e3.scheme || Array.isArray(e3.scheme), "scheme must be a RegExp, String, or Array");
            const r3 = [].concat(e3.scheme);
            s(r3.length >= 1, "scheme must have at least 1 scheme specified");
            const a2 = [];
            for (let e4 = 0; e4 < r3.length; ++e4) {
              const i2 = r3[e4];
              s(i2 instanceof RegExp || "string" == typeof i2, "scheme at position " + e4 + " must be a RegExp or String"), i2 instanceof RegExp ? a2.push(i2.source.toString()) : (s(t3.schemeRegex.test(i2), "scheme at position " + e4 + " must be a valid scheme"), a2.push(n(i2)));
            }
            o = a2.join("|");
          }
          const l = "(?:" + (o ? "(?:" + o + ")" : t3.scheme) + ":" + (e3.domain ? t3.hierPartCapture : t3.hierPart) + ")", c = e3.allowRelative ? "(?:" + l + "|" + i + ")" : l;
          return a.wrap(c + r2, o);
        }, a.wrap = function(e3, t3) {
          return { raw: e3 = `(?=.)(?!https?:/(?:$|[^/]))(?!https?:///)(?!https?:[^/])${e3}`, regex: new RegExp(`^${e3}$`), scheme: t3 };
        }, a.uriRegex = a.createRegex({}), t2.regex = function() {
          let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return e3.scheme || e3.allowRelative || e3.relativeOnly || e3.allowQuerySquareBrackets || e3.domain ? a.createRegex(e3) : a.uriRegex;
        };
      }, 1447: (e2, t2) => {
        "use strict";
        const r = { operators: ["!", "^", "*", "/", "%", "+", "-", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "??"], operatorCharacters: ["!", "^", "*", "/", "%", "+", "-", "<", "=", ">", "&", "|", "?"], operatorsOrder: [["^"], ["*", "/", "%"], ["+", "-"], ["<", "<=", ">", ">="], ["==", "!="], ["&&"], ["||", "??"]], operatorsPrefix: ["!", "n"], literals: { '"': '"', "`": "`", "'": "'", "[": "]" }, numberRx: /^(?:[0-9]*\.?[0-9]*){1}$/, tokenRx: /^[\w\$\#\.\@\:\{\}]+$/, symbol: Symbol("formula"), settings: Symbol("settings") };
        t2.Parser = class {
          constructor(e3) {
            let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!t3[r.settings] && t3.constants)
              for (const e4 in t3.constants) {
                const r2 = t3.constants[e4];
                if (null !== r2 && !["boolean", "number", "string"].includes(typeof r2))
                  throw new Error(`Formula constant ${e4} contains invalid ${typeof r2} value type`);
              }
            this.settings = t3[r.settings] ? t3 : Object.assign({ [r.settings]: true, constants: {}, functions: {} }, t3), this.single = null, this._parts = null, this._parse(e3);
          }
          _parse(e3) {
            let s = [], n = "", a = 0, i = false;
            const o = (e4) => {
              if (a)
                throw new Error("Formula missing closing parenthesis");
              const o2 = s.length ? s[s.length - 1] : null;
              if (i || n || e4) {
                if (o2 && "reference" === o2.type && ")" === e4)
                  return o2.type = "function", o2.value = this._subFormula(n, o2.value), void (n = "");
                if (")" === e4) {
                  const e5 = new t2.Parser(n, this.settings);
                  s.push({ type: "segment", value: e5 });
                } else if (i) {
                  if ("]" === i)
                    return s.push({ type: "reference", value: n }), void (n = "");
                  s.push({ type: "literal", value: n });
                } else if (r.operatorCharacters.includes(n))
                  o2 && "operator" === o2.type && r.operators.includes(o2.value + n) ? o2.value += n : s.push({ type: "operator", value: n });
                else if (n.match(r.numberRx))
                  s.push({ type: "constant", value: parseFloat(n) });
                else if (void 0 !== this.settings.constants[n])
                  s.push({ type: "constant", value: this.settings.constants[n] });
                else {
                  if (!n.match(r.tokenRx))
                    throw new Error(`Formula contains invalid token: ${n}`);
                  s.push({ type: "reference", value: n });
                }
                n = "";
              }
            };
            for (const t3 of e3)
              i ? t3 === i ? (o(), i = false) : n += t3 : a ? "(" === t3 ? (n += t3, ++a) : ")" === t3 ? (--a, a ? n += t3 : o(t3)) : n += t3 : t3 in r.literals ? i = r.literals[t3] : "(" === t3 ? (o(), ++a) : r.operatorCharacters.includes(t3) ? (o(), n = t3, o()) : " " !== t3 ? n += t3 : o();
            o(), s = s.map((e4, t3) => "operator" !== e4.type || "-" !== e4.value || t3 && "operator" !== s[t3 - 1].type ? e4 : { type: "operator", value: "n" });
            let l = false;
            for (const e4 of s) {
              if ("operator" === e4.type) {
                if (r.operatorsPrefix.includes(e4.value))
                  continue;
                if (!l)
                  throw new Error("Formula contains an operator in invalid position");
                if (!r.operators.includes(e4.value))
                  throw new Error(`Formula contains an unknown operator ${e4.value}`);
              } else if (l)
                throw new Error("Formula missing expected operator");
              l = !l;
            }
            if (!l)
              throw new Error("Formula contains invalid trailing operator");
            1 === s.length && ["reference", "literal", "constant"].includes(s[0].type) && (this.single = { type: "reference" === s[0].type ? "reference" : "value", value: s[0].value }), this._parts = s.map((e4) => {
              if ("operator" === e4.type)
                return r.operatorsPrefix.includes(e4.value) ? e4 : e4.value;
              if ("reference" !== e4.type)
                return e4.value;
              if (this.settings.tokenRx && !this.settings.tokenRx.test(e4.value))
                throw new Error(`Formula contains invalid reference ${e4.value}`);
              return this.settings.reference ? this.settings.reference(e4.value) : r.reference(e4.value);
            });
          }
          _subFormula(e3, s) {
            const n = this.settings.functions[s];
            if ("function" != typeof n)
              throw new Error(`Formula contains unknown function ${s}`);
            let a = [];
            if (e3) {
              let t3 = "", n2 = 0, i = false;
              const o = () => {
                if (!t3)
                  throw new Error(`Formula contains function ${s} with invalid arguments ${e3}`);
                a.push(t3), t3 = "";
              };
              for (let s2 = 0; s2 < e3.length; ++s2) {
                const a2 = e3[s2];
                i ? (t3 += a2, a2 === i && (i = false)) : a2 in r.literals && !n2 ? (t3 += a2, i = r.literals[a2]) : "," !== a2 || n2 ? (t3 += a2, "(" === a2 ? ++n2 : ")" === a2 && --n2) : o();
              }
              o();
            }
            return a = a.map((e4) => new t2.Parser(e4, this.settings)), function(e4) {
              const t3 = [];
              for (const r2 of a)
                t3.push(r2.evaluate(e4));
              return n.call(e4, ...t3);
            };
          }
          evaluate(e3) {
            const t3 = this._parts.slice();
            for (let s = t3.length - 2; s >= 0; --s) {
              const n = t3[s];
              if (n && "operator" === n.type) {
                const a = t3[s + 1];
                t3.splice(s + 1, 1);
                const i = r.evaluate(a, e3);
                t3[s] = r.single(n.value, i);
              }
            }
            return r.operatorsOrder.forEach((s) => {
              for (let n = 1; n < t3.length - 1; )
                if (s.includes(t3[n])) {
                  const s2 = t3[n], a = r.evaluate(t3[n - 1], e3), i = r.evaluate(t3[n + 1], e3);
                  t3.splice(n, 2);
                  const o = r.calculate(s2, a, i);
                  t3[n - 1] = 0 === o ? 0 : o;
                } else
                  n += 2;
            }), r.evaluate(t3[0], e3);
          }
        }, t2.Parser.prototype[r.symbol] = true, r.reference = function(e3) {
          return function(t3) {
            return t3 && void 0 !== t3[e3] ? t3[e3] : null;
          };
        }, r.evaluate = function(e3, t3) {
          return null === e3 ? null : "function" == typeof e3 ? e3(t3) : e3[r.symbol] ? e3.evaluate(t3) : e3;
        }, r.single = function(e3, t3) {
          if ("!" === e3)
            return !t3;
          const r2 = -t3;
          return 0 === r2 ? 0 : r2;
        }, r.calculate = function(e3, t3, s) {
          if ("??" === e3)
            return r.exists(t3) ? t3 : s;
          if ("string" == typeof t3 || "string" == typeof s) {
            if ("+" === e3)
              return (t3 = r.exists(t3) ? t3 : "") + (r.exists(s) ? s : "");
          } else
            switch (e3) {
              case "^":
                return Math.pow(t3, s);
              case "*":
                return t3 * s;
              case "/":
                return t3 / s;
              case "%":
                return t3 % s;
              case "+":
                return t3 + s;
              case "-":
                return t3 - s;
            }
          switch (e3) {
            case "<":
              return t3 < s;
            case "<=":
              return t3 <= s;
            case ">":
              return t3 > s;
            case ">=":
              return t3 >= s;
            case "==":
              return t3 === s;
            case "!=":
              return t3 !== s;
            case "&&":
              return t3 && s;
            case "||":
              return t3 || s;
          }
          return null;
        }, r.exists = function(e3) {
          return null != e3;
        };
      }, 9926: () => {
      }, 5688: () => {
      }, 9708: () => {
      }, 1152: () => {
      }, 443: () => {
      }, 9848: () => {
      }, 5934: (e2) => {
        "use strict";
        e2.exports = { version: "17.7.0" };
      } }, t = {}, function r(s) {
        var n = t[s];
        if (void 0 !== n)
          return n.exports;
        var a = t[s] = { exports: {} };
        return e[s](a, a.exports, r), a.exports;
      }(5107);
      var e, t;
    });
  }
});

// node_modules/bignumber.js/bignumber.mjs
var isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i;
var mathceil = Math.ceil;
var mathfloor = Math.floor;
var bignumberError = "[BigNumber Error] ";
var tooManyDigits = bignumberError + "Number primitive has more than 15 significant digits: ";
var BASE = 1e14;
var LOG_BASE = 14;
var MAX_SAFE_INTEGER = 9007199254740991;
var POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13];
var SQRT_BASE = 1e7;
var MAX = 1e9;
function clone(configObject) {
  var div, convertBase, parseNumeric, P = BigNumber2.prototype = { constructor: BigNumber2, toString: null, valueOf: null }, ONE = new BigNumber2(1), DECIMAL_PLACES = 20, ROUNDING_MODE = 4, TO_EXP_NEG = -7, TO_EXP_POS = 21, MIN_EXP = -1e7, MAX_EXP = 1e7, CRYPTO = false, MODULO_MODE = 1, POW_PRECISION = 0, FORMAT = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz", alphabetHasNormalDecimalDigits = true;
  function BigNumber2(v, b) {
    var alphabet, c, caseChanged, e, i, isNum, len, str, x = this;
    if (!(x instanceof BigNumber2))
      return new BigNumber2(v, b);
    if (b == null) {
      if (v && v._isBigNumber === true) {
        x.s = v.s;
        if (!v.c || v.e > MAX_EXP) {
          x.c = x.e = null;
        } else if (v.e < MIN_EXP) {
          x.c = [x.e = 0];
        } else {
          x.e = v.e;
          x.c = v.c.slice();
        }
        return;
      }
      if ((isNum = typeof v == "number") && v * 0 == 0) {
        x.s = 1 / v < 0 ? (v = -v, -1) : 1;
        if (v === ~~v) {
          for (e = 0, i = v; i >= 10; i /= 10, e++)
            ;
          if (e > MAX_EXP) {
            x.c = x.e = null;
          } else {
            x.e = e;
            x.c = [v];
          }
          return;
        }
        str = String(v);
      } else {
        if (!isNumeric.test(str = String(v)))
          return parseNumeric(x, str, isNum);
        x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
      }
      if ((e = str.indexOf(".")) > -1)
        str = str.replace(".", "");
      if ((i = str.search(/e/i)) > 0) {
        if (e < 0)
          e = i;
        e += +str.slice(i + 1);
        str = str.substring(0, i);
      } else if (e < 0) {
        e = str.length;
      }
    } else {
      intCheck(b, 2, ALPHABET.length, "Base");
      if (b == 10 && alphabetHasNormalDecimalDigits) {
        x = new BigNumber2(v);
        return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
      }
      str = String(v);
      if (isNum = typeof v == "number") {
        if (v * 0 != 0)
          return parseNumeric(x, str, isNum, b);
        x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;
        if (BigNumber2.DEBUG && str.replace(/^0\.0*|\./, "").length > 15) {
          throw Error(tooManyDigits + v);
        }
      } else {
        x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
      }
      alphabet = ALPHABET.slice(0, b);
      e = i = 0;
      for (len = str.length; i < len; i++) {
        if (alphabet.indexOf(c = str.charAt(i)) < 0) {
          if (c == ".") {
            if (i > e) {
              e = len;
              continue;
            }
          } else if (!caseChanged) {
            if (str == str.toUpperCase() && (str = str.toLowerCase()) || str == str.toLowerCase() && (str = str.toUpperCase())) {
              caseChanged = true;
              i = -1;
              e = 0;
              continue;
            }
          }
          return parseNumeric(x, String(v), isNum, b);
        }
      }
      isNum = false;
      str = convertBase(str, b, 10, x.s);
      if ((e = str.indexOf(".")) > -1)
        str = str.replace(".", "");
      else
        e = str.length;
    }
    for (i = 0; str.charCodeAt(i) === 48; i++)
      ;
    for (len = str.length; str.charCodeAt(--len) === 48; )
      ;
    if (str = str.slice(i, ++len)) {
      len -= i;
      if (isNum && BigNumber2.DEBUG && len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
        throw Error(tooManyDigits + x.s * v);
      }
      if ((e = e - i - 1) > MAX_EXP) {
        x.c = x.e = null;
      } else if (e < MIN_EXP) {
        x.c = [x.e = 0];
      } else {
        x.e = e;
        x.c = [];
        i = (e + 1) % LOG_BASE;
        if (e < 0)
          i += LOG_BASE;
        if (i < len) {
          if (i)
            x.c.push(+str.slice(0, i));
          for (len -= LOG_BASE; i < len; ) {
            x.c.push(+str.slice(i, i += LOG_BASE));
          }
          i = LOG_BASE - (str = str.slice(i)).length;
        } else {
          i -= len;
        }
        for (; i--; str += "0")
          ;
        x.c.push(+str);
      }
    } else {
      x.c = [x.e = 0];
    }
  }
  BigNumber2.clone = clone;
  BigNumber2.ROUND_UP = 0;
  BigNumber2.ROUND_DOWN = 1;
  BigNumber2.ROUND_CEIL = 2;
  BigNumber2.ROUND_FLOOR = 3;
  BigNumber2.ROUND_HALF_UP = 4;
  BigNumber2.ROUND_HALF_DOWN = 5;
  BigNumber2.ROUND_HALF_EVEN = 6;
  BigNumber2.ROUND_HALF_CEIL = 7;
  BigNumber2.ROUND_HALF_FLOOR = 8;
  BigNumber2.EUCLID = 9;
  BigNumber2.config = BigNumber2.set = function(obj) {
    var p, v;
    if (obj != null) {
      if (typeof obj == "object") {
        if (obj.hasOwnProperty(p = "DECIMAL_PLACES")) {
          v = obj[p];
          intCheck(v, 0, MAX, p);
          DECIMAL_PLACES = v;
        }
        if (obj.hasOwnProperty(p = "ROUNDING_MODE")) {
          v = obj[p];
          intCheck(v, 0, 8, p);
          ROUNDING_MODE = v;
        }
        if (obj.hasOwnProperty(p = "EXPONENTIAL_AT")) {
          v = obj[p];
          if (v && v.pop) {
            intCheck(v[0], -MAX, 0, p);
            intCheck(v[1], 0, MAX, p);
            TO_EXP_NEG = v[0];
            TO_EXP_POS = v[1];
          } else {
            intCheck(v, -MAX, MAX, p);
            TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
          }
        }
        if (obj.hasOwnProperty(p = "RANGE")) {
          v = obj[p];
          if (v && v.pop) {
            intCheck(v[0], -MAX, -1, p);
            intCheck(v[1], 1, MAX, p);
            MIN_EXP = v[0];
            MAX_EXP = v[1];
          } else {
            intCheck(v, -MAX, MAX, p);
            if (v) {
              MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
            } else {
              throw Error(bignumberError + p + " cannot be zero: " + v);
            }
          }
        }
        if (obj.hasOwnProperty(p = "CRYPTO")) {
          v = obj[p];
          if (v === !!v) {
            if (v) {
              if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                CRYPTO = v;
              } else {
                CRYPTO = !v;
                throw Error(bignumberError + "crypto unavailable");
              }
            } else {
              CRYPTO = v;
            }
          } else {
            throw Error(bignumberError + p + " not true or false: " + v);
          }
        }
        if (obj.hasOwnProperty(p = "MODULO_MODE")) {
          v = obj[p];
          intCheck(v, 0, 9, p);
          MODULO_MODE = v;
        }
        if (obj.hasOwnProperty(p = "POW_PRECISION")) {
          v = obj[p];
          intCheck(v, 0, MAX, p);
          POW_PRECISION = v;
        }
        if (obj.hasOwnProperty(p = "FORMAT")) {
          v = obj[p];
          if (typeof v == "object")
            FORMAT = v;
          else
            throw Error(bignumberError + p + " not an object: " + v);
        }
        if (obj.hasOwnProperty(p = "ALPHABET")) {
          v = obj[p];
          if (typeof v == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
            alphabetHasNormalDecimalDigits = v.slice(0, 10) == "0123456789";
            ALPHABET = v;
          } else {
            throw Error(bignumberError + p + " invalid: " + v);
          }
        }
      } else {
        throw Error(bignumberError + "Object expected: " + obj);
      }
    }
    return {
      DECIMAL_PLACES,
      ROUNDING_MODE,
      EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
      RANGE: [MIN_EXP, MAX_EXP],
      CRYPTO,
      MODULO_MODE,
      POW_PRECISION,
      FORMAT,
      ALPHABET
    };
  };
  BigNumber2.isBigNumber = function(v) {
    if (!v || v._isBigNumber !== true)
      return false;
    if (!BigNumber2.DEBUG)
      return true;
    var i, n, c = v.c, e = v.e, s = v.s;
    out:
      if ({}.toString.call(c) == "[object Array]") {
        if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {
          if (c[0] === 0) {
            if (e === 0 && c.length === 1)
              return true;
            break out;
          }
          i = (e + 1) % LOG_BASE;
          if (i < 1)
            i += LOG_BASE;
          if (String(c[0]).length == i) {
            for (i = 0; i < c.length; i++) {
              n = c[i];
              if (n < 0 || n >= BASE || n !== mathfloor(n))
                break out;
            }
            if (n !== 0)
              return true;
          }
        }
      } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
        return true;
      }
    throw Error(bignumberError + "Invalid BigNumber: " + v);
  };
  BigNumber2.maximum = BigNumber2.max = function() {
    return maxOrMin(arguments, P.lt);
  };
  BigNumber2.minimum = BigNumber2.min = function() {
    return maxOrMin(arguments, P.gt);
  };
  BigNumber2.random = function() {
    var pow2_53 = 9007199254740992;
    var random53bitInt = Math.random() * pow2_53 & 2097151 ? function() {
      return mathfloor(Math.random() * pow2_53);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(dp) {
      var a, b, e, k, v, i = 0, c = [], rand = new BigNumber2(ONE);
      if (dp == null)
        dp = DECIMAL_PLACES;
      else
        intCheck(dp, 0, MAX);
      k = mathceil(dp / LOG_BASE);
      if (CRYPTO) {
        if (crypto.getRandomValues) {
          a = crypto.getRandomValues(new Uint32Array(k *= 2));
          for (; i < k; ) {
            v = a[i] * 131072 + (a[i + 1] >>> 11);
            if (v >= 9e15) {
              b = crypto.getRandomValues(new Uint32Array(2));
              a[i] = b[0];
              a[i + 1] = b[1];
            } else {
              c.push(v % 1e14);
              i += 2;
            }
          }
          i = k / 2;
        } else if (crypto.randomBytes) {
          a = crypto.randomBytes(k *= 7);
          for (; i < k; ) {
            v = (a[i] & 31) * 281474976710656 + a[i + 1] * 1099511627776 + a[i + 2] * 4294967296 + a[i + 3] * 16777216 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
            if (v >= 9e15) {
              crypto.randomBytes(7).copy(a, i);
            } else {
              c.push(v % 1e14);
              i += 7;
            }
          }
          i = k / 7;
        } else {
          CRYPTO = false;
          throw Error(bignumberError + "crypto unavailable");
        }
      }
      if (!CRYPTO) {
        for (; i < k; ) {
          v = random53bitInt();
          if (v < 9e15)
            c[i++] = v % 1e14;
        }
      }
      k = c[--i];
      dp %= LOG_BASE;
      if (k && dp) {
        v = POWS_TEN[LOG_BASE - dp];
        c[i] = mathfloor(k / v) * v;
      }
      for (; c[i] === 0; c.pop(), i--)
        ;
      if (i < 0) {
        c = [e = 0];
      } else {
        for (e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE)
          ;
        for (i = 1, v = c[0]; v >= 10; v /= 10, i++)
          ;
        if (i < LOG_BASE)
          e -= LOG_BASE - i;
      }
      rand.e = e;
      rand.c = c;
      return rand;
    };
  }();
  BigNumber2.sum = function() {
    var i = 1, args = arguments, sum = new BigNumber2(args[0]);
    for (; i < args.length; )
      sum = sum.plus(args[i++]);
    return sum;
  };
  convertBase = function() {
    var decimal = "0123456789";
    function toBaseOut(str, baseIn, baseOut, alphabet) {
      var j, arr = [0], arrL, i = 0, len = str.length;
      for (; i < len; ) {
        for (arrL = arr.length; arrL--; arr[arrL] *= baseIn)
          ;
        arr[0] += alphabet.indexOf(str.charAt(i++));
        for (j = 0; j < arr.length; j++) {
          if (arr[j] > baseOut - 1) {
            if (arr[j + 1] == null)
              arr[j + 1] = 0;
            arr[j + 1] += arr[j] / baseOut | 0;
            arr[j] %= baseOut;
          }
        }
      }
      return arr.reverse();
    }
    return function(str, baseIn, baseOut, sign, callerIsToString) {
      var alphabet, d, e, k, r, x, xc, y, i = str.indexOf("."), dp = DECIMAL_PLACES, rm = ROUNDING_MODE;
      if (i >= 0) {
        k = POW_PRECISION;
        POW_PRECISION = 0;
        str = str.replace(".", "");
        y = new BigNumber2(baseIn);
        x = y.pow(str.length - i);
        POW_PRECISION = k;
        y.c = toBaseOut(
          toFixedPoint(coeffToString(x.c), x.e, "0"),
          10,
          baseOut,
          decimal
        );
        y.e = y.c.length;
      }
      xc = toBaseOut(str, baseIn, baseOut, callerIsToString ? (alphabet = ALPHABET, decimal) : (alphabet = decimal, ALPHABET));
      e = k = xc.length;
      for (; xc[--k] == 0; xc.pop())
        ;
      if (!xc[0])
        return alphabet.charAt(0);
      if (i < 0) {
        --e;
      } else {
        x.c = xc;
        x.e = e;
        x.s = sign;
        x = div(x, y, dp, rm, baseOut);
        xc = x.c;
        r = x.r;
        e = x.e;
      }
      d = e + dp + 1;
      i = xc[d];
      k = baseOut / 2;
      r = r || d < 0 || xc[d + 1] != null;
      r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));
      if (d < 1 || !xc[0]) {
        str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
      } else {
        xc.length = d;
        if (r) {
          for (--baseOut; ++xc[--d] > baseOut; ) {
            xc[d] = 0;
            if (!d) {
              ++e;
              xc = [1].concat(xc);
            }
          }
        }
        for (k = xc.length; !xc[--k]; )
          ;
        for (i = 0, str = ""; i <= k; str += alphabet.charAt(xc[i++]))
          ;
        str = toFixedPoint(str, e, alphabet.charAt(0));
      }
      return str;
    };
  }();
  div = function() {
    function multiply(x, k, base) {
      var m, temp, xlo, xhi, carry = 0, i = x.length, klo = k % SQRT_BASE, khi = k / SQRT_BASE | 0;
      for (x = x.slice(); i--; ) {
        xlo = x[i] % SQRT_BASE;
        xhi = x[i] / SQRT_BASE | 0;
        m = khi * xlo + xhi * klo;
        temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
        carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
        x[i] = temp % base;
      }
      if (carry)
        x = [carry].concat(x);
      return x;
    }
    function compare2(a, b, aL, bL) {
      var i, cmp;
      if (aL != bL) {
        cmp = aL > bL ? 1 : -1;
      } else {
        for (i = cmp = 0; i < aL; i++) {
          if (a[i] != b[i]) {
            cmp = a[i] > b[i] ? 1 : -1;
            break;
          }
        }
      }
      return cmp;
    }
    function subtract(a, b, aL, base) {
      var i = 0;
      for (; aL--; ) {
        a[aL] -= i;
        i = a[aL] < b[aL] ? 1 : 0;
        a[aL] = i * base + a[aL] - b[aL];
      }
      for (; !a[0] && a.length > 1; a.splice(0, 1))
        ;
    }
    return function(x, y, dp, rm, base) {
      var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0, yL, yz, s = x.s == y.s ? 1 : -1, xc = x.c, yc = y.c;
      if (!xc || !xc[0] || !yc || !yc[0]) {
        return new BigNumber2(
          // Return NaN if either NaN, or both Infinity or 0.
          !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            xc && xc[0] == 0 || !yc ? s * 0 : s / 0
          )
        );
      }
      q = new BigNumber2(s);
      qc = q.c = [];
      e = x.e - y.e;
      s = dp + e + 1;
      if (!base) {
        base = BASE;
        e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
        s = s / LOG_BASE | 0;
      }
      for (i = 0; yc[i] == (xc[i] || 0); i++)
        ;
      if (yc[i] > (xc[i] || 0))
        e--;
      if (s < 0) {
        qc.push(1);
        more = true;
      } else {
        xL = xc.length;
        yL = yc.length;
        i = 0;
        s += 2;
        n = mathfloor(base / (yc[0] + 1));
        if (n > 1) {
          yc = multiply(yc, n, base);
          xc = multiply(xc, n, base);
          yL = yc.length;
          xL = xc.length;
        }
        xi = yL;
        rem = xc.slice(0, yL);
        remL = rem.length;
        for (; remL < yL; rem[remL++] = 0)
          ;
        yz = yc.slice();
        yz = [0].concat(yz);
        yc0 = yc[0];
        if (yc[1] >= base / 2)
          yc0++;
        do {
          n = 0;
          cmp = compare2(yc, rem, yL, remL);
          if (cmp < 0) {
            rem0 = rem[0];
            if (yL != remL)
              rem0 = rem0 * base + (rem[1] || 0);
            n = mathfloor(rem0 / yc0);
            if (n > 1) {
              if (n >= base)
                n = base - 1;
              prod = multiply(yc, n, base);
              prodL = prod.length;
              remL = rem.length;
              while (compare2(prod, rem, prodL, remL) == 1) {
                n--;
                subtract(prod, yL < prodL ? yz : yc, prodL, base);
                prodL = prod.length;
                cmp = 1;
              }
            } else {
              if (n == 0) {
                cmp = n = 1;
              }
              prod = yc.slice();
              prodL = prod.length;
            }
            if (prodL < remL)
              prod = [0].concat(prod);
            subtract(rem, prod, remL, base);
            remL = rem.length;
            if (cmp == -1) {
              while (compare2(yc, rem, yL, remL) < 1) {
                n++;
                subtract(rem, yL < remL ? yz : yc, remL, base);
                remL = rem.length;
              }
            }
          } else if (cmp === 0) {
            n++;
            rem = [0];
          }
          qc[i++] = n;
          if (rem[0]) {
            rem[remL++] = xc[xi] || 0;
          } else {
            rem = [xc[xi]];
            remL = 1;
          }
        } while ((xi++ < xL || rem[0] != null) && s--);
        more = rem[0] != null;
        if (!qc[0])
          qc.splice(0, 1);
      }
      if (base == BASE) {
        for (i = 1, s = qc[0]; s >= 10; s /= 10, i++)
          ;
        round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
      } else {
        q.e = e;
        q.r = +more;
      }
      return q;
    };
  }();
  function format(n, i, rm, id) {
    var c0, e, ne, len, str;
    if (rm == null)
      rm = ROUNDING_MODE;
    else
      intCheck(rm, 0, 8);
    if (!n.c)
      return n.toString();
    c0 = n.c[0];
    ne = n.e;
    if (i == null) {
      str = coeffToString(n.c);
      str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS) ? toExponential(str, ne) : toFixedPoint(str, ne, "0");
    } else {
      n = round(new BigNumber2(n), i, rm);
      e = n.e;
      str = coeffToString(n.c);
      len = str.length;
      if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {
        for (; len < i; str += "0", len++)
          ;
        str = toExponential(str, e);
      } else {
        i -= ne;
        str = toFixedPoint(str, e, "0");
        if (e + 1 > len) {
          if (--i > 0)
            for (str += "."; i--; str += "0")
              ;
        } else {
          i += e - len;
          if (i > 0) {
            if (e + 1 == len)
              str += ".";
            for (; i--; str += "0")
              ;
          }
        }
      }
    }
    return n.s < 0 && c0 ? "-" + str : str;
  }
  function maxOrMin(args, method) {
    var n, i = 1, m = new BigNumber2(args[0]);
    for (; i < args.length; i++) {
      n = new BigNumber2(args[i]);
      if (!n.s) {
        m = n;
        break;
      } else if (method.call(m, n)) {
        m = n;
      }
    }
    return m;
  }
  function normalise(n, c, e) {
    var i = 1, j = c.length;
    for (; !c[--j]; c.pop())
      ;
    for (j = c[0]; j >= 10; j /= 10, i++)
      ;
    if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {
      n.c = n.e = null;
    } else if (e < MIN_EXP) {
      n.c = [n.e = 0];
    } else {
      n.e = e;
      n.c = c;
    }
    return n;
  }
  parseNumeric = function() {
    var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i, dotAfter = /^([^.]+)\.$/, dotBefore = /^\.([^.]+)$/, isInfinityOrNaN = /^-?(Infinity|NaN)$/, whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(x, str, isNum, b) {
      var base, s = isNum ? str : str.replace(whitespaceOrPlus, "");
      if (isInfinityOrNaN.test(s)) {
        x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
      } else {
        if (!isNum) {
          s = s.replace(basePrefix, function(m, p1, p2) {
            base = (p2 = p2.toLowerCase()) == "x" ? 16 : p2 == "b" ? 2 : 8;
            return !b || b == base ? p1 : m;
          });
          if (b) {
            base = b;
            s = s.replace(dotAfter, "$1").replace(dotBefore, "0.$1");
          }
          if (str != s)
            return new BigNumber2(s, base);
        }
        if (BigNumber2.DEBUG) {
          throw Error(bignumberError + "Not a" + (b ? " base " + b : "") + " number: " + str);
        }
        x.s = null;
      }
      x.c = x.e = null;
    };
  }();
  function round(x, sd, rm, r) {
    var d, i, j, k, n, ni, rd, xc = x.c, pows10 = POWS_TEN;
    if (xc) {
      out: {
        for (d = 1, k = xc[0]; k >= 10; k /= 10, d++)
          ;
        i = sd - d;
        if (i < 0) {
          i += LOG_BASE;
          j = sd;
          n = xc[ni = 0];
          rd = n / pows10[d - j - 1] % 10 | 0;
        } else {
          ni = mathceil((i + 1) / LOG_BASE);
          if (ni >= xc.length) {
            if (r) {
              for (; xc.length <= ni; xc.push(0))
                ;
              n = rd = 0;
              d = 1;
              i %= LOG_BASE;
              j = i - LOG_BASE + 1;
            } else {
              break out;
            }
          } else {
            n = k = xc[ni];
            for (d = 1; k >= 10; k /= 10, d++)
              ;
            i %= LOG_BASE;
            j = i - LOG_BASE + d;
            rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
          }
        }
        r = r || sd < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
        r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
        if (sd < 1 || !xc[0]) {
          xc.length = 0;
          if (r) {
            sd -= x.e + 1;
            xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
            x.e = -sd || 0;
          } else {
            xc[0] = x.e = 0;
          }
          return x;
        }
        if (i == 0) {
          xc.length = ni;
          k = 1;
          ni--;
        } else {
          xc.length = ni + 1;
          k = pows10[LOG_BASE - i];
          xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
        }
        if (r) {
          for (; ; ) {
            if (ni == 0) {
              for (i = 1, j = xc[0]; j >= 10; j /= 10, i++)
                ;
              j = xc[0] += k;
              for (k = 1; j >= 10; j /= 10, k++)
                ;
              if (i != k) {
                x.e++;
                if (xc[0] == BASE)
                  xc[0] = 1;
              }
              break;
            } else {
              xc[ni] += k;
              if (xc[ni] != BASE)
                break;
              xc[ni--] = 0;
              k = 1;
            }
          }
        }
        for (i = xc.length; xc[--i] === 0; xc.pop())
          ;
      }
      if (x.e > MAX_EXP) {
        x.c = x.e = null;
      } else if (x.e < MIN_EXP) {
        x.c = [x.e = 0];
      }
    }
    return x;
  }
  function valueOf(n) {
    var str, e = n.e;
    if (e === null)
      return n.toString();
    str = coeffToString(n.c);
    str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e, "0");
    return n.s < 0 ? "-" + str : str;
  }
  P.absoluteValue = P.abs = function() {
    var x = new BigNumber2(this);
    if (x.s < 0)
      x.s = 1;
    return x;
  };
  P.comparedTo = function(y, b) {
    return compare(this, new BigNumber2(y, b));
  };
  P.decimalPlaces = P.dp = function(dp, rm) {
    var c, n, v, x = this;
    if (dp != null) {
      intCheck(dp, 0, MAX);
      if (rm == null)
        rm = ROUNDING_MODE;
      else
        intCheck(rm, 0, 8);
      return round(new BigNumber2(x), dp + x.e + 1, rm);
    }
    if (!(c = x.c))
      return null;
    n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
    if (v = c[v])
      for (; v % 10 == 0; v /= 10, n--)
        ;
    if (n < 0)
      n = 0;
    return n;
  };
  P.dividedBy = P.div = function(y, b) {
    return div(this, new BigNumber2(y, b), DECIMAL_PLACES, ROUNDING_MODE);
  };
  P.dividedToIntegerBy = P.idiv = function(y, b) {
    return div(this, new BigNumber2(y, b), 0, 1);
  };
  P.exponentiatedBy = P.pow = function(n, m) {
    var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y, x = this;
    n = new BigNumber2(n);
    if (n.c && !n.isInteger()) {
      throw Error(bignumberError + "Exponent not an integer: " + valueOf(n));
    }
    if (m != null)
      m = new BigNumber2(m);
    nIsBig = n.e > 14;
    if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {
      y = new BigNumber2(Math.pow(+valueOf(x), nIsBig ? n.s * (2 - isOdd(n)) : +valueOf(n)));
      return m ? y.mod(m) : y;
    }
    nIsNeg = n.s < 0;
    if (m) {
      if (m.c ? !m.c[0] : !m.s)
        return new BigNumber2(NaN);
      isModExp = !nIsNeg && x.isInteger() && m.isInteger();
      if (isModExp)
        x = x.mod(m);
    } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0 ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7 : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {
      k = x.s < 0 && isOdd(n) ? -0 : 0;
      if (x.e > -1)
        k = 1 / k;
      return new BigNumber2(nIsNeg ? 1 / k : k);
    } else if (POW_PRECISION) {
      k = mathceil(POW_PRECISION / LOG_BASE + 2);
    }
    if (nIsBig) {
      half = new BigNumber2(0.5);
      if (nIsNeg)
        n.s = 1;
      nIsOdd = isOdd(n);
    } else {
      i = Math.abs(+valueOf(n));
      nIsOdd = i % 2;
    }
    y = new BigNumber2(ONE);
    for (; ; ) {
      if (nIsOdd) {
        y = y.times(x);
        if (!y.c)
          break;
        if (k) {
          if (y.c.length > k)
            y.c.length = k;
        } else if (isModExp) {
          y = y.mod(m);
        }
      }
      if (i) {
        i = mathfloor(i / 2);
        if (i === 0)
          break;
        nIsOdd = i % 2;
      } else {
        n = n.times(half);
        round(n, n.e + 1, 1);
        if (n.e > 14) {
          nIsOdd = isOdd(n);
        } else {
          i = +valueOf(n);
          if (i === 0)
            break;
          nIsOdd = i % 2;
        }
      }
      x = x.times(x);
      if (k) {
        if (x.c && x.c.length > k)
          x.c.length = k;
      } else if (isModExp) {
        x = x.mod(m);
      }
    }
    if (isModExp)
      return y;
    if (nIsNeg)
      y = ONE.div(y);
    return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
  };
  P.integerValue = function(rm) {
    var n = new BigNumber2(this);
    if (rm == null)
      rm = ROUNDING_MODE;
    else
      intCheck(rm, 0, 8);
    return round(n, n.e + 1, rm);
  };
  P.isEqualTo = P.eq = function(y, b) {
    return compare(this, new BigNumber2(y, b)) === 0;
  };
  P.isFinite = function() {
    return !!this.c;
  };
  P.isGreaterThan = P.gt = function(y, b) {
    return compare(this, new BigNumber2(y, b)) > 0;
  };
  P.isGreaterThanOrEqualTo = P.gte = function(y, b) {
    return (b = compare(this, new BigNumber2(y, b))) === 1 || b === 0;
  };
  P.isInteger = function() {
    return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
  };
  P.isLessThan = P.lt = function(y, b) {
    return compare(this, new BigNumber2(y, b)) < 0;
  };
  P.isLessThanOrEqualTo = P.lte = function(y, b) {
    return (b = compare(this, new BigNumber2(y, b))) === -1 || b === 0;
  };
  P.isNaN = function() {
    return !this.s;
  };
  P.isNegative = function() {
    return this.s < 0;
  };
  P.isPositive = function() {
    return this.s > 0;
  };
  P.isZero = function() {
    return !!this.c && this.c[0] == 0;
  };
  P.minus = function(y, b) {
    var i, j, t, xLTy, x = this, a = x.s;
    y = new BigNumber2(y, b);
    b = y.s;
    if (!a || !b)
      return new BigNumber2(NaN);
    if (a != b) {
      y.s = -b;
      return x.plus(y);
    }
    var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
    if (!xe || !ye) {
      if (!xc || !yc)
        return xc ? (y.s = -b, y) : new BigNumber2(yc ? x : NaN);
      if (!xc[0] || !yc[0]) {
        return yc[0] ? (y.s = -b, y) : new BigNumber2(xc[0] ? x : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          ROUNDING_MODE == 3 ? -0 : 0
        ));
      }
    }
    xe = bitFloor(xe);
    ye = bitFloor(ye);
    xc = xc.slice();
    if (a = xe - ye) {
      if (xLTy = a < 0) {
        a = -a;
        t = xc;
      } else {
        ye = xe;
        t = yc;
      }
      t.reverse();
      for (b = a; b--; t.push(0))
        ;
      t.reverse();
    } else {
      j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;
      for (a = b = 0; b < j; b++) {
        if (xc[b] != yc[b]) {
          xLTy = xc[b] < yc[b];
          break;
        }
      }
    }
    if (xLTy)
      t = xc, xc = yc, yc = t, y.s = -y.s;
    b = (j = yc.length) - (i = xc.length);
    if (b > 0)
      for (; b--; xc[i++] = 0)
        ;
    b = BASE - 1;
    for (; j > a; ) {
      if (xc[--j] < yc[j]) {
        for (i = j; i && !xc[--i]; xc[i] = b)
          ;
        --xc[i];
        xc[j] += BASE;
      }
      xc[j] -= yc[j];
    }
    for (; xc[0] == 0; xc.splice(0, 1), --ye)
      ;
    if (!xc[0]) {
      y.s = ROUNDING_MODE == 3 ? -1 : 1;
      y.c = [y.e = 0];
      return y;
    }
    return normalise(y, xc, ye);
  };
  P.modulo = P.mod = function(y, b) {
    var q, s, x = this;
    y = new BigNumber2(y, b);
    if (!x.c || !y.s || y.c && !y.c[0]) {
      return new BigNumber2(NaN);
    } else if (!y.c || x.c && !x.c[0]) {
      return new BigNumber2(x);
    }
    if (MODULO_MODE == 9) {
      s = y.s;
      y.s = 1;
      q = div(x, y, 0, 3);
      y.s = s;
      q.s *= s;
    } else {
      q = div(x, y, 0, MODULO_MODE);
    }
    y = x.minus(q.times(y));
    if (!y.c[0] && MODULO_MODE == 1)
      y.s = x.s;
    return y;
  };
  P.multipliedBy = P.times = function(y, b) {
    var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc, base, sqrtBase, x = this, xc = x.c, yc = (y = new BigNumber2(y, b)).c;
    if (!xc || !yc || !xc[0] || !yc[0]) {
      if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
        y.c = y.e = y.s = null;
      } else {
        y.s *= x.s;
        if (!xc || !yc) {
          y.c = y.e = null;
        } else {
          y.c = [0];
          y.e = 0;
        }
      }
      return y;
    }
    e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
    y.s *= x.s;
    xcL = xc.length;
    ycL = yc.length;
    if (xcL < ycL)
      zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;
    for (i = xcL + ycL, zc = []; i--; zc.push(0))
      ;
    base = BASE;
    sqrtBase = SQRT_BASE;
    for (i = ycL; --i >= 0; ) {
      c = 0;
      ylo = yc[i] % sqrtBase;
      yhi = yc[i] / sqrtBase | 0;
      for (k = xcL, j = i + k; j > i; ) {
        xlo = xc[--k] % sqrtBase;
        xhi = xc[k] / sqrtBase | 0;
        m = yhi * xlo + xhi * ylo;
        xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
        c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
        zc[j--] = xlo % base;
      }
      zc[j] = c;
    }
    if (c) {
      ++e;
    } else {
      zc.splice(0, 1);
    }
    return normalise(y, zc, e);
  };
  P.negated = function() {
    var x = new BigNumber2(this);
    x.s = -x.s || null;
    return x;
  };
  P.plus = function(y, b) {
    var t, x = this, a = x.s;
    y = new BigNumber2(y, b);
    b = y.s;
    if (!a || !b)
      return new BigNumber2(NaN);
    if (a != b) {
      y.s = -b;
      return x.minus(y);
    }
    var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
    if (!xe || !ye) {
      if (!xc || !yc)
        return new BigNumber2(a / 0);
      if (!xc[0] || !yc[0])
        return yc[0] ? y : new BigNumber2(xc[0] ? x : a * 0);
    }
    xe = bitFloor(xe);
    ye = bitFloor(ye);
    xc = xc.slice();
    if (a = xe - ye) {
      if (a > 0) {
        ye = xe;
        t = yc;
      } else {
        a = -a;
        t = xc;
      }
      t.reverse();
      for (; a--; t.push(0))
        ;
      t.reverse();
    }
    a = xc.length;
    b = yc.length;
    if (a - b < 0)
      t = yc, yc = xc, xc = t, b = a;
    for (a = 0; b; ) {
      a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
      xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
    }
    if (a) {
      xc = [a].concat(xc);
      ++ye;
    }
    return normalise(y, xc, ye);
  };
  P.precision = P.sd = function(sd, rm) {
    var c, n, v, x = this;
    if (sd != null && sd !== !!sd) {
      intCheck(sd, 1, MAX);
      if (rm == null)
        rm = ROUNDING_MODE;
      else
        intCheck(rm, 0, 8);
      return round(new BigNumber2(x), sd, rm);
    }
    if (!(c = x.c))
      return null;
    v = c.length - 1;
    n = v * LOG_BASE + 1;
    if (v = c[v]) {
      for (; v % 10 == 0; v /= 10, n--)
        ;
      for (v = c[0]; v >= 10; v /= 10, n++)
        ;
    }
    if (sd && x.e + 1 > n)
      n = x.e + 1;
    return n;
  };
  P.shiftedBy = function(k) {
    intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
    return this.times("1e" + k);
  };
  P.squareRoot = P.sqrt = function() {
    var m, n, r, rep, t, x = this, c = x.c, s = x.s, e = x.e, dp = DECIMAL_PLACES + 4, half = new BigNumber2("0.5");
    if (s !== 1 || !c || !c[0]) {
      return new BigNumber2(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
    }
    s = Math.sqrt(+valueOf(x));
    if (s == 0 || s == 1 / 0) {
      n = coeffToString(c);
      if ((n.length + e) % 2 == 0)
        n += "0";
      s = Math.sqrt(+n);
      e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
      if (s == 1 / 0) {
        n = "5e" + e;
      } else {
        n = s.toExponential();
        n = n.slice(0, n.indexOf("e") + 1) + e;
      }
      r = new BigNumber2(n);
    } else {
      r = new BigNumber2(s + "");
    }
    if (r.c[0]) {
      e = r.e;
      s = e + dp;
      if (s < 3)
        s = 0;
      for (; ; ) {
        t = r;
        r = half.times(t.plus(div(x, t, dp, 1)));
        if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {
          if (r.e < e)
            --s;
          n = n.slice(s - 3, s + 1);
          if (n == "9999" || !rep && n == "4999") {
            if (!rep) {
              round(t, t.e + DECIMAL_PLACES + 2, 0);
              if (t.times(t).eq(x)) {
                r = t;
                break;
              }
            }
            dp += 4;
            s += 4;
            rep = 1;
          } else {
            if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
              round(r, r.e + DECIMAL_PLACES + 2, 1);
              m = !r.times(r).eq(x);
            }
            break;
          }
        }
      }
    }
    return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
  };
  P.toExponential = function(dp, rm) {
    if (dp != null) {
      intCheck(dp, 0, MAX);
      dp++;
    }
    return format(this, dp, rm, 1);
  };
  P.toFixed = function(dp, rm) {
    if (dp != null) {
      intCheck(dp, 0, MAX);
      dp = dp + this.e + 1;
    }
    return format(this, dp, rm);
  };
  P.toFormat = function(dp, rm, format2) {
    var str, x = this;
    if (format2 == null) {
      if (dp != null && rm && typeof rm == "object") {
        format2 = rm;
        rm = null;
      } else if (dp && typeof dp == "object") {
        format2 = dp;
        dp = rm = null;
      } else {
        format2 = FORMAT;
      }
    } else if (typeof format2 != "object") {
      throw Error(bignumberError + "Argument not an object: " + format2);
    }
    str = x.toFixed(dp, rm);
    if (x.c) {
      var i, arr = str.split("."), g1 = +format2.groupSize, g2 = +format2.secondaryGroupSize, groupSeparator = format2.groupSeparator || "", intPart = arr[0], fractionPart = arr[1], isNeg = x.s < 0, intDigits = isNeg ? intPart.slice(1) : intPart, len = intDigits.length;
      if (g2)
        i = g1, g1 = g2, g2 = i, len -= i;
      if (g1 > 0 && len > 0) {
        i = len % g1 || g1;
        intPart = intDigits.substr(0, i);
        for (; i < len; i += g1)
          intPart += groupSeparator + intDigits.substr(i, g1);
        if (g2 > 0)
          intPart += groupSeparator + intDigits.slice(i);
        if (isNeg)
          intPart = "-" + intPart;
      }
      str = fractionPart ? intPart + (format2.decimalSeparator || "") + ((g2 = +format2.fractionGroupSize) ? fractionPart.replace(
        new RegExp("\\d{" + g2 + "}\\B", "g"),
        "$&" + (format2.fractionGroupSeparator || "")
      ) : fractionPart) : intPart;
    }
    return (format2.prefix || "") + str + (format2.suffix || "");
  };
  P.toFraction = function(md) {
    var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s, x = this, xc = x.c;
    if (md != null) {
      n = new BigNumber2(md);
      if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
        throw Error(bignumberError + "Argument " + (n.isInteger() ? "out of range: " : "not an integer: ") + valueOf(n));
      }
    }
    if (!xc)
      return new BigNumber2(x);
    d = new BigNumber2(ONE);
    n1 = d0 = new BigNumber2(ONE);
    d1 = n0 = new BigNumber2(ONE);
    s = coeffToString(xc);
    e = d.e = s.length - x.e - 1;
    d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
    md = !md || n.comparedTo(d) > 0 ? e > 0 ? d : n1 : n;
    exp = MAX_EXP;
    MAX_EXP = 1 / 0;
    n = new BigNumber2(s);
    n0.c[0] = 0;
    for (; ; ) {
      q = div(n, d, 0, 1);
      d2 = d0.plus(q.times(d1));
      if (d2.comparedTo(md) == 1)
        break;
      d0 = d1;
      d1 = d2;
      n1 = n0.plus(q.times(d2 = n1));
      n0 = d2;
      d = n.minus(q.times(d2 = d));
      n = d2;
    }
    d2 = div(md.minus(d0), d1, 0, 1);
    n0 = n0.plus(d2.times(n1));
    d0 = d0.plus(d2.times(d1));
    n0.s = n1.s = x.s;
    e = e * 2;
    r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
      div(n0, d0, e, ROUNDING_MODE).minus(x).abs()
    ) < 1 ? [n1, d1] : [n0, d0];
    MAX_EXP = exp;
    return r;
  };
  P.toNumber = function() {
    return +valueOf(this);
  };
  P.toPrecision = function(sd, rm) {
    if (sd != null)
      intCheck(sd, 1, MAX);
    return format(this, sd, rm, 2);
  };
  P.toString = function(b) {
    var str, n = this, s = n.s, e = n.e;
    if (e === null) {
      if (s) {
        str = "Infinity";
        if (s < 0)
          str = "-" + str;
      } else {
        str = "NaN";
      }
    } else {
      if (b == null) {
        str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(coeffToString(n.c), e) : toFixedPoint(coeffToString(n.c), e, "0");
      } else if (b === 10 && alphabetHasNormalDecimalDigits) {
        n = round(new BigNumber2(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
        str = toFixedPoint(coeffToString(n.c), n.e, "0");
      } else {
        intCheck(b, 2, ALPHABET.length, "Base");
        str = convertBase(toFixedPoint(coeffToString(n.c), e, "0"), 10, b, s, true);
      }
      if (s < 0 && n.c[0])
        str = "-" + str;
    }
    return str;
  };
  P.valueOf = P.toJSON = function() {
    return valueOf(this);
  };
  P._isBigNumber = true;
  P[Symbol.toStringTag] = "BigNumber";
  P[Symbol.for("nodejs.util.inspect.custom")] = P.valueOf;
  if (configObject != null)
    BigNumber2.set(configObject);
  return BigNumber2;
}
function bitFloor(n) {
  var i = n | 0;
  return n > 0 || n === i ? i : i - 1;
}
function coeffToString(a) {
  var s, z, i = 1, j = a.length, r = a[0] + "";
  for (; i < j; ) {
    s = a[i++] + "";
    z = LOG_BASE - s.length;
    for (; z--; s = "0" + s)
      ;
    r += s;
  }
  for (j = r.length; r.charCodeAt(--j) === 48; )
    ;
  return r.slice(0, j + 1 || 1);
}
function compare(x, y) {
  var a, b, xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
  if (!i || !j)
    return null;
  a = xc && !xc[0];
  b = yc && !yc[0];
  if (a || b)
    return a ? b ? 0 : -j : i;
  if (i != j)
    return i;
  a = i < 0;
  b = k == l;
  if (!xc || !yc)
    return b ? 0 : !xc ^ a ? 1 : -1;
  if (!b)
    return k > l ^ a ? 1 : -1;
  j = (k = xc.length) < (l = yc.length) ? k : l;
  for (i = 0; i < j; i++)
    if (xc[i] != yc[i])
      return xc[i] > yc[i] ^ a ? 1 : -1;
  return k == l ? 0 : k > l ^ a ? 1 : -1;
}
function intCheck(n, min, max, name) {
  if (n < min || n > max || n !== mathfloor(n)) {
    throw Error(bignumberError + (name || "Argument") + (typeof n == "number" ? n < min || n > max ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n));
  }
}
function isOdd(n) {
  var k = n.c.length - 1;
  return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
}
function toExponential(str, e) {
  return (str.length > 1 ? str.charAt(0) + "." + str.slice(1) : str) + (e < 0 ? "e" : "e+") + e;
}
function toFixedPoint(str, e, z) {
  var len, zs;
  if (e < 0) {
    for (zs = z + "."; ++e; zs += z)
      ;
    str = zs + str;
  } else {
    len = str.length;
    if (++e > len) {
      for (zs = z, e -= len; --e; zs += z)
        ;
      str += zs;
    } else if (e < len) {
      str = str.slice(0, e) + "." + str.slice(e);
    }
  }
  return str;
}
var BigNumber = clone();
var bignumber_default = BigNumber;

// node_modules/@web3-onboard/common/dist/types.js
var ProviderRpcErrorCode;
(function(ProviderRpcErrorCode2) {
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["ACCOUNT_ACCESS_REJECTED"] = 4001] = "ACCOUNT_ACCESS_REJECTED";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["ACCOUNT_ACCESS_ALREADY_REQUESTED"] = -32002] = "ACCOUNT_ACCESS_ALREADY_REQUESTED";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["UNAUTHORIZED"] = 4100] = "UNAUTHORIZED";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["INVALID_PARAMS"] = -32602] = "INVALID_PARAMS";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["UNSUPPORTED_METHOD"] = 4200] = "UNSUPPORTED_METHOD";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["DISCONNECTED"] = 4900] = "DISCONNECTED";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["CHAIN_DISCONNECTED"] = 4901] = "CHAIN_DISCONNECTED";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["CHAIN_NOT_ADDED"] = 4902] = "CHAIN_NOT_ADDED";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["DOES_NOT_EXIST"] = -32601] = "DOES_NOT_EXIST";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["UNRECOGNIZED_CHAIN_ID"] = -32603] = "UNRECOGNIZED_CHAIN_ID";
})(ProviderRpcErrorCode || (ProviderRpcErrorCode = {}));

// node_modules/@web3-onboard/common/dist/errors.js
var ProviderRpcError = class extends Error {
  constructor(error) {
    super(error.message);
    this.message = error.message;
    this.code = error.code;
    this.data = error.data;
  }
};

// node_modules/@web3-onboard/common/dist/eip-1193.js
var createEIP1193Provider = (provider, requestPatch) => {
  let baseRequest;
  if (provider.request) {
    baseRequest = provider.request.bind(provider);
  } else if (provider.sendAsync) {
    baseRequest = createRequest(provider);
  }
  const request = async ({ method, params }) => {
    const key = method;
    if (requestPatch && requestPatch[key] === null) {
      throw new ProviderRpcError({
        code: 4200,
        message: `The Provider does not support the requested method: ${method}`
      });
    }
    if (requestPatch && requestPatch[key]) {
      return requestPatch[key]({ baseRequest, params });
    } else if (baseRequest) {
      return baseRequest({ method, params });
    } else {
      throw new ProviderRpcError({
        code: 4200,
        message: `The Provider does not support the requested method: ${method}`
      });
    }
  };
  provider.request = request;
  return provider;
};
var createRequest = (provider) => ({ method, params }) => new Promise((resolve, reject) => {
  provider.sendAsync({
    id: 0,
    jsonrpc: "2.0",
    method,
    params
  }, (error, { result }) => {
    if (error) {
      reject(JSON.parse(error));
    } else {
      resolve(result == void 0 ? null : result);
    }
  });
});

// node_modules/@web3-onboard/common/dist/fonts.js
var SofiaProRegular = `
  @font-face {
    font-family: Sofia Pro;
    src: url(data:application/font-woff2;charset=utf-8;base64,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) format('woff2'),
        url(data:application/font-woff;charset=utf-8;base64,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) format('woff'),
        url('sofiapro-regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;

  }
`;

// node_modules/@web3-onboard/common/dist/utils.js
function weiToEth(wei) {
  return new bignumber_default(wei).div(1e18).toString(10);
}

// node_modules/@web3-onboard/common/dist/validation.js
var import_joi = __toESM(require_joi_browser_min(), 1);
function validate(validator, data) {
  const result = validator.validate(data);
  return result.error ? result : null;
}
var chainIdValidation = import_joi.default.alternatives().try(import_joi.default.string().pattern(/^0x[0-9a-fA-F]+$/), import_joi.default.number().positive());
var chainNamespaceValidation = import_joi.default.string().valid("evm");
var providerConnectionInfoValidation = import_joi.default.object({
  url: import_joi.default.string().required(),
  headers: import_joi.default.object(),
  user: import_joi.default.string(),
  password: import_joi.default.string(),
  allowInsecureAuthentication: import_joi.default.boolean(),
  allowGzip: import_joi.default.boolean(),
  throttleLimit: import_joi.default.number(),
  throttleSlotInterval: import_joi.default.number(),
  throttleCallback: import_joi.default.function(),
  timeout: import_joi.default.number()
});
var chainValidation = import_joi.default.object({
  namespace: chainNamespaceValidation,
  id: chainIdValidation.required(),
  rpcUrl: import_joi.default.string().required(),
  label: import_joi.default.string().required(),
  token: import_joi.default.string().required(),
  icon: import_joi.default.string(),
  color: import_joi.default.string(),
  publicRpcUrl: import_joi.default.string(),
  blockExplorerUrl: import_joi.default.string(),
  providerConnectionInfoValidation
});

export {
  createEIP1193Provider,
  SofiaProRegular,
  bignumber_default,
  weiToEth,
  ProviderRpcErrorCode,
  require_joi_browser_min,
  validate,
  chainIdValidation,
  chainNamespaceValidation,
  chainValidation
};
//# sourceMappingURL=chunk-JONS2XA5.js.map
