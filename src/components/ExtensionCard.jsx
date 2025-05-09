import './ExtensionCard.css'

export default function ExtensionCard({logo, name, description, isActive, onRemove, changeState}) {
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
                <button className="text-6" onClick={() => onRemove(name)}>Remove</button>
                <button className={`toggle-button ${isActive && 'on'}`} onClick={() => changeState(name)}>
                </button>
            </div>
        </div>
    )
}

