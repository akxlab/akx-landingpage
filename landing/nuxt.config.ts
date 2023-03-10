// https://v3.nuxtjs.org/api/configuration/nuxt.config
import {NodeGlobalsPolyfillPlugin} from '@esbuild-plugins/node-globals-polyfill'
import {NodeModulesPolyfillPlugin} from '@esbuild-plugins/node-modules-polyfill'
import nodePolyfills from 'rollup-plugin-polyfill-node';
import vuetify from 'vite-plugin-vuetify'
import glsl from 'vite-plugin-glsl'

// @ts-ignore
export default defineNuxtConfig({
    telemetry: false,
    ssr: true,

    app: {
        keepalive: true,
        baseURL: '/',
        head: {
            meta: [
                { hid: 'og:site_name', property: 'og:site_name', content: 'AKX' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'twitter:site', name: 'twitter:site', content: '@AkxInfo' },
                {
                    hid: 'twitter:card',
                    name: 'twitter:card',
                    content: 'summary_large_image'
                }

            ],
        }
    },


    css: ['~/assets/scss/style.scss', '~/assets/fa/css/all.css', '~/assets/fa/css/sharp-solid.css'],
    build: {
        transpile: ['vuetify', 'troisjs']
    },
    generate: {
        concurrency: 8
    },

    vite: {
        cacheDir: "./cache",
        logLevel: 'error',



        optimizeDeps: {
            include: ['bn.js', 'js-sha3', 'hash.js', 'aes-js', 'scrypt-js', 'bech32', 'crypto'],
            exclude: ['vuetify'],



            esbuildOptions: {
                plugins: [
                    NodeGlobalsPolyfillPlugin({
                        process: false,
                        buffer: false,
                        // @ts-ignore
                        http: true,
                        crypto: true,

                    }),
                    NodeModulesPolyfillPlugin()
                ]
            }
        },
        define: {
            'process.env.DEBUG': true,
            'window.global': {}
        },
        resolve: {
            alias: {
                crypto: 'crypto-browserify',
                stream: 'stream-browserify',
                assert: 'assert'
            }
        },
        build: {
            rollupOptions: {
                // @ts-ignore
                plugins: [nodePolyfills({crypto: true, http: true})]
            },
            chunkSizeWarningLimit: 65534,

            commonjsOptions: {
                transformMixedEsModules: true
            }

        },
        experimental: {
            hmrPartialAccept: true,
        },
        plugins: [glsl()]


    },

    experimental: {
        reactivityTransform: true
    },


    modules: [
        'nuxt-font-loader',
        '@dargmuesli/nuxt-cookie-control',
        'nuxt-csurf',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/supabase',



        ['@pinia/nuxt', {
            autoImports: [
                'defineStore',
                ['defineStore', 'definePiniaStore']
            ],



        }
        ],'@vueuse/nuxt',  '@nuxtjs/i18n',

        // @ts-ignore
        async (options, nuxt) => {
            // @ts-ignore
            nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
                vuetify()
            ))
        }
    ],
    i18n: {
        locales: [
            {
                code: 'en',
                file: 'en-US.json'
            },
            {
                code: 'es',
                file: 'es-ES.json'
            },
            {
                code: 'fr',
                file: 'fr-FR.json'
            }
        ],
        defaultLocale: 'en',
        detectBrowserLanguage: {
            useCookie: false
        },
        langDir: 'i18n',
        lazy: true,
        vueI18n: {
            legacy: false,
            defaultLocale: 'en',
            strategy: 'prefix_except_default',
            locale: 'en',
            fallbackLocale: 'en'
        }
    },
    fontLoader: {
        local: [
            {
                src: "/fonts/Sofia Pro Regular Az.woff",
                family: 'Sofia Pro Regular',
                class: 'sofia-pro-regular'
            },
            {
                src: "/fonts/Sofia Pro Bold Az.woff",
                family: 'Sofia Pro Bold',
                class: 'sofia-pro-bold'
            },
            {
                src: "/fonts/Sofia Pro Light Az.woff",
                family: 'Sofia Pro Light',
                class: 'sofia-pro-light'
            },
            {
                src: "/fonts/Sofia Pro UltraLight Az.woff",
                family: "Sofia Pro UltraLight",
                class: 'sofia-pro-ultralight'
            }
        ]
    },

    plugins: [
        '~/plugins/vuetify'
    ],
    publicRuntimeConfig: {
        apiURL: process.env.API_URL,
        plausible: {
            domain: process.env.PLAUSIBLE_DOMAIN
        },
        recaptcha: {
            version: 3,
            siteKey: process.env.RECAPTCHA_SITE_KEY
        }
    },
    csurf: { // optional
        https: true, // default true if in production
        cookieKey: '__Akx3.com-csrf', // "__Host-csrf" if https is true otherwise just "csrf"
        cookie: { // CookieSerializeOptions from unjs/cookie-es
            path: '/',
            httpOnly: true,
            sameSite: 'strict'
        },
        methodsToProtect: ['POST', 'PUT', 'PATCH'], // the request methods we want CSRF protection for
        encryptAlgorithm: 'aes-256-cbc'
    }



})
