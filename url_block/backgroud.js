chrome.webRequest.onBeforeRequest.addListener(
    function(details) {

        fetch('path/to/textfile.txt')
            .then(response => response.text())
            .then(data => {
                // テキストファイルから読み込んだ値を処理するためのコードをここに書く
                console.log(data); // テキストファイルの内容をコンソールに表示する例
            })
            .catch(error => {
                console.error('テキストファイルの読み込みエラー:', error);
            });

        // リダイレクトのターゲットURLを指定します
        let redirectUrl = "https://example.com/new-location";

        return { redirectUrl: redirectUrl };
    },
    {
        urls: ["<all_urls>"],
        types: ["main_frame"]
    },
    ["blocking"]
);