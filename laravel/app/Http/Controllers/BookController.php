<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

//models
use App\Books;
use App\User;

use Illuminate\Support\Facades\Auth;
class BookController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function show() {
    	$books = Books::get();
    	return view('admin.books.index', compact('books'));
    }

    public function create( User $user) {
    	return view('admin.books.create', compact('user'));
    }

    public function store(User $user,Request $req) {

            
            $input=$req->all();
            //assign sort order
            $books = Books::get()->all();
            $count = 0;
            foreach ($books as $book) {
                $count++;
            }
            $input['data']['sort_order'] = $count + 1;

            Books::create([
                //figure out user
                'user_id'=>Auth::id(),
                'title'=> $input['data']['title'],
                'description'=> $input['data']['description'],
                'sort_order' => $input['data']['sort_order'],
                'update_frequency' => $input['data']['update_frequency'],
                'is_complete' => $input['data']['isComplete']
            ]);
            
        
        
        return ;
    }
    public function edit(Request $req) {
    	$input=$req->all();
        $book = Books::where('id','=',$input['data']['id']);

        $book->update([
            'user_id'=>Auth::id(),
            'title'=> $input['data']['title'],
            'description'=> $input['data']['description'],
            'sort_order' => $input['data']['sort_order'],
            'update_frequency' => $input['data']['update_frequency'],
            'is_complete' => $input['data']['isComplete']
        ]);

        return ;
    }
    public function delete(Request $req) {
        $input = $req->all();
    	$book=Books::find($input['id']);
        $book->delete();
        return ;
    }
}
