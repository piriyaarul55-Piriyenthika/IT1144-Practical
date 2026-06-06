
        document.getElementById('studentForm').addEventListener('submit', function(event) {
            event.preventDefault();

           
            let name = document.getElementById('studentName').value;
            let email = document.getElementById('studentEmail').value;

            
            alert("Success! Form submitted for: " + name);

            
            let table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
            let newRow = table.insertRow();
            
            let nameCell = newRow.insertCell(0);
            let emailCell = newRow.insertCell(1);
            
            nameCell.innerText = name;
            emailCell.innerText = email;

           
            document.getElementById('studentForm').reset();
        });