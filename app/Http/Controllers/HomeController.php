<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        // if (Auth::check() && Auth::user()->role === 'admin') {
        //     return redirect()->route('admin.courses.index'); 
        // }
        // if (Auth::check() && Auth::user()->role === 'teacher') {
        //     return redirect()->route('teacher.courses.index'); 
        // }
        // if (Auth::check() && Auth::user()->role === 'student') {
        //     return redirect()->route('student.courses.index');
        // }

        return view('home');
    }
}
