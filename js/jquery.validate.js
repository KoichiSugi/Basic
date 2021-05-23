$(function () {
  $("form[name='registration']").validate({
    rules: {
      name: {
        required: true,
        minlength: 6,
        maxlength: 50,
      },
      email: {
        required: true,
        email: true,
      },
      tel: {
        required: true,
        Number: false,
      },
      country: { required: true },
    },
    // Specify validation error messages
    messages: {
      name: {
        required: "Name is required",
        minlength: "your name must consist of at least 6 characters",
        maxlength: "your name must be less than 50 characters",
      },
      email: {
        required: "Email is required",
        email: "You must enter a valid email",
      },
      tel: {
        required: "Phone number is required",
        Number: "Value must be numbers",
      },
      country: {
        required: "Country is required",
      },
    },
    submitHandler: function (form) {
      //show data in Json format in a browser console
      let formData = new FormData(form);
      let data = {};
      //iterate key, value pairs of form data
      for (let [key, prop] of formData) {
        data[key] = prop;
      }
      //Stringify parameter (value, replacer, space)
      data = JSON.stringify(data, null, 2);
      console.log(data);

      form.submit();
    },
  });
});
