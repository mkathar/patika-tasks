import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Tables() {
  const countryData = useSelector((state) => state.countryData);
  const [date, setDate] = useState(0);

  useEffect(() => {
    console.log(countryData);
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var currentDate =
      day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second;
    setDate(currentDate);
  }, [countryData]);

  return (
    <div className="table">
      <div className="table__group table__group--infected">
        <h1 className="table__group__title">Infected</h1>
        <p className="table__group__count">{countryData.activeCases}</p>
        <p className="table__group__updateDate">last updatated at:</p>
        <p className="table__group__date">{date}</p>
        <p className="table__group__desc">
          Number of active cases of Covid-19 {countryData.country}
        </p>
      </div>
      <div className="table__group table__group--recovered">
        <h1 className="table__group__title">Recovered</h1>
        <p className="table__group__count">{countryData.totalRecovered}</p>
        <p className="table__group__updateDate">last updatated at:</p>
        <p className="table__group__date">{date}</p>
        <p className="table__group__desc">
          Number of recoveries from Covid-19 {countryData.country}
        </p>
      </div>
      <div className="table__group table__group--deaths">
        <h1 className="table__group__title">Deaths</h1>
        <p className="table__group__count">{countryData.totaldeaths}</p>
        <p className="table__group__updateDate">last updatated at:</p>
        <p className="table__group__date">{date}</p>
        <p className="table__group__desc">
          Number of deaths caused by Covid-19 {countryData.country}
        </p>
      </div>
      <div className="table__group table__group--active">
        <h1 className="table__group__title">Active</h1>
        <p className="table__group__count">{countryData.totalcases}</p>
        <p className="table__group__updateDate">last updatated at:</p>
        <p className="table__group__date">{date}</p>
        <p className="table__group__desc">
          Number of Active Cases of Covid-19 {countryData.country}
        </p>
      </div>
    </div>
  );
}

export default Tables;
