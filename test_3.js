let currentQuestionIndex = 0; // Индекс текущего вопроса
let userAnswers = []; // Массив для хранения ответов пользователя
let questionTimeLimit = 60; // Время на один вопрос (в секундах)
let questionTimer; // Таймер для текущего вопроса
let startTime = Date.now(); // Инициализация времени начала теста

let questions = [
    

    {
        question: "1. Кат : конверт",
        options: ["(А) Китеп : текче", "(Б) Товар : куту", "(В) Суу : чака", "(Г) Акча : капчык"],
        answer: "(Г) Акча : капчык",
        explanation: `
                <div class="explanation">
                    <h4>1. Кат : конверт</h4>
                    <p><strong>Жооп:</strong> Г) Акча : капчык</p>
                    <h4>Талдоо:</h4>
                    <p>
                        Кат конверттин ичинде сакталып, почта аркылуу жеткирилет. Бул жерде кат менен конверт бирдей мааниде байланышкан: "сактоо жана ташуу". Ошол сыяктуу эле, акча капчыктын ичинде сакталып жүрөт. Калган варианттар мындай түздөн-түз байланышты көрсөтпөйт.
                    </p>
                </div>

        `
    },
    {
        question: "2. Көлөкө : жарык",
        options: ["(А) Муздак : жылуу", "(Б) Шаң : тынчтык", "(В) Караңгы : түн", "(Г) Суу : кургактык"],
        answer: "(А) Муздак : жылуу",
        explanation: `
                <div class="explanation">
                    <h4>2. Көлөкө : жарык</h4>
                    <p><strong>Жооп:</strong> А) Муздак : жылуу</p>
                    
                    <h4>Талдоо:</h4>
                    <p>
                        <strong>Көлөкө – жарыктын болбогон жери.</strong> Бул экөө бири-бирине карама-каршы түшүнүктөр. 
                        Ошол сыяктуу эле, муздак – жылуулуктун жоктугун билдирет. 
                    </p>
                    <p>Калган варианттарда мындай карама-каршылык жок.</p>
                </div>

        `
    },
   
    {
        question: "3. Саат : убакыт",
        options: ["(А) Сызгыч : узундук", "(Б) Эсептегич : сан", "(В) Карта : аймак", "(Г) Китеп : билим"],
        answer: "(А) Сызгыч : узундук",
        explanation: `
                <div class="explanation">
                    <h4>3. Саат : убакыт</h4>
                    <p><strong>Жооп:</strong> А) Сызгыч : узундук</p>
                    
                    <h4>Талдоо:</h4>
                    <p>
                        <strong>Саат убакытты өлчөө үчүн колдонулат,</strong> ал эми сызгыч узундукту өлчөө үчүн колдонулат. Бул жерде "өлчөөчү курал" түшүнүгү экөөнү бириктирип турат.
                    </p>
                    <p>Калган варианттар мындан алысыраак.</p>
                </div>

        `
    },
 
    {
        question: "4. Тамыр : дарак",
        options: ["(А) Канат : куш", "(Б) Күн : нур", "(В) Негиз : имарат", "(Г) Көз : көрүү"],
        answer: "(В) Негиз : имарат" ,
        explanation: `
                <div class="explanation">
                    <h4>4. Тамыр : дарак</h4>
                    <p><strong>Жооп:</strong> В) Негиз : имарат</p>
                    
                    <h4>Талдоо:</h4>
                    <p>
                        <strong>Тамыр даракты жерге бекем байлап,</strong> анын негизги колдоосу болуп эсептелет. Ошол эле сыяктуу, имараттын негизи – анын бекемдигин камсыздаган негизги бөлүгү.
                    </p>
                    <p>Калган варианттарда мындай түздөн-түз байланыш жок.</p>
                </div>

        `
    },
    
    {
        question: "5. Муз : суу",
        options: ["(А) Кум : айнек", "(Б) Сүт : сыр", "(В) Таш : тоо", "(Г) Жылыткыч : аба"],
        answer: "(А) Кум : айнек" ,
        explanation: `
                <div class="explanation">
                    <h4>5. Муз : суу</h4>
                    <p><strong>Жооп:</strong> А) Кум : айнек</p>
                    
                    <h4>Талдоо:</h4>
                    <p>
                        <strong>Муз</strong> суунун муздап катуусунан пайда болот, ал эми кайра эригенде суу болуп калат. Ошол эле сыяктуу, <strong>кум</strong> айнекке айлануу үчүн иштетилет.
                    </p>
                    <p>
                        Бул жерде "физикалык трансформация" байланышы бар. Калган варианттар муну чагылдырбайт.
                    </p>
                </div>

        `
    },
    {
        question: "6. Китеп : билим",
        options: ["(А) Карта : жол", "(Б) Жылдыз : асман", "(В) Глобус : өлкө", "(Г) Жарык : лампа"],
        answer: "(А) Карта : жол" ,
        explanation: `
                <div class="explanation">
                    <h4>6. Китеп : билим</h4>
                    <p><strong>Туура жооп:</strong> А) Карта : жол</p>
                    
                    <h4>Талдоо:</h4>
                    <p>
                        <strong>Китеп</strong> билимди бере турган булак болсо, <strong>карта</strong> жолду табуу үчүн колдонулат. Экөө тең маалымат берүүчү жана жетекчи катары кызмат кылат.
                    </p>
                </div>
        `
    },
    {
        question: "7. Кумура : суу",
        options: ["(А) Чыны : чай", "(    Б) Табак : тамак", "(    В) Карагай : жаңгак", "(    Г) Калем : сыя"],
        answer: "(А) Чыны : чай" ,
        explanation: `
                <div class="explanation">
                    <h4>7. Китеп : билим</h4>
                    <p><strong>Туура жооп:</strong> А) Карта : жол</p>
                    
                    <h4>Талдоо:</h4>
                    <p>
                        <strong>Китеп</strong> билимди бере турган булак болсо, <strong>карта</strong> жолду табуу үчүн колдонулат. Экөө тең маалымат берүүчү жана жетекчи катары кызмат кылат.
                    </p>
                </div>

        `
    },
    {
        question: "8. Акча : байлык",
        options: ["(А) Билим : диплом", "(Б) Уй : сүт", "(В) Эмгек : сыйлык", "(Г) Оюн : көңүл ачуу"],
        answer: "(В) Эмгек : сыйлык",
        explanation: `
                <div class="explanation">
                    <h4>8. Акча : байлык</h4>
                    <p><strong>Туура жооп:</strong> В) Эмгек : сыйлык</p>
                    
                    <h4>Талдоо:</h4>
                    <p>
                        <strong>Акча</strong> байлыктын негизги көрсөткүчү сыяктуу эле, <strong>эмгек</strong> сыйлыкка жеткирет. Экөө тең аракеттин натыйжасын чагылдырат.
                    </p>
                </div>
        `
    },
    {
        question: "9.  Шамал : жел ",
        options: ["(А) Дарыя : агым", "(Б) Тоо : таш", "(В) Көл : суу", "(Г) Жамгыр : кар"],
        answer: "(А) Дарыя : агым" ,
        explanation: `
                <div class="explanation">
                    <h4>9. Шамал : жел</h4>
                    <p><strong>Туура жооп: А) Дарыя : агым</strong></p>
                    <h4>Талдоо:</h4>
                    <p>
                       <strong>Шамал</strong> желдин кыймылын билдиргендей, <strong>дарыя</strong> суунун агымы менен байланышкан. Бул жерде кыймылдын окшоштугу көрсөтүлгөн
                    </p>
                </div>

        `
    },
    {
        question: "10. Гүл : кооздук",
        options: ["(А) Үй : чатыр", "(Б) Бакча : жемиш", "(В) Музыка : ыр", "(Г) Күн : жылуулук"],
        answer: "(Г) Күн : жылуулук" ,
        explanation: `
                <div class="explanation">
                    <h4>10. Гүл : кооздук</h4>
                    <p><strong>Туура жооп: Г) Күн : жылуулук</strong></p>
                    <h4>Талдоо:</h4>
                    <p>
                    
                        <strong>Гүл</strong> кооздукту тартууласа, <strong>күн</strong> жылуулукту берет. Экөө тең табияттын бир бөлүгү болуп, адамдарга пайдалуу жана жагымдуу нерселерди тартуулайт.
                    </p>
                </div>

        `
    }, 
    {
        question: "11. Шам : жарык",
        options: ["(А) Ай : көлөкө", "(    Б) Асман : жамгыр", " (В) Күн : нур", "(Г) Жылдыз : караңгы"],
        answer: "(Г) Күн : жылуулук" ,
        explanation: `
                <div class="explanation">
                    <h4>11. Шам : жарык</h4>
                    <p><strong>Туура жооп: В) Күн : нур</strong></p>
                    <h4>Талдоо:</h4>
                    <p>Шам жарык берет, ал эми күн нурларын чачат. Бул жерде эки объект тең жарык булагы болуп саналат.</p>
                </div>
        `
    },
    {
        question: "12. Аба : дем алуу",
        options: ["(А) Суу : жуу", "(Б) Тамак : энергия", " (В) Шамал : муздоо", "(Г) Жашоо : убакыт"],
        answer: "(Б) Тамак : энергия" ,
        explanation: `
                <div class="explanation">
                    <h4>12. Аба : дем алуу</h4>
                    <p><strong>Туура жооп: Б) Тамак : энергия</strong></p>
                    <h4>Талдоо:</h4>
                    <p>Аба дем алууга керектелет, ал эми тамак энергия берет. Бул экөө тең адамдын жашоосу үчүн негизги керектүү нерселер.</p>
                </div>

        `
    },
    {
        question: "13. Китепкана : китеп",
        options: ["(А) Айыл : эгин", "(Б) Муздаткыч : тамак-аш", " (В) Жанар тоо : лава", "(Г) Суу сактагыч : шаркыратма"],
        answer: "(Б) Муздаткыч : тамак-аш" ,
        explanation: `
                <div class="explanation">
                    <h4>13. Китепкана : китеп</h4>
                    <p><strong>Туура жооп: Б) Муздаткыч : тамак-аш</strong></p>
                    <h4>Талдоо:</h4>
                    <p>Китепкана китеп сактайт, ал эми муздаткыч тамак-аш сактайт. Экөө тең сактоочу жай катары колдонулат.</p>
                </div>
        `
    },
    {
        question: "14. Кыш : суук",
        options: ["(А) Жаз : гүлдөр", "(Б) Жай : ысык", " (В) Күз : жаан", "(  Г) Жашоо : кыймыл"],
        answer: "(Б) Жай : ысык" ,
        explanation: `
                <div class="explanation">
                    <h4>14. Кыш : суук</h4>
                    <p><strong>Туура жооп: Б) Жай : ысык</strong></p>
                    <h4>Талдоо:</h4>
                    <p>Кыш суук мезгилди чагылдырат, ал эми жай ысык мезгил менен байланыштуу. Экөө тең климаттык өзгөчөлүктөрдү сүрөттөйт.</p>
                </div>
                `

    },
    {
        question: "15. Музыка : ыргак",
        options: ["(А) Ыр : созуу", "(Б) Сүрөт : түс", " (В) Драма : сахна", "(Г) Токтобо : ылдамдык"],
        answer: "(Б) Сүрөт : түс" ,
        explanation: `
                <div class="explanation">
                    <h4>15. Музыка : ыргак</h4>
                    <p><strong>Туура жооп: Б) Сүрөт : түс</strong></p>
                    <h4>Талдоо:</h4>
                    <p>Музыканын мааниси ыргак аркылуу берилсе, сүрөттүн мааниси түстөр аркылуу жеткирилет. Экөө тең искусствонун элементтери болуп саналат.</p>
                </div>

                `
    },
    {
        question: "16. Күз : жалбырак",
        options: ["(А) Жаз : гүл", " (Б) Кыш : кар", " (В) Жай : күн", "(Г) Түш : салкын"],
        answer: "(А) Жаз : гүл" ,
        explanation: `
                <div class="explanation">
                    <h4>16. Күз : жалбырак</h4>
                    <p><strong>Туура жооп: А) Жаз : гүл</strong></p>
                    <h4>Талдоо:</h4>
                    <p>Күздө жалбырактар саргайып, жерге түшөт. Жаз болсо гүлдөрдүн ачылышы менен белгиленет. Экөө тең мезгилдердин өзгөчөлүктөрүн чагылдырат.</p>
                </div>

                `
    },
    {
        question: "17. Китеп : билим",
        options: ["(А) Тамак : күч", "(Б) Жылдыз : жарык", " (В) Мектеп : окуучу", "(Г) Дары : айыктыруу"],
        answer: "(Г) Дары : айыктыруу" ,
        explanation: `
                <div class="explanation">
                    <h4>17. Китеп : билим</h4>
                    <p><strong>Туура жооп: А) Дары : айыктыруу</strong></p>
                    <h4>Талдоо:</h4>
                    <p>Китеп билим берүүчү каражат болсо, дары ден соолукту айыктыруучу каражат болуп саналат. Экөө тең пайдалуу функцияларды аткарат.</p>
                </div>

                `
    },
    {
        question: "18. Балык : сууда",
        options: ["(А) Тоок : жумуртка", "(Б) Бугу : токойдо", " (В) Ит : көчөдө", "(Г) Дары : айыктыруу"],
        answer: "(Б) Бугу : токойдо" ,
        explanation: `
                    <div class="explanation">
                        <h4>18. Балык : сууда</h4>
                        <p><strong>Туура жооп: Б) Бугу : токойдо</strong></p>
                        <h4>Талдоо:</h4>
                        <p>Балыктар суу чөйрөсүндө жашайт, ал эми бугулар токойдо жашашат. Бул жерде экөө тең өзүнүн табигый жашоо чөйрөсү менен байланышта.</p>
                    </div>


                `
    },
    {
        question: "19. Калем : жазуу",
        options: ["(А) Кара : ак", "(Б) Китеп : окуу", "(В) Сүрөт : боёо", "(Г) Музыка : обон"],
        answer: "(В) Сүрөт : боёо" ,
        explanation: `
                <div class="explanation">
                    <h4>19. Калем : жазуу</h4>
                    <p><strong>Туура жооп: В) Сүрөт : боёо</strong></p>
                    <h4>Талдоо:</h4>
                    <p>Калем жазуу үчүн колдонулса, боёо сүрөттү жаратуу үчүн колдонулат. Экөө тең чыгармачылык процессинде маанилүү курал.</p>
                </div>

                `
    },
    {
        question: "20. Ай : түн",
        options: ["(А) Күн : күндүз", "(Б) Жылдыз : космос", "(В) Жер : планета", "(Г) Булут : жаан"],
        answer: "(А) Күн : күндүз" ,
        explanation: `
                <div class="explanation">
                    <h4>20. Ай : түн</h4>
                    <p><strong>Туура жооп: А) Күн : күндүз</strong></p>
                    <h4>Талдоо:</h4>
                    <p>Ай күн менен байланышта эмес, айрыкча түндүн жарыгы болуп саналат. Ай жана түн экөө бири-бири менен байланыштырылган, анткени ай түн ичинде көрүнөт.</p>
                    <p>Күн күндүз жарык берет, ал эми ай түндө көрүнөт.</p>
                </div>


                `
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
            document.getElementById('timer').innerText = `Время на текущий вопрос:⏳: ${timeLeft}секунд`;
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
    resultsList.innerHTML += `<p>Время, затраченное на тест:⏳ ${minutes}:${seconds < 10 ? '0' + seconds : seconds}</p>`;

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














