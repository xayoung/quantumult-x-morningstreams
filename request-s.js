var modifiedHeaders = $request.headers;
# var cookie = $prefs.valueForKey("f1msck");
# const isHaveCookie = typeof cookie != "undefined";
# if (isHaveCookie) {
# modifiedHeaders['cookie'] = cookie.split(';')[0];
# }
# modifiedHeaders['Origin'] = 'https://f1tv.formula1.com/';
# modifiedHeaders['Referer'] = 'https://f1tv.formula1.com/detail/1000005114/2022-saudi-arabian-grand-prix?action=play';
modifiedHeaders['cookie'] = 'persistent=Idl6UQgeRc1Hvl+zZFBKPC0Vs1MSwgq1u95v+QUSRc/RUkz2qEX3Lne5QwTo3XWQMcargguYkPvfcYo+7PUEwg==; sess=NlphrUTNaKoSmv1shgbicp5vXFuUH0udZGZcGw2/NKeU9zGSPEM7LzQ3MUvR20fxiw3jANLvE+dZBUKTlZHfVuySUnzSTQaDYbp0cIhYIjE=; userid=145379642; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22145379642%22%2C%22first_id%22%3A%22191bc0c080168d-01e7232fd42cab1-17525637-1930176-191bc0c08022972%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTkxYmMwYzA4MDE2OGQtMDFlNzIzMmZkNDJjYWIxLTE3NTI1NjM3LTE5MzAxNzYtMTkxYmMwYzA4MDIyOTcyIiwiJGlkZW50aXR5X2xvZ2luX2lkIjoiMTQ1Mzc5NjQyIn0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%22145379642%22%7D%2C%22%24device_id%22%3A%22191bc0c080168d-01e7232fd42cab1-17525637-1930176-191bc0c08022972%22%7D';
$done({headers : modifiedHeaders});
