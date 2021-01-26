import React, { useEffect, useState } from "react";
import Slide from "react-reveal/Slide";
import moment from "moment";
import Commits from "./GraphComponents/ChartCommits.js";
import Languages from "./GraphComponents/ChartLanguages.js";
import Time from "./GraphComponents/ChartTime.js";

import { colours } from "../Assets/colours.js";

function StatsSection() {
  //------------------------------------------------------------------------------
  //  State
  //------------------------------------------------------------------------------

  let [labelsState, setLabels] = useState({ labels: ["test"] });
  let [commitsState, setCommits] = useState({ commits: [0] });

  let [langDataState, setLangData] = useState({ dataSet: [0] });

  let [datesState, setDates] = useState({ dates: ["test"] });
  let [datesComState, setDatesCom] = useState({ datesCom: [0] });
  let [datesMerState, setDatesMer] = useState({ datesMer: [0] });
  let [datesCreState, setDatesCre] = useState({ datesCre: [0] });

  useEffect(() => {
    //Variables
    const token = process.env.REACT_APP_API_KEY;
    const headers = {
      Authorization: "token " + token.toString(),
    };
    const options = {
      method: "GET",
      headers: headers,
    };

    let url = `https://api.github.com/users/franklinumeobi/repos?per_page=100`;
    let urlT = "https://api.github.com/rate_limit";
    //let limit;
    //Fetch all my repos
    fetch(urlT, { options })
      .then((response) => response.json())
      .then((data) => {
        //limit = data; //Rate Limit


        fetch(url, { options })
          .then((response) => response.json())
          .then((data) => {
            getDataForPieChart(data, options);
            getDataForBarChart(data, options);
            getDataForLineChart(options);
          });

        //console.log(limit);
      });
  }, []);
  //------------------------------------------------------------------------------
  //  Functions
  //------------------------------------------------------------------------------

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  function getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format("YYYY-MM-DD"));
      currentDate = moment(currentDate).add(1, "days");
    }
    return dateArray;
  }

  //------------------------------------------------------------------------------
  //  Graph Functions
  //------------------------------------------------------------------------------

  function getDataForPieChart(data, options) {
    let labels = [];
    let commits = [];
    for (let i = 0; i < data.length; i++) {
      let name = data[i].name;
      let url2 = `https://api.github.com/repos/franklinumeobi/${name}/commits?per_page=100`;
      fetch(url2, { options })
        .then((response) => response.json())
        .then((data2) => {
          let commitsInfo = data2.length;
          commits.push(commitsInfo);
          labels.push(data[i].name);
        });
    }
    setLabels({ labels });
    setCommits({ commits });
  }

  function getDataForBarChart(data, options) {
    let languages = new Set();
    let repoLangObj = [];
    let dataset = [];

    let urlNull = `https://api.github.com/repos/franklinUmeObi/PortfolioWebsiteV3/languages`;
    fetch(urlNull, { options })
      .then((response) => response.json())
      .then((dataNull) => {
        for (let i = 0; i < data.length; i++) {
          let numL = languages.size;

          let url = `https://api.github.com/repos/franklinUmeObi/${data[i].name}/languages`;
          fetch(url, { options })
            .then((response) => response.json())
            .then((data2) => {
              repoLangObj.push(data2);
              let keyArr = Object.keys(data2);
              for (let j = 0; j < keyArr.length; j++) languages.add(keyArr[j]);

              //Move bottom code here

              if (languages.size !== numL) {
                let l = Array.from(languages);
                for (let ii = 0; ii < l.length; ii++) {
                  let obj = {
                    label: l[ii],
                    data: [],
                    backgroundColor: colours[ii],
                  };

                  for (let j = 0; j < repoLangObj.length; j++) {
                    //console.log(repoLangObj[j]);
                    //console.log(l[ii]);
                    if (l[ii] in repoLangObj[j]) {
                      let codeLanguage = l[ii];
                      //console.log(codeLanguage);//Lang as String

                      let num = repoLangObj[j][codeLanguage] / 1000;
                      //console.log(num);// value associated with lang

                      obj.data.push(num);
                    } else obj.data.push(0);
                  }
                  if (obj.data.length === 28) dataset.push(obj);

                  //console.log(dataset);
                  if (dataset.length === languages.size) {
                    //At end of the fetches
                    // for (let i = 0; i < dataset.length; i++) 
                    // {
                    //   let singleLang = [];
                    //   for (let i2 = 0; i2 < dataset.length; i2++) 
                    //   {
                    //     singleLang.push(dataset[i2].data[i]);
                    //   }
                    //   console.log(singleLang);

                    //   let numbers = singleLang,
                    //     ratio = Math.max.apply(Math, numbers) / 100,
                    //     le = numbers.length,
                    //     j;
                    //   for (j = 0; j < le; j++) 
                    //   {       
                    //       dataset[j].data[i] = Math.round(numbers[j] / ratio);
                    //   }
                    // }
                    console.log(dataset);
                    setLangData({ dataset });
                  }
                }
              }
            });
        }
      });
  }

  function getDataForLineChart(options) {
    let datesX = [];
    let datesX2 = [];
    let datesX3 = [];
    let url3 =
      "https://api.github.com/users/franklinumeobi/events?per_page=100&page=1";
    let url4 =
      "https://api.github.com/users/franklinumeobi/events?per_page=100&page=2";
    fetch(url3, { options })
      .then((response) => response.json())
      .then((data3) => {
        for (let i = 0; i < data3.length; i++) {
          if (data3[i].type === "PushEvent") {
            let date = data3[i].created_at.substring(0, 10);
            datesX.push(date);
          } else if (data3[i].type === "PullRequestEvent") {
            let date = data3[i].created_at.substring(0, 10);
            datesX2.push(date);
          } else if (data3[i].type === "CreateEvent") {
            let date = data3[i].created_at.substring(0, 10);
            datesX3.push(date);
          }
        }
      });
    fetch(url4, { options })
      .then((response) => response.json())
      .then((data4) => {
        // console.log(data4);
        for (let i = 0; i < data4.length; i++) {
          if (data4[i].type === "PushEvent") {
            let date = data4[i].created_at.substring(0, 10);
            datesX.push(date);
          } else if (data4[i].type === "PullRequestEvent") {
            let date = data4[i].created_at.substring(0, 10);
            datesX2.push(date);
          } else if (data4[i].type === "CreateEvent") {
            let date = data4[i].created_at.substring(0, 10);
            datesX3.push(date);
          }
        }
        let datesY = new Set(datesX);
        let dates = Array.from(datesY);
        dates = dates.reverse();
        let day1 = dates[0];
        let day2 = dates[dates.length];
        dates = getDates(day1, day2);

        let commitsPerDay = [];
        let mergePerDay = [];
        let createPerDay = [];

        for (let i = 0; i < dates.length; i++) {
          commitsPerDay.push(0);
          mergePerDay.push(0);
          createPerDay.push(0);
        }

        for (let i = 0; i < commitsPerDay.length; i++) {
          for (let j = 0; j < datesX.length; j++) {
            if (dates[i] === datesX[j]) commitsPerDay[i]++;
            if (dates[i] === datesX2[j]) mergePerDay[i]++;
            if (dates[i] === datesX3[j]) createPerDay[i]++;
          }
        }
        //commitsPerDay = commitsPerDay.reverse()
        setDatesCom({ commitsPerDay });
        setDatesMer({ mergePerDay });
        setDatesCre({ createPerDay });

        for (let j = 0; j < dates.length; j++) {
          dates[j] = moment(dates[j], "YYYY-MM-DD").format("MMM Do YY");
        }

        setDates({ dates });
      });
  }

  //------------------------------------------------------------------------------
  //  Variables
  //------------------------------------------------------------------------------
  let randomColours = shuffle(colours);

  return (
    <Slide right cascade>
      <div className="section">
        <div className="intro glass">
          <h2 className="about-introText">Stats</h2>
        </div>

        <div className="chartContainer1 glass">
          <h2 className="chartTitle">Number of commits in my repositories</h2>
          <Commits
            commitsState={commitsState}
            labelsState={labelsState}
            coloursFill={randomColours}
            coloursBorder={randomColours}
          />
        </div>

        <div className="chartContainer1 glass">
          <h2 className="chartTitle">Languages in my repositories</h2>
          <Languages
            labelsState={labelsState}
            coloursFill={randomColours}
            coloursBorder={randomColours}
            langDataState={langDataState}
          />
        </div>

        <div className="chartContainer1 glass">
          <h2 className="chartTitle">My last ~3 months of Github Activity</h2>
          <Time
            coloursFill={randomColours}
            coloursBorder={randomColours}
            datesState={datesState}
            datesComState={datesComState}
            datesMerState={datesMerState}
            datesCreState={datesCreState}
          />
        </div>
      </div>
    </Slide>
  );
}

export default StatsSection;
