<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ArtikelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function home()
    {
        // Filters => its functioning for send data parameters in API 
        $Filters = ['sort' => ['publish_date', 'desc']];

        // Call API 
        $DataAPI = curl('main', 'POST', $Filters);
        
        $Headlines = isset($DataAPI['content']['results']['headlines']) ? $DataAPI['content']['results']['headlines'] : [];
        
        // This API All Article
        $Articles = isset($DataAPI['content']['results']['articles']) ? $DataAPI['content']['results']['articles'] : [];

        // Call Article Ads 
        $Article_Ads = isset($DataAPI['content']['results']['article_ads']) ? $DataAPI['content']['results']['article_ads'] : [];

        // This API Hot Event & Lifestyle Article 
        $Hot_Lifestyle_Articles = isset($DataAPI['content']['results']['hot_lifestyle_articles']) ? $DataAPI['content']['results']['hot_lifestyle_articles'] : [];
        $Hot_Event_Articles = isset($DataAPI['content']['results']['hot_event_articles']) ? $DataAPI['content']['results']['hot_event_articles'] : [];
        
        // Categories Navbar its functiong to call category in navbar
        $Categories_Navbar = isset($DataAPI['content']['results']['categories']) ? $DataAPI['content']['results']['categories']: [];

        // This API Popular & Recommendation Article 
        $Popular_Articles = isset( $DataAPI['content']['results']['popular_articles'] ) ?  $DataAPI['content']['results']['popular_articles'] : [];
        $Recommendation_Articles = isset($DataAPI['content']['results']['recommendation_articles']) ? $DataAPI['content']['results']['recommendation_articles'] : [];

        /**
         * Call Api advertisement 
         */
      
        $Background_Banner_Ads = isset($DataAPI['content']['results']['ads']['background_banner']) ? $DataAPI['content']['results']['ads']['background_banner'] : [];
        $Article_Row_Ads = isset($DataAPI['content']['results']['ads']['article_row']) ? $DataAPI['content']['results']['ads']['article_row'] : [];
        $Premium_Ads = isset($DataAPI['content']['results']['ads']['premium_banner']) ? $DataAPI['content']['results']['ads']['premium_banner'] : [];
        $Pop_Up_Image = isset($DataAPI['content']['results']['ads']['pop_up_image']) ? $DataAPI['content']['results']['ads']['pop_up_image'] : [];
        $PopUp_Video = isset($DataAPI['content']['results']['ads']['pop_up_video']) ? $DataAPI['content']['results']['ads']['pop_up_video'] : [];
        $Regular_Ads = isset($DataAPI['content']['results']['ads']['regular_banner']) ? $DataAPI['content']['results']['ads']['regular_banner'] : [];
        $Headline_Ads = isset($DataAPI['content']['results']['ads']['headline']) ? $DataAPI['content']['results']['ads']['headline'] : [];

        //Call Function API Ads Awarenes
        awarenes($DataAPI['content']['results']['ads'],'ads');
        //Call Function API Article Ads Awarenes
        awarenes_article_ads($DataAPI['content']['results']['article_ads'],'article_ads');

        $meta=['title' => 'SoulofJakartaid - Update Event and Lifestyle Information',
        'meta_keywords' => 'Soulofjakarta,soul,jakarta,artikel,artikel rekomendasi,artikel promote,hot artikel,artikel terpopuler,event,concert,exhibition,job fair,fashion,lifestyle,tourism,destination,hotel,hangout,career,coulinary,food,resto&cafe',
        'meta_description' => 'Indeks artikel terkini dan terbaru hari ini untuk generasi milenials, gen X, Y dan Z tentang event dan lifestyle khusus di Indonesia dan Internasional',
        'author' => 'Soulofjakarta', 
        'og_image' => asset('images/logo_souja.jpg')];
        
        return Inertia('home', [
            'Headlines' => $Headlines,
            'Articles' => $Articles,
            'Article_Ads' => $Article_Ads,
            'Categories_Navbar'=> $Categories_Navbar,
            'Hot_Lifestyle_Articles' => $Hot_Lifestyle_Articles,
            'Hot_Event_Articles' => $Hot_Event_Articles,
            'Popular_Articles' => $Popular_Articles,
            'Recommendation_Articles' => $Recommendation_Articles,
            'Background_Banner_Ads' => $Background_Banner_Ads,
            'Article_Row_Ads' => $Article_Row_Ads,
            'Premium_Ads'=> $Premium_Ads,
            'Pop_Up_Image' => $Pop_Up_Image,
            'PopUp_Video'=> $PopUp_Video,
            'Regular_Ads'=> $Regular_Ads, 
            'Headline_Ads' => $Headline_Ads,
        ])->withViewData(['meta' => $meta]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, $category,$id, $sub_category = null, $search = null)
    {   
        // Filters => its functioning for send data parameters in API 
        $Filters = ['sort' => ['publish_date', 'desc'], 'ip_address' => $request->ip()];
        $id_data = explode('sj-',$id);
        
        if(!isset($id_data[1])) {
            abort(404);
        }

        // This Call API Value Detail Article
        $DataAPI = curl('article/view/'. $id_data[1], 'POST', $Filters);

        // This Value Detail Article
        $Detail_Article = $DataAPI['content']['results']['article'];

        $meta_description = $Detail_Article['meta_description'];
        $meta_keywords = $Detail_Article['meta_keywords'];
        
        // This Value Category And SubCategory
        $sub_category = $Detail_Article['subCategories'];
        $Category_Title = $category;

        // This variable functions to call the tags in the article details
        $Tag = $Detail_Article['tags'];

        // Categories Navbar its functiong to call category in navbar
        $Categories_Navbar = isset($DataAPI['content']['results']['categories']) ? $DataAPI['content']['results']['categories']: [];

        // This API Hot Event & Lifestyle Article 
        $Hot_Lifestyle = isset($DataAPI['content']['results']['hot_lifestyle_articles']) ? $DataAPI['content']['results']['hot_lifestyle_articles'] : [];
        $Hot_Event = isset($DataAPI['content']['results']['hot_event_articles']) ? $DataAPI['content']['results']['hot_event_articles'] : [];

        // This API Popular, Recommendation & Related Article 
        $Popular_Articles = isset( $DataAPI['content']['results']['popular_articles'] ) ?  $DataAPI['content']['results']['popular_articles'] : [];
        $Recommendation_Articles = isset($DataAPI['content']['results']['recommendation_articles']) ? $DataAPI['content']['results']['recommendation_articles'] : [];
        $Related_Article = isset($DataAPI['content']['results']['related']) ? $DataAPI['content']['results']['related'] : [];
    
        /**
         * Call Api advertisement 
         */
      
        $Background_Banner = isset($DataAPI['content']['results']['ads']['background_banner']) ? $DataAPI['content']['results']['ads']['background_banner'] : [];
        $Article_Row_Ads = isset($DataAPI['content']['results']['ads']['article_row']) ? $DataAPI['content']['results']['ads']['article_row'] : [];
        $Premium_Banner = isset($DataAPI['content']['results']['ads']['premium_banner']) ? $DataAPI['content']['results']['ads']['premium_banner'] : [];
        $PopUp_Video = isset($DataAPI['content']['results']['ads']['pop_up_video']) ? $DataAPI['content']['results']['ads']['pop_up_video'] : [];
        $Headline_Ads = isset($DataAPI['content']['results']['ads']['headline']) ? $DataAPI['content']['results']['ads']['headline'] : [];

        //Call Function API Ads Awarenes
        awarenes($DataAPI['content']['results']['ads'],'ads');

        $meta=['title' => $Detail_Article['title'],
        'meta_keywords' => $meta_keywords,
        'meta_description' => $meta_description,
        'author' => $Detail_Article['author'],
        'og_image' => asset('images/logo_souja.jpg')];

        return Inertia('category/index', [
            'Detail_Article' => $Detail_Article,
            'Categories_Navbar' => $Categories_Navbar,
            'sub_category' => $sub_category,
            'Tag' => $Tag,

            'Hot_Lifestyle'=> $Hot_Lifestyle,
            'Hot_Event' => $Hot_Event,

            'Popular_Articles' => $Popular_Articles,
            'Recommendation_Articles' => $Recommendation_Articles,
            'Related_Article'=> $Related_Article,

            'Background_Banner' => $Background_Banner,
            'Article_Row_Ads' => $Article_Row_Ads,
            'Premium_Banner' => $Premium_Banner,
            'PopUp_Video' => $PopUp_Video,
            'Headline_Ads' => $Headline_Ads,

            'og_image' => $Detail_Article['main_image'],
            'search' => $search,

            'Category_Title' => $Category_Title
        ])->withViewData(['meta' => $meta]);
    }

    public function index( Request $request, $search = null, $category = null, $sub_category = null)
    {   
        // Filters => its functioning for send data parameters in API 
        $Filters = ['sort' => ['publish_date', 'desc'] ];

        // this raquest 
        $page = $request->page ? $request->page : 1;
        $selectFilters = [];
        
        if($category) {
            $selectFilters["category"]["name"] = $category;
        }

        if($sub_category) {
            $sub_category2 = str_replace('+',',', $sub_category);
        
            $selectFilters["subCategories"]["name"] = str_replace('-',' ',$sub_category2) === 'fashion health & beauty' ? 'fashion, health & beauty' : ucwords(str_replace('-',' ',$sub_category2)) ;
        }

        $sub_category_first = $sub_category ? ' - '. ucwords(str_replace('-',' ',$sub_category)) . " |"  : "";

        if($category && $sub_category){
            $category_first = ucfirst($category) ;
        }elseif($category) {
            $category_first = ucfirst($category) . " |" ;
        }
        else{
            "";
        }

        if($search && strtolower($search) !== 'semua') {
            $search = str_replace("-", " ", $search);
            $Filters['tbody'] = ["title", 'wording'];
            $Filters['disableSearch'] = [];
            $Filters['search'] = $search;
        }
        
        if(count($selectFilters) > 0) {
            $Filters['filters'] = $selectFilters;
        } 

        if($page) {
            $Filters['offset'] = $page;
        }

        // Call API Index Article
        $DataAPI = curl('article/index', 'POST', $Filters);
        
        // Categories Navbar its functiong to call category in navbar
        $Categories_Navbar = isset($DataAPI['content']['results']['categories']) ? $DataAPI['content']['results']['categories']: [];

        
        $total_page = $DataAPI['content']['results']['articles']['original']['results']['totalPage'];
        $pages_ = $DataAPI['content']['results']['articles']['original']['results']['pages'];
        
        $data_index = isset($DataAPI['content']['results']['articles']['original']['results']['data']) ? $DataAPI['content']['results']['articles']['original']['results']['data'] : [];

        // This API Hot Event & Lifestyle Article 
        $Hot_Lifestyle = isset($DataAPI['content']['results']['hot_lifestyle_articles']) ? $DataAPI['content']['results']['hot_lifestyle_articles'] : [];
        $Hot_Event = isset($DataAPI['content']['results']['hot_event_articles']) ? $DataAPI['content']['results']['hot_event_articles'] : [];

        // This API Popular & Recommendation Article 
        $Popular_Articles = isset( $DataAPI['content']['results']['popular_articles'] ) ?  $DataAPI['content']['results']['popular_articles'] : [];
        $Recommendation_Articles = isset($DataAPI['content']['results']['recommendation_articles']) ? $DataAPI['content']['results']['recommendation_articles'] : [];

        /**
         * Call Api advertisement 
         */
    
        $Background_Banner = isset($DataAPI['content']['results']['ads']['background_banner']) ? $DataAPI['content']['results']['ads']['background_banner'] : [];
        $Premium_Banner = isset($DataAPI['content']['results']['ads']['premium_banner']) ? $DataAPI['content']['results']['ads']['premium_banner'] : [];
        $PopUp_Video = isset($DataAPI['content']['results']['ads']['pop_up_video']) ? $DataAPI['content']['results']['ads']['pop_up_video'] : [];
        $Headline_Ads = isset($DataAPI['content']['results']['ads']['headline']) ? $DataAPI['content']['results']['ads']['headline'] : [];
        $Pop_Up_Image = isset($DataAPI['content']['results']['ads']['pop_up_image']) ? $DataAPI['content']['results']['ads']['pop_up_image'] : [];
    
            
        $meta_page = $page ? $page : 1;

        if(isset($category_first) || $category) {
                $meta_title = $category_first . $sub_category_first . ' Soulofjakarta.id '.'Update '. ucfirst($category) . ' Information';
        } else {
                $meta_title = "SoulofJakartaid - Update Event and Lifestyle Information";
        }

        $page_num = $page ? $page : 1;

        if($search == "semua" || $search == null) {
            $meta_title;
        } else{
            $meta_search = str_replace('-', ' ', $search);
            $meta_title .= ' - '.$meta_search;
        }

        $searchUrl = $search ? '/'.$search : '';

        if($category) {
            $searchUrl .= "/".$category;
        }

        if($sub_category) {
            $searchUrl .= "/".$sub_category;
        }
  
        //Call Function API Ads Awarenes
        awarenes($DataAPI['content']['results']['ads'],'ads');

        $meta = ['title' => $meta_title,
        'meta_keywords' => 'Indeks artikel terkini dan terbaru hari ini untuk generasi milenials, gen X, Y dan Z tentang event dan lifestyle khusus di Indonesia dan Internasional',
        'meta_description' => 'Artikel terkini dan terbaru hari ini dari event dan lifestyle khusus di Indonesia  dan Internasional',
        'author' => 'Soulofjakarta',
        'og_image' => asset('images/logo_souja.jpg')];
        
        return Inertia('artikel/index', [
            'data_index' => $data_index,

            'Categories_Navbar' => $Categories_Navbar,

            'Hot_Lifestyle' => $Hot_Lifestyle,
            'Hot_Event' => $Hot_Event,

            'Popular_Articles' => $Popular_Articles,
            'Recommendation_Articles' => $Recommendation_Articles,

            'Background_Banner' => $Background_Banner,
            'Premium_Banner' => $Premium_Banner,
            'Headline_Ads' => $Headline_Ads,
            'Pop_Up_Image' => $Pop_Up_Image,
            'PopUp_Video' => $PopUp_Video,
            
            'search' => $search == 'semua' ? '' : $search,
            'total_page' => $total_page,
            'previous' => $page > 1 ? $page - 1 : 1,
            'next' => $page_num < $total_page ? $page_num + 1 : $total_page,
            'page' => $page,
            'pages_' => $pages_,
            'meta_title' => $meta_title,
            'meta_description'=> 'Artikel terkini dan terbaru hari ini dari event dan lifestyle khusus di Indonesia  dan Internasional',
            'meta_keywords'=> 'Indeks artikel terkini dan terbaru hari ini untuk generasi milenials, gen X, Y dan Z tentang event dan lifestyle khusus di Indonesia dan Internasional',
 
            'author' => 'Soulofjakarta',
            'searchUrl' => $searchUrl,
            'category' => $category,
            'sub_category' => $sub_category,
            'category_active' => true,
           
        ])->withViewData(['meta' => $meta]);
    }

    public function popularIndex(Request $request, $search = null, $category = null, $sub_category = null) {
        // Filters => its functioning for send data parameters in API 
        $Filters = ['sort' => ['publish_date', 'desc']];
        $page = $request->page;

        // this variable functionng to save data parameter 
        $selectFilters = [];

        if($category) {
            $selectFilters["category_id"] = str_replace("ct-", "", $category);
        }

        if($sub_category) {
            $selectFilters["subCategories"]["sub_category_id"] = str_replace("sb-", "", $sub_category);
        }

        if($search) {
            $search = str_replace("-", " ", $search);
            $Filters['tbody'] = ["title", 'wording'];
            $Filters['disableSearch'] = [];
            $Filters['search'] = $search;
        }

        if(count($selectFilters) > 0) {
            $Filters['filters'] = $selectFilters;
        } 

        if($page) {
            $Filters['offset'] = $page;
        }
        
        // Call API 
        $DataAPI = curl('article/popular/index', 'POST', $Filters);
        
        // Categories Navbar its functiong to call category in navbar
        $Categories_Navbar = isset($DataAPI['content']['results']['categories']) ? $DataAPI['content']['results']['categories']: [];

        $Popular_Article_Index = $DataAPI['content']['results']['popular_articles'];

       
        $Recommendation_Article = $DataAPI ['content']['results']['recommendation_articles'];

        // This API Hot Event & Lifestyle Article 
        $Hot_Lifestyle = $DataAPI['content']['results']['hot_lifestyle_articles'];
        $Hot_Event = $DataAPI['content']['results']['hot_event_articles'];
        
        $meta_page = $page ? $page : 1;
        $meta_title = 'Indeks populer event dan lifestyle terbaru - '.$meta_page;

        if($search) {
            $meta_search = str_replace('-', ' ', $search);
            $meta_title = 'Indeks populer '.$meta_search.' - '.$meta_page;
        }

        $searchUrl = $search ? '/'.$search : 'semua';
        if($category) {
            $searchUrl .= "/".$category;
        }

        if($sub_category) {
            $searchUrl .= "/".$sub_category;
        }

        /**
         * Call Api advertisement 
         */
    
        $Background_Banner = isset($DataAPI['content']['results']['ads']['background_banner']) ? $DataAPI['content']['results']['ads']['background_banner'] : [];
        $Article_Row_Ads = isset($DataAPI['content']['results']['ads']['article_row']) ? $DataAPI['content']['results']['ads']['article_row'] : [];
        $Premium_Banner = isset($DataAPI['content']['results']['ads']['premium_banner']) ? $DataAPI['content']['results']['ads']['premium_banner'] : [];

        $PopUp_Video = isset($DataAPI['content']['results']['ads']['pop_up_video']) ? $DataAPI['content']['results']['ads']['pop_up_video'] : [];
        $Headline_Ads = isset($DataAPI['content']['results']['ads']['headline']) ? $DataAPI['content']['results']['ads']['headline'] : [];

        //Call Function API Ads Awarenes
        awarenes($DataAPI['content']['results']['ads'],'ads');

        $meta=['title' => $meta_title,
        'meta_keywords' => 'Soulofjakarta,soul,jakarta, event,concert,exhibition,job fair,fashion,lifestyle,tourism,destination,hotel,hangout,career,coulinary,food,resto&cafe',
        'meta_description' => 'Artikel rekomendasi Soulofjakarta tentang event dan lifestyle di Indonesia dan Internasional',
        'author' => 'Soulofjakarta',
        'og_image' => asset('images/logo_souja.jpg')];
        
        return Inertia('artikel/populer/page', [
            'Popular_Article_Index' => $Popular_Article_Index,
            'Recommendation_Article' => $Recommendation_Article,
            
            'Hot_Lifestyle' => $Hot_Lifestyle,
            'Hot_Event' => $Hot_Event,    

            'Background_Banner' => $Background_Banner,
            'Article_Row_Ads' => $Article_Row_Ads,
            'Premium_Banner' => $Premium_Banner,
            'PopUp_Video' => $PopUp_Video,
            'Headline_Ads' => $Headline_Ads,

            'Categories_Navbar' => $Categories_Navbar,

            'search' => $search,
            'search' => $search == 'semua' ? '' : $search,
            'author' => 'Soulofjakarta',
            'searchUrl' => $searchUrl,
            'category' => $category,
            'sub_category' => $sub_category,
        ])->withViewData(['meta' => $meta]);;
    }

    public function rekomendasiIndex(Request $request, $search = null) {
         // Filters => its functioning for send data parameters in API  
         $Filters = ['sort' => ['publish_date', 'desc']];
         $page = $request->page;
 
         if($search) {
             $search = str_replace("-", " ", $search);
             $Filters['tbody'] = ["title", 'wording'];
             $Filters['disableSearch'] = [];
             $Filters['search'] = $search;
         }
 
         if($page) {
             $Filters['offset'] = $page;
         }
        
         $DataAPI = curl('article/recommendation/index', 'POST', $Filters);
 
         // Categories Navbar its functiong to call category in navbar
         $Categories_Navbar = isset($DataAPI['content']['results']['categories']) ? $DataAPI['content']['results']['categories']: [];
 
         $Articles = $DataAPI['content']['results']['recommendation_articles'];
 
         $Popular_Articles = $DataAPI['content']['results']['popular_articles'];
         $Recommendation_Articles = $DataAPI ['content']['results']['recommendation_articles'];
 
         // This API Hot Event & Lifestyle Article 
         $Hot_Lifestyle = $DataAPI['content']['results']['hot_lifestyle_articles'];
         $Hot_Event = $DataAPI['content']['results']['hot_event_articles'];
 
         /**
          * Call Api advertisement 
          */
         $Background_Banner = isset($DataAPI['content']['results']['ads']['background_banner']) ? $DataAPI['content']['results']['ads']['background_banner'] : [];
         $Article_Row_Ads = isset($DataAPI['content']['results']['ads']['article_row']) ? $DataAPI['content']['results']['ads']['article_row'] : [];
         $Premium_Banner = isset($DataAPI['content']['results']['ads']['premium_banner']) ? $DataAPI['content']['results']['ads']['premium_banner'] : [];
         $PopUp_Video = isset($DataAPI['content']['results']['ads']['pop_up_video']) ? $DataAPI['content']['results']['ads']['pop_up_video'] : [];
         $Headline_Ads = isset($DataAPI['content']['results']['ads']['headline']) ? $DataAPI['content']['results']['ads']['headline'] : [];
 
         $meta_page = $page ? $page : 1;
         $meta_title = 'Indeks rekomendasi event dan lifestyle terbaru - '.$meta_page;
 
         if($search) {
             $meta_search = str_replace('-', ' ', $search);
             $meta_title = 'Indeks rekomendasi '.$meta_search.' - '.$meta_page;
         }
 
         //Call Function API Ads Awarenes
         awarenes($DataAPI['content']['results']['ads'],'ads');

         $meta=['title' => $meta_title,
         'meta_keywords' => 'Soulofjakarta,soul,jakarta, event,concert,exhibition,job fair,fashion,lifestyle,tourism,destination,hotel,hangout,career,coulinary,food,resto&cafe',
         'meta_description' => 'Artikel rekomendasi Soulofjakarta tentang event dan lifestyle di Indonesia dan Internasional',
         'author' => 'Soulofjakarta',
         'og_image' => asset('images/logo_souja.jpg')];

        return Inertia('artikel/rekomendasi/page', [
            'Articles' => $Articles,

            'Categories_Navbar' => $Categories_Navbar,

            'Popular_Articles' => $Popular_Articles,
            'Recommendation_Articles' => $Recommendation_Articles,

            'Hot_Lifestyle' => $Hot_Lifestyle,
            'Hot_Event' => $Hot_Event, 

            'Background_Banner' => $Background_Banner,
            'Article_Row_Ads' => $Article_Row_Ads,
            'Premium_Banner' => $Premium_Banner,
            'PopUp_Video' => $PopUp_Video,
            'Headline_Ads' => $Headline_Ads,
            
            'search' => $search,
        ])->withViewData(['meta' => $meta]);
    }

    public function medpar() {   
        // Filters => its functioning for send data parameters in API 
        $Filters = ['sort' => ['publish_date', 'desc']];

        // Call API 
        $DataAPI = curl('media-partner', 'GET', $Filters);
  
        // Categories Navbar its functiong to call category in navbar
        $Categories_Navbar = isset($DataAPI['content']['results']['categories']) ? $DataAPI['content']['results']['categories']: [];

        /**
         * Call Api advertisement 
         */
        $Premium_Banner = isset($DataAPI['content']['results']['premiums']) ? $DataAPI['content']['results']['premiums'] : [];
        $Regular_Banner = isset($DataAPI['content']['results']['regulars']) ? $DataAPI['content']['results']['regulars'] : [];

        $meta=['title' => 'Soulofjakarta - Media Partner',
        'meta_keywords' => 'soulofjakarta media partner',
        'meta_description' => 'Menjadi media parner di SoulofJakarta banyak benefit',
        'og_image' => asset('images/logo_souja.jpg'),
        'author' => 'Soulofjakarta'];

        return Inertia('media-parners',
        [     
            'Regular_Banner' => $Regular_Banner,
            'Premium_Banner'=> $Premium_Banner,
            'Categories_Navbar' => $Categories_Navbar,
        ])->withViewData(['meta' => $meta]);
    }

    public function giveAway(Request $request, $search = null) {
        $Filters = ['sort' => ['publish_date', 'desc']];

        $page = $request->page ? $request->page : 1;

        // Filters => its functioning for send data parameters in API 
        $Filters['tbody'] = ["title", 'wording'];
        $Filters['disableSearch'] = [];
        $Filters['filters'] = ['category_id' => 3];

        if($search && strtolower($search) !== 'semua') {
            $search = str_replace("-", " ", $search);
            $Filters['tbody'] = ["title", 'wording'];
            $Filters['disableSearch'] = [];
            $Filters['search'] = $search;
        }

        if($page) {
            $Filters['offset'] = $page;
        }

        // Call API 
        $DataAPI = curl('article/index', 'POST', $Filters);

        // This Velue detail article
        $data_index = $DataAPI['content']['results']['articles']['original']['results']['data'];

        // This API Popular & Recommendation Article 
        $Popular_Articles = isset( $DataAPI['content']['results']['popular_articles'] ) ?  $DataAPI['content']['results']['popular_articles'] : [];
        $Recommendation_Articles = isset($DataAPI['content']['results']['recommendation_articles']) ? $DataAPI['content']['results']['recommendation_articles'] : [];

        // This API Hot Event & Lifestyle Article 
        $Hot_Lifestyle = isset($DataAPI['content']['results']['hot_lifestyle_articles']) ? $DataAPI['content']['results']['hot_lifestyle_articles'] : [];
        $Hot_Event = isset($DataAPI['content']['results']['hot_event_articles']) ? $DataAPI['content']['results']['hot_event_articles'] : [];
        
        // Categories Navbar its functiong to call category in navbar
        $Categories_Navbar = isset($DataAPI['content']['results']['categories']) ? $DataAPI['content']['results']['categories']: [];
       
        $total_page = $DataAPI['content']['results']['articles']['original']['results']['totalPage'];
        $pages_ = $DataAPI['content']['results']['articles']['original']['results']['pages'];

        $meta_page = $page ? $page : 1;
        $meta_title = 'Give Away - SoulofJakartaid';
    
        $page_num = $page ? $page : 1;

        $searchUrl = $search ? '/'.$search : '/semua';

        /**
         * Call Api advertisement 
         */
      
         $Background_Banner_Ads = isset($DataAPI['content']['results']['ads']['background_banner']) ? $DataAPI['content']['results']['ads']['background_banner'] : [];
         $Article_Row_Ads = isset($DataAPI['content']['results']['ads']['article_row']) ? $DataAPI['content']['results']['ads']['article_row'] : [];
         $Premium_Banner_Ads = isset($DataAPI['content']['results']['ads']['premium_banner']) ? $DataAPI['content']['results']['ads']['premium_banner'] : [];
         $Pop_Up_Image = isset($DataAPI['content']['results']['ads']['pop_up_image']) ? $DataAPI['content']['results']['ads']['pop_up_image'] : [];
         $PopUp_Video = isset($DataAPI['content']['results']['ads']['pop_up_video']) ? $DataAPI['content']['results']['ads']['pop_up_video'] : [];
         $Regular_Banner = isset($DataAPI['content']['results']['ads']['regular_banner']) ? $DataAPI['content']['results']['ads']['regular_banner'] : [];
         $Headline_Ads = isset($DataAPI['content']['results']['ads']['headline']) ? $DataAPI['content']['results']['ads']['headline'] : [];

        //Call Function API Ads Awarenes
        awarenes($DataAPI['content']['results']['ads'],'ads');

        $meta=['title' => $meta_title,
        'meta_keywords' => 'soulofjakarta give away',
        'meta_description' => 'Give Away terkini dari event dan lifestyle khusus di Indonesia',
        'og_image' => asset('images/logo_souja.jpg'),
        'author' => 'Soulofjakarta'];

        return Inertia('give-away',  [
            'give_away' => true,
            'data_index' => $data_index,
            
            'total_page' => $total_page,
            'previous' => $page > 1 ? $page - 1 : 1,
            'next' => $page_num < $total_page ? $page_num + 1 : $total_page,
            'page' => $page,
            'pages_' => $pages_,
            'search' => $search == 'semua' ? '' : $search,
            'searchUrl' => $searchUrl,
            
            'Categories_Navbar' => $Categories_Navbar,

            'Popular_Articles' => $Popular_Articles,
            'Recommendation_Articles' => $Recommendation_Articles,

            'Hot_Lifestyle' => $Hot_Lifestyle,
            'Hot_Event' => $Hot_Event,

            'Headline_Ads' => $Headline_Ads,
            'PopUp_Video' => $PopUp_Video,
            'Premium_Banner_Ads' => $Premium_Banner_Ads,
            'Background_Banner_Ads' => $Background_Banner_Ads
        ])->withViewData(['meta' =>$meta]);
    }

    public function advertise() {
         // Filters => its functioning for send data parameters in API 
         $Filter = ['sort' => ['publish_date', 'desc']];
         // Call API
         $DataAPI = curl('main', 'POST', $Filter);
         
         $Categories_Navbar = isset($DataAPI['content']['results']['categories']) ? $DataAPI['content']['results']['categories']: [];

         $meta=['title' => 'SoulofJakartaid - Update Event and Lifestyle Information',
        'meta_keywords' => 'Soulofjakarta,soul,jakarta,artikel,artikel rekomendasi,artikel promote,hot artikel,artikel terpopuler,event,concert,exhibition,job fair,fashion,lifestyle,tourism,destination,hotel,hangout,career,coulinary,food,resto&cafe',
        'meta_description' => 'Indeks artikel terkini dan terbaru hari ini untuk generasi milenials, gen X, Y dan Z tentang event dan lifestyle khusus di Indonesia dan Internasional',
        'og_image' => asset('images/logo_souja.jpg'),
        'author' => 'Soulofjakarta'];
        
         return Inertia('placing-ads', [
            'Categories_Navbar' => $Categories_Navbar,
        ])->withViewData(['meta' => $meta]);
 
    }

    public function termsConditions() {
        // Filters => its functioning for send data parameters in API 
        $Filter = ['sort' => ['publish_date', 'desc']];
        // Call API
        $DataAPI = curl('main', 'POST', $Filter);
        
        $Categories_Navbar = isset($DataAPI['content']['results']['categories']) ? $DataAPI['content']['results']['categories']: [];

        $meta=['title' => 'SoulofJakartaid - Update Event and Lifestyle Information',
        'meta_keywords' => 'Soulofjakarta,soul,jakarta,artikel,artikel rekomendasi,artikel promote,hot artikel,artikel terpopuler,event,concert,exhibition,job fair,fashion,lifestyle,tourism,destination,hotel,hangout,career,coulinary,food,resto&cafe',
        'meta_description' => 'Indeks artikel terkini dan terbaru hari ini untuk generasi milenials, gen X, Y dan Z tentang event dan lifestyle khusus di Indonesia dan Internasional',
        'og_image' => asset('images/logo_souja.jpg'),
        'author' => 'Soulofjakarta'];

        return Inertia('terms-condition', [
           'Categories_Navbar' => $Categories_Navbar,
       ])->withViewData(['meta' =>$meta]);

    }

    public function privacyPolicy() {
    // Filters => its functioning for send data parameters in API 
    $Filter = ['sort' => ['publish_date', 'desc']];
    // Call API
    $DataAPI = curl('main', 'POST', $Filter);
    
    $Categories_Navbar = isset($DataAPI['content']['results']['categories']) ? $DataAPI['content']['results']['categories']: [];

    $meta=['title' => 'SoulofJakartaid - Update Event and Lifestyle Information',
    'meta_keywords' => 'Soulofjakarta,soul,jakarta,artikel,artikel rekomendasi,artikel promote,hot artikel,artikel terpopuler,event,concert,exhibition,job fair,fashion,lifestyle,tourism,destination,hotel,hangout,career,coulinary,food,resto&cafe',
    'meta_description' => 'Indeks artikel terkini dan terbaru hari ini untuk generasi milenials, gen X, Y dan Z tentang event dan lifestyle khusus di Indonesia dan Internasional',
    'og_image' => asset('images/logo_souja.jpg'),
    'author' => 'Soulofjakarta'];


    return Inertia('privacy-policy', [
       'Categories_Navbar' => $Categories_Navbar,
         ])->withViewData(['meta' => $meta]);
    }
   
}
