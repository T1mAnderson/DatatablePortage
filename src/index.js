//Here we're importing items we'll need. You can add other imports here.
const $ = require("jquery");
const dt = require("datatables.net")(window, $);
const buttons = require("datatables.net-buttons")(window, $);
const columnVis = require("datatables.net-buttons/js/buttons.colVis.js")(
  window,
  $
);
const fileExport = require("datatables.net-buttons/js/buttons.html5.js")(
  window,
  $
);
const print = require("datatables.net-buttons/js/buttons.print.js")(window, $);
const fixed = require("datatables.net-fixedheader-dt")();

// import $ from "jquery";
// import dt from "datatables.net";
// import "datatables.net-dt";
// import "datatables.net-buttons";
// import "datatables.net-buttons-dt";
// import "datatables.net-fixedheader-dt";
//Imports End Here

//Table
let table;

//Window loadData Function to be called from FM script - Thanks to Jeremy Brown
window.loadData = function (json) {
  const obj = JSON.parse(json);
  // console.log(obj);
  const dataSet = obj.data;
  // console.log(dataSet);

  //Fail Safe
  if (table) table.destroy();

  //Initialize JQuery for DataTable
  table = $("#example").DataTable({
    //DataTable Options
    dom: '<"top"if>rtB<"clear">',
    buttons: ["colvis", "copy"],
    fixedHeader: true,
    data: dataSet,
    columns: [
      //This a is filemaker section - Data should match your data Set
      { data: "fieldData.name_first" },
      { data: "fieldData.name_last" },
      { data: "fieldData.Company" },
      //This Controls the Edit button in a row
      {
        data: null,
        defaultContent: '<button id="edit">Edit</button>',
        targets: -1,
        searchable: false,
        orderable: false,
      },
    ],
    //Default sort order by First Name Asc
    order: [[1, "asc"]],
    paging: false,
  });

  //Open Card window for Editing Record in FileMaker when edit button is clicked
  $("#example tbody").on("click", "#edit", function () {
    let tr = $(this).closest("tr");
    let data = table.row(tr).data();
    if ("Test" !== "") {
      fmscript(JSON.stringify(data));
    }
  });

  // Load the callback function.
  function fmscript(parameter) {
    const fileName = encodeURIComponent("DataTables-Demo_PBS");
    const scriptName = "Edit Record from DataTable";
    let param = encodeURIComponent(parameter);

    //Optional Replacement for FM 19
    //FileMaker.PerformScript(scriptName, param);

    //FMP URL call
    let url =
      "fmp://$/" + fileName + "?script=" + scriptName + "&param=" + param;
    console.log(url);
    window.location.href = url;
  }
};

//
