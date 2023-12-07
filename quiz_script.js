
var user_score_info = document.getElementById('user_score_info')
var question_awnser = document.getElementsByClassName("question_awnser")
var user_window = document.getElementsByClassName("user_window")
var user_window1 = document.getElementById("user_window")
var question_navigate_buttons = document.getElementsByClassName("question_navigate_buttons")
var question_text = document.getElementById("question_text")
var down_score_percent = document.getElementById("down_score_percent")
var down_score_med = document.getElementById("down_score_med")
var global_score_info = document.getElementById("global_score_info")
var score_rank_lines = document.getElementById("score_rank_lines")
var score_rank_description = document.getElementById("score_rank_description")
var user_time_clock = document.getElementById("user_time_clock")
var global_window_setter = true
var user_time = 0
var questions_list = [
    { text: "Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?", awnser: [{ correct: 0, awnser_text: "Tem entre 2 a 4 litros. São retirados 450 mililitros" }, { correct: 1, awnser_text: "Tem entre 4 a 6 litros. São retirados 450 mililitros" }, { correct: 0, awnser_text: "Tem 10 litros. São retirados 2 litros" }, { correct: 0, awnser_text: "Tem 7 litros. São retirados 1,5 litros" }, { correct: 0, awnser_text: "Tem 0,5 litros. São retirados 0,5 litros" },] },
    { text: "Segundo a lenda, quantas vidas um gato teria ?", awnser: [{ correct: 0, awnser_text: "Seis" }, { correct: 1, awnser_text: "Sete" }, { correct: 0, awnser_text: "Oito" }, { correct: 0, awnser_text: "Nove" }, { correct: 0, awnser_text: "Dez" },] },
    { text: "Qual é o metal mais caro do mundo?", awnser: [{ correct: 0, awnser_text: "Ouro (Au)" }, { correct: 0, awnser_text: "Platina (Pt)" }, { correct: 1, awnser_text: "Ródio (Rh)" }, { correct: 0, awnser_text: "Paládio (Pd)" }, { correct: 0, awnser_text: "Cobalto (Co)" },] },
    { text: "Qual é o principal componente da gelatina?", awnser: [{ correct: 0, awnser_text: "Amido" }, { correct: 1, awnser_text: "Pequitina" }, { correct: 0, awnser_text: "Celulose" }, { correct: 0, awnser_text: "Glicogênio" }, { correct: 0, awnser_text: "Quitina" },] },
    { text: "Quantos dias há em 3 semanas?", awnser: [{ correct: 0, awnser_text: "Sete" }, { correct: 0, awnser_text: "Quatorze" }, { correct: 1, awnser_text: "Vinte e um" }, { correct: 0, awnser_text: "Vinte e oito" }, { correct: 0, awnser_text: "Pi (3.141516...)" },] },
]
var question_number = Number.parseInt(Math.random() * questions_list.length)
var questions_listed = []
var questions_marked = []
var awnser_score = [0, 0, 0, 0, 0]
var user_score = 0
var rank_taked
var users_rank = []
var users_rank_page = 0
function open_global_window(element) {
    if (global_window_setter) {
        element.style.opacity = 0
        global_score_info.style.width = "40%"
        user_window1.style.width = '80%'
        user_score_info.style.width = '50%'
        setTimeout(() => {
            for (var i = 0; i <= global_score_info.children.length - 1; i++) {
                global_score_info.children[i].style.display = "flex"
                global_score_info.children[i].style.opacity = 1
            }
        }, 500);
        generate_rank(users_rank[users_rank_page])
    }
}
function rank_navigate(element) {
    if (element.id == "next_rank") {
        if (users_rank_page <= users_rank.length - 2) {
            users_rank_page++
        }
    } else if (element.id == "back_rank") {
        if (users_rank_page >= 1) {
            users_rank_page--
        }
    }
    generate_rank(users_rank[users_rank_page])
}
function generate_rank(rank_list) {
    var lines_count = score_rank_lines.children.length - 1
    for (var i = 1; i <= lines_count; i++) {
        score_rank_lines.children[i].style.opacity = 0
        setTimeout(() => {
            score_rank_lines.removeChild(score_rank_lines.children[1])
        }, 250);
    }
    setTimeout(() => {
        console.log("sdfsdsdvdsva");
        for (var i = rank_list[0]; i <= rank_list[1]; i++) {
            console.log("asdfasfasd");
            var score_rank_line_class = document.createElement("div")
            score_rank_line_class.classList.add("score_rank_line")
            var score_name = document.createElement("div")
            score_name.id = "score_name"
            var score_name_text = document.createElement("div")
            score_name_text.id = "score_name_text"
            //console.log(rank_taked[i]);
            //console.log(rank_taked[i][0]);
            score_name_text.innerHTML = rank_taked[i][0]
            score_name.appendChild(score_name_text)
            var score_number = document.createElement("div")
            score_number.id = "score_number"
            score_number.innerHTML = rank_taked[i][1]
            var score_time = document.createElement("div")
            score_time.id = "score_time"
            console.log(rank_taked[i][2]);
            user_time = rank_taked[i][2]
            if (user_time <= 59) {
                user_time = user_time <= 9 ? `00:0${user_time}` : `00:${user_time}`
            } else {
                user_time = `${Number.parseInt(user_time / 60)}:${user_time % 60 <= 9 ? "0" + user_time % 60 : user_time % 60}`
            }
            score_time.innerHTML = user_time
            score_rank_line_class.appendChild(score_name)
            score_rank_line_class.appendChild(score_number)
            score_rank_line_class.appendChild(score_time)
            score_rank_lines.appendChild(score_rank_line_class)
        }
        score_rank_description.innerHTML = `showing [${rank_list[0] + 1} - ${rank_list[1] + 1}] users`
    }, 250);
}
var clock_timing = setInterval(() => {
    user_time++
    if (user_time <= 59) {
        user_time_clock.innerHTML = `00:${user_time <= 9 ? "0" + user_time : user_time}`
    } else {
        user_time_clock.innerHTML = `${Number.parseInt(user_time / 60)}:${user_time % 60 <= 9 ? "0" + (user_time % 60) : user_time % 60}`
    }
}, 1000);
function awnsering(element) {
    for (var i = 0; i <= question_awnser.length - 1; i++) {
        question_awnser[i].style.backgroundColor = "transparent"
        question_awnser[i].style.color = "white"
        question_awnser[i].children[0].checked = false
    }
    element.style.backgroundColor = "rgb(234, 234, 234)"
    element.style.color = "black"
    element.children[0].checked = true
}
function generate_question(mark_question, question_marked) {
    question_text.innerHTML = questions_list[question_number].text
    question_text.dataset.question_number = question_number
    for (var i = 0; i <= question_awnser.length - 1; i++) {
        question_awnser[i].style.backgroundColor = "transparent"
        question_awnser[i].dataset.correct = questions_list[question_number].awnser[i].correct
        question_awnser[i].children[0].checked = false
        question_awnser[i].children[1].innerHTML = questions_list[question_number].awnser[i].awnser_text
    }
    //console.log(questions_listed);
    if (!mark_question) {
        if (question_marked !== false) {
            question_awnser[question_marked].children[0].checked = true
            question_awnser[question_marked].style.backgroundColor = "rgb(234, 234, 234)"
        }
    } else {
        questions_listed.push(question_number)
    }
}
generate_question(true, false)
function question_navigate(element) {
    var question_selected = Number(question_text.dataset.question_number)
    var question_location = questions_listed.indexOf(question_selected)
    var question_marked = false
    for (var i = 0; i <= question_awnser.length - 1; i++) {
        if (question_awnser[i].children[0].checked == true) {
            question_marked = i
        }
    }
    if (question_marked !== false) {
        if (question_awnser[question_marked].dataset.correct == 1) {
            awnser_score[question_location] = 1
        }
    }
    if (element.id == "next_button") {
        if (question_location == 0) {
            question_navigate_buttons[0].style.visibility = "visible"
        } else if (question_location == 3) {
            question_navigate_buttons[1].style.display = "none"
            question_navigate_buttons[2].style.display = "flex"
        }
        if (question_location == questions_listed.length - 1) {
            question_number = Number.parseInt(Math.random() * questions_list.length)
            while (questions_listed.some(function (value) { if (value == question_number) { return true } })) {
                question_number = Number.parseInt(Math.random() * questions_list.length)
            }
            questions_marked.push(question_marked)
            generate_question(true, false)
        } else {
            questions_marked[question_location] = question_marked
            question_number = questions_listed[question_location + 1]
            generate_question(false, questions_marked[question_location + 1])
        }
    } else if (element.id == "back_button") {
        if (question_location == 1) {
            question_navigate_buttons[0].style.visibility = "hidden"
        } else if (question_location == 4) {
            question_navigate_buttons[1].style.display = "flex"
            question_navigate_buttons[2].style.display = "none"
        }
        if (question_location == questions_listed.length - 1 && question_location > questions_marked.length - 1) {
            questions_marked.push(question_marked)
        } else {
            questions_marked[question_location] = question_marked
        }
        question_number = questions_listed[question_location - 1]
        //console.log(question_location - 1);
        //console.log(questions_marked[question_location - 1]);
        generate_question(false, questions_marked[question_location - 1])
    } else if (element.id == "finish_button") {
        for (var i in awnser_score) {
            user_score += awnser_score[i]
        }
        clearInterval(clock_timing)
        rank_taker(true)
        var user_percent = (user_score * 100) / 5
        user_window[0].style.opacity = 0
        setTimeout(() => {
            var interval_velocity = 10
            var percent_number = 0
            user_window[0].style.display = "none"
            user_window[1].style.display = "flex"
            user_window[1].style.opacity = 1
            down_score_med.innerHTML = `(0${user_score}/05)`
            var percent_interval = setInterval(() => {
                percent_number++
                down_score_percent.innerHTML = `${percent_number < 10 ? "0" + percent_number : percent_number}%`
                if (percent_number % Number.parseInt(user_percent * 0.05) == 0) {
                    interval_velocity += 15
                }
                if (percent_number == user_percent) {
                    clearInterval(percent_interval)
                    down_score_med.style.marginBottom = "20px"
                }
                if (user_percent == 0) {
                    down_score_percent.innerHTML = `0%`
                    clearInterval(percent_interval)
                    down_score_med.style.marginBottom = "20px"
                }
            }, interval_velocity);
        }, 250);
    }
}
async function rank_taker(action) {
    if (action) {
        //console.log(user_score);
        rank_taked = await fetch(`http://localhost/phpcodes/quiz_daora_php/rank_arm.php?action=0&user_score=${user_score}&user_time=${user_time}`)
        rank_taked = await rank_taked.json()
        rank_taked = rank_taked.sort(function (a, b) {
            if (a[1] != b[1]) {
                return b[1] - a[1]
            } else {
                return a[2] - b[2]
            }
        })
        //console.log(rank_taked);
        var rank_size = rank_taked.length - 1
        if (rank_size <= 9) {
            users_rank.push([0, rank_size])
        } else {
            var rank_page = [0, 9]
            for (var i = 0; i <= number.parseInt(rank_size / 10); i++) {
                users_rank.push(rank_page)
                for (var i2 in rank_page) {
                    rank_page[i2] += 10
                }
            }
            if (users_rank[users_rank.length - 1][1] < rank_size) {
                users_rank.push(users_rank[users_rank.length - 1][1] + 1, rank_size)
            }
        }
    }
}