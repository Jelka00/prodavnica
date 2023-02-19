<?php

namespace App\Http\Controllers;

use App\Models\PostModel;
use Illuminate\Http\Request;

class PostController extends Controller
{
    function addPost(Request $req)
    {
        $post = new PostModel;
        $post->title = $req->input('title');
        $post->content = $req->input('content');
        $post->save();
        return $post;
    }
}
