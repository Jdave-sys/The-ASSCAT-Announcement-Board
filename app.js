document.getElementById("postBtn").addEventListener("click", function() {
    const input = document.getElementById("messageInput");
    const output = document.getElementById("outputBox");
    output.innerText = input.value || "No message entered.";
    input.value = "";
});
