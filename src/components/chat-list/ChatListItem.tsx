import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

interface ChatListItemProps {}
const ChatListItem = () => {
	return (
		<>
			<ListItem alignItems="flex-start">
				<ListItemAvatar>
					<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
				</ListItemAvatar>
				<ListItemText
					primary="Brunch this weekend?"
					secondary={
						<>
							<Typography
								component="span"
								variant="body2"
								sx={{ color: "text.primary", display: "inline" }}
							>
								Ali Connors
							</Typography>
							{" — I'll be in your neighborhood doing errands this…"}
						</>
					}
				/>
			</ListItem>
		</>
	);
};

export default ChatListItem;
