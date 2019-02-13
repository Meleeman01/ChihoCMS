USE MIT LICENSE FOR CMS.

sell Api Key to software. keep it open source. use build scripts to initilize on linux servers. probably apache, and nginx.

create support for CMS purchasable themes, and plugins.

//basic functionality goals
create a CMS optimized for images, create it simple for the end user, and make it lightweight and fast and extendable. must manage webcomic pages, and their associated data.
create default themes. use 2 CSS files one for layout and one for colors and optional repositioning if needed.

//TODO

AUTH:
    -Register one user for the application, edit the default authentification;
    -only allow 1 user per application.
USER_GROUPS:
    -Admin
    -subuser //such as colorist or inker, will be created by admin.


+-----------------------+
|SCHEMA:                |
|                       |
+-----------------------+
    Books 
        id
        -Title 
        -description
        -sort_order
        -date_created
        -date_modified
        -is_finished
        -publish_frequency
    Chapters
        id
        -book_id
        -title
        -description
        -sort_order
        -is-displayed
    Pages
        id
        -book_id
        -chapter_id
        -images_comic_id
        -sort_order
        -title
        -author_post_title
        -author_post
        -author_img
        -transcript
        -rating
        -date_created
        -date_modified
        -date_published
        -is-paywalled

    Static pages
        id
        -title
        -description
        -layout (3 different layout styles for simple pages)
        -date_created
        -date_modified

    Static Content
        id
        -images_static_id
        -static_page_id
        -sort_order
        -title
        -content (displays code editor how the content will be organized)
    Images_Static
        id
        -url
        -description
    Images-Comic
        id
        -url
        -description
    Images-Global
        id
        -url
        -description
    Site_Info
        id
        -Info_type_id
        -title
        -description
        -lable
        -value
        -data_type
        -images_global_id
        -widgets_id
    Site_Info_type
        id
        -title
    Site_Navigation
        id
        -title
        -url //the url of the page.
        -sort_order
        -in_navigation
        -rel_id // the id assigned to each page depending on type of page it is. corresponds with page_id 
        -rel_type //defines whether the navigation is to a certain type of page static, comic or archive.
        -path_is_editable
    Theme_List
        id
        -title
        -description
        -directory
        -version
        -author
        -url
        -options
        -date-created
        -date-modified
        -is-editable
    Theme_tone
        id
        -Theme_List_id
        -is_user_made
        -options
        -date_created
        -date_modified
    Third_party_Services
        id
        -title
        -label
        -url
        -description
        -user_info
        -info_title
        -is-active
    Users
        laravel default;
    Widgets
        id
        -title
        -description
        -lable
        -value
        -is_active
    Plugins
        id
        -title
        -description
        -is-installed
        -is-active


+-----------------------+
|RELATIONSHIPS:         |
|                       |
+-----------------------+
relationship between Chapter and pages
relationship between books and pages
relationship between static_pages_content and static pages
relationship between Images_Static and static_pages_content
relationship between Images_Comic and pages
relationship between Images_Global and Site_Info
relationship between Info_type and Site_Info
relationship between Site_Info and Widgets
relationship between Theme and Theme_tone


+-----------------------+
|PAGES:                 |
|                       |
+-----------------------+
admin panel

    -ComicPages
        -create comic page
            -mass-upload?
        -list comic Pages
        -archive-settings
        -update
        -delete
        -schedulepage


    -StaticPages
        -create static page
        -list static pages
        -update
        -delete
    -SiteSettings
        -Site-navigation
        -third-Party-services
            -social-media
            -discus
            -sharing
        -Themes
            -create-theme
            -list-theme
                -assign-tone
                    -list-tone
                    -create-tone
                    -edit-tone
                    -delete-tone
            -update-theme
            -delete-theme
        -Users
            -list
            -create-user// perhaps later.
            -edit-user
            -delete-user
        -SiteWideSettings
            -list-options
                -paywallsettings
                    -payment-processor
                    -crypto-wallet-address
                    -setpaywallpages
                    -setamount
                    -setuntil
                -sitename
                -Artist's name
                -Copyright year(s)
                -Copyright type
                -Meta description
                -favicon
                -Timezone
                -sethomepage
            -list-global-images

    -Widgets
        -ratings system (this will be default)
        -jump-to-page. (this will be default)
        -header-image-carousel
    -Plugins
        -news-blog 
        -comments-system
        -anaylitics?
        -forum?
        -store?
    -Edit files directly //for users who know what they're doing ;)
Homepage
    user-selected homepage.
Archive
    automatically generated, with a choice of a few layouts, and thumbnails.
latestComicPage
    either display by default or include as a link.
Comicpage
    same as latest except it can hold any comic page. most of the general layout will be here.
Donationpage/paywall
    displaypage for paywall information, the conditions, and the specified amount to view lastpage, continue
the series, or view a special page. it will display the minimum amount with 0 being any donation, with 2 options to use paypal or a specified crypto currency.

+-----------------------+
|DEFINED EVENTS:        |
|                       |
+-----------------------+

File uploaded
User login
User Registered
User Changed
Comic page Changed
Static page Change
Theme Changed
Theme-tone Changed
Site-Navigation Changed
Third-Party-Services Changed

Plugin Changed
Widget Changed

Archive Layout Changed
Files Changed
Site Wide Settings Changed
Paywall settings changed?

+-----------------------+
|EVENT TRIGGERS:        |
|                       |
+-----------------------+
When User is Registered
When User is Logged in
When File is uploaded or deleted
When User is created, updated, or deleted
When Comic Page is created, updated or deleted
When Static Page is created updated or deleted
When Theme is created, updated, or deleted
When a Theme-tone is created, updated or deleted
whenever paywall settings are updated
whenever Site wide settings are updated
When the site navigation is changed
Whenever availible third-party services are updated
Whenever a plugin is activated, deactivated or installed
whenever a widget is activated, deactivated or installed

+-----------------------+
|EVENT HANDLERS:        |
|                       |
+-----------------------+

display simple status messages for the admin panel pretty much.

+-----------------------+
|CONTROLLERS:           |
|                       |
+-----------------------+

Comicpage controller
Staticpage controller
Theme Controller
FileEdit Controller
PayWall Controller
ThirdPartyServices Controller
SiteWide Controller
UserController
WidgetsController
PluginsController


+-----------------------+
|MISC:                  |
|                       |
+-----------------------+

Prevent non-authed users from viewing admin panel
implement Caching of images specifically teh previous and next images after the current image.
include a code editor with access to the file structure of the website, find one already made and use it.
Use bulma for admin interface
Use wetfish-basic for quick prototyping, eventually switch to svelte, or vue.
build with webpack
Convert files to .webp for faster loading, either serverside or client.
create factories to help build some of the CMS functionality, this would be the supported third party services, Global Site settings, payment processors and possibly multiple crypto currencies.
Create 3 basic themes. LineWebtoon style, Tapastic style, and My Own webcomic theme.
use stripe and a crypto wallet address for users to send their money easily. possibly generate a scannable qr code.

only allow one user to register this CMS. the user becomes the super user, and in the future allow the superuser to create users with limited permissions.

footer





Other NOTES:


Create Default Themes
    Create 3 basic themes. LineWebtoon style, Tapastic style, and My Own webcomic theme using sass.




