let certificates = document.querySelector('.certificates__gallery')

const certificatesList = [
    '../../src/images/certificates/certificates1.jpg',
    '../../src/images/certificates/certificates2.jpg',
    '../../src/images/certificates/certificates3.jpg',
    '../../src/images/certificates/certificates4.jpg',
    '../../src/images/certificates/certificates5.jpg',
    '../../src/images/certificates/certificates6.jpg',
    '../../src/images/certificates/certificates7.jpg',
    '../../src/images/certificates/certificates8.jpg',
    '../../src/images/certificates/certificates9.jpg',
    '../../src/images/certificates/certificates10.jpg',
    '../../src/images/certificates/certificates11.jpg',
    '../../src/images/certificates/certificates12.jpg',
    '../../src/images/certificates/certificates13.jpg',
]

certificatesList.forEach(item => {
    certificates.innerHTML += `
        <div>
            <img class="certificates__image" src="${item}">
        </div>
    `
})