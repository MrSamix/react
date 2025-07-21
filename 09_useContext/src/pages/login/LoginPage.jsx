import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { useAuth } from "../../features/context/AuthContext";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Card = styled(MuiCard)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    width: "100%",
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
        maxWidth: "450px",
    },
    boxShadow:
        "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
    ...theme.applyStyles("dark", {
        boxShadow:
            "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
    }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
    height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
    minHeight: "100%",
    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(4),
    },
    "&::before": {
        content: '""',
        display: "block",
        position: "absolute",
        zIndex: -1,
        inset: 0,
        backgroundImage:
            "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
        backgroundRepeat: "no-repeat",
        ...theme.applyStyles("dark", {
            backgroundImage:
                "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
        }),
    },
}));

const LoginPage = () => {
    const navigate = useNavigate();
    const { login, googleLogin } = useAuth();

    const clientId = "";

    const handleSubmit = (values) => {
        const res = login(values);
        if (res) {
            navigate("/", { replace: true });
        }

        // replace - LoginPage не збережеться в історії вкладки

        // navigate(-1); переміщує по історії назад
        // navigate(1);  переміщує по історії вперед
    };

    const handleGoogleSuccess = (response) => {
        const { credential } = response;
        const userData = jwtDecode(credential);
        const auth = {
            email: userData.email,
            firstName: userData.given_name,
            lastName: userData.family_name,
            avatar: userData.picture,
        };
        googleLogin(auth);
        navigate("/", { replace: true });
    };

    const handleGoogleError = (error) => {
        console.log(error);
    };

    const initValues = {
        email: "",
        password: "",
        rememberMe: true,
    };

    const validScheme = Yup.object({
        email: Yup.string()
            .required("Обово'язкове поле")
            .email("Невірний формат пошти"),
        password: Yup.string()
            .required("Обово'язкове поле")
            .min(6, "Мінімальна довжина 6 символів"),
    });

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: handleSubmit,
        validationSchema: validScheme,
    });

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <CssBaseline enableColorScheme />
            <SignInContainer direction="column" justifyContent="space-between">
                <Card variant="outlined">
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{
                            width: "100%",
                            fontSize: "clamp(2rem, 10vw, 2.15rem)",
                        }}
                    >
                        Логін
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={formik.handleSubmit}
                        noValidate
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            gap: 2,
                        }}
                    >
                        <FormControl>
                            <FormLabel
                                error={
                                    formik.touched.email && formik.errors.email
                                }
                                htmlFor="email"
                            >
                                Пошта
                            </FormLabel>
                            <TextField
                                type="email"
                                name="email"
                                error={
                                    formik.touched.email && formik.errors.email
                                }
                                helperText={
                                    formik.touched.email
                                        ? formik.errors.email
                                        : ""
                                }
                                placeholder="your@email.com"
                                autoComplete="email"
                                autoFocus
                                fullWidth
                                variant="outlined"
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel
                                error={
                                    formik.touched.password &&
                                    formik.errors.password
                                }
                                htmlFor="password"
                            >
                                Пароль
                            </FormLabel>
                            <TextField
                                error={
                                    formik.touched.password &&
                                    formik.errors.password
                                }
                                helperText={
                                    formik.touched.password
                                        ? formik.errors.password
                                        : ""
                                }
                                name="password"
                                placeholder="••••••"
                                type="password"
                                autoComplete="current-password"
                                fullWidth
                                variant="outlined"
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                        </FormControl>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    onChange={formik.handleChange}
                                    checked={formik.values.rememberMe}
                                    name="rememberMe"
                                    color="primary"
                                />
                            }
                            label="Не виходити"
                        />
                        <Button
                            disabled={!formik.isValid}
                            type="submit"
                            fullWidth
                            variant="contained"
                        >
                            Увійти
                        </Button>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <GoogleLogin
                            	theme="outfiled"
                                type="standart"
                                size="large"
                                text="signup_with"
                                shape="pill"
                                ux_mode="popup"
                                logo_alignment="left"
                                useOneTap={false}
                                onSuccess={handleGoogleSuccess}
                                onError={handleGoogleError}
                            />
                        </Box>
                    </Box>
                </Card>
            </SignInContainer>
        </GoogleOAuthProvider>
    );
};

export default LoginPage;
