<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit')->with(['status' => 'success', 'message' => 'Successfully updated profile']);;
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        if (isset($user->avatar)) {
            Storage::disk('public')->delete($user->avatar);
        }

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    public function changeProfilePicture(Request $request) {

        $data = $request->validate([
            'avatar' => 'required'
        ]);

        if ($request->hasFile('avatar')) {
            if (isset(Auth::user()->avatar)) {
                Storage::disk('public')->delete(Auth::user()->avatar);
            }
            $avatarPath = $request->file('avatar')->store('images/avatars', 'public');

            $data['avatar'] = $avatarPath;

            $updatedUser = Auth::user()->update($data);

            if($updatedUser) {
                return redirect()->back()->with(['status' => 'success', 'message' => 'Successfully updated avatar']);
            } else {
                return redirect()->back()->with(['status' => 'error', 'message' => 'Error updating avatar']);
            }
        }
    }

    public function removeProfilePicture() {
        if (isset(Auth::user()->avatar)) {
            Storage::disk('public')->delete(Auth::user()->avatar);
        }

        $updatedUser = Auth::user()->update([
            'avatar' => null
        ]);

        if($updatedUser) {
            return redirect()->back()->with(['status' => 'success', 'message' => 'Successfully removed avatar']);
        } else {
            return redirect()->back()->with(['status' => 'error', 'message' => 'Error removing avatar']);
        }
    }

}
