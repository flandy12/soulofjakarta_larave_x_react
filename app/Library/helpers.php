<?php

if(!function_exists('curl')) {
    function curl($endpoint, $method, $data = [], $extraHeaders = [])
    {
        $headers = [
            'headers' => [
                'Authorization' => 'Bearer '.env('API_TOKEN')
            ]
        ];
        
        if(!empty($extraHeaders)) {
            foreach($extraHeaders as $key => $header) {

                $headers['headers'][$key] = $header;
            }
        }

        foreach($data as $key => $formData) {
            $headers['form_params'][$key] = $formData;
        }

        $client = new \GuzzleHttp\Client();
        $response = $client->request($method, env('APP_ENV') !== 'production' ? env('API_URI_DEV').$endpoint : env('API_URI').$endpoint , $headers);

        $statusCode = $response->getStatusCode();
        $content = json_decode($response->getBody(), true);
        
        // dd($content);
        return [
            'statusCode' => $statusCode,
            'content' => $content,
        ];
    }
}

if(!function_exists('clean')) {
    function clean($string, $sign = '-') {
       $string = str_replace(' ', $sign, $string); // Replaces all spaces with hyphens.

       return preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
    }
}

if(!function_exists('awarenes')) {
    function awarenes($AdsRoutes, $type){
        $getIdAds = [];
        $adsRoute = $AdsRoutes;

        $filters['type'] =  $type;

        
        $filters['id'] = $getIdAds;
        
        curl('ads/awareness/store','POST',$filters);
    }
}

if(!function_exists('awarenes_article_ads')) {
    function awarenes_article_ads($AdsRoutes, $type){
        $getIdAds = [];
        $adsRoute = $AdsRoutes;

        $filters['type'] =  $type;

        foreach( $adsRoute as $key => $value) {
            $getIdAds[] = $value['id'];
        }
        $filters['id'] = $getIdAds;
        
        curl('ads/awareness/store','POST',$filters);
    }
}