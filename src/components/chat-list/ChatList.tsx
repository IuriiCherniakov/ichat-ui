import { Divider, Stack } from "@mui/material";
import List from "@mui/material/List";
import { useState } from "react";
import ChatListAdd from "./chat-list-add/ChatListAdd";
import ChatListHeader from "./ChatListHeader";
import ChatListItem from "./ChatListItem";

const ChatList = () => {
	const [isAddChatModalOpen, setIsAddChatModalOpen] = useState<boolean>(false);
	return (
		<>
			<Stack>
				<ChatListHeader
					handleAddChat={() => {
						console.log("ADD CLICK");
						setIsAddChatModalOpen((prevState) => !prevState);
					}}
				/>
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
			<ChatListAdd
				isOpen={isAddChatModalOpen}
				handleClose={() => setIsAddChatModalOpen(false)}
			/>
		</>
	);
};

export default ChatList;
