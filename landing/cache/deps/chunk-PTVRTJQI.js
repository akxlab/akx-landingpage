import {
  __commonJS
} from "./chunk-LFBQMW2U.js";

// node_modules/bech32/index.js
var require_bech32 = __commonJS({
  "node_modules/bech32/index.js"(exports, module) {
    var ALPHABET = "qpzry9x8gf2tvdw0s3jn54khce6mua7l";
    var ALPHABET_MAP = {};
    for (z = 0; z < ALPHABET.length; z++) {
      x = ALPHABET.charAt(z);
      if (ALPHABET_MAP[x] !== void 0)
        throw new TypeError(x + " is ambiguous");
      ALPHABET_MAP[x] = z;
    }
    var x;
    var z;
    function polymodStep(pre) {
      var b = pre >> 25;
      return (pre & 33554431) << 5 ^ -(b >> 0 & 1) & 996825010 ^ -(b >> 1 & 1) & 642813549 ^ -(b >> 2 & 1) & 513874426 ^ -(b >> 3 & 1) & 1027748829 ^ -(b >> 4 & 1) & 705979059;
    }
    function prefixChk(prefix) {
      var chk = 1;
      for (var i = 0; i < prefix.length; ++i) {
        var c = prefix.charCodeAt(i);
        if (c < 33 || c > 126)
          return "Invalid prefix (" + prefix + ")";
        chk = polymodStep(chk) ^ c >> 5;
      }
      chk = polymodStep(chk);
      for (i = 0; i < prefix.length; ++i) {
        var v = prefix.charCodeAt(i);
        chk = polymodStep(chk) ^ v & 31;
      }
      return chk;
    }
    function encode(prefix, words, LIMIT) {
      LIMIT = LIMIT || 90;
      if (prefix.length + 7 + words.length > LIMIT)
        throw new TypeError("Exceeds length limit");
      prefix = prefix.toLowerCase();
      var chk = prefixChk(prefix);
      if (typeof chk === "string")
        throw new Error(chk);
      var result = prefix + "1";
      for (var i = 0; i < words.length; ++i) {
        var x2 = words[i];
        if (x2 >> 5 !== 0)
          throw new Error("Non 5-bit word");
        chk = polymodStep(chk) ^ x2;
        result += ALPHABET.charAt(x2);
      }
      for (i = 0; i < 6; ++i) {
        chk = polymodStep(chk);
      }
      chk ^= 1;
      for (i = 0; i < 6; ++i) {
        var v = chk >> (5 - i) * 5 & 31;
        result += ALPHABET.charAt(v);
      }
      return result;
    }
    function __decode(str, LIMIT) {
      LIMIT = LIMIT || 90;
      if (str.length < 8)
        return str + " too short";
      if (str.length > LIMIT)
        return "Exceeds length limit";
      var lowered = str.toLowerCase();
      var uppered = str.toUpperCase();
      if (str !== lowered && str !== uppered)
        return "Mixed-case string " + str;
      str = lowered;
      var split = str.lastIndexOf("1");
      if (split === -1)
        return "No separator character for " + str;
      if (split === 0)
        return "Missing prefix for " + str;
      var prefix = str.slice(0, split);
      var wordChars = str.slice(split + 1);
      if (wordChars.length < 6)
        return "Data too short";
      var chk = prefixChk(prefix);
      if (typeof chk === "string")
        return chk;
      var words = [];
      for (var i = 0; i < wordChars.length; ++i) {
        var c = wordChars.charAt(i);
        var v = ALPHABET_MAP[c];
        if (v === void 0)
          return "Unknown character " + c;
        chk = polymodStep(chk) ^ v;
        if (i + 6 >= wordChars.length)
          continue;
        words.push(v);
      }
      if (chk !== 1)
        return "Invalid checksum for " + str;
      return { prefix, words };
    }
    function decodeUnsafe() {
      var res = __decode.apply(null, arguments);
      if (typeof res === "object")
        return res;
    }
    function decode(str) {
      var res = __decode.apply(null, arguments);
      if (typeof res === "object")
        return res;
      throw new Error(res);
    }
    function convert(data, inBits, outBits, pad) {
      var value = 0;
      var bits = 0;
      var maxV = (1 << outBits) - 1;
      var result = [];
      for (var i = 0; i < data.length; ++i) {
        value = value << inBits | data[i];
        bits += inBits;
        while (bits >= outBits) {
          bits -= outBits;
          result.push(value >> bits & maxV);
        }
      }
      if (pad) {
        if (bits > 0) {
          result.push(value << outBits - bits & maxV);
        }
      } else {
        if (bits >= inBits)
          return "Excess padding";
        if (value << outBits - bits & maxV)
          return "Non-zero padding";
      }
      return result;
    }
    function toWordsUnsafe(bytes) {
      var res = convert(bytes, 8, 5, true);
      if (Array.isArray(res))
        return res;
    }
    function toWords(bytes) {
      var res = convert(bytes, 8, 5, true);
      if (Array.isArray(res))
        return res;
      throw new Error(res);
    }
    function fromWordsUnsafe(words) {
      var res = convert(words, 5, 8, false);
      if (Array.isArray(res))
        return res;
    }
    function fromWords(words) {
      var res = convert(words, 5, 8, false);
      if (Array.isArray(res))
        return res;
      throw new Error(res);
    }
    module.exports = {
      decodeUnsafe,
      decode,
      encode,
      toWordsUnsafe,
      toWords,
      fromWordsUnsafe,
      fromWords
    };
  }
});

export {
  require_bech32
};
//# sourceMappingURL=chunk-PTVRTJQI.js.map