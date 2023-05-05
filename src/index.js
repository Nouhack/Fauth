"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modify = exports.delete_account = exports.is_authenticated = exports.sign_in = exports.sign_out = exports.sign_up = void 0;
// sign up function =========================
var sign_up = function (user) {
    var the_new_user = {
        username: user.username,
        email: user.email,
        password: user.password,
        logged_in: true,
        created_at: new Date(),
        image_profile: user.image_profile,
    };
    window.localStorage.setItem('user', JSON.stringify(the_new_user));
};
exports.sign_up = sign_up;
// ==========================================
// sign out function ========================
var sign_out = function () {
    var authenticated_user = JSON.parse(window.localStorage.getItem('user'));
    var kk = {
        authenticated_user: authenticated_user,
        logged_in: false,
    };
    window.localStorage.setItem('user', JSON.stringify(kk));
};
exports.sign_out = sign_out;
// ==========================================
// sign in function =========================
var sign_in = function (email, password) {
    var signed_user = JSON.parse(window.localStorage.getItem('user'));
    if (signed_user === null) {
        return {
            sign_in: false,
            message: 'you should log in first',
        };
    }
    else {
        // here verify the credentials
        if (signed_user.email === email && signed_user.password === password) {
            var pp = {
                signed_user: signed_user,
                logged_in: true,
            };
            window.localStorage.setItem('user', JSON.stringify(pp));
            return {
                sign_in: true,
                message: 'congrats you logged in',
            };
        }
        else {
            return {
                sign_in: false,
                message: 'credential error',
            };
        }
    }
};
exports.sign_in = sign_in;
// ==========================================
// is authenticated function ================
var is_authenticated = function () {
    var authenticated_user = JSON.parse(window.localStorage.getItem('user'));
    if (authenticated_user === null || !authenticated_user.logged_in) {
        return authenticated_user;
    }
    return authenticated_user;
};
exports.is_authenticated = is_authenticated;
// ==========================================
// delete account function ==================
var delete_account = function () {
    window.localStorage.removeItem('user');
};
exports.delete_account = delete_account;
// ==========================================
// modify account function ==================
//
var modify = function (newData) {
    var current_user = JSON.parse(window.localStorage.getItem('user'));
    var modified_user = {
        username: newData.username ? newData.username : current_user.username,
        email: newData.email ? newData.email : current_user.email,
        password: newData.password ? newData.password : current_user.password,
        created_at: current_user.created_at,
        logged_in: true,
        image_profile: newData.image_profile
            ? newData.image_profile
            : current_user.image_profile,
    };
    window.localStorage.setItem('user', JSON.stringify(modified_user));
};
exports.modify = modify;
