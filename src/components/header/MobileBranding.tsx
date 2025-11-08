import SmsIcon from "@mui/icons-material/Sms";
import Typography from "@mui/material/Typography";
import router from "../Router";

const MobileBranding = () => {
	return (
		<>
			<SmsIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

			<Typography
				variant="h5"
				noWrap
				component="a"
				onClick={() => router.navigate("/")}
				href="#app-bar-with-responsive-menu"
				sx={{
					mr: 2,
					cursor: "pointer",
					display: { xs: "flex", md: "none" },
					flexGrow: 1,
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
export default MobileBranding;
