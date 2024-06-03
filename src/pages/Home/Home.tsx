import React, { useState } from 'react';
import './home.css';
import Servers from '../../components/Home/Servers/Servers';
import Channels from '../../components/Home/Channels/Channels';

export default function Home() {
	const [selectedServerId, setSlectedServerId] = useState('') || null;

	function handleServerSelect(id: string) {
		setSlectedServerId(id);
		console.log(selectedServerId);
	}

	return (
		<section className="home">
			<Servers onServerSelect={handleServerSelect} />
			<Channels serverId={selectedServerId} />
		</section>
	);
}
