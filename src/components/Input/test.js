import React, { useState } from "react";
import styles from "./TextField.module.scss";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { P12ERROR } from "../../TXT/TXT";

function TextField({
placeholder = "",
className = "",
value="",
onChange = () => { },
name = "",
label = "",
type = "text",
control
}) {

const [required, setRequired] = useState("");
const [pattern, setPattern] = useState({ value: null, message: "" });
const [min, setMin] = useState(null);
const [max, setMax] = useState(null);
const [minLength, setMinLength] = useState(null);
const [maxLength, setMaxLength] = useState(null);
const [pwd,setPwd] = useState(false)

useEffect(() => {
    if (type === "email") {
     setRequired("Email required");
     setPattern({ value: /\S+@\S+\.\S+/, message: "Format invalide !" });
     setMin(null);
     setMax(null);
     setMinLength(null);
    } else if (type === "day") {
     setPattern({ value: /^\d+$/, message: "Format invalide !" });
     setMin(1);
     setMax(31);
    }else if (type === "months") {
     setPattern({ value: /^\d+$/, message: "Format invalide !" });
     setMin(1);
     setMax(12);
    } else if (type === "year") {
     setPattern({ value: /^\d+$/, message: "Format invalide !" });
     setMin(1950);
     setMax(2023);
    } else if (type === "password") {
     setRequired("Mot de passe doit être supérieur à 6");
     setMinLength(6);
    } else if (type === "text") {
     setMinLength(3);

    }else if (type === "iban") {
     setPattern({ value:/^FR[0-9]{2}[A-Z0-9]{5}[0-9]{11}\d{2}$/, message: "Format invalide !" });

    }


}, [type]);


useEffect(() => {

    console.log({
     required: required,
     pattern: pattern,
     min: min,
     max: max,
     minLength: minLength,
    });

}, [])

useEffect(()=>{
    console.log(pwd);
},[pwd])

return (
    <>
     {control ?
        <div className={`${styles.main} ${className}`}>
         <label htmlFor="">{label}</label>
         <Controller
            name={name}
            className={styles['input']}
            rules={{
             required: required,
             pattern: pattern,
             min: { value: min, message: `Valeur minimale: ${min}` },
             max: { value: max, message: `Valeur maximale: ${max}` },
             minLength: { value: minLength, message: `Longueur doit être: ${minLength}` },
             maxLength: { value: maxLength, message: `Longueur doit être: ${maxLength}` },
            
            }}
            defaultValue={value}
            control={control}
            render={({ field, fieldState }) => {
             return(
             <div>
                 {
                    type =="password" &&
                    <div className={styles['eye']} onClick={e => setPwd(!pwd)}>
                     <i class="fa-solid fa-eye"></i>
                    </div>
                 }
                <input
                 className={styles.textarea}
                 {...field}

                 placeholder={placeholder}
                 name={name}
                 type={pwd ? "text" : type}
                                
                />
                {fieldState.error && <P12ERROR>{fieldState.error.message}</P12ERROR>}
             </div>
            )}

            }
         />

        </div> :
         <div className={`${styles.main} ${className}`}>
         <label htmlFor="">{label}</label>
        <div>
            <input
             className={styles.textarea}
             placeholder={placeholder}
             name={name}
             type={pwd ? "text" : type}
            
            />
         </div>
         </div>
     }
    </>


);
}

export default TextField;