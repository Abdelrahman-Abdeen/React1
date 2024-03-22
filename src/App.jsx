import React from "react"
import userImg from "./assets/user.png"
import StarIcon from "./comp/starIcon";
import './App.css'
export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    /**
     
Challenge: Move the star image into its own component
It should receive a prop called isFilled that it
uses to determine which icon it will display
Import and render that component, passing the value of
isFavorite to the new isFilled prop.
Don't worry about the abiliity to flip this value quite yet.
Instead, you can test if it's working by manually changing
isFavorite in state above.
*/

//let starIcon = contact.isFavorite ? {fullImg} : {mtImg}

function toggleFavorite() {
    setContact(prevContact => ({
        ...prevContact,
        isFavorite: !prevContact.isFavorite
    }))
    //setStar(prevStar => prevStar === mtImg ? fullImg : mtImg);

}

return (
    <main> 
        <article className="card">
            <img src={userImg} className="card--image" />
            <div className="card--info">
            <StarIcon isFilled={contact.isFavorite} onClick={toggleFavorite} />

                <h2 className="card--name">
                    {contact.firstName} {contact.lastName}
                </h2>
                <p className="card--contact">{contact.phone}</p>
                <p className="card--contact">{contact.email}</p>
            </div>

        </article></main>)
}
