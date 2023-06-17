const inputEl = document.querySelector(".input")
const downloadBtnEl = document.querySelector(".downloadBtn")

downloadBtnEl.addEventListener("click", (event) => {
    event.preventDefault();
    downloadBtnEl.innerText = "Downloading..."
    fetchUrl(inputEl.value);
});

async function fetchUrl(url) {
    try {
        const data = await fetch(url)
        const blob = await data.blob()
        const fileUrl = URL.createObjectURL(blob);
        const aTagEl = document.createElement("a");
        aTagEl.href = fileUrl;
        aTagEl.download = "YourFile"

        document.body.appendChild(aTagEl);
        aTagEl.click();
        downloadBtnEl.innerText="Download";
        URL.revokeObjectURL(fileUrl);
        aTagEl.remove();
    } catch (error) {
        alert("Faild to download...!")
        downloadBtnEl.innerText = "Download";
    }
}