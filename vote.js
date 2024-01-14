let addmember = document.getElementById("addmember");
let memberName = document.getElementById("memberName");
addmember.addEventListener("click", () => {
    friends.push(memberName.value);
    memberName.value = "";
    updateUI();
});
let friendsData = [
    { id: 1, name: "Sheeza", votes: 0 },
    { id: 2, name: "Maham", votes: 0 },
    { id: 3, name: "Sara", votes: 0 },
];

function updateUI() {
    const friendsTable = document.getElementById("member");
    friendsTable.innerHTML = ""; 

    friendsData.forEach(friend => {
        const newRow = friendsTable.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);

        cell1.textContent = friend.id;
        cell2.textContent = friend.name;
        cell3.textContent = friend.votes;

        newRow.id = `row-${friend.id}`;
        newRow.onclick = function () {
            voteForFriend(friend.id);
        };
    });
}

function voteForFriend(id) {
    const selectedFriend = friendsData.find(friend => friend.id === id);

    if (selectedFriend) {
        selectedFriend.votes++;
        updateUI();
    }
}

function addNewPerson() {
    const newPersonName = document.getElementById("memberName").value;
    if (newPersonName.trim() !== "") {
        const newPerson = { id: friendsData.length + 1, name: newPersonName, votes: 0 };
        friendsData.push(newPerson);
        updateUI();
        document.getElementById("memberName").value = ""; 
    } else {
        alert("Please enter a name for the new person.");
    }
}
updateUI();
