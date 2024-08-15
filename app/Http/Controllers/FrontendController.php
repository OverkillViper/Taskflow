<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontendController extends Controller
{
    public function dashboard() {

        $context = [];

        return Inertia::render('Dashboard/Dashboard', $context);
    }
}
