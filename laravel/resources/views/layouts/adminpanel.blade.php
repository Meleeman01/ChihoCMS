<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'ChioCMS') }}</title>

        <!-- Styles -->
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        <div id="app">
            <nav class="navbar has-shadow">
                <div class="container">
                    <div class="navbar-brand">
                        <p class="navbar-item">{{ config('app.name', 'Chiho-CMS') }}&nbsp;0.0.1</p>

                        <div class="navbar-burger burger" data-target="navMenu">
                            
                        </div>
                        <a class="navbar-item is-hoverable is-hidden-desktop" href="/">view site<span><i style="margin-left: .5em" class="far fa-eye"></i></span></a>
                        <a class="navbar-item is-hoverable is-hidden-desktop" href="{{ route('logout') }}"
                                           onclick="event.preventDefault();document.getElementById('logout-form').submit();">Logout
                                             <span><i style="margin-left: .5em;" class="fas fa-sign-out-alt"></i></span>
                                        </a>
                    </div>

                    <div class="navbar-menu" id="navMenu">
                        <div class="navbar-start"></div>

                        <div class="navbar-end">
                            @if (Auth::guest())
                                <a class="navbar-item " href="{{ route('login') }}">Login</a>
                                @if(!\App\User::count())
                                <a class="navbar-item " href="{{ route('register') }}">Register</a>
                                @endif
                            @else
                                <div class="navbar-item">
                                    <a class="navbar-item is-hoverable" href="/">view site<span><i style="margin-left: .5em" class="far fa-eye"></i></span></a>
                                    <a class="navbar-link is-hidden" href="#">{{ Auth::user()->name }}</a>

                                    <div class="">
                                        <a class="navbar-item is-hoverable" href="{{ route('logout') }}"
                                           onclick="event.preventDefault();document.getElementById('logout-form').submit();">Logout
                                             <span><i style="margin-left: .5em;" class="fas fa-sign-out-alt"></i></span>
                                        </a>

                                        <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                              style="display: none;">
                                            {{ csrf_field() }}
                                        </form>
                                    </div>
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
            </nav>
            @if(auth::id()==1)
            <div class="container ">
                <div class="columns is-centered adminpanel-main is-gapless">
                    <div class="column is-0">
                        <nav class="panel">
                    
                            <p class="panel-heading">
                                Dashboard
                            </p>
                            <div class="admin-appbar ">
                                
                                <p class="subtitle ui-section is-marginless">Comic Pages</p>
                                <a href="#"><i class="fas fa-plus-circle periwinkle"></i><span>Add Page</span></a><br>
                                <a href="/books"><i class="fas fa-book cream"></i><span>Book View</span></a><br>
                                <a href="#"><i class="fas fa-archive chiho-red"></i><span>Archive settings</span></a><br>
                                <p class="subtitle ui-section">Static pages</p>
                                <span>coming soon!</span>
                                <p class="subtitle ui-section">Site Settings</p>
                                <p> coming soon!</p>
                            </div>
                        </nav>
                    </div>
                    <div class="column is-9">
                        @yield('content')
                    </div>
            </div>
            @endif
        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
