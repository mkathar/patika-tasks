import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCountryData } from "../redux/store";
import { VictoryChart, VictoryTheme, VictoryAxis, VictoryBar } from "victory";

function Chart() {
  const dispatch = useDispatch();
  const handleOptions = (e) => {
    dispatch(updateCountryData(e.target.value));
  };
  const countryData = useSelector((state) => state.countryData);
  const data = [
    { category: "Infected", value: countryData.activeCases, color: "#b0ecfc" },
    {
      category: "Recovered",
      value: countryData.totalRecovered,
      color: "#c7f1bb",
    },
    { category: "Deaths", value: countryData.totaldeaths, color: "#ffc2c3" },
    { category: "Active", value: countryData.totalcases, color: "#ffe4c2" },
  ];

  return (
    <div className="chart">
      <div className="chart__group">
        <select onChange={handleOptions} className="chart__group__select">
          <option value="World">All World</option>
          <option value="China">China</option>
          <option value="Italy">Italy</option>
          <option value="USA">USA</option>
          <option value="India">India</option>
          <option value="Brazil">Brazil</option>
          <option value="Russia">Russia</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
          <option value="Spain">Spain</option>
          <option value="Turkey">Turkey</option>
          <option value="Iran">Iran</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="Japan">Japan</option>
          <option value="South Korea">South Korea</option>
          <option value="Netherlands">Netherlands</option>
          <option value="Mexico">Mexico</option>
          <option value="Argentina">Argentina</option>
          <option value="Poland">Poland</option>
          <option value="South Africa">South Africa</option>
          <option value="Sweden">Sweden</option>
          <option value="Chile">Chile</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Colombia">Colombia</option>
          <option value="Egypt">Egypt</option>
          <option value="Greece">Greece</option>
        </select>
      </div>
      <div className="chart__box">
        <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
          <VictoryAxis
            tickValues={[1, 2, 3, 4]}
            tickFormat={["Infected", "Recovered", "Deaths", "Active"]}
          />
          <VictoryAxis dependentAxis />
          {data.map((point, index) => (
            <VictoryBar
              key={index}
              data={[point]}
              x="category"
              y="value"
              style={{
                data: {
                  fill: point.color,
                  width: 20,
                },
                labels: {
                  fontSize: 12,
                },
              }}
            />
          ))}
        </VictoryChart>
      </div>
    </div>
  );
}

export default Chart;
