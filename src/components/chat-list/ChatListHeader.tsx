import AddCircle from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

interface ChatListHeaderProps {
	handleAddChat: () => void;
}
const ChatListHeader = ({ handleAddChat }: ChatListHeaderProps) => {
	return (
		<AppBar position="static" color="transparent">
			<Toolbar>
				<IconButton onClick={handleAddChat} size="large" edge="start">
					<AddCircle />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default ChatListHeader;
