
    // document.getElementById("signin-btn").addEventListener("click", function() {
    //     window.location.href = "signin.html"; // Redirect to sign-in page
    // });
   
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("signin-btn").addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default anchor click behavior if necessary
            window.location.href = "signin.html"; // Redirect to sign-in page
        });
    });
    




// ...........................................



// let index = 0;
// function changeSlide(n) {
//   const slides = document.getElementsByClassName("mySlides");
//   slides[index].style.display = "none";
//   index = (index + n + slides.length) % slides.length;
//   slides[index].style.display = "block";
// }
// setInterval(() => changeSlide(1), 5000);



document.querySelectorAll('.collapse-main').forEach((faqItem) => {
  faqItem.addEventListener('click', () => {
      // Toggle the visibility of the content
      const content = faqItem.querySelector('.collapse-content');
      const arrow = faqItem.querySelector('.arrow');

      if (content.style.display === 'block') {
          content.style.display = 'none';
          arrow.classList.remove('down'); // Point arrow right
      } else {
          content.style.display = 'block';
          arrow.classList.add('down'); // Point arrow down
      }
  });
});





function onGoogleSignIn() {
    // This function will be called on button click
    gapi.load('auth2', function() {
        gapi.auth2.init({
            client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com', // Replace with your client ID
        }).then(function(auth2) {
            auth2.signIn().then(function(googleUser) {
                // Handle the sign-in and get user profile information
                const profile = googleUser.getBasicProfile();
                console.log('ID: ' + profile.getId());
                console.log('Name: ' + profile.getName());
                console.log('Email: ' + profile.getEmail());

                // Redirect to your homepage or another page
                window.location.href = 'homepage.html'; // Redirect to homepage after sign-in
            });
        });
    });
}
