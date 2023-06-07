const abc = 'prioritet2023'

let accreditationForm = document.querySelector('.accreditation__form')
let accreditationContent = document.querySelector('.accreditation__content')
let accreditationError = document.querySelector('.accreditation__error')
const accreditationList = [
    {
        title: 'Циклограмма',
        link: 'https://drive.google.com/file/d/1ViweMd5VN1WUvauU3D821FWA-ghIneSi/view?usp=share_link'
    },
    {
        title: 'Положение о методическом совете',
        link: 'https://drive.google.com/file/d/1VsuFqOAimBp3RoJCJw5cGScDzrQSyyCy/view?usp=share_link'
    },
    {
        title: 'Положение об охране труда',
        link: 'https://drive.google.com/file/d/1UDnPfhcRZMjTMA9IPtaPWVAfdWd_OfdE/view?usp=share_link'
    },
    {
        title: 'Положение об инклюзивном',
        link: 'https://drive.google.com/file/d/1VujPneGy91WO7ryb1Q0UAbPGeiz4Ugoe/view?usp=share_link'
    },
    {
        title: 'Положение о системе образов',
        link: 'https://drive.google.com/file/d/1VjS5YVTveIwOjB2sUfTa0j4OCjJuG9xg/view?usp=share_link'
    },
    {
        title: 'Положение о предметной олимпиаде',
        link: 'https://drive.google.com/file/d/1VlUi0bnxUOmvnQrnkemvGWeR4QDy2QS3/view?usp=share_link'
    },
    {
        title: 'Положение о почте доверия',
        link: 'https://drive.google.com/file/d/1U6NRa60SoNzCZKL8l5cl0_P0aE6ANnaZ/view?usp=share_link'
    },
    {
        title: 'Положение о педсовете',
        link: 'https://drive.google.com/file/d/1VvQ-Lu0nHm3czimD0Wx_iiQa7lr2F2ZM/view?usp=share_link'
    },
    {
        title: 'Положение о мониторинге',
        link: 'https://drive.google.com/file/d/1VzoHoUb-5ztwhBMPSkwFtWC6xg8kGoxQ/view?usp=share_link'
    },
    {
        title: 'Положение о методическом объед.',
        link: 'https://drive.google.com/file/d/1VpNHMXyyDCiQFGx7Vo5vQdyyYtcp2atR/view?usp=share_link'
    },
    {
        title: 'Положение о информ безопасности',
        link: 'https://drive.google.com/file/d/1W6TvUzWouIXf4r8OOKtOF_SHn5XUGK16/view?usp=share_link'
    },
    {
        title: 'Положение о ведение эж.',
        link: 'https://drive.google.com/file/d/1WCjEbbU1ns8_DpBMWx8JvQoTQpLNEF11/view?usp=share_link'
    },
    {
        title: 'Положение о введении элект кл жу',
        link: 'https://drive.google.com/file/d/1U1i7Qy2vrL14ZIPsKuJq3Vx_sC3vH2zO/view?usp=share_link'
    },
    {
        title: 'Положение вшк',
        link: 'https://drive.google.com/file/d/1U1i7Qy2vrL14ZIPsKuJq3Vx_sC3vH2zO/view?usp=share_link'
    },
    {
        title: 'Положение внутреннего распорядка',
        link: 'https://drive.google.com/file/d/1WJUhoUI9QynWnAgo8aFWCRR-VeFxzY_I/view?usp=share_link'
    },
    {
        title: 'Положение внутреннего распорядка',
        link: 'https://drive.google.com/file/d/1U-BBQAlSzKq3HdpJaaweEisqB_1gUh1o/view?usp=share_link'
    },
    {
        title: 'Критерии оценок',
        link: 'https://drive.google.com/file/d/1WI3OauTe_W6_XLrFVb1UyW3MxiQAylBZ/view?usp=share_link'
    },
    {
        title: 'Анализ успеваемости',
        link: 'https://drive.google.com/file/d/1Vf6Rk78nuTPQky7SMePjmqOMNYZ9jjBz/view?usp=share_link'
    },
    {
        title: 'План.раб переемств',
        link: 'https://drive.google.com/file/d/1VDmS-zV2EszyfgaPq9dhD3lmAicBf06w/view?usp=share_link'
    },
    {
        title: 'Общ.свед Контенгент',
        link: 'https://drive.google.com/file/d/1VUQoV2qNmSy6nxbhVyx2-9ZztFK_xm_Q/view?usp=share_link'
    },
    {
        title: 'Учебный план',
        link: 'https://drive.google.com/file/d/1V7gzqUY1c-2QApKNfzHaCP7MyeNRr9W0/view?usp=share_link'
    },
    {
        title: 'Правила сотр',
        link: 'https://drive.google.com/file/d/1VA0e6rfWXl57CYiRuznHRVB7nf0tAhyH/view?usp=share_link'
    },
    {
        title: '',
        link: 'https://drive.google.com/file/d/1V2PrKHrPeKlf9BEKRS7Rrjlh33aaVHmW/view?usp=share_link'
    },
    {
        title: '',
        link: 'https://drive.google.com/file/d/1UncUiVWiBrUzWvhYbPLFznBJnYsNE5JN/view?usp=share_link'
    },
    {
        title: '',
        link: 'https://drive.google.com/file/d/1UuMzjIdr_t-RVeFV5LZUSOp4-3o33bOu/view?usp=share_link'
    },
    {
        title: 'Должн обяз',
        link: 'https://drive.google.com/file/d/1UmTlpN5hPTDRNIxYRX_NwXUrftgChjR4/view?usp=share_link'
    },
    {
        title: 'Должн обяз',
        link: 'https://drive.google.com/file/d/1UlnigOaAamyn39U8H_g_4wukzJc_WTyB/view?usp=share_link'
    },
    {
        title: 'Должн инстр',
        link: 'https://drive.google.com/file/d/1Um9PPXHRtajCa_2Ocol-GJOBiQ0X8NXS/view?usp=share_link'
    },
    {
        title: 'Должн инстр',
        link: 'https://drive.google.com/file/d/1UfqP9RxMwjDvkKJYlF2k-hvctWCB9fIG/view?usp=share_link'
    },
    {
        title: 'Должн инстр',
        link: 'https://drive.google.com/file/d/1UduA7P3Eod4FzJcUwLuJDUSXhhVkZeHk/view?usp=share_link'
    },
    {
        title: 'Должн инстр',
        link: 'https://drive.google.com/file/d/1Ub_bcUz5KFLAbvP2WKanc0yYXwNNgD7h/view?usp=share_link'
    },
    {
        title: 'Функ.об Директор',
        link: 'https://drive.google.com/file/d/1UJs06tfhvfrSeTx4snPa-a9OahLY9IWK/view?usp=share_link'
    },
    {
        title: 'Правила сотр',
        link: 'https://drive.google.com/file/d/1VDakbMvxtYBVs_bxLyCxWlyhz-vlJQdv/view?usp=share_link'
    },
]

accreditationForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (e.target[0].value === abc) {
        accreditationContent.style.display = 'flex'
        accreditationForm.style.display = 'none'
        accreditationList.forEach(item => {
            accreditationContent.innerHTML += `
            <a href="${item.link}" class="accreditation__link" target="_blank">
                <div class="accreditation__block">
                    <img src="../../src/images/icons/pdf.svg" alt="PDF">
                    <h3>${item.title}</h3>
                </div>
            </a>
        `
        })
    } else {
        accreditationError.style.display = 'block'
    }
})