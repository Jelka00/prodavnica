<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductModel;

class ProductController extends Controller
{
    function addProduct(Request $req)
    {
        $product = new ProductModel;
        $product->name = $req->input('name');
        $product->price = $req->input('price');
        $product->description = $req->input('description');
        $product->file_path = $req->file('file')->store('products');
        $product->save();
        return $product;
    }
    function list()
    {
        return ProductModel::all();
    }
    function listBasket($ids)
    {
        $idArray = explode(',', $ids);
        return  ProductModel::whereIn('id', $idArray)->get();
    }
    function delete($id)
    {
        $result = ProductModel::where('id', $id)->delete();
        if ($result) {
            return ["result" => "Proizvod je izbrisan!"];
        } else {
            return ["result" => "Nije moguce izbrisati proizvod!"];
        }
    }

    function getProduct($id)
    {
        return ProductModel::find($id);
    }
    function updateProduct(Request $req, $id)
    {
        // Get the product to update from the database
        $product = ProductModel::find($id);

        // Update the product information
        $product->name = $req->input('name');
        $product->price = $req->input('price');
        $product->description = $req->input('description');
        //$product->file_path = $req->file('file')->store('products');
        // Save the updated product to the database
        $product->save();

        // Return a response indicating the product was successfully updated
        return response()->json(['message' => 'Proizvod uspesno azuriran!']);
    }

    function search($key)
    {
        return ProductModel::where('name', 'Like', "%$key%")->get();
    }
}
