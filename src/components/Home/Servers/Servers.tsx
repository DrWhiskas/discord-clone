import React, { useState } from "react";
import "./servers.css"
import { FaDiscord } from 'react-icons/fa6';
import { FaPlus } from 'react-icons/fa6';
import { FaCompass } from 'react-icons/fa6';
import { TfiDownload } from 'react-icons/tfi';
import data from "../../../data/servers.json"
import ServerDetails from "../ServerDetails/ServerDetails";

interface ServerProps {
	onServerSelect: (id: string) => void
}

export default function Servers({ onServerSelect }: ServerProps) {
	const [selectedServerId, setSlectedServerId] = useState('') || null;


	const selectedServer = data.find((server) => server.id === selectedServerId); //find id of the server
	return (
		<aside className="servers">
			<div className="servers__item servers__discord">
				<FaDiscord className="servers__discord__logo" />
			</div>
			<ul className="servers__list">
				{data.map((server, i) => (
					<li
						key={i}
						className="servers__item"
						onClick={() => onServerSelect(server.id)}
					>
						<img
							className="servers__item__logo"
							src={server.logo}
							alt={server.name}
						/>
					</li>
				))}
				<li className="servers__item">
					<FaPlus className="servers__discord__logo server__discord__more" />
				</li>
				<li className="servers__item">
					<FaCompass className="servers__discord__logo server__discord__more" />
				</li>
				<li className="servers__item">
					<TfiDownload className="servers__discord__logo server__discord__more" />
				</li>
			</ul>
			{selectedServer && <ServerDetails server={selectedServer} />}
		</aside>
	);
}