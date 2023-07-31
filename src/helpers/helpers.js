function copyToClipboard(value) {
    const tempInput = document.createElement("input")
    tempInput.value = value

    document.body.appendChild(tempInput)
    
    navigator.clipboard.writeText(value)
    .then(
        () => {
            console.log("coppied")
        },
        () => {
            console.log("Not coppied.")
        }
    )


}

export {copyToClipboard}