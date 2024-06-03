import React, { useState } from 'react';
import './channels.css';
import ChannelItem from '../ChannelItem/ChannelItem';
import data from '../../../data/servers.json';
import { ChevronDown } from 'lucide-react';
import { Plus } from 'lucide-react';

interface ChannelProps {
	serverId: string;
}
interface Channel {
	id: number;
	name: string;
	type: 'text' | 'audio';
}
export default function Channels({ serverId }: ChannelProps) {
	//test
	const [selectedServerId, setSlectedServerId] = useState('') || null;

	const server = data.find((server) => server.id === serverId);

    if(!server){
        return null
    }

	const channels: Channel[] = [
		{ id: 1, name: 'General', type: 'text' },
		{ id: 2, name: 'Random', type: 'text' },
		{ id: 3, name: 'Music', type: 'audio' },
		{ id: 4, name: 'Gaming', type: 'audio' },
	];

	return (
		<section className="channels">
			<div className="channels__info">
				<h2 className="channels__info__title">{server.name}</h2>
				<ChevronDown />
			</div>
			<div className="channels__event">Events</div>
			<div className="channels__content">
				<div className="channels__content__item text">
					<div className="channels__content__item__header">
						<span>
							<ChevronDown />
							TEXT CHANNELS
						</span>
						<Plus />
					</div>
					<ul>
						{channels.map((channel) => (
							<ChannelItem
								key={channel.id}
								serverId={serverId}
								channel={channel}
							/>
						))}
					</ul>
				</div>
				<div className="channels__content__item voice">
					<div className="channels__content__item__header">
						<span>
							<ChevronDown />
							VOICE CHANNELS
						</span>
						<Plus />
					</div>
					<ul>
						{channels.map((channel) => (
							<ChannelItem
								key={channel.id}
								serverId={serverId}
								channel={channel}
							/>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
