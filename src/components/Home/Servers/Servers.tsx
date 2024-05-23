import React from "react";
import "./servers.css"
import { FaDiscord } from 'react-icons/fa6';


export default function Servers(){
    return (
			<aside className="servers">
				<div className="servers__discord">
					<FaDiscord className="servers__discord__logo"/>
				</div>
			</aside>
		);
}