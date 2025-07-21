import { Button, FormControl, FormHelperText, FormLabel, Input, TextField, Typography } from "@mui/material";
import { useAuth } from "../../features/context/AuthContext";
import { Box } from '@mui/system';

function ProfilePage() {
  
    const { user, changePassword } = useAuth();
    
    const handleSubmit = (event) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        event.preventDefault();
        const oldPassword = document.getElementById('oldPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        if (oldPassword === "" || newPassword === "") {
            alert("Please fill in both fields.");
            return;
        }
        if (oldPassword === newPassword) {
            alert("New password must be different from the old password.");
            return;
        }
        if (oldPassword !== user.password) {
            alert("Old password is incorrect.");
            return;
        }
        if (oldPassword.length < 6 || newPassword.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }
        if (!users) {
            alert("No users found.");
            return;
        }
        const userIndex = users.findIndex(u => u.email === user.email);
        if (userIndex === -1) {
            alert("User not found.");
            return;
        }
        users[userIndex].password = newPassword;
        localStorage.setItem("users", JSON.stringify(users));
        changePassword(newPassword);
        alert("Password updated successfully.");
        document.getElementById('oldPassword').value = '';
        document.getElementById('newPassword').value = '';
    }
  
  return (
    <div>
        <Typography
            component="h1"
            variant="h4"
            sx={{
                width: "100%",
                fontSize: "clamp(2rem, 10vw, 2.15rem)",
                textAlign: "center",
                fontWeight: "bold",
            }}
        >
            Profile Page
        </Typography>
        {user ? (
            <div>
                <Typography
                    component="h6"
                    variant="h6"
                    sx={{
                        width: "100%",
                    }}
                >
                    <b>Email:</b> {user.email}
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "20px auto",
                        justifySelf: "center",
                        gap: 2,
                    }}
                >
                    <Typography
                        component="h5"
                        variant="h5"
                        sx={{
                            textAlign: "center",
                            margin: "20px 40px",
                        }}
                    >
                        Change password
                    </Typography>
                    <FormControl defaultValue="" required>
                        <FormLabel>Current password:</FormLabel>
                        <TextField name="oldPassword"
                                id="oldPassword"
                                placeholder="••••••"
                                type="password"
                                fullWidth
                                variant="outlined"
                        />
                        <FormHelperText />
                    </FormControl>
                    <FormControl defaultValue="" required>
                        <FormLabel>New password:</FormLabel>
                        <TextField name="newPassword"
                                id="newPassword"
                                placeholder="••••••"
                                type="password"
                                fullWidth
                                variant="outlined"
                        />
                        <FormHelperText />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                    >
                        Update
                    </Button>
                </Box>
            </div>
        ) : (
            <p>Please log in to view your profile.</p>
        )}
    </div>
  );
}

export default ProfilePage