import {useRef, useState} from "react";
import extensiondata from '../data.json'

import './ExtensionList.css'
import ExtensionCard from "./ExtensionCard.jsx";

export default function ExtensionList() {

    const [filter, setFilter] = useState('all')
    const [extensions, setExtensions] = useState(extensiondata);
    const srNotification = useRef(null)

    const filteredExtensions = extensions.filter((extension) => {
        switch (filter) {
            case 'all':
                return true
            case 'active':
                return extension.isActive
            case 'inactive':
                return !extension.isActive
        }
    })

    function handleRemove(name) {
        let newState = extensions.filter((extension) => {
            return extension.name !== name
        })

        srNotification.current.textContent = `${name} Removed`

        setExtensions(newState)

        setTimeout(() => {
            srNotification.current.texContent = ""
        })
    }

    function handleCardState(name) {
        let newState = extensions.map((extension) => {
            if (extension.name === name) {
                extension.isActive = !extension.isActive
            }
            return extension
        })

        srNotification.current.textContent = `${name} extension disabled`
        setExtensions(newState)
        setTimeout(() => {
            srNotification.current.texContent = ""
        })

    }

    return (
        <div className="extension-list">
            <div aria-live="polite" className="sr-notification" ref={srNotification}></div>
            <div className="head">
                <h1 className="text-1">Extensions List</h1>
                <div tabIndex="0" aria-label="Filter Extension List" className="filter">
                    <button aria-label="Select All" className={`text-3 ${filter === 'all' && 'selected'}`} onClick={() => setFilter('all')}>All</button>
                    <button aria-label="Select Active" className={`text-3 ${filter === 'active' && 'selected'}`} onClick={() => setFilter('active')}>Active</button>
                    <button aria-label="Select Inactive" className={`text-3 ${filter === 'inactive' && 'selected'}`} onClick={() => setFilter('inactive')}>Inactive</button>
                </div>
            </div>
            <div className="extensions">
                {
                    filteredExtensions.map((extension) => {
                        return (
                            <ExtensionCard onRemove={handleRemove} changeState={handleCardState} {...extension}/>
                        )
                    })
                }
            </div>
        </div>
    )
}