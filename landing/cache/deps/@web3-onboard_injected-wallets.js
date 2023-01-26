import {
  createEIP1193Provider,
  require_joi_browser_min,
  validate
} from "./chunk-MYILNTZI.js";
import {
  __commonJS,
  __toESM
} from "./chunk-IJ7IQSKN.js";

// node_modules/lodash.uniqby/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.uniqby/index.js"(exports, module) {
    var LARGE_ARRAY_SIZE = 200;
    var FUNC_ERROR_TEXT = "Expected a function";
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var UNORDERED_COMPARE_FLAG = 1;
    var PARTIAL_COMPARE_FLAG = 2;
    var INFINITY = 1 / 0;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    var reLeadingDot = /^\./;
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reEscapeChar = /\\(\\)?/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        return freeProcess && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function arrayIncludes(array, value) {
      var length = array ? array.length : 0;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    function arrayIncludesWith(array, value, comparator) {
      var index = -1, length = array ? array.length : 0;
      while (++index < length) {
        if (comparator(value, array[index])) {
          return true;
        }
      }
      return false;
    }
    function arraySome(array, predicate) {
      var index = -1, length = array ? array.length : 0;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    function baseIndexOf(array, value, fromIndex) {
      if (value !== value) {
        return baseFindIndex(array, baseIsNaN, fromIndex);
      }
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    function baseIsNaN(value) {
      return value !== value;
    }
    function baseProperty(key) {
      return function(object) {
        return object == null ? void 0 : object[key];
      };
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e) {
        }
      }
      return result;
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Symbol = root.Symbol;
    var Uint8Array = root.Uint8Array;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var nativeKeys = overArg(Object.keys, Object);
    var DataView = getNative(root, "DataView");
    var Map = getNative(root, "Map");
    var Promise2 = getNative(root, "Promise");
    var Set = getNative(root, "Set");
    var WeakMap = getNative(root, "WeakMap");
    var nativeCreate = getNative(Object, "create");
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set);
    var weakMapCtorString = toSource(WeakMap);
    var symbolProto = Symbol ? Symbol.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function Hash(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }
    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      return getMapData(this, key)["delete"](key);
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      getMapData(this, key).set(key, value);
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function SetCache(values) {
      var index = -1, length = values ? values.length : 0;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    function Stack(entries) {
      this.__data__ = new ListCache(entries);
    }
    function stackClear() {
      this.__data__ = new ListCache();
    }
    function stackDelete(key) {
      return this.__data__["delete"](key);
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var cache = this.__data__;
      if (cache instanceof ListCache) {
        var pairs = cache.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          return this;
        }
        cache = this.__data__ = new MapCache(pairs);
      }
      cache.set(key, value);
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
      var length = result.length, skipIndexes = !!length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseGet(object, path) {
      path = isKey(path, object) ? [path] : castPath(path);
      var index = 0, length = path.length;
      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    function baseGetTag(value) {
      return objectToString.call(value);
    }
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }
    function baseIsEqual(value, other, customizer, bitmask, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
    }
    function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = arrayTag, othTag = arrayTag;
      if (!objIsArr) {
        objTag = getTag(object);
        objTag = objTag == argsTag ? objectTag : objTag;
      }
      if (!othIsArr) {
        othTag = getTag(other);
        othTag = othTag == argsTag ? objectTag : othTag;
      }
      var objIsObj = objTag == objectTag && !isHostObject(object), othIsObj = othTag == objectTag && !isHostObject(other), isSameTag = objTag == othTag;
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, equalFunc, customizer, bitmask, stack) : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
      }
      if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
    }
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length, length = index, noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack();
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === void 0 ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
            return false;
          }
        }
      }
      return true;
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
    }
    function baseIteratee(value) {
      if (typeof value == "function") {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == "object") {
        return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
      }
      return property(value);
    }
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, void 0, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
      };
    }
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function baseUniq(array, iteratee, comparator) {
      var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      } else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache();
      } else {
        seen = iteratee ? [] : result;
      }
      outer:
        while (++index < length) {
          var value = array[index], computed = iteratee ? iteratee(value) : value;
          value = comparator || value !== 0 ? value : 0;
          if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while (seenIndex--) {
              if (seen[seenIndex] === computed) {
                continue outer;
              }
            }
            if (iteratee) {
              seen.push(computed);
            }
            result.push(value);
          } else if (!includes(seen, computed, comparator)) {
            if (seen !== result) {
              seen.push(computed);
            }
            result.push(value);
          }
        }
      return result;
    }
    function castPath(value) {
      return isArray(value) ? value : stringToPath(value);
    }
    var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function(values) {
      return new Set(values);
    };
    function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1, result = true, seen = bitmask & UNORDERED_COMPARE_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!seen.has(othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, customizer, bitmask, stack))) {
              return seen.add(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= UNORDERED_COMPARE_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG, objProps = keys(object), objLength = objProps.length, othProps = keys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getMatchData(object) {
      var result = keys(object), length = result.length;
      while (length--) {
        var key = result[length], value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = objectToString.call(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : void 0;
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    function hasPath(object, path, hasFunc) {
      path = isKey(path, object) ? [path] : castPath(path);
      var result, index = -1, length = path.length;
      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result) {
        return result;
      }
      var length = object ? object.length : 0;
      return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
    }
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
      };
    }
    var stringToPath = memoize(function(string) {
      string = toString(string);
      var result = [];
      if (reLeadingDot.test(string)) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote, string2) {
        result.push(quote ? string2.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function uniqBy2(array, iteratee) {
      return array && array.length ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
    }
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result);
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    function isArguments(value) {
      return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
    }
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    function get(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    function identity(value) {
      return value;
    }
    function noop() {
    }
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }
    module.exports = uniqBy2;
  }
});

// node_modules/@web3-onboard/injected-wallets/dist/index.js
var import_lodash = __toESM(require_lodash());

// node_modules/@web3-onboard/injected-wallets/dist/types.js
var ProviderIdentityFlag;
(function(ProviderIdentityFlag2) {
  ProviderIdentityFlag2["AlphaWallet"] = "isAlphaWallet";
  ProviderIdentityFlag2["AToken"] = "isAToken";
  ProviderIdentityFlag2["Binance"] = "bbcSignTx";
  ProviderIdentityFlag2["Bitpie"] = "isBitpie";
  ProviderIdentityFlag2["BlockWallet"] = "isBlockWallet";
  ProviderIdentityFlag2["Coinbase"] = "isToshi";
  ProviderIdentityFlag2["CoinbaseExtension"] = "isCoinbaseWallet";
  ProviderIdentityFlag2["Detected"] = "request";
  ProviderIdentityFlag2["Dcent"] = "isDcentWallet";
  ProviderIdentityFlag2["Exodus"] = "isExodus";
  ProviderIdentityFlag2["Frontier"] = "isFrontier";
  ProviderIdentityFlag2["Frame"] = "isFrame";
  ProviderIdentityFlag2["HuobiWallet"] = "isHbWallet";
  ProviderIdentityFlag2["HyperPay"] = "isHyperPay";
  ProviderIdentityFlag2["ImToken"] = "isImToken";
  ProviderIdentityFlag2["Liquality"] = "isLiquality";
  ProviderIdentityFlag2["MeetOne"] = "wallet";
  ProviderIdentityFlag2["MetaMask"] = "isMetaMask";
  ProviderIdentityFlag2["MyKey"] = "isMYKEY";
  ProviderIdentityFlag2["OwnBit"] = "isOwnbit";
  ProviderIdentityFlag2["Status"] = "isStatus";
  ProviderIdentityFlag2["Trust"] = "isTrust";
  ProviderIdentityFlag2["TokenPocket"] = "isTokenPocket";
  ProviderIdentityFlag2["TP"] = "isTp";
  ProviderIdentityFlag2["WalletIo"] = "isWalletIO";
  ProviderIdentityFlag2["XDEFI"] = "isXDEFI";
  ProviderIdentityFlag2["OneInch"] = "isOneInchIOSWallet";
  ProviderIdentityFlag2["Tokenary"] = "isTokenary";
  ProviderIdentityFlag2["Tally"] = "isTally";
  ProviderIdentityFlag2["BraveWallet"] = "isBraveWallet";
  ProviderIdentityFlag2["Rabby"] = "isRabby";
  ProviderIdentityFlag2["MathWallet"] = "isMathWallet";
  ProviderIdentityFlag2["GameStop"] = "isGamestop";
  ProviderIdentityFlag2["BitKeep"] = "isBitKeep";
  ProviderIdentityFlag2["Sequence"] = "isSequence";
  ProviderIdentityFlag2["Core"] = "isAvalanche";
  ProviderIdentityFlag2["Opera"] = "isOpera";
  ProviderIdentityFlag2["Bitski"] = "isBitski";
  ProviderIdentityFlag2["Enkrypt"] = "isEnkrypt";
  ProviderIdentityFlag2["Zeal"] = "isZeal";
  ProviderIdentityFlag2["Phantom"] = "isPhantom";
  ProviderIdentityFlag2["Zerion"] = "isZerion";
  ProviderIdentityFlag2["Rainbow"] = "isRainbow";
})(ProviderIdentityFlag || (ProviderIdentityFlag = {}));
var ProviderLabel;
(function(ProviderLabel2) {
  ProviderLabel2["AlphaWallet"] = "AlphaWallet";
  ProviderLabel2["AToken"] = "AToken";
  ProviderLabel2["Binance"] = "Binance Smart Wallet";
  ProviderLabel2["Bitpie"] = "Bitpie";
  ProviderLabel2["Bitski"] = "Bitski";
  ProviderLabel2["BlockWallet"] = "BlockWallet";
  ProviderLabel2["Brave"] = "Brave Wallet";
  ProviderLabel2["Coinbase"] = "Coinbase Wallet";
  ProviderLabel2["Dcent"] = "D'CENT";
  ProviderLabel2["Detected"] = "Detected Wallet";
  ProviderLabel2["Exodus"] = "Exodus";
  ProviderLabel2["Frame"] = "Frame";
  ProviderLabel2["Frontier"] = "Frontier";
  ProviderLabel2["HuobiWallet"] = "Huobi Wallet";
  ProviderLabel2["HyperPay"] = "HyperPay";
  ProviderLabel2["ImToken"] = "imToken";
  ProviderLabel2["Liquality"] = "Liquality";
  ProviderLabel2["MeetOne"] = "MeetOne";
  ProviderLabel2["MetaMask"] = "MetaMask";
  ProviderLabel2["MyKey"] = "MyKey";
  ProviderLabel2["Opera"] = "Opera Wallet";
  ProviderLabel2["OwnBit"] = "OwnBit";
  ProviderLabel2["Status"] = "Status Wallet";
  ProviderLabel2["Trust"] = "Trust Wallet";
  ProviderLabel2["TokenPocket"] = "TokenPocket";
  ProviderLabel2["TP"] = "TP Wallet";
  ProviderLabel2["WalletIo"] = "Wallet.io";
  ProviderLabel2["XDEFI"] = "XDEFI Wallet";
  ProviderLabel2["OneInch"] = "1inch Wallet";
  ProviderLabel2["Tokenary"] = "Tokenary Wallet";
  ProviderLabel2["Tally"] = "Tally Ho Wallet";
  ProviderLabel2["Rabby"] = "Rabby";
  ProviderLabel2["MathWallet"] = "MathWallet";
  ProviderLabel2["GameStop"] = "GameStop Wallet";
  ProviderLabel2["BitKeep"] = "BitKeep";
  ProviderLabel2["Sequence"] = "Sequence";
  ProviderLabel2["Core"] = "Core";
  ProviderLabel2["Enkrypt"] = "Enkrypt";
  ProviderLabel2["Zeal"] = "Zeal";
  ProviderLabel2["Phantom"] = "Phantom";
  ProviderLabel2["Zerion"] = "Zerion";
  ProviderLabel2["Rainbow"] = "Rainbow";
})(ProviderLabel || (ProviderLabel = {}));
var InjectedNameSpace;
(function(InjectedNameSpace2) {
  InjectedNameSpace2["Ethereum"] = "ethereum";
  InjectedNameSpace2["Binance"] = "BinanceChain";
  InjectedNameSpace2["Tally"] = "tally";
  InjectedNameSpace2["Web3"] = "web3";
  InjectedNameSpace2["Arbitrum"] = "arbitrum";
  InjectedNameSpace2["XFI"] = "xfi";
  InjectedNameSpace2["GameStop"] = "gamestop";
  InjectedNameSpace2["BitKeep"] = "bitkeep";
  InjectedNameSpace2["Avalanche"] = "avalanche";
  InjectedNameSpace2["Bitski"] = "Bitski";
  InjectedNameSpace2["Enkrypt"] = "enkrypt";
  InjectedNameSpace2["Zeal"] = "zeal";
  InjectedNameSpace2["Frontier"] = "frontier";
  InjectedNameSpace2["Phantom"] = "phantom";
})(InjectedNameSpace || (InjectedNameSpace = {}));

// node_modules/@web3-onboard/injected-wallets/dist/wallets.js
var UNSUPPORTED_METHOD = null;
function getInjectedInterface(identity, checkOtherProviderFlags) {
  return async () => ({
    provider: window.ethereum.providers && Array.isArray(window.ethereum.providers) ? getInterfaceFromProvidersArray(identity, checkOtherProviderFlags) : window.ethereum
  });
}
function getInterfaceFromProvidersArray(identity, checkOtherProviderFlags) {
  return window.ethereum.providers.find((provider) => {
    return checkOtherProviderFlags ? !!provider[identity] && !otherProviderFlagsExist(identity, provider) : !!provider[identity];
  });
}
function otherProviderFlagsExist(identity, provider) {
  const otherProviderFlags = Object.values(ProviderIdentityFlag).filter((id) => id !== identity && id !== ProviderIdentityFlag.Detected);
  return otherProviderFlags.some((id) => !!provider[id]);
}
var metamask = {
  label: ProviderLabel.MetaMask,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.MetaMask] && !otherProviderFlagsExist(ProviderIdentityFlag.MetaMask, provider),
  getIcon: async () => (await import("./metamask-IHTSTNO3.js")).default,
  getInterface: getInjectedInterface(ProviderIdentityFlag.MetaMask, true),
  platforms: ["all"]
};
var exodus = {
  label: ProviderLabel.Exodus,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.Exodus],
  getIcon: async () => (await import("./exodus-2OMPNM3N.js")).default,
  getInterface: getInjectedInterface(ProviderIdentityFlag.Exodus),
  platforms: ["all"]
};
var frontier = {
  label: ProviderLabel.Frontier,
  injectedNamespace: InjectedNameSpace.Frontier,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider["ethereum"] && !!provider["ethereum"][ProviderIdentityFlag.Frontier],
  getIcon: async () => (await import("./frontier-4HRHY5EU.js")).default,
  getInterface: async () => ({
    provider: createEIP1193Provider(window.frontier.ethereum)
  }),
  platforms: ["all"]
};
var brave = {
  label: ProviderLabel.Brave,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.BraveWallet],
  getIcon: async () => (await import("./brave-FCVURFF3.js")).default,
  getInterface: getInjectedInterface(ProviderIdentityFlag.BraveWallet),
  platforms: ["all"]
};
var binance = {
  label: ProviderLabel.Binance,
  injectedNamespace: InjectedNameSpace.Binance,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.Binance],
  getIcon: async () => (await import("./binance-7TSP3M6D.js")).default,
  getInterface: async () => {
    let tempBNBProvider = {
      ...window.BinanceChain
    };
    window.BinanceChain = tempBNBProvider;
    const addListener = window.BinanceChain.on.bind(window.BinanceChain);
    window.BinanceChain.on = (event, func) => {
      if (event === "chainChanged") {
        addListener(event, (chainId) => {
          const cb = func;
          cb(`0x${parseInt(chainId).toString(16)}`);
        });
      } else {
        addListener(event, func);
      }
    };
    const provider = createEIP1193Provider(window.BinanceChain, {
      eth_chainId: ({ baseRequest }) => baseRequest({ method: "eth_chainId" }).then((id) => `0x${parseInt(id).toString(16)}`),
      eth_selectAccounts: UNSUPPORTED_METHOD,
      wallet_switchEthereumChain: UNSUPPORTED_METHOD
    });
    provider.removeListener = (event, func) => {
    };
    return {
      provider
    };
  },
  platforms: ["desktop"]
};
var coinbase = {
  label: ProviderLabel.Coinbase,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.Coinbase] || !!provider && !!provider[ProviderIdentityFlag.CoinbaseExtension],
  getIcon: async () => (await import("./coinbase-PJFKS3W4.js")).default,
  getInterface: async () => {
    const { provider } = await getInjectedInterface(ProviderIdentityFlag.CoinbaseExtension)();
    const addListener = provider.on.bind(provider);
    provider.on = (event, func) => {
      if (event === "chainChanged") {
        addListener(event, (chainId) => {
          const cb = func;
          cb(`0x${parseInt(chainId).toString(16)}`);
        });
      } else {
        addListener(event, func);
      }
    };
    return { provider };
  },
  platforms: ["all"]
};
var detected = {
  label: ProviderLabel.Detected,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.Detected],
  getIcon: async () => (await import("./detected-QFE2LJAB.js")).default,
  getInterface: async () => ({
    provider: window.ethereum
  }),
  platforms: ["all"]
};
var trust = {
  label: ProviderLabel.Trust,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.Trust] && !!provider && !provider[ProviderIdentityFlag.TokenPocket],
  getIcon: async () => (await import("./trust-4AQ7VYEY.js")).default,
  getInterface: async () => ({
    provider: createEIP1193Provider(window.ethereum, {
      wallet_switchEthereumChain: UNSUPPORTED_METHOD,
      eth_selectAccounts: UNSUPPORTED_METHOD
    })
  }),
  platforms: ["mobile"]
};
var opera = {
  label: ProviderLabel.Opera,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.Opera],
  getIcon: async () => (await import("./opera-OOIHNG5S.js")).default,
  getInterface: async () => ({
    provider: createEIP1193Provider(window.ethereum, {
      eth_requestAccounts: async ({ baseRequest }) => baseRequest({ method: "eth_accounts" }),
      eth_selectAccounts: UNSUPPORTED_METHOD
    })
  }),
  platforms: ["all"]
};
var status = {
  label: ProviderLabel.Status,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.Status],
  getIcon: async () => (await import("./status-2ZDKLZMW.js")).default,
  getInterface: async () => {
    const provider = window.ethereum;
    return {
      provider
    };
  },
  platforms: ["mobile"]
};
var alphawallet = {
  label: ProviderLabel.AlphaWallet,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.AlphaWallet],
  getIcon: async () => (await import("./alphawallet-2CF4CAHK.js")).default,
  getInterface: async () => ({
    provider: createEIP1193Provider(window.ethereum, {
      wallet_switchEthereumChain: UNSUPPORTED_METHOD,
      eth_selectAccounts: UNSUPPORTED_METHOD
    })
  }),
  platforms: ["mobile"]
};
var atoken = {
  label: ProviderLabel.AToken,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.AToken],
  getIcon: async () => (await import("./atoken-KFEP6OUL.js")).default,
  getInterface: async () => ({
    provider: window.ethereum
  }),
  platforms: ["mobile"]
};
var bitpie = {
  label: ProviderLabel.Bitpie,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: () => !!window.Bitpie,
  getIcon: async () => (await import("./bitpie-3IGF77ZV.js")).default,
  getInterface: async () => ({
    provider: createEIP1193Provider(window.ethereum, {
      wallet_switchEthereumChain: UNSUPPORTED_METHOD,
      eth_selectAccounts: UNSUPPORTED_METHOD
    })
  }),
  platforms: ["mobile"]
};
var blockwallet = {
  label: ProviderLabel.BlockWallet,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.BlockWallet],
  getIcon: async () => (await import("./blockwallet-XPNUVWFU.js")).default,
  getInterface: getInjectedInterface(ProviderIdentityFlag.BlockWallet),
  platforms: ["desktop"]
};
var frame = {
  label: ProviderLabel.Frame,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.Frame],
  getIcon: async () => (await import("./frame-USSXM5OB.js")).default,
  getInterface: async () => ({
    provider: window.ethereum
  }),
  platforms: ["desktop"]
};
var huobiwallet = {
  label: ProviderLabel.HuobiWallet,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.HuobiWallet],
  getIcon: async () => (await import("./huobiwallet-FMGYBXFP.js")).default,
  getInterface: async () => ({
    provider: createEIP1193Provider(window.ethereum, {
      wallet_switchEthereumChain: UNSUPPORTED_METHOD,
      eth_selectAccounts: UNSUPPORTED_METHOD
    })
  }),
  platforms: ["mobile"]
};
var hyperpay = {
  label: ProviderLabel.HyperPay,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: () => !!window.hiWallet,
  getIcon: async () => (await import("./hyperpay-SQNOSYM5.js")).default,
  getInterface: async () => ({
    provider: createEIP1193Provider(window.ethereum, {
      wallet_switchEthereumChain: UNSUPPORTED_METHOD,
      eth_selectAccounts: UNSUPPORTED_METHOD
    })
  }),
  platforms: ["mobile"]
};
var imtoken = {
  label: ProviderLabel.ImToken,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.ImToken],
  getIcon: async () => (await import("./imtoken-5F6W3NW4.js")).default,
  getInterface: async () => ({
    provider: createEIP1193Provider(window.ethereum, {
      wallet_switchEthereumChain: UNSUPPORTED_METHOD,
      eth_selectAccounts: UNSUPPORTED_METHOD
    })
  }),
  platforms: ["mobile"]
};
var liquality = {
  label: ProviderLabel.Liquality,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.Liquality],
  getIcon: async () => (await import("./liquality-KHSAKXLJ.js")).default,
  getInterface: async () => {
    const provider = createEIP1193Provider(window.ethereum, {
      wallet_switchEthereumChain: UNSUPPORTED_METHOD,
      eth_selectAccounts: UNSUPPORTED_METHOD
    });
    provider.removeListener = (event, func) => {
    };
    return { provider };
  },
  platforms: ["desktop"]
};
var meetone = {
  label: ProviderLabel.MeetOne,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && provider[ProviderIdentityFlag.MeetOne] === "MEETONE",
  getIcon: async () => (await import("./meetone-HVK4L6B6.js")).default,
  getInterface: async () => ({
    provider: window.ethereum
  }),
  platforms: ["mobile"]
};
var mykey = {
  label: ProviderLabel.MyKey,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.MyKey],
  getIcon: async () => (await import("./mykey-BZZEKJB3.js")).default,
  getInterface: async () => ({
    provider: window.ethereum
  }),
  platforms: ["mobile"]
};
var ownbit = {
  label: ProviderLabel.OwnBit,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.OwnBit],
  getIcon: async () => (await import("./ownbit-HIKDQBPS.js")).default,
  getInterface: async () => {
    const provider = createEIP1193Provider(window.ethereum, {
      eth_chainId: ({ baseRequest }) => baseRequest({ method: "eth_chainId" }).then((id) => `0x${parseInt(id).toString(16)}`),
      wallet_switchEthereumChain: UNSUPPORTED_METHOD,
      eth_selectAccounts: UNSUPPORTED_METHOD
    });
    provider.removeListener = (event, listener) => {
    };
    provider.on = (event, listener) => {
    };
    return { provider };
  },
  platforms: ["mobile"]
};
var tokenpocket = {
  label: ProviderLabel.TokenPocket,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.TokenPocket] && !provider[ProviderIdentityFlag.TP],
  getIcon: async () => (await import("./tokenpocket-MO2VXH23.js")).default,
  getInterface: getInjectedInterface(ProviderIdentityFlag.TokenPocket),
  platforms: ["all"]
};
var tp = {
  label: ProviderLabel.TP,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.TP],
  getIcon: async () => (await import("./tp-JFPS4YUE.js")).default,
  getInterface: async () => ({
    provider: createEIP1193Provider(window.ethereum, {
      wallet_switchEthereumChain: UNSUPPORTED_METHOD,
      eth_selectAccounts: UNSUPPORTED_METHOD
    })
  }),
  platforms: ["mobile"]
};
var xdefi = {
  label: ProviderLabel.XDEFI,
  injectedNamespace: InjectedNameSpace.XFI,
  checkProviderIdentity: ({ provider }) => provider && provider.ethereum && provider.ethereum[ProviderIdentityFlag.XDEFI],
  getIcon: async () => (await import("./xdefi-VOVQM75O.js")).default,
  getInterface: async () => ({
    provider: window.xfi && window.xfi.ethereum
  }),
  platforms: ["all"]
};
var oneInch = {
  label: ProviderLabel.OneInch,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.OneInch],
  getIcon: async () => (await import("./oneInch-4R6AANZJ.js")).default,
  getInterface: async () => ({
    provider: createEIP1193Provider(window.ethereum)
  }),
  platforms: ["mobile"]
};
var tokenary = {
  label: ProviderLabel.Tokenary,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.Tokenary],
  getIcon: async () => (await import("./tokenary-R44WGZK3.js")).default,
  getInterface: async () => ({
    provider: createEIP1193Provider(window.ethereum)
  }),
  platforms: ["all"]
};
var tally = {
  label: ProviderLabel.Tally,
  injectedNamespace: InjectedNameSpace.Tally,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.Tally],
  getIcon: async () => (await import("./tallywallet-7INM5QIC.js")).default,
  getInterface: async () => ({
    provider: createEIP1193Provider(window.tally)
  }),
  platforms: ["desktop"]
};
var zeal = {
  label: ProviderLabel.Zeal,
  injectedNamespace: InjectedNameSpace.Zeal,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.Zeal],
  getIcon: async () => (await import("./zeal-A6DDDDDV.js")).default,
  getInterface: async () => ({
    provider: createEIP1193Provider(window.zeal)
  }),
  platforms: ["desktop"]
};
var rabby = {
  label: ProviderLabel.Rabby,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.Rabby],
  getIcon: async () => (await import("./rabby-ERBG2AAG.js")).default,
  getInterface: async () => ({
    provider: createEIP1193Provider(window.ethereum)
  }),
  platforms: ["desktop"]
};
var mathwallet = {
  label: ProviderLabel.MathWallet,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.MathWallet],
  getIcon: async () => (await import("./mathwallet-YCDTNCC4.js")).default,
  getInterface: getInjectedInterface(ProviderIdentityFlag.MathWallet),
  platforms: ["all"]
};
var gamestop = {
  label: ProviderLabel.GameStop,
  injectedNamespace: InjectedNameSpace.GameStop,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.GameStop],
  getIcon: async () => (await import("./gamestop-Q5X3YNRX.js")).default,
  getInterface: async () => {
    const provider = createEIP1193Provider(window.gamestop, {
      eth_chainId: ({ baseRequest }) => baseRequest({ method: "eth_chainId" }).then((id) => `0x${parseInt(id).toString(16)}`),
      wallet_switchEthereumChain: UNSUPPORTED_METHOD
    });
    provider.removeListener = (event, listener) => {
    };
    provider.on = (event, listener) => {
    };
    return { provider };
  },
  platforms: ["desktop"]
};
var bitkeep = {
  label: ProviderLabel.BitKeep,
  injectedNamespace: InjectedNameSpace.BitKeep,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider["ethereum"][ProviderIdentityFlag.BitKeep],
  getIcon: async () => (await import("./bitkeep-5OZMCNYK.js")).default,
  getInterface: async () => ({
    provider: window.bitkeep && window.bitkeep.ethereum
  }),
  platforms: ["all"]
};
var sequence = {
  label: ProviderLabel.Sequence,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.Sequence],
  getIcon: async () => (await import("./sequence-VI77UGZV.js")).default,
  getInterface: async () => ({
    provider: window.ethereum
  }),
  platforms: ["all"]
};
var core = {
  label: ProviderLabel.Core,
  injectedNamespace: InjectedNameSpace.Avalanche,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.Core],
  getIcon: async () => (await import("./core-WVLI5OIF.js")).default,
  getInterface: getInjectedInterface(ProviderIdentityFlag.Core),
  platforms: ["desktop", "Chrome", "Chromium", "Microsoft Edge"]
};
var bitski = {
  label: ProviderLabel.Bitski,
  injectedNamespace: InjectedNameSpace.Bitski,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider.getProvider && !!provider.getProvider().isBitski,
  getIcon: async () => (await import("./bitski-QGNWUYX3.js")).default,
  getInterface: async () => ({
    provider: window.Bitski && window.Bitski.getProvider && window.Bitski.getProvider()
  }),
  platforms: ["all"]
};
var zerion = {
  label: ProviderLabel.Zerion,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.Zerion],
  getIcon: async () => (await import("./zerion-GFTZUB7E.js")).default,
  getInterface: async () => ({
    provider: createEIP1193Provider(window.ethereum)
  }),
  platforms: ["all"]
};
var enkrypt = {
  label: ProviderLabel.Enkrypt,
  injectedNamespace: InjectedNameSpace.Enkrypt,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider.providers && !!provider.providers.ethereum,
  getIcon: async () => (await import("./enkrypt-LMIQN24Z.js")).default,
  getInterface: async () => {
    const addListener = window.enkrypt.providers.ethereum.on.bind(window.enkrypt.providers.ethereum);
    window.enkrypt.providers.ethereum.on = (event, func) => {
      if (event === "chainChanged") {
        addListener(event, (chainId) => {
          const cb = func;
          cb(`0x${parseInt(chainId).toString(16)}`);
        });
      } else {
        addListener(event, func);
      }
    };
    const provider = createEIP1193Provider(window.enkrypt.providers.ethereum, {
      eth_chainId: ({ baseRequest }) => baseRequest({ method: "eth_chainId" }).then((id) => `0x${parseInt(id).toString(16)}`)
    });
    provider.removeListener = (event, func) => {
    };
    return {
      provider
    };
  },
  platforms: ["all"]
};
var phantom = {
  label: ProviderLabel.Phantom,
  injectedNamespace: InjectedNameSpace.Phantom,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider["ethereum"] && !!provider["ethereum"][ProviderIdentityFlag.Phantom],
  getIcon: async () => (await import("./phantom-D7VVBOM6.js")).default,
  getInterface: async () => ({
    provider: createEIP1193Provider(window.phantom.ethereum)
  }),
  platforms: ["all"]
};
var rainbow = {
  label: ProviderLabel.Rainbow,
  injectedNamespace: InjectedNameSpace.Ethereum,
  checkProviderIdentity: ({ provider }) => !!provider && !!provider[ProviderIdentityFlag.Rainbow],
  getIcon: async () => (await import("./rainbow-BG7GZUEN.js")).default,
  getInterface: getInjectedInterface(ProviderIdentityFlag.Rainbow),
  platforms: ["all"]
};
var wallets = [
  zeal,
  exodus,
  frontier,
  metamask,
  binance,
  coinbase,
  detected,
  trust,
  opera,
  status,
  alphawallet,
  atoken,
  bitpie,
  blockwallet,
  brave,
  frame,
  huobiwallet,
  hyperpay,
  imtoken,
  liquality,
  meetone,
  mykey,
  ownbit,
  tokenpocket,
  tp,
  xdefi,
  oneInch,
  tokenary,
  tally,
  rabby,
  mathwallet,
  gamestop,
  bitkeep,
  sequence,
  core,
  bitski,
  enkrypt,
  phantom,
  zerion,
  rainbow
];
var wallets_default = wallets;

