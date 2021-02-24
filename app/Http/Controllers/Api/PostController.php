<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function createPost(Request $request){

    }

    public function getPost(){
        $post= Post::all();

        return response()->json($post);
    }
}
