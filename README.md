# quantumult-x-morningstreams

Here's scripts for morningstreams.

1. Required Quantumult-X APP.
2. Tap bottom right button, into Settings.
3. Find the 'ExternalProxy', Add some VPN/proxy, shadowssocks work for me.
4. Find the 'Rewrite', hit the switch, Tap 'Add' button, add 6 records.
5. Find the 'Mitm', hit the switch, Tap 'Add Hostname' button, enter `*.formula1.com`. Tap 'Generate CA' button. Tap 'Instanll CA' button, trust CA....balabala.
6. Back to Main, select your proxy, hit the top right switch, Enjoy!

>Type: `script-request-header`
>
>URL to Match(RegEx): `https://f1tv.formula1.com/`
>
>Script: `https://raw.githubusercontent.com/xayoung/quantumult-x-morningstreams/main/request.js`
 
>Type: `script-response-header`
>
>URL to Match(RegEx): `https://f1tv.formula1.com/`
>
>Script: `https://raw.githubusercontent.com/xayoung/quantumult-x-morningstreams/main/response.js`

>Type: `script-request-header`
>
>URL to Match(RegEx): `https://ott-video-fer-cf.formula1.com/`
>
>Script: `https://raw.githubusercontent.com/xayoung/quantumult-x-morningstreams/main/request-s.js`
 
>Type: `script-response-header`
>
>URL to Match(RegEx): `https://ott-video-fer-cf.formula1.com/`
>
>Script: `https://raw.githubusercontent.com/xayoung/quantumult-x-morningstreams/main/response-s.js`

>Type: `script-request-header`
>
>URL to Match(RegEx): `https://ott-video-cf.formula1.com/`
>
>Script: `https://raw.githubusercontent.com/xayoung/quantumult-x-morningstreams/main/request-s.js`
 
>Type: `script-response-header`
>
>URL to Match(RegEx): `https://ott-video-cf.formula1.com/`
>
>Script: `https://raw.githubusercontent.com/xayoung/quantumult-x-morningstreams/main/response-s.js`
 
![Main](https://github.com/xayoung/quantumult-x-morningstreams/blob/main/imgs/main.PNG)
![Settings](https://github.com/xayoung/quantumult-x-morningstreams/blob/main/imgs/settings.PNG)
![Rewirtes](https://github.com/xayoung/quantumult-x-morningstreams/blob/main/imgs/rewirtes_00.PNG)
![Rewirtes](https://github.com/xayoung/quantumult-x-morningstreams/blob/main/imgs/rewirtes_01.PNG)
