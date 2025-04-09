document.getElementById("clientForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  const data = {
    name: name,
    phone: phone
  };

  fetch("https://script.google.com/macros/s/AKfycbwNnC3RvpDTPFBsVJCrFl25_mUJRTSZ8fggBSw_kCM_pBLswZTH5PL2HcjhBAJmlLkq/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.text())
  .then(response => {
    document.getElementById("msg").innerText = response;
    document.getElementById("clientForm").reset();
  })
  .catch(err => {
    document.getElementById("msg").innerText = "Error: " + err;
  });
});
