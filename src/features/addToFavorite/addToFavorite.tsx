import React from "react";
import Button from "@/shared/button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './addToFavorite.css';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useAppDispatch } from "@/store/hooks";
import { addFavorite } from "@/store/reducers/productsSlice";
import { ProductItem } from "@/store/store.options";

const AddToFavorite: React.FC<{ id: number }> = ({ id }) => {
    const favorites = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites") || '')
    : {}
    const dispatch = useAppDispatch()

    const addToFavorite = () => dispatch(addFavorite(id))

    return (
        <Button className="btn__favorite" onClick={addToFavorite}>
            <FontAwesomeIcon icon={faHeart} color={favorites[id] ? 'red' : 'black'} />
        </Button>
    )
}

export default AddToFavorite
