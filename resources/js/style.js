document.addEventListener("copy", (e) => {
    // Get the selected range
    const selectedRange = window.getSelection().getRangeAt(0);
  
    // Create a div element to hold the selected content
    const container = document.createElement("div");
    container.appendChild(selectedRange.cloneContents());
  
    // Get the text content of the selected paragraphs
    const selectedText = container.innerText;
  
    // Additional information to be added to the copied text
    const additionalInfo = `Lihat Selengkapnya di ${document.location.href}`;
  
    // Modify the text content
    const newTextContent = `${selectedText}\n\n${additionalInfo}`;
  
    // Modify the HTML content
    const newHTMLContent = `${container.innerHTML}<br><br>${additionalInfo}`;
  
    // Set the modified content to the clipboard
    e.clipboardData.setData("text/plain", newTextContent);
    e.clipboardData.setData("text/html", newHTMLContent);


    // Get all the <p> elements on the page

       // Prevent the default   copy behavior
       e.preventDefault();
  });
  