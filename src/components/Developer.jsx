const CreateUser = ({name, age, country}) =>{
    return (
        <div className="divUser">
            <h1 className="nameUser">Dev: {name}</h1>
            <p className="ageUser">Idade: {age}</p>
            <p className="countryUser">País: {country}</p>
        </div>
    )
}

export default CreateUser;


