import React from "react";
import { Hash } from "lucide-react";
import './channelItem.css'
interface Channel {
	id: number;
	name: string;
	type: 'text' | 'audio';
}

interface ChannelItemProps {
	serverId: string;
	channel: Channel;
}


export default function ChannelItem({serverId, channel }: ChannelItemProps) {
	return (
		<article className="channel-Item">
			<li>
				<span>{channel.name}</span>
			</li>
		</article>
	);
}