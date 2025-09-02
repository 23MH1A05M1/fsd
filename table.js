function Table(){
    let rows =document.getElementsByTagName('input')[0].value;
    let columns=document.getElementsByTagName('input')[1].value;
    let table=document.createElement("table");
    table.setAttribute('border','black')
    let bodyAddress=document.getElementsByTagName('body')[0];
    bodyAddress.appendChild(table);
    let tableAddress=document.getElementsByTagName('table')[0]
    for(let i=0;i<rows;i++)
    {
        let row=document.createElement("tr");
        tableAddress.appendChild(row);
        for(let j=0;j<columns;j++)
        {
          let tabledata=document.createElement("td");
        //   tabledata.innerText="col";
        row.appendChild(tabledata);
        tabledata.setAttribute('height','120px');
        tabledata.setAttribute('width','120px');
        tabledata.setAttribute('style','background-color:blue');
        }
    }
    console.log(table);
}