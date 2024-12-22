let currentQuestionIndex = 0; // Индекс текущего вопроса
let userAnswers = []; // Массив для хранения ответов пользователя
let questionTimeLimit = 60; // Время на один вопрос (в секундах)
let questionTimer; // Таймер для текущего вопроса
let startTime = Date.now(); // Инициализация времени начала теста

let questions = [
    

    {
        question: "1.  Картина : сүрөтчү",
        options: ["(А) Кат : почтальон", "(Б) Музыка : уста", "(В) Музыка : композитор", "(Г) Бакча : бакчачы"],
        answer: "(В) Музыка : композитор",
        explanation: `
                <div class="explanation">
                    <h4>1. Картина : сүрөтчү</h4>
                    <p><strong>Туура жооп: В) Музыка : композитор</strong></p>
                    <h4>Талдоо:</h4>
                    <p>Картина сүрөтчү тарабынан жасалат. Бул байланыш чыгармачылык процесстин маанисин түшүндүрөт, анткени сүрөтчү картинасын жасайт.</p>
                    <p>Музыка да композитор тарабынан түзүлөт, бул логикалык байланыш.</p>
                </div>


        `
    },
    {
        question: "2. Театр : сцена",
        options: ["(А) Кино : экран", "(Б) Китеп : барак", "(В) Дүкөн : товар", "(Г) Газета : макала"],
        answer: "(А) Кино : экран",
        explanation: `
                <div class="explanation">
                    <h4>2. Театр : сцена</h4>
                    <p><strong>Туура жооп: А) Кино : экран</strong></p>
                    <h4>Талдоо:</h4>
                    <p>Театр – бул сахнада коюлган өнөр. Сцена театрда көрсөткөн нерсе.</p>
                    <p>Кино экранда көрсөтүлөт, бул театр менен сахнанын байланышы сыяктуу.</p>
                </div>
        `
    },
    
   
    {
        question: "3. Компьютер : программа",
        options: ["(А) Кат : калем", "(Б) Китеп : автор", "(В) Ресторан : меню", "(Г) Саат : убакыт"],
        answer: "(В) Ресторан : меню",
        explanation: `
                <div class="explanation">
                    <h4>5. Компьютер : программа</h4>
                    <p><strong>Туура жооп: В) Ресторан : меню</strong></p>
                    <h4>Талдоо:</h4>
                    <p>Компьютер программалар аркылуу иштейт. Программанын жардамы менен компьютер иштейт.</p>
                    <p>Меню ресторанда колдонулат, бул программалар сыяктуу, бул логикалык байланышты түшүндүрөт.</p>
                </div>
        `
    },
    {
        question: "4. Балык : суу",
        options: ["(А) Канаттуу : асман", "(Б) Ит : көчө", "(В) Жолборс : токой", "(Г) Төө : тоо"],
        answer: "(А) Канаттуу : асман" ,
        explanation: `
                <div class="explanation">
                    <h4>4. Балык : суу</h4>
                    <p><strong>Туура жооп: А) Канаттуу : асман</strong></p>
                    <h4>Талдоо:</h4>
                    <p>Балык суусуз жашай албайт, анын табигый жашоо чөйрөсү – суу. Ошол эле сыяктуу, канаттуу асманда жашоосун толук кандуу өткөрөт. Бул табияттын шартына жараша байланышты көрсөтөт.</p>
                </div>

        `
    },
    {
        question: "5. Тамыр : өсүмдүк",
        options: ["(А) Уруктар : жемиш", "(Б) Жер : суу","(В) Бутак : дарак", "(Г) Үй : пайдубал"],
        answer: "(В) Бутак : дарак" ,
        explanation: `
                <div class="explanation">
                    <h4>5. Тамыр : өсүмдүк</h4>
                    <p><strong>Туура жооп: В) Бутак : дарак</strong></p>
                    <h4>Талдоо:</h4>
                    <p>Тамыр өсүмдүк үчүн азыктын булагы, ал эми бутак дарактын бир бөлүгү болуп эсептелет. Экөө тең өсүмдүккө тиешелүү негизги бөлүктөрдү чагылдырат.</p>
                </div>


        `
    },
    {
        question: "6. Суу : жашоо",
        options: ["(А) Абышка : таене", "(Б) Асман : булут", "(В) Жер : азык", "(Г) Күн : энергия"],
        answer: "(Г) Күн : энергия" ,
        explanation: `
                <div class="explanation">
                    <h4>6. Суу : жашоо</h4>
                    <p><strong>Туура жооп: Г) Күн : энергия</strong></p>
                    <h4>Талдоо:</h4>
                    <p>Суу – жашоонун негизи, ал эми күн – энергиянын негизги булагы. Экөө тең жашоо үчүн маанилүү нерселерди билдирет жана табигый муктаждыкты көрсөтөт.</p>
                </div>

        `
    },
    {
        question: "7. Чырак : жарык",
        options: ["(А) батарея : энергия", "(Б) түн : караңгы", "(В) от : жылуулук", "(Г) сыналгы : фильм"],
        answer: "(В) от : жылуулук" ,
        explanation: `
                <div class="explanation">
                    <h4>6. Чырак : жарык</h4>
                    <p><strong>Туура жооп: В) от : жылуулук</strong></p>
                    <h4>Талдоо:</h4>
                    <p>Бул жерде чырак жарык бергендей эле от жылуулук берет башка жоопторго карганда ушул жакыныраак</p>
                </div>

        `
    },
    {
        question: "8. Учкуч : учак",
        options: ["(А) капитан : кеме", "(Б) окумуштуу : лоборатория", "(В) доктор : оорукана", "(Г) офицант : рестаран"],
        answer: "(В) доктор : оорукана",
        explanation: `
                <div class="explanation">
                    <h4>8. Учкуч : учак</h4>
                    <p><strong>Туура жооп:</strong> В) доктор : оорукана</p>
                    
                    <h4>Талдоо:</h4>
                    <p>
                        Бул суроодо <strong>предмет жана анын жайгашкан оорду</srtong> болуп жатат ,
                        ошондой эле учкуч учакта жүрсө доктор ооруканада жүрөт. Калган жооптор логикалык жактан туура келбейт
                    </p>
                </div>
        `
    },
    {
        question: "9.  Көрчычкан : ийин ",
        options: ["(А) ит : кепе", "(Б) адам : үй", "(В) кумурска : уюк", "(Г) үкү : уя"],
        answer: "(В) кумурска : уюк" ,
        explanation: `
                <div class="explanation">
                    <h4>9. Көрчычкан : ийин</h4>
                    <p><strong>Туура жооп: В) кумурска : уюк </strong></p>
                    
                </div>

        `
    },
    {
        question: "10. Жылуу : жууркан",
        options: ["(А) таза : самын", "(Б) муздак : суу", "(В) жумшак : жер төшөк", "(Г) суук : кондиционер"],
        answer: "(А) таза : самын" ,
        explanation: `
                <div class="explanation">
                    <h4>10. Жылуу : жууркан</h4>
                    <p><strong>Туура жооп: А) таза : самын</strong></p>
                    <h4>Талдоо:</h4>
                    <p>
                    <strong>бир зат жана анын сапаты</srtong>
                    </p>
                </div>

        `
    }, 
    {
        question: "11. Төө : өркөч",
        options: ["(А) адам : акыл : ", "(Б) куш : канат", "(В) пил : мурун", "(Г) кой : туяк"],
        answer: "(В) пил : мурун" ,
        explanation: `
                <div class="explanation">
                    <h4>11. Төө : өркөч</h4>
                    <p><strong>Туура жооп: В) пил : мурун</strong></p>
                </div>
        `
    },
    {
        question: "12. Согуш : жеңиш",
        options: ["(А) мелдеш : жеңүү", "(Б) талаш : тартыш", " (В) уруш : чатак", "(Г) таймаш : утуш"],
        answer: "(Г) таймаш : утуш" ,
        explanation: `
                <div class="explanation">
                    <h4>12. Согуш : жеңиш</h4>
                    <p><strong>Туура жооп: Г) таймаш : утуш</strong></p>
                 </div>

        `
    },
    {
        question: "13. Жумуртка : тукум",
        options: ["(А) тамак : окат", "(Б) арык : дарыя", " (В) чөйчөк : чыны", "(Г) адам : инсан"],
        answer: "(А) тамак : окат" ,
        explanation: `
                <div class="explanation">
                    <h4>13. Жумуртка : тукум</h4>
                    <p><strong>Туура жооп: А) тамак : окат</strong></p>
                </div>
        `
    },
    {
        question: "14. Падыша : вазир",
        options: ["(А) эркек : аял", "(Б) президент : примьер министр", " (В) ата : уул", "(Г) устат : шакирт"],
        answer: "(Б) президент : примьер министр" ,
        explanation: `
                <div class="explanation">
                    <h4>14. Падыша : вазир</h4>
                    <p><strong>Туура жооп: Б) президент : примьер министр</strong></p>
                 </div>
                `

    },
    {
        question: "15. Алма : өсүмдүк",
        options: ["(А) славян : улут", "(Б) курт : жаныбар", " (В) бактерия : паразит", "(Г) китеп : окуу куралы"],
        answer: "(Б) курт : жаныбар" ,
        explanation: `
                <div class="explanation">
                    <h4>15. Алма : өсүмдүк</h4>
                    <p><strong>Туура жооп: Б) курт : жаныбар</strong></p>
                 </div>

                `
    },
    {
        question: "16. кой : эт",
        options: ["(А) кой  : шыйрак", " (Б) кой : устукан", " (В) кой : козу", "(Г) кой : жүн"],
        answer: "(Г) кой : жүн" ,
        explanation: `
                <div class="explanation">
                    <h4>16. Кой : эт</h4>
                    <p><strong>Туура жооп: Г) кой : жүн</strong></p>
                 </div>

                `
    },
    {
        question: "17. Отун : таарынды",
        options: ["(А) нан : күкүм", "(Б) көмүр : күл", " (В) тпурак : баткак", "(Г) жыгач : кесинди"],
        answer: "(А) нан : күкүм" ,
        explanation: `
                <div class="explanation">
                    <h4>17. Отун : таарынды</h4>
                    <p><strong>Туура жооп: А) нан : күкүм</strong></p>
                </div>

                `
    },
    {
        question: "18. Айнек : терезе",
        options: ["(А) жыгач : эшик", "(Б) алтын : шакек", "(В) цемент : фундамент", "(Г) чопо : темир"],
        answer: "(В) цемент : фундамент" ,
        explanation: `
                    <div class="explanation">
                        <h4>18. Айнек : терезе</h4>
                        <p><strong>Туура жооп: В) цемент : фундамент</strong></p>
                      </div>


                `
    },
    {
        question: "19. Бакалоор : мурун",
        options: ["(А) канат : кол", "(Б) жал : чач", "(В) жүн : тери", "(Г) туяк : манжа"],
        answer: "(Б) жал : чач" ,
        explanation: `
                <div class="explanation">
                    <h4>19. Бакалоор : мурун</h4>
                    <p><strong>Туура жооп: Б) жал : чач</strong></p>
                 </div>

                `
    },
    {
        question: "20. Бөкөкөнбай : драматург",
        options: ["(А) Пушкин : жазуучу", "(Б) Айтиевт : артист", "(В) Ахматов : поэтесса", "(Г) Осмонов : ойчул"],
        answer: "(В) Ахматов : поэтесса" ,
        explanation: `
                <div class="explanation">
                    <h4>20. Бөкөкөнбай : драматург</h4>
                    <p><strong>Туура жооп: В) Ахматов : поэтесса</strong></p>
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














