document.addEventListener("DOMContentLoaded", function(){
    const form= document.getElementById("form1");
    const submitButton= document.getElementById("submitbtn");

    submitButton.addEventListener("click", function(){
        const name= form.elements['name'].value;
        const phone= form.elements['phone'].value;
        const date= form.elements['date'].value;
        const seats= form.elements['seats'].value;
        
        
        const formData = `name: ${name}\nphone: ${phone}\ndate:${date}\nseats: ${seats}`;


        const blob = new Blob([formData], { type: "text/plain" });
  
      // Create a URL for the Blob
      const url = URL.createObjectURL(blob);
  
      // Create a link to trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.download = "form_data.txt";
      link.textContent = "Download Form Data";
  
      // Append the link to the document
      document.body.appendChild(link);
  
      // Simulate a click on the link to trigger the download
      link.click();
  
      // Clean up by revoking the URL
      URL.revokeObjectURL(url);
    });
});