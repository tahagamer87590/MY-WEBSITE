const starsContainer = document.getElementById('stars');
    let selectedRating = 0;

    function createStars() {
      for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.textContent = '☆';
        star.dataset.index = i;
        starsContainer.appendChild(star);
      }
    }

    function highlightStars(rating) {
      const stars = starsContainer.querySelectorAll('span');
      stars.forEach((star, index) => {
        star.textContent = index < rating ? '★' : '☆';
      });
    }

    starsContainer.addEventListener('mouseover', (e) => {
      if (e.target.tagName === 'SPAN') {
        const index = parseInt(e.target.dataset.index);
        highlightStars(index);
      }
    });

    starsContainer.addEventListener('mouseout', () => {
      highlightStars(selectedRating);
    });

    starsContainer.addEventListener('click', (e) => {
      if (e.target.tagName === 'SPAN') {
        selectedRating = parseInt(e.target.dataset.index);
        highlightStars(selectedRating);
      }
    });

    createStars();
    highlightStars(0);
  
  function switchImage(src) {
    document.getElementById("mainImage").src = src;
  }

  const qtyInput = document.getElementById('qtyInput');

  function changeQty(amount) {
    let current = parseInt(qtyInput.value, 10) || 1;
    current += amount;
    if (current < 1) current = 1;
    qtyInput.value = current;
  }

  function validateQty() {
    let val = parseInt(qtyInput.value, 10);
    if (isNaN(val) || val < 1) {
      qtyInput.value = 1;
    }
  }

  qtyInput.addEventListener('keydown', function (e) {
    if (!((e.key >= '0' && e.key <= '9') || ['Backspace', 'ArrowLeft', 'ArrowRight'].includes(e.key))) {
      e.preventDefault();
    }
  });



    const addToCartBtn = document.getElementById('addToCartBtn');
    const offcanvasCart = document.getElementById('offcanvasCart');
    const overlay = document.getElementById('overlay');
    const closeCart = document.getElementById('closeCart');

    const quantityInput = document.getElementById('quantityInput');
    const decreaseBtn = document.getElementById('decreaseBtn');
    const increaseBtn = document.getElementById('increaseBtn');
    const subtotal = document.getElementById('subtotal');
    const total = document.getElementById('total');

    const price = 399;

    addToCartBtn.addEventListener('click', () => {
      offcanvasCart.classList.add('active');
      overlay.classList.add('active');
    });

    closeCart.addEventListener('click', () => {
      offcanvasCart.classList.remove('active');
      overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
      offcanvasCart.classList.remove('active');
      overlay.classList.remove('active');
    });

    increaseBtn.addEventListener('click', () => {
      let qty = parseInt(quantityInput.value);
      quantityInput.value = qty + 1;
      updateTotals();
    });

    decreaseBtn.addEventListener('click', () => {
      let qty = parseInt(quantityInput.value);
      if (qty > 1) {
        quantityInput.value = qty - 1;
        updateTotals();
      }
    });

    quantityInput.addEventListener('change', () => {
      let qty = parseInt(quantityInput.value);
      if (isNaN(qty) || qty < 1) {
        quantityInput.value = 1;
      }
      updateTotals();
    });

    function updateTotals() {
      const qty = parseInt(quantityInput.value);
      subtotal.textContent = total.textContent = price * qty;
    }

// sign_up.js

// const signupForm = document.getElementById("signupForm");

// signupForm.addEventListener("submit", function(e) {
//   e.preventDefault();
//   let valid = true;

//   const name = document.getElementById("name");
//   const username = document.getElementById("username");
//   const email = document.getElementById("email");
//   const password = document.getElementById("password");
//   const confirmPassword = document.getElementById("confirmPassword");
//   const contact = document.getElementById("contact");

//   const usernameRegex = /^_?[A-Za-z]+(?:_?[A-Za-z0-9]{0,2})?$/;
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const pkNumberRegex = /^03[0-9]{9}$/;

//   // Validate Name
//   if (name.value.trim() === "" || !isNaN(name.value.trim())) {
//     name.classList.add("is-invalid");
//     valid = false;
//   } else {
//     name.classList.remove("is-invalid");
//     name.classList.add("is-valid");
//   }

//   // Validate Username
//   if (!usernameRegex.test(username.value.trim())) {
//     username.classList.add("is-invalid");
//     valid = false;
//   } else {
//     username.classList.remove("is-invalid");
//     username.classList.add("is-valid");
//   }

//   // Validate Email
//   if (!emailRegex.test(email.value.trim())) {
//     email.classList.add("is-invalid");
//     valid = false;
//   } else {
//     email.classList.remove("is-invalid");
//     email.classList.add("is-valid");
//   }

//   // Validate Password
//   if (password.value.trim() === "") {
//     password.classList.add("is-invalid");
//     valid = false;
//   } else {
//     password.classList.remove("is-invalid");
//     password.classList.add("is-valid");
//   }

//   // Confirm Password
//   if (confirmPassword.value !== password.value || confirmPassword.value === "") {
//     confirmPassword.classList.add("is-invalid");
//     valid = false;
//   } else {
//     confirmPassword.classList.remove("is-invalid");
//     confirmPassword.classList.add("is-valid");
//   }

//   // Contact Number
//   if (!pkNumberRegex.test(contact.value.trim())) {
//     contact.classList.add("is-invalid");
//     valid = false;
//   } else {
//     contact.classList.remove("is-invalid");
//     contact.classList.add("is-valid");
//   }

//   if (valid) {
//     const user = {
//       name: name.value.trim(),
//       username: username.value.trim(),
//       email: email.value.trim(),
//       password: password.value,
//       contact: contact.value.trim()
//     };
//     localStorage.setItem("user", JSON.stringify(user));
//     alert("User registered successfully!");
//     signupForm.reset();
//     document.querySelectorAll(".form-control").forEach(f => f.classList.remove("is-valid"));
//   }
// });



//   document.getElementById("signupForm").addEventListener("submit", function (e) {
//     e.preventDefault();
//     const name = document.getElementById("name").value.trim();
//     const username = document.getElementById("username").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const password = document.getElementById("password").value;
//     const confirmPassword = document.getElementById("confirmPassword").value;
//     const contact = document.getElementById("contact").value.trim();

//     const usernameRegex = /^_?[A-Za-z]+(_?[A-Za-z0-9]{0,2})?$/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const contactRegex = /^+92[0-9]{10}$/;

//     if (!isNaN(name)) return alert("Name must be a string.");
//     if (!usernameRegex.test(username)) return alert("Invalid username format.");
//     if (!emailRegex.test(email)) return alert("Invalid email.");
//     if (!contactRegex.test(contact)) return alert("Invalid contact number.");
//     if (password !== confirmPassword) return alert("Passwords do not match.");

//     const user = { name, username, email, password, contact };
//     localStorage.setItem("user", JSON.stringify(user));
//     alert("User registered successfully!");
//   });