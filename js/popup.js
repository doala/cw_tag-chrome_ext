$(function () {

    chrome.tabs.getSelected(null, function(tab) {

        const data = '[info][title]' + tab.title + '[/title]' + tab.url + '[/info]';
        
        $("#info").val(data);

    });

    var clipboard = new Clipboard('.btn');
});

