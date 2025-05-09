import './ExtensionCard.css'

export default function ExtensionCard({logo, name, description, isActive}) {
    return (
        <div className="card">
            <div className="card-body">
                <img className="logo" src={logo} alt="" />
                <div >
                    <span className="text-2 name">{name}</span>
                    <span className="text-5 description">{description}</span>
                </div>
            </div>
            <div className="card-action">
                <button className="text-6">Remove</button>
                <Toggle state={isActive}/>
            </div>
        </div>
    )
}

function Toggle({state}) {

    return (
        <button className={`toggle-button ${state && 'on'}`}>

        </button>
    )
}