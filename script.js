const quizObj = [
    {
        'harc': 'Քրիստոնեության ընդունւմը Հայաստանում',
        'tarberakner': [
            {tarberak: '402', chisht: false},
            {tarberak: '305', chisht: false},
            {tarberak: '301', chisht: true},
            {tarberak: '405', chisht: false},
        ],
        'nkar': 'image1'

    },
    {
        'harc': 'Հայ գրերի գյուտը',
        'tarberakner': [
            {tarberak: '405', chisht: true},
            {tarberak: '504', chisht: false},
            {tarberak: '404', chisht: false},
            {tarberak: '411', chisht: false},
        ],
        'nkar': 'image2'

    },
    {
        'harc': 'Վարդանանց պատերազմը',
        'tarberakner': [
            {tarberak: '378', chisht: false},
            {tarberak: '438', chisht: false},
            {tarberak: '415', chisht: false},
            {tarberak: '451', chisht: true},
        ],
        'nkar': 'image3'

    },
    {
        'harc': 'Հայաստանի առաջին բաժանումը',
        'tarberakner': [
            {tarberak: '387', chisht: true},
            {tarberak: '378', chisht: false},
            {tarberak: '421', chisht: false},
            {tarberak: '298', chisht: false},
        ],
        'nkar': 'image4'

    },
    {
        'harc': 'Քաղկեդոնի ժողովը',
        'tarberakner': [
            {tarberak: '501', chisht: false},
            {tarberak: '447', chisht: false},
            {tarberak: '488', chisht: false},
            {tarberak: '451', chisht: true},
        ],
        'nkar': 'image5'

    },
];

const content = document.querySelector('.content');
let result = 0;



quizObj.forEach((elem, i) => {
    
    content.innerHTML += `
    <div class="question">
        <div class="question-content">
            <h1>${elem.harc}</h1>
            <div class="radios" id="${i}"></div>
        </div>
        <img src="images/${elem.nkar}.jpg">
    </div>
    `

    const radios = document.querySelectorAll('.radios')

    radios.forEach((radio, j) => {
        let tarberakner = '';

        for (let k = 0; k < quizObj[i].tarberakner.length; k++) {
            tarberakner += `
            <div class="div-radio">
                <input type="radio" name="${j}" data-id="${k}" onclick="func(event)">
                <p>${quizObj[j].tarberakner[k].tarberak}</p>
            </div>
            `
        }

        radio.innerHTML = tarberakner
    });
});

function func(event) {
    const variantNum = event.target.dataset.id
    const tarberakNum = event.target.name

    if (quizObj[tarberakNum].tarberakner[variantNum].chisht) {
        result++
    }
}

const btn = document.querySelector('.btn')

btn.addEventListener('click', function () {
    alert(`ճիշտ պատասխանների քանակը ${result} է`)    
})

