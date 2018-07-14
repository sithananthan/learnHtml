    

function validate() {
    var name = document.getElementById("name");
    var address = document.getElementById("address");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var verifyForm = false;
    
    if (name.value.length < 2) {  
        name.focus();
        name.style.border = " solid 3px red";
        return verifyForm;
    }
    
    if (address.value.length < 10) {  
        address.focus();
        address.style.border = " solid 3px red";
        return verifyForm;
    }
    
    if (phone.value < 66666666 || phone.value > 9999999999) {  
        phone.focus();
        phone.style.border = " solid 3px red";
        return verifyForm;
    }
    
    if (email.value.length < 2) {  
        email.focus();
        email.style.border = " solid 3px red";
        return verifyForm;
    }
        var body = document.getElementById("bodyTag");
        var createTable = document.createElement("table");
        body.appendChild(createTable);
    
        //Row-1
        var createTableRow = document.createElement("tr");
        createTable.appendChild(createTableRow);
    
        var createTableColumn = document.createElement("th");
        createTableRow.appendChild(createTableColumn);
        var columnText = document.createTextNode("Name");
    
        var createTableData = document.createElement("td");
        createTableRow.appendChild(createTableData);
        var columnData = document.createTextNode(name.value);
        
        createTableColumn.appendChild(columnText);
        createTableData.appendChild(columnData);
    
        
        //Row-2
        var createTableRow = document.createElement("tr");
        createTable.appendChild(createTableRow);
    
        var createTableColumn = document.createElement("th");
        createTableRow.appendChild(createTableColumn);
        var columnText = document.createTextNode("Address");
    
        var createTableData = document.createElement("td");
        createTableRow.appendChild(createTableData);
        var columnData = document.createTextNode(address.value);
        
        createTableColumn.appendChild(columnText);
        createTableData.appendChild(columnData);
    
        //Row-3
        var createTableRow = document.createElement("tr");
        createTable.appendChild(createTableRow);
    
        var createTableColumn = document.createElement("th");
        createTableRow.appendChild(createTableColumn);
        var columnText = document.createTextNode("phone");
    
        var createTableData = document.createElement("td");
        createTableRow.appendChild(createTableData);
        var columnData = document.createTextNode(phone.value);
        
        createTableColumn.appendChild(columnText);
        createTableData.appendChild(columnData);
        
        //Row-4
        var createTableRow = document.createElement("tr");
        createTable.appendChild(createTableRow);
    
        var createTableColumn = document.createElement("th");
        createTableRow.appendChild(createTableColumn);
        var columnText = document.createTextNode("Email");
    
        var createTableData = document.createElement("td");
        createTableRow.appendChild(createTableData);
        var columnData = document.createTextNode(email.value);
        
        createTableColumn.appendChild(columnText);
        createTableData.appendChild(columnData);
        
        
       
}

/*function getData(){
        //alert("test");
        var body = document.getElementById("bodyTag");
        var createTable = document.createElement("table");
        var createTableRow = document.createElement("tr");
        var createTableColumn = document.createElement("th");
        var createTableData = document.createElement("td");
    
        
        
        body.appendChild(createTable);
        createTable.appendChild(createTableRow);
        createTableRow.appendChild(createTableColumn);
        createTableRow.appendChild(createTableData);
        
        var columnText = document.createTextNode("Name");
        var columnData = document.createTextNode(name.value);
        
        createTableColumn.appendChild(columnText);
        createTableData.appendChild(columnData);
    
    
    }*/