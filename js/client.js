(() => {
  function Showiframe(display) {
    var iframe = document.createElement("iframe");

    // uncommit below iframe src for development
    // iframe.src = `http://localhost:3000`;

    // uncommit below iframe src for production
    iframe.src = `https://meet-widget.herokuapp.com/`;

    iframe.style.display = "none";
    iframe.style.position = "absolute";
    iframe.style.bottom = "85px";
    iframe.style.right = 0;
    iframe.style.height = "calc(100% - 95px)";
    iframe.style.maxWidth = "510px";
    iframe.style.width = "100%";
    iframe.style.border = "none";
    iframe.style.marginRight = "10px";
    document.body.appendChild(iframe);
  }

  function l() {
    var div = document.createElement("div");
    var button = document.createElement("div");
    button.innerHTML = "Show";
    button.type = "button";
    button.style.height = "70px";
    button.style.width = "70px";
    button.style.position = "absolute";
    button.style.bottom = "5px";
    button.style.right = "10px";
    button.style.borderRadius = "100%";
    button.style.background = "#6e48aa";
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.display = "flex";
    button.style.justifyContent = "center";
    button.style.alignItems = "center";
    button.style.cursor = "pointer";
    button.addEventListener(
      "click",
      function() {
        var x = document.getElementsByTagName("iframe")[0]; // iframe
        if (x.style.display === "none") {
          x.style.display = "block";
          button.innerHTML = "X";
        } else {
          x.style.display = "none";
          button.innerHTML = "Show";
        }
      },
      false
    );
    div.appendChild(button);
    document.body.appendChild(div);
    Showiframe();
  }

  var ID = function() {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };
  if (sessionStorage.getItem("user_id")) {
    // if user_id is present
    l();
  } else {
    sessionStorage.setItem("user_id", ID());
    l();
  }
})();
