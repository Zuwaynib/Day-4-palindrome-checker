let textInput = document.querySelector("#text-input");
let checkButton = document.querySelector("#check-button");
let feedback = document.querySelector(".result");

checkButton.addEventListener("click", (e) => {
    e.preventDefault();
    isPalindrome();
})

function isPalindrome() {
    let text = textInput.value.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversedText = text.split("").reverse().join("");

    if(text == reversedText){
        feedback.textContent = `Yes, "${textInput.value}" is a palindrome!`;
    } else{
        feedback.textContent = `No, "${textInput.value}" is not a palindrome!`;
    }
    feedback.style.display = "block";
}