$(document).ready(function () {
  if ($("#signup-form").length) {
    $("#signup-form").validate({
      rules: {
        firstName: {
          required: true,
          minlength: 3,
          maxlength: 10,
        },
        lastName: {
          required: true,
          minlength: 3,
          maxlength: 10,
        },
        mobileOrEmail: {
          required: true,
          email: true,
        },
        newPassword: {
          required: true,
          minlength: 6,
        },
        confirmPassword: {
          required: true,
          equalTo: "#newPassword",
        },
        day: {
          required: true,
        },
        month: {
          required: true,
        },
        year: {
          required: true,
        },
        gender: {
          required: true,
        }
      },
      messages: {
        firstName: {
          required: "Please enter your first name",
        },
        lastName: {
          required: "Please enter your last name",
        },
        mobileOrEmail: {
          required: "Please enter an email address or mobile number",
          email: "Please enter a valid email address",
        },
        newPassword: {
          required: "Please enter a password",
        },
        confirmPassword: {
          required: "Please re-enter the password",
        },
      },
    });
  } else {
    console.error("Signup form not found");
  }
});
