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
        $post->file_path = $req->file('file')->store('products');
        $post->save();
        return $post;
    }
    function listPost()
    {
        return PostModel::all();
    }
    function delete($id)
    {
        $result = PostModel::where('id', $id)->delete();
        if ($result) {
            return ["result" => "Objava je izbrisana!"];
        } else {
            return ["result" => "Nije moguce izbrisati objavu!"];
        }
    }
    function updatePost(Request $req, $id)
    {
        // Get the product to update from the database
        $post = PostModel::find($id);

        // Update the product information
        $post->title = $req->input('title');
        $post->content = $req->input('content');
        //$product->file_path = $req->file('file')->store('products');
        // Save the updated product to the database
        $post->save();

        // Return a response indicating the product was successfully updated
        return response()->json(['message' => 'Objava uspesno azurirana!']);
    }
    function getPost($id)
    {
        return PostModel::find($id);
    }
}
