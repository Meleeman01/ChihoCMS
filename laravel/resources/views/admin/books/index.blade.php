@extends('layouts.adminpanel')

@section('content')
    
	<div id="book" class="panel is-centered">
        <div class="subtitle panel-heading bookbar">
            <div class="select control">
	               <select width="100%" v-on:change="getTitle()">
	                   @if($books->count())
	                   @foreach($books as $book)
		                  <option value="{{$book}}" >{{$book->title}}</option>
	                   @endforeach
	                   @else
	                   <option value="">No books :(</option>
	                   @endif
	               </select>
	           </div>
            <div class="buttons is-right has-addons">
                <button class="button is-primary " v-on:click="showBookModal()"><i class="fas fa-plus-square icon"></i></button>
                @if($books->count())
                <button class="button is-success" v-on:click='showEditModal()'><i class="fas fa-edit icon"></i></button>
                <button class="button is-danger" v-on:click="showBookDelete()"><i class="fas fa-times-circle icon"></i></button>
                @else
                <button class="button is-success" disabled="true"><i class="fas fa-edit icon"></i></button>
                <button class="button is-danger" disabled="true"><i class="fas fa-times-circle icon"></i></button>
                @endif
            </div>
        </div>
        <div>
            @include('admin/books/partials/create')
            @include('admin/books/partials/edit') 
            @include('admin/books/partials/delete')
        </div>
    </div>
          
@endsection