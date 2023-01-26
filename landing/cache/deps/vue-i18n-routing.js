import {
  createRouter,
  useRoute,
  useRouter
} from "./chunk-IN2R7X62.js";
import {
  vue_demi_exports
} from "./chunk-ZL7CHZ5F.js";
import {
  useI18n
} from "./chunk-GWAR3SMS.js";
import "./chunk-JUYB7PGA.js";
import "./chunk-BU7L7KZO.js";
import "./chunk-WCHNXXWT.js";
import {
  __publicField
} from "./chunk-IJ7IQSKN.js";

// node_modules/@nuxtjs/i18n/node_modules/@intlify/vue-router-bridge/lib/index.mjs
var isVueRouter4 = true;
var VueRouterLegacy = class {
  static install() {
  }
};
__publicField(VueRouterLegacy, "version", "");
var lib_default = VueRouterLegacy;

// node_modules/@nuxtjs/i18n/node_modules/vue-i18n-routing/dist/vue-i18n-routing.mjs
var STRATEGIES = {
  PREFIX: "prefix",
  PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
  PREFIX_AND_DEFAULT: "prefix_and_default",
  NO_PREFIX: "no_prefix"
};
var DEFAULT_LOCALE = "";
var DEFAULT_STRATEGY = STRATEGIES.PREFIX_EXCEPT_DEFAULT;
var DEFAULT_TRAILING_SLASH = false;
var DEFAULT_ROUTES_NAME_SEPARATOR = "___";
var DEFAULT_LOCALE_ROUTE_NAME_SUFFIX = "default";
var DEFAULT_DETECTION_DIRECTION = "ltr";
var DEFAULT_BASE_URL = "";
var DEFAULT_DYNAMIC_PARAMS_KEY = "";
var hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
var makeSymbol = (name) => hasSymbol ? Symbol(name) : name;
var assign = Object.assign;
var isArray = Array.isArray;
var isFunction = (val) => typeof val === "function";
var isString = (val) => typeof val === "string";
var isBoolean = (val) => typeof val === "boolean";
var isSymbol = (val) => typeof val === "symbol";
var isObject = (val) => val !== null && typeof val === "object";
var TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "");
}
var inBrowser = typeof window !== "undefined";
function warn(msg, err) {
  if (typeof console !== "undefined") {
    console.warn(`[vue-i18n-routing] ` + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
function getNormalizedLocales(locales) {
  locales = locales || [];
  const normalized = [];
  for (const locale of locales) {
    if (isString(locale)) {
      normalized.push({ code: locale });
    } else {
      normalized.push(locale);
    }
  }
  return normalized;
}
function isI18nInstance(i18n) {
  return i18n != null && "global" in i18n && "mode" in i18n;
}
function isComposer(target) {
  return target != null && !("__composer" in target) && (0, vue_demi_exports.isRef)(target.locale);
}
function isVueI18n(target) {
  return target != null && "__composer" in target;
}
function isExportedGlobalComposer(target) {
  return target != null && !("__composer" in target) && !(0, vue_demi_exports.isRef)(target.locale);
}
function isLegacyVueI18n(target) {
  return target != null && ("__VUE_I18N_BRIDGE__" in target || "_sync" in target);
}
function getComposer(i18n) {
  return isI18nInstance(i18n) ? isComposer(i18n.global) ? i18n.global : i18n.global.__composer : isVueI18n(i18n) ? i18n.__composer : i18n;
}
function getLocale(i18n) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  return isComposer(target) ? vue_demi_exports.isVue2 && isLegacyVueI18n(i18n) ? i18n.locale : target.locale.value : isExportedGlobalComposer(target) || isVueI18n(target) || isLegacyVueI18n(target) ? target.locale : target.locale;
}
function getLocales(i18n) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  return isComposer(target) ? vue_demi_exports.isVue2 && isLegacyVueI18n(i18n) ? i18n.locales : target.locales.value : isExportedGlobalComposer(target) || isVueI18n(target) || isLegacyVueI18n(target) ? target.locales : target.locales;
}
function getLocaleCodes(i18n) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  return isComposer(target) ? vue_demi_exports.isVue2 && isLegacyVueI18n(i18n) ? i18n.localeCodes : target.localeCodes.value : isExportedGlobalComposer(target) || isVueI18n(target) || isLegacyVueI18n(target) ? target.localeCodes : target.localeCodes;
}
function setLocale(i18n, locale) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  if (isComposer(target)) {
    if (vue_demi_exports.isVue2 && isLegacyVueI18n(i18n)) {
      i18n.locale = locale;
    } else {
      target.locale.value = locale;
    }
  } else if (isExportedGlobalComposer(target) || isVueI18n(target) || isLegacyVueI18n(target)) {
    target.locale = locale;
  } else {
    throw new Error("TODO:");
  }
}
function adjustRoutePathForTrailingSlash(pagePath, trailingSlash, isChildWithRelativePath) {
  return pagePath.replace(/\/+$/, "") + (trailingSlash ? "/" : "") || (isChildWithRelativePath ? "" : "/");
}
function toRawRoute(maybeRoute) {
  return isVueRouter4 ? (0, vue_demi_exports.isRef)(maybeRoute) ? maybeRoute.value : maybeRoute : (0, vue_demi_exports.isRef)(maybeRoute) ? maybeRoute.value : maybeRoute;
}
function getRouteName(routeName) {
  return isString(routeName) ? routeName : isSymbol(routeName) ? routeName.toString() : "(null)";
}
function getLocaleRouteName(routeName, locale, {
  defaultLocale,
  strategy,
  routesNameSeparator,
  defaultLocaleRouteNameSuffix
}) {
  let name = getRouteName(routeName) + (strategy === "no_prefix" ? "" : routesNameSeparator + locale);
  if (locale === defaultLocale && strategy === "prefix_and_default") {
    name += routesNameSeparator + defaultLocaleRouteNameSuffix;
  }
  return name;
}
function resolveBaseUrl(baseUrl, context) {
  if (isFunction(baseUrl)) {
    return baseUrl(context);
  }
  return baseUrl;
}
function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find((l) => l.iso.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index / browserLocales.length });
      break;
    }
  }
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales.find((l) => l.iso.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
var DefaultBrowserLocaleMatcher = matchBrowserLocale;
function compareBrowserLocale(a, b) {
  if (a.score === b.score) {
    return b.code.length - a.code.length;
  }
  return b.score - a.score;
}
var DefaultBrowerLocaleComparer = compareBrowserLocale;
function findBrowserLocale(locales, browserLocales, { matcher = DefaultBrowserLocaleMatcher, comparer = DefaultBrowerLocaleComparer } = {}) {
  const normalizedLocales = [];
  for (const l of locales) {
    const { code } = l;
    const iso = l.iso || code;
    normalizedLocales.push({ code, iso });
  }
  const matchedLocales = matcher(normalizedLocales, browserLocales);
  if (matchedLocales.length > 1) {
    matchedLocales.sort(comparer);
  }
  return matchedLocales.length ? matchedLocales[0].code : "";
}
function prefixable$1(optons) {
  const { currentLocale, defaultLocale, strategy, isChild, path } = optons;
  const isDefaultLocale = currentLocale === defaultLocale;
  const isChildWithRelativePath = isChild && !path.startsWith("/");
  return !isChildWithRelativePath && !(isDefaultLocale && strategy === "prefix_except_default");
}
var DefaultLocalizeRoutesPrefixable = prefixable$1;
function localizeRoutes(routes, {
  defaultLocale = DEFAULT_LOCALE,
  strategy = DEFAULT_STRATEGY,
  trailingSlash = DEFAULT_TRAILING_SLASH,
  routesNameSeparator = DEFAULT_ROUTES_NAME_SEPARATOR,
  defaultLocaleRouteNameSuffix = DEFAULT_LOCALE_ROUTE_NAME_SUFFIX,
  includeUprefixedFallback = false,
  optionsResolver = void 0,
  localizeRoutesPrefixable = DefaultLocalizeRoutesPrefixable,
  locales = []
} = {}) {
  if (strategy === "no_prefix") {
    return routes;
  }
  const _localeCodes = locales.map((locale) => isString(locale) ? locale : locale.code);
  function makeLocalizedRoutes(route, allowedLocaleCodes, isChild = false, isExtraPageTree = false) {
    if (route.redirect && (!route.component || !route.file)) {
      return [route];
    }
    let routeOptions = null;
    if (optionsResolver != null) {
      routeOptions = optionsResolver(route, allowedLocaleCodes);
      if (routeOptions == null) {
        return [route];
      }
    }
    const componentOptions = {
      locales: _localeCodes,
      paths: {}
    };
    if (routeOptions != null) {
      assign(componentOptions, routeOptions);
    }
    assign(componentOptions, { locales: allowedLocaleCodes });
    if (componentOptions.locales.length > 0 && routeOptions && routeOptions.locales != null && routeOptions.locales.length > 0) {
      const filteredLocales = [];
      for (const locale of componentOptions.locales) {
        if (routeOptions.locales.includes(locale)) {
          filteredLocales.push(locale);
        }
      }
      componentOptions.locales = filteredLocales;
    }
    return componentOptions.locales.reduce((_routes, locale) => {
      const { name } = route;
      let { path } = route;
      const localizedRoute = { ...route };
      if (name) {
        localizedRoute.name = `${name}${routesNameSeparator}${locale}`;
      }
      if (route.children) {
        localizedRoute.children = route.children.reduce(
          (children, child) => [...children, ...makeLocalizedRoutes(child, [locale], true, isExtraPageTree)],
          []
        );
      }
      if (componentOptions.paths && componentOptions.paths[locale]) {
        path = componentOptions.paths[locale];
      }
      const isDefaultLocale = locale === defaultLocale;
      if (isDefaultLocale && strategy === "prefix_and_default") {
        if (!isChild) {
          const defaultRoute = { ...localizedRoute, path };
          if (name) {
            defaultRoute.name = `${localizedRoute.name}${routesNameSeparator}${defaultLocaleRouteNameSuffix}`;
          }
          if (route.children) {
            defaultRoute.children = [];
            for (const childRoute of route.children) {
              defaultRoute.children = defaultRoute.children.concat(
                makeLocalizedRoutes(childRoute, [locale], true, true)
              );
            }
          }
          _routes.push(defaultRoute);
        } else if (isChild && isExtraPageTree && name) {
          localizedRoute.name += `${routesNameSeparator}${defaultLocaleRouteNameSuffix}`;
        }
      }
      const isChildWithRelativePath = isChild && !path.startsWith("/");
      const shouldAddPrefix = localizeRoutesPrefixable({
        isChild,
        path,
        currentLocale: locale,
        defaultLocale,
        strategy
      });
      if (shouldAddPrefix) {
        path = `/${locale}${path}`;
      }
      if (path) {
        path = adjustRoutePathForTrailingSlash(path, trailingSlash, isChildWithRelativePath);
      }
      if (shouldAddPrefix && isDefaultLocale && strategy === "prefix" && includeUprefixedFallback) {
        _routes.push({ ...route });
      }
      localizedRoute.path = path;
      _routes.push(localizedRoute);
      return _routes;
    }, []);
  }
  return routes.reduce(
    (localized, route) => [...localized, ...makeLocalizedRoutes(route, _localeCodes || [])],
    []
  );
}
function proxyVueInstance(target) {
  return function() {
    return Reflect.apply(
      target,
      {
        getRouteBaseName: this.getRouteBaseName,
        localePath: this.localePath,
        localeRoute: this.localeRoute,
        localeLocation: this.localeLocation,
        resolveRoute: this.resolveRoute,
        switchLocalePath: this.switchLocalePath,
        localeHead: this.localeHead,
        i18n: this.$i18n,
        route: this.$route,
        router: this.$router
      },
      arguments
    );
  };
}
function extendI18n(i18n, {
  locales = [],
  localeCodes = [],
  baseUrl = DEFAULT_BASE_URL,
  hooks = {},
  context = {}
} = {}) {
  const scope = (0, vue_demi_exports.effectScope)();
  const orgInstall = i18n.install;
  i18n.install = (vue, ...options) => {
    const pluginOptions = isPluginOptions(options[0]) ? assign({}, options[0]) : { inject: true };
    if (pluginOptions.inject == null) {
      pluginOptions.inject = true;
    }
    const orgComposerExtend = pluginOptions.__composerExtend;
    pluginOptions.__composerExtend = (c) => {
      const g = getComposer(i18n);
      c.locales = (0, vue_demi_exports.computed)(() => g.locales.value);
      c.localeCodes = (0, vue_demi_exports.computed)(() => g.localeCodes.value);
      c.baseUrl = (0, vue_demi_exports.computed)(() => g.baseUrl.value);
      if (isFunction(orgComposerExtend)) {
        Reflect.apply(orgComposerExtend, pluginOptions, [c]);
      }
    };
    if (isVueI18n(i18n.global)) {
      const orgVueI18nExtend = pluginOptions.__vueI18nExtend;
      pluginOptions.__vueI18nExtend = (vueI18n) => {
        extendVueI18n(vueI18n, hooks.onExtendVueI18n);
        if (isFunction(orgVueI18nExtend)) {
          Reflect.apply(orgVueI18nExtend, pluginOptions, [vueI18n]);
        }
      };
    }
    options[0] = pluginOptions;
    Reflect.apply(orgInstall, i18n, [vue, ...options]);
    const composer = getComposer(i18n);
    scope.run(() => extendComposer(composer, { locales, localeCodes, baseUrl, hooks, context }));
    if (isVueI18n(i18n.global)) {
      extendVueI18n(i18n.global, hooks.onExtendVueI18n);
    }
    const app = vue;
    const exported = i18n.mode === "composition" ? vue_demi_exports.isVue3 ? app.config.globalProperties.$i18n : i18n : vue_demi_exports.isVue2 ? i18n : null;
    if (exported) {
      extendExportedGlobal(exported, composer, hooks.onExtendExportedGlobal);
    }
    if (pluginOptions.inject) {
      vue.mixin({
        methods: {
          resolveRoute: proxyVueInstance(resolveRoute),
          localePath: proxyVueInstance(localePath),
          localeRoute: proxyVueInstance(localeRoute),
          localeLocation: proxyVueInstance(localeLocation),
          switchLocalePath: proxyVueInstance(switchLocalePath),
          getRouteBaseName: proxyVueInstance(getRouteBaseName),
          localeHead: proxyVueInstance(localeHead)
        }
      });
    }
    if (app.unmount) {
      const unmountApp = app.unmount;
      app.unmount = () => {
        scope.stop();
        unmountApp();
      };
    }
  };
  return scope;
}
function extendComposer(composer, options) {
  const { locales, localeCodes, baseUrl, context } = options;
  const _locales = (0, vue_demi_exports.ref)(locales);
  const _localeCodes = (0, vue_demi_exports.ref)(localeCodes);
  const _baseUrl = (0, vue_demi_exports.ref)("");
  composer.locales = (0, vue_demi_exports.computed)(() => _locales.value);
  composer.localeCodes = (0, vue_demi_exports.computed)(() => _localeCodes.value);
  composer.baseUrl = (0, vue_demi_exports.computed)(() => _baseUrl.value);
  if (inBrowser) {
    (0, vue_demi_exports.watch)(
      composer.locale,
      () => {
        _baseUrl.value = resolveBaseUrl(baseUrl, context);
      },
      { immediate: true }
    );
  } else {
    _baseUrl.value = resolveBaseUrl(baseUrl, context);
  }
  if (options.hooks && options.hooks.onExtendComposer) {
    options.hooks.onExtendComposer(composer);
  }
}
function extendExportedGlobal(exported, g, hook) {
  const properties = [
    {
      locales: {
        get() {
          return g.locales.value;
        }
      },
      localeCodes: {
        get() {
          return g.localeCodes.value;
        }
      },
      baseUrl: {
        get() {
          return g.baseUrl.value;
        }
      }
    }
  ];
  hook && properties.push(hook(g));
  for (const property of properties) {
    for (const [key, descriptor] of Object.entries(property)) {
      Object.defineProperty(exported, key, descriptor);
    }
  }
}
function extendVueI18n(vueI18n, hook) {
  const composer = getComposer(vueI18n);
  const properties = [
    {
      locales: {
        get() {
          return composer.locales.value;
        }
      },
      localeCodes: {
        get() {
          return composer.localeCodes.value;
        }
      },
      baseUrl: {
        get() {
          return composer.baseUrl.value;
        }
      }
    }
  ];
  hook && properties.push(hook(composer));
  for (const property of properties) {
    for (const [key, descriptor] of Object.entries(property)) {
      Object.defineProperty(vueI18n, key, descriptor);
    }
  }
}
function isPluginOptions(options) {
  return isObject(options) && ("inject" in options || "__composerExtend" in options || "__vueI18nExtend" in options) && isBoolean(options.inject);
}
var GlobalOptionsRegistory = makeSymbol("vue-i18n-routing-gor");
function registerGlobalOptions(router, options) {
  const _options = router[GlobalOptionsRegistory];
  if (_options) {
    warn("already registered global options");
  } else {
    router[GlobalOptionsRegistory] = options;
  }
}
function getGlobalOptions(router) {
  var _a;
  return (_a = router[GlobalOptionsRegistory]) != null ? _a : {};
}
function createRouter2(i18n, options = {}) {
  const {
    version,
    defaultLocale,
    locales,
    strategy,
    trailingSlash,
    routesNameSeparator,
    defaultLocaleRouteNameSuffix,
    defaultDirection,
    baseUrl,
    routes,
    prefixable: prefixable2,
    switchLocalePathIntercepter,
    localizeRoutesPrefixable,
    dynamicRouteParamsKey,
    routeOptionsResolver: optionsResolver
  } = asDefaultVueI18nRouterOptions(options);
  const normalizedLocaleCodes = getNormalizedLocales(locales);
  const localeCodes = normalizedLocaleCodes.map((l) => l.code);
  const getLocaleFromRoute = createLocaleFromRouteGetter(localeCodes, routesNameSeparator, defaultLocaleRouteNameSuffix);
  const localizedRoutes = localizeRoutes(routes, {
    locales,
    defaultLocale,
    strategy,
    trailingSlash,
    routesNameSeparator,
    defaultLocaleRouteNameSuffix,
    localizeRoutesPrefixable,
    optionsResolver
  });
  options.routes = localizedRoutes;
  const router = createVueRouter(options, version);
  registerGlobalOptions(router, {
    defaultLocale,
    localeCodes,
    strategy,
    trailingSlash,
    routesNameSeparator,
    defaultLocaleRouteNameSuffix,
    defaultDirection,
    prefixable: prefixable2,
    switchLocalePathIntercepter,
    dynamicRouteParamsKey
  });
  extendI18n(i18n, { locales: normalizedLocaleCodes, baseUrl, localeCodes, context: router });
  router.beforeEach((to, from, next) => {
    const currentLocale = getLocale(i18n);
    const finalLocale = getLocaleFromRoute(to) || currentLocale || defaultLocale || "";
    if (currentLocale !== finalLocale) {
      setLocale(i18n, finalLocale);
    }
    next();
  });
  return router;
}
function createVueRouter(options, version) {
  if (vue_demi_exports.isVue3 && version === 4) {
    return createRouter(options);
  } else if (vue_demi_exports.isVue2 && version === 3) {
    return new lib_default(options);
  } else {
    throw new Error("TODO:");
  }
}
function getLocalesRegex(localeCodes) {
  return new RegExp(`^/(${localeCodes.join("|")})(?:/|$)`, "i");
}
function createLocaleFromRouteGetter(localeCodes, routesNameSeparator, defaultLocaleRouteNameSuffix) {
  const localesPattern = `(${localeCodes.join("|")})`;
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;
  const regexpName = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`, "i");
  const regexpPath = getLocalesRegex(localeCodes);
  const getLocaleFromRoute = (route) => {
    if (isObject(route)) {
      if (route.name) {
        const name = isString(route.name) ? route.name : route.name.toString();
        const matches = name.match(regexpName);
        if (matches && matches.length > 1) {
          return matches[1];
        }
      } else if (route.path) {
        const matches = route.path.match(regexpPath);
        if (matches && matches.length > 1) {
          return matches[1];
        }
      }
    } else if (isString(route)) {
      const matches = route.match(regexpPath);
      if (matches && matches.length > 1) {
        return matches[1];
      }
    }
    return "";
  };
  return getLocaleFromRoute;
}
function asDefaultVueI18nRouterOptions(options) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  options.version = (_a = options.version) != null ? _a : 4;
  options.defaultLocale = (_b = options.defaultLocale) != null ? _b : DEFAULT_LOCALE;
  options.strategy = (_c = options.strategy) != null ? _c : DEFAULT_STRATEGY;
  options.trailingSlash = (_d = options.trailingSlash) != null ? _d : DEFAULT_TRAILING_SLASH;
  options.routesNameSeparator = (_e = options.routesNameSeparator) != null ? _e : DEFAULT_ROUTES_NAME_SEPARATOR;
  options.defaultLocaleRouteNameSuffix = (_f = options.defaultLocaleRouteNameSuffix) != null ? _f : DEFAULT_LOCALE_ROUTE_NAME_SUFFIX;
  options.locales = (_g = options.locales) != null ? _g : [];
  options.defaultDirection = (_h = options.defaultDirection) != null ? _h : DEFAULT_DETECTION_DIRECTION;
  options.baseUrl = (_i = options.baseUrl) != null ? _i : DEFAULT_BASE_URL;
  options.routes = (_j = options.routes) != null ? _j : [];
  options.prefixable = (_k = options.prefixable) != null ? _k : DefaultPrefixable;
  options.switchLocalePathIntercepter = (_l = options.switchLocalePathIntercepter) != null ? _l : DefaultSwitchLocalePathIntercepter;
  options.localizeRoutesPrefixable = (_m = options.localizeRoutesPrefixable) != null ? _m : DefaultLocalizeRoutesPrefixable;
  options.dynamicRouteParamsKey = (_n = options.dynamicRouteParamsKey) != null ? _n : DEFAULT_DYNAMIC_PARAMS_KEY;
  return options;
}
function getI18nRoutingOptions(router, proxy, {
  defaultLocale = DEFAULT_LOCALE,
  defaultDirection = DEFAULT_DETECTION_DIRECTION,
  defaultLocaleRouteNameSuffix = DEFAULT_LOCALE_ROUTE_NAME_SUFFIX,
  routesNameSeparator = DEFAULT_ROUTES_NAME_SEPARATOR,
  strategy = DEFAULT_STRATEGY,
  trailingSlash = DEFAULT_TRAILING_SLASH,
  localeCodes = [],
  prefixable: prefixable2 = DefaultPrefixable,
  switchLocalePathIntercepter = DefaultSwitchLocalePathIntercepter,
  dynamicRouteParamsKey = DEFAULT_DYNAMIC_PARAMS_KEY
} = {}) {
  const options = getGlobalOptions(router);
  return {
    defaultLocale: proxy.defaultLocale || options.defaultLocale || defaultLocale,
    defaultDirection: proxy.defaultDirection || options.defaultDirection || defaultDirection,
    defaultLocaleRouteNameSuffix: proxy.defaultLocaleRouteNameSuffix || options.defaultLocaleRouteNameSuffix || defaultLocaleRouteNameSuffix,
    routesNameSeparator: proxy.routesNameSeparator || options.routesNameSeparator || routesNameSeparator,
    strategy: proxy.strategy || options.strategy || strategy,
    trailingSlash: proxy.trailingSlash || options.trailingSlash || trailingSlash,
    localeCodes: proxy.localeCodes || options.localeCodes || localeCodes,
    prefixable: proxy.prefixable || options.prefixable || prefixable2,
    switchLocalePathIntercepter: proxy.switchLocalePathIntercepter || options.switchLocalePathIntercepter || switchLocalePathIntercepter,
    dynamicRouteParamsKey: proxy.dynamicRouteParamsKey || options.dynamicRouteParamsKey || dynamicRouteParamsKey
  };
}
function split(str, index) {
  const result = [str.slice(0, index), str.slice(index)];
  return result;
}
function resolve(router, route, strategy, locale) {
  if (vue_demi_exports.isVue3 && strategy === "prefix") {
    if (isArray(route.matched) && route.matched.length > 0) {
      return route.matched[0];
    }
    const [rootSlash, restPath] = split(route.path, 1);
    const targetPath = `${rootSlash}${locale}${restPath === "" ? restPath : `/${restPath}`}`;
    const _route = router.options.routes.find((r) => r.path === targetPath);
    if (_route == null) {
      return route;
    } else {
      const _resolevableRoute = assign({}, _route);
      _resolevableRoute.path = targetPath;
      return router.resolve(_resolevableRoute);
    }
  } else {
    return router.resolve(route);
  }
}
var RESOLVED_PREFIXED = /* @__PURE__ */ new Set(["prefix_and_default", "prefix_except_default"]);
function prefixable(optons) {
  const { currentLocale, defaultLocale, strategy } = optons;
  const isDefaultLocale = currentLocale === defaultLocale;
  return !(isDefaultLocale && RESOLVED_PREFIXED.has(strategy)) && !(strategy === "no_prefix");
}
var DefaultPrefixable = prefixable;
function getRouteBaseName(givenRoute) {
  const router = this.router;
  const { routesNameSeparator } = getI18nRoutingOptions(router, this);
  const route = givenRoute != null ? (0, vue_demi_exports.isRef)(givenRoute) ? (0, vue_demi_exports.unref)(givenRoute) : givenRoute : this.route;
  if (route == null || !route.name) {
    return;
  }
  const name = getRouteName(route.name);
  return name.split(routesNameSeparator)[0];
}
function localePath(route, locale) {
  const localizedRoute = resolveRoute.call(this, route, locale);
  return localizedRoute == null ? "" : vue_demi_exports.isVue3 ? localizedRoute.redirectedFrom || localizedRoute.fullPath : localizedRoute.route.redirectedFrom || localizedRoute.route.fullPath;
}
function localeRoute(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved == null ? void 0 : vue_demi_exports.isVue3 ? resolved : resolved.route;
}
function localeLocation(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved == null ? void 0 : vue_demi_exports.isVue3 ? resolved : resolved.location;
}
function resolveRoute(route, locale) {
  const router = this.router;
  const i18n = this.i18n;
  const _locale = locale || getLocale(i18n);
  const { routesNameSeparator, defaultLocale, defaultLocaleRouteNameSuffix, strategy, trailingSlash, prefixable: prefixable2 } = getI18nRoutingOptions(router, this);
  let _route = route;
  if (isString(route)) {
    if (_route[0] === "/") {
      _route = { path: route };
    } else {
      _route = { name: route };
    }
  }
  let localizedRoute = assign({}, _route);
  if (localizedRoute.path && !localizedRoute.name) {
    let _resolvedRoute = null;
    try {
      _resolvedRoute = resolve(router, localizedRoute, strategy, _locale);
    } catch {
    }
    const resolvedRoute = vue_demi_exports.isVue3 ? _resolvedRoute : _resolvedRoute.route;
    const resolvedRouteName = getRouteBaseName.call(this, resolvedRoute);
    if (isString(resolvedRouteName)) {
      localizedRoute = {
        name: getLocaleRouteName(resolvedRouteName, _locale, {
          defaultLocale,
          strategy,
          routesNameSeparator,
          defaultLocaleRouteNameSuffix
        }),
        params: resolvedRoute.params,
        query: resolvedRoute.query,
        hash: resolvedRoute.hash
      };
      if (vue_demi_exports.isVue3) {
        localizedRoute.state = resolvedRoute.state;
      }
    } else {
      if (prefixable2({ currentLocale: _locale, defaultLocale, strategy })) {
        localizedRoute.path = `/${_locale}${localizedRoute.path}`;
      }
      localizedRoute.path = trailingSlash ? withTrailingSlash(localizedRoute.path, true) : withoutTrailingSlash(localizedRoute.path, true);
    }
  } else {
    if (!localizedRoute.name && !localizedRoute.path) {
      localizedRoute.name = getRouteBaseName.call(this, this.route);
    }
    localizedRoute.name = getLocaleRouteName(localizedRoute.name, _locale, {
      defaultLocale,
      strategy,
      routesNameSeparator,
      defaultLocaleRouteNameSuffix
    });
    if (vue_demi_exports.isVue2) {
      const { params } = localizedRoute;
      if (params && params["0"] === void 0 && params.pathMatch) {
        params["0"] = params.pathMatch;
      }
    }
  }
  try {
    const resolvedRoute = router.resolve(localizedRoute);
    if (vue_demi_exports.isVue3 ? resolvedRoute.name : resolvedRoute.route.name) {
      return resolvedRoute;
    }
    return router.resolve(route);
  } catch (e) {
    if (vue_demi_exports.isVue3 && e.type === 1) {
      return null;
    } else if (vue_demi_exports.isVue2) {
      return null;
    }
  }
}
var DefaultSwitchLocalePathIntercepter = (path) => path;
function getLocalizableMetaFromDynamicParams(route, key) {
  const metaDefault = {};
  if (key === DEFAULT_DYNAMIC_PARAMS_KEY) {
    return metaDefault;
  }
  const meta = vue_demi_exports.isVue3 ? route.meta : (0, vue_demi_exports.isRef)(route) ? route.value.meta || metaDefault : route.meta || metaDefault;
  if ((0, vue_demi_exports.isRef)(meta)) {
    return meta.value[key] || metaDefault;
  } else {
    return meta[key] || metaDefault;
  }
}
function switchLocalePath(locale) {
  const route = this.route;
  const name = getRouteBaseName.call(this, route);
  if (!name) {
    return "";
  }
  const { switchLocalePathIntercepter, dynamicRouteParamsKey } = getI18nRoutingOptions(this.router, this);
  const { params, ...routeCopy } = vue_demi_exports.isVue3 ? route : (0, vue_demi_exports.isRef)(route) ? route.value : route;
  const langSwitchParams = getLocalizableMetaFromDynamicParams(route, dynamicRouteParamsKey)[locale] || {};
  const _baseRoute = {
    name,
    params: {
      ...params,
      ...langSwitchParams
    }
  };
  if (vue_demi_exports.isVue2) {
    _baseRoute.params[0] = params.pathMatch;
  }
  const baseRoute = assign({}, routeCopy, _baseRoute);
  let path = localePath.call(this, baseRoute, locale);
  path = switchLocalePathIntercepter(path, locale);
  return path;
}
function localeHead({ addDirAttribute = false, addSeoAttributes = false, identifierAttribute = "hid" } = {}) {
  const router = this.router;
  const i18n = this.i18n;
  const { defaultDirection } = getI18nRoutingOptions(router, this);
  const metaObject = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  if (i18n.locales == null || i18n.baseUrl == null) {
    return metaObject;
  }
  const locale = getLocale(i18n);
  const locales = getLocales(i18n);
  const currentLocale = getNormalizedLocales(locales).find((l) => l.code === locale) || {
    code: locale
  };
  const currentLocaleIso = currentLocale.iso;
  const currentLocaleDir = currentLocale.dir || defaultDirection;
  if (addDirAttribute) {
    metaObject.htmlAttrs.dir = currentLocaleDir;
  }
  if (addSeoAttributes && locale && i18n.locales) {
    if (currentLocaleIso) {
      metaObject.htmlAttrs.lang = currentLocaleIso;
    }
    addHreflangLinks.call(this, locales, (0, vue_demi_exports.unref)(i18n.baseUrl), metaObject.link, identifierAttribute);
    addCanonicalLinks.call(this, (0, vue_demi_exports.unref)(i18n.baseUrl), metaObject.link, identifierAttribute, addSeoAttributes);
    addCurrentOgLocale(currentLocale, currentLocaleIso, metaObject.meta, identifierAttribute);
    addAlternateOgLocales(locales, currentLocaleIso, metaObject.meta, identifierAttribute);
  }
  return metaObject;
}
function addHreflangLinks(locales, baseUrl, link, identifierAttribute) {
  const router = this.router;
  const { defaultLocale, strategy } = getI18nRoutingOptions(router, this);
  if (strategy === STRATEGIES.NO_PREFIX) {
    return;
  }
  const localeMap = /* @__PURE__ */ new Map();
  for (const locale of locales) {
    const localeIso = locale.iso;
    if (!localeIso) {
      warn("Locale ISO code is required to generate alternate link");
      continue;
    }
    const [language, region] = localeIso.split("-");
    if (language && region && (locale.isCatchallLocale || !localeMap.has(language))) {
      localeMap.set(language, locale);
    }
    localeMap.set(localeIso, locale);
  }
  for (const [iso, mapLocale] of localeMap.entries()) {
    const localePath2 = switchLocalePath.call(this, mapLocale.code);
    if (localePath2) {
      link.push({
        [identifierAttribute]: `i18n-alt-${iso}`,
        rel: "alternate",
        href: toAbsoluteUrl(localePath2, baseUrl),
        hreflang: iso
      });
    }
  }
  if (defaultLocale) {
    const localePath2 = switchLocalePath.call(this, defaultLocale);
    if (localePath2) {
      link.push({
        [identifierAttribute]: "i18n-xd",
        rel: "alternate",
        href: toAbsoluteUrl(localePath2, baseUrl),
        hreflang: "x-default"
      });
    }
  }
}
function addCanonicalLinks(baseUrl, link, identifierAttribute, seoAttributesOptions) {
  const route = this.route;
  const currentRoute = localeRoute.call(this, {
    ...route,
    name: getRouteBaseName.call(this, route)
  });
  if (currentRoute) {
    let href = toAbsoluteUrl(currentRoute.path, baseUrl);
    const canonicalQueries = isObject(seoAttributesOptions) && seoAttributesOptions.canonicalQueries || [];
    if (canonicalQueries.length) {
      const currentRouteQueryParams = currentRoute.query;
      const params = new URLSearchParams();
      for (const queryParamName of canonicalQueries) {
        if (queryParamName in currentRouteQueryParams) {
          const queryParamValue = currentRouteQueryParams[queryParamName];
          if (isArray(queryParamValue)) {
            queryParamValue.forEach((v) => params.append(queryParamName, v || ""));
          } else {
            params.append(queryParamName, queryParamValue || "");
          }
        }
      }
      const queryString = params.toString();
      if (queryString) {
        href = `${href}?${queryString}`;
      }
    }
    link.push({
      [identifierAttribute]: "i18n-can",
      rel: "canonical",
      href
    });
  }
}
function addCurrentOgLocale(currentLocale, currentLocaleIso, meta, identifierAttribute) {
  const hasCurrentLocaleAndIso = currentLocale && currentLocaleIso;
  if (!hasCurrentLocaleAndIso) {
    return;
  }
  meta.push({
    [identifierAttribute]: "i18n-og",
    property: "og:locale",
    content: hypenToUnderscore(currentLocaleIso)
  });
}
function addAlternateOgLocales(locales, currentLocaleIso, meta, identifierAttribute) {
  const localesWithoutCurrent = locales.filter((locale) => {
    const localeIso = locale.iso;
    return localeIso && localeIso !== currentLocaleIso;
  });
  if (localesWithoutCurrent.length) {
    const alternateLocales = localesWithoutCurrent.map((locale) => ({
      [identifierAttribute]: `i18n-og-alt-${locale.iso}`,
      property: "og:locale:alternate",
      content: hypenToUnderscore(locale.iso)
    }));
    meta.push(...alternateLocales);
  }
}
function hypenToUnderscore(str) {
  return (str || "").replace(/-/g, "_");
}
function toAbsoluteUrl(urlOrPath, baseUrl) {
  if (urlOrPath.match(/^https?:\/\//)) {
    return urlOrPath;
  }
  return baseUrl + urlOrPath;
}
function proxyForComposable(options, target) {
  const {
    router,
    route,
    i18n,
    defaultLocale,
    strategy,
    defaultLocaleRouteNameSuffix,
    trailingSlash,
    routesNameSeparator
  } = options;
  return function(...args) {
    return Reflect.apply(
      target,
      {
        router,
        route,
        i18n,
        defaultLocale,
        strategy,
        defaultLocaleRouteNameSuffix,
        trailingSlash,
        routesNameSeparator
      },
      args
    );
  };
}
function useRouteBaseName(givenRoute = useRoute(), { router = useRouter(), routesNameSeparator = void 0 } = {}) {
  const proxy = {
    router,
    route: givenRoute,
    routesNameSeparator
  };
  return getRouteBaseName.call(proxy, givenRoute);
}
function useLocalePath({
  router = useRouter(),
  route = useRoute(),
  i18n = useI18n(),
  defaultLocale = void 0,
  defaultLocaleRouteNameSuffix = void 0,
  routesNameSeparator = void 0,
  strategy = void 0,
  trailingSlash = void 0
} = {}) {
  return proxyForComposable(
    { router, route, i18n, defaultLocale, defaultLocaleRouteNameSuffix, routesNameSeparator, strategy, trailingSlash },
    localePath
  );
}
function useLocaleRoute({
  router = useRouter(),
  route = useRoute(),
  i18n = useI18n(),
  defaultLocale = void 0,
  defaultLocaleRouteNameSuffix = void 0,
  routesNameSeparator = void 0,
  strategy = void 0,
  trailingSlash = void 0
} = {}) {
  return proxyForComposable(
    {
      router,
      route,
      i18n,
      defaultLocale,
      defaultLocaleRouteNameSuffix,
      routesNameSeparator,
      strategy,
      trailingSlash
    },
    localeRoute
  );
}
function useLocaleLocation({
  router = useRouter(),
  route = useRoute(),
  i18n = useI18n(),
  defaultLocale = void 0,
  defaultLocaleRouteNameSuffix = void 0,
  routesNameSeparator = void 0,
  strategy = void 0,
  trailingSlash = void 0
} = {}) {
  return proxyForComposable(
    {
      router,
      route,
      i18n,
      defaultLocale,
      defaultLocaleRouteNameSuffix,
      routesNameSeparator,
      strategy,
      trailingSlash
    },
    localeLocation
  );
}
function useSwitchLocalePath({
  router = useRouter(),
  route = useRoute(),
  i18n = useI18n(),
  defaultLocale = void 0,
  defaultLocaleRouteNameSuffix = void 0,
  routesNameSeparator = void 0,
  strategy = void 0,
  trailingSlash = void 0
} = {}) {
  return proxyForComposable(
    {
      router,
      route,
      i18n,
      defaultLocale,
      defaultLocaleRouteNameSuffix,
      routesNameSeparator,
      strategy,
      trailingSlash
    },
    switchLocalePath
  );
}
function useLocaleHead({
  addDirAttribute = false,
  addSeoAttributes = false,
  identifierAttribute = "hid",
  strategy = void 0,
  defaultLocale = void 0,
  route = useRoute(),
  router = useRouter(),
  i18n = useI18n()
} = {}) {
  const _router = router;
  const metaObject = (0, vue_demi_exports.ref)({
    htmlAttrs: {},
    link: [],
    meta: []
  });
  function cleanMeta() {
    metaObject.value = {
      htmlAttrs: {},
      link: [],
      meta: []
    };
  }
  function updateMeta(_route) {
    metaObject.value = Reflect.apply(
      localeHead,
      {
        router,
        route: _route,
        i18n,
        defaultLocale,
        strategy
      },
      [{ addDirAttribute, addSeoAttributes, identifierAttribute }]
    );
  }
  if (inBrowser) {
    if (vue_demi_exports.isVue3) {
      const stop = (0, vue_demi_exports.watchEffect)(() => {
        cleanMeta();
        updateMeta(toRawRoute(_router.currentRoute));
      });
      (0, vue_demi_exports.onUnmounted)(() => stop());
    } else {
      const handler = _router.afterEach(
        (to, from) => {
          cleanMeta();
          updateMeta(to);
        }
      );
      (0, vue_demi_exports.onUnmounted)(() => handler());
      updateMeta(route);
    }
  } else {
    updateMeta(toRawRoute(_router.currentRoute));
  }
  return metaObject;
}
var VERSION = "0.10.2";
export {
  DEFAULT_BASE_URL,
  DEFAULT_DETECTION_DIRECTION,
  DEFAULT_DYNAMIC_PARAMS_KEY,
  DEFAULT_LOCALE,
  DEFAULT_LOCALE_ROUTE_NAME_SUFFIX,
  DEFAULT_ROUTES_NAME_SEPARATOR,
  DEFAULT_STRATEGY,
  DEFAULT_TRAILING_SLASH,
  DefaultLocalizeRoutesPrefixable,
  DefaultPrefixable,
  DefaultSwitchLocalePathIntercepter,
  STRATEGIES,
  VERSION,
  createLocaleFromRouteGetter,
  createRouter2 as createRouter,
  extendI18n,
  findBrowserLocale,
  getComposer,
  getGlobalOptions,
  getLocale,
  getLocaleCodes,
  getLocales,
  getLocalesRegex,
  getRouteBaseName,
  isComposer,
  isExportedGlobalComposer,
  isI18nInstance,
  isLegacyVueI18n,
  isVueI18n,
  localeHead,
  localeLocation,
  localePath,
  localeRoute,
  localizeRoutes,
  proxyVueInstance,
  registerGlobalOptions,
  resolveBaseUrl,
  resolveRoute,
  setLocale,
  switchLocalePath,
  useLocaleHead,
  useLocaleLocation,
  useLocalePath,
  useLocaleRoute,
  useRouteBaseName,
  useSwitchLocalePath
};
/*!
  * shared v9.3.0-beta.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
//# sourceMappingURL=vue-i18n-routing.js.map
