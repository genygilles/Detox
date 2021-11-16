describe("Open URLs",(()=>{afterAll((async()=>{await device.launchApp({newInstance:!0,url:void 0,launchArgs:void 0})}));[{platform:"",url:"detoxtesturlscheme://such-string",launchArgs:void 0},{platform:"android",url:"detoxtesturlscheme.singleinstance://such-string",launchArgs:{detoxAndroidSingleInstanceActivity:!0}}].forEach((e=>{const{platform:n,url:a,launchArgs:t}=e,i=n?`:${n}: `:"";it(`${i}device.launchApp() with a URL and a fresh app should launch app and trigger handling open url handling in app`,(async()=>{await device.launchApp({newInstance:!0,url:a,launchArgs:t}),await expect(element(by.text(a))).toBeVisible()})),it(`${i}device.openURL() should trigger open url handling in app when app is in foreground`,(async()=>{await device.launchApp({newInstance:!0,launchArgs:t}),await expect(element(by.text(a))).not.toBeVisible(),await device.openURL({url:a}),await expect(element(by.text(a))).toBeVisible()})),it(`${i}device.launchApp() with a URL should trigger url handling when app is in background`,(async()=>{await device.launchApp({newInstance:!0,launchArgs:t}),await expect(element(by.text(a))).not.toBeVisible(),await device.sendToHome(),await device.launchApp({newInstance:!1,url:a}),await expect(element(by.text(a))).toBeVisible()}))}))}));