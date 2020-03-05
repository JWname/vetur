(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{218:function(t,e,n){"use strict";n.r(e);var r=n(28),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"linting-error-checking"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linting-error-checking"}},[t._v("#")]),t._v(" Linting / Error Checking")]),t._v(" "),n("p",[t._v("Vetur provides error-checking and linting.")]),t._v(" "),n("h2",{attrs:{id:"error-checking"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#error-checking"}},[t._v("#")]),t._v(" Error Checking")]),t._v(" "),n("p",[t._v("Vetur has error checking for the following languages:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("<template>")]),t._v(": "),n("code",[t._v("html")])]),t._v(" "),n("li",[n("code",[t._v("<style>")]),t._v(": "),n("code",[t._v("css")]),t._v(", "),n("code",[t._v("scss")]),t._v(", "),n("code",[t._v("less")])]),t._v(" "),n("li",[n("code",[t._v("<script>")]),t._v(": "),n("code",[t._v("js")]),t._v(", "),n("code",[t._v("ts")])])]),t._v(" "),n("p",[t._v("You can selectively turn error checking off by "),n("code",[t._v("vetur.validation.[template/style/script]")]),t._v(".")]),t._v(" "),n("h2",{attrs:{id:"linting"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linting"}},[t._v("#")]),t._v(" Linting")]),t._v(" "),n("p",[t._v("Install "),n("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint plugin"),n("OutboundLink")],1),t._v(" for the best linting experience. Vetur's template linting is only for quick start and does not support rule configuration.")]),t._v(" "),n("p",[t._v("After you installed "),n("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint plugin"),n("OutboundLink")],1),t._v(", add "),n("code",[t._v("vue")]),t._v(" to "),n("code",[t._v("eslint.validate")]),t._v(" in VS Code config:")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"eslint.validate"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"javascript"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"javascriptreact"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("When configured correctly, ESLint should work for both "),n("code",[t._v("<template>")]),t._v(" and "),n("code",[t._v("<script>")]),t._v(".")]),t._v(" "),n("h4",{attrs:{id:"linting-for-template"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linting-for-template"}},[t._v("#")]),t._v(" Linting for "),n("code",[t._v("<template>")])]),t._v(" "),n("p",[t._v("Vetur bundles a version of "),n("a",{attrs:{href:"https://eslint.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("eslint-plugin-vue")]),n("OutboundLink")],1),t._v(" for linting "),n("code",[t._v("<template>")]),t._v(" section. Linting configuration is based on eslint-plugin-vue's "),n("a",{attrs:{href:"https://vuejs.github.io/eslint-plugin-vue/rules/#priority-a-essential-error-prevention",target:"_blank",rel:"noopener noreferrer"}},[t._v("essential rule set"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("This linting is not configurable and based on a fixed version of "),n("code",[t._v("eslint-plugin-vue")]),t._v(". If you would like to configure the template linting rules:")]),t._v(" "),n("p",[t._v("To configure linting rules:")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Turn off Vetur's template validation with "),n("code",[t._v("vetur.validation.template: false")])])]),t._v(" "),n("li",[n("p",[t._v("Make sure you have the "),n("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint plugin"),n("OutboundLink")],1),t._v(". The errors will come from ESLint plugin, not Vetur.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("yarn add -D eslint eslint-plugin-vue")]),t._v(" in your workspace root")])]),t._v(" "),n("li",[n("p",[t._v("Set ESLint rules in "),n("code",[t._v(".eslintrc")]),t._v(". An example:")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extends"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint:recommended"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:vue/recommended"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rules"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vue/html-self-closing"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"off"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),n("p",[t._v("You can also checkout "),n("a",{attrs:{href:"https://github.com/octref/veturpack",target:"_blank",rel:"noopener noreferrer"}},[t._v("Veturpack"),n("OutboundLink")],1),t._v(" to see how to setup "),n("code",[t._v("eslint-plugin-vue")]),t._v(".")]),t._v(" "),n("h4",{attrs:{id:"linting-typescript"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linting-typescript"}},[t._v("#")]),t._v(" Linting TypeScript")]),t._v(" "),n("p",[t._v("TSLint is not available yet. We do look forward to including it. See "),n("a",{attrs:{href:"https://github.com/vuejs/vetur/issues/170",target:"_blank",rel:"noopener noreferrer"}},[t._v("#170"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("Meanwhile, TS compiler errors will be shown.")])])}),[],!1,null,null,null);e.default=s.exports}}]);