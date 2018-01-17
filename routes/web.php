<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


//STATIC PAGES
Route::get('/', function () {
    return view('pages/home');
})->name('home');

Route::get('/apply', function () {
    return view('pages/apply');
});

Route::get('/fourofour', function () {
    return view('pages/fourofour');
})->name('fourofour');

Route::get('/legal', function () {
    return view('pages/legal');
});

Route::get('/maintenance', function () {
    return view('maintenance');
});

Route::get('/project', function () {
    return view('pages.project');
})->name('project');

//Route::get('/project', ['uses' => 'UsersController@project']);

/*
 * User Routes
 */
Route::match(['get', 'post'],'/login', [
    'as'=>'login',
    'uses' => 'UserController@loginAction'
]);

Route::match(['get', 'post'],'/register', [
    'as'=>'register',
    'uses' => 'UserController@registerAction'
]);

Route::post('/logout', [
    'as' => 'logout',
    'uses' => 'UserController@logoutAction'
]);


Route::match(['get', 'post'],'/contact', [
    'as'=>'contact',
    'uses' => 'ApiController@contactAction'
]);


Route::match(['get', 'post'],'/apply', [
    'as'=>'pages.apply',
    'uses' => 'UserController@applyAction'
]);

Route::get('/profile/{username}', [
    'uses' => 'UserController@viewProfileAction'
])->name('profile');

Route::match(['get', 'post'],'/profile/edit/{id}', [
    'as'=>'pages.edit_profile',
    'uses' => 'UserController@profileEdit'
]);


Route::get('/edit', function () {
    return view('pages/editor/editor_dashboard');
});

Route::match(['get', 'post'],'/change_password/{id}', [
    'as' => 'pages.change_password',
    'uses' => 'UsersController@changePassword'
]);

//Route::get('/graph', ['uses' => 'GraphController@graphAction']);
Route::get('/skills', ['uses' => 'GraphController@graphAction'])->name('graph');

Route::get('/export', ['uses' => 'DumpController@generateDumpAction']);

Route::get('/users', ['uses' => 'UsersController@index']);
Route::get('/editors_requests', ['uses' => 'EditorController@index']);
Route::get('/skill_requests', ['uses' => 'SkillController@index']);


Route::get('goTo/{slug}', [
    'as' => 'goToSlug',
    'uses' => 'GraphController@goToAction'
]);

Route::get('/home', 'HomeController@index')->name('home');

/*
 * Panel Routes
 */

Route::get('/panel/getPanel/{uuid}', [
    'uses' => 'PanelContoller@getPanelAction'
]);

Route::get('/api/getNodeChildren/{uuid}', [
//    'as'=>'pages.edit_profile',
    'uses' => 'ApiController@getNodeChildrenAction'
]);

Route::match(['get', 'post'], '/add-Skill', [
    'as' => 'createSkill',
    'uses' => 'ApiController@addSkillAction'
]);

Route::post('rename-Skill', [
    'as' => 'renameSkill',
    'uses' => 'ApiController@renameSkillAction'
]);

Route::get('/api/skillHistory', [
    'as' => 'skillHistory',
    'uses' => 'ApiController@skillHistoryAction'
]);

Route::post('/api/skillSettings', [
    'as' => 'skillSettings',
    'uses' => 'ApiController@skillSettingsAction'
]);

Route::post('/api/moveSkill', [
    'as' => 'moveSkill',
    'uses' => 'ApiController@moveSkillAction'
]);

Route::post('/api/deleteSkill', [
    'as' => 'deleteSkill',
    'uses' => 'ApiController@deleteSkillAction'
]);

Route::post('/api/discussSkill', [
    'as' => 'discussSkill',
    'uses' => 'ApiController@discussSkillAction'
]);

Route::get('/api/translateSkill', [
    'as' => 'translateSkill',
    'uses' => 'ApiController@discussSkillAction'
]);

//JS generation
Route::get('/js-translations', [
    'as' => 'jsTranslations',
    'uses' => 'ApiController@getJSTranslationsAction'
]);


/*
 * LARAVEL Specific Routes
 */

//Auth::routes();
