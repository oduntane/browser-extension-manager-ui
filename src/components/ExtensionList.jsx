import {useState} from "react";
import extensiondata from '../data.json'

import './ExtensionList.css'
import ExtensionCard from "./ExtensionCard.jsx";

export default function ExtensionList() {

    const [filter, setFilter] = useState('all')
    const [extensions, setExtensions] = useState(extensiondata);

    return (
        <div className="extension-list">
            <div className="head">
                <h1 className="text-1">Extensions List</h1>
                <div className="filter">
                    <button className={`text-3 ${filter === 'all' && 'selected'}`} onClick={() => setFilter('all')}>All</button>
                    <button className={`text-3 ${filter === 'active' && 'selected'}`} onClick={() => setFilter('active')}>Active</button>
                    <button className={`text-3 ${filter === 'inactive' && 'selected'}`} onClick={() => setFilter('inactive')}>Inactive</button>
                </div>
            </div>
            <div className="extensions">
                {
                    extensions.map((extension) => {
                        return (
                            <ExtensionCard {...extension}/>
                        )
                    })
                }
            </div>
        </div>
    )
}