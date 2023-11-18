<?php

namespace App\Http\Controllers\Admin\PhotoGalley;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PhotoGallery\AddCategoryGalleryRequest;
use App\Http\Requests\Admin\PhotoGallery\CreateImageRequest;
use App\Http\Requests\Admin\PhotoGallery\UpdateCategoryRequest;
use App\Http\Requests\Admin\PhotoGallery\UpdateImageRequest;
use App\Models\Admin\PhotoGallery\GalleryCategory;
use App\Models\Admin\PhotoGallery\GalleryImage;
use App\QueryBuilder\Admin\Gallery\GalleryCategoryBuilder;
use App\QueryBuilder\Admin\Gallery\GalleryImageBuilder;
use Http\Client\Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PhotoGalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('admin.photogallery.index',);
    }

    public function setOrderCategory(Request $request)
    {
        foreach ($request->input('order') as $key=>$id)
        {
            $category = GalleryCategory::query()->find($id);
            $category->order = $key;
            $category->save();
        }
    }
    public function setOrderImage(Request $request)
    {
        foreach ($request->input('order') as $key=>$id)
        {
            $category = GalleryImage::query()->find($id);
            $category->order = $key;
            $category->save();
        }
    }

    public function getCategory(Request $request)
    {
        $category = GalleryCategory::query()->find($request->id);
        if($category)
            return ['status'=>true,'title'=>$category->title,'description'=>$category->description,'image_url'=>$category->image_url,'id'=>$category->id];
        else
            return ['status'=>false,'message'=>'Категория не найдена'];
    }
    public function getImage(Request $request)
    {
        $image = GalleryImage::query()->find($request->id);
        if($image)
            return ['status'=>true,'title'=>$image->title,'description'=>$image->description,'image_url'=>$image->image_url,'id'=>$image->id];
        else
            return ['status'=>false,'message'=>'Категория не найдена'];
    }

    /**
     * Show the form for creating a new resource.
     */
    public function updateImage(UpdateImageRequest $request,string $id)
    {
        $category = GalleryImage::query()->find($id);
        $category = $category->fill($request->validated());

        if ($category->save()) {
            return \back()->with('success', __('messages.admin.gallery.image.update.success'));
        }

        return \back()->with('error', __('messages.admin.gallery.image.update.fail'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AddCategoryGalleryRequest $request)
    {
        $category = GalleryCategory::create($request->validated());
        if($category)
        {
            return redirect()->route('admin.photo_gallery.index')->with('success',__('messages.admin.gallery.category.store.success'));
        }
        return \back()->with('error', __('messages.admin.gallery.category.store.fail'));
    }

    public function storeImage(CreateImageRequest $request,string $id)
    {
        $images = $request->input('imagesData');
        $status = true;
        foreach ($images as $image_url)
        {

            $image = GalleryImage::create(['title'=>$request->input('title'),'description'=>$request->input('description'),'image_url'=>$image_url]);
            if (!$image) {
                $status = false;
            } else{
                $image->list()->attach($id);
            }
        }
        if ($status) {
            return \back()->with('success', __('messages.admin.gallery.image.store.success'));
        }

        return \back()->with('error', __('messages.admin.gallery.image.store.fail'));

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return view('admin.photogallery.show',['categoryId'=>$id]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, int $id)
    {
        $category = GalleryCategory::query()->find($id);
        $category = $category->fill($request->validated());

        if ($category->save()) {
            return \back()->with('success', __('messages.admin.gallery.category.update.success'));
        }

        return \back()->with('error', __('messages.admin.gallery.category.update.fail'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(GalleryCategoryBuilder $categoryBuilder,string $id)
    {
        try {
            $categoryBuilder->delete($id);
            return \back()->with('success', __('messages.admin.gallery.category.destroy.success'));
        }catch (Exception $exception)
        {
            return \back()->with('success', __('messages.admin.gallery.category.destroy.fail').$exception);
        }
    }
    public function destroyImage(GalleryImageBuilder $imageBuilder,string $id)
    {
        try {
            $imageBuilder->delete($id);
            return \back()->with('success', __('messages.admin.gallery.image.destroy.success'));
        }catch (Exception $exception)
        {
            return \back()->with('success', __('messages.admin.gallery.image.destroy.fail').$exception);
        }
    }
}
