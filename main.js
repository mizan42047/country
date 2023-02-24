import getData from "./includes/getData";
const appContainer = document.querySelector("#app .container");
const apiurl = `https://restcountries.com/v3.1/all`;
getData(apiurl).then((data) => {
  const firstTimeLoadedData = data.filter((country, index) => {
    return index < 50;
  });
  appContainer.innerHTML = "";
  firstTimeLoadedData.forEach((country) => {
    const { name, flags, languages, region } = country;
    const languges = Object.values(languages).join(",");
    let template = `
      <div class="card">
          <div class="card-header">
            <h1>${name.common}</h1>
            <img src="${flags.svg}" alt="${name.common}" />
          </div>
        <div class="card-body">
          <h2>Languages : ${languges}</h2>
        </div>
        <div class="card-footer">
          <p>Region: ${region}</p>
        </div>
      </div>
    `;

    appContainer.insertAdjacentHTML("beforeend", template);
  })


})