// node_modules/@web3-onboard/injected-wallets/dist/validation.js
var import_joi = __toESM(require_joi_browser_min(), 1);
var walletModule = import_joi.default.object({
  label: import_joi.default.string().required(),
  getIcon: import_joi.default.function().arity(0).required(),
  getInterface: import_joi.default.function().maxArity(1).required(),
  injectedNamespace: import_joi.default.string().required(),
  checkProviderIdentity: import_joi.default.function().arity(1).required(),
  platforms: import_joi.default.array().items(import_joi.default.string())
});
var wallets2 = import_joi.default.array().items(walletModule);
var filter = import_joi.default.object().pattern(/\w+/, import_joi.default.any().allow(import_joi.default.boolean(), import_joi.default.array().items(import_joi.default.string())));
var walletOptions = import_joi.default.object({
  custom: wallets2,
  filter,
  displayUnavailable: import_joi.default.boolean(),
  walletUnavailableMessage: import_joi.default.function(),
  sort: import_joi.default.function()
});
var validateWalletOptions = (data) => validate(walletOptions, data);

// node_modules/@web3-onboard/injected-wallets/dist/helpers.js
var defaultWalletUnavailableMsg = ({ label }) => `Please install or enable ${label} to continue`;
var isWalletAvailable = (provider, checkProviderIdentity, device) => {
  if (provider && provider.providers && Array.isArray(provider.providers)) {
    return !!provider.providers.filter((provider2) => checkProviderIdentity({ provider: provider2, device })).length;
  } else {
    return checkProviderIdentity({ provider, device });
  }
};

