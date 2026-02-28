import { useState } from "react"
import { useNavigate } from "react-router-dom"


const SearchBar = () => {

    const [keyword, setKeyword] = useState([])
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        if (keyword.trim() !== '') {
            navigate(`/search/${keyword}`)
            setKeyword('')
        }
    }

    return (
        <form onSubmit={handleSearch} className="d-flex" role="search">
            <input className="form-control me-2 nav-search" type="search" placeholder="¿Te falta algo más?" aria-label="Search" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
            
            <button className="btn btn-search" type="submit">Buscar</button>
        </form>
    )
}

export {SearchBar}