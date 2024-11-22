

import React, { useState } from "react";
import "./style.css";
import { Button, Img, Input, Text } from "components";

const AddVariation = ({ onclick }) => {
    const [packs, setPacks] = useState([
        { title: '', description: '', price: 0, services: [''] }
    ]);

    const handlePackChange = (index, field, value) => {
        const updatedPacks = [...packs];
        updatedPacks[index][field] = value;
        setPacks(updatedPacks);
    };

    const handleServiceChange = (packIndex, serviceIndex, value) => {
        const updatedPacks = [...packs];
        updatedPacks[packIndex].services[serviceIndex] = value;
        setPacks(updatedPacks);
    };

    const addService = (packIndex) => {
        const updatedPacks = [...packs];
        if (updatedPacks[packIndex].services.length < 10) {
            updatedPacks[packIndex].services.push('');
            setPacks(updatedPacks);
        } else {
            alert('You can only add up to 10 services.');
        }
    };

    const addPack = () => {
        if (packs.length < 3) {
            setPacks([...packs, { title: '', description: '', price: 0, services: [''] }]);
        } else {
            alert('You can only add up to 3 packs.');
        }
    };

    const deletePack = (index) => {
        if (packs.length > 1) {
            const updatedPacks = packs.filter((_, i) => i !== index);
            setPacks(updatedPacks);
        } else {
            alert('At least one pack is required.');
        }
    };

    function handleData() {
        // Basic validation to check if all required fields are filled
        for (let pack of packs) {
            if (!pack.title || !pack.description || !pack.price) {
                alert('All fields (Title, Description, and Price) are required.');
                return;
            }
        }
        onclick(packs);
    }

    return (
        <div className="font-inter sm:gap-10 mt-[43px] w-full">
            <div className="w-auto flex  justify-content-between w-[100%]">
                <div className="flex justify-between my-3 items-center">
                    <Text className="text-gray-600_03 text-md w-auto" size="txtMontserratRomanSemiBold12">
                        Ajouter un service :
                    </Text>
                    <div
                        onClick={addPack}
                        className="bg-gray-50  flex flex-col items-start justify-start md:ml-[0]  p-2 rounded-lg w-auto "
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

                        </div>
                    </div>
                </div>

            </div>
            <div className="flex gap-[3%]">
                {packs.map((pack, packIndex) => (
                    <div key={packIndex} className="w-[31%]">
                        <div className="my-4">
                            <Text className="text-gray-600_03 text-xs w-auto" size="txtMontserratRomanSemiBold12">
                                Titre :
                            </Text>
                            <input
                                name="title"
                                type="text"
                                placeholder="Pack title"
                                value={pack.title}
                                onChange={(e) => handlePackChange(packIndex, 'title', e.target.value)}
                                className="p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
                                shape="round"
                                color="gray_50"
                                style={{ background: ' rgb(249, 250, 251)', borderColor: 'rgb(229, 231, 235)', padding: "11px", borderRadius: "7px" }}

                                size="lg"
                                required
                            />
                        </div>
                        <div className="my-4">
                            <Text className="text-gray-600_03 text-xs w-auto" size="txtMontserratRomanSemiBold12">
                                Description :
                            </Text>
                            <textarea
                                name="description"
                                placeholder="Description"
                                rows={4}
                                value={pack.description}
                                onChange={(e) => handlePackChange(packIndex, 'description', e.target.value)}
                                style={{ resize: "none", background: "rgb(249 250 251 / var(--tw-bg-opacity))", padding: "11px" }}
                                className="font-inter border border-gray-200_01 border-solid mt-[9px] rounded-lg w-full p-0 placeholder:text-gray-900_02 text-left text-sm"
                                required
                            ></textarea>
                        </div>
                        <div className="my-4">
                            <Text className="text-gray-600_03 text-xs w-auto" size="txtMontserratRomanSemiBold12">
                                Prix :
                            </Text>
                            <input
                                name="price"
                                type="number"
                                placeholder="0"
                                value={pack.price}
                                onChange={(e) => handlePackChange(packIndex, 'price', e.target.value)}
                                className="p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
                                shape="round"
                                style={{ background: ' rgb(249, 250, 251)', borderColor: 'rgb(229, 231, 235)', padding: "11px", borderRadius: "7px" }}

                                color="gray_50"
                                size="lg"
                                required
                            />
                        </div>
                        <div className="my-4">
                            <div className="flex justify-between my-3 items-center">
                                <Text className="text-gray-600_03 text-md w-auto" size="txtMontserratRomanSemiBold12">
                                    Ajouter un service :
                                </Text>
                                <div
                                    onClick={() => addService(packIndex)}
                                    className="bg-gray-50  flex flex-col items-start justify-start md:ml-[0]  p-2 rounded-lg w-auto "
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

                                    </div>
                                </div>
                            </div>
                            {pack.services.map((service, serviceIndex) => (

                                <input
                                    key={serviceIndex}
                                    name="service"
                                    type="text"
                                    placeholder="Service description"
                                    value={service}
                                    onChange={(e) => handleServiceChange(packIndex, serviceIndex, e.target.value)}
                                    className="p-0  placeholder:text-gray-900_02 text-left text-sm w-full my-3 "
                                    shape="round"
                                    color="gray_50"
                                    style={{ background: ' rgb(249, 250, 251)', borderColor: 'rgb(229, 231, 235)', padding: "11px", borderRadius: "7px" }}

                                    size="lg"
                                    required
                                />
                            ))}
                        </div>
                        <div className="bg-red-300 flex flex-col h-[52px] mt-4 inset-[0] items-center justify-center m-auto p-[15px] rounded-[5px] w-[100%]">
                            <Button onClick={() => deletePack(packIndex)} className="m-auto text-base w-auto" size="txtMontserratMedium16WhiteA700" color="black">
                                suprrimer ce pack
                            </Button>
                        </div>

                    </div>
                ))}
            </div>



            <button onClick={handleData}>Send</button>
        </div>
    );
};

export default AddVariation;
