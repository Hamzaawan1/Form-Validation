$(function () {
    $(".vform").submit(handleFormSubmit);
  });
  
  function handleFormSubmit(e) {
    if ($(".name").val() <= 5) {
      $(".name").css({ border: "2px solid red" });
      $(".pname").text("Name Must be at least 5 characters long");
    } else if ($(".email").val() == 0) {
      $(".email").css({ border: "2px solid red" });
      $(".pemail").text("Please enter valid email address!");
    } else if ($("#password").val() < 8) {
      $("#ppassword").css({ border: "2px solid red" });
      $("#ppasswordconfirm").text("Password Must be at least 8 characters long");
    } else if ($("#password").val() != $("#confirmpassword").val()) {
      $("#password").css({ border: "2px solid red" });
      $("#ppasswordconfirm").text("Password not Matched");
    } else {
      $("#psubmit").text("Form Submitted Sucessfully");
    }
    e.preventDefault();
  }