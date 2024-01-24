import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherData, setData } from "../redux/slices/weatherSlice";
import data from "../dataCity/cities.json";
function Header() {
  const dispatch = useDispatch();
  const citiesData = useSelector((state) => state.citiesData);

  const handleOptions = (e) => {
    dispatch(fetchWeatherData(e.target.value));
  };

  useEffect(() => {
    const cityName = "Adana";
    dispatch(fetchWeatherData(cityName));
  }, [dispatch]);

  // Veriyi kullanarak istediğiniz işlemleri yapabilirsiniz
  useEffect(() => {
    if (citiesData && citiesData.length > 0) {
      // citiesData'nın tanımlı ve içeriği varsa istediğiniz işlemleri yapabilirsiniz
      console.log("Cities Data:", citiesData);
    }
  }, [citiesData]);

  return (
    <header onClick={handleOptions} className="header">
      <select className="header__city" name="turkishCities" id="turkishCities">
        <option value="Adana">Adana</option>
        <option value="Adıyaman">Adıyaman</option>
        <option value="Afyonkarahisar">Afyonkarahisar</option>
        <option value="Ağrı">Ağrı</option>
        <option value="Amasya">Amasya</option>
        <option value="Ankara">Ankara</option>
        <option value="Antalya">Antalya</option>
        <option value="Artvin">Artvin</option>
        <option value="Aydın">Aydın</option>
        <option value="Balıkesir">Balıkesir</option>
        <option value="Bilecik">Bilecik</option>
        <option value="Bingöl">Bingöl</option>
        <option value="Bitlis">Bitlis</option>
        <option value="Bolu">Bolu</option>
        <option value="Burdur">Burdur</option>
        <option value="Bursa">Bursa</option>
        <option value="Çanakkale">Çanakkale</option>
        <option value="Çankırı">Çankırı</option>
        <option value="Çorum">Çorum</option>
        <option value="Denizli">Denizli</option>
        <option value="Diyarbakır">Diyarbakır</option>
        <option value="Edirne">Edirne</option>
        <option value="Elâzığ">Elâzığ</option>
        <option value="Erzincan">Erzincan</option>
        <option value="Erzurum">Erzurum</option>
        <option value="Eskişehir">Eskişehir</option>
        <option value="Gaziantep">Gaziantep</option>
        <option value="Giresun">Giresun</option>
        <option value="Gümüşhane">Gümüşhane</option>
        <option value="Hakkâri">Hakkâri</option>
        <option value="Hatay">Hatay</option>
        <option value="Isparta">Isparta</option>
        <option value="Mersin">Mersin</option>
        <option value="İstanbul">İstanbul</option>
        <option value="İzmir">İzmir</option>
        <option value="Kahramanmaraş">Kahramanmaraş</option>
        <option value="Karabük">Karabük</option>
        <option value="Karaman">Karaman</option>
        <option value="Kars">Kars</option>
        <option value="Kastamonu">Kastamonu</option>
        <option value="Kayseri">Kayseri</option>
        <option value="Kırıkkale">Kırıkkale</option>
        <option value="Kırklareli">Kırklareli</option>
        <option value="Kırşehir">Kırşehir</option>
        <option value="Kocaeli">Kocaeli</option>
        <option value="Konya">Konya</option>
        <option value="Kütahya">Kütahya</option>
        <option value="Malatya">Malatya</option>
        <option value="Manisa">Manisa</option>
        <option value="Mardin">Mardin</option>
        <option value="Muğla">Muğla</option>
        <option value="Muş">Muş</option>
        <option value="Nevşehir">Nevşehir</option>
        <option value="Niğde">Niğde</option>
        <option value="Ordu">Ordu</option>
        <option value="Osmaniye">Osmaniye</option>
        <option value="Rize">Rize</option>
        <option value="Sakarya">Sakarya</option>
        <option value="Samsun">Samsun</option>
        <option value="Siirt">Siirt</option>
        <option value="Sinop">Sinop</option>
        <option value="Sivas">Sivas</option>
        <option value="Şanlıurfa">Şanlıurfa</option>
        <option value="Şırnak">Şırnak</option>
        <option value="Tekirdağ">Tekirdağ</option>
        <option value="Tokat">Tokat</option>
        <option value="Trabzon">Trabzon</option>
        <option value="Tunceli">Tunceli</option>
        <option value="Uşak">Uşak</option>
        <option value="Van">Van</option>
        <option value="Yalova">Yalova</option>
        <option value="Yozgat">Yozgat</option>
      </select>

      <h1 className="header__title">Weather App</h1>
    </header>
  );
}

export default Header;
