var selectedRow=null;

function onFormSubmit(e){
    event.preventDefault();
    var formData=readFormData();
    if(selectedRow==null){
insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
     }
     resetForm();
}

//retrive  the data
function readFormData(){
    var formData={};
    formData["productCode"]=document.getElementById("productCode").value;
    formData["productName"]=document.getElementById("productName").value;
    formData["price"]=document.getElementById("price").value;
    formData["Quantity"]=document.getElementById("Quantity").value;
 return formData;

}
//insert the data into the table

function insertNewRecord(data){
    var table=document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.lengtth);
    cell1=newRow.insertCell(0);
     cell1.innerHTML=data.productCode;
     
     cell2=newRow.insertCell(1);
     cell2.innerHTML=data.productName;

     cell3=newRow.insertCell(2);
     cell3.innerHTML=data.price;
     
     cell4=newRow.insertCell(3);
     cell4.innerHTML=data.Quantity;


     cell5=newRow.insertCell(4);
     cell5.innerHTML=`<button onclick="onEdit(this)">Edit</button>  <button onclick="onDelete(this)">Delete</button>`;
    }

    
    //edit the data
    
    function onEdit(td){
        selectedRow=td.parentElement.parentElement;
        
        document.getElementById("productCode").value =selectedRow.cells[0].innerHTML;
        document.getElementById("productName").value =selectedRow.cells[1].innerHTML;
        document.getElementById("price").value =selectedRow.cells[2].innerHTML;
        document.getElementById("Quantity").value =selectedRow.cells[3].innerHTML;
    }
        
    //update data
        function updateRecord(formData){
            selectedRow.cells[0].innerHTML =formData.productCode;
            selectedRow.cells[1].innerHTML =formData.productName;
            selectedRow.cells[2].innerHTML =formData.price;
            selectedRow.cells[3].innerHTML =formData.Quantity;
            
        }

    //delete data
    function onDelete(td){
        if(confirm('Do you want to delete this data?.'));
        {
        row= td.parentElement.parentElement;
        document.getElementById('storelist').deleteRow(row.rowIndex);
        resetForm();
        }

    }   
    
    // reset the data in  the table 
function resetForm(){
    document.getElementById("productCode").value='';
    document.getElementById("productName").value='';
    document.getElementById("price").value='';
    document.getElementById("Quantity").value='';
}