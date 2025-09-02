function createTable(){
  let rows = document.getElementsByTagName('input')[0].value;
  let cols = document.getElementsByTagName('input')[1].value;

  let table = document.createElement('table');
  let bodyAddress = document.getElementsByTagName('body')[0];
  bodyAddress.appendChild(table);
  let tableAddress = document.getElementsByTagName('table')[0];
  for(var i = 0 ; i < rows ; i++){
    let row = document.createElement("tr");
    tableAddress.appendChild(row);
    for(var j = 0 ; j < cols ; j++){
      let tableData = document.createElement('td');
      tableData.innerText="col";
      row.appendChild(tableData);
    }
  }
  console.log(table);
}