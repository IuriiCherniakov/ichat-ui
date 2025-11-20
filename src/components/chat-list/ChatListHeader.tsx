import AddCircle from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const ChatListHeader = () => {
	return (
		<AppBar position="static" color="transparent">
			<Toolbar>
				<IconButton size="large" edge="start">
					<AddCircle />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default ChatListHeader;
