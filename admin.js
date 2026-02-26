const db = firebase.firestore();
const tableBody = document.getElementById('requestTable');

// পেমেন্ট রিকোয়েস্টগুলো রিয়েল-টাইমে লোড করা
db.collection("withdraw_requests").where("status", "==", "Pending")
  .onSnapshot((querySnapshot) => {
    tableBody.innerHTML = ""; // আগের ডাটা পরিষ্কার করা
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const row = `
            <tr>
                <td>${data.user}</td>
                <td>${data.amount} TK</td>
                <td>${data.method}</td>
                <td>${data.phone}</td>
                <td><button class="btn-approve" onclick="approvePayment('${doc.id}')">Approve</button></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
});

// পেমেন্ট অ্যাপ্রুভ করার ফাংশন
function approvePayment(id) {
    if(confirm("Are you sure you want to approve this payment?")) {
        db.collection("withdraw_requests").doc(id).update({
            status: "Approved"
        })
        .then(() => {
            alert("Payment Approved Successfully!");
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        });
    }
}
