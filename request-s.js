var modifiedHeaders = $request.headers;
var cookie = $prefs.valueForKey("f1msck");
modifiedHeaders['Set-Cookie'] = cookie.split(';')[0];
modifiedHeaders['Origin'] = 'https://f1tv.formula1.com/';
modifiedHeaders['Referer'] = 'https://f1tv.formula1.com/detail/1000005114/2022-saudi-arabian-grand-prix?action=play';
$done({headers : modifiedHeaders});
