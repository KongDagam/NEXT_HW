const input = document.querySelector("#city");
const button = document.querySelector("#submit");
const weatherBox1 = document.querySelector("#weatherBox1");

const API_KEY = "032d87ffb8fa739346dac237caf76bb5";

button.addEventListener("click", async () => {
  //input의 값을 가져와서 도시이름으로 url에 넣는다.
  const city = input.value;

  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    console.log(res);

    //res에서 원하는 값 가져오기
    const { main, description, icon } = res.data.weather[0];
    const temp = Math.round(res.data.main.temp - 273.15);
    const name = res.data.name;
    const tempMax = Math.round(res.data.main.temp_max - 273.15);
    const tempMin = Math.round(res.data.main.temp_min - 273.15);
    const humidity = Math.round(res.data.main.humidity);

    //사용자에게 보여주기
    weatherBox1.innerHTML = `
      <div class="text">
        <div class="name"><strong>${name}</strong> </div>
        <img class="icon" src="http://openweathermap.org/img/w/${icon}.png">
        <div class="description">·날씨: ${description}</div>
        <div class="temp">·기온: ${temp}°C</div>
        <div class="temp_max">·최고기온: ${tempMax}°C</div>
        <div class="temp_min">·최저기온: ${tempMin}°C</div>
        <div class="humidity">·습도: ${humidity}%</div>
      </div>
    `;

  } catch (error) {
    console.log(error);
  }
});

//세계 도시
button.addEventListener("click", async () => {
  const city1 = "Paris";
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${API_KEY}`
      );
      console.log(res);

      //res에서 원하는 값 가져오기
      const { main, description, icon } = res.data.weather[0];
      const temp = Math.round(res.data.main.temp - 273.15);
      const name = res.data.name;
      const tempMax = Math.round(res.data.main.temp_max - 273.15);
      const tempMin = Math.round(res.data.main.temp_min - 273.15);
      const humidity = Math.round(res.data.main.humidity);
      
      weatherBox2.innerHTML = `
        <div class="text">
          <div class="name"><strong>${name}</strong></div>
          <img class="icon" src="http://openweathermap.org/img/w/${icon}.png">
          <div class="description">·날씨: ${description}</div>
          <div class="temp">·기온: ${temp}°C</div>
          <div class="temp_max">·최고기온: ${tempMax}°C</div>
          <div class="temp_min">·최저기온: ${tempMin}°C</div>
          <div class="humidity">·습도: ${humidity}%</div>
        </div>
      `;
    } catch (error) {
      console.log(error);
    }
  });
  
  button.addEventListener("click", async () => {
    const city2 = "New York";
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${API_KEY}`
      );
      console.log(res);

      const { main, description, icon } = res.data.weather[0];
      const temp = Math.round(res.data.main.temp - 273.15);
      const name = res.data.name;
      const tempMax = Math.round(res.data.main.temp_max - 273.15);
      const tempMin = Math.round(res.data.main.temp_min - 273.15);
      const humidity = Math.round(res.data.main.humidity);
      

      weatherBox3.innerHTML = `
        <div class="text">
          <div class="name"><strong>${name}</strong></div>
          <img class="icon" src="http://openweathermap.org/img/w/${icon}.png">
          <div class="description">날씨: ${description}</div>
          <div class="temp">·기온: ${temp}°C</div>
          <div class="temp_max">·최고기온: ${tempMax}°C</div>
          <div class="temp_min">·최저기온: ${tempMin}°C</div>
          <div class="humidity">·습도: ${humidity}%</div>
        </div>
      `;
    } catch (error) {
      console.log(error);
    }
  });