import React from "react";

interface Server {
	id: string;
	name: string;
	logo: string;
}

interface ServerDetailsProps {
	server: Server;
}

export default function ServerDetails({server}: ServerDetailsProps){
    //test display  
    const channels = [
				{ id: 1, name: 'General', type: 'text' },
				{ id: 2, name: 'Random', type: 'text' },
				{ id: 3, name: 'Music', type: 'audio' },
				{ id: 4, name: 'Gaming', type: 'audio' },
			];
    return(
        <div>
            <h2>{server.name}</h2>
            <h3>Channel</h3>
            <ul>
                {channels.map(channel =>(
                    <li key={channel.id}>
                        {channel.type} {channel.name} 
                    </li>
                ))}
            </ul>
        </div>
    )
}