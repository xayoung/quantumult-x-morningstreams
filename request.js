var modifiedHeaders = $request.headers;
modifiedHeaders['cookie'] = 'playToken=path:%2F528dc4ef17d725ed%2Fout%2Fv1%2F7fa899dfe6734cd1927c679aa6e918b5|kid:0101|exp:1654052306|geo:US|token:PSLHl0e8Jq3m6JNzeaBiz7vgwrKcO0iA-KY28tgv8l4_';
modifiedHeaders['Origin'] = 'https://f1tv.formula1.com/';
modifiedHeaders['Referer'] = 'https://f1tv.formula1.com/detail/1000005114/2022-saudi-arabian-grand-prix?action=play';
$done({headers : modifiedHeaders});
