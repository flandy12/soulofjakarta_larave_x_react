<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ $meta['title'] }}</title>
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="soulofjakarta" />
        <meta property="fb:app_id" content="492960195557123" />
        <meta property="og:title" content="{{ $meta['title'] }}" />
        <meta property="og:image" content="{{ $meta['og_image'] }}">
        <meta property="og:description" content="{{ $meta['meta_description'] }}" />
        <meta property="og:url" content="{{ request()->fullUrl()}}" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="709" />
        <meta property="og:image:height" content="472" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@soulofjakarta" />
        <meta name="twitter:site:id" content="@soulofjakarta" />
        <meta name="twitter:creator" content="@soulofjakarta" />
        <meta name="twitter:description" content="{{ $meta['meta_description'] }}" />
        <meta name="twitter:image" content="{{ $meta['og_image'] }}" />
        <meta name="author" content="{{ $meta['author'] }}" />
        <meta name="description" content="{{ $meta['meta_description'] }}" />
        <meta name="keywords" content="{{ $meta['meta_keywords']}} " itemprop="keywords" />
        
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q062G19HNS"></script>
    
        <script>
            window.dataLayer = window.dataLayer || [];

            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-Q062G19HNS')
        </script>

        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        {{-- @routes --}}

        @vite('resources/js/app.jsx')
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>