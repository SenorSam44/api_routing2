<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {

        $validate_data= $request->validate([
            'name'=>'required|string',
            'email'=> 'required|email|unique:user',
            'password' => 'required|confirmed|min:6'
        ]);

        $user = User::create([
            'name'=> $validate_data['name'],
            'email'=> $validate_data['email'],
            'password'=> bcrypt($validate_data['password'])
        ]);
//        error_log($request);

        $tokenResult = $user->createToken('access_token');

        $token=([
            'access_token' => $tokenResult->accessToken,
            'token_type'   => 'Bearer',
            'user'         => $user,
            'expires_at'   => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString()
        ]);

        return response()->json($token);

    }

    public function login(Request $request){
        $credentials = $request->only('email', 'password');

        if (auth()->attempt($credentials)){
            $user=auth()->user();
            $accessToken=$user->createToken('access_token');

            return response()->json([
                'token_type'=>'Bearer',
                'access_token'=>$accessToken->accessToken,
                'user'=>$user,
                'expires_at' => Carbon::parse($accessToken->token->expires_at)->toDateTimeString(),
            ]);
        }

        return response()->json(['error'=> 'Please try again'], 401);

    }
}
