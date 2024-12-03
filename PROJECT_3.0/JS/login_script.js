const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');


let users = [];


const signUpForm = document.querySelector('.sign-up form');
signUpForm.addEventListener('submit', (e) => {
    // e stands for event
    e.preventDefault();
    
    const userData = {
        name: signUpForm.querySelector('input[type="text"]').value,
        email: signUpForm.querySelector('input[type="email"]').value,
        password: signUpForm.querySelector('input[type="password"]').value
    };
    
    users.push(userData);
    console.log(userData);
    alert('Registration successful! Please login.');
    container.classList.remove('active');
    
    
    signUpForm.reset();
});


const signInForm = document.querySelector('.sign-in form');
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = signInForm.querySelector('input[type="email"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;
    
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        
        const popup = document.createElement('div');
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            color: #512da8;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
            z-index: 1000;
            text-align: center;
        `;
        
        popup.innerHTML = `
            <h2>Welcome back, ${user.name}!</h2>
            <p>You have successfully logged in.</p>
            <button onclick="redirectToHome()" style="
                background: #512da8;
                color: white;
                border: none;
                padding: 8px 20px;
                border-radius: 5px;
                margin-top: 10px;
                cursor: pointer;
            ">Close</button>
        `;
        
        document.body.appendChild(popup);
        // signInForm.reset();
    } else {
        alert('Invalid email or password!');
    }
});


function redirectToHome() {
    
    document.querySelector('div').remove();
    
    window.location.href = 'index.html';
}


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});