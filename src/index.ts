interface user_data {
  username: 'user';
  email: string;
  password: string;
  image_profile: '';
}
// sign up function =========================
export const sign_up = (user: user_data) => {
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
// ==========================================
// sign out function ========================
export const sign_out = () => {
  var authenticated_user = JSON.parse(window.localStorage.getItem('user')!);
  var kk = {
    authenticated_user,
    logged_in: false,
  };
  window.localStorage.setItem('user', JSON.stringify(kk));
};
// ==========================================
// sign in function =========================

export const sign_in = (email: string, password: string) => {
  var signed_user = JSON.parse(window.localStorage.getItem('user')!);
  if (signed_user === null) {
    return {
      sign_in: false,
      message: 'you should log in first',
    };
  } else {
    // here verify the credentials
    if (signed_user.email === email && signed_user.password === password) {
      var pp = {
        signed_user,
        logged_in: true,
      };
      window.localStorage.setItem('user', JSON.stringify(pp));
      return {
        sign_in: true,
        message: 'congrats you logged in',
      };
    } else {
      return {
        sign_in: false,
        message: 'credential error',
      };
    }
  }
};
// ==========================================
// is authenticated function ================
export const is_authenticated = () => {
  var authenticated_user = JSON.parse(window.localStorage.getItem('user')!);
  if (authenticated_user === null || !authenticated_user.logged_in) {
    return authenticated_user;
  }
  return authenticated_user;
};
// ==========================================
// delete account function ==================
export const delete_account = () => {
  window.localStorage.removeItem('user');
};
// ==========================================
// modify account function ==================
//
export const modify = (newData: user_data) => {
  var current_user = JSON.parse(window.localStorage.getItem('user')!);
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
