import { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import { api } from "../api/Api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NewDish() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const restaurant = location.state?.restaurant

    useEffect(() => {
        verifyRestaurantState()
    }, [])

    function verifyRestaurantState() {
        if (restaurant === undefined) {
            navigate('/')
        }
    }
    function notifySuccess() {
        toast.success('Prato adicionado com sucesso', {
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

    async function saveNewDish() {
        try {
            const menuItems = restaurant.menuItems
            const _id = restaurant._id

            const newMenuItem = {
                name: name,
                price: price,
                description: description
            }

            menuItems.push(newMenuItem)
            await api.put('/restaurants', { menuItems, _id })
            
            notifySuccess()
        } catch (error) {
            notifyError()
        }
    }

    return (
        <Fragment>
            {
                restaurant &&

                <div className="new-dish">
                    <ToastContainer />
                    <div className="new-dish-container">
                        <Header backButtonFlag={true}></Header>
                        <div className="new-dish-content">
                            <h1>{restaurant.name}</h1>

                            <div className="new-dish-form">

                                <label htmlFor="name-input">Nome do prato</label>
                                <input
                                    type="text"
                                    id="name-input"
                                    className="name-input"
                                    value={name}
                                    placeholder="Prato"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <div className="price-input-container">
                                    <label htmlFor="price-input">Valor</label>

                                    <label htmlFor="price-input" className="label-price-input" >
                                        <p>R$</p>
                                        <input
                                            type="number"
                                            id='price-input'
                                            value={price}
                                            className="price-input"
                                            placeholder="0,00"
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                    </label>

                                </div>

                                <label htmlFor="description-text-area">Descrição do prato</label>
                                <textarea cols="30"
                                    id="description-text-area"
                                    rows="10"
                                    value={description}
                                    maxLength='200'
                                    placeholder="Insira uma descrição"
                                    onChange={(e) => setDescription(e.target.value)}>
                                </textarea>

                                <p className="description-text">*A descrição deve conter até 200 caracteres.</p>
                                <button className="save-button" onClick={saveNewDish}>Salvar</button>

                            </div>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )
}