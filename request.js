var modifiedHeaders = $request.headers;
$prefs.setValueForKey(undefined, "f1msck");
modifiedHeaders['Cookie'] = 'undefined=true';
modifiedHeaders['Origin'] = 'https://f1tv.formula1.com/';
modifiedHeaders['Referer'] = 'https://f1tv.formula1.com/detail/1000005114/2022-saudi-arabian-grand-prix?action=play';
$done({headers : modifiedHeaders});
