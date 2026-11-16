const binId = "6afa937fffd5d16053c4a171";
const masterKey = "$2a$10$SK62UF40gOXZubeCQwbFHeQhfwwxVJ27gv.4IIkAIAT2TZBwLt9Be";

fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
  method: "GET",
  headers: {
    "X-Master-Key": masterKey
  }
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Gagal mengambil:", err));