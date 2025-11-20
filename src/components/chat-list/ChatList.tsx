import { Divider, Stack } from "@mui/material";
import List from "@mui/material/List";
import ChatListHeader from "./ChatListHeader";
import ChatListItem from "./ChatListItem";

const ChatList = () => {
	return (
		<Stack>
			<ChatListHeader />
			<Divider />
			<List
				sx={{
					width: "100%",
					maxWidth: 360,
					bgcolor: "background.paper",
					maxHeight: "80vh",
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
		</Stack>
	);
};

export default ChatList;
