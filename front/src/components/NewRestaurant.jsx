import { useState } from "react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/Api";
import Header from "./Header";

export default function NewRestaurant() {
    const navigate = useNavigate()
    const [name, setName] = useState('')


    async function saveNewRestaurant() {
        let menuItems = []

        try {
            await api.post("/restaurants", { name, menuItems })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Fragment>

            <div className="new-restaurant">

                <div className="new-restaurant-container">

                    <Header backButtonFlag={true}></Header>

                    <h1>Adicionar Local</h1>

                    <div className="name-container">

                        <input type="text" onChange={(e) => { setName(e.target.value) }}></input>
                    </div>


                    <button onClick={saveNewRestaurant}>Salvar</button>

                </div>
            </div>
        </Fragment>
    )

}