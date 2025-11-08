import SmsIcon from "@mui/icons-material/Sms";
import { Typography } from "@mui/material";

const Branding = () => {
	return (
		<>
			<SmsIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
			<Typography
				variant="h6"
				noWrap
				component="a"
				href="#app-bar-with-responsive-menu"
				sx={{
					mr: 2,
					display: { xs: "none", md: "flex" },
					fontFamily: "monospace",
					fontWeight: 700,
					letterSpacing: ".3rem",
					color: "inherit",
					textDecoration: "none",
				}}
			>
				iChat
			</Typography>
		</>
	);
};

export default Branding;
