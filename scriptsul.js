let currentQuestionIndex = 0; // Индекс текущего вопроса
let userAnswers = []; // Массив для хранения ответов пользователя
let questionTimeLimit = 60 + 60; // Время на один вопрос (в секундах)
let questionTimer; // Таймер для текущего вопроса
let startTime = Date.now(); // Инициализация времени начала теста

let questions = [
    
{
    question: "1. Төмөндөгүлөрдүн кайсынысы тексттин 14-21-саптарындагы сүйлөмдөрдө туюунтулган ойду тагыраак чагылдырат.",
    options: ["а) музыка менен ислам мамлекеттеринде гана даарыланган ", "б) атайын бейтапканаларда 'бакшылар' оорулуурарды музыкасыз дарылаган ", "в) музыка менен дарылоо көп түйшүктү талап кылган", "г) Музыканын жагымдуу касиетин дүйнөнүн көп элдери билген"],
    answer: ""
},
{
    question: "2. Тексттин 39-48-саптарындагы сүйлөмдөрдө айтылгандар боюнча оорулууну музыка менен дарылоонун ийгиликтүү жолу эмнеге байланыштуу?",
    options: ["а) Түзүлгөн шартка", "б) Адистик мамилеге", "в) Жогорку чеберчиликке", "г) Күндүн убактысына"],
    answer: "" 
},
{
    question: "3. 'Адамдын үнүнүн дарылык касиети бар' (94-сап) деген ырастоону тексттин 152-158-саптарындагы сүйлөмдөрдө айтылган ой",
    options: ["а) улантып турат", "б) жыйынтыктап турат", "в) далилдеп турат", "г) баяндап турат"],
    answer: "" 
},
{
    question: "4. Төмөндөгү ырастоолордун кайсынысында бардык башкаларындагы ой толугураак камтылган?",
    options: ["а) 'Музыка адамдын жан дүйнөсүнө таасир этет' (159-160-саптар)", "б) 'Үн бүт клеткаларга жана органдарга таасир берет' (97-98- саптар)", "в) (В) '... музыка мээнин бөлүкчөлөрүнө таасир этет' (116-117-саптар)", "г) '... музыка адамдын аң-сезимине ... таасир берет' (72-75-саптар)"],
    answer: "" 
},
{
    question: "5. Тексттин 100-110-саптарында айтылгандарга негизденип, императорду кандай мүнөздөөгө болот?",
    options: ["а) Камкор", "б) Жөндөмдүү", "в) Өнөрпоз", "г) Мээнеткеч"],
    answer: "эшик:тутка" 
},
{
    question: "6. Тексттин 168-171-саптарындагы сүйлөмдө берилген ойдун маанайы -",
    options: ["а) кайрылуу", "б) кубануу", "в) жыйынтыктоо", "г) каалоо"],
    answer: "" 
},
{
    question: "7. Текстте баяндалган ой негизинен эмне жөнүндө?",
    option: ["І. Музыканттардын турмуштагы орду ", "II. Музыканын дарылоочулук касиети", " ІІІ. Бейтап адамдардын музыкадан алган таасири", "ІV. Музыканын таасирин илимий изилдөөнүн тарыхы"],
    options: ["а) І гана", "б) I жана II гана", "в) II жана III гана", "г) III жана IV гана"],
    answer: "" 
},
{
    question: "8. 130-138-саптарда айтылган ой -",
    options: ["а) музыканын түрлөрү жөнүндө", "б) окумуштуулардын иш-тажрыйбасы жөнүндө", "в) бейтаптардын ал-абалы жөнүндө", "г) дарылоонун ыкмасы жөнүндө"],
    answer: ""
},
{
    question: "9. Тексттин 112-115-саптарындагы сүйлөмдө автор оюн кандайча билдирген?",
    options: ["а) күмөн", "б) купуя", "в) каймана", "г) тике"],
    answer: ""
},

{
    question: "10. Тексттин 107-110 жана 159-164-саптарындағы сүйлөмдөрдө айтылган ойлор бири бирине -",
    options: ["а) удаалаш ", "б) окшош", "в) тушташ", "г) маанилеш"],
    answer: ""
},
{
    question: "12. баңги: ден-соолук",
    options: ["макияж: келбет", "таштанды: чөйрө", "темир: дат", "тарбия: жүрүм-турум"],
    answer: "таштанды: чөйрө"
},
{
    question: "13. дарбыз: данектүү",
    options: ["китеп: маңыздуу", "коон: сары", "мугалим: билимдүү", "акула: тиштүү"],
    answer: "акула: тиштүү"
},
{
    question: "14. стратосфера: атмосфера",
    options: ["сейсмология: кыртыш", "жогорку мантия: литосфера", "дүйнөлүк океан: гидросфера", "экосистема: биосфера"],
    answer: "жогорку мантия: литосфера"
},
{
    question: "15. буйрук: капитан",
    options: ["буйрук: староста", "буйрук: ата", "буйрук: мугалим", "буйрук: сот"],
    answer: "буйрук: староста"
},
{
    question: "16. жашоо:таттуу",
    options: ["өмүр:ырыхаттуу", "турмуш:максатсыз", "бакыт:ийгиликтуу", "эгемендүүдүк:баалуу"],
    answer: "өмүр:ырыхаттуу"
},
{
    question: "17. кылмыш:жаза",
    options: ["күнө:тозок", "соода:товар", "сүйүү:бакыт", "жумуш:акы"],
    answer: "жумуш:акы"
},
{
    question: "18. хиджаб:араб",
    options: ["калпак:кыргыз", "үкү топу:кыргыз", "элечек:кыргыз", "белдемчи:кыргыз"],
    answer: "элечек:кыргыз"
},
{
    question: "19. кукым:өсүмдүк",
    options: ["алма:гүл", "осетр:балык", "кайың:бак", "буркүт:жаныбар"],
    answer: "буркүт:жаныбар"
},
{
    question: "20. телефон:байланыш",
    options: ["телевизор:кино", "цирк:маскарапоз", "унаа:ташуу", "жылыткыч:жылуулук"],
    answer: "жылыткыч:жылуулук"
},

];

