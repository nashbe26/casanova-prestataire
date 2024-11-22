import React, { useState, useEffect } from "react";
import { useCreate, useGet } from "../../utils/functions";
import "./style.css";
import toast from "react-hot-toast";
import { Button, Img, Input, Text } from "components";
import CustomToast from "../../components/toast";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Media from "./media";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@mui/material";
import { useField } from "@mui/x-date-pickers/internals";
import moment from "moment";
import { TextField } from "@mui/material";

const PrescreatproduitPage = ({ userData, onItemClick }) => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [Description, setDescription] = useState("");
  const [availability, setAvailability] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productSubCat, setProductSubCat] = useState();
  const Create = useCreate();
  const Get = useGet();
  const [filesList, setFilesList] = useState([]);

  const updateFilesList = (newFilesList) => {
    setFilesList(newFilesList);
  };
  const [isDispo, setIsdispo] = useState(false)

  const handleSubmit = async () => {
    
    let data = {
      modelName: "Product",
      title,
      specifications:specification,
      price,
      categorie: selectedCategory,
      subCategorie: productSubCat,
      owner: userData.user._id,
      description: Description,
      images: filesList,
      availibity: availability,
      distances,
      seasonPrice,
      offSeasonPrice,
      morningPrice,
      nightPrice,
      weekendPrice,
      holidayPrice,
      extra
    };

    console.log("ddata", data);
    try {
      const response = await Create(data);
      toast.custom(
        (t) => (
          <CustomToast
            data={t}
            message="Product Created"
            title="Info"
          ></CustomToast>
        ),
        {
          duration: 3000,
        }
      );
      onItemClick("PresProduitPage")

    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  const handleDateChanger = (e) => {

    setAvailability({
      endDate: moment(e[1].toISOString()).format('YYYY-MM-DD HH:mm:ss'),
      startDate: moment(e[0].toISOString()).format('YYYY-MM-DD HH:mm:ss'),
    });
  };

  const [seasonPrice, setSeasonPrice] = useState(0);
  const [offSeasonPrice, setOffSeasonPrice] = useState(0);
  const [morningPrice, setMorningPrice] = useState(0);
  const [nightPrice, setNightPrice] = useState(0);
  const [weekendPrice, setWeekendPrice] = useState(0);
  const [holidayPrice, setHolidayPrice] = useState(0);

  // Calcul du prix total
  const totalPrice = seasonPrice + offSeasonPrice + morningPrice + nightPrice + weekendPrice + holidayPrice;

  // Gestionnaires pour mettre à jour les prix
  const handleSeasonPriceChange = (event) => {
    console.log(event);

    setSeasonPrice(Number(event));
  };

  const handleOffSeasonPriceChange = (event) => {
    setOffSeasonPrice(Number(event));
  };

  const handleMorningPriceChange = (event) => {
    setMorningPrice(Number(event));
  };

  const handleNightPriceChange = (event) => {
    setNightPrice(Number(event));
  };

  const handleWeekendPriceChange = (event) => {
    setWeekendPrice(Number(event));
  };

  const handleHolidayPriceChange = (event) => {
    setHolidayPrice(Number(event));
  };

  useEffect(() => {
    if (!isDispo)
      setAvailability({
        endDate: moment("2040-1-1").format('YYYY-MM-DD HH:mm:ss'),
        startDate: moment("1900-1-1").format('YYYY-MM-DD HH:mm:ss'),
      });


  }, [isDispo])

  const handleCategoryChange = async (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
    // Fetch subcategories based on the selected category
    try {
      const subCategories = await Get("SubCategorie", {
        categorieId: selectedCategory,
      });
      setSubcategories(subCategories);
    } catch (error) {
      console.error("Error fetching subcategories:", error.message);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await Get("Categorie");
        setCategories(categories);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };

    fetchCategories();
  }, []);

  const [distances, setDistances] = useState([{ distance: 0, cost: 0 }]);

  // Fonction pour mettre à jour la distance ou le coût
  const handleChange = (index, field, value) => {
    const updatedDistances = distances.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setDistances(updatedDistances);
  };

  // Fonction pour ajouter un nouveau bloc de distance et de coût
  const addDistanceBlock = () => {
    const lastDistance = distances[distances.length - 1].distance;
    setDistances([...distances, { distance: lastDistance, cost: 0 }]);
  };

  const [extra, setextra] = useState([{ extra: 0, price: 0 }]);

  // Fonction pour mettre à jour la distance ou le coût
  const handleChangeExtra = (index, field, value) => {
    const updatedextra = extra.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setextra(updatedextra);
  };

  // Fonction pour ajouter un nouveau bloc de distance et de coût
  const addExtraBlock = () => {
    const lastDistance = extra[extra.length - 1].extra;
    setextra([...extra, { extra: lastDistance, price: 0 }]);
  };


  const [specification, setspecification] = useState([{}]);

  // Fonction pour mettre à jour la distance ou le coût
  const handleChangeSeci = (index, field, value) => {
    const updatedspecification = specification.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setspecification(updatedspecification);
  };

  // Fonction pour ajouter un nouveau bloc de distance et de coût
  const addSpeciBlock = () => {
    const lastDistance = specification[specification.length - 1].distance;
    setspecification([...specification, {specification:lastDistance }]);
  };

  return (
    <>
      <div className="flex m-auto w-full">
        <div className="flex m-auto w-full justify-center  w-[100%]">
          <div className="bg-white-A700 border-solid flex flex-col items-start justify-end my-auto p-2 py-5 z-[1]" style={{ width: "85%" }}>
            <Text
              className="text-2xl md:text-[0px] text-gray-900_02 sm:text-xl"
              size="txtMontserratRomanSemiBold24"
            >
              Créer un nouveau produit
            </Text>
            <div className="flex flex-col font-montserrat items-start justify-start mt-3 pr-1 py-1 w-full">
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-base text-gray-900_02 w-auto"
                  size="txtMontserratRomanSemiBold16Gray90002"
                >
                  Information Générale
                </Text>
              </div>
            </div>
            <Text
              className="mt-4 text-gray-600_03 text-sm"
              size="txtMontserratRomanRegular14Gray60003"
            >
  Pour commencer à vendre, tout ce dont vous avez besoin est un nom et un prix.
</Text>
            <div className="flex justify-between mt-5">
            <div className="w-[45%]">
              <Text
                className="text-gray-600_03 text-xs"
                size="txtInterSemiBold12"
              >
                <span className="text-gray-600_03 font-montserrat text-left font-semibold">
                  Titre
                </span>
                <span className="text-red-400 font-montserrat text-left font-semibold">
                  *
                </span>
              </Text>
              <Input
                onChange={(e) => setTitle(e)}
                name="input"
                placeholder="Gateau"
                className="font-inter p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
                wrapClassName="border border-gray-200_01 border-solid mt-[11px] rounded-lg w-full"
                shape="round"
                color="gray_50"
                size="lg"
              ></Input>
              <Text
                className="leading-[24.00px] mt-3 text-gray-600_03 text-sm"
                size="txtMontserratRomanRegular14Gray60003"
              >
                
                Donnez à votre produit un titre court et clair.
                50 à 60 caractères sont la longueur recommandée pour les moteurs de recherche.
              </Text>
            </div>
            <div  className="w-[45%]">
              <div id="div1">
                <Text
                  className="text-gray-600_03  text-xs w-auto"
                  size="txtMontserratRomanSemiBold12"
                >
                  Prix :
                </Text>
              </div>

              <div >
                {" "}
                <Input
                  onChange={(e) => setPrice(e)}
                  name="dtCounter"
                  type="Number"
                  placeholder="2000 DT"
                  className="p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
                  wrapClassName="border border-gray-200_01 border-solid mt-[11px] sm:flex-1 rounded-lg sm:w-full"
                  shape="round"
                  color="gray_50"
                  size="lg"
                ></Input>
              </div>
              {isDispo &&
                <div id="div4">
                  {" "}
                  <Calendar
                    onChange={(e) => handleDateChanger(e)}
                    selectRange={true}
                  />
                </div>
              }

            </div>
            </div>
          


            <div className="flex sm:flex-col flex-row font-inter gap-6 items-center justify-between mt-2 w-full"></div>
            <Text
              className="mt-[35px] text-gray-600_03 text-xs"
              size="txtInterSemiBold12"
            >
              <span className="text-gray-600_03 font-montserrat text-left font-semibold">
                Description
              </span>
              <span className="text-red-400 font-montserrat text-left font-semibold">
                *
              </span>
            </Text>
            <textarea
              name="input_One"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Gateaux"
              rows={4}
              style={{ resize: "none", background: "rgb(249 250 251 / var(--tw-bg-opacity))", padding: "11px" }}
              className="round round font-inter border border-gray-200_01 border-solid mt-[9px] rounded-lg w-full p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
            ></textarea>
            <Text
              className="leading-[24.00px] mt-3 text-gray-600_03 text-sm"
              size="txtMontserratRomanRegular14Gray60003"
            >
              <>
                Petite description pour le produit
                <br />
                120-160 characters est recommandée.
              </>
            </Text>
            <div className="w-[100%] flex justify-between pt-5">
              <div className="w-[48%]">
                <Text
                  className="text-gray-600_03  text-xs w-auto"
                  size="txtMontserratRomanSemiBold12"
                >
                  Categories :
                </Text>
                <div className="pt-4" >
                  {" "}
                  <select
                    onChange={handleCategoryChange}
                    placeholder="Categories"
                    value={selectedCategory}
                    style={{ width: "100%", resize: "none", background: "rgb(249 250 251 / var(--tw-bg-opacity))", padding: "11px" }}
                    className="round round font-inter border border-gray-200_01 border-solid mt-[9px] rounded-lg w-full p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
                  >
                    <option disabled value="">
                      Choisir catégories
                    </option>
                    {categories.map((cat) => (
                      <option key={cat._id} value={cat._id}>
                        {cat.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="w-[48%]">

                <Text
                  className="text-gray-600_03 text-xs w-auto"
                  size="txtMontserratRomanSemiBold12"
                >
                  Choisir sous catégories :
                </Text>
                <div className="pt-4" >

                  <select
                    style={{ width: "100%", resize: "none", background: "rgb(249 250 251 / var(--tw-bg-opacity))", padding: "11px" }}
                    className="round round font-inter border border-gray-200_01 border-solid mt-[9px] rounded-lg w-full p-0 placeholder:text-gray-900_02 text-left text-sm w-full"

                    onChange={(e) => setProductSubCat(e.target.value)} placeholder="Subcategories">
                    <option selected disabled>Select sub Categorie</option>
                    {subcategories.map((subcat) => (
                      <option value={subcat._id} key={subcat._id} >
                        {subcat.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>



            </div>

            <br></br>
            <div id="cssportal-grid">
              <div id="div1"> </div>
              <div id="div2"></div>
            </div>

            <Media
              userData={userData}
              filesList={filesList}
              setFilesList={updateFilesList}
            />
            <div className="w-[100%] mb-3">
              <div className="w-full">
                <div className="w-full my-">
                  <p className="text-bold mt-4 mb-3">Saison :</p>
                  <div className="flex justify-between items-center">

                    <div className="w-[48%]">
                      <Text
                        className="text-gray-600_03 text-xs w-auto"
                        size="txtMontserratRomanSemiBold12"
                      >
                        En pleine saison:
                      </Text>
                      <Input
                        name="Number"
                        placeholder="00"
                        className="font-inter p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
                        wrapClassName="border border-gray-200_01 border-solid mt-[11px] rounded-lg w-full"
                        shape="round"
                        color="gray_50"
                        size="lg"
                        onChange={handleSeasonPriceChange}
                      />
                    </div>

                    <div className="w-[48%]">
                      <Text
                        className="text-gray-600_03 text-xs w-auto"
                        size="txtMontserratRomanSemiBold12"
                      >
                        En hors saison:
                      </Text>
                      <Input
                        name="number"
                        className="font-inter p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
                        wrapClassName="border border-gray-200_01 border-solid mt-[11px] rounded-lg w-full"
                        shape="round"
                        color="gray_50"
                        size="lg"
                        placeholder="Prix pour hors saison"
                        onChange={handleOffSeasonPriceChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="my-4 w-full">
                  <p className="text-bold mt-4 mb-3">Période :</p>

                  <div className="flex justify-between items-center">

                    <div className="w-[48%]">
                      <Text
                        className="text-gray-600_03 text-xs w-auto"
                        size="txtMontserratRomanSemiBold12"
                      >
                        Matinée:
                      </Text>
                      <Input
                        name="input"
                        className="font-inter p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
                        wrapClassName="border border-gray-200_01 border-solid mt-[11px] rounded-lg w-full"
                        shape="round"
                        color="gray_50"
                        size="lg"
                        placeholder="Prix pour matinée"
                        onChange={handleMorningPriceChange}
                      />
                    </div>

                    <div className="w-[48%]">
                      <Text
                        className="text-gray-600_03 text-xs w-auto"
                        size="txtMontserratRomanSemiBold12"
                      >
                        Nuitée:
                      </Text>
                      <Input
                        type="number"
                        name="input"
                        placeholder="00"
                        className="font-inter p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
                        wrapClassName="border border-gray-200_01 border-solid mt-[11px] rounded-lg w-full"
                        shape="round"
                        color="gray_50"
                        size="lg"
                        onChange={handleNightPriceChange}
                      />
                    </div>
                  </div>
                </div>

                <div className=" my-4 w-full">
                  <p className="text-bold mt-4 mb-3">Jour de prestation :</p>
                  <div className="flex justify-between items-center">


                    <div className="w-[48%]">
                      <Text
                        className="text-gray-600_03 text-xs w-auto"
                        size="txtMontserratRomanSemiBold12"
                      >
                        Week-end:
                      </Text>
                      <Input
                        type="number"
                        name="input"
                        className="font-inter p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
                        wrapClassName="border border-gray-200_01 border-solid mt-[11px] rounded-lg w-full"
                        shape="round"
                        color="gray_50"
                        size="lg"
                        placeholder="00"
                        onChange={handleWeekendPriceChange}
                      />
                    </div>

                    <div className="w-[48%]">
                      <Text
                        className="text-gray-600_03 text-xs w-auto"
                        size="txtMontserratRomanSemiBold12"
                      >
                        Jour férié:
                      </Text>
                      <Input
                        type="number"
                        name="input"
                        className="font-inter p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
                        wrapClassName="border border-gray-200_01 border-solid mt-[11px] rounded-lg w-full"
                        shape="round"
                        color="gray_50"
                        size="lg"
                        placeholder="00"
                        onChange={handleHolidayPriceChange}
                      />
                    </div>
                  </div>
                </div>
              </div>


              <div className="mb-4 mt-5 w-[100%]">
                <div className="flex justify-between">
                <h1 className="my-3">Calculateur de coût de déplacement</h1>
                
                <div
                        onClick={addDistanceBlock}
                        className="bg-gray-50 flex flex-col items-start justify-start md:ml-[0] ml-[7px] pl-1 pr-4 py-1 rounded-lg w-auto w-[35%]"
                      >
                        <div className="flex flex-row gap-4 items-center justify-start w-auto">
                          <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-col h-8 items-center justify-start p-1 rounded-lg w-8">
                            <div className="bg-gray-100_02 flex flex-col h-6 items-center justify-start rounded w-6">
                              <Img
                                className="h-6 rounded w-6"
                                src="../images/img_editaddplus.svg"
                                alt="editaddplus"
                             />
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="text-[13px] text-gray-900_02 w-auto"
                              size="txtInterMedium13"
                            >
                              Ajouter un bloc
                            </Text>
                          </div>
                        </div>
                      </div>
                </div>

                {distances.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <div className="w-[48%] relative">
                      <Text
                        className="text-gray-600_03 text-xs w-auto"
                        size="txtMontserratRomanSemiBold12"
                      >
                        Distance (km):
                      </Text>
                      <Input
                        type="number"
                        name="input"
                        className="font-inter p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
                        wrapClassName="border border-gray-200_01 border-solid mt-[11px] rounded-lg w-full"
                        shape="round"
                        color="gray_50"
                        size="lg"
                        placeholder="00"
                        onChange={(e) => handleChange(index, "distance", Number(e))}
                      />
                    </div>

                    <div className="w-[48%]">
                    
                      <Text
                        className="text-gray-600_03 text-xs w-auto"
                        size="txtMontserratRomanSemiBold12"
                      >
                        Cout (DT):
                      </Text>
                      <Input
                        type="number"
                        name="input"
                        className="font-inter p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
                        wrapClassName="border border-gray-200_01 border-solid mt-[11px] rounded-lg w-full"
                        shape="round"
                        color="gray_50"
                        size="lg"
                        placeholder="00"
                        onChange={(e) => handleChange(index, "cost", Number(e))}
                        />
                    </div>
                  </div>
                ))}

                
              </div>

              <div className="mb-4 mt-5 w-[100%]">
                <div className="flex justify-between">
                <h1 className="my-3">Ajouter des services extra :</h1>
                
                <div
                        onClick={addExtraBlock}
                        className="bg-gray-50 flex flex-col items-start justify-start md:ml-[0] ml-[7px] pl-1 pr-4 py-1 rounded-lg w-auto w-[35%]"
                      >
                        <div className="flex flex-row gap-4 items-center justify-start w-auto">
                          <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-col h-8 items-center justify-start p-1 rounded-lg w-8">
                            <div className="bg-gray-100_02 flex flex-col h-6 items-center justify-start rounded w-6">
                              <Img
                                className="h-6 rounded w-6"
                                src="../images/img_editaddplus.svg"
                                alt="editaddplus"
                             />
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="text-[13px] text-gray-900_02 w-auto"
                              size="txtInterMedium13"
                            >
                              Ajouter un bloc
                            </Text>
                          </div>
                        </div>
                      </div>
                </div>

                {extra.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <div className="w-[48%] relative">
                      <Text
                        className="text-gray-600_03 text-xs w-auto"
                        size="txtMontserratRomanSemiBold12"
                      >
                        Service Extra:
                      </Text>
                      <Input
                        type="text"
                        name="input"
                        className="font-inter p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
                        wrapClassName="border border-gray-200_01 border-solid mt-[11px] rounded-lg w-full"
                        shape="round"
                        color="gray_50"
                        size="lg"
                        placeholder="service"
                        onChange={(e) => handleChangeExtra(index, "extra", e)}
                      />
                    </div>

                    <div className="w-[48%]">
                    
                      <Text
                        className="text-gray-600_03 text-xs w-auto"
                        size="txtMontserratRomanSemiBold12"
                      >
                        Cout (DT):
                      </Text>
                      <Input
                        type="number"
                        name="input"
                        className="font-inter p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
                        wrapClassName="border border-gray-200_01 border-solid mt-[11px] rounded-lg w-full"
                        shape="round"
                        color="gray_50"
                        size="lg"
                        placeholder="00"
                        onChange={(e) => handleChangeExtra(index, "price", Number(e))}
                        />
                    </div>
                  </div>
                ))}

                
              </div>

              <div className="mb-4 mt-5 w-[100%]">
                <div className="flex justify-between">
                <h1 className="my-3">Spécification Préstataire</h1>
                
                <div
                        onClick={addSpeciBlock}
                        className="bg-gray-50 flex flex-col items-start justify-start md:ml-[0] ml-[7px] pl-1 pr-4 py-1 rounded-lg w-auto w-[35%]"
                      >
                        <div className="flex flex-row gap-4 items-center justify-start w-auto">
                          <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-col h-8 items-center justify-start p-1 rounded-lg w-8">
                            <div className="bg-gray-100_02 flex flex-col h-6 items-center justify-start rounded w-6">
                              <Img
                                className="h-6 rounded w-6"
                                src="../images/img_editaddplus.svg"
                                alt="editaddplus"
                             />
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="text-[13px] text-gray-900_02 w-auto"
                              size="txtInterMedium13"
                            >
                              Ajouter un bloc
                            </Text>
                          </div>
                        </div>
                      </div>
                </div>
               
                {specification.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <div className="w-[48%] relative">
                      <Text
                        className="text-gray-600_03 text-xs w-auto"
                        size="txtMontserratRomanSemiBold12"
                      >
                        
                      </Text>
                      <Input
                        type="text"
                        name="input"
                        className="font-inter p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
                        wrapClassName="border border-gray-200_01 border-solid mt-[11px] rounded-lg w-full"
                        shape="round"
                        color="gray_50"
                        size="lg"
                        placeholder="00"
                        onChange={(e) => handleChangeSeci(index, "specification",e)}
                      />
                    </div>

                 
                  </div>
                ))}

                
              </div>

            </div>

            <Button
              onClick={() => handleSubmit()}
              class="border border-gray-200_01 border-solid cursor-pointer flex items-center justify-center font-medium min-w-[115px] rounded-lg text-[13px] text-center p-[9px]"
              color="black"
              size="sm"
              variant="fill"
            >
              Enregistrer
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrescreatproduitPage;
