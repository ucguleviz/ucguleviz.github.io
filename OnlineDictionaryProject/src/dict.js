$(function () {
  $("#form-submit").click(function (event) {
    $.post(
      "http://localhost:8080/search",
      {
        query: $("#term").val(),
      },
      function (data, status) {
        $("#page-results").empty();
        var body = document.getElementById("page-results");
        var tbl = document.createElement("table");
        tbl.style.width = "100%";
        tbl.setAttribute("border", "1");
        var tbdy = document.createElement("tbody");
        const obj = JSON.parse(JSON.stringify(data));

        if (obj.length == 0) {
          var myH1Element = document.createElement("h1");
          jQuery(myH1Element).text("Nothing find");
          body.appendChild(myH1Element);
        }

        for (var i = 0; i < obj.length; i++) {
          var tr = document.createElement("tr");
          let row = obj[i];
          var td = document.createElement("td");
          td.appendChild(
            document.createTextNode(
              i + "(" + row.wordtype + ") : " + row.definition
            )
          );
          tr.appendChild(td);
          tbdy.appendChild(tr);
        }
        tbl.appendChild(tbdy);
        body.appendChild(tbl);
      }
    );
    $("#page-results").empty();
    var body = document.getElementById("page-results");
    var myH1Element = document.createElement("h1");
    jQuery(myH1Element).text("Waiting for data....");
    body.appendChild(myH1Element);
  });
});
