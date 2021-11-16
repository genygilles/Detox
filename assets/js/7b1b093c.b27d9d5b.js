"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8092],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=u(n),g=o,m=c["".concat(s,".").concat(g)]||c[g]||p[g]||a;return n?i.createElement(m,r(r({ref:t},l),{},{components:n})):i.createElement(m,r({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=c;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},260:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return c}});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),r=["components"],d={id:"debugging-in-android-studio",slug:"guide/debugging-in-android-studio",title:"Debugging in Android Studio During Detox Tests",sidebar_label:"Debugging in Android Studio"},s=void 0,u={unversionedId:"debugging-in-android-studio",id:"debugging-in-android-studio",isDocsHomePage:!1,title:"Debugging in Android Studio During Detox Tests",description:"Debugging in Android Studio During Detox Tests",source:"@site/../docs/Guide.DebuggingInAndroidStudio.md",sourceDirName:".",slug:"/guide/debugging-in-android-studio",permalink:"/Detox/docs/guide/debugging-in-android-studio",editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/Guide.DebuggingInAndroidStudio.md",tags:[],version:"current",frontMatter:{id:"debugging-in-android-studio",slug:"guide/debugging-in-android-studio",title:"Debugging in Android Studio During Detox Tests",sidebar_label:"Debugging in Android Studio"},sidebar:"tutorialSidebar",previous:{title:"Debugging in Xcode During Detox Tests",permalink:"/Detox/docs/guide/debugging-in-xcode"},next:{title:"Mocking",permalink:"/Detox/docs/guide/mocking"}},l=[{value:"Debugging in Android Studio During Detox Tests",id:"debugging-in-android-studio-during-detox-tests",children:[{value:"Setting Detox up as a compiling dependency",id:"setting-detox-up-as-a-compiling-dependency",children:[],level:3},{value:"Add &quot;manual&quot; device configurations to your .detoxrc",id:"add-manual-device-configurations-to-your-detoxrc",children:[],level:3},{value:"Run a specific test",id:"run-a-specific-test",children:[],level:3},{value:"Launching the app",id:"launching-the-app",children:[],level:3},{value:"Extra tweaks",id:"extra-tweaks",children:[],level:3}],level:2}],p={toc:l};function c(e){var t=e.components,d=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},p,d,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"debugging-in-android-studio-during-detox-tests"},"Debugging in Android Studio During Detox Tests"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This flow is not standard and serves mostly for investigating weird crashes or\nwhen contributing to Detox itself.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Don't use it unless you have a good reason."))),(0,a.kt)("h3",{id:"setting-detox-up-as-a-compiling-dependency"},"Setting Detox up as a compiling dependency"),(0,a.kt)("p",null,"Before you go anywhere further, follow the\n",(0,a.kt)("a",{parentName:"p",href:"/Detox/docs/introduction/android#setting-detox-up-as-a-compiling-dependency"},"Setting Detox up as a compiling dependency"),"\nsection from the ",(0,a.kt)("strong",{parentName:"p"},"Detox for Android")," document."),(0,a.kt)("h3",{id:"add-manual-device-configurations-to-your-detoxrc"},'Add "manual" device configurations to your .detoxrc'),(0,a.kt)("p",null,"Locate your ",(0,a.kt)("inlineCode",{parentName:"p"},".detoxrc")," config file or the corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"detox")," section in your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"\nand add a configuration similar to this one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "devices": {\n    "emulator": {\n      "type": "android.emulator",\n      "device": {\n        "avdName": "<e.g., Pixel_API_28>"\n      }\n    }\n  },\n  "apps": {\n    "android.debug": {\n      "type": "android.apk",\n      "binaryPath": "<path to your app binary built before>"\n    }\n  },\n  "configurations": {\n    "android.manual": {\n      "device": "emulator",\n      "app": "android.debug",\n      "behavior": {\n        "launchApp": "manual"\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"While the ",(0,a.kt)("inlineCode",{parentName:"p"},"behavior")," section is a ",(0,a.kt)("strong",{parentName:"p"},"mandatory")," thing to include, there are a few more optional\nparameters to disable various side effects and make life easier when debugging:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'   "behavior": {\n     "launchApp": "manual"\n   },\n+  "session": {\n+    "autoStart": true,\n+    "debugSynchronization": 0,\n+    "server": "ws://localhost:8099",\n+    "sessionId": "test"\n+  },\n+  "artifacts": false\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Using a preconfigured ",(0,a.kt)("inlineCode",{parentName:"p"},"session")," with an autostarting server removes the legwork of copying and\npasting values to the instrumentation runner launch arguments dialog every time before any launch\nfrom the IDE. Otherwise, by default when the ",(0,a.kt)("inlineCode",{parentName:"p"},"session")," object omitted, ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionId"),"\nare randomly generated for every new test session."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"debugSynchronization: 0")," override matters only if you have a global ",(0,a.kt)("inlineCode",{parentName:"li"},"session")," config\nwith ",(0,a.kt)("inlineCode",{parentName:"li"},"debugSynchronization")," set to a positive integer value. Otherwise, it is not needed. The point\nis to disable regular app polling requests during debugging, since that only can hinder the debugging."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Setting ",(0,a.kt)("inlineCode",{parentName:"p"},"artifacts: false")," override also matters only if you have a global ",(0,a.kt)("inlineCode",{parentName:"p"},"artifacts")," config.\nThe motivation is to disable irrelevant taxing activities on the device such as capturing logs\nscreenshots, videos and so on."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If your investigation addresses a specific artifact plugin glitch on the native side, then just\ndisable all the other plugins. See ",(0,a.kt)("a",{parentName:"li",href:"/Detox/docs/api/configuration"},"Detox Configuration")," document\nfor the reference.")))),(0,a.kt)("h3",{id:"run-a-specific-test"},"Run a specific test"),(0,a.kt)("p",null,"Usually, you would want to focus on a specific test suite to save time, e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"detox test -c android.manual e2e/someSuite.test.js\n")),(0,a.kt)("p",null,"If you are using Jest as a test runner, you might want to increase the test timeout via appending\n",(0,a.kt)("inlineCode",{parentName:"p"},"--testTimeout 999999")," to the command. For Mocha, that would be ",(0,a.kt)("inlineCode",{parentName:"p"},"--timeout 999999"),"."),(0,a.kt)("p",null,"Also, if there is something you want to do step by step in JS code while debugging native, append\n",(0,a.kt)("inlineCode",{parentName:"p"},"--inspect-brk")," flag. To learn more about debugging with ",(0,a.kt)("inlineCode",{parentName:"p"},"--inspect-brk"),", refer to\n",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/debugging-getting-started/"},"Debugging \u2014 Getting Started")," on the official Node.js website."),(0,a.kt)("p",null,"Afterwards, you should see your test suite starting as usual until it reaches the app launch, where\nDetox stops instead and prompts you to launch the app from the IDE:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"detox[53038] INFO:  [AndroidDriver.js] Waiting for you to manually launch your app in Android Studio.\n\nInstrumentation class: com.wix.detox.test.test/com.example.DetoxTestAppJUnitRunner\nInstrumentation arguments:\n------------------------------------\nKey            | Value\n------------------------------------\ndetoxServer    | ws://localhost:8099\ndetoxSessionId | test\n------------------------------------\n\nPress any key to continue...\n")),(0,a.kt)("p",null,"Now it is time to switch back to Android Studio.  However, if for some reason you wish to terminate the process, use Ctrl+C to exit."),(0,a.kt)("h3",{id:"launching-the-app"},"Launching the app"),(0,a.kt)("p",null,"Before you launch the app from Android Studio, make sure to put breakpoints at the points of interest."),(0,a.kt)("p",null,"You'll need to run your instrumentation runner with the said arguments, this is why you\nshould create a debug configuration of ",(0,a.kt)("inlineCode",{parentName:"p"},"Android Instrumented Tests")," type similar to the\none below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Android Debug Configuration - Android Instrumented Tests",src:n(9613).Z})),(0,a.kt)("p",null,"The moment you see the app has started on the device, go back to the Terminal where Detox is\nrunning and press any key."),(0,a.kt)("p",null,"As a result, you are expected to see a confirmation from Detox, e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"Found the app (com.wix.detox-example) with process ID = 16854. Proceeding...\n")),(0,a.kt)("p",null,"Now the entire test will run as usual until it sends an action to the app, which gets trapped\nin your breakpoint."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Breakpoint is active",src:n(7064).Z})),(0,a.kt)("p",null,"Happy debugging!"),(0,a.kt)("h3",{id:"extra-tweaks"},"Extra tweaks"),(0,a.kt)("p",null,"If you feel like you see too often this timeout error while debugging:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"Waited for the new RN-context for too long! (60 seconds)\nIf you think that's not long enough, consider applying a custom Detox runtime-config in DetoxTest.runTests().\n")),(0,a.kt)("p",null,"you can temporarily hack the timeout here:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"diff --git a/detox/android/detox/src/main/java/com/wix/detox/config/DetoxConfig.kt b/detox/android/detox/src/main/java/com/wix/detox/config/DetoxConfig.kt\nindex b33b2086..aaf8e9e2 100644\n--- a/detox/android/detox/src/main/java/com/wix/detox/config/DetoxConfig.kt\n+++ b/detox/android/detox/src/main/java/com/wix/detox/config/DetoxConfig.kt\n@@ -1,8 +1,10 @@\n package com.wix.detox.config\n\n class DetoxConfig {\n     @JvmField var idlePolicyConfig: DetoxIdlePolicyConfig = DetoxIdlePolicyConfig()\n-    @JvmField var rnContextLoadTimeoutSec = 60\n+    @JvmField var rnContextLoadTimeoutSec = Int.MAX_VALUE\n\n     fun apply() {\n         idlePolicyConfig.apply()\n")))}c.isMDXComponent=!0},7064:function(e,t,n){t.Z=n.p+"assets/images/android-happy-debugging-6d0b46e69ac6e09e311d0b6fb051f26a.png"},9613:function(e,t,n){t.Z=n.p+"assets/images/android-studio-debug-configuration-1ed2ae95a29d7c1632b0ef0df8d5f13c.png"}}]);