import List from "@mui/material/List";
import ChatListItem from "./ChatListItem";

const ChatList = () => {
	return (
		<List
			sx={{
				width: "100%",
				maxWidth: 360,
				bgcolor: "background.paper",
				maxHeight: "90vh",
				overflow: "auto",
			}}
		>
			{/*TODO: make it dynamic			*/}
			<ChatListItem />
			<ChatListItem />
			<ChatListItem />
			<ChatListItem />
			<ChatListItem />
			<ChatListItem />
			<ChatListItem />
			<ChatListItem />
			<ChatListItem />
			<ChatListItem />
			<ChatListItem />
			<ChatListItem />
			<ChatListItem />
			<ChatListItem />
		</List>
	);
};

export default ChatList;
