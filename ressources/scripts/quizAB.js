//=====================================//
//==              Quiz               ==//
//=====================================//

// Here alle the questions are stored in a name-key array
const questions = [
    {
        question: "Hvem har det primær ansvar for sundhedsvæsnet? ", 
        answers: [
            {text: "Staten", correct: false},
            {text: "Regionerne ", correct: true},
            {text: "Kommuner", correct: false},
            {text: "Fonder", correct: false}
        ],
        explanation: "Regionerne står for det primære ansvar ved sygehus og psykiatrien, men får finansieringen fra kommunerne og staten."
    },
    {
        question: "Hvorfor har kommuner fået til opgave at varetage størstedelen af velfærdsservicen?", 
        answers: [
            {text: "Fordi der er forskellig politiske og følelsesmæssige holdninger ude i de forskellige kommuner og derfor nemmer at styr tæt på borgerne.", correct: true},
            {text: "Fordi de kan spare penge på det", correct: false},
            {text: "Fordi regionerne kun tager sig af dyrevelfærd", correct: false},
            {text: "Fordi at kommunalbestyrelsen skal aktiveres, således de ikke keder sig", correct: false}
        ],
        explanation: "Decentraliseringen tager beslutningerne tæt på borgerne og dette skal gerne give borgeren et bedre tilhørsforhold til kommunerne og et bedre match mellem tilbud og borger."
    },
    {
        question: "Hvilken velfærdsmodel har man i Italien?", 
        answers: [
            {text: "Socialdemokratisk", correct: false},
            {text: "Liberalistisk", correct: false},
            {text: "Kristendemokratisk", correct: true},
            {text: "Selektiv", correct: false}
        ],
        explanation: "Italien har den kristendemokratiske model, så mange af deres ydelser er opdelt i “kasser”."
    },
    {
        question: "Hvorfor har vi lav arbejdslovgivningsbeskyttelse, men høj arbejdsløshedsunderstøttelse i Danmark sammenlignet med andre lande?", 
        answers: [
            {text: "Danmark har valgt at fokusere på at holde arbejdsstyrken lav og dermed begrænse antallet af ansatte, som har brug for beskyttelse.", correct: false},
            {text: "Høj arbejdsløshedsunderstøttelse skyldes, at de fleste lønmodtagere er fastansatte og sjældent bliver afskediget, hvilket gør beskyttelseslovgivning overflødig.", correct: false},
            {text: "Danmark giver mere økonomisk støtte til arbejdsløse for at tiltrække udenlandsk arbejdskraft, hvilket gør lav beskyttelse af arbejdstagere til et kompromis.", correct: false},
            {text: "Danmark anvender en “flexicurity”-model, hvor lav arbejdsmarkedsbeskyttelse kombineres med høj arbejdsløshedsunderstøttelse og aktiv arbejdsmarkedspolitik.", correct: true}
        ],
        explanation: "Flexicurity-modellen gør det let for arbejdsgivere at ansætte og afskedige medarbejdere, hvilket skaber fleksibilitet på arbejdsmarkedet. Samtidig sikrer den høje arbejdsløshedsunderstøttelse økonomisk tryghed for dem, der mister jobbet. Modellen suppleres med aktiv arbejdsmarkedspolitik, som hjælper arbejdsløse hurtigt tilbage i arbejde gennem uddannelse og rådgivning. Denne kombination fremmer både økonomisk effektivitet og social tryghed."
    },
    {
        question: "Hvilken velfærdsstat bruger mindst penge på sociale ydelser?", 
        answers: [
            {text: "Selektiv", correct: false},
            {text: "Kristendemokratisk", correct: false},
            {text: "Socialdemokratisk", correct: false},
            {text: "Liberalistisk", correct: true}
        ],
        explanation: "Den liberalistiske velfærdsstat tilbyder mindre sociale rettigheder og mindre ydelser end de andre modeller."
    },
    {
        question: "I hvilket perspektiv anses borgeren som medskaber af velfærden?", 
        answers: [
            {text: "Magtressourceperspektivet", correct: false},
            {text: "Brugerperspektivet", correct: false},
            {text: "Samproduktion", correct: true},
            {text: "Skønsperspektivet", correct: false}
        ],
        explanation: "Her anses borgeren som medskaber af velfærd, både som substitution for offentligt ansatte og som komplementær støtte."
    },
    {
        question: "Hvad beskriver korporatisme, privilegeret pluralisme og ren pluralisme?", 
        answers: [
            {text: "Graden af styrelser som inddrages i implementeringen af lov", correct: false},
            {text: "Graden og formen af interesseorganisationernes inddragelse i de politiske beslutninger", correct: true},
            {text: "Valgsystemerne rundt om i verden", correct: false},
            {text: "Politikkernes holdning til beslutningsprocesser på et kommunalt niveau", correct: false}
        ],
        explanation: "Det er netop graden og formen af inddragelsen som korporatisme, privilegeret pluralisme og ren pluralisme beskriver. Korporatisme beskriver når organisationer får en fast plads ved bordet, mens de to former for pluralisme altså ikke giver organisationerne en plads, men heller ikke fratager dem deres stemme"
    },
    {
        question: "Hvilken paragraf i grundloven beskriver magtens tredeling?", 
        answers: [
            {text: "Paragraf 3", correct: true},
            {text: "Paragraf 33", correct: false},
            {text: "Paragraf 1", correct: false},
            {text: "Paragraf 96", correct: false}
        ],
        explanation: "Paragraf 3 i grundloven beskriver magtens tredeling, altså den dømmende, lovgivende og udøvende."
    },
    {
        question: "Hvilken rettighed er det der sikre Hells Angels eksistens?", 
        answers: [
            {text: "Trosfriheden", correct: false},
            {text: "Ejendomsrettens ukrænkelighed", correct: false},
            {text: "Foreningsfriheden", correct: true},
            {text: "Retten til understøttelse", correct: false}
        ],
        explanation: "Foreningsfriheden er sat i verden for at beskytte foreninger fra statens indblanding, denne kan kun ”tilsidesættes” hvis foreningen har til formål at udføre vold eller andet ulovligt. Det har ikke været muligt for den danske stat at bevise at Hells Angels er andet end en motorcykel klub."
    },
    {
        question: "Hvad er den danske pendant til Europa-Parlamentet?", 
        answers: [
            {text: "Regeringen", correct: false},
            {text: "Domstolene", correct: false},
            {text: "Folketinget", correct: true},
            {text: "Kommunalbestyrelsen", correct: false}
        ],
        explanation: "Ligesom i Europa-Parlamentet er alle medlemmer folkevalgte, der er også lignede gruppe-dannelser i både folketinget og parlamentet."
    },
    {
        question: "Hvad beskriver efficienshypotesen?", 
        answers: [
            {text: "Efficienshypotesen hævder, at høj arbejdsmobilitet gør, at alle lande bliver nødt til at tilbyde de samme sociale ydelser for at tiltrække arbejdskraft.", correct: false},
            {text: "Efficienshypotesen beskriver, at globalisering presser stater til at reducere offentlige udgifter og velfærdsordninger for at forbedre konkurrenceevnen.", correct: true},
            {text: "Hypotesen antyder, at globaliseringen fører til en ensartet afvikling af alle velfærdsstater, da de ikke længere er konkurrencedygtige.", correct: false},
            {text: "Efficienshypotesen siger, at jo større en velfærdsstat er, jo lavere bliver landets økonomiske vækst på grund af høje skatter.", correct: false}
        ],
        explanation: "Ifølge efficienshypotesen betyder globalisering, at stater konkurrerer om investeringer og kapital. For at tiltrække virksomheder og forhindre udflytning af kapital kan lande blive nødt til at reducere skatter og nedskalere deres velfærdsordninger. Hypotesen understreger derfor, at økonomisk konkurrence skaber et pres for at effektivisere den offentlige sektor og mindske omkostningerne ved velfærdsstaten."
    }
];

// Get the elements where we want to change the text
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const explanationElement = document.getElementById("explanation");
const scoreElement = document.getElementById("score-counter");
const startButton = document.getElementById("start-btn");

// Definition of variables
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// Function shows the text of the questions
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answer-btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Function that resets the buttons
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Fuction that looks at the selected answer and validates it
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score ++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    explanationElement.innerHTML = questions[currentQuestionIndex].explanation;
    scoreElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    explanationElement.style.display = "block";
}

// Shows the score in the question element
function showScore(){
    //resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

// Function that either shows the next question or shows the score in the question element
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
        explanationElement.style.display = "none";
    }
    else{
        showScore();
    }
}

// Eventlistener fot the next button
nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        explanationElement.style.display = "none";
        startQuiz();
    }
});

// Starts the quiz when the button is pressed
startButton.addEventListener("click", ()=> {
    startQuiz();
    startButton.style.display = "none";
});