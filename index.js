function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };

    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        const paragraph = document.createElement('p');
        paragraph.textContent = `New User ID: ${data.id}`;
        document.body.appendChild(paragraph);
      })
      .catch(error => {
        const paragraph = document.createElement('p');
        paragraph.textContent = `Error: ${error.message}`;
        document.body.appendChild(paragraph);
      });
  }

  // Call the function with sample data
  submitData("John Doe", "johndoe@example.com");