// Таймер для одного вопроса
function startQuestionTimer() {
    let timeLeft = questionTimeLimit;
    document.getElementById('timer').innerText = `Время на текущий вопрос:⏳: ${timeLeft}секунд`;

    questionTimer = setInterval(() => {
        timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            alert('Время на вопрос истекло! Переходим к следующему.');
            userAnswers.push(null); // Добавляем "Нет ответа"
            moveToNextQuestion(); // Переходим к следующему вопросу
        } else {
            document.getElementById('timer').innerText = `Время на текущий вопрос:⏳: ${timeLeft}скеунд`;
        }
    }, 1000);
}

// Переход к следующему вопросу
function moveToNextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults(); // Завершаем тест
    }
}

// Отображение текущего вопроса
function showQuestion() {
    clearInterval(questionTimer); // Очищаем предыдущий таймер
    let currentQuestion = questions[currentQuestionIndex];
    let questionSection = document.getElementById('questionSection');
    let cleanedQuestionText = currentQuestion.question.replace(/\$\$\$\$/g, '_____');

    questionSection.innerHTML = `
        <h3>${cleanedQuestionText}</h3>
        <form id="questionForm">
            ${currentQuestion.options.map((option) => `
                <label>
                    <input type="radio" name="answer" value="${option}">
                    ${option}
                </label><br>
            `).join('')}
        </form>
    `;

    // Запускаем таймер на текущий вопрос
    startQuestionTimer();

    document.getElementById('nextQuestionBtn').style.display = 'inline-block';
}

// Обработка кнопки "Следующий вопрос"
document.getElementById('nextQuestionBtn').addEventListener('click', function () {
    let selectedAnswer = document.querySelector('input[name="answer"]:checked')?.value;

    if (selectedAnswer) {
        userAnswers.push(selectedAnswer); // Сохраняем выбранный ответ
        moveToNextQuestion();
    } else {
        alert('Пожалуйста, выберите ответ или дождитесь завершения времени!');
    }
});

// Завершение теста
function showResults() {
    clearInterval(questionTimer); // Останавливаем последний таймер

    let resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';
    let score = 0;

    questions.forEach((question, index) => {
        let cleanedQuestionText = question.question.replace(/\$\$\$\$/g, '_____');
        let userAnswer = userAnswers[index];
        let isCorrect = userAnswer === question.answer;
        let resultIcon = isCorrect ? '✓' : '✗';
        let resultColor = isCorrect ? 'green' : 'red';

        resultsList.innerHTML += `
            <p><strong>Вопрос ${index + 1}:</strong> ${cleanedQuestionText}</p>
            <p>Ваш ответ: <span>${userAnswer || 'Нет ответа'}</span></p>
            <p>Правильный ответ: <span>${question.answer}</span></p>
            <p>
                <span style="color: ${resultColor}; font-weight: bold;">${resultIcon}</span> 
                ${isCorrect ? 'Правильно' : 'Неправильно'}
            </p>
            <p><strong>Объяснение:</strong> ${question.explanation}</p>
            <hr>
        `;

        if (isCorrect) {
            score++;
        }
    });

    let percentage = (score / questions.length) * 100;
    let grade = percentage >= 70 ? '5 😇😇😇' : percentage >= 50 ? '4  🙃🙃🙃' : percentage >= 40 ? '3  😟😟😟' : '2  😫😫😫';

    resultsList.innerHTML += `<h4>Ваш результат: ${score} из ${questions.length} (${percentage.toFixed(2)}%)</h4>`;
    resultsList.innerHTML += `<p>Ваша оценка : <strong>${grade}</strong></p>`;

    // Вывод времени, затраченного на тест
    let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    let minutes = Math.floor(elapsedTime / 60);
    let seconds = elapsedTime % 60;
    resultsList.innerHTML += `<p>Время, затраченное на тест: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}</p>`;

    // Переход к блоку с результатами
    document.getElementById('testSection').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'block';
}

// Старт теста
    document.getElementById('startTestBtn').addEventListener('click', function () {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('testSection').style.display = 'block';
    showQuestion(); // Показываем первый вопрос
});
document.getElementById('restartTestBtn').addEventListener('click', function () {
    // Сброс переменных
    currentQuestionIndex = 0;
    userAnswers = [];
    startTime = Date.now(); // Сброс времени начала

    // Скрыть результаты и показать тест
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('testSection').style.display = 'block';

    // Показать первый вопрос
    showQuestion();
});



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}