import { useState } from "react";
import { Fragment } from "react";
import { api } from "../api/Api";
import Header from "./Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function NewRestaurant() {
    const [name, setName] = useState()

    function notifySuccess() {
        toast.success('Local adicionado com sucesso', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    function notifyError() {
        toast.error('Ocorreu um erro, tente novamente', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    async function saveNewRestaurant() {
        let menuItems = []
        try {
            await api.post("/restaurants", { name, menuItems })
            notifySuccess()
        } catch (error) {
            notifyError()
        }
    }

    return (
        <Fragment>

            <div className="new-restaurant">
                <ToastContainer />
                <div className="new-restaurant-container">

                    <Header backButtonFlag={true}></Header>

                    <h1>Adicionar Local</h1>

                    <div className="new-restaurant-content">

                        <label htmlFor="name-input">Nome</label>

                        <div className="name-container">
                            <input id='name-input' type="text" maxLength="20" onChange={(e) => { setName(e.target.value) }}></input>
                        </div>


                        <button onClick={saveNewRestaurant}>Salvar</button>

                    </div>
                </div>
            </div>
        </Fragment>
    )

}