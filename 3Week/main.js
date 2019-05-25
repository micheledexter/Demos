let artistTable = document.getElementById('artist-table');

let weirdAl = {
    name: 'Weird Al Yancovic',
    numberOfMembers: '1',
    genre: '<img src=https://i.ytimg.com/vi/KEkrWRHCDQU/maxresdefault.jpg />'
};

// function populateUnsafe() {
//     let htmlArtist = `
//     <tr>
//         <td>${weirdAl.name}</td>
//         <td>${weirdAl.numberOfMembers}</td>
//         <td>${weirdAl.genre}</td>
//     </tr>`;
//     artistTable.innerHTML += htmlArtist;
// }

populateUnsafe();

function populateSafe() {
    let newRow = document.createElement('tr');
    newRow.id = 'w-1';

    let artistName = document.createElement('td');
    artistName.innerText = weirdAl.name;
    let artistNumMem = document.createElement('td');
    artistNumMem.innerText = weirdAl.numberOfMembers;
    let artistGenre = document.createElement('td');
    artistGenre.innerText = weirdAl.genre;
    newRow.appendChild(artistName);
    newRow.appendChild(artistNumberOfMembers);
    newRow.appendChild(artistGenre);
    artistTable.appendChild(newRow);
}

artistTable.addEventListener('click', () => {
    if (artistTable.style.borderColor !== 'hotpink') {
        artistTable.style.borderColor = 'hotpink'
    } else {
        artistTable.style.borderColor = 'blue';
    }
})

populateSafe();