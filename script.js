function welcomeMessage(){
      alert('Welcome SafeNest 🌸')
    }

    function toggleTheme(){
      document.body.classList.toggle('dark')
    }

    function showMood(mood){

      let result = document.getElementById('mood-result')

      if(mood === 'sad'){

        result.innerHTML = `
          <h3>🌧️ You are stronger than this moment.</h3>
          <p>🎵 Music: Soft Piano</p>
          <p>🧘 Meditation: Deep Breathing</p>
          <p>🤍 Healing takes time.</p>
          <p>🌿 Activity: Drink tea and journal your feelings.</p>
        `
      }

      else if(mood === 'anxious'){

        result.innerHTML = `
          <h3>🌿 You are safe right now.</h3>
          <p>🎵 Music: Forest Sounds</p>
          <p>🧘 Meditation: Box Breathing</p>
          <p>🤍 This feeling will pass.</p>
          <p>🌿 Activity: Stretch and walk slowly.</p>
        `
      }

      else if(mood === 'angry'){

        result.innerHTML = `
          <h3>🔥 Pause before reacting.</h3>
          <p>🎵 Music: Calm Frequency</p>
          <p>🧘 Meditation: Slow Deep Breathing</p>
          <p>🤍 Your emotions are valid.</p>
          <p>🌿 Activity: Exercise and release stress safely.</p>
        `
      }

      else{

        result.innerHTML = `
          <h3>☀️ Keep shining beautifully.</h3>
          <p>🎵 Music: Happy Lofi</p>
          <p>🧘 Gratitude Meditation</p>
          <p>🌿 Share kindness with someone today.</p>
        `
      }

    }

    let count = 0

    function increaseCounter(){

      count++

      document.getElementById('count').innerText = count

    }

    function toggleTips(){

      let tips = document.getElementById('tips')

      if(tips.style.display === 'none'){

        tips.style.display = 'block'

      }

      else{

        tips.style.display = 'none'

      }

    }

    function saveJournal(){

      let text = document.getElementById('journalText').value

      if(text === ''){

        alert('Please write something first')

        return
      }

      let entries = JSON.parse(localStorage.getItem('journalEntries')) || []

      entries.push(text)

      localStorage.setItem('journalEntries', JSON.stringify(entries))

      document.getElementById('journalText').value = ''

      displayEntries()

    }

   function displayEntries(){

  let entries = JSON.parse(localStorage.getItem('journalEntries')) || []

  let container = document.getElementById('entries')

  container.innerHTML = ''

  entries.forEach((entry,index)=>{

    container.innerHTML += `
      <div class="entry">

        <p>${entry}</p>

        <div>

          <button onclick="editEntry(${index})">
            Edit
          </button>

          <button onclick="deleteEntry(${index})">
            Delete
          </button>

        </div>

      </div>
    `
  })

}
function editEntry(index){

  let entries = JSON.parse(localStorage.getItem('journalEntries')) || []

  let updatedText = prompt('Edit your journal entry:', entries[index])

  if(updatedText !== null && updatedText.trim() !== ''){

    entries[index] = updatedText

    localStorage.setItem('journalEntries', JSON.stringify(entries))

    displayEntries()

  }

}
    function deleteEntry(index){

      let entries = JSON.parse(localStorage.getItem('journalEntries')) || []

      entries.splice(index,1)

      localStorage.setItem('journalEntries', JSON.stringify(entries))

      displayEntries()

    }

    displayEntries()

    let bubbles = 0

    function popBubble(){

      bubbles++

      document.getElementById('bubbleCount').innerText = bubbles

      let bubble = document.querySelector('.bubble')

      bubble.classList.add('pop-animation')

      setTimeout(()=>{

        bubble.classList.remove('pop-animation')

      },300)

    }

    document.getElementById('communityForm').addEventListener('submit',function(e){

      e.preventDefault()

      let name = document.getElementById('name').value

      let email = document.getElementById('email').value

      let password = document.getElementById('password').value

      let message = document.getElementById('formMessage')

      if(name === '' || email === '' || password === ''){

        message.innerHTML = '❌ Please fill all fields'

        return
      }

      let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

      if(!email.match(emailPattern)){

        message.innerHTML = '❌ Invalid Email Format'

        return
      }

      localStorage.setItem('userName',name)
      localStorage.setItem('userEmail',email)

      message.innerHTML = '✅ Successfully Joined MindHaven'

      alert('Welcome to the community 🌿')

    })
async function getQuote(){

  try {

    let response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=22.36&longitude=91.78&current_weather=true"
    )

    let data = await response.json()

    let temp = data.current_weather.temperature
    let wind = data.current_weather.windspeed

    document.getElementById('quote').innerHTML =
      `🌤️ Today's Weather:<br>
       🌡️ Temperature: ${temp}°C<br>
       💨 Wind Speed: ${wind} km/h`

  } catch (error) {

    document.getElementById('quote').innerText =
      "⚠️ Weather data not available"

  }
}
document.getElementById('loginForm').addEventListener('submit',function(e){

  e.preventDefault()

  let email = document.getElementById('loginEmail').value

  let password = document.getElementById('loginPassword').value

  let loginMessage = document.getElementById('loginMessage')

  if(email === '' || password === ''){

    loginMessage.innerHTML = '❌ Fill all login fields'

    return

  }

  localStorage.setItem('loggedInUser', email)

  loginMessage.innerHTML = '✅ Login Successful'

})

function logoutUser(){

  localStorage.removeItem('loggedInUser')

  document.getElementById('loginMessage').innerHTML =
  '🚪 Logged Out Successfully'

}
function updateGreeting(){

  let hour = new Date().getHours()

  let greeting = ''

  if(hour < 12){

    greeting = '☀️ Good Morning'

  }

  else if(hour < 18){

    greeting = '🌤️ Good Afternoon'

  }

  else{

    greeting = '🌙 Good Evening'

  }

  document.getElementById('greeting').innerText =
  greeting

}

updateGreeting()

let progress = 0

function increaseProgress(){

  if(progress < 100){

    progress += 10

    document.getElementById('progressBar').style.width =
    progress + '%'

    document.getElementById('progressBar').innerText =
    progress + '%'

  }

}

function chatReply(){

  let message =
  document.getElementById('userMessage').value.toLowerCase()

  let response = ''

  if(message.includes('sad')){

    response =
    '💜 You are not alone. Try deep breathing and calming music.'

  }

  else if(message.includes('stress')){

    response =
    '🌿 Take a short break and relax.'

  }

  else if(message.includes('anxious')){

    response =
    '☁️ Slow breathing can calm your nervous system.'

  }

  else{

    response =
    '✨ Keep taking care of yourself every day.'

  }

  document.getElementById('chatResponse').innerText =
  response

}

let quiz = 0

function quizScore(points){

  quiz += points

  document.getElementById('quizResult').innerText =
  quiz

}

setTimeout(()=>{

  alert('🌿 Reminder: Drink water and relax.')

},5000)