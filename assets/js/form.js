let form = document.getElementById('userForm');
let userPass = document.getElementById('userPass');
let userName = document.getElementById('userName');



const postForm = async () => {
    try {
        const response = await fetch("https://65745c66f941bda3f2afa6af.mockapi.io/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: userName.value,
                password: userPass.value,
            }),
        });

        const result = await response.json();
        console.log("Success:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    postForm();
})