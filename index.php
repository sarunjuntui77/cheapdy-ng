<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="utf-8">
    <title>Cheapdy | ถูกกว่าแค่ทัชเดียว</title>
    <base href="//localhost:7000/cheapdy-ng/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- //////////////////////////  PWA  //////////////////////////////// -->
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="msapplication-starturl" content="/">
    <meta name="theme-color" content="#F9ED22">

    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="icon" sizes="192x192" href="icon.png">
    <link rel="apple-touch-icon" href="https://cheapdy.com/contents/wp-content/gallery/icon/logo-128.png">
    <link rel="apple-touch-icon" sizes="72x72" href="https://cheapdy.com/contents/wp-content/gallery/icon/logo-72.png">
    <link rel="apple-touch-icon" sizes="128x128" href="https://cheapdy.com/contents/wp-content/gallery/icon/logo-128.png">
    <link rel="apple-touch-icon" sizes="152x152" href="https://cheapdy.com/contents/wp-content/gallery/icon/logo-152.png">

    <!-- ///////////////////////////  /PWA  /////////////////////////////// -->
    <link rel="manifest" href="/manifest.json">
    <link rel="icon" type="image/x-icon" href="https://cheapdy.com/contents/wp-content/gallery/icon/logo-72.png">
    <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.0.0-beta.3/dist/css/bootstrap-material-design.min.css" integrity="sha384-k5bjxeyx3S5yJJNRD1eKUMdgxuvfisWKku5dwHQq9Q/Lz6H8CyL89KF52ICpX4cL" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/popper.js@1.12.5/dist/umd/popper.js" integrity="sha384-KlVcf2tswD0JOTQnzU4uwqXcbAy57PvV48YUiLjqpk/MJ2wExQhg9tuozn5A1iVw" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/bootstrap-material-design@4.0.0-beta.3/dist/js/bootstrap-material-design.js" integrity="sha384-hC7RwS0Uz+TOt6rNG8GX0xYCJ2EydZt1HeElNwQqW+3udRol4XwyBfISrNDgQcGA" crossorigin="anonymous"></script>

    <script src="https://www.gstatic.com/firebasejs/4.6.0/firebase.js"></script>
    <script>
        var config = {
            apiKey: "AIzaSyDpPluf5adJo6AYAyWxj7k6G66QCOpP-HM",
            authDomain: "cheapdyapp.firebaseapp.com",
            databaseURL: "https://cheapdyapp.firebaseio.com",
            projectId: "cheapdyapp",
            storageBucket: "",
            messagingSenderId: "19204612760"
        };
        firebase.initializeApp(config);
    </script>
    
    <script>
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
                console.log('Service Worker registered');
            }).catch(function(err) {
                console.log('Service Worker registration failed: ', err);
            });
        }
    </script>
</head>
<body>
    <app-root>Hi</app-root>
    <script type="text/javascript" src="app/inline.bundle.js"></script><script type="text/javascript" src="app/polyfills.bundle.js"></script><script type="text/javascript" src="app/styles.bundle.js"></script><script type="text/javascript" src="app/vendor.bundle.js"></script><script type="text/javascript" src="app/main.bundle.js"></script></body>
    </html>