// node_modules/@web3-onboard/injected-wallets/dist/index.js
function injected(options) {
  if (typeof window === "undefined")
    return () => null;
  if (options) {
    const result = validateWalletOptions(options);
    if (result && result.error)
      throw result.error;
  }
  return (helpers) => {
    const { device } = helpers;
    const { custom = [], filter: filter2 = {}, displayUnavailable, sort, walletUnavailableMessage } = options || {};
    const allWallets = (0, import_lodash.default)([...custom, ...wallets_default], ({ label }) => label);
    const wallets3 = allWallets.reduce((acc, wallet) => {
      const { label, platforms, injectedNamespace, checkProviderIdentity } = wallet;
      const walletFilters = filter2[label];
      const filteredWallet = walletFilters === false;
      const provider = window[injectedNamespace];
      const walletAvailable = isWalletAvailable(provider, checkProviderIdentity, device);
      let excludedDevice = false;
      if (Array.isArray(walletFilters) && (walletFilters.includes(device.type) || walletFilters.includes(device.os.name))) {
        excludedDevice = true;
      }
      if (walletFilters === "unavailable" && !walletAvailable) {
        excludedDevice = true;
      }
      const invalidPlatform = !platforms.includes("all") && !platforms.includes(device.type) && !platforms.includes(device.os.name);
      const supportedWallet = !filteredWallet && !excludedDevice && !invalidPlatform && (walletAvailable || displayUnavailable);
      if (supportedWallet) {
        acc.push(
          displayUnavailable && !walletAvailable ? {
            ...wallet,
            getInterface: async () => {
              throw new Error(walletUnavailableMessage ? walletUnavailableMessage(wallet) : defaultWalletUnavailableMsg(wallet));
            }
          } : wallet
        );
      }
      return acc;
    }, []);
    if (wallets3.length) {
      const moreThanOneWallet = wallets3.length > 1;
      const formattedWallets = wallets3.filter((wallet) => {
        const { label } = wallet;
        return !(label === ProviderLabel.Detected && moreThanOneWallet);
      }).map(({ label, getIcon, getInterface }) => ({
        label,
        getIcon,
        getInterface
      })).sort((a, b) => a.label < b.label ? -1 : a.label > b.label ? 1 : 0);
      return sort ? sort(formattedWallets) : formattedWallets;
    }
    return [];
  };
}
var dist_default = injected;
export {
  ProviderIdentityFlag,
  ProviderLabel,
  dist_default as default
};
//# sourceMappingURL=@web3-onboard_injected-wallets.js.